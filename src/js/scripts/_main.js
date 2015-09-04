
new WOW().init();

(function ($, sr, undefined) {

  var $document = $(document);
  var debounce = function (func, threshold, execAsap) {
    var timeout;

    return function debounced() {
      var obj = this,
        args = arguments;

      function delayed() {
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
    $('.scroll-down').arctic_scroll();
    $('.swipebox').swipebox();
  });

  jQuery.fn[sr] = function (fn) {
    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
  };

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
        toMove = parseInt(offset, 10);
        $htmlBody.stop(true, false).animate({
          scrollTop: ($(this.hash).offset().top + toMove)
        }, allOptions.speed);
      } else if (position) {
        toMove = parseInt(position, 10);
        $htmlBody.stop(true, false).animate({
          scrollTop: toMove
        }, allOptions.speed);
      } else {
        $htmlBody.stop(true, false).animate({
          scrollTop: ($(this.hash).offset().top)
        }, allOptions.speed);
      }
    });
  };
})(jQuery, 'smartresize');