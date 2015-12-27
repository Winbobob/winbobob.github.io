(function (window) {

  'use strict';

  var support = {
      animations: Modernizr.cssanimations
    },
    animEndEventNames = {
      'WebkitAnimation': 'webkitAnimationEnd',
      'OAnimation': 'oAnimationEnd',
      'msAnimation': 'MSAnimationEnd',
      'animation': 'animationend'
    },
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    onEndAnimation = function (el, callback) {
      var onEndCallbackFn = function (ev) {
        if (support.animations) {
          if (ev.target != this) return;
          this.removeEventListener(animEndEventName, onEndCallbackFn);
        }
        if (callback && typeof callback === 'function') {
          callback.call();
        }
      };
      if (support.animations) {
        el.addEventListener(animEndEventName, onEndCallbackFn);
      } else {
        onEndCallbackFn();
      }
    };

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function ModalFx(el, options) {
    this.el = el;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this.ctrlClose = this.el.querySelector('[data-modal-close]');
    this.isOpen = false;
    this._initEvents();
  }

  ModalFx.prototype.options = {
    // callbacks
    onOpenModal: function () {
      return false;
    },
    onCloseModal: function () {
      return false;
    }
  }

  ModalFx.prototype._initEvents = function () {
    var self = this;

    // close action
    this.ctrlClose.addEventListener('click', this.toggle.bind(this));

    // esc key closes modal
    document.addEventListener('keydown', function (ev) {
      var keyCode = ev.keyCode || ev.which;
      if (keyCode === 27 && self.isOpen) {
        self.toggle();
      }
    });

    this.el.querySelector('.modal-search__overlay').addEventListener('click', this.toggle.bind(this));
  }

  ModalFx.prototype.toggle = function () {
    var self = this;
    if (this.isOpen) {
      classie.remove(document.body, 'modal-search--open');
      classie.remove(this.el, 'modal-search--open');
      classie.add(self.el, 'modal-search--close');

      onEndAnimation(this.el.querySelector('.modal-search__content'), function () {
        classie.remove(self.el, 'modal-search--close');
      });

      // callback on close
      this.options.onCloseModal(this);
    } else {
      classie.add(document.body, 'modal-search--open');
      classie.add(this.el, 'modal-search--open');

      // callback on open
      this.options.onOpenModal(this);
    }
    this.isOpen = !this.isOpen;
  };

  // add to global namespace
  window.ModalFx = ModalFx;

})(window);

var ModalFx = ModalFx || [];

(function () {
  var Mdtrigger = document.querySelector('[data-modal-search]'),
    someModal = document.getElementById(Mdtrigger.getAttribute('data-modal-search')),
    dlg = new ModalFx(someModal);
  Mdtrigger.addEventListener('click', dlg.toggle.bind(dlg));
})();