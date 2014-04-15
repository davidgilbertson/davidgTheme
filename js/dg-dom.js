'use strict';
var DG = DG || {};

DG.toggleMenu = function(cb) {
  //margin-top below must be the SASS variable $header-height x 3
  DG.menuVisible = !DG.menuVisible;
  if (DG.menuVisible) {
    $('#body-wrapper').animate({'margin-top': 150}, DG.dims.dur * 2, function() {
      cb && cb();
    });
  } else {
    $('#body-wrapper').animate({'margin-top': 0}, DG.dims.dur, function() {
      cb && cb();
    });
  }
};
DG.showHiddenText = function() {
  $('#hidden-text').fadeToggle();
};