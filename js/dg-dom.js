'use strict';
var DG = DG || {};

DG.toggleMenu = function(cb) {
  DG.menuVisible = !DG.menuVisible;
  if (DG.menuVisible) {
    
//     $('#navbar-collapse').show().animate({'height': 150}, DG.dims.dur * 2, function() {
//       cb && cb();
//     });
    $('#body-wrapper').animate({'margin-top': 150}, DG.dims.dur * 2, function() {
      cb && cb();
    });
  } else {
//     $('#navbar-collapse').animate({'height': 0}, DG.dims.dur, function() {
//       cb && cb();
//       $(this).hide();
//     });
    $('#body-wrapper').animate({'margin-top': 0}, DG.dims.dur, function() {
      cb && cb();
    });
  }
};
DG.showHiddenText = function() {
  $('#hidden-text').fadeToggle();
};