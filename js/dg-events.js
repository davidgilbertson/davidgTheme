'use strict';
var DG = DG || {};

DG.bindEvents = function() {
  $('#menu-button').click(function() {
    DG.toggleMenu();
  });
  $('.dg-nav-link').click(function(e) {
    var self = this;
    
    if (!DG.menuVisible) {
      document.location = self.href;
    } else {
      e.preventDefault();
      DG.toggleMenu(function() { //slide the menu up, then navigate to the next page
        document.location = self.href;
      });
    }
  });
  
  window.onresize = function() { /* Close the menu if the screen is resized (or it can stay open) */
    if (DG.menuVisible) {
//       DG.toggleMenu();
    }
  }
};
