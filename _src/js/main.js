/**
*/
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
});

(function ($, sr, undefined) {
  "use strict";

  var $document = $(document),

  debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced () {
      var obj = this, args = arguments;
      function delayed () {
        if (!execAsap) {
          func.apply(obj, args);
        }
        timeout = null;
      }

      if (timeout) {
        clearTimeout(timeout);
      } else if (execAsap) {
        func.apply(obj, args);
      }

      timeout = setTimeout(delayed, threshold || 100);
    };
  };

  $document.ready(function () {
    var $postContent = $(".post-content");
    $(".scroll-down").arctic_scroll();
    $('.swipebox').swipebox();
    $("[data-repo]").github();
  });

  jQuery.fn[sr] = function(fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

  $.fn.arctic_scroll = function (options) {

    var defaults = {
      elem: $(this),
      speed: 500
    },

    allOptions = $.extend(defaults, options);

    allOptions.elem.click(function (event) {
      event.preventDefault();
      var $this = $(this),
      $htmlBody = $('html, body'),
      offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
      position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
      toMove;

      if (offset) {
        toMove = parseInt(offset);
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
      } else if (position) {
        toMove = parseInt(position);
        $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
      } else {
        $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
      }
    });

  };
})(jQuery, 'smartresize');

(function() {
  var Mdtrigger = document.querySelector( '[data-modal]' ),
  someModal = document.getElementById( Mdtrigger.getAttribute( 'data-modal' ) ),
  dlg = new ModalFx( someModal );
  Mdtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );
})();


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-52446115-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


var disqus_shortname = 'fernandomoreira';
(function () {
var s = document.createElement('script'); s.async = true;
s.type = 'text/javascript';
s.src = '//' + disqus_shortname + '.disqus.com/count.js';
(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());
