(function($) {
  'use strict';

  // var $header   = $('.header'),
  //     $scrollUp = $('.scroll-up');

  $(document).ready(function () {
    // $scrollUp.scrolltoo({
    //   speed: 1200
    // });

    $('p').selectionSharer();
    $('.swipebox').swipebox();
  });

  // $(document).scroll(function() {
  //   alert('asasdsda');
  //   var headerHeight = $header.height();

  //   console.log(headerHeight);

  //   if ($(this).scrollTop() > headerHeight) {
  //     $scrollUp.css({ 'bottom' : '15px' });
  //   } else {
  //     $scrollUp.css({ 'bottom' : '-80px' });
  //   }
  // });

  // $.fn.scrolltoo = function (options) {

  //   var defaults = {
  //     elem: $(this),
  //     speed: 800
  //   },

  //   settings = $.extend(defaults, options);

  //   settings.elem.click(function (e) {
  //     e.preventDefault();

  //     var $this     = $(this),
  //         $htmlBody = $('html, body'),
  //         offset    = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
  //         position  = ($this.attr('data-position')) ? $this.attr('data-position') : false,
  //         toMove;

  //     if (offset) {

  //       toMove = parseInt(offset, 10);
  //       $htmlBody.stop(true, false).animate({
  //         scrollTop: ($(this.hash).offset().top + toMove)
  //       }, settings.speed);

  //     } else if (position) {

  //       toMove = parseInt(position, 10);
  //       $htmlBody.stop(true, false).animate({
  //         scrollTop: toMove
  //       }, settings.speed);

  //     } else {

  //       $htmlBody.stop(true, false).animate({
  //         scrollTop: ($(this.hash).offset().top)
  //       }, settings.speed);

  //     }
  //   });
  // };

})(jQuery);
