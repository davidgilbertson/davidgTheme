'use strict';
var Fireball = Fireball || {};
Fireball.scores = [];
Fireball.score = 0;

Fireball.newEl = function(tag, opt) {
  tag = tag || 'div';
  var el = document.createElement(tag);
  for (var prop in opt) {
    if (prop.hasOwnProperty) {
      if (prop === 'style') {
        for (var styleProp in opt[prop]) {
          el[prop][styleProp] = opt[prop][styleProp];
        }
      }
      el[prop] = opt[prop];
    }
  }
  return el;
};

Fireball.getMedianScore = function () {
  if (Fireball.scores.length === 0) { return; }
  var scoreArray = Fireball.scores;
  scoreArray.sort();
  var midPoint = Math.floor(scoreArray.length / 2);
  var result;
  if (scoreArray.length % 2) {
    result = scoreArray[midPoint];
  } else {
    result = (scoreArray[midPoint - 1] + scoreArray[midPoint]) / 2.0;
  }
  return Math.round(result);
};

Fireball.log = function(str) {
  if (!document.getElementById('logging-panel')) {
    var logEl = Fireball.newEl('div', {
      id: 'logging-panel',
      style: {
        'position': 'fixed',
        'width': '300px',
        'height': '260px',
        'bottom': '10px',
        'left': '10px',
        'padding': '10px',
        'background': '#111',
        'font-family': 'monospace',
        'font-size': '12px',
        'line-height': '14px',
        'color': '#eee',
        'overflow': 'auto',
        'box-shadow': '2px 2px 20px rgba(0, 0, 0, 0.5)',
        'z-index': '99'
      }
    });
    
    var logH1 = Fireball.newEl('h1', {textContent: 'Fireball'});
    logEl.appendChild(logH1);
    
    var logMedian = Fireball.newEl('p', {id: 'log-median'});
    logEl.appendChild(logMedian);
    
    var logDiv = Fireball.newEl('div', {id: 'log'});
    logEl.appendChild(logDiv);
    
    document.getElementsByTagName('body')[0].appendChild(logEl);
  }

  var median = Fireball.getMedianScore().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  var log = document.getElementById('log');
  if (str === '_finished_') {
    document.getElementById('log-median').textContent = 'Score: ' + median;
    log.style.color = 'grey';
  } else {
    log.innerHTML += '<p> >' + str + '</p>';
  }
};

Fireball.run = function(options) {
  if (!window.Worker) {
    Fireball.ran = false;
    Fireball.score = options.defaultScore || 0;
    options.callback && options.callback();
    return;
  }
  
  options = options || {};
  var debug = options.debug || false;
  var runs = options.runs || 7;
  var count = 0;
  var fbWorker = new Worker(RVProps.templateDir + '/js/fireball_worker.js');
  fbWorker.addEventListener('message', function(e) {
    logScore(e.data);
  }, false);
  
  function logScore (score) {
    score = parseInt(score * 6.1813, 10); //align it roughly with Octane
    Fireball.scores.push(score);
    Fireball.score = Fireball.getMedianScore();
    count++;
    if (debug === true) {
      score = score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      Fireball.log(score);
    }
    if (count < runs) {
      window.setTimeout(function() {
        fbWorker.postMessage('run');
      }, 100);
    } else {
      if (debug === true) {
        Fireball.log('_finished_');
      }
      Fireball.ran = true;
      options.callback && options.callback();
    }
  }
  fbWorker.postMessage('run');
};