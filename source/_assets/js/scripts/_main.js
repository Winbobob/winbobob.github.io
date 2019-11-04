(function($) {
  'use strict';

  // var $header   = $('.header'),
  //     $scrollUp = $('.scroll-up');

  var $form = $('#contactForm');

  $(document).ready(function () {
    // $scrollUp.scrolltoo({
    //   speed: 1200
    // });

    $('.show-disqus').on('click', function (e) {
      e.preventDefault();
      var $btn = $('.disqus-hidden');

      $.ajax({
        type: "GET",
        url: "http://" + disqus_shortname + ".disqus.com/embed.js",
        dataType: "script",
        cache: true,
        beforeSend: function() {
          $btn.html('Loading..');
        }
      }).done(function() {
        $btn.delay(1200).fadeOut().delay(500).html('');
      });
    });

    $('p').selectionSharer();
    $('.swipebox').swipebox();

    $form.on('click', '#sendForm', function (e) {
      e.preventDefault();

      var $btn = $(this),
          action = $form.attr('action'),
          method = $form.attr('method'),
          formdata = $form.serialize(),
          alert = $form.find('.alert'),
          msg = '', alertClass = '';

      var name = $form.find('#name'),
          email = $form.find('#email'),
          message = $form.find('#message');

      var nameValue = name.val(),
          emailValue = email.val(),
          messageValue = message.val();

      alert.html('').removeClass('alert-error alert-success fadeIn tada animated hinge').hide();

      $btn.prop('disabled', true);

      if(nameValue !== '' && nameValue !== undefined &&
        emailValue !== '' && emailValue !== undefined &&
        messageValue !== '' && messageValue !== undefined) {

        $.ajax({
          url: action,
          method: method,
          data: formdata,
          dataType: "json"
        }).success(function(data) {
          $form.each(function() {
            this.reset();
          });

          if(data.success) {
            alertClass = 'alert-success fadeIn hinge';
            msg = '<p>Formulário enviado com sucesso.</p>';
          } else {
            alertClass = 'alert-error tada animated hinge';
            msg = '<p>An error occurred in sending the form, try sending again to: <strong>zhewei.hu33@gmail.com</strong></p>';
          }

          alert.html(msg).addClass(alertClass).fadeIn('600');
          $btn.prop('disabled', false);
        }).error(function(err) {
          console.error(err);
        });

      } else {

        if(nameValue === undefined || nameValue === '') {
          name.addClass('error');
        } else {
          name.removeClass('error');
        }

        if(emailValue === undefined || emailValue === '') {
          email.addClass('error');
        } else {
          email.removeClass('error');
        }

        if(messageValue === undefined || messageValue === '') {
          message.addClass('error');
        } else {
          message.removeClass('error');
        }

        alertClass = 'alert-error tada animated hinge';
        msg = '<p>Please fill out the form.</p>';

        alert.html(msg).addClass(alertClass).fadeIn('600');
        $btn.prop('disabled', false);
      }
    });
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
