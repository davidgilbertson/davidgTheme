'use strict';
var RV = RV || {};

RV.getEl = function(selector){
  var classOrID = selector.replace(/#|\./, '');
//   console.log(classOrID);
  if (selector.indexOf('#') === 0) {
    return document.getElementById(classOrID);
  }
  if (selector.indexOf('.') === 0) {
    return false;
  }
  return document.getElementsByTagName(classOrID)[0];
};

RV.addClass = function(el, str) {
  //TODO check if it's already there
  el.className = el.className + (el.className ? ' ' : '') + str;
};

RV.removeClass = function(el, str) {
  //TODO allow mutiple classes?
  var classList = el.className.split(' ');
  for (var i = 0; i < classList.length; i++) {
    if (classList[i] === str) {
      classList.splice(i, 1);
      el.className = classList.join(' ');
      return true;
    }
  }
  return false; //the class didn't exist.
};

//These two pinched from Modernizr
RV.gotTouch = function() {
  var bool;
  if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
};
RV.gotHistory = function() {
  return !!(window.history && history.pushState);
};

RV.changeURL = function(article) {
  if (!article && !window.location.hash) { return; }
  if (window.location.hash === '#' + article) { return; }
  
  article = article || '';
  if (RV.gotHistory()) { //modern browsers, logic from Modernizr code
    if (window.history.state) {
      window.history.replaceState({article: article}, article, '#' + article);
    } else {
      window.history.pushState({article: article}, article, '#' + article);
    }
  } else {
    window.location.hash = '#' + article;
  }
};

RV.articleFromHash = function() {
  var article = window.location.hash.split('#')[1];
  var $article = $('#' + article);
  if ($article.length === 0) { return null; }
  
  return $article;
};

RV.submitContactForm = function() {
  var nameEl = $('#contact-name');
  var emailEl = $('#contact-email');
  var phoneEl = $('#contact-phone');
  var messageEl = $('#contact-message');
  var errorMsgs = [];

  var emailCount = (emailEl.val().match(/@/g) || []).length;
  var emailValid = /.+@.+/.test(emailEl.val()); //false positives but no negatives

  if (!emailEl.val() || emailCount > 1 || !emailValid) {
    emailEl.addClass('invalid');
    emailEl.click(function() {
      $(this).removeClass('invalid');
    });
    errorMsgs.push('Please enter a single valid email address.');
  }
  if (!messageEl.val()) {
    messageEl.addClass('invalid');
    messageEl.on('input', function() {
      if (!$(this).val()) {
        $(this).addClass('invalid');
      } else {
        $(this).removeClass('invalid');
      }
    });
    errorMsgs.push('Please enter a message.');
  }
  
  if (errorMsgs.length > 0) {
    var gaMsg = 'Name: ' + nameEl.val() + ', Email: ' + emailEl.val() + ', Phone: ' + phoneEl.val();
    gaMsg += ', Message: ' + messageEl.val() + ', Error: ' + errorMsgs.join(' ');
    ga('send', 'event', 'Contact Form', 'Contact Form Fail', gaMsg, {'nonInteraction': true});
    //TODO I don't like alerts, make the button say the messages
    alert(errorMsgs.join('\n'));
  } else {
    $(document).one('click', function() {
      $('#contact-submit-btn').text('Submit');
    });
    $('.invalid').removeClass('invlaid');
    var phone = phoneEl.val() || 'None Given';
    var postData = {
      action: 'post_message',
      name: nameEl.val() || 'Someone',
      email: emailEl.val(),
      phone: phone,
      msg: messageEl.val()
    };
    $('#contact-submit-btn').text('Submitting...');
    $.post(
      RVProps.ajaxurl,
      postData,
      function(res) {
        res = JSON.parse(res);
        if (res.success) {
          $('#contact-submit-btn').text('Message sent. Thanks!');
        }
        if (res.error) {
          alert(res.error);
        }
      }
    );
    
    $(document).one('click', function() {
      $('#contact-submit-btn').text('Submit');
    });
  }
};

