'use strict';
var DG = DG || {};

DG.dims = {
  dur: 200
};

DG.runFireball = function() {
  Fireball.run({
//     debug: true,
    defaultScore: 1001, //non-modern browsers
    runs: 3,
    callback: function() {
      if (Fireball.score > 1000){
        DG.dims.dur = 200;
      } else {
        DG.dims.dur = 0;
      }
      if (Fireball.ran) {
        ga('set', 'dimension3', Math.round(Fireball.score / 1000) + 'k');
        ga('send', 'event', 'Fireball', 'Fireball Run', 'Fireball Run: Success', Fireball.score, {nonInteraction: true});
      } else { //workers not supported
        ga('set', 'dimension3', 'No Worker Available');
        ga('send', 'event', 'Fireball', 'Fireball Run', 'Fireball Run: Failed', 0, {nonInteraction: true});
      }
    }
  });
};

$(function() {
  $('html').removeClass('no-js');
  DG.bindEvents();
//   DG.runFireball();
});
