'use strict';
var DG = DG || {};

DG.bindEvents = function() {
  $('#menu-button').click(function() {
    DG.toggleMenu();
  });
  $('.menu-contents .nav-link').click(function(e) {
    var self = this;
    e.preventDefault();
//     console.log('click on', this.href);
    DG.toggleMenu(function() { //slide the menu up, then navigate to the next page
      document.location = self.href;
    });
  });
  
};
