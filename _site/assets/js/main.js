var App = (function() {
  'use strict';

  // Used to run scripts when the HTML is ready
  function fastInit() {
  }

  // Used to run scripts that just when all things are ready
  function init() {
  }

  return {
    init: init
  };

}());

var app = App;

$(window).load(function() {
  'use strict';
  app.init();
});

$(document).ready(function(){
  'use strict';
  app.fastInit();
});