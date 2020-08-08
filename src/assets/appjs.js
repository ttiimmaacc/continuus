(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Common


// navigation


// Pages
// import Quote from "./pages/Quote";
// import ModelHovers from "./components/ModelHovers";

// Components


var _Polyfills = require("./common/Polyfills");

var _Polyfills2 = _interopRequireDefault(_Polyfills);

var _Model = require("./common/Model");

var _Common = require("./common/Common");

var _Common2 = _interopRequireDefault(_Common);

var _Utils = require("./common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

var _PageNavigation = require("./common/PageNavigation");

var _PageNavigation2 = _interopRequireDefault(_PageNavigation);

var _DynamicGrid = require("./components/DynamicGrid");

var _DynamicGrid2 = _interopRequireDefault(_DynamicGrid);

var _Header = require("./components/Header");

var _Header2 = _interopRequireDefault(_Header);

var _Marquee = require("./components/Marquee");

var _Marquee2 = _interopRequireDefault(_Marquee);

var _MediaPlayer = require("./components/MediaPlayer");

var _MediaPlayer2 = _interopRequireDefault(_MediaPlayer);

var _ModelViewerController = require("./components/ModelViewerController");

var _ModelViewerController2 = _interopRequireDefault(_ModelViewerController);

var _FlickitySlideshow = require("./components/FlickitySlideshow");

var _FlickitySlideshow2 = _interopRequireDefault(_FlickitySlideshow);

var _BlockLinks = require("./components/BlockLinks");

var _BlockLinks2 = _interopRequireDefault(_BlockLinks);

var _Flyout = require("./components/Flyout");

var _Flyout2 = _interopRequireDefault(_Flyout);

var _Forms = require("./components/Forms");

var _Forms2 = _interopRequireDefault(_Forms);

var _Parallax = require("./components/Parallax");

var _Parallax2 = _interopRequireDefault(_Parallax);

var _ParallaxCallout = require("./components/ParallaxCallout");

var _ParallaxCallout2 = _interopRequireDefault(_ParallaxCallout);

var _Lightbox = require("./components/Lightbox");

var _Lightbox2 = _interopRequireDefault(_Lightbox);

var _CustomizationAccordion = require("./components/CustomizationAccordion");

var _CustomizationAccordion2 = _interopRequireDefault(_CustomizationAccordion);

var _Accordion = require("./components/Accordion");

var _Accordion2 = _interopRequireDefault(_Accordion);

var _BasicAccordion = require("./components/BasicAccordion");

var _BasicAccordion2 = _interopRequireDefault(_BasicAccordion);

var _Sidebar = require("./components/Sidebar");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _LazyLoad = require("./components/LazyLoad");

var _LazyLoad2 = _interopRequireDefault(_LazyLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.FRY_REGLAT = window.FRY_REGLAT || {};

var App = function () {
  function App() {
    _classCallCheck(this, App);

    // common methods
    new _Common2.default();

    // kick off
    this.kickoff();
  }

  /**
   * Project kickoff
   */


  _createClass(App, [{
    key: "kickoff",
    value: function kickoff() {

      // Currently not used
      // new Quote();
      // new ModelHovers();

      // Components
      new _Header2.default();
      new _Marquee2.default();
      new _MediaPlayer2.default();
      new _ModelViewerController2.default();
      new _FlickitySlideshow2.default();
      new _BlockLinks2.default();
      new _Flyout2.default();
      new _Forms2.default();
      new _Parallax2.default();
      new _ParallaxCallout2.default();
      new _Lightbox2.default(); // gallery
      new _CustomizationAccordion2.default(); // sidebar
      new _Accordion2.default(); // sidebar
      new _BasicAccordion2.default(); // customization options
      new _Sidebar2.default(); // dynamic grid + quote
      new _LazyLoad2.default();

      // Common
      new _PageNavigation2.default();
      new _DynamicGrid2.default();
    }
  }]);

  return App;
}();

document.addEventListener("DOMContentLoaded", function () {
  // entry
  window.FRY_REGLAT.App = new App();
});

},{"./common/Common":3,"./common/Model":4,"./common/PageNavigation":5,"./common/Polyfills":6,"./common/Utils":7,"./components/Accordion":8,"./components/BasicAccordion":9,"./components/BlockLinks":10,"./components/CustomizationAccordion":11,"./components/DynamicGrid":12,"./components/FlickitySlideshow":13,"./components/Flyout":14,"./components/Forms":15,"./components/Header":16,"./components/LazyLoad":17,"./components/Lightbox":18,"./components/Marquee":19,"./components/MediaPlayer":20,"./components/ModelViewerController":22,"./components/Parallax":23,"./components/ParallaxCallout":24,"./components/Sidebar":25}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Utils


// Model


var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

var _Model = require("./Model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
  function Common() {
    _classCallCheck(this, Common);

    _Model.model.baseurl = document.body.dataset.baseurl;
    _Model.model.folder = document.body.dataset.folder;
    _Model.model.recaptchaToken = document.body.dataset.recaptchaToken;
    _Model.model.mailchimpList = document.body.dataset.mailchimpList;
    _Model.model.mailchimpApiKey = document.body.dataset.mailchimpApiKey;

    // facebook icon
    this.facebook = document.querySelector("#facebook");

    // twitter icon
    this.twitter = document.querySelector("#twitter");

    // kickoff browser detection
    this.browserDetection();

    // cancel scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    this.events();
  }

  /**
   * Events
   */


  _createClass(Common, [{
    key: "events",
    value: function events() {
      var _this = this;

      // click
      document.addEventListener("click", function (event) {
        return _this.onClick(event);
      });
    }

    /**
     * Browser detection
     * @return null
     */

  }, {
    key: "browserDetection",
    value: function browserDetection() {
      this.checkIOS();
      this.checkAndroid();
      this.setBrowserNameVersion();
    }

    /**
     * set Browser name and version
     */

  }, {
    key: "setBrowserNameVersion",
    value: function setBrowserNameVersion() {
      var browserName = _Utils2.default.get_browser().name.toLowerCase();
      var browserVersion = "ver" + _Utils2.default.get_browser().version;
      document.body.classList.add(browserName, browserVersion);
    }

    /**
     * Check if iOS
     */

  }, {
    key: "checkIOS",
    value: function checkIOS() {
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      if (iOS) {
        _Model.model.mobile = true;
        _Model.model.iOS = true;
        document.body.classList.add("iOS");
      }
    }

    /**
     * Check if Android
     */

  }, {
    key: "checkAndroid",
    value: function checkAndroid() {
      var ua = navigator.userAgent.toLowerCase();
      var isAndroid = ua.indexOf("android") > -1;
      if (isAndroid) {
        _Model.model.mobile = true;
        document.body.classList.add("android");
      }
    }

    /**
     * on click
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      var shareButton = event.target.closest(".external-share");
      if (shareButton) {
        event.preventDefault();

        var href = shareButton.href;
        this.share(href);
      }
    }

    /**
     * Share
     * @param {String} href
     */

  }, {
    key: "share",
    value: function share(href) {
      var settings = "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600";
      window.open(href, "_blank", settings);
    }
  }]);

  return Common;
}();

exports.default = Common;

},{"../common/Utils":7,"./Model":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Utils


var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model() {
    _classCallCheck(this, Model);

    this.data = null;
    this.baseurl = null;
    this.folder = null;
  }

  // Getter/Setter: data


  _createClass(Model, [{
    key: "data",
    set: function set(data) {
      this._data = data;
    },
    get: function get() {
      return this._data;
    }

    // Getter/Setter: baseurl

  }, {
    key: "baseurl",
    set: function set(baseurl) {
      this._baseurl = baseurl;
    },
    get: function get() {
      return this._baseurl;
    }

    // Getter/Setter: folder

  }, {
    key: "folder",
    set: function set(folder) {
      this._folder = folder;
    },
    get: function get() {
      return this._folder;
    }
  }, {
    key: "easeInOut",
    get: function get() {
      Quad.easeInOut;
    }
  }, {
    key: "easeOut",
    get: function get() {
      Quad.easeOut;
    }
  }, {
    key: "easeIn",
    get: function get() {
      Quad.easeIn;
    }
  }]);

  return Model;
}();

var model = exports.model = new Model();

},{"../common/Utils":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


var _Model = require("./Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageNavigation = function () {
  function PageNavigation() {
    var _this = this;

    _classCallCheck(this, PageNavigation);

    this.isTransitioning = false;
    this.contentArea = document.querySelector("#ajax-content"), this.blocker = document.querySelector("#click-blocker");
    this.secondaryLoader = document.querySelector("#secondary-loader");
    this.path = document.querySelector("#main").dataset.url;
    this.cover = document.querySelector("#initial-load-cover");
    this.title = document.querySelector("#initial-load-title");
    this.letters = this.title.querySelectorAll(".letter");
    this.firstRun = true;
    this.scrollPositions = {};

    this.resize();
    this.events();

    this.lockPage();

    TweenMax.delayedCall(0.2, function () {
      _this.kickoff();
    });
  }

  /**
   * Kickoff
   */


  _createClass(PageNavigation, [{
    key: "kickoff",
    value: function kickoff() {
      var _this2 = this;

      this.cacheLastPageUrl();

      // scroll to top
      TweenMax.set(window, { scrollTo: { y: 0, autoKill: true } });

      // turn on body
      TweenMax.set(document.body, { autoAlpha: 1 });

      // get preloader letters
      var letters = this.title.querySelectorAll(".letter");

      // animate letters
      var timeline = new TimelineLite({
        onComplete: function onComplete() {
          _this2.preloadImages(false, true);
        }
      });

      // animate letters
      timeline.staggerFromTo(letters, 0.2, {
        autoAlpha: 0
      }, {
        y: "0%",
        autoAlpha: 1,
        ease: Linear.easeNone
      }, 0.05);
    }

    /**
     * Events
     */

  }, {
    key: "events",
    value: function events() {
      var _this3 = this;

      window.addEventListener('scroll', function () {
        var scroll = window.scrollY || window.pageYOffset;
      });

      // click
      document.addEventListener("click", function (event) {
        return _this3.onClick(event);
      });

      // preload complete
      document.addEventListener("FRY_REGLET:PRE_LOAD_COMPLETE", function (event) {
        return _this3.preloadImages(true);
      });

      // grid updated
      document.addEventListener("FRY_REGLET:GRID_UPDATED", function (event) {
        return _this3.onGridUpdated();
      });

      // form validated
      document.addEventListener("FRY_REGLET:FORM:VALIDATED", function (event) {
        return _this3.onFormValidated(event);
      });

      // popstate
      window.addEventListener("popstate", function (event) {
        return _this3.onPopState(event);
      });

      // form submit
      document.addEventListener("submit", function (event) {
        return _this3.onFormSumit(event);
      });

      // resize
      var fn = _Utils2.default.debounce(this.resize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);
    }

    /**
     * Popstate handler
     * @param  {Event} event
     */

  }, {
    key: "onPopState",
    value: function onPopState(event) {
      var path = _Utils2.default.getPath().toString();

      if (path === this.lastUrl) return;

      TweenMax.set(this.secondaryLoader, { x: "-100%", autoAlpha: 1 });

      this.blockUI();

      var url = _Model.model.baseurl + _Model.model.folder + path;
      if (url === "//") url = "/";

      this.shouldSetScroll = true;

      this.updateURL(url, false);

      event.preventDefault();
    }

    /**
     * on touchstart
     * @param  {TouchEvent} event
     */
    // onTouchStart(event) {
    //   const menuItem = event.target.closest(".sub-nav-item");
    //   if(menuItem) {
    //     const link = event.target.closest("a:not([data-flyout-open])");

    //     if(!link) return;
    //     this.linkClicked(event, link);

    //     event.preventDefault();
    //   }
    // }

    /**
     * block UI
     */

  }, {
    key: "blockUI",
    value: function blockUI() {
      // set cursor
      document.body.style.cursor = "progress";

      // add click blocker
      this.blocker.classList.remove("hide");
    }

    /**
     * lock page
     */

  }, {
    key: "lockPage",
    value: function lockPage() {
      this.scroll = window.scrollY || window.pageYOffset;
      this.lastPinnedPosition = this.scroll;

      var contentArea = document.querySelector(".ajax-content-area");
      TweenMax.set(contentArea, {
        position: "fixed",
        zIndex: 0,
        y: -this.lastPinnedPosition
      });
    }

    /**
     * Form submission
     * @param  {Event} event
     */

  }, {
    key: "onFormSumit",
    value: function onFormSumit(event) {
      var form = event.target.closest("form");

      // find a rep form
      if (form && form.id === "find-a-rep-form") {

        _Utils2.default.dispatch("FRY_REGLET:FORM:VALIDATE", { form: form });

        event.preventDefault();
      }

      // search form
      if (form && form.id === "desktop-search-form") {

        _Utils2.default.dispatch("FRY_REGLET:FORM:VALIDATE", { form: form });

        event.preventDefault();
      }
    }

    /**
     * form validated
     */

  }, {
    key: "onFormValidated",
    value: function onFormValidated(event) {
      var _this4 = this;

      var form = event.detail.form;

      // find a rep form
      if (form && form.id === "find-a-rep-form") {
        var url = form.action + "?" + _Utils2.default.serialize(form);

        _Utils2.default.dispatch("FRY_REGLET:FLYOUT:CLOSE");

        TweenMax.delayedCall(0.5, function () {
          _this4.firePage(url);

          _Utils2.default.dispatch("FRY_REGLET:FORM:RESET", { form: form });
        });
      }

      // search form
      if (form && form.id === "desktop-search-form") {

        var _url = form.action + "?" + _Utils2.default.serialize(form);

        TweenMax.delayedCall(0.5, function () {
          _this4.firePage(_url);

          _Utils2.default.dispatch("FRY_REGLET:FORM:RESET", { form: form });
        });

        event.preventDefault();
      }
    }

    /**
     * Click handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      var _this5 = this;

      var link = event.target.closest("a:not([data-flyout-open]):not(.exit)");

      var directLink = event.target.closest("[data-level='2'], [data-level='3'], [data-nav-trigger='shape-finder']");

      if (link) {

        if (directLink) {
          directLink.classList.add("selected");
        }

        var delay = directLink ? 0.2 : 0;

        TweenMax.delayedCall(delay, function () {
          _this5.linkClicked(event, link);
        });

        event.preventDefault();
      }
    }

    /**
     * Link clicked
     * @param  {MouseEvent} event
     */

  }, {
    key: "linkClicked",
    value: function linkClicked(event, link) {

      // flyout
      if (event.target.closest("[data-flyout-open]")) return;

      // external link
      if (event.target.closest(".external-share, .external-mail")) return;

      // desktop lightbox on searc and gallery
      if (event.target.closest("[data-lightbox]") && this.screen.type === "desktop") return;

      if (link && (link.dataset.navTrigger === "shape-finder" || link.dataset.navTrigger === "home" || !link.dataset.navTrigger)) {

        // click from main navigation
        var fromMainNav = link.closest("#main-nav, #nav-panels");

        // go to page
        this.firePage(link.pathname + link.search, fromMainNav);
      }
    }

    /**
     * turn on page
     * @param  {String} url
     * @param  {Boolean} fromMainNav
     */

  }, {
    key: "firePage",
    value: function firePage(url, fromMainNav) {
      var _this6 = this;

      if (this.navigating) return;

      this.navigating = true;

      var scroll = window.scrollY || window.pageYOffset;

      this.blockUI();

      var path = _Utils2.default.getPath().toString() !== '/' ? _Utils2.default.getPath().toString() : 'home';
      this.scrollPositions[path] = scroll;

      // dispatch navigating event
      _Utils2.default.dispatch("FRY_REGLET:NAVIGATING", { fromMainNav: fromMainNav });

      var firstContentArea = document.querySelector('.ajax-content-area:first-child');
      var fades = firstContentArea.querySelectorAll(".fade-me");

      if (fades.length && this.screen.type === "desktop") {

        var timeline = new TimelineLite({
          onComplete: function onComplete() {
            _this6.afterFades(url, fromMainNav);
          }
        });

        timeline.staggerTo(fades, 0.2, {
          y: 15,
          autoAlpha: 0,
          ease: Cubic.easeIn
        }, 0.05);
      } else {
        this.afterFades(url, fromMainNav);
      }
    }
  }, {
    key: "afterFades",
    value: function afterFades(url, fromMainNav) {
      var _this7 = this;

      this.lockPage();

      var delay = fromMainNav ? 1.5 : 0;
      TweenMax.delayedCall(delay, function () {
        _this7.updateURL(url);
      });
    }

    /**
     * update url
     * @param  {String}  path
     * @param  {Boolean} shouldUpdateURL
     */

  }, {
    key: "updateURL",
    value: function updateURL(path) {
      var _this8 = this;

      var shouldUpdateURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      TweenMax.delayedCall(0.05, function () {

        // only load page if page is different than last
        // if(link.pathname !== window.location.pathname) {

        // load page
        _this8.loadPage(path);

        if (shouldUpdateURL) {
          var newPath = _Model.model.baseurl + _Model.model.folder + path;
          window.history.pushState({ url: path }, "", path);
        }

        // }
      });
    }

    /**
     * on grid updated
     */

  }, {
    key: "onGridUpdated",
    value: function onGridUpdated() {

      if (!this.started && !this.navigating) {
        this.started = true;
        this.nextContentArea = this.nextContentArea || document;
        this.startPreload();
      }

      TweenMax.to(this.secondaryLoader, 0.5, {
        x: "0%",
        autoAlpha: 0,
        ease: Linear.easeNone
      });
    }

    /**
     * Load page
     * @param  {String} url
     */

  }, {
    key: "loadPage",
    value: function loadPage(url) {

      _Utils2.default.dispatch("FRY_REGLET:START_PAGE_CHANGE");

      var loadPercent = Math.random() * 20 + 40;
      TweenMax.fromTo(this.secondaryLoader, 1, { x: "-100%", autoAlpha: 1 }, { x: "-" + loadPercent + "%", ease: Linear.easeNone });

      var that = this;
      if (!this.isTransitioning) {
        this.isTransitioning = true;

        fetch(url).then(function (response) {
          return response.text();
        }).then(function (data) {
          that.addPage(data);
        }).catch(function (err) {
          console.log("error", err);
        });
      }
    }

    /**
     * add page
     * @param {Object} data
     */

  }, {
    key: "addPage",
    value: function addPage(data) {

      var el = document.createElement("div");
      el.innerHTML = data;

      // grab title and content from new page
      var title = el.querySelector('title').innerHTML;
      var content = el.querySelector('#ajax-content');
      var contentArea = content.querySelector('.ajax-content-area').innerHTML;

      // set page titles
      document.title = title;

      // create new content container
      var newContentArea = document.createElement("div");
      newContentArea.classList.add("ajax-content-area", "autoAlpha0", "fixed", "top0", "width-100"
      // "ov-h"
      );

      // add content
      newContentArea.innerHTML = contentArea;

      // add new page to DOM
      this.contentArea.appendChild(newContentArea);

      this.nextContentArea = newContentArea;
      this.hasSubCalls = newContentArea.querySelector("[data-api-endpoint]");

      // pre-fetch api calls
      if (this.hasSubCalls) {

        _Utils2.default.dispatch("FRY_REGLET:PRE_LOAD", { page: this.nextContentArea });
      } else {

        // check it page has preload items
        var itemsToLoad = this.nextContentArea.querySelectorAll("[data-src], [data-background]");

        // if items, preload else animate in
        if (itemsToLoad.length) {
          this.preloadImages(true);
        } else {
          this.animatePage(this.nextContentArea);
        }
      }
    }

    /**
     * on preload Complete
     */

  }, {
    key: "preloadImages",
    value: function preloadImages(initialLoad) {
      var cancelPreload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.nextContentArea = this.nextContentArea || document;
      this.hasSubCalls = this.nextContentArea.querySelector("[data-api-endpoint]");
      this.initialLoad = initialLoad;

      if (this.hasSubCalls) {
        if (!cancelPreload) {
          this.startPreload();
        }
      } else {
        this.startPreload();
      }
    }

    /**
     * start preload
     * @param  {DOMElement} contentArea
     */

  }, {
    key: "startPreload",
    value: function startPreload() {
      var _this9 = this;

      var itemsToLoad = this.nextContentArea.querySelectorAll("[data-src], [data-background]");

      var offscreen = false;

      this.preloadesImages = [];
      itemsToLoad.forEach(function (image) {

        if (image.dataset.src === "") return;

        if (!offscreen) {
          var bounds = image.getBoundingClientRect();

          if (bounds.top < _this9.screen.height + 100) {
            if (image.dataset.loaded !== "true") {
              _this9.preloadesImages.push(image);
            }
          } else {
            offscreen = true;
          }
        }
      });

      // limit to 20
      this.preloadesImages = this.preloadesImages.slice(0, 15);

      // eject if no items to preload
      if (!this.preloadesImages.length) {
        this.fireFirstPage(this.initialLoad);
        return;
      }

      this.imagesLoaded = 0;
      this.preloadesImages.forEach(function (image) {
        image.dataset.loaded = "true";
        _this9.loadImage(image, _this9.initialLoad);
      });
    }

    /**
     * Fire fire page
     */

  }, {
    key: "fireFirstPage",
    value: function fireFirstPage(initialLoad) {
      var _this10 = this;

      if (initialLoad) {

        // animate page
        this.animatePage(this.nextContentArea);
      } else if (!initialLoad) {

        // animate loader
        this.animateLoader(100, 0.5, 0, function () {
          TweenMax.set(window, { scrollTo: { y: 0, autoKill: false } });

          _this10.unlockSections(document);
        });
      }
    }

    /**
     * Preload image
     * @param  {DOMElement} image
     */

  }, {
    key: "loadImage",
    value: function loadImage(image, initialLoad) {
      var _this11 = this;

      var placeholder = new Image();
      var src = image.dataset.src || image.dataset.background;

      placeholder.onload = function (event) {
        return _this11.imageLoaded(image, initialLoad);
      };

      placeholder.src = _Model.model.baseurl + _Model.model.folder + src;
    }

    /**
     * image loaded
     */

  }, {
    key: "imageLoaded",
    value: function imageLoaded(image, initialLoad) {
      var _this12 = this;

      if (image.dataset.src) {
        image.src = _Model.model.baseurl + _Model.model.folder + image.dataset.src;
        // image.dataset.src = null;
      } else if (image.dataset.background) {
        var bgImage = _Model.model.baseurl + _Model.model.folder + image.dataset.background;
        image.style.backgroundImage = "url('" + bgImage + "')";
        // image.dataset.background = null;
      }
      image.classList.remove("autoAlpha0");

      this.imagesLoaded++;

      if (this.imagesLoaded === this.preloadesImages.length) {

        if (initialLoad) {
          this.loadNextPage(initialLoad);
        } else {
          this.animateLoader(100, 0.5, 0, function () {
            _this12.loadNextPage(initialLoad);
          });
        }
      } else {
        if (!initialLoad) {
          var percent = this.imagesLoaded / this.preloadesImages.length * 100;

          this.animateLoader(percent, 0.3, 0.1, null);
        }
      }
    }

    /**
     * Animate loader
     * @param  {Number} percent
     * @param  {Number} speed
     * @param  {Number} delay
     * @param  {Function} onComplete
     */

  }, {
    key: "animateLoader",
    value: function animateLoader(percent, speed, delay, onComplete) {
      var _this13 = this;

      this.timeline = new TimelineLite({
        onComplete: onComplete,
        delay: delay
      });

      var letters = this.title.querySelectorAll(".letter");
      var letterMax = Math.ceil(letters.length * (percent / 100));

      letters.forEach(function (letter, index) {
        if (index < letterMax) {
          var stagger = index > 0 ? "-=0.2" : 0;
          _this13.timeline.to(letter, 0.3, { fill: "#0057B8", ease: Linear.easeNone }, stagger);
        }
      });
    }

    /**
     * Load next page
     * @param  {Boolean} initialLoad
     */

  }, {
    key: "loadNextPage",
    value: function loadNextPage(initialLoad) {
      if (initialLoad && this.imagesLoaded === this.preloadesImages.length) {
        this.animatePage(this.nextContentArea);
      } else if (!initialLoad && this.imagesLoaded === this.preloadesImages.length) {
        this.unlockSections(document);
      }
    }

    /**
     * Animate pages
     * @param  {DOMElement} newContentArea
     */

  }, {
    key: "animatePage",
    value: function animatePage(newContentArea) {

      var firstContentArea = document.querySelector('.ajax-content-area:first-child');

      var currentPageItems = this.getItemsToAnimate(firstContentArea);
      this.outAnimations = currentPageItems.onScreen;

      this.nextFades = this.nextContentArea.querySelectorAll(".fade-me");

      var nextPageItems = this.getItemsToAnimate(this.nextContentArea);
      this.nextAnimationsIn = nextPageItems.onScreen;
      this.nextAnimationsOut = nextPageItems.offScreen;

      // TweenMax.set(this.nextAnimationsOut, { display: "none" });

      this.hasSubCalls = firstContentArea.querySelector("[data-api-endpoint]");

      _Utils2.default.dispatch("FRY_REGLET:AFTER_PAGE_ADDED", { area: newContentArea });

      this.startPage(firstContentArea);
    }

    /**
     * Start page
     * @param  {DOMElement} firstContentArea
     */

  }, {
    key: "startPage",
    value: function startPage(firstContentArea) {
      var _this14 = this;

      var timeline = new TimelineLite({
        onComplete: function onComplete() {
          _this14.lastPageAnimatedOut(firstContentArea);
        }
      });
      timeline.pause();

      // animate elements out
      timeline.staggerTo(this.outAnimations, 0.5, { autoAlpha: 0, x: -150, ease: Power3.easeIn }, 0.05);

      var distance = this.hasSubCalls ? "0%" : "-100%";

      // animate page out
      if (!this.hasSubCalls) {
        timeline.to(firstContentArea, 0.65, {
          x: distance,
          ease: Power3.easeIn,
          autoAlpha: 0
        }, "-=0.35");
      }

      timeline.resume();
    }

    /**
     * Get items to animate
     * @param  {DOMElement} area
     */

  }, {
    key: "getItemsToAnimate",
    value: function getItemsToAnimate(area) {
      var _this15 = this;

      var animations = area.querySelectorAll(".animate-me");
      var onScreenItems = [];
      var offScreenItems = [];
      var offscreen = false;

      animations.forEach(function (item, index) {
        if (!offscreen) {
          var bounds = item.getBoundingClientRect();
          if (bounds.top < _this15.screen.height + 300 && bounds.top > -300) {
            onScreenItems.push(item);
          } else if (bounds.top > _this15.screen.height + 300) {
            offScreenItems.push(item);
            offscreen = true;
          }
        } else {
          offScreenItems.push(item);
        }
      });

      return {
        onScreen: onScreenItems,
        offScreen: offScreenItems
      };
    }

    /**
     * last page animated out
     * @param  {DOMElement} firstContentArea
     */

  }, {
    key: "lastPageAnimatedOut",
    value: function lastPageAnimatedOut(firstContentArea) {
      firstContentArea.remove();

      this.isTransitioning = false;

      this.transitionNextPage();
    }

    /**
     * Transition next page
     */

  }, {
    key: "transitionNextPage",
    value: function transitionNextPage() {
      var _this16 = this;

      TweenMax.to(this.secondaryLoader, 0.5, {
        x: "0%",
        ease: Linear.easeNone,
        onComplete: function onComplete() {
          TweenMax.to(_this16.secondaryLoader, 0.2, { autoAlpha: 0, ease: Linear.easeNone });
        }
      });

      this.loaderFinished();
    }
  }, {
    key: "loaderFinished",
    value: function loaderFinished() {
      var _this17 = this;

      this.path = document.querySelector("#main").dataset.url;

      TweenMax.set(this.nextFades, { y: 15, autoAlpha: 0 });
      TweenMax.set(this.nextAnimationsIn, { autoAlpha: 0 });

      var path = _Utils2.default.getPath().toString() !== '/' ? _Utils2.default.getPath().toString() : 'home';

      var yPos = this.shouldSetScroll ? -this.scrollPositions[path] : 0;
      TweenMax.set(this.nextContentArea, { autoAlpha: 1, y: yPos });

      // dispatch before page animated in event
      _Utils2.default.dispatch("FRY_REGLET:BEFORE_PAGE_CHANGE", { area: this.nextContentArea });

      // animate items in
      var timeline = new TimelineLite();

      // enable new page
      TweenMax.set(window, { scrollTo: { y: 0, autoKill: false } });

      var stagger = this.screen.type === "mobile" ? 0.2 : 0.1;
      timeline.staggerFromTo(this.nextAnimationsIn, 0.75, { autoAlpha: 0, x: 250 }, {
        autoAlpha: 1,
        x: 0,
        ease: Cubic.easeOut
      }, stagger);

      // animate page in
      TweenMax.fromTo(this.nextContentArea, 1, { x: "100%", autoAlpha: 0 }, {
        x: "0%",
        ease: Expo.easeOut,
        autoAlpha: 1,
        onComplete: function onComplete() {
          _this17.unlockPage();
        }
      });

      TweenMax.delayedCall(1.5, function () {
        _this17.fadeSlideItems();
      });
    }

    /**
     * Unlock page
     */

  }, {
    key: "unlockPage",
    value: function unlockPage() {

      _Utils2.default.dispatch("FRY_REGLET:UNLOCK_PAGE");

      this.unlockSections(this.nextContentArea);

      TweenMax.set(this.nextContentArea, { clearProps: "x, y" });

      this.nextContentArea.classList.remove("fixed");

      if (this.shouldSetScroll) {
        var path = _Utils2.default.getPath().toString() !== '/' ? _Utils2.default.getPath().toString() : 'home';
        TweenMax.set(window, { scrollTo: { y: this.scrollPositions[path], autoKill: true } });
        this.scrollPositions[path] = 0;
      }

      this.shouldSetScroll = false;

      // remove click blocker and loading cursor
      this.blocker.classList.add("hide");

      document.body.style.cursor = "default";
    }

    /**
     * unlock page sections
     */

  }, {
    key: "unlockSections",
    value: function unlockSections(area) {
      var _this18 = this;

      // is first run?
      var isFirstRun = area === document ? true : false;

      if (area === document) {

        // get first section on page
        var section = area.querySelector("section:first-child");

        // intro animation timeline
        var timeline = new TimelineLite({
          onComplete: function onComplete() {
            _this18.openPage(section);
          }
        });

        // animate letters in
        timeline.staggerTo(this.letters, 0.3, {
          autoAlpha: 0,
          ease: Quad.easeInOut
        }, 0.05);
      }

      // dispatch page change
      _Utils2.default.dispatch("FRY_REGLET:AFTER_PAGE_CHANGE", { firstRun: isFirstRun, area: area });
    }
    /**
     * open page
     * only runs once at site start
     * @param  {DOMElement} section
     * @param  {NodeList} items
     */

  }, {
    key: "openPage",
    value: function openPage(section) {
      var _this19 = this;

      // animate page sections in
      if (section) {
        TweenMax.set(section, { autoAlpha: 1, y: 100 });
        TweenMax.to(section, 1, {
          y: 0,
          ease: Power2.easeOut,
          onComplete: function onComplete() {
            TweenMax.set(section, { clearProps: "autoAlpha, y" });
          }
        });
      }

      // animate page cover up
      TweenMax.to(this.cover, 0.75, {
        y: "-100%",
        ease: Quad.easeInOut,
        onComplete: function onComplete() {

          // remove cover
          _this19.cover.remove();

          // complete
          _this19.pageComplete();
        }
      });
    }

    /**
     * cache last page url
     */

  }, {
    key: "cacheLastPageUrl",
    value: function cacheLastPageUrl() {
      this.lastUrl = _Utils2.default.getPath().toString();
    }

    /**
     * unlock page scroll
     * @param  {DOMElement} area
     */

  }, {
    key: "unlockPageScroll",
    value: function unlockPageScroll(area) {
      area = area || document;

      var ajaxContentArea = document.querySelector(".ajax-content-area");
      if (ajaxContentArea) {
        TweenMax.set(ajaxContentArea, { clearProps: "y, position" });
      }

      // if(this.nextAnimationsOut) {
      //   TweenMax.set(this.nextAnimationsOut, { autoAlpha: 1 });
      // }

      // const main = area.querySelector(".main");
      // if(main) {
      //   main.classList.remove("ov-h");
      // }

      this.navigating = false;
      _Utils2.default.dispatch("FRY_REGLET:UNLOCK_PAGES");
    }

    /**
     * Fade and slide sidebar
     */

  }, {
    key: "fadeSlideItems",
    value: function fadeSlideItems() {
      var _this20 = this;

      var path = _Utils2.default.getPath().toString();

      // if dynamic grid & screen is mobile
      // don't animate fades in sidebar
      if ((path === this.path || path === "shape-finder" || path === "color-finder" || path === "gallery") && this.screen.type === 'mobile') {

        this.pageComplete();
      } else {

        var fades = this.nextContentArea.querySelectorAll(".fade-me");

        var timeline = new TimelineLite({
          onComplete: function onComplete() {
            _this20.pageComplete();
          }
        });

        timeline.staggerTo(fades, 0.3, {
          y: 0,
          autoAlpha: 1,
          ease: Cubic.easeOut
        }, 0.1);
      }
    }

    /**
     * page complete
     */

  }, {
    key: "pageComplete",
    value: function pageComplete() {
      this.unlockPageScroll();
      this.cacheLastPageUrl();
      this.started = true;
      this.navigating = false;
      this.hasSubCalls = false;

      _Utils2.default.dispatch("FRY_REGLET:PAGE_COMPLETE");
    }

    /**
     * resize
     */

  }, {
    key: "resize",
    value: function resize() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      this.screen = { width: width, height: height, type: type };
    }
  }]);

  return PageNavigation;
}();

exports.default = PageNavigation;

},{"../common/Utils":7,"./Model":4}],6:[function(require,module,exports){
(function (process,global){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/// Original C++ implementation found at http://www.wilmott.com/messageview.cfm?catid=10&threadid=38771
/// C# implementation found at http://weblogs.asp.net/esanchez/archive/2010/07/29/a-quick-and-dirty-implementation-of-excel-norminv-function-in-c.aspx
/*
 *     Compute the quantile function for the normal distribution.
 *
 *     For small to moderate probabilities, algorithm referenced
 *     below is used to obtain an initial approximation which is
 *     polished with a final Newton step.
 *
 *     For very large arguments, an algorithm of Wichura is used.
 *
 *  REFERENCE
 *
 *     Beasley, J. D. and S. G. Springer (1977).
 *     Algorithm AS 111: The percentage points of the normal distribution,
 *     Applied Statistics, 26, 118-121.
 *
 *      Wichura, M.J. (1988).
 *      Algorithm AS 241: The Percentage Points of the Normal Distribution.
 *      Applied Statistics, 37, 477-484.
 */

window.normsInv = function (p, mu, sigma) {
  if (p < 0 || p > 1) {
    throw "The probality p must be bigger than 0 and smaller than 1";
  }
  if (sigma < 0) {
    throw "The standard deviation sigma must be positive";
  }

  if (p == 0) {
    return -Infinity;
  }
  if (p == 1) {
    return Infinity;
  }
  if (sigma == 0) {
    return mu;
  }

  var q, r, val;

  q = p - 0.5;

  /*-- use AS 241 --- */
  /* double ppnd16_(double *p, long *ifault)*/
  /*      ALGORITHM AS241  APPL. STATIST. (1988) VOL. 37, NO. 3
          Produces the normal deviate Z corresponding to a given lower
          tail area of P; Z is accurate to about 1 part in 10**16.
  */
  if (Math.abs(q) <= .425) {
    /* 0.075 <= p <= 0.925 */
    r = .180625 - q * q;
    val = q * (((((((r * 2509.0809287301226727 + 33430.575583588128105) * r + 67265.770927008700853) * r + 45921.953931549871457) * r + 13731.693765509461125) * r + 1971.5909503065514427) * r + 133.14166789178437745) * r + 3.387132872796366608) / (((((((r * 5226.495278852854561 + 28729.085735721942674) * r + 39307.89580009271061) * r + 21213.794301586595867) * r + 5394.1960214247511077) * r + 687.1870074920579083) * r + 42.313330701600911252) * r + 1);
  } else {
    /* closer than 0.075 from {0,1} boundary */

    /* r = min(p, 1-p) < 0.075 */
    if (q > 0) r = 1 - p;else r = p;

    r = Math.Sqrt(-Math.log(r));
    /* r = sqrt(-log(r))  <==>  min(p, 1-p) = exp( - r^2 ) */

    if (r <= 5) {
      /* <==> min(p,1-p) >= exp(-25) ~= 1.3888e-11 */
      r += -1.6;
      val = (((((((r * 7.7454501427834140764e-4 + .0227238449892691845833) * r + .24178072517745061177) * r + 1.27045825245236838258) * r + 3.64784832476320460504) * r + 5.7694972214606914055) * r + 4.6303378461565452959) * r + 1.42343711074968357734) / (((((((r * 1.05075007164441684324e-9 + 5.475938084995344946e-4) * r + .0151986665636164571966) * r + .14810397642748007459) * r + .68976733498510000455) * r + 1.6763848301838038494) * r + 2.05319162663775882187) * r + 1);
    } else {
      /* very close to  0 or 1 */
      r += -5;
      val = (((((((r * 2.01033439929228813265e-7 + 2.71155556874348757815e-5) * r + .0012426609473880784386) * r + .026532189526576123093) * r + .29656057182850489123) * r + 1.7848265399172913358) * r + 5.4637849111641143699) * r + 6.6579046435011037772) / (((((((r * 2.04426310338993978564e-15 + 1.4215117583164458887e-7) * r + 1.8463183175100546818e-5) * r + 7.868691311456132591e-4) * r + .0148753612908506148525) * r + .13692988092273580531) * r + .59983220655588793769) * r + 1);
    }

    if (q < 0.0) {
      val = -val;
    }
  }

  return mu + sigma * val;
};

/**
 * Polyfills for backward compatibility
 */

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function (callback /*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}

// closest polyfill
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}

// foreach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// cloneNode polyfill
Element.prototype.cloneNode = function (nativeFunc, undefined) {
  return function (deep) {
    if (deep === undefined) {
      deep = false;
    }
    var clone = nativeFunc.call(this, deep);

    if ('checked' in this) clone.checked = this.checked;

    return clone;
  };
}(Element.prototype.cloneNode);

// queryselector polyfill
if (!document.querySelectorAll) {
  document.querySelectorAll = function (selectors) {
    var style = document.createElement('style'),
        elements = [],
        element;
    document.documentElement.firstChild.appendChild(style);
    document._qsa = [];

    style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
    window.scrollBy(0, 0);
    style.parentNode.removeChild(style);

    while (document._qsa.length) {
      element = document._qsa.shift();
      element.style.removeAttribute('x-qsa');
      elements.push(element);
    }
    document._qsa = null;
    return elements;
  };
}

if (!document.querySelector) {
  document.querySelector = function (selectors) {
    var elements = document.querySelectorAll(selectors);
    return elements.length ? elements[0] : null;
  };
}

// remove
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

// custom event
(function () {

  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

// remove
Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

// dataset
/**
 * Add dataset support to elements
 * No globals, no overriding prototype with non-standard methods,
 *   handles CamelCase properly, attempts to use standard
 *   Object.defineProperty() (and Function bind()) methods,
 *   falls back to native implementation when existing
 * Inspired by http://code.eligrey.com/html5/dataset/
 *   (via https://github.com/adalgiso/html5-dataset/blob/master/html5-dataset.js )
 * Depends on Function.bind and Object.defineProperty/Object.getOwnPropertyDescriptor (polyfills below)
 * All code below is Licensed under the X11/MIT License
*/

// Inspired by https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    'use strict';

    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        FNOP = function FNOP() {},
        fBound = function fBound() {
      return fToBind.apply(this instanceof FNOP && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
    };

    FNOP.prototype = this.prototype;
    fBound.prototype = new FNOP();

    return fBound;
  };
}

/*
 * Xccessors Standard: Cross-browser ECMAScript 5 accessors
 * http://purl.eligrey.com/github/Xccessors
 *
 * 2010-06-21
 *
 * By Eli Grey, http://eligrey.com
 *
 * A shim that partially implements Object.defineProperty,
 * Object.getOwnPropertyDescriptor, and Object.defineProperties in browsers that have
 * legacy __(define|lookup)[GS]etter__ support.
 *
 * Licensed under the X11/MIT License
 *   See LICENSE.md
*/

// Removed a few JSLint options as Notepad++ JSLint validator complaining and
//   made comply with JSLint; also moved 'use strict' inside function
/*jslint white: true, undef: true, plusplus: true,
  bitwise: true, regexp: true, newcap: true, maxlen: 90 */

/*! @source http://purl.eligrey.com/github/Xccessors/blob/master/xccessors-standard.js*/

(function () {
  'use strict';

  var ObjectProto = Object.prototype,
      defineGetter = ObjectProto.__defineGetter__,
      defineSetter = ObjectProto.__defineSetter__,
      lookupGetter = ObjectProto.__lookupGetter__,
      lookupSetter = ObjectProto.__lookupSetter__,
      hasOwnProp = ObjectProto.hasOwnProperty;

  if (defineGetter && defineSetter && lookupGetter && lookupSetter) {

    if (!Object.defineProperty) {
      Object.defineProperty = function (obj, prop, descriptor) {
        if (arguments.length < 3) {
          // all arguments required
          throw new TypeError("Arguments not optional");
        }

        prop += ""; // convert prop to string

        if (hasOwnProp.call(descriptor, "value")) {
          if (!lookupGetter.call(obj, prop) && !lookupSetter.call(obj, prop)) {
            // data property defined and no pre-existing accessors
            obj[prop] = descriptor.value;
          }

          if (hasOwnProp.call(descriptor, "get") || hasOwnProp.call(descriptor, "set")) {
            // descriptor has a value prop but accessor already exists
            throw new TypeError("Cannot specify an accessor and a value");
          }
        }

        // can't switch off these features in ECMAScript 3
        // so throw a TypeError if any are false
        if (!(descriptor.writable && descriptor.enumerable && descriptor.configurable)) {
          throw new TypeError("This implementation of Object.defineProperty does not support" + " false for configurable, enumerable, or writable.");
        }

        if (descriptor.get) {
          defineGetter.call(obj, prop, descriptor.get);
        }
        if (descriptor.set) {
          defineSetter.call(obj, prop, descriptor.set);
        }

        return obj;
      };
    }

    if (!Object.getOwnPropertyDescriptor) {
      Object.getOwnPropertyDescriptor = function (obj, prop) {
        if (arguments.length < 2) {
          // all arguments required
          throw new TypeError("Arguments not optional.");
        }

        prop += ""; // convert prop to string

        var descriptor = {
          configurable: true,
          enumerable: true,
          writable: true
        },
            getter = lookupGetter.call(obj, prop),
            setter = lookupSetter.call(obj, prop);

        if (!hasOwnProp.call(obj, prop)) {
          // property doesn't exist or is inherited
          return descriptor;
        }
        if (!getter && !setter) {
          // not an accessor so return prop
          descriptor.value = obj[prop];
          return descriptor;
        }

        // there is an accessor, remove descriptor.writable;
        // populate descriptor.get and descriptor.set (IE's behavior)
        delete descriptor.writable;
        descriptor.get = descriptor.set = undefined;

        if (getter) {
          descriptor.get = getter;
        }
        if (setter) {
          descriptor.set = setter;
        }

        return descriptor;
      };
    }

    if (!Object.defineProperties) {
      Object.defineProperties = function (obj, props) {
        var prop;
        for (prop in props) {
          if (hasOwnProp.call(props, prop)) {
            Object.defineProperty(obj, prop, props[prop]);
          }
        }
      };
    }
  }
})();

// Begin dataset code

if (!document.documentElement.dataset && (
// FF is empty while IE gives empty object
!Object.getOwnPropertyDescriptor(Element.prototype, 'dataset') || !Object.getOwnPropertyDescriptor(Element.prototype, 'dataset').get)) {
  var propDescriptor = {
    enumerable: true,
    get: function get() {
      'use strict';

      var i,
          that = this,
          HTML5_DOMStringMap,
          attrVal,
          attrName,
          propName,
          attribute,
          attributes = this.attributes,
          attsLength = attributes.length,
          toUpperCase = function toUpperCase(n0) {
        return n0.charAt(1).toUpperCase();
      },
          getter = function getter() {
        return this;
      },
          setter = function setter(attrName, value) {
        return typeof value !== 'undefined' ? this.setAttribute(attrName, value) : this.removeAttribute(attrName);
      };
      try {
        // Simulate DOMStringMap w/accessor support
        // Test setting accessor on normal object
        ({}).__defineGetter__('test', function () {});
        HTML5_DOMStringMap = {};
      } catch (e1) {
        // Use a DOM object for IE8
        HTML5_DOMStringMap = document.createElement('div');
      }
      for (i = 0; i < attsLength; i++) {
        attribute = attributes[i];
        // Fix: This test really should allow any XML Name without
        //         colons (and non-uppercase for XHTML)
        if (attribute && attribute.name && /^data-\w[\w\-]*$/.test(attribute.name)) {
          attrVal = attribute.value;
          attrName = attribute.name;
          // Change to CamelCase
          propName = attrName.substr(5).replace(/-./g, toUpperCase);
          try {
            Object.defineProperty(HTML5_DOMStringMap, propName, {
              enumerable: this.enumerable,
              get: getter.bind(attrVal || ''),
              set: setter.bind(that, attrName)
            });
          } catch (e2) {
            // if accessors are not working
            HTML5_DOMStringMap[propName] = attrVal;
          }
        }
      }
      return HTML5_DOMStringMap;
    }
  };
  try {
    // FF enumerates over element's dataset, but not
    //   Element.prototype.dataset; IE9 iterates over both
    Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
  } catch (e) {
    propDescriptor.enumerable = false; // IE8 does not allow setting to true
    Object.defineProperty(Element.prototype, 'dataset', propDescriptor);
  }
}

// classlist

/*
 * classList.js MOD by aMarCruz
 * 2015-05-07
 * Supports IE9+ and modern browsers.
 *
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ('classList' in document.createElement('_')) {

  // There is full or partial native classList support, so just check
  // if we need to normalize the add/remove and toggle APIs.

  !function () {
    'use strict';

    var c1 = 'c1';
    var c2 = 'c2';
    var testElement = document.createElement('_');

    // Polyfill for IE 10/11 and Firefox <26, where classList.add and
    // classList.remove exist but support only one argument at a time.

    testElement.classList.add(c1, c2);

    if (!testElement.classList.contains(c2)) {
      var createMethod = function createMethod(method) {
        var _method = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          for (var i = -1, len = arguments.length; ++i < len;) {
            token = arguments[i];
            _method.call(this, token);
          }
        };
      };
      createMethod('add');
      createMethod('remove');
    }

    // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
    // support the second argument.

    testElement.classList.toggle(c1, true);

    if (!testElement.classList.contains(c1)) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        }
        return _toggle.call(this, token);
      };
    }

    testElement = null;
  }();
} else {

  //-------------------------------------------------------------------
  // Full polyfill for browsers with no classList support
  //-------------------------------------------------------------------

  'Element' in view && function (view) {
    'use strict';

    var proto = 'prototype';
    var arrIndexOf = Array[proto].indexOf;

    // Vendors: please allow content code to instantiate DOMExceptions
    var DOMEx = function DOMEx(type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message;
    };

    // Most DOMException implementations don't allow calling DOMException's toString()
    // on non-DOMExceptions. Error's toString() is sufficient here.
    DOMEx[proto] = Error[proto];

    var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
      if (token === '') {
        throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
      }
      if (/\s/.test(token)) {
        throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
      }
      return arrIndexOf.call(classList, token);
    };

    //-- The ClassList "class"

    var ClassList = function ClassList(elem) {

      var classes = (elem.getAttribute('class') || '').trim();
      if (classes) {
        var classlist = classes.split(/\s+/);
        for (var i = -1, len = classlist.length; ++i < len;) {
          this.push(classlist[i]);
        }
      }

      // privileged method, called from public methods of classList
      this._updateClassName = function () {
        elem.setAttribute('class', this.toString());
      };
    };

    // ClassList inherit from Array
    var classListPrototype = ClassList[proto] = [];

    //-- Element.classList[i]: string || null

    classListPrototype.item = function (i) {
      return this[i] || null;
    };

    //-- Element.classList.add(...)
    // Adds a class to an element's list of classes.
    // If class already exists in the element's list of classes,
    // it will not add the class again.

    classListPrototype.add = function () {
      var tokens = arguments;
      var updated = false;

      for (var i = -1, len = tokens.length; ++i < len;) {
        var token = tokens[i] + '';
        if (checkTokenAndGetIndex(this, token) === -1) {
          this.push(token);
          updated = true;
        }
      }
      if (updated) {
        this._updateClassName();
      }
    };

    //-- Element.classList.remove(...)
    // Removes a class from an element's list of classes.
    // If class does not exist in the element's list of classes,
    // it will not throw an error or exception.

    classListPrototype.remove = function () {
      var tokens = arguments;
      var updated = false;
      var index;

      for (var i = -1, len = tokens.length; ++i < len;) {
        var token = tokens[i] + '';
        while ((index = checkTokenAndGetIndex(this, token)) !== -1) {
          this.splice(index, 1);
          updated = true;
        }
      }
      if (updated) {
        this._updateClassName();
      }
    };

    //-- Element.classList.toogle(... [, force])
    // Toggles the existence of a class in an element's list of classes
    // force: will force the class name to be added or removed based on the truthiness
    // of 'force'.
    // For example, to remove a class (if it exists or not) you can call
    // element.classList.toggle('classToBeRemoved', false);
    // and to add a class (if it exists or not) you can call
    // element.classList.toggle('classToBeAdded', true);

    classListPrototype.toggle = function (token, force) {

      token += ''; // ensure that is string

      if (this.contains(token)) {
        return force === true || (this.remove(token), false);
      }
      return force === false ? false : (this.add(token), true);
    };

    //-- Element.classList.toString()

    classListPrototype.toString = function () {
      return this.join(' ');
    };

    //-- Element.classList.contains(token): boolean
    // Checks if an element's list of classes contains a specific class.

    classListPrototype.contains = function (token) {
      return checkTokenAndGetIndex(this, token + '') !== -1;
    };

    // Element.classList Getter

    var classListGetter = function classListGetter() {
      return new ClassList(this);
    };

    Object.defineProperty(view.Element[proto], 'classList', {
      get: classListGetter,
      enumerable: true,
      configurable: true
    });
  }(self); // if ('Element' in view) && (function(v){..})(v)
}

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0+f046478d
 */

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ES6Promise = factory();
})(undefined, function () {
  'use strict';

  function objectOrFunction(x) {
    var type = typeof x === "undefined" ? "undefined" : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
  }

  function isFunction(x) {
    return typeof x === 'function';
  }

  var _isArray = undefined;
  if (Array.isArray) {
    _isArray = Array.isArray;
  } else {
    _isArray = function _isArray(x) {
      return Object.prototype.toString.call(x) === '[object Array]';
    };
  }

  var isArray = _isArray;

  var len = 0;
  var vertxNext = undefined;
  var customSchedulerFn = undefined;

  var asap = function asap(callback, arg) {
    queue[len] = callback;
    queue[len + 1] = arg;
    len += 2;
    if (len === 2) {
      // If len is 2, that means that we need to schedule an async flush.
      // If additional callbacks are queued before the queue is flushed, they
      // will be processed by this flush that we are scheduling.
      if (customSchedulerFn) {
        customSchedulerFn(flush);
      } else {
        scheduleFlush();
      }
    }
  };

  function setScheduler(scheduleFn) {
    customSchedulerFn = scheduleFn;
  }

  function setAsap(asapFn) {
    asap = asapFn;
  }

  var browserWindow = typeof window !== 'undefined' ? window : undefined;
  var browserGlobal = browserWindow || {};
  var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
  var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

  // test for web worker but not in IE10
  var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

  // node
  function useNextTick() {
    // node version 0.10.x displays a deprecation warning when nextTick is used recursively
    // see https://github.com/cujojs/when/issues/410 for details
    return function () {
      return process.nextTick(flush);
    };
  }

  // vertx
  function useVertxTimer() {
    if (typeof vertxNext !== 'undefined') {
      return function () {
        vertxNext(flush);
      };
    }

    return useSetTimeout();
  }

  function useMutationObserver() {
    var iterations = 0;
    var observer = new BrowserMutationObserver(flush);
    var node = document.createTextNode('');
    observer.observe(node, { characterData: true });

    return function () {
      node.data = iterations = ++iterations % 2;
    };
  }

  // web worker
  function useMessageChannel() {
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    return function () {
      return channel.port2.postMessage(0);
    };
  }

  function useSetTimeout() {
    // Store setTimeout reference so es6-promise will be unaffected by
    // other code modifying setTimeout (like sinon.useFakeTimers())
    var globalSetTimeout = setTimeout;
    return function () {
      return globalSetTimeout(flush, 1);
    };
  }

  var queue = new Array(1000);
  function flush() {
    for (var i = 0; i < len; i += 2) {
      var callback = queue[i];
      var arg = queue[i + 1];

      callback(arg);

      queue[i] = undefined;
      queue[i + 1] = undefined;
    }

    len = 0;
  }

  function attemptVertx() {
    try {
      var r = require;
      var vertx = r('vertx');
      vertxNext = vertx.runOnLoop || vertx.runOnContext;
      return useVertxTimer();
    } catch (e) {
      return useSetTimeout();
    }
  }

  var scheduleFlush = undefined;
  // Decide what async method to use to triggering processing of queued callbacks:
  if (isNode) {
    scheduleFlush = useNextTick();
  } else if (BrowserMutationObserver) {
    scheduleFlush = useMutationObserver();
  } else if (isWorker) {
    scheduleFlush = useMessageChannel();
  } else if (browserWindow === undefined && typeof require === 'function') {
    scheduleFlush = attemptVertx();
  } else {
    scheduleFlush = useSetTimeout();
  }

  function then(onFulfillment, onRejection) {
    var _arguments = arguments;

    var parent = this;

    var child = new this.constructor(noop);

    if (child[PROMISE_ID] === undefined) {
      makePromise(child);
    }

    var _state = parent._state;

    if (_state) {
      (function () {
        var callback = _arguments[_state - 1];
        asap(function () {
          return invokeCallback(_state, child, callback, parent._result);
        });
      })();
    } else {
      subscribe(parent, child, onFulfillment, onRejection);
    }

    return child;
  }

  /**
    `Promise.resolve` returns a promise that will become resolved with the
    passed `value`. It is shorthand for the following:

    ```javascript
    let promise = new Promise(function(resolve, reject){
      resolve(1);
    });

    promise.then(function(value){
      // value === 1
    });
    ```

    Instead of writing the above, your code now simply becomes the following:

    ```javascript
    let promise = Promise.resolve(1);

    promise.then(function(value){
      // value === 1
    });
    ```

    @method resolve
    @static
    @param {Any} value value that the returned promise will be resolved with
    Useful for tooling.
    @return {Promise} a promise that will become fulfilled with the given
    `value`
  */
  function resolve$1(object) {
    /*jshint validthis:true */
    var Constructor = this;

    if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object' && object.constructor === Constructor) {
      return object;
    }

    var promise = new Constructor(noop);
    resolve(promise, object);
    return promise;
  }

  var PROMISE_ID = Math.random().toString(36).substring(16);

  function noop() {}

  var PENDING = void 0;
  var FULFILLED = 1;
  var REJECTED = 2;

  var GET_THEN_ERROR = new ErrorObject();

  function selfFulfillment() {
    return new TypeError("You cannot resolve a promise with itself");
  }

  function cannotReturnOwn() {
    return new TypeError('A promises callback cannot return that same promise.');
  }

  function getThen(promise) {
    try {
      return promise.then;
    } catch (error) {
      GET_THEN_ERROR.error = error;
      return GET_THEN_ERROR;
    }
  }

  function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
    try {
      then$$1.call(value, fulfillmentHandler, rejectionHandler);
    } catch (e) {
      return e;
    }
  }

  function handleForeignThenable(promise, thenable, then$$1) {
    asap(function (promise) {
      var sealed = false;
      var error = tryThen(then$$1, thenable, function (value) {
        if (sealed) {
          return;
        }
        sealed = true;
        if (thenable !== value) {
          resolve(promise, value);
        } else {
          fulfill(promise, value);
        }
      }, function (reason) {
        if (sealed) {
          return;
        }
        sealed = true;

        reject(promise, reason);
      }, 'Settle: ' + (promise._label || ' unknown promise'));

      if (!sealed && error) {
        sealed = true;
        reject(promise, error);
      }
    }, promise);
  }

  function handleOwnThenable(promise, thenable) {
    if (thenable._state === FULFILLED) {
      fulfill(promise, thenable._result);
    } else if (thenable._state === REJECTED) {
      reject(promise, thenable._result);
    } else {
      subscribe(thenable, undefined, function (value) {
        return resolve(promise, value);
      }, function (reason) {
        return reject(promise, reason);
      });
    }
  }

  function handleMaybeThenable(promise, maybeThenable, then$$1) {
    if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
      handleOwnThenable(promise, maybeThenable);
    } else {
      if (then$$1 === GET_THEN_ERROR) {
        reject(promise, GET_THEN_ERROR.error);
        GET_THEN_ERROR.error = null;
      } else if (then$$1 === undefined) {
        fulfill(promise, maybeThenable);
      } else if (isFunction(then$$1)) {
        handleForeignThenable(promise, maybeThenable, then$$1);
      } else {
        fulfill(promise, maybeThenable);
      }
    }
  }

  function resolve(promise, value) {
    if (promise === value) {
      reject(promise, selfFulfillment());
    } else if (objectOrFunction(value)) {
      handleMaybeThenable(promise, value, getThen(value));
    } else {
      fulfill(promise, value);
    }
  }

  function publishRejection(promise) {
    if (promise._onerror) {
      promise._onerror(promise._result);
    }

    publish(promise);
  }

  function fulfill(promise, value) {
    if (promise._state !== PENDING) {
      return;
    }

    promise._result = value;
    promise._state = FULFILLED;

    if (promise._subscribers.length !== 0) {
      asap(publish, promise);
    }
  }

  function reject(promise, reason) {
    if (promise._state !== PENDING) {
      return;
    }
    promise._state = REJECTED;
    promise._result = reason;

    asap(publishRejection, promise);
  }

  function subscribe(parent, child, onFulfillment, onRejection) {
    var _subscribers = parent._subscribers;
    var length = _subscribers.length;

    parent._onerror = null;

    _subscribers[length] = child;
    _subscribers[length + FULFILLED] = onFulfillment;
    _subscribers[length + REJECTED] = onRejection;

    if (length === 0 && parent._state) {
      asap(publish, parent);
    }
  }

  function publish(promise) {
    var subscribers = promise._subscribers;
    var settled = promise._state;

    if (subscribers.length === 0) {
      return;
    }

    var child = undefined,
        callback = undefined,
        detail = promise._result;

    for (var i = 0; i < subscribers.length; i += 3) {
      child = subscribers[i];
      callback = subscribers[i + settled];

      if (child) {
        invokeCallback(settled, child, callback, detail);
      } else {
        callback(detail);
      }
    }

    promise._subscribers.length = 0;
  }

  function ErrorObject() {
    this.error = null;
  }

  var TRY_CATCH_ERROR = new ErrorObject();

  function tryCatch(callback, detail) {
    try {
      return callback(detail);
    } catch (e) {
      TRY_CATCH_ERROR.error = e;
      return TRY_CATCH_ERROR;
    }
  }

  function invokeCallback(settled, promise, callback, detail) {
    var hasCallback = isFunction(callback),
        value = undefined,
        error = undefined,
        succeeded = undefined,
        failed = undefined;

    if (hasCallback) {
      value = tryCatch(callback, detail);

      if (value === TRY_CATCH_ERROR) {
        failed = true;
        error = value.error;
        value.error = null;
      } else {
        succeeded = true;
      }

      if (promise === value) {
        reject(promise, cannotReturnOwn());
        return;
      }
    } else {
      value = detail;
      succeeded = true;
    }

    if (promise._state !== PENDING) {
      // noop
    } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
  }

  function initializePromise(promise, resolver) {
    try {
      resolver(function resolvePromise(value) {
        resolve(promise, value);
      }, function rejectPromise(reason) {
        reject(promise, reason);
      });
    } catch (e) {
      reject(promise, e);
    }
  }

  var id = 0;
  function nextId() {
    return id++;
  }

  function makePromise(promise) {
    promise[PROMISE_ID] = id++;
    promise._state = undefined;
    promise._result = undefined;
    promise._subscribers = [];
  }

  function Enumerator$1(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  function validationError() {
    return new Error('Array Methods must be provided an Array');
  }

  Enumerator$1.prototype._enumerate = function (input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator$1.prototype._eachEntry = function (entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;

    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$3) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator$1.prototype._settledAt = function (state, i, value) {
    var promise = this.promise;

    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator$1.prototype._willSettleAt = function (promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  /**
    `Promise.all` accepts an array of promises, and returns a new promise which
    is fulfilled with an array of fulfillment values for the passed promises, or
    rejected with the reason of the first passed promise to be rejected. It casts all
    elements of the passed iterable to promises as it runs this algorithm.

    Example:

    ```javascript
    let promise1 = resolve(1);
    let promise2 = resolve(2);
    let promise3 = resolve(3);
    let promises = [ promise1, promise2, promise3 ];

    Promise.all(promises).then(function(array){
      // The array here would be [ 1, 2, 3 ];
    });
    ```

    If any of the `promises` given to `all` are rejected, the first promise
    that is rejected will be given as an argument to the returned promises's
    rejection handler. For example:

    Example:

    ```javascript
    let promise1 = resolve(1);
    let promise2 = reject(new Error("2"));
    let promise3 = reject(new Error("3"));
    let promises = [ promise1, promise2, promise3 ];

    Promise.all(promises).then(function(array){
      // Code here never runs because there are rejected promises!
    }, function(error) {
      // error.message === "2"
    });
    ```

    @method all
    @static
    @param {Array} entries array of promises
    @param {String} label optional string for labeling the promise.
    Useful for tooling.
    @return {Promise} promise that is fulfilled when all `promises` have been
    fulfilled, or rejected if any of them become rejected.
    @static
  */
  function all$1(entries) {
    return new Enumerator$1(this, entries).promise;
  }

  /**
    `Promise.race` returns a new promise which is settled in the same way as the
    first passed promise to settle.

    Example:

    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });

    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 2');
      }, 100);
    });

    Promise.race([promise1, promise2]).then(function(result){
      // result === 'promise 2' because it was resolved before promise1
      // was resolved.
    });
    ```

    `Promise.race` is deterministic in that only the state of the first
    settled promise matters. For example, even if other promises given to the
    `promises` array argument are resolved, but the first settled promise has
    become rejected before the other promises became fulfilled, the returned
    promise will become rejected:

    ```javascript
    let promise1 = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('promise 1');
      }, 200);
    });

    let promise2 = new Promise(function(resolve, reject){
      setTimeout(function(){
        reject(new Error('promise 2'));
      }, 100);
    });

    Promise.race([promise1, promise2]).then(function(result){
      // Code here never runs
    }, function(reason){
      // reason.message === 'promise 2' because promise 2 became rejected before
      // promise 1 became fulfilled
    });
    ```

    An example real-world use case is implementing timeouts:

    ```javascript
    Promise.race([ajax('foo.json'), timeout(5000)])
    ```

    @method race
    @static
    @param {Array} promises array of promises to observe
    Useful for tooling.
    @return {Promise} a promise which settles in the same way as the first passed
    promise to settle.
  */
  function race$1(entries) {
    /*jshint validthis:true */
    var Constructor = this;

    if (!isArray(entries)) {
      return new Constructor(function (_, reject) {
        return reject(new TypeError('You must pass an array to race.'));
      });
    } else {
      return new Constructor(function (resolve, reject) {
        var length = entries.length;
        for (var i = 0; i < length; i++) {
          Constructor.resolve(entries[i]).then(resolve, reject);
        }
      });
    }
  }

  /**
    `Promise.reject` returns a promise rejected with the passed `reason`.
    It is shorthand for the following:

    ```javascript
    let promise = new Promise(function(resolve, reject){
      reject(new Error('WHOOPS'));
    });

    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```

    Instead of writing the above, your code now simply becomes the following:

    ```javascript
    let promise = Promise.reject(new Error('WHOOPS'));

    promise.then(function(value){
      // Code here doesn't run because the promise is rejected!
    }, function(reason){
      // reason.message === 'WHOOPS'
    });
    ```

    @method reject
    @static
    @param {Any} reason value that the returned promise will be rejected with.
    Useful for tooling.
    @return {Promise} a promise rejected with the given `reason`.
  */
  function reject$1(reason) {
    /*jshint validthis:true */
    var Constructor = this;
    var promise = new Constructor(noop);
    reject(promise, reason);
    return promise;
  }

  function needsResolver() {
    throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
  }

  function needsNew() {
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  }

  /**
    Promise objects represent the eventual result of an asynchronous operation. The
    primary way of interacting with a promise is through its `then` method, which
    registers callbacks to receive either a promise's eventual value or the reason
    why the promise cannot be fulfilled.

    Terminology
    -----------

    - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
    - `thenable` is an object or function that defines a `then` method.
    - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
    - `exception` is a value that is thrown using the throw statement.
    - `reason` is a value that indicates why a promise was rejected.
    - `settled` the final resting state of a promise, fulfilled or rejected.

    A promise can be in one of three states: pending, fulfilled, or rejected.

    Promises that are fulfilled have a fulfillment value and are in the fulfilled
    state.  Promises that are rejected have a rejection reason and are in the
    rejected state.  A fulfillment value is never a thenable.

    Promises can also be said to *resolve* a value.  If this value is also a
    promise, then the original promise's settled state will match the value's
    settled state.  So a promise that *resolves* a promise that rejects will
    itself reject, and a promise that *resolves* a promise that fulfills will
    itself fulfill.


    Basic Usage:
    ------------

    ```js
    let promise = new Promise(function(resolve, reject) {
      // on success
      resolve(value);

      // on failure
      reject(reason);
    });

    promise.then(function(value) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```

    Advanced Usage:
    ---------------

    Promises shine when abstracting away asynchronous interactions such as
    `XMLHttpRequest`s.

    ```js
    function getJSON(url) {
      return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

        function handler() {
          if (this.readyState === this.DONE) {
            if (this.status === 200) {
              resolve(this.response);
            } else {
              reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
            }
          }
        };
      });
    }

    getJSON('/posts.json').then(function(json) {
      // on fulfillment
    }, function(reason) {
      // on rejection
    });
    ```

    Unlike callbacks, promises are great composable primitives.

    ```js
    Promise.all([
      getJSON('/posts'),
      getJSON('/comments')
    ]).then(function(values){
      values[0] // => postsJSON
      values[1] // => commentsJSON

      return values;
    });
    ```

    @class Promise
    @param {function} resolver
    Useful for tooling.
    @constructor
  */
  function Promise$3(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise$3 ? initializePromise(this, resolver) : needsNew();
    }
  }

  Promise$3.all = all$1;
  Promise$3.race = race$1;
  Promise$3.resolve = resolve$1;
  Promise$3.reject = reject$1;
  Promise$3._setScheduler = setScheduler;
  Promise$3._setAsap = setAsap;
  Promise$3._asap = asap;

  Promise$3.prototype = {
    constructor: Promise$3,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.
       ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```
       Chaining
      --------
       The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.
       ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });
       findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
       ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```
       Assimilation
      ------------
       Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.
       ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```
       If the assimliated promise rejects, then the downstream promise will also reject.
       ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```
       Simple Example
      --------------
       Synchronous Example
       ```javascript
      let result;
       try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```
       Errback Example
       ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```
       Promise Example;
       ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```
       Advanced Example
      --------------
       Synchronous Example
       ```javascript
      let author, books;
       try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```
       Errback Example
       ```js
       function foundBooks(books) {
       }
       function failure(reason) {
       }
       findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```
       Promise Example;
       ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```
       @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
    then: then,

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.
       ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }
       // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }
       // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```
       @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
    'catch': function _catch(onRejection) {
      return this.then(null, onRejection);
    }
  };

  /*global self*/
  function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
      local = global;
    } else if (typeof self !== 'undefined') {
      local = self;
    } else {
      try {
        local = Function('return this')();
      } catch (e) {
        throw new Error('polyfill failed because global object is unavailable in this environment');
      }
    }

    var P = local.Promise;

    if (P) {
      var promiseToString = null;
      try {
        promiseToString = Object.prototype.toString.call(P.resolve());
      } catch (e) {
        // silently ignored
      }

      if (promiseToString === '[object Promise]' && !P.cast) {
        return;
      }
    }

    local.Promise = Promise$3;
  }

  // Strange compat..
  Promise$3.polyfill = polyfill$1;
  Promise$3.Promise = Promise$3;

  Promise$3.polyfill();

  return Promise$3;
});

// Fetch
//
(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

// array fill polyfill

if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function value(_value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ? len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = _value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}

/*! npm.im/scroll-restoration-polyfill */
!function () {
  "use strict"; /*! npm.im/one-event */

  function e(e, n, t, o) {
    e.addEventListener(n, t, o), e.addEventListener(n, function r() {
      e.removeEventListener(n, t, o), e.removeEventListener(n, r, o);
    }, o);
  }function n() {
    return window.pageYOffset || document.body.scrollTop;
  }function t() {
    return window.pageXOffset || document.body.scrollLeft;
  }function o() {
    e(window, "scroll", scrollTo.bind(window, t(), n()));
  }e.promise = function (n, t, o) {
    return new Promise(function (r) {
      return e(n, t, r, o);
    });
  };var r = "auto";"scrollRestoration" in history || Object.defineProperty(history, "scrollRestoration", { enumerable: !0, get: function get() {
      return r;
    }, set: function set(e) {
      e !== r && ("auto" === e ? (window.removeEventListener("popstate", o), r = e) : "manual" === e && (window.addEventListener("popstate", o), r = e));
    } });
}();

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":1}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


var _Model = require("./Model");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "dispatch",


    /**
     * Dispatches custom event
     * @param  {String} event
     * @param  {Object} payload { key: val }
     */
    value: function dispatch(event, payload) {
      var customEvent = new CustomEvent(event, { detail: payload });
      document.dispatchEvent(customEvent);
    }

    /**
     * Shuffle array
     * @param  {Array} array
     * @return {Array}
     */

  }, {
    key: "shuffle",
    value: function shuffle(array) {
      var counter = array.length;
      while (counter > 0) {
        var index = Math.floor(Math.random() * counter);

        counter--;

        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }

      return array;
    }

    /**
     * Get path
     * @return {String}
     */

  }, {
    key: "getPath",
    value: function getPath() {
      var arr = window.location.pathname.split("/");
      var folder = _Model.model.folder.split("/");
      arr = arr.filter(function (item) {
        return item !== "" && !folder.includes(item);
      });

      if (!arr.length) {
        arr[0] = "/";
      }

      return arr;
    }

    /**
     * Get index of item in collection
     * @param  {NodeList} collection
     * @param  {DOMElement} target
     * @return {Integer}
     */

  }, {
    key: "getIndex",
    value: function getIndex(collection, target) {
      return [].indexOf.call(collection, target);
    }

    /**
     * Get array from NodeList
     * @param  {NodeList} nodelist
     * @return {Array}
     */

  }, {
    key: "getArrayFromNodeList",
    value: function getArrayFromNodeList(nodelist) {
      return Array.from(nodelist);
    }

    /**
     * titlecase
     * @param  {String} str
     */

  }, {
    key: "toTitleCase",
    value: function toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    /**
     * Get url params
     * @return {[type]} [description]
     */

  }, {
    key: "getURLParams",
    value: function getURLParams() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
      });
      return vars;
    }

    /**
     * Is touch device
     * @return {Boolean}
     */

  }, {
    key: "isTouchDevice",
    value: function isTouchDevice() {
      return "ontouchstart" in document.documentElement;
    }

    /**
     * throttle events
     * @param  {Function} fn
     * @param  {Number}   wait
     */

  }, {
    key: "throttle",
    value: function throttle(fn, wait) {
      var time = Date.now();
      return function () {
        if (time + wait - Date.now() < 0) {
          fn();
          time = Date.now();
        }
      };
    }

    /**
     * debounce
     * @param  {Function} func
     * @param  {Number} wait
     * @param  {Boolean} immediate
     * @return {Function}
     */

  }, {
    key: "debounce",
    value: function debounce(func, wait, immediate) {
      var _this = this,
          _arguments = arguments;

      var timeout = void 0;
      return function () {
        var context = _this,
            args = _arguments;
        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    /**
     * Abbreviate trillion, billion, million, thousands
     * @param  {Number} number
     * @param  {Number} maxPlaces
     * @param  {Number} forcePlaces
     * @param  {String} forceLetter
     * @return {String}
     */

  }, {
    key: "abbreviate",
    value: function abbreviate(number, maxPlaces, forcePlaces, forceLetter) {
      number = Number(number);
      forceLetter = forceLetter || false;
      if (forceLetter !== false) {
        return this.annotate(number, maxPlaces, forcePlaces, forceLetter);
      }
      var abbr;
      if (number >= 1e12) {
        abbr = 't';
      } else if (number >= 1e9) {
        abbr = 'b';
      } else if (number >= 1e6) {
        abbr = 'm';
      } else if (number >= 1e3) {
        abbr = 'k';
      } else {
        abbr = '';
      }
      return this.annotate(number, maxPlaces, forcePlaces, abbr);
    }

    /**
     * Annotate
     * @param  {Number} number
     * @param  {Number} maxPlaces
     * @param  {Number} forcePlaces
     * @param  {String} abbr
     * @return {String}
     */

  }, {
    key: "annotate",
    value: function annotate(number, maxPlaces, forcePlaces, abbr) {
      // set places to false to not round
      var rounded = 0;
      switch (abbr) {
        case 't':
          rounded = number / 1e12;
          break;
        case 'b':
          rounded = number / 1e9;
          break;
        case 'm':
          rounded = number / 1e6;
          break;
        case 'k':
          rounded = number / 1e3;
          break;
        case '':
          rounded = number;
          break;
      }
      if (maxPlaces !== false) {
        var test = new RegExp('\\.\\d{' + (maxPlaces + 1) + ',}$');
        if (test.test('' + rounded)) {
          rounded = rounded.toFixed(maxPlaces);
        }
      }
      if (forcePlaces !== false) {
        rounded = Number(rounded).toFixed(forcePlaces);
      }
      return rounded + abbr;
    }

    /**
     * Get browser
     */

  }, {
    key: "get_browser",
    value: function get_browser() {
      var ua = navigator.userAgent,
          tem,
          M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE', version: tem[1] || '' };
      }
      if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR|Edge\/(\d+)/);
        if (tem != null) {
          return { name: 'Opera', version: tem[1] };
        }
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
      }

      var version = M[1].indexOf(" ") > -1 ? M[1].slice(0, M[1].indexOf(" ")) : M[1];
      version = version.replace("(", "").replace(")", "").replace(";", "").replace("/", "").replace(",", "");

      return {
        name: M[0],
        version: version
      };
    }

    /**
     * Serialize form
     * @param  {DOMElement} form
     * @return {String}     serialized form data
     */

  }, {
    key: "serialize",
    value: function serialize(form) {

      // Setup our serialized data
      var serialized = [];

      // Loop through each field in the form
      for (var i = 0; i < form.elements.length; i++) {

        var field = form.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
          for (var n = 0; n < field.options.length; n++) {
            if (!field.options[n].selected) continue;
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
          }
        }

        // Convert field data to a query string
        else if (field.type !== 'checkbox' && field.type !== 'radio' || field.checked) {
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
          }
      }

      return serialized.join('&');
    }

    /**
     * Get passive event params
     * @return {Object} Used with passive events for performance (mousemove, etc)
     */

  }, {
    key: "getPassive",
    value: function getPassive() {
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener("testPassive", null, opts);
        window.removeEventListener("testPassive", null, opts);
      } catch (e) {}

      var passiveObj = supportsPassive ? { passive: true } : false;

      return passiveObj;
    }

    /**
     * is retina
     * @return {Boolean}
     */

  }, {
    key: "isRetina",
    value: function isRetina() {
      return (window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches) || window.devicePixelRatio && window.devicePixelRatio >= 2) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    }

    /**
     * download file
     * @param  {String} url
     */

  }, {
    key: "download",
    value: function download(url) {
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "blob";
      req.onload = function (event) {
        var blob = req.response;
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);

        var filename = url.slice(url.lastIndexOf("/") + 1, url.length);
        link.download = filename;
        link.click();
      };

      req.send();
    }
  }]);

  return Utils;
}();

exports.default = Utils;

},{"./Model":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Accordion = function () {
  function Accordion() {
    _classCallCheck(this, Accordion);

    this.resize();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(Accordion, [{
    key: "events",
    value: function events() {
      var _this = this;

      document.addEventListener("FRY_REGLET:GRID_UPDATED", function (event) {
        return _this.onGridUpdated(event);
      });

      // click
      document.addEventListener("click", function (event) {
        return _this.onClick(event);
      });

      // popstate
      window.addEventListener("popstate", function (event) {
        return _this.onPopState(event);
      });

      // ticker
      var fn = _Utils2.default.debounce(this.resize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // after page animate in
      document.addEventListener("FRY_REGLET:AFTER_PAGE_CHANGE", function (event) {
        return _this.afterPageChange(event);
      });

      document.addEventListener("FRY_REGLET:ACCORDION:GRID:UPDATE", function (event) {
        return _this.onGridUpdate(event);
      });
    }
  }, {
    key: "onGridUpdate",
    value: function onGridUpdate() {
      var _this2 = this;

      if (!this.drawers) return;

      this.drawers.forEach(function (drawer) {
        if (drawer.dataset.open === "true") {
          _this2.expandAccordion(drawer, true);
        } else if (drawer.dataset.open === "false") {
          _this2.collapseAccordion(drawer, false);
        }
      });
    }

    /**
     * grid updated
     */

  }, {
    key: "onGridUpdated",
    value: function onGridUpdated() {
      this.navigating = false;
    }

    /**
     * on Page Change
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange(event) {
      var area = event.detail && event.detail.area || document;
      this.drawers = area.querySelectorAll(".accordion-drawer");
      this.filterLoader = document.querySelector(".filter-loader");

      var path = _Utils2.default.getPath();
      if (path[0] === "quote") return;

      this.toggleAccordionItems(true);
    }

    /**
     * Pop state
     */

  }, {
    key: "onPopState",
    value: function onPopState() {
      this.toggleAccordionItems();
    }

    /**
     * Toggle accordion items
     */

  }, {
    key: "toggleAccordionItems",
    value: function toggleAccordionItems(firstRun) {
      var _this3 = this;

      var sidebarItems = document.querySelectorAll(".sidebar-item");
      var search = window.location.search.replace("?", "");
      var params = search.split("&");

      var activeItems = [];
      var inactiveItems = [];

      // loop over url params
      params.forEach(function (param) {
        var item = param.split("=");
        var prop = item[0];

        if (!item[1]) return;

        var values = item[1].split(",");

        // loop over values
        values.forEach(function (value) {

          // loop over and set sidebar items
          sidebarItems.forEach(function (sidebarItem, index) {
            if (prop === sidebarItem.dataset.parent && value === sidebarItem.id) {
              activeItems.push(index);
            }
          });
        });

        sidebarItems.forEach(function (activeItem, index) {
          var turnOff = activeItems.includes(index) ? true : false;
          activeItem.classList.toggle("active", turnOff);

          if (turnOff) {
            _this3.setText(activeItem);
          }
        });
      });

      if (!search) {
        sidebarItems.forEach(function (activeItem, index) {
          var turnOff = false;
          activeItem.classList.toggle("active", turnOff);
        });
      }

      this.drawers.forEach(function (drawer, index) {
        if (index === 0) {
          _this3.expandAccordion(drawer, firstRun ? false : true);
        } else {
          _this3.collapseAccordion(drawer, firstRun ? false : true);
        }
      });
    }

    /**
     * fire trigger
     * @param  {MouseEvent} event
     */

  }, {
    key: "fireTrigger",
    value: function fireTrigger(event) {
      var _this4 = this;

      // accordion trigger
      var trigger = event.target.closest(".accordion-trigger");
      if (trigger) {
        var parent = trigger.closest(".sidebar-accordion");
        var selectedDrawer = parent.querySelector(".accordion-drawer");

        this.drawers.forEach(function (drawer) {
          if (selectedDrawer === drawer) {
            _this4.toggleAccordion(drawer);
          } else if (selectedDrawer !== drawer) {
            _this4.collapseAccordion(drawer);
          }
        });

        event.preventDefault();
      } else {
        var accordion = event.target.closest(".sidebar-accordion");

        if (accordion) {
          var _selectedDrawer = accordion.querySelector(".accordion-drawer");
          if (_selectedDrawer.dataset.open === "false") {
            this.drawers.forEach(function (drawer) {
              if (_selectedDrawer === drawer) {
                _this4.toggleAccordion(drawer);
              } else if (_selectedDrawer !== drawer) {
                _this4.collapseAccordion(drawer);
              }
            });
          }

          event.preventDefault();
        }
      }
    }

    /**
     * Click handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {

      // if(!Utils.isTouchDevice()) {
      this.fireTrigger(event);
      // }

      // sidebar item
      var sidebarItem = event.target.closest(".sidebar-item:not([disabled])");
      if (sidebarItem) {
        event.preventDefault();

        if (!_Utils2.default.isTouchDevice() && this.navigating) return;

        this.navigating = true;
        this.sidebarItemClicked(sidebarItem);
      }

      // clear button
      var clear = event.target.closest("#sidebar-clear");
      if (clear) {
        this.clear();
      }
    }

    /**
     * sidebar item clicked
     * @param  {DOMElement} sidebarItem
     */

  }, {
    key: "sidebarItemClicked",
    value: function sidebarItemClicked(sidebarItem) {
      var _this5 = this;

      // set sidebar item
      this.setSidebarItems(sidebarItem);

      // selectors
      var currentDrawer = sidebarItem.closest(".accordion-drawer");
      var index = _Utils2.default.getIndex(this.drawers, currentDrawer);
      var isActive = sidebarItem.classList.contains("active");

      // reset drawers if first item clicked
      if (index === 0) {
        this.drawers.forEach(function (drawer, index) {
          if (index !== 0) {
            _this5.resetDrawer(drawer);
          }
        });
      }

      // if mobile, add filter loader
      if (this.screen.type === "mobile") {
        this.filterLoader.classList.remove("hide");
      }

      // fire filter
      var delay = this.screen.type === "mobile" ? 1 : 0.2;
      TweenMax.delayedCall(delay, function () {
        _Utils2.default.dispatch("FRY_REGLET:FILTER");

        TweenMax.delayedCall(0.1, function () {
          // auto-navigate to next panel if selection is active
          if (sidebarItem.classList.contains("active")) {
            _this5.setDrawers(sidebarItem);
          }
        });
      });

      // remove loader
      if (this.screen.type === "mobile") {
        TweenMax.delayedCall(1, function () {
          _this5.filterLoader.classList.add("hide");
        });
      }
    }

    /**
     * reset drawer
     * @param  {DOMElement} drawer
     */

  }, {
    key: "resetDrawer",
    value: function resetDrawer(drawer) {
      var selectedItem = drawer.querySelector(".selected-item");
      var selectedItemText = drawer.querySelector(".selected-item-text");

      // remove all actives
      var actives = drawer.querySelectorAll(".active");
      actives.forEach(function (sidebarItem) {
        sidebarItem.classList.remove("active");
      });

      var fixedContainer = drawer.querySelector(".accordion-drawer-container");

      var index = _Utils2.default.getIndex(this.drawers, drawer);
      var endHeight = index === 0 ? fixedContainer.clientHeight : 0;
      var val = { height: drawer.clientHeight };

      TweenMax.to(drawer, 0.6, {
        height: endHeight,
        ease: Cubic.easeInOut,
        onComplete: function onComplete() {
          var selectedItem = drawer.querySelector(".selected-item");
          var selectedItemText = drawer.querySelector(".selected-item-text");
          selectedItemText.innerHTML = "";
          TweenMax.set(selectedItem, { autoAlpha: 0 });
        }
      });

      if (index !== 0) {
        drawer.dataset.open = "false";
      }
    }

    /**
     * clear options
     */

  }, {
    key: "clearOptions",
    value: function clearOptions() {
      var _this6 = this;

      var accordion = this.drawers[0].closest(".sidebar");

      TweenMax.to(accordion, 0.2, { scrollTo: {
          y: 0,
          autoKill: false
        },
        ease: Quad.easeInOut,
        onComplete: function onComplete() {
          _this6.resetOptions();
        }
      });
    }

    /**
     * reset options
     */

  }, {
    key: "resetOptions",
    value: function resetOptions() {
      var _this7 = this;

      var sidebarItems = document.querySelectorAll(".accordion-drawer .sidebar-item.active");
      sidebarItems.forEach(function (active) {
        active.classList.remove("active");
      });

      this.drawers.forEach(function (drawer, index) {
        var fixedContainer = drawer.querySelector(".accordion-drawer-container");

        if (index === 0) {
          _this7.turnOnAccordion(drawer);
        }

        var endHeight = index === 0 ? fixedContainer.clientHeight : 0;
        var val = { height: drawer.clientHeight };

        TweenMax.to(drawer, 0.6, {
          height: endHeight,
          ease: Cubic.easeInOut,
          onComplete: function onComplete() {
            var selectedItem = drawer.querySelector(".selected-item");
            var selectedItemText = drawer.querySelector(".selected-item-text");
            selectedItemText.innerHTML = "";
            TweenMax.set(selectedItem, { autoAlpha: 0 });
          }
        });

        if (index !== 0) {
          drawer.dataset.open = "false";
        }
      });
    }

    /**
     * clear
     */

  }, {
    key: "clear",
    value: function clear() {
      this.setSidebarItems(null);

      this.clearOptions();

      var path = _Utils2.default.getPath();
      var newPath = _Model.model.baseurl + _Model.model.folder + path[0];

      window.history.pushState({ url: newPath }, "", newPath);

      TweenMax.delayedCall(0.2, function () {
        _Utils2.default.dispatch("FRY_REGLET:CLEAR");
      });
    }

    /**
     * Set accordion drawers
     * @param {DOMElement} sidebarItem
     */

  }, {
    key: "setDrawers",
    value: function setDrawers(sidebarItem) {
      var drawer = sidebarItem.closest(".accordion-drawer");
      var drawers = _Utils2.default.getArrayFromNodeList(this.drawers);
      var index = _Utils2.default.getIndex(drawers, drawer) + 1;

      var nextDrawer = this.drawers[index];
      this.openAccordion(nextDrawer);
    }

    /**
     * Toggle Accordions open/closed
     * @param  {DOMElement} selectedDrawer
     */

  }, {
    key: "toggleAccordion",
    value: function toggleAccordion(selectedDrawer) {
      var _this8 = this;

      this.drawers.forEach(function (drawer) {
        if (selectedDrawer === drawer && drawer.dataset.open === "false") {
          _this8.expandAccordion(drawer);
        } else if (selectedDrawer === drawer && drawer.dataset.open === "true") {
          _this8.collapseAccordion(drawer);
        } else if (selectedDrawer !== drawer && drawer.dataset.open === "true") {
          _this8.collapseAccordion(drawer);
        }
      });
    }

    /**
     * open Accordions open/closed
     * @param  {DOMElement} selectedDrawer
     */

  }, {
    key: "openAccordion",
    value: function openAccordion(selectedDrawer) {
      var _this9 = this;

      this.drawers.forEach(function (drawer) {
        if (selectedDrawer === drawer) {
          _this9.expandAccordion(drawer);
        } else {
          _this9.collapseAccordion(drawer);
        }
      });
    }

    /**
     * Expand accordion
     * @param  {DOMElement} drawer
     */

  }, {
    key: "expandAccordion",
    value: function expandAccordion(drawer) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


      var sidebar = drawer.closest(".sidebar");

      var parent = drawer.closest("[data-basic-accordion-drawer]");
      var initDisplay = parent.style.display !== "" ? parent.style.display : "none";

      TweenMax.set(sidebar, { display: "block" });
      TweenMax.set(parent, { display: "block" });

      var container = drawer.querySelector(".accordion-drawer-container");
      var endHeight = container.clientHeight;

      var val = { height: drawer.clientHeight };

      if (this.screen.type === "mobile") {
        TweenMax.set(sidebar, { display: initDisplay });
        TweenMax.set(parent, { display: initDisplay });
      }

      var speed = animate ? 0.6 : 0;

      TweenMax.to(val, speed, {
        height: endHeight,
        ease: Cubic.easeInOut,
        onUpdate: function onUpdate(e) {
          TweenMax.set(drawer, { height: val.height });
          _Utils2.default.dispatch("FRY_REGLET:ACCORDION:UPDATE");
        }
      });

      this.turnOnAccordion(drawer, animate);

      drawer.dataset.open = "true";
    }
  }, {
    key: "turnOnAccordion",
    value: function turnOnAccordion(drawer) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var selectedItem = drawer.querySelector(".selected-item");
      var items = drawer.querySelector(".accordion-items");

      var speed = animate ? 0.3 : 0;
      TweenMax.to(items, speed, {
        display: "flex",
        autoAlpha: 1,
        ease: Linear.easeNone,
        zIndex: 10
      });

      TweenMax.to(selectedItem, speed, {
        autoAlpha: 0,
        ease: Linear.easeNone
      });
    }

    /**
     * Collapse accordion
     * @param  {DOMElement} drawer
     */

  }, {
    key: "collapseAccordion",
    value: function collapseAccordion(drawer) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


      // get height
      var parent = drawer.closest("[data-basic-accordion-drawer]");
      var initDisplay = parent.style.display;
      TweenMax.set(parent, { display: "block" });

      var active = drawer.querySelector(".active");
      var drawerHeight = drawer.clientHeight;
      var offset = window.innerWidth < 768 ? 15 : 25;
      var sidebarItemHeight = 16;
      var endHeight = active ? sidebarItemHeight + offset : 0;

      TweenMax.set(parent, { display: initDisplay });

      var index = _Utils2.default.getIndex(this.drawers, drawer);

      var val = { height: drawerHeight };
      var speed = animate ? 0.6 : 0;
      TweenMax.to(val, speed, {
        height: endHeight,
        ease: Cubic.easeInOut,
        onUpdate: function onUpdate(e) {
          TweenMax.set(drawer, { height: val.height });
          _Utils2.default.dispatch("FRY_REGLET:ACCORDION:UPDATE");
        }
      });

      this.turnOffAccordion(drawer, animate);

      drawer.dataset.open = "false";
    }
  }, {
    key: "turnOffAccordion",
    value: function turnOffAccordion(drawer) {
      var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var items = drawer.querySelector(".accordion-items");
      var selectedItem = drawer.querySelector(".selected-item");
      var selectedItemText = selectedItem.querySelector(".selected-item-text");

      var speed = animate ? 0.3 : 0;
      TweenMax.to(items, speed, {
        autoAlpha: 0,
        ease: Linear.easeNone,
        zIndex: -10
      });

      if (selectedItemText.innerHTML !== "") {
        TweenMax.to(selectedItem, speed, {
          autoAlpha: 1,
          ease: Linear.easeNone
        });
      }
    }

    /**
     * set sidebar items
     * @param {DOMElement} selectedSidebarItem
     */

  }, {
    key: "setSidebarItems",
    value: function setSidebarItems(selectedSidebarItem) {
      var sidebarItems = document.querySelectorAll(".sidebar-item");

      // activate sidebar items
      sidebarItems.forEach(function (sidebarItem) {
        if (selectedSidebarItem && selectedSidebarItem === sidebarItem) {
          sidebarItem.classList.toggle("active");
        } else if (!selectedSidebarItem || sidebarItem.dataset.parent === selectedSidebarItem.dataset.parent) {
          sidebarItem.classList.remove("active");
        }
      });

      // set selected text
      if (selectedSidebarItem) {
        this.setText(selectedSidebarItem);
      }
    }

    /**
     * set selected text
     */

  }, {
    key: "setText",
    value: function setText(item) {
      var parent = item.closest(".sidebar-accordion");
      var selectedItem = parent.querySelector(".selected-item");
      var selectedItemText = parent.querySelector(".selected-item-text");
      var currentItemText = parent.querySelector(".sidebar-item.active .sidebar-item-text");

      if (currentItemText) {
        selectedItemText.innerHTML = currentItemText.innerHTML;
      }

      selectedItem.classList.toggle("hide", !currentItemText);
    }

    /**
     * resize accordions
     */

  }, {
    key: "resizeAccordions",
    value: function resizeAccordions() {
      var _this10 = this;

      if (!this.drawers) return;

      this.drawers.forEach(function (drawer) {
        if (drawer.dataset.open === "true") {
          _this10.expandAccordion(drawer, false);
        } else if (drawer.dataset.open === "false") {
          _this10.collapseAccordion(drawer, false);
        }
      });
    }

    /**
     * resize
     */

  }, {
    key: "resize",
    value: function resize() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      if (!this.screen || this.screen.width !== width || this.screen.height !== height) {
        this.screen = { width: width, height: height, type: type };

        this.resizeAccordions();
      }

      this.lastType = type;
    }
  }]);

  return Accordion;
}();

exports.default = Accordion;

},{"../common/Model":4,"../common/Utils":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicAccordion = function () {
  function BasicAccordion() {
    _classCallCheck(this, BasicAccordion);

    this.template = document.querySelector(".template");
    this.ajaxContent = document.querySelector("#ajax-content");

    this.onScroll();
    this.resizeHandler();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(BasicAccordion, [{
    key: "events",
    value: function events() {
      var _this = this;

      if (_Utils2.default.isTouchDevice()) {
        // touchstart
        document.addEventListener("touchstart", function (event) {
          return _this.onClick(event, false);
        });
      } else {
        // click
        document.addEventListener("click", function (event) {
          return _this.onClick(event);
        });
      }

      // before page changes
      document.addEventListener("FRY_REGLET:BEFORE_PAGE_CHANGE", function (event) {
        return _this.beforePageChange(event);
      });

      // on page unlocks
      document.addEventListener("FRY_REGLET:UNLOCK_PAGES", function (event) {
        return _this.onUnlockPages(event);
      });

      // page complete
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.onPageComplete(event);
      });

      // nav open
      document.addEventListener("FRY_REGLET:NAV:OPEN", function (event) {
        return _this.onNavOpen(event);
      });

      // grid updated
      document.addEventListener("FRY_REGLET:GRID_UPDATED", function (event) {
        return _this.onGridUpdated();
      });

      // accordion update
      document.addEventListener("FRY_REGLET:ACCORDION:UPDATE", function (event) {
        return _this.resizeHandler(event);
      });

      // resize
      var fn = _Utils2.default.debounce(this.resizeHandler.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // scroll
      var scrollFn = _Utils2.default.debounce(this.onScroll.bind(this), 10);
      document.addEventListener("scroll", scrollFn, _Utils2.default.getPassive);
    }

    /**
     * on scroll
     */

  }, {
    key: "onScroll",
    value: function onScroll() {
      this.scroll = window.scrollY || window.pageYOffset;
    }

    /**
     * on grid updated
     */

  }, {
    key: "onGridUpdated",
    value: function onGridUpdated() {
      this.lastPinnedPosition = 0;
      // this.setScroll();
    }

    /**
     * nav open
     */

  }, {
    key: "onNavOpen",
    value: function onNavOpen() {
      this.closeDrawer(0, true);
    }

    /**
     * on Page Change
     */

  }, {
    key: "beforePageChange",
    value: function beforePageChange(event) {
      var page = event.detail.area || document;

      this.initDrawers(page);
    }
  }, {
    key: "onPageComplete",
    value: function onPageComplete() {
      this.main = document.querySelector(".main-with-sidebar");
    }

    /**
     * Unlock pages
     */

  }, {
    key: "onUnlockPages",
    value: function onUnlockPages() {
      this.mobileSet = false;

      this.sidebar = document.querySelector(".sidebar");
      this.drawer = document.querySelector("[data-basic-accordion-drawer]");
      this.triggers = document.querySelectorAll("[data-basic-accordion-trigger]");

      if (this.drawer) {
        this.sidebarContent = this.drawer.querySelector(".sidebar-content");
        this.fadeItems = this.sidebarContent.querySelectorAll(".fade-me");
        this.accordion = this.drawer.querySelector(".accordion");
      }
    }

    /**
     * Init drawers
     */

  }, {
    key: "initDrawers",
    value: function initDrawers(page) {
      if (!this.sidebar) return;

      if (this.drawer.dataset.startOpen !== "true") {
        this.closeDrawer(0);
      } else {
        this.openDrawer(0);
      }
    }

    /**
     * Resize drawers
     */

  }, {
    key: "resize",
    value: function resize(changeType) {
      if (!this.sidebar || !this.drawer) return;

      // mobile
      if (this.screen.type === "mobile") {
        if (changeType) {
          TweenMax.set(this.drawer, { clearProps: "all", display: "none" });
          if (this.drawer.dataset.open === "true") {
            this.closeDrawer(0);
          }
        } else {
          // this.setAcciordionHeight(0);
        }
      }

      // desktop
      else {

          if (this.accordion) {
            TweenMax.set(this.accordion, { clearProps: "height" });
          }

          TweenMax.set(this.drawer, {
            clearProps: "height",
            display: "block"
          });

          if (this.drawer.dataset.open === "true") {
            this.closeDrawer(0);
          }
        }

      TweenMax.set(this.main, { autoAlpha: 1 });

      if (this.sidebarContent) {
        TweenMax.set(this.sidebarContent, {
          autoAlpha: 1,
          display: "block"
        });
      }
    }

    /**
     * Click handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      var prevent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var trigger = event.target.closest("[data-basic-accordion-trigger]");

      if (trigger) {
        var id = trigger.dataset.basicAccordionTrigger;

        if (!this.animating) {
          this.animating = true;
          this.toggleAccordion(this.drawer, this.triggers);
          this.toggleIcon(trigger);
        }

        if (prevent) {
          event.preventDefault();
        }
      }
    }

    /**
     * Toggle icon
     */

  }, {
    key: "toggleIcon",
    value: function toggleIcon(trigger) {
      var icon = trigger.querySelector(".basic-accordion-icon");
      if (icon) {
        icon.classList.toggle("active");
      }
    }

    /**
     * Toggle Accordions open/closed
     * @param  {DOMElement} selectedDrawer
     */

  }, {
    key: "toggleAccordion",
    value: function toggleAccordion() {
      if (!this.sidebar) return;

      // if drawer closed, open
      if (this.drawer.dataset.open === "false") {
        this.openDrawer(0.8);
      }

      // else if drawer ospen, close
      else if (this.drawer.dataset.open === "true") {
          this.closeDrawer();
        }
    }

    /**
     * Close drawer
     * @param  {DOMElement} drawer
     * @param  {Number} speed
     */

  }, {
    key: "closeDrawer",
    value: function closeDrawer() {
      var _this2 = this;

      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.8;
      var wait = arguments[1];

      if (!this.sidebar) return;

      // get collapsed height
      var collpasedItem = this.drawer.querySelector("[data-basic-accordion-collapsed-height]");

      if (this.sidebarContent) {
        TweenMax.to(this.sidebarContent, 0.3, {
          autoAlpha: 0,
          ease: Linear.easeNone
        });
      }

      if (this.screen.type === "desktop") return;

      if (this.main) {
        TweenMax.set(this.main, { autoAlpha: 1 });
      }

      this.setScroll();
      this.unlockPage();

      var delay = wait ? 1 : 0;
      TweenMax.to(this.drawer, speed, {
        height: 0,
        delay: delay,
        ease: Power1.easeInOut,
        display: "none",
        onComplete: function onComplete() {
          _this2.drawerClosed();
        }
      });

      this.drawer.dataset.open = "false";
    }

    /**
     * Drawer closed
     */

  }, {
    key: "drawerClosed",
    value: function drawerClosed() {
      TweenMax.set(this.sidebar, { display: "none" });

      this.animating = false;
      _Utils2.default.dispatch("FRY_REGLET:MOBILE_FILTERS_CLOSE");
    }

    /**
     * unlock page
     */

  }, {
    key: "unlockPage",
    value: function unlockPage() {
      var ajaxContentArea = document.querySelector(".ajax-content-area");
      if (ajaxContentArea) {
        TweenMax.set(ajaxContentArea, { clearProps: "y, position" });

        TweenMax.set(window, { scrollTo: {
            y: this.lastPinnedPosition,
            autoKill: false
          } });

        this.lastPinnedPosition = 0;
      }

      // this.template.classList.remove("scroll-fixed");

      // TweenMax.set(document.body, {
      //   clearProps: "overflow"
      // });
    }

    /**
     * collapse height
     * @param  {DOMElement} drawer
     * @param  {DOMElement} collpasedItem
     * @param  {Number} cHeight
     */

  }, {
    key: "collapsedHeightOffset",
    value: function collapsedHeightOffset(collpasedItem, cHeight) {
      var adjustedHeight = cHeight;

      var expandedItem = this.drawer.querySelector("[data-basic-accordion-expanded-height]");
      var id = drawer.dataset.basicAccordionDrawer;

      var multiple = Number(collpasedItem.dataset.basicAccordionCollapsedMultiple);
      var eHeight = expandedItem.clientHeight;
      if (this.screen.type === "mobile" && multiple) {
        adjustedHeight = adjustedHeight * Number(multiple) + 50;
      }

      var needsAccordion = eHeight > adjustedHeight;

      if (!needsAccordion) {
        adjustedHeight = eHeight;
      }

      this.triggers.forEach(function (trigger) {
        trigger.classList.toggle("hide", !needsAccordion);
      });

      return adjustedHeight;
    }

    /**
     * Open drawer
     * @param  {DOMElement} drawer
     * @param  {Boolean} toggleState
     * @param  {Number} speed
     */

  }, {
    key: "openDrawer",
    value: function openDrawer(speed) {
      if (this.sidebar) {
        this.sidebar.classList.remove("hide");
      }

      this.drawer.classList.remove("hide");

      if (this.sidebarContent) {
        TweenMax.set(this.sidebarContent, { autoAlpha: 1 });
      }

      if (this.sidebar && this.screen.type === "mobile") {
        TweenMax.set(this.sidebar, { display: "block" });
        TweenMax.set(this.drawer, { display: "block" });
        TweenMax.set(this.fadeItems, { autoAlpha: 0, y: 25 });
        TweenMax.set(this.accordion, { height: 0 });
        this.setAccordionHeight(speed);
      }

      this.drawer.dataset.open = "true";
    }

    /**
     * filters menu open
     */

  }, {
    key: "filtersMenuOpen",
    value: function filtersMenuOpen() {
      this.animating = false;
      _Utils2.default.dispatch("FRY_REGLET:MOBILE_FILTERS_OPEN");
    }

    /**
     * set accordion
     * @param {Number} speed
     */

  }, {
    key: "setAccordionHeight",
    value: function setAccordionHeight(speed) {
      var _this3 = this;

      // mobile
      var height = this.screen.height - 130;
      height = height < this.sidebarContent.clientHeight + 130 ? this.sidebarContent.clientHeight + 130 : height;

      if (speed !== 0) {}
      // this.lockScroll();
      // TweenMax.set(document.body, { overflow: "hidden" });


      // force header on
      _Utils2.default.dispatch("FRY_REGLET:HEADER:ON");

      // set accordion height
      TweenMax.to(this.accordion, speed, {
        height: height,
        ease: Cubic.easeInOut,
        onComplete: function onComplete() {
          _this3.afterAccordionHeightSet(speed);
        }
      });

      TweenMax.to(this.drawer, speed, {
        height: height,
        ease: Cubic.easeInOut
      });
    }

    /**
     * after accordion height set
     * @param  {Number} speed
     */

  }, {
    key: "afterAccordionHeightSet",
    value: function afterAccordionHeightSet(speed) {
      var _this4 = this;

      if (speed !== 0) {

        if (this.sidebarContent) {

          var timeline = new TimelineLite({
            onComplete: function onComplete() {
              _this4.lockScroll();

              if (_this4.main) {
                TweenMax.set(_this4.main, { autoAlpha: 0 });
              }

              _this4.filtersMenuOpen();
            }
          });

          timeline.staggerTo(this.fadeItems, 0.4, {
            autoAlpha: 1,
            y: 0,
            ease: Cubic.easeOut
          }, 0.1);
        } else {
          this.filtersMenuOpen();
        }
      }
    }

    /**
     * unlock scroll
     */

  }, {
    key: "lockScroll",
    value: function lockScroll() {
      this.lastPinnedPosition = this.scroll;

      var contentArea = document.querySelector(".ajax-content-area");
      TweenMax.set(contentArea, {
        position: "fixed",
        zIndex: 0
      });
    }

    /**
     * set scroll
     */

  }, {
    key: "setScroll",
    value: function setScroll() {}
    // if(this.screen.type === "mobile") {
    //   TweenMax.set(this.template, { clearProps: "top" });
    //   TweenMax.set(window, { delay: 0.2, scrollTo: {
    //     y: this.lastPinnedPosition,
    //     autoKill: false
    //   }});
    // }


    /**
     * resize
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      var change = false;

      this.screen = { width: width, height: height, type: type };

      if (this.lastType !== type) {
        this.lastType = type;
        change = true;
      }

      this.resize(change);
    }
  }]);

  return BasicAccordion;
}();

exports.default = BasicAccordion;

},{"../common/Model":4,"../common/Utils":7}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlockLinks = function () {
  function BlockLinks() {
    _classCallCheck(this, BlockLinks);

    this.resizeHandler();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(BlockLinks, [{
    key: "events",
    value: function events() {
      var _this = this;

      document.addEventListener("click", function (event) {
        return _this.onClick(event);
      });

      // after page change
      document.addEventListener("FRY_REGLET:AFTER_PAGE_CHANGE", function (event) {
        return _this.afterPageChange(event);
      });

      // resize
      var fn = _Utils2.default.debounce(this.resizeHandler.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);
    }

    /**
     * After page change
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange() {
      this.multiLinks = document.querySelectorAll(".multi-links-panel");
    }

    /**
     * Ticker
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = window.innerWidth < 1024 ? "mobile" : "desktop";

      if (!this.screen || this.screen.width !== width || this.screen.height !== height) {
        this.screen = { width: width, height: height, type: type };

        this.resize();
      }
    }

    /**
     * Click handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {

      var multiLinks = event.target.closest(".multi-links");

      if (multiLinks && event.target.tagName.toLowerCase() !== "a") {

        if (this.screen.type === "mobile" || _Model.model.iOS) {
          var panel = multiLinks.querySelector(".multi-links-panel");
          var panelHeight = panel.querySelector("[data-multi-links-panel-height]");

          if (panel.dataset.mobileOpen === "false") {
            var height = panelHeight.clientHeight;

            TweenMax.to(panel, 0.5, { height: height, ease: Quad.easeInOut });
            multiLinks.classList.add("is-open");
            panel.dataset.mobileOpen = "true";
          } else if (panel.dataset.mobileOpen === "true") {
            TweenMax.to(panel, 0.5, { height: 0, ease: Quad.easeInOut });
            multiLinks.classList.remove("is-open");
            panel.dataset.mobileOpen = "false";
          }
        }

        event.preventDefault();
      }
    }

    /**
     * Resize multilinks accordions
     */

  }, {
    key: "resize",
    value: function resize() {
      var _this2 = this;

      if (!this.multiLinks) return;

      this.multiLinks.forEach(function (panel) {

        if (_this2.screen.type === "mobile" || _Model.model.iOS) {
          var panelHeight = panel.querySelector("[data-multi-links-panel-height]");

          if (panel.dataset.mobileOpen === "true") {
            var height = panelHeight.clientHeight;
            TweenMax.set(panel, { height: height });
          } else if (panel.dataset.mobileOpen === "false") {
            TweenMax.set(panel, { height: 0, ease: Quad.easeInOut });
          }
        } else {
          TweenMax.set(panel, { clearProps: "all" });
        }
      });
    }
  }]);

  return BlockLinks;
}();

exports.default = BlockLinks;

},{"../common/Model":4,"../common/Utils":7}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomizationAccordion = function () {
  function CustomizationAccordion() {
    _classCallCheck(this, CustomizationAccordion);

    this.template = document.querySelector(".template");
    this.ajaxContent = document.querySelector("#ajax-content");

    this.resizeHandler();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(CustomizationAccordion, [{
    key: "events",
    value: function events() {
      var _this = this;

      if (_Utils2.default.isTouchDevice()) {
        // touchstart
        document.addEventListener("touchstart", function (event) {
          return _this.onClick(event);
        });
      } else {
        // click
        document.addEventListener("click", function (event) {
          return _this.onClick(event);
        });
      }

      // before page changes
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.onPageComplete(event);
      });

      // resize
      var fn = _Utils2.default.debounce(this.resizeHandler.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);
    }

    /**
     * on Page Change
     */

  }, {
    key: "onPageComplete",
    value: function onPageComplete(event) {
      this.drawers = document.querySelectorAll("[data-customization-accordion-drawer]");
      this.initDrawers(document);
    }

    /**
     * Init drawers
     */

  }, {
    key: "initDrawers",
    value: function initDrawers(page) {
      var _this2 = this;

      var drawers = page.querySelectorAll("[data-customization-accordion-drawer]");

      drawers.forEach(function (drawer) {
        _this2.closeDrawer(drawer, 0);
      });
    }

    /**
     * Resize drawers
     */

  }, {
    key: "resize",
    value: function resize() {
      var _this3 = this;

      if (!this.drawers) return;

      this.drawers.forEach(function (drawer, index) {

        // if drawer closed, open
        if (drawer.dataset.open === "true") {
          _this3.openDrawer(drawer, 0);
        } else if (drawer.dataset.open === "false") {
          _this3.closeDrawer(drawer, 0);
        }
      });
    }

    /**
     * Click handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      var trigger = event.target.closest("[data-customization-accordion-trigger]");

      if (trigger) {
        var id = trigger.dataset.customizationAccordionTrigger;

        var drawer = document.querySelector("[data-customization-accordion-drawer='" + id + "']");
        var triggers = document.querySelectorAll("[data-customization-accordion-trigger='" + id + "']");

        this.toggleAccordion(drawer, triggers);
        this.toggleIcon(trigger);

        event.preventDefault();
      }
    }

    /**
     * Toggle icon
     */

  }, {
    key: "toggleIcon",
    value: function toggleIcon(trigger) {
      var icon = trigger.querySelector(".customization-accordion-icon");
      if (icon) {
        icon.classList.toggle("active");
      }
    }

    /**
     * Toggle Accordions open/closed
     * @param  {DOMElement} selectedDrawer
     */

  }, {
    key: "toggleAccordion",
    value: function toggleAccordion(drawer, triggers) {

      // if drawer closed, open
      if (drawer.dataset.open === "false") {
        this.toggleLanguage(triggers, "see-less");
        this.openDrawer(drawer, 0.7);
      }

      // else if drawer ospen, close
      else if (drawer.dataset.open === "true") {
          this.toggleLanguage(triggers, "see-all");
          this.closeDrawer(drawer);
        }
    }

    /**
     * Toggle see all/see less buttons
     * @param  {Collection} triggers
     * @param  {String} type
     */

  }, {
    key: "toggleLanguage",
    value: function toggleLanguage(triggers, type) {
      triggers.forEach(function (trigger) {
        var seeAll = trigger.querySelector(".see-all");
        var seeLess = trigger.querySelector(".see-less");

        if (seeAll && seeLess) {
          seeAll.classList.toggle("hide", type === "see-less");
          seeLess.classList.toggle("hide", type === "see-all");
        }
      });
    }

    /**
     * Close drawer
     * @param  {DOMElement} drawer
     * @param  {Number} speed
     */

  }, {
    key: "closeDrawer",
    value: function closeDrawer(drawer) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.6;


      // get collapsed height
      var collpasedItem = drawer.querySelector("[data-customization-accordion-collapsed-height]");

      var cHeight = collpasedItem ? collpasedItem.clientHeight : 0;

      // customization
      if (collpasedItem) {
        cHeight = this.collapsedHeightOffset(drawer, collpasedItem, cHeight);
      }

      var display = !collpasedItem && this.screen.type === "mobile" ? "none" : "block";

      TweenMax.to(drawer, speed, {
        height: cHeight,
        ease: Cubic.easeInOut,
        display: display
      });

      drawer.dataset.open = "false";
    }

    /**
     * collapse height
     * @param  {DOMElement} drawer
     * @param  {DOMElement} collpasedItem
     * @param  {Number} cHeight
     */

  }, {
    key: "collapsedHeightOffset",
    value: function collapsedHeightOffset(drawer, collpasedItem, cHeight) {
      var adjustedHeight = cHeight;

      var expandedItem = drawer.querySelector("[data-customization-accordion-expanded-height]");

      var id = drawer.dataset.customizationAccordionDrawer;
      var triggers = document.querySelectorAll("[data-customization-accordion-trigger='" + id + "']");

      var multiple = Number(collpasedItem.dataset.basicAccordionCollapsedMultiple);
      var eHeight = expandedItem.clientHeight;
      if (this.screen.type === "mobile" && multiple) {
        adjustedHeight = adjustedHeight * Number(multiple) + 50;
      }

      var isIE11 = document.querySelector(".ie.ver11");
      var offset = isIE11 ? 100 : 0;

      var needsAccordion = eHeight > adjustedHeight + offset;

      if (!needsAccordion) {
        adjustedHeight = eHeight;
      }

      triggers.forEach(function (trigger) {
        trigger.classList.toggle("hide", !needsAccordion);
      });

      return adjustedHeight;
    }

    /**
     * Open drawer
     * @param  {DOMElement} drawer
     * @param  {Boolean} toggleState
     * @param  {Number} speed
     */

  }, {
    key: "openDrawer",
    value: function openDrawer(drawer, speed) {

      // get expanded height
      var expandedHeight = drawer.querySelector("[data-customization-accordion-expanded-height]");

      var eHeight = expandedHeight.clientHeight;

      var drawerId = drawer.dataset.customizationAccordionDrawer;

      TweenMax.to(drawer, speed, {
        height: eHeight,
        ease: Cubic.easeInOut
      });

      drawer.dataset.open = "true";
    }

    /**
     * resize
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      if (!this.screen || this.screen.width !== width || this.screen.height !== height) {
        this.screen = { width: width, height: height, type: type };

        this.resize();

        this.lastType = type;
      }
    }
  }]);

  return CustomizationAccordion;
}();

exports.default = CustomizationAccordion;

},{"../common/Model":4,"../common/Utils":7}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DynamicGrid = function () {
  function DynamicGrid() {
    _classCallCheck(this, DynamicGrid);

    this.path = document.querySelector("#main").dataset.url;

    this.onResize();
    this.events();
    this.prep();
  }

  /**
   * Setup events
   */


  _createClass(DynamicGrid, [{
    key: "events",
    value: function events() {
      var _this = this;

      // preload
      document.addEventListener("FRY_REGLET:PRE_LOAD", function (event) {
        return _this.onPreload(event);
      });

      // filter
      document.addEventListener("FRY_REGLET:FILTER", function (event) {
        return _this.onFilter(event);
      });

      document.addEventListener("FRY_REGLET:CLEAR", function (event) {
        return _this.onClear(event);
      });

      // page complete
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.onPageComplete(event);
      });

      // after page added
      document.addEventListener("FRY_REGLET:AFTER_PAGE_ADDED", function (event) {
        return _this.beforePageChange(event);
      });

      // popstate
      window.addEventListener("popstate", function (event) {
        return _this.onPopState(event);
      });

      // resize
      var fn = _Utils2.default.debounce(this.onResize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);
    }

    /**
     * before page change
     * @param  {CustomEvent} event
     */

  }, {
    key: "beforePageChange",
    value: function beforePageChange(event) {
      var area = event.detail.area;
      this.drawers = area.querySelectorAll(".accordion-drawer");
      this.sidebars = area.querySelectorAll(".sidebar-item");
      this.path = area.querySelector(".main").dataset.url;
    }
  }, {
    key: "onClear",
    value: function onClear() {
      this.filter(true, true, true, true);
    }

    /**
     * on page complete
     */

  }, {
    key: "onPageComplete",
    value: function onPageComplete() {
      this.lastUrl = null;
      this.searchQuery = null;
      this.main = document.querySelector(".main-with-sidebar");
    }

    /**
     * on resize
     */

  }, {
    key: "onResize",
    value: function onResize() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      this.screen = { width: width, height: height, type: type };
    }

    /**
     * filter handler
     * @param  {CustomEvent} event
     */

  }, {
    key: "onFilter",
    value: function onFilter(event) {
      this.filter(true, true, true);
    }

    /**
     * Preload
     * @param  {CustomEvent} event
     */

  }, {
    key: "onPreload",
    value: function onPreload(event) {
      this.currentPage = event.detail.page;

      this.kickoff(true);
    }

    /**
     * on pop state
     */

  }, {
    key: "onPopState",
    value: function onPopState(event) {
      if (!this.isPageActive()) return;

      // get path
      var path = _Utils2.default.getPath();

      // check if query is the same as last
      if (!this.lastUrl || this.lastUrl[0] !== path[0] || path.length > 1 || this.searchQuery === window.location.search) {
        return;
      }

      this.filter(false, true, true);

      event.preventDefault();
    }

    /**
     * Prep
     */

  }, {
    key: "prep",
    value: function prep() {
      if (!this.isPageActive()) return;

      this.currentPage = document;

      this.drawers = document.querySelectorAll(".accordion-drawer");
      this.sidebars = this.currentPage.querySelectorAll(".sidebar-item");

      this.kickoff(false);
    }

    /**
     * kickoff
     */

  }, {
    key: "kickoff",
    value: function kickoff() {
      var isPreload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // grab container template
      var templateContainer = this.currentPage.querySelector(".dynamic-grid-container");

      // grab item template
      var template = this.currentPage.querySelector(".dynamic-grid-item");

      // container clone
      var templateContainerClone = templateContainer.cloneNode(true);
      templateContainerClone.innerHTML = "";

      // item clone
      var templateClone = template.cloneNode(true);

      this.templateContainer = templateContainerClone;
      this.template = templateClone;

      // remove container template
      templateContainer.remove();
      template.remove();

      this.grid = this.currentPage.querySelector(".dynamic-grid");

      this.lastUrl = _Utils2.default.getPath();

      _Utils2.default.dispatch("FRY_REGLET:GRID:KICKOFF");

      this.createRequest(isPreload);
    }

    /**
     * create & load request
     */

  }, {
    key: "createRequest",
    value: function createRequest(isPreload) {
      var endpoint = this.currentPage.querySelector("[data-api-endpoint]");
      var file = void 0;
      if (endpoint) {
        file = endpoint.dataset.apiEndpoint;
      }

      if (!file) return;

      var url = _Model.model.baseurl + _Model.model.folder + "api/" + file + window.location.search;

      this.loadPage(url, isPreload);
    }

    /**
     * filter content
     * @param  {Boolean} shouldUpdateURL
     */

  }, {
    key: "filter",
    value: function filter(shouldUpdateURL, clickFromSidebar) {
      var _this2 = this;

      var shouldAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var fromClear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      _Utils2.default.dispatch("FRY_REGLET:FILTERING");

      this.drawers = this.currentPage.querySelectorAll(".accordion-drawer");
      this.sidebars = this.currentPage.querySelectorAll(".sidebar-item");

      var sidebarItems = [];
      if (this.sidebars) {
        sidebarItems = _Utils2.default.getArrayFromNodeList(this.sidebars);
      }
      var activeSidebarItems = sidebarItems.filter(function (item) {
        return item.classList.contains("active");
      });

      var urlParams = {};
      var filters = [];
      var urlParamsArray = [];

      if (activeSidebarItems.length) {

        activeSidebarItems.forEach(function (item) {
          if (!urlParamsArray[item.dataset.parent]) {
            urlParamsArray[item.dataset.parent] = [];
          }

          var name = item.dataset.name;
          name = _this2.getSpecialCaseName(name);

          // special case for LED
          name = name === "LED & Lighting" ? "LED & Lighting" : _Utils2.default.toTitleCase(name);

          filters.push(name);
          urlParamsArray[item.dataset.parent].push(item.id);
        });
      } else {

        if (!shouldUpdateURL && !activeSidebarItems.length) {
          urlParams = _Utils2.default.getURLParams();
          for (var param in urlParams) {

            var name = urlParams[param].replace(/-/g, " ");
            name = name.replace("/", "");
            name = this.getSpecialCaseName(name);

            // special case for LED
            name = name === "LED & Lighting" ? "LED & Lighting" : _Utils2.default.toTitleCase(name);

            // name = name === "Things & Stuff" ?
            //   "Things & Stuff" :
            //   Utils.toTitleCase(name);

            filters.push(name);

            urlParamsArray[param] = [];
            urlParamsArray[param].push(urlParams[param]);
          }
        }
      }

      if (shouldUpdateURL) {
        this.createURLParams(urlParamsArray);
      }

      this.searchItems(filters, clickFromSidebar, shouldAnimate, urlParamsArray, fromClear);
    }

    /**
     * get special name
     * @param  {String} name
     * @return {String}
     */

  }, {
    key: "getSpecialCaseName",
    value: function getSpecialCaseName(name) {

      // special case for un vented
      if (name.toLowerCase() === "led lighting") {
        return "LED & Lighting";
      }

      // special case for reveals
      if (name.toLowerCase() === "reveals moldings") {
        return "Reveals & Moldings";
      }

      // special case for c/e joint
      if (name.toLowerCase() === "controller expansion joint") {
        return "Controller/Expansion Joint";
      }

      return name;
    }

    /**
     * Search items
     * @param  {Array}  filters
     * @param  {Boolean} shouldAnimate
     */

  }, {
    key: "searchItems",
    value: function searchItems(filters, clickFromSidebar) {
      var shouldAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _this3 = this;

      var urlParamsArray = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var fromClear = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;


      var matches = this.search(filters);
      this.createPage(matches, clickFromSidebar, shouldAnimate);

      this.sidebars.forEach(function (sidebar, i) {
        var newFilters = filters.slice(0);
        newFilters.push(sidebar.dataset.name);

        var sectionFilledOut = urlParamsArray[sidebar.dataset.parent];

        if (sectionFilledOut) {
          sectionFilledOut.forEach(function (s) {
            newFilters.forEach(function (f, i) {
              if (s === _this3.slugify(f)) {
                newFilters.splice(i, 1);
              }
            });
          });
        }

        var matches = _this3.search(newFilters);
        var drawer = sidebar.closest(".accordion-drawer");
        var isFixed = drawer.classList.contains("fixed-accordion-drawer");
        if (!isFixed && !matches.length && filters.length) {
          _this3.disable(sidebar, sectionFilledOut);
        } else {
          sidebar.removeAttribute("disabled");
        }
      });

      this.searchQuery = window.location.search;
      this.lastUrl = _Utils2.default.getPath();

      if (!fromClear) {
        TweenMax.delayedCall(0.1, function () {
          _Utils2.default.dispatch("FRY_REGLET:ACCORDION:GRID:UPDATE");
        });
      }
    }
  }, {
    key: "disable",
    value: function disable(item, sectionFilledOut) {
      // const delay = sectionFilledOut ? 0.6 : 0;
      TweenMax.delayedCall(0, function () {
        item.setAttribute("disabled", "disabled");
      });
    }

    /**
     * Search
     * @param  {Array} filters
     */

  }, {
    key: "search",
    value: function search(filters) {
      var _this4 = this;

      var matches = [];
      _Model.model.data.forEach(function (item) {

        var tags = [];

        var properties = ["profile", "lighting", "parttype", "usage", "venting", "architects", "products", "markets", "color", "productline", "materials"];

        properties.forEach(function (property) {
          if (item[property]) {
            var newTags = _this4.getTags(item, property);
            tags = tags.concat(newTags);
          }
        });

        tags = tags.map(function (t) {
          return _this4.slugify(t);
        });

        var counter = 0;
        filters.forEach(function (filter) {
          var sluggedFilter = _this4.slugify(filter);

          if (tags.indexOf(sluggedFilter) > -1) {
            counter++;
          }
        });

        if (counter === filters.length) {
          matches.push(item);
        }
      });

      return matches;
    }

    /**
     * get item tags
     * @param  {Object} item
     * @param  {String} property
     * @return {Array}
     */

  }, {
    key: "getTags",
    value: function getTags(item, property) {
      var _this5 = this;

      var array = [];

      // if tags are array
      if (_typeof((item, item[property])) === "object") {
        item[property].forEach(function (el) {
          if (el.indexOf(",") > -1) {
            var items = el.split(",");
            items.forEach(function (item) {
              var name = _this5.slugify(el);
              array.push(name);
            });
          } else {
            var name = _this5.slugify(el);
            array.push(name);
          }
        });
      }

      // if tags are single string
      else {
          if (item[property].indexOf(",") > -1) {
            var items = item[property].split(",");
            items.forEach(function (el) {
              var name = _this5.slugify(el);
              array.push(el);
            });
          } else {
            var name = this.slugify(item[property]);
            array.push(name);
          }
        }

      return array;
    }

    /**
     * create slug
     * @param  {String} string
     */

  }, {
    key: "slugify",
    value: function slugify(string) {
      return string.toLowerCase().replace(/\//g, "-").replace(/ /g, "-").replace(/&-/g, "");
    }

    /**
     * Create url params
     * @param  {Object} params
     */

  }, {
    key: "createURLParams",
    value: function createURLParams(params) {
      var query = "?";

      for (var param in params) {
        query += param + "=" + params[param].join(",");
        query += "&";
      };

      // strip last ampersand
      if (query.lastIndexOf("&") === query.length - 1) {
        query = query.slice(0, query.length - 1);
      }

      this.updateURL(query);
    }

    /**
     * update page url
     * @param  {String} query
     */

  }, {
    key: "updateURL",
    value: function updateURL(query) {
      var path = _Utils2.default.getPath();
      var url = _Model.model.baseurl + _Model.model.folder + path[0] + query;
      // console.log(
      //   'model.baseurl=', model.baseurl,
      //   'model.folder=', model.folder,
      //   'path[0]=', path[0],
      //   'url', url
      // );

      window.history.pushState("", "", url);
    }

    /**
     * Load shape finder data
     * @param  {String} url
     */

  }, {
    key: "loadPage",
    value: function loadPage(url, isPreload) {
      this.fetchData(url, isPreload);
    }

    /**
     * Fetch data
     * @param  {String}  url
     * @param  {Boolean} isPreload
     */

  }, {
    key: "fetchData",
    value: function fetchData(url, isPreload) {
      var _this6 = this;

      fetch(url).then(function (response) {
        return response.text();
      }).then(function (data) {
        var json = JSON.parse(data);
        _Model.model.data = json.items;

        _this6.dataLoaded(isPreload);
      }).catch(function (err) {
        console.log("error", err);
      });
    }

    /**
     * Data loaded
     * @param  {Boolean} isPreload
     */

  }, {
    key: "dataLoaded",
    value: function dataLoaded(isPreload) {
      this.filter(false, false, false);

      if (isPreload) {
        TweenMax.delayedCall(0.2, function () {
          _Utils2.default.dispatch("FRY_REGLET:PRE_LOAD_COMPLETE");
        });
      }
    }

    /**
     * Create page
     * @param  {Object} data
     */

  }, {
    key: "createPage",
    value: function createPage(items, clickFromSidebar) {
      var _this7 = this;

      var shouldAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var object = "";

      var container = this.templateContainer.cloneNode(true);
      var frag = document.createDocumentFragment();

      items.forEach(function (item, index) {
        var template = _this7.template.cloneNode(true);
        var name = template.querySelector(".grid-item-name");
        var architect = template.querySelector(".grid-item-architect");
        var products = template.querySelector("span.item-products");
        var subproducts = template.querySelector("span.item-subproducts");
        var profiles = template.querySelector(".grid-item-profiles");
        var link = template.querySelector("a");
        var image = template.querySelector("img");
        var galleryCell = template.querySelector(".gallery-cell div");
        var modelViewer = template.querySelector(".model-viewer");
        var anchor = template.querySelector("a");
        var productline = template.querySelector(".grid-item-productline");
        var colortype = template.querySelector(".grid-item-colortype");
        // set productline
        if (productline) {
          productline.innerHTML = item.productline;
        }
        // set colortype
        if (colortype) {
          colortype.innerHTML = item.colortype;
        }

        var button = template.querySelector(".gallery-item-button[data-direction='next']");
        if (item.media && item.media.length === 1) {
          button.remove();
        }

        if (anchor) {
          anchor.href = _Model.model.baseurl + _Model.model.folder + item.url;
        }

        // add to page
        template.classList.remove("hide");

        // set id
        template.id = item.id;
        template.dataset.slug = item.slug;

        // set model
        if (modelViewer && item.model) {
          modelViewer.dataset.model = item.model;
        } else if (modelViewer) {
          modelViewer.remove();
        }

        // media
        if (item.media) {
          template.dataset.images = item.media.join(",");
        }

        if (item.media2x) {
          template.dataset.images = item.media2x.join(",");
        }

        // set name
        if (name) {
          name.innerHTML = item.name;
        }

        // set architect
        if (architect) {
          architect.innerHTML = item.architect;
        }

        // set products
        if (products && item.products) {
          products.innerHTML = item.products.join(", ");
          subproducts.innerHTML = item.subproducts;
        }

        // link
        if (link) {
          link.href = item.url;
        }

        // image
        var itemImage = _Utils2.default.isRetina() ? item.image2x : item.image;
        image.dataset.src = itemImage;

        var path = _Utils2.default.getPath();

        var isFinder = path.indexOf("shape-finder") > -1 || path.indexOf("color-finder") > -1;

        if (galleryCell) {
          if (window.innerWidth < 768 && !isFinder) {
            var firstImage = _Utils2.default.isRetina() ? item.media2x[0] : item.media[0];
            galleryCell.dataset.background = firstImage;
          } else {
            galleryCell.dataset.background = itemImage;
          }
        }

        // append
        frag.appendChild(template);
      });

      container.appendChild(frag);

      this.currentContainer = this.nextContainer;
      this.nextContainer = container;

      this.nextContainer.classList.add("fixed", "top0", "ov-h", "autoAlpha0");

      this.grid.appendChild(this.nextContainer);

      if (items.length) {
        this.preloadNextImages(clickFromSidebar, shouldAnimate);
      } else {
        this.animatePageOut(clickFromSidebar, shouldAnimate, false);
      }
    }

    /**
     * Animate page out
     * @param  {Boolean} clickFromSidebar
     * @param  {Boolean} shouldAnimate
     * @param  {Boolean} triggerNextPage
     */

  }, {
    key: "animatePageOut",
    value: function animatePageOut(clickFromSidebar) {
      var _this8 = this;

      var shouldAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var triggerNextPage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (this.currentContainer) {

        var animations = this.getItemsToAnimateOut(this.currentContainer);
        var animationsIn = animations.onScreen;
        var animationsOut = animations.offScreen;

        var timeline = new TimelineLite({
          onComplete: function onComplete() {

            if (clickFromSidebar) {
              _this8.currentContainer.remove();
            }

            if (triggerNextPage) {
              _this8.animateInNextSet(clickFromSidebar, shouldAnimate);
            }
          }
        });

        if (clickFromSidebar && this.screen.type === "desktop") {
          timeline.staggerTo(animationsIn, 0.3, {
            autoAlpha: 0,
            x: -100,
            ease: Power3.easeIn
          }, 0.05);
        } else if (clickFromSidebar && this.screen.type === 'mobile') {
          timeline.set(animationsIn, { x: -100 });
        }
      }
    }

    /**
     * Animate in next set
     * @param  {DOMElement} container
     */

  }, {
    key: "animateInNextSet",
    value: function animateInNextSet(clickFromSidebar) {
      var shouldAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.nextContainer.classList.remove("hide", "fixed", "top0", "ov-h", "autoAlpha0");

      var animations = this.getItemsToAnimateIn(this.nextContainer);

      var animationsOn = animations.onScreen;
      var animationsOff = animations.offScreen;

      // delay load till after scroll?
      var scroll = window.scrollY || window.pageYOffset;
      var delay = scroll > 0 && clickFromSidebar && shouldAnimate ? 0.9 : 0;

      if (clickFromSidebar && shouldAnimate) {
        TweenMax.to(window, 0, {
          scrollTo: {
            y: 0,
            autoKill: false
          },
          ease: Quad.easeInOut
        });
      }

      TweenMax.set(animationsOff, { display: "none" });

      if (shouldAnimate && clickFromSidebar && this.screen.type === "desktop") {
        var timeline = new TimelineLite({
          delay: 0,
          onComplete: function onComplete() {
            TweenMax.set(animationsOff, { clearProps: "display" });

            _Utils2.default.dispatch("FRY_REGLET:GRID_UPDATED");
          }
        });
        timeline.pause();

        timeline.staggerFromTo(animationsOn, 0.8, { autoAlpha: 0, x: 250 }, {
          autoAlpha: 1,
          x: 0,
          ease: Power3.easeOut
        }, 0.05);

        timeline.resume();
      } else {
        TweenMax.set(animationsOff, { clearProps: "display" });

        TweenMax.delayedCall(0.75, function () {
          _Utils2.default.dispatch("FRY_REGLET:GRID_UPDATED");
        });
      }
    }

    /**
     * Get items to animate out
     * @param  {DOMElement} area
     */

  }, {
    key: "getItemsToAnimateOut",
    value: function getItemsToAnimateOut(area) {
      var _this9 = this;

      var animations = area.querySelectorAll(".animate-me");
      var items = {
        onScreen: [],
        offScreen: []
      };

      var offscreen = false;

      animations.forEach(function (item, index) {
        if (!offscreen) {
          var bounds = item.getBoundingClientRect();
          if (bounds.top < _this9.screen.height && bounds.top > -bounds.height) {
            items.onScreen.push(item);
          } else if (bounds.top >= _this9.screen.height) {
            offscreen = true;
            items.offScreen.push(item);
          }
        } else {
          items.offScreen.push(item);
        }
      });
      return items;
    }

    /**
     * Get items to animate in
     * @param  {DOMElement} area
     */

  }, {
    key: "getItemsToAnimateIn",
    value: function getItemsToAnimateIn(area) {
      var _this10 = this;

      var animations = area.querySelectorAll(".animate-me");
      var onScreenItems = [];
      var items = {
        onScreen: [],
        offScreen: []
      };

      var gridTop = this.grid.getBoundingClientRect().top;
      var offscreen = false;

      animations.forEach(function (item, index) {
        if (!offscreen) {
          var bounds = item.getBoundingClientRect();
          if (bounds.top < _this10.screen.height + gridTop) {
            items.onScreen.push(item);
          } else {
            items.offScreen.push(item);
            offscreen = true;
          }
        } else {
          items.offScreen.push(item);
        }
      });
      return items;
    }

    /**
     * on preload Complete
     */

  }, {
    key: "preloadNextImages",
    value: function preloadNextImages(clickFromSidebar, shouldAnimate) {
      var _this11 = this;

      var itemsToLoad = this.nextContainer.querySelectorAll("[data-src]");
      var offscreen = false;
      this.preloadesImages = [];
      itemsToLoad.forEach(function (image, index) {
        if (!offscreen) {
          var bounds = image.getBoundingClientRect();
          if (bounds.top > -100 && bounds.top < _this11.screen.height) {
            if (image.dataset.loaded !== "true") {
              image.dataset.loaded = "true";
              _this11.preloadesImages.push(image);
            }
          } else {
            offscreen = true;
          }
        }
      });

      this.imagesLoaded = 0;
      this.preloadesImages.forEach(function (image, index) {
        _this11.loadImage(image, index, clickFromSidebar, shouldAnimate);
      });
    }

    /**
     * Preload image
     * @param  {DOMElement} image
     */

  }, {
    key: "loadImage",
    value: function loadImage(image, index, clickFromSidebar, shouldAnimate) {
      var _this12 = this;

      var placeholder = new Image();
      placeholder.dataset.index = index;
      placeholder.dataset.shouldAnimate = shouldAnimate;
      placeholder.dataset.clickFromSidebar = clickFromSidebar;

      placeholder.onload = function (event) {
        return _this12.imageLoaded(event);
      };
      placeholder.src = _Model.model.baseurl + _Model.model.folder + image.dataset.src;
    }

    /**
     * image loaded
     */

  }, {
    key: "imageLoaded",
    value: function imageLoaded(event) {
      var index = Number(event.currentTarget.dataset.index);
      var shouldAnimate = event.currentTarget.dataset.shouldAnimate;
      var clickFromSidebar = event.currentTarget.dataset.clickFromSidebar === "true";
      var image = this.preloadesImages[index];

      image.src = _Model.model.baseurl + _Model.model.folder + image.dataset.src;
      image.classList.remove("autoAlpha0");

      this.imagesLoaded++;
      if (this.imagesLoaded === this.preloadesImages.length) {

        if (this.currentContainer && shouldAnimate) {
          this.animatePageOut(clickFromSidebar, shouldAnimate);
        } else {
          this.animateInNextSet(clickFromSidebar, shouldAnimate);
        }
      }
    }

    /**
     * is page active
     * @return {Boolean}
     */

  }, {
    key: "isPageActive",
    value: function isPageActive() {
      var path = _Utils2.default.getPath();

      return path.indexOf("shape-finder") > -1 || path.indexOf("color-finder") > -1 || path.indexOf("gallery") > -1 || path.indexOf(this.path) > -1;
    }
  }]);

  return DynamicGrid;
}();

exports.default = DynamicGrid;

},{"../common/Model":4,"../common/Utils":7}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlickitySlideshow = function () {
  function FlickitySlideshow() {
    _classCallCheck(this, FlickitySlideshow);

    this.resize();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(FlickitySlideshow, [{
    key: "events",
    value: function events() {
      var _this = this;

      // resize
      var fn = _Utils2.default.debounce(this.resize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // before page animate in
      document.addEventListener("FRY_REGLET:UNLOCK_PAGES", function (event) {
        return _this.onUnlockPages(event);
      });

      // grid updated
      document.addEventListener("FRY_REGLET:GRID_UPDATED", function (event) {
        return _this.onGridUpdated(event);
      });

      // click
      if (_Utils2.default.isTouchDevice()) {
        document.addEventListener("touchstart", function (event) {
          return _this.onClick(event);
        });
      } else {
        document.addEventListener("click", function (event) {
          return _this.onClick(event);
        });
      }

      // init hammer
      this.hammerTime();
    }

    /**
     * init hammer
     */

  }, {
    key: "hammerTime",
    value: function hammerTime() {
      var _this2 = this;

      this.mc = new Hammer(document);
      this.mc.on("swipe", function (event) {
        return _this2.onSwipe(event);
      });
      this.lastPosX = 0;
      this.isDragging = false;
    }

    /**
     * on swipe
     * @param  {Event} event
     */

  }, {
    key: "onSwipe",
    value: function onSwipe(event) {
      if (event.offsetDirection === 2 || event.offsetDirection === 4) {
        var flick = event.target.closest(".flick-delayed");

        if (flick && flick.dataset.enabled !== "true") {
          this.initGallerySlideshow(flick);
        }
      }
    }

    /**
     * Grid updated
     * @param  {CustomEvent} event
     */

  }, {
    key: "onGridUpdated",
    value: function onGridUpdated(event) {
      this.initSlideshows();
    }

    /**
     * After page changed
     * @return {CustomEvent}
     */

  }, {
    key: "onUnlockPages",
    value: function onUnlockPages() {
      this.resizeSlideshows();
      this.initSlideshows();
    }

    /**
     * init slideshows
     */

  }, {
    key: "initSlideshows",
    value: function initSlideshows() {
      var _this3 = this;

      this.items = document.querySelectorAll(".flick");

      if (!this.items) return;

      this.resize();
      this.createSlideshows();

      TweenMax.delayedCall(1, function () {
        _this3.resizeSlideshows();
      });
    }

    /**
     * Create slideshows
     */

  }, {
    key: "createSlideshows",
    value: function createSlideshows() {
      var _this4 = this;

      this.destroySlideshows();

      this.flickities = [];
      this.counter = 0;

      if (!this.items) return;

      this.items.forEach(function (item, index) {
        if (item.dataset.mobileOnly !== "true" && item.dataset.desktopOnly !== "true" || item.dataset.mobileOnly === "true" && _this4.screen.type === "mobile" || item.dataset.desktopOnly === "true" && _this4.screen.type === "desktop") {
          _this4.createSlideshow(item);
        }
      });
    }

    /**
     * create slideshow
     * @param  {DOMElement} item
     */

  }, {
    key: "createSlideshow",
    value: function createSlideshow(item) {
      var _ref,
          _this5 = this;

      var align = item.dataset.align || "left";

      // add page dots
      var slides = item.querySelectorAll(".gallery-cell");
      var dots = slides.length > 1 && item.dataset.pageDots;
      var asNavFor = "." + item.dataset.asNavFor;
      var siblingSlideshow = document.querySelector(asNavFor);
      var autoPlay = item.dataset.autoplay ? Number(item.dataset.autoplay) : false;
      var draggable = item.dataset.desktopDraggable === 'false' && this.screen.type !== 'mobile' ? false : true;

      var slideshow = new Flickity(item, (_ref = {
        lazyLoad: true,
        cellAlign: align,
        draggable: draggable,
        groupCells: Number(item.dataset.groups),
        wrapAround: Boolean(item.dataset.wrapAround),
        pageDots: dots,
        bgLazyLoad: true
      }, _defineProperty(_ref, "bgLazyLoad", 2), _defineProperty(_ref, "prevNextButtons", false), _defineProperty(_ref, "asNavFor", asNavFor), _defineProperty(_ref, "autoPlay", autoPlay), _ref));

      slideshow.on("change", function (slideIndex) {
        return _this5.onChange(slideIndex);
      });
      slideshow.on('dragEnd', function (event, pointer) {
        _this5.pauseSlideshow(Number(_this5.items[0].dataset.index));
      });

      if (siblingSlideshow) {
        siblingSlideshow.dataset.siblingIndex = this.counter;
      }
      item.dataset.index = this.counter;
      item.dataset.enabled = "true";

      var masterIndex = null;
      if (!siblingSlideshow) {
        var media = item.closest('.media');
        if (media) {
          var master = media.parentNode.querySelector('[data-as-nav-for]');
          if (master) {
            masterIndex = master.dataset.index;
          }
        }
      }

      this.flickities.push({
        container: item,
        slideshow: slideshow,
        sibling: siblingSlideshow,
        masterIndex: masterIndex
      });

      this.counter += 1;

      return slideshow;
    }

    /**
     * Destory slideshow
     */

  }, {
    key: "destroySlideshows",
    value: function destroySlideshows() {
      var _this6 = this;

      if (!this.flickities || !this.flickities.length) return;

      this.flickities.forEach(function (item) {
        if (_this6.screen.type !== "mobile" && item.container.dataset.mobileOnly || _this6.screen.type !== "desktop" && item.container.dataset.desktopOnly) {
          item.container.dataset.enabled = "false";
          item.slideshow.off("change", function (event) {
            return _this6.onChange(event);
          });
          item.slideshow.destroy();
          item.slideshow = null;
        }
      });
      this.flickities = null;
    }

    /**
     * click handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      var slideshowButton = event.target.closest(".slideshow-button");
      var delayedFlick = event.target.closest(".flick-delay");
      if (slideshowButton) {
        this.triggerSlideChange(slideshowButton);
        event.preventDefault();
      }

      var galleryButton = event.target.closest(".gallery-item-button");
      if (galleryButton) {
        var media = galleryButton.closest(".media");
        var flick = media.querySelector(".flick-delayed");
        this.initGallerySlideshow(flick);
      }
    }

    /**
     * Init gallery slideshow
     * @param  {DOMElement} galleryButton
     */

  }, {
    key: "initGallerySlideshow",
    value: function initGallerySlideshow(flick) {
      var slides = flick.querySelectorAll(".gallery-cell");

      if (flick.dataset.init !== "true") {
        flick.dataset.init = "true";
        this.addSlides(flick);
        slides = flick.querySelectorAll(".gallery-cell");
      }

      TweenMax.set(slides, { display: "block" });

      var slideshow = this.createSlideshow(flick);

      TweenMax.delayedCall(0.2, function () {
        slideshow.next();

        // reset first slide
        TweenMax.delayedCall(0.5, function () {
          var firstSlide = flick.querySelector(".gallery-cell");
          firstSlide.classList.add("opacity-0");
        });
      });
    }

    /**
     * add slides to slideshow
     * @param {DOMElement} flick
     */

  }, {
    key: "addSlides",
    value: function addSlides(flick) {
      var firstSlide = flick.querySelector(".gallery-cell");
      firstSlide.classList.remove("opacity-100");

      var gridItem = flick.closest(".dynamic-grid-item");
      var id = gridItem.id;

      var item = _Model.model.data.filter(function (item) {
        return item.id === id;
      })[0];

      var images = _Utils2.default.isRetina() ? item.media2x : item.media;
      images.shift();

      images.forEach(function (image) {
        var template = firstSlide.cloneNode(true);
        var img = template.querySelector("[data-background]");

        var src = _Model.model.baseurl + _Model.model.folder + image;
        img.style.backgroundImage = "url(" + src + ")";
        img.dataset.background = null;
        template.classList.add("opacity-0");
        firstSlide.parentNode.appendChild(template);
      });
    }

    /**
     * Trigger slide change
     * @param  {DOMElement} button
     */

  }, {
    key: "triggerSlideChange",
    value: function triggerSlideChange(button) {
      var media = button.closest(".media");
      var flick = media.querySelector(".flick");
      var flickity = this.flickities[flick.dataset.index];
      var slideshow = flickity.slideshow;

      if (button.dataset.direction === "prev") {
        slideshow.previous();
      } else if (button.dataset.direction === "next") {
        slideshow.next();
      }

      this.pauseSlideshow(flick.dataset.index);
    }

    /**
     * Slideshow change
     */

  }, {
    key: "onChange",
    value: function onChange(index) {
      // turn on left arrow
      if (this.flickities) {
        this.updateSlideshow();
      }
    }

    /**
     * turn on left arrow
     */

  }, {
    key: "updateSlideshow",
    value: function updateSlideshow() {
      var _this7 = this;

      this.flickities.forEach(function (item) {

        // sibling nav selector because
        // flickity sync isn't working
        if (item.sibling) {
          var sibling = _this7.getFlickity(item.sibling);
          sibling.slideshow.select(item.slideshow.selectedIndex);
        }

        // update url
        var element = item.slideshow.selectedCell.element;
        if (element.dataset && element.dataset.url) {
          var url = element.dataset.url;
          var details = element.closest(".callout-details");
          if (details) {
            var cta = details.querySelector(".callout-cta a");
            cta.href = url;
          }
        }

        // turn on left arrow
        var media = item.container.closest(".media");

        if (!media) return;

        var hideLeftArrowOnMobile = item.container.dataset.hideLeftArrowOnMobile;
        var leftButton = media.querySelector("[data-direction='prev']");

        if (leftButton && leftButton.classList.contains("autoAlpha0") && item.slideshow.selectedIndex > 0 && hideLeftArrowOnMobile !== "true") {
          leftButton.classList.remove("autoAlpha0");
        }
      });
    }
  }, {
    key: "pauseSlideshow",
    value: function pauseSlideshow(index) {
      var flickity = this.flickities[index];
      var slideshow = flickity.slideshow;
      var masterIndex = flickity.masterIndex;

      slideshow.pausePlayer();

      if (masterIndex) {
        this.flickities[masterIndex].slideshow.pausePlayer();
      }
    }

    /**
     * resize
     */

  }, {
    key: "resize",
    value: function resize() {
      if (!this.items) return;

      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      if (!this.screen || this.screen.width !== width || this.screen.height !== height || this.screen.type !== type) {
        this.screen = { width: width, height: height, type: type };

        if (this.screen && this.lastType !== type) {
          this.createSlideshows();
        } else {
          this.resizeSlideshows();
        }

        this.lastType = type;
      }
    }
  }, {
    key: "getFlickity",
    value: function getFlickity(flick) {
      var matchItem = void 0;
      if (this.flickities) {
        this.flickities.forEach(function (item) {
          if (item.container === flick) {
            matchItem = item;
          }
        });
      }
      return matchItem;
    }

    /**
     * ResizeSlideshows
     */

  }, {
    key: "resizeSlideshows",
    value: function resizeSlideshows() {
      if (this.flickities) {
        this.flickities.forEach(function (item) {
          item.slideshow.resize();
          item.slideshow.reposition();
        });
      }
    }
  }]);

  return FlickitySlideshow;
}();

exports.default = FlickitySlideshow;

},{"../common/Model":4,"../common/Utils":7}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Flyout = function () {
  function Flyout() {
    _classCallCheck(this, Flyout);

    this.flyout = document.querySelector("#flyout");
    this.close = document.querySelector("[data-flyout-close]");
    this.contents = document.querySelectorAll(".flyout-content");
    this.blocker = document.querySelector("#click-blocker");

    this.events();
  }

  /**
   * Setup events
   */


  _createClass(Flyout, [{
    key: "events",
    value: function events() {
      var _this = this;

      if (!_Utils2.default.isTouchDevice()) {
        // click
        document.addEventListener("mousedown", function (event) {
          return _this.onClick(event);
        });
      } else {
        document.addEventListener("click", function (event) {
          return _this.onClick(event);
        });
      }

      // cliose button
      this.close.addEventListener("click", function (event) {
        return _this.onClose();
      });

      // force close
      document.addEventListener("FRY_REGLET:FLYOUT:CLOSE", function (event) {
        return _this.onClose();
      });

      this.hammerTime();
    }

    /**
     * hammer time
     */

  }, {
    key: "hammerTime",
    value: function hammerTime() {
      var _this2 = this;

      this.mc = new Hammer(this.flyout);
      this.mc.on("pan", function (event) {
        return _this2.handleDrag(event);
      });
      this.lastPosX = 0;
      this.isDragging = false;
    }

    /**
     * handle drag
     * @param  {Event} event
     */

  }, {
    key: "handleDrag",
    value: function handleDrag(event) {
      if (event.offsetDirection !== 2) return;

      if (!this.isDragging) {
        this.isDragging = true;

        this.lastPosX = this.flyout.offsetLeft;
      }

      this.posX = event.deltaX + this.lastPosX;
      if (this.posX > 0) this.posX = 0;

      this.flyout.style.left = this.posX + "px";

      if (event.isFinal) {
        this.isDragging = false;

        if (event.distance > 30) {
          this.onClose();
        } else {
          TweenMax.to(this.flyout, 0.3, { left: 0, ease: Quad.easeOut });
        }
      }
    }

    /**
     * click hanlder
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {

      // open flyout
      var open = event.target.closest("[data-flyout-open]");
      if (open) {
        var content = open.dataset.flyoutContent;
        var title = open.dataset.flyoutFormTitle;
        var file = open.dataset.fileUrl;

        this.setState(true, content, title, file);
        event.preventDefault();
      }

      // close flyout
      var flyout = event.target.closest("#flyout");
      if (!this.isDragging && this.enabled && !open && !flyout) {
        this.setState(false);
        event.preventDefault();
      }

      // close flyout
      var closeButton = event.target.closest("[data-flyout-close]");
      if (closeButton) {
        this.setState(false);
        event.preventDefault();
      }
    }

    /**
     * close handler
     */

  }, {
    key: "onClose",
    value: function onClose() {
      this.setState(false);
    }

    /**
     * set state
     * @param {Boolean} state
     * @param {String} contentId
     * @param {String} title
     * @param {String} file
     */

  }, {
    key: "setState",
    value: function setState(state, contentId, title, file) {
      var _this3 = this;

      if (state) {

        TweenMax.set(this.flyout, { left: 0 });

        this.blocker.classList.remove("hide");
        this.blocker.classList.add("pointer");

        this.turnOnForm(contentId, title, file);

        TweenMax.to(this.flyout, 0.5, {
          x: "0%",
          display: "block",
          ease: Power1.easeInOut
        });

        this.enabled = true;
      } else {
        TweenMax.to(this.flyout, 0.5, {
          x: "-100%",
          ease: Power1.easeInOut,
          onComplete: function onComplete() {

            var scrollPane = _this3.flyout.querySelector(".ov-s-y");
            TweenMax.set(scrollPane, {
              scrollTo: { y: 0, autoKill: true }
            });

            TweenMax.set(_this3.flyout, { display: "none" });
          }
        });

        this.enabled = false;

        this.blocker.classList.add("hide");
        this.blocker.classList.remove("pointer");
      }
    }

    /**
     * Turn on form
     * @param  {String} contentId
     * @param  {String} title
     * @param  {String} file
     */

  }, {
    key: "turnOnForm",
    value: function turnOnForm(contentId, title, file) {
      this.contents.forEach(function (content) {
        var active = content.dataset.flyoutContentId === contentId;

        content.classList.toggle("hide", !active);

        if (active) {
          var formTitle = content.querySelector(".form-title");
          if (formTitle) {
            formTitle.innerHTML = title;
          }

          var form = content.querySelector("form");
          if (file) {
            form.dataset.fileUrl = file;
          }

          TweenMax.set(content, { autoAlpha: 1 });

          var formElements = content.querySelectorAll(".form-element");
          TweenMax.staggerFromTo(formElements, 0.3, {
            y: 15,
            autoAlpha: 0
          }, {
            y: 0,
            autoAlpha: 1,
            ease: Cubic.easeOut,
            delay: 0.4
          }, 0.075);
        }
      });
    }
  }]);

  return Flyout;
}();

exports.default = Flyout;

},{"../common/Model":4,"../common/Utils":7}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Forms = function () {
  function Forms() {
    _classCallCheck(this, Forms);

    this.firstRun = false;
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(Forms, [{
    key: "events",
    value: function events() {
      var _this = this;

      // change
      document.addEventListener("change", function (event) {
        return _this.onChange(event);
      });

      // form submissions
      document.addEventListener("submit", function (event) {
        return _this.onFormSumit(event);
      });

      // after page added
      document.addEventListener("FRY_REGLET:AFTER_PAGE_ADDED", function (event) {
        return _this.afterPageAdded(event);
      });

      // after page change
      document.addEventListener("FRY_REGLET:AFTER_PAGE_CHANGE", function (event) {
        return _this.afterPageChange(event);
      });

      // unlock pages
      document.addEventListener("FRY_REGLET:UNLOCK_PAGES", function (event) {
        return _this.onUnlockPage(event);
      });

      // validate form
      document.addEventListener("FRY_REGLET:FORM:VALIDATE", function (event) {
        return _this.onValidate(event);
      });

      // reset form
      document.addEventListener("FRY_REGLET:FORM:RESET", function (event) {
        return _this.onResetForm(event);
      });

      // form validated
      document.addEventListener("FRY_REGLET:FORM:VALIDATED", function (event) {
        return _this.onFormValidated(event);
      });

      // google recaptcha ready
      // document.addEventListener("FRY_REGLET:RECAPTCHA:READY", event => this.reCaptchaReady());

      // click event
      document.addEventListener("click", function (event) {
        return _this.onClick(event);
      });

      // keyup
      document.addEventListener("keyup", function (event) {
        return _this.onKeyUp(event);
      });
    }

    /**
     * on key up
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var form = event.target.closest('form');
      if (form && form.id === "quote-form") return;

      if (event.target.value !== "") {
        var target = event.target;
        var field = target.closest(".form-field");
        if (field) {
          this.removeError(field);
        }
      }
    }

    /**
     * remove error
     * @param  {DOMElement} field
     */

  }, {
    key: "removeError",
    value: function removeError(field) {
      var error = field.querySelector(".form-error-msg");
      if (error) {
        TweenMax.to(error, 0.2, {
          autoAlpha: 0,
          ease: Linear.easeNone
        });
      }
    }

    /**
     * on change event
     * @param  {KeyEvent} event
     */

  }, {
    key: "onChange",
    value: function onChange(event) {
      var target = event.target;

      var select = target.tagName.toLowerCase() === "select";
      if (select) {
        var formField = target.closest(".form-field");
        var fakeSelect = formField.querySelector(".select-trigger-value");
        var text = target.options[target.selectedIndex].text;
        var field = target.closest(".form-field");

        fakeSelect.innerHTML = text;

        this.checkForRequiredSelects(target);
        this.removeError(field);
      }

      var file = target.type === "file";
      if (file) {
        if (target.files && target.files.length) {
          var label = target.nextSibling.nextSibling;
          label.innerHTML = target.dataset.caption.replace("{count}", String(target.files.length));
        }
      }
    }

    /**
     * on click
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {

      // checkbox
      var checkbox = event.target.closest(".form-checkbox");
      if (checkbox) {
        checkbox.classList.remove("error");
      }

      // select item
      var select = event.target.closest(".select");
      if (select && !select.classList.contains("disabled")) {

        var selectItem = event.target.closest(".select-item");

        if (selectItem) {
          var trigger = select.querySelector(".select-trigger");
          var triggerValue = select.querySelector(".select-trigger-value");
          var error = select.querySelector(".form-error-msg");
          var value = selectItem.dataset.value;
          var label = selectItem.innerHTML;

          TweenMax.set(triggerValue, { y: 50 });
          trigger.dataset.value = value;
          triggerValue.innerHTML = label;
          TweenMax.to(triggerValue, 0.4, { y: 0, ease: Quad.easeOut });

          var realSelect = select.querySelector("select");
          realSelect.value = value;
          realSelect.dataset.label = label;

          if (error) {
            TweenMax.to(error, 0.2, {
              autoAlpha: 0,
              ease: Linear.easeNone
            });
          }

          select.classList.remove("error");

          this.checkForRequiredSelects(realSelect);

          this.toggleDropdowns(select);

          _Utils2.default.dispatch("FRY_REGLET:SELECT_CHANGED", { select: select });
        } else {

          var withinList = event.target.closest(".select-dropdown-list-collection");
          if (!withinList) {
            this.toggleDropdowns(select);
          }
        }
      } else {
        this.toggleDropdowns();
      }
    }

    /**
     * check for required selects
     * @param  {DOMElement} realSelect
     */

  }, {
    key: "checkForRequiredSelects",
    value: function checkForRequiredSelects(realSelect) {
      var form = realSelect.closest("form");
      var selectselector = "[data-required-select='" + realSelect.id + "']";
      var valueSelector = "[data-required-value='" + realSelect.value + "']";
      var requiredSelect = form.querySelector(selectselector);

      if (requiredSelect) {
        if (requiredSelect.dataset.requiredValue === realSelect.value) {
          requiredSelect.classList.remove("disabled");
        } else {
          requiredSelect.classList.add("disabled");
        }
      }
    }

    /**
     * Toggle dropdown
     * @param  {DOMElement} selectedSelect
     * @param  {DOMElement} item
     */

  }, {
    key: "toggleDropdowns",
    value: function toggleDropdowns(selectedSelect, item) {
      var selects = document.querySelectorAll(".select");
      selects.forEach(function (select) {
        var dropdown = select.querySelector(".select-dropdown");
        var trigger = select.querySelector(".select-trigger");
        var dropdownScroll = dropdown.querySelector(".ov-s-y");
        var list = dropdown.querySelector(".select-dropdown-list");
        var listCollection = dropdown.querySelector(".select-dropdown-list-collection");
        var isOpen = dropdown.classList.contains("hide");
        var active = select !== selectedSelect;

        select.classList.toggle("active", !active && isOpen);

        if (active || !isOpen) {
          TweenMax.to(list, 0.5, {
            height: 0,
            ease: Quad.easeInOut,
            onComplete: function onComplete() {
              dropdown.classList.add("hide");
              dropdownScroll.scrollTop = 0;
            }
          });
        } else {
          dropdownScroll.scrollTop = 0;
          dropdown.classList.remove("hide");
          var height = listCollection.clientHeight;
          height = height > 200 ? 200 : height;

          TweenMax.set(list, { height: 0 });
          TweenMax.set(listCollection, { autoAlpha: 0 });
          TweenMax.to(list, 0.5, { height: height, ease: Quad.easeInOut });
          TweenMax.to(listCollection, 0.3, { autoAlpha: 1, ease: Linear.easeNone, delay: 0.25 });
        }
      });
    }

    /**
     * on unlock page
     */

  }, {
    key: "onUnlockPage",
    value: function onUnlockPage() {
      this.destroySelects();
    }

    /**
     * after page change
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange() {
      if (!this.firstRun) {
        this.firstRun = true;
      }
    }

    /**
     * after page added
     */

  }, {
    key: "afterPageAdded",
    value: function afterPageAdded(event) {
      var area = event.detail.area;
    }

    /**
     * destory selects
     */

  }, {
    key: "destroySelects",
    value: function destroySelects() {

      if (this.lastData) {
        this.lastData.forEach(function (item) {
          // const isInFlyout = item.select.closest("#flyout");
          // if(!isInFlyout) {
          item.select.dataset.init = "false";
          // item.choices.clearStore();
          item.choices.destroy();
          // }
        });
      }
    }

    /**
     * on form submit
     * @param  {FormEvent} event
     */

  }, {
    key: "onFormSumit",
    value: function onFormSumit(event) {
      var target = event.target;
      var form = target.closest("form");

      // product sample
      if (form && form.id === "product-sample-form") {
        _Utils2.default.dispatch("FRY_REGLET:FORM:VALIDATE", { form: form });
        event.preventDefault();
      }

      // sample request form
      if (form && form.id === "sample-request-form") {
        _Utils2.default.dispatch("FRY_REGLET:FORM:VALIDATE", { form: form });
        event.preventDefault();
      }

      // contact form
      if (form && form.id === "contact-form") {
        _Utils2.default.dispatch("FRY_REGLET:FORM:VALIDATE", { form: form });
        event.preventDefault();
      }

      // quote contact form
      if (form && form.id === "quote-contact-form") {
        _Utils2.default.dispatch("FRY_REGLET:FORM:VALIDATE", { form: form });
        event.preventDefault();
      }

      if (form && form.id === "newsletter") {

        var error = document.querySelector("#newsletter-status-error");
        var success = document.querySelector("#newsletter-status-success");

        var serializedForm = _Utils2.default.serialize(form);
        var url = form.action;

        fetch(url, {
          method: "post",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: serializedForm
        }).then(function (response) {
          return response.text();
        }).then(function (data) {
          form.style.display = "none";

          if (data === 'success') {
            success.style.display = "block";
          } else {
            error.style.display = "block";
          }
        });
        event.preventDefault();
      }
    }

    /**
     * form validated
     */

  }, {
    key: "onFormValidated",
    value: function onFormValidated(event) {
      var form = event.detail.form;

      // console.log("validated", form);

      // product sample
      // TODO: hook up to ajax
      if (form && form.id === "product-sample-form") {
        this.postData(form);
      }

      // product sample
      // TODO: hook up to ajax
      if (form && form.id === "sample-request-form") {
        this.postData(form);
      }

      // contact form
      // TODO: hook up to ajax
      if (form && form.id === "contact-form") {
        this.postData(form);
      }

      // quote contact form
      // TODO: hook up to ajax
      if (form && form.id === "quote-contact-form") {
        var quoteForm = document.querySelector("#quote-form");
        var formFields = quoteForm.querySelectorAll("input");
        var bigButtons = quoteForm.querySelectorAll(".big-button");

        formFields.forEach(function (input) {
          input.setAttribute("disabled", "disabled");
        });

        TweenMax.staggerTo(bigButtons, 0.3, { autoAlpha: 0, ease: Linear.easeNone }, 0.1);

        // TODO: include in quote contact request
        var serializedQuoteForm = _Utils2.default.serialize(quoteForm);

        this.turnOffForm(form);
      }
    }

    /**
     * post data
     * @param  {DOMElement} form
     */

  }, {
    key: "postData",
    value: function postData(form) {
      var _this2 = this;

      var serializedForm = _Utils2.default.serialize(form);
      var url = form.action;

      fetch(url, {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: serializedForm
      }).then(function (response) {
        return response.text();
      }).then(function (data) {

        data = JSON.parse(data);

        // turn off form after post
        var inFlyout = form.closest(".flyout");
        if (inFlyout) {
          _this2.turnOffForm(form);
        } else if (!inFlyout && form.id === "contact-form") {
          _this2.turnOffContactForm(form);
        }

        // mailchimp subscribe
        // this.subscribeUserToNewsletter();

        // download file?
        _this2.downloadFile(form);

        console.log('Request succeeded with JSON response', data);
      }).catch(function (error) {
        console.log('Request failed', error);
      });
    }

    /**
     * download file
     */

  }, {
    key: "downloadFile",
    value: function downloadFile(form) {
      // const input = form.querySelector("#prod-fd-file");
      // if(input) {
      //   Utils.download(input.value);
      // }

      var file = form.dataset.fileUrl;
      if (file) {
        _Utils2.default.download(file);
      }
    }

    /**
     * subscribe user to mailchimp list
     */

  }, {
    key: "subscribeUserToNewsletter",
    value: function subscribeUserToNewsletter() {
      var login = "anystring";
      var password = _Model.model.mailchimpApiKey;

      var body = {
        "email_address": "fryreglet1@fryreglet.com",
        "status": "subscribed",
        "merge_fields": {
          "FNAME": "Fry1",
          "LNAME": "Reglet1"
        }
      };

      var user = login + ":" + password;

      fetch("https://us20.api.mailchimp.com/3.0/lists/" + _Model.model.mailchimpList + "/members/", {
        method: "post",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Authorization": "Basic " + window.btoa(login + ":" + password)
        },
        body: body
      }).then(function (response) {
        return response.text();
      }).then(function (data) {
        console.log("mailchimp response", data);
      });
    }

    /**
     * open popup
     * @param  {String} file
     */

  }, {
    key: "openPopup",
    value: function openPopup(file) {
      var settings = "menubar=no,toolbar=yes,resizable=yes,scrollbars=yes,height=600,width=600";
      if (file) {
        window.open(file, "_blank", settings);
      }
    }

    /**
     * turn off contact form
     */

  }, {
    key: "turnOffContactForm",
    value: function turnOffContactForm(form) {
      var _this3 = this;

      var content = form.closest(".form-element");
      TweenMax.to(content, 0.2, {
        autoAlpha: 0,
        ease: Linear.easeNone,
        onComplete: function onComplete() {
          if (form.id === "contact-form") {
            form.setAttribute("disabled", "disabled");
            content.classList.add("opacity-20");
          } else {
            content.classList.add("hide");
          }

          _this3.turnOnContactThankYou(form);
        }
      });
    }

    /**
     * Turn off form
     * @param  {DOMElement} form
     */

  }, {
    key: "turnOffForm",
    value: function turnOffForm(form) {
      var _this4 = this;

      var flyout = form.closest("#flyout");
      var scrollPane = flyout.querySelector(".ov-s-y");
      TweenMax.to(scrollPane, 0.3, {
        scrollTo: {
          y: 0,
          autoKill: true
        },
        ease: Quad.easeInOut,
        onComplete: function onComplete() {
          _this4.turnOffFlyoutContent(form);
        }
      });
    }

    /**
     * turn off content
     * @param  {DOMElement} form
     */

  }, {
    key: "turnOffFlyoutContent",
    value: function turnOffFlyoutContent(form) {
      var _this5 = this;

      var content = form.closest("[data-flyout-content-id]");
      TweenMax.to(content, 0.2, {
        autoAlpha: 0,
        ease: Linear.easeNone,
        onComplete: function onComplete() {
          content.classList.add("hide");
          _this5.turnOnFlyoutThankYou(form);
        }
      });
    }

    /**
     * Thank you message
     */

  }, {
    key: "turnOnFlyoutThankYou",
    value: function turnOnFlyoutThankYou(form) {

      var thankYou = document.querySelector("[data-flyout-content-id='thank-you']");
      thankYou.classList.remove("hide");

      var formElements = thankYou.querySelectorAll(".autoAlpha0");
      TweenMax.staggerFromTo(formElements, 0.3, {
        y: 15,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Cubic.easeOut,
        onComplete: function onComplete() {
          _Utils2.default.dispatch("FRY_REGLET:FORM:RESET", { form: form });
        }
      }, 0.1);
    }

    /**
     * Thank you message
     */

  }, {
    key: "turnOnContactThankYou",
    value: function turnOnContactThankYou(form) {

      var thankYou = document.querySelector("[data-form-id='thank-you']");
      thankYou.classList.remove("hide");

      var formElements = thankYou.querySelectorAll(".autoAlpha0");
      TweenMax.staggerFromTo(formElements, 0.3, {
        y: 15,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        ease: Cubic.easeOut,
        onComplete: function onComplete() {
          _Utils2.default.dispatch("FRY_REGLET:FORM:RESET", { form: form });
        }
      }, 0.1);
    }

    /**
     * validate form
     * @param  {CustomEvent} event
     */

  }, {
    key: "onValidate",
    value: function onValidate(event) {
      var form = event.detail.form;
      var formElements = form.querySelectorAll(".form-input");
      var totalRequired = 0;
      var totalFilled = 0;

      formElements.forEach(function (el) {
        var field = el.closest(".form-field");
        var error = field.querySelector(".form-error-msg");

        var isCheckbox = el.type === "checkbox";
        var isEmpty = isCheckbox ? !el.checked : el.value === "" || el.value === undefined;
        var isRequired = el.required;

        if (isEmpty && !field.classList.contains("disabled")) {
          if (isRequired) {
            totalRequired++;
          }

          if (error) {
            TweenMax.to(error, 0.2, {
              autoAlpha: 1,
              ease: Linear.easeNone
            });
          } else if (isCheckbox && isRequired) {
            field.classList.add("error");
          }
        } else {
          if (isRequired && !field.classList.contains("disabled")) {
            totalRequired++;
            totalFilled++;
          }

          if (error) {
            TweenMax.to(error, 0.2, {
              autoAlpha: 0,
              ease: Linear.easeNone
            });
          } else if (isCheckbox) {
            field.classList.remove("error");
          }
        }
      });

      if (totalFilled === totalRequired) {
        this.verifyRecaptcha(form);
      }
    }

    /**
     * verify recatpcha
     * @param  {DOMElement} form
     */

  }, {
    key: "verifyRecaptcha",
    value: function verifyRecaptcha(form) {
      window.grecaptcha.execute(_Model.model.recaptchaToken, {
        action: 'FryFeglet'
      }).then(function (token) {
        _Utils2.default.dispatch("FRY_REGLET:FORM:VALIDATED", { form: form });
      });
    }

    /**
     * Rest form
     * @param  {CustomEvent} event
     */

  }, {
    key: "onResetForm",
    value: function onResetForm(event) {
      var form = event.detail.form;
      var formElements = form.querySelectorAll(".form-input");
      formElements.forEach(function (el) {

        var field = el.closest(".form-field");

        if (el.tagName.toLowerCase() === "select") {
          el.selectedIndex = 0;

          if (field.dataset.requiredValue) {
            field.classList.add("disabled");
          }

          var triggerValue = field.querySelector(".select-trigger-value");
          var option = el.querySelector("option");

          var required = el.required ? "*" : "";
          triggerValue.innerHTML = option.label + required;
        } else if (el.tagName.toLowerCase() === "input") {
          el.value = "";
          el.checked = false;
        }
      });
    }
  }]);

  return Forms;
}();

exports.default = Forms;

},{"../common/Model":4,"../common/Utils":7}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Header = function () {
  function Header() {
    _classCallCheck(this, Header);

    var view = document.querySelector("#site-header");

    if (!view) return;

    var container = document.querySelector("#header-container");
    var hamburger = document.querySelector("#hamburger");

    this.view = view;
    this.container = container;
    this.hamburger = hamburger;

    this.template = document.querySelector(".template");
    this.background = document.querySelector("#header-background");
    this.navBackground = document.querySelector("#nav-background");
    this.navPanels = document.querySelector("#nav-panels");
    this.panels = document.querySelectorAll("[data-nav-parent]");
    this.mainNav = document.querySelector("#main-nav");
    this.searchClose = document.querySelector("#search-close");
    this.searchOpen = document.querySelector("#search-open");
    this.filterTrigger = document.querySelector(".filter-trigger");
    this.headerTrigger = document.querySelector("#header-accordion-trigger");
    this.logo = document.querySelector("#logo");
    this.headerContainer = document.querySelector("#site-header-container");
    this.mainNavItems = document.querySelectorAll(".main-nav-item");
    this.searchInput = document.querySelector("#search-input");
    this.ajax = document.querySelector("#ajax-content");
    this.navCover = document.querySelector("#nav-cover");
    this.levels = [null, null, null];
    this.mousePosition = { x: 0, y: 0 };
    this.isMobileNavOpen = false;
    this.backgroundOn = false;

    this.isHollow = document.querySelector(".hollow");
    this.setHollowNav(this.isHollow);

    this.onScroll();
    this.resize();
    this.onTick();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(Header, [{
    key: "events",
    value: function events() {
      var _this = this;

      // click
      if (!_Utils2.default.isTouchDevice()) {
        // mouse move
        // document.addEventListener("mousemove",
        //   event => this.onMouseMove(event), Utils.getPassive
        // );

      } else {
        this.hamburger.addEventListener("touchstart", function (event) {
          return _this.onHamburger(event);
        });
      }

      this.navCover.addEventListener("click", function () {
        return _this.turnPanelsOff();
      });

      document.addEventListener("click", function (event) {
        return _this.onClick(event);
      });

      // grid updated
      document.addEventListener("FRY_REGLET:GRID_UPDATED", function (event) {
        return _this.onGridUpdated(event);
      });

      // before page change
      document.addEventListener("FRY_REGLET:BEFORE_PAGE_CHANGE", function (event) {
        return _this.beforePageChange(event);
      });

      // lightbox on
      document.addEventListener("FRY_REGLET:LIGHTBOX:ON", function (event) {
        return _this.onLightboxOn(event);
      });

      // lightbox off
      document.addEventListener("FRY_REGLET:LIGHTBOX:OFF", function (event) {
        return _this.onLightboxOff(event);
      });

      // after page change
      document.addEventListener("FRY_REGLET:AFTER_PAGE_CHANGE", function (event) {
        return _this.afterPageChange(event);
      });

      // page complete
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.onPageComplete(event);
      });

      // navigating
      document.addEventListener("FRY_REGLET:NAVIGATING", function (event) {
        return _this.onNavigating(event);
      });

      // mobile filters open
      document.addEventListener("FRY_REGLET:MOBILE_FILTERS_OPEN", function (event) {
        return _this.mobileFiltersOpen();
      });

      // turn on header
      document.addEventListener("FRY_REGLET:HEADER:ON", function (event) {
        return _this.turnOnHeader();
      });

      // mobile filters close
      document.addEventListener("FRY_REGLET:MOBILE_FILTERS_CLOSE", function (event) {
        return _this.mobileFiltersClose();
      });

      // ticker
      TweenMax.ticker.addEventListener("tick", function (event) {
        return _this.onTick();
      });

      // scroll
      var fn = _Utils2.default.debounce(this.resize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // scroll
      var scrollFn = _Utils2.default.debounce(this.onScroll.bind(this), 5);
      document.addEventListener("scroll", scrollFn, _Utils2.default.getPassive);
    }
  }, {
    key: "onLightboxOn",
    value: function onLightboxOn() {
      this.isLightboxOn = true;
    }
  }, {
    key: "onLightboxOff",
    value: function onLightboxOff() {
      this.isLightboxOn = false;
    }

    /**
     * on scroll
     */

  }, {
    key: "onScroll",
    value: function onScroll() {
      this.nextScroll = window.scrollY || window.pageYOffset;
      if (this.nextScroll < 0) this.nextScroll = 0;
    }

    /**
     * on grid updated
     */

  }, {
    key: "onGridUpdated",
    value: function onGridUpdated() {
      this.resetScrollPosition();
      this.resetNav(false, false);
    }

    /**
     * on page complete
     */

  }, {
    key: "onPageComplete",
    value: function onPageComplete() {
      this.dynamicGridItem = document.querySelector(".dynamic-grid-item");
      if (this.dynamicGridItem) {
        this.toggleTrigger(true);
      }

      this.sidebar = document.querySelector(".sidebar");
      this.isHollow = document.querySelector(".hollow");

      this.enabled = true;
    }

    /**
     * mobile filters open
     */

  }, {
    key: "mobileFiltersOpen",
    value: function mobileFiltersOpen() {
      this.filtersOpen = true;
      this.resetScrollPosition();
      TweenMax.to(this.container, 0.3, { y: 0, ease: Cubic.easeInOut });
    }

    /**
     * turn on header
     */

  }, {
    key: "turnOnHeader",
    value: function turnOnHeader() {
      this.lockedToTop = true;

      if (!this.backgroundIsOn) {
        this.backgroundIsOn = true;
        TweenMax.set(this.navBackground, {
          display: "block",
          backgroundColor: "#FFF",
          autoAlpha: 1
        });
        this.filterTrigger.classList.add("empty");
      }
    }

    /**
     * reset scroll position
     */

  }, {
    key: "resetScrollPosition",
    value: function resetScrollPosition() {
      this.startingPos = 0;
      this.mark = 0;
      this.lastDirection = null;
      this.val = null;
    }

    /**
     * mobile filters close
     */

  }, {
    key: "mobileFiltersClose",
    value: function mobileFiltersClose() {
      this.filtersOpen = false;
    }

    /**
     * fire page
     * @param  {Event} event
     */

  }, {
    key: "firePage",
    value: function firePage(event) {

      var trigger = event.target.closest("[data-nav-trigger]");
      if (trigger && trigger.dataset.navTrigger !== "shape-finder" && trigger.dataset.navTrigger !== "home") {

        trigger.classList.add("selected");
        this.togglePanels(trigger);

        event.preventDefault();
      }
    }

    /**
     * After page change
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange(event) {
      var area = event.detail.area;

      this.lastDirection = null;
      this.val = null;
      this.mobileVal = null;
    }

    /**
     * Before page change
     */

  }, {
    key: "beforePageChange",
    value: function beforePageChange(event) {
      var area = event.detail.area;
      this.dynamicGridItem = area.querySelector(".dynamic-grid-item");
      var isGrid = this.dynamicGridItem ? true : false;
      this.toggleTrigger(isGrid);

      this.isHollow = area.querySelector(".hollow");
      this.setHollowNav(this.isHollow);

      this.resetNav();
    }

    /**
     * Navigating
     */

  }, {
    key: "onNavigating",
    value: function onNavigating(event) {
      this.enabled = false;

      var fromMainNav = event.detail.fromMainNav;

      this.turnPanelsOff({
        panel: null,
        animate: true,
        fromNav: fromMainNav
      });

      this.toggleTrigger(false);

      this.backgroundIsOn = null;
      TweenMax.to(this.navBackground, 0.3, {
        autoAlpha: 0,
        ease: Linear.easeNone
      });
    }

    /**
     * onClick
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {
      if (event.target.closest("#hamburger") && _Utils2.default.isTouchDevice()) return;
      this.firePage(event);
    }

    /**
     * hamburger handler
     */

  }, {
    key: "onHamburger",
    value: function onHamburger(event) {
      var trigger = event.target.closest("[data-nav-trigger]");
      this.togglePanels(trigger);
    }

    /**
     * mouse move
     * @param  {MouseEvent} event
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      this.mousePosition = {
        x: event.clientX,
        y: event.clientY
      };
    }

    /**
     * Toggle Panels
     * @param  {DOMElement} state
     */

  }, {
    key: "togglePanels",
    value: function togglePanels(trigger) {

      var parent = trigger.dataset.navTrigger;
      var panel = document.querySelector("[data-nav-parent='" + parent + "']");

      // panel open and click is level 1 and same item as currently open
      if (this.panelsOn && trigger.dataset.level === "1" && this.levels[0] === parent && this.screen.type !== "mobile") {

        this.turnPanelsOff({ panel: panel, animate: true });
      }

      // hamburger close
      else if (trigger.id === "hamburger" && parent === "main" && this.panelsOn && trigger.dataset.level === "1") {

          this.turnPanelsOff({ fromHamburger: true, animate: true });
        }

        // panel is closed and click is level 1
        else if (!this.panelsOn && trigger.dataset.level === "1") {

            this.setTriggers(trigger);
            this.turnPanelsOn(parent, panel);
          }

          // click isn't level 1 or isn't the same level 1
          else if (panel && (trigger.dataset.level !== "1" || this.levels[0] !== parent)) {

              this.setTriggers(trigger);
              this.turnPanelsOn(parent, panel);
            }

      // set nav state
      this.levels[Number(trigger.dataset.level) - 1] = trigger.dataset.navTrigger;
    }

    /**
     * Set nav triggers
     */

  }, {
    key: "setTriggers",
    value: function setTriggers(trigger) {
      var navTrigger = void 0,
          parentEl = void 0,
          parent = void 0;

      if (trigger) {
        navTrigger = trigger.dataset.navTrigger;
        parentEl = trigger.closest("[data-nav-parent]");

        if (parentEl) {
          parent = parentEl.dataset.navParent;
        }
      }

      this.mainNavItems.forEach(function (item) {
        var id = item.id.replace("-nav-item", "");
        var isActive = id === navTrigger || id === parent;

        item.classList.toggle("active", isActive);
        item.classList.toggle("inactive", !isActive && trigger !== undefined);
      });
    }

    /**
     * Turn panel on
     */

  }, {
    key: "turnPanelsOn",
    value: function turnPanelsOn(parent, panel) {
      var _this2 = this;

      TweenMax.killAll(false, false, true);

      this.navCover.classList.remove("hide");

      if (parent !== "main") {
        this.navPanels.classList.remove("hide");
        this.logo.classList.add("removed");
      }

      this.listenForScroll = true;
      this.panelsOn = true;
      this.view.classList.add("opened", "is-opened");

      if (this.screen.type === "mobile") {
        this.isMobileNavOpen = true;
        this.direction = null;
      }

      this.toggleTrigger(false);

      var speed = this.screen.type === "mobile" ? 0.7 : 0.7;

      var delay = this.val !== 0 ? 0 : 0.2;
      TweenMax.delayedCall(delay, function () {
        TweenMax.to(_this2.background, speed, {
          display: "block",
          y: "0%",
          ease: Quad.easeInOut,
          onComplete: function onComplete() {
            _this2.menuOpened(parent);
          }
        });

        TweenMax.delayedCall(0, function () {
          _this2.togglePanel(parent, panel);
        });
      });
    }

    /**
     * menu opened
     */

  }, {
    key: "menuOpened",
    value: function menuOpened(parent) {
      var _this3 = this;

      if (parent === "main") {
        this.navPanels.classList.add("hide");
        this.logo.classList.remove("removed");
      }

      if (this.val !== 0) {
        this.resetScrollPosition();
        TweenMax.to(this.container, 0.2, {
          y: 0,
          ease: Quad.easeOut
        });
      }

      if (this.screen.type === "mobile") {
        _Utils2.default.dispatch("FRY_REGLET:NAV:OPEN");
      }

      if (parent === "search") {
        this.toggleSearchIcon(false);

        TweenMax.delayedCall(1, function () {
          _this3.searchInput.focus();
        });
      } else {
        this.toggleSearchIcon(true);
      }

      // remove main nav selected items
      var selectedMainNavItems = this.mainNav.querySelectorAll(".selected");
      selectedMainNavItems.forEach(function (select) {
        select.classList.remove("selected");
      });

      // remove panels selected items
      var selectedPanelItems = this.navPanels.querySelectorAll(".selected");
      selectedPanelItems.forEach(function (select) {
        select.classList.remove("selected");
      });

      // listen for mouse move
      if (!_Utils2.default.isTouchDevice()) {
        this.listenForMove = true;
      }

      // if mobile menu
      if (this.screen.type === "mobile" && !this.lastPinnedPosition) {
        this.lastPinnedPosition = this.scroll;
        var contentArea = document.querySelector(".ajax-content-area");
        TweenMax.set(contentArea, {
          position: "fixed",
          zIndex: 0
        });

        if (this.screen.type === "mobile") {
          _Utils2.default.dispatch("FRY_REGLET:NAV:OPEN");
        }

        this.ajax.classList.add("hide");
      }
    }

    /**
     * toggle filters trigger
     * @param  {String} state
     */

  }, {
    key: "toggleTrigger",
    value: function toggleTrigger(state) {
      if (this.screen.type !== "mobile") return;

      var display = state ? "block" : "none";
      var delay = state ? 0.3 : 0;

      TweenMax.killTweensOf(this.headerTrigger);
      TweenMax.to(this.headerTrigger, 0.3, {
        autoAlpha: state,
        display: display,
        delay: delay,
        ease: Linear.easeNone
      });
    }

    /**
     * Toggle search icon
     * @param  {Boolean} state
     */

  }, {
    key: "toggleSearchIcon",
    value: function toggleSearchIcon(state) {
      if (this.screen.type === "desktop") {
        this.searchClose.classList.toggle("hide", state);
        this.searchOpen.classList.toggle("hide", !state);
      }
    }

    /**
     * turn panel off
     */

  }, {
    key: "turnPanelsOff",
    value: function turnPanelsOff(params) {
      var _this4 = this;

      var panel = params ? params.panel : null;
      var animate = params ? params.animate : true;
      var fromNav = params ? params.fromNav : false;
      var fromHamburger = params ? params.fromHamburger : false;

      TweenMax.killAll(false, false, true);

      this.navCover.classList.add("hide");

      var speedSlow = animate ? 0.5 : 0;
      var speedFast = animate ? 0.15 : 0;

      this.panelsAnimatingOff = true;
      this.panelsOn = false;
      this.listenForMove = false;
      this.view.classList.remove("opened", "is-opened");

      this.ajax.classList.remove("hide");

      var speed = this.screen.type === "mobile" ? 0.7 : 0.6;
      speed = animate ? speed : 0;

      if ((fromNav || fromHamburger) && this.screen.type === "mobile") {
        this.lockPage();
      }

      var d = this.screen.type === "mobile" ? 0 : 0.2;
      TweenMax.to(this.background, speed, {
        y: "-100%",
        display: "none",
        delay: d,
        ease: Power1.easeInOut
      });

      this.togglePanel();

      var delay = !fromNav && animate ? 0.75 : 0.2;
      TweenMax.delayedCall(delay, function () {

        if (_this4.forcingClose) {
          _this4.setHollowNav(_this4.isHollow);
        }

        if (_this4.dynamicGridItem && !fromNav) {
          _this4.toggleTrigger(true);
        }

        _this4.setTriggers();
        _this4.resetSearch();

        _this4.searchClose.classList.add("hide");
        _this4.searchOpen.classList.remove("hide");
        _this4.navPanels.classList.add("hide");
        _this4.logo.classList.remove("removed");

        _this4.isMobileNavOpen = false;
        _this4.listenForScroll = false;
        _this4.panelsAnimatingOff = false;
        _this4.forcingClose = false;

        _Utils2.default.dispatch("FRY_REGLET:NAV:CLOSE");
      });
    }

    /**
     * lock page
     */

  }, {
    key: "lockPage",
    value: function lockPage() {
      var ajaxContentArea = document.querySelector(".ajax-content-area");
      if (ajaxContentArea) {
        TweenMax.set(ajaxContentArea, { clearProps: "y, position" });

        TweenMax.set(window, { scrollTo: {
            y: this.lastPinnedPosition,
            autoKill: false
          } });

        this.lastPinnedPosition = null;
      }
    }

    /**
     * reset search
     */

  }, {
    key: "resetSearch",
    value: function resetSearch() {
      this.searchInput.value = "";
    }

    /**
     * Toggle Panel
     * @param  {Object} parent
     * @param  {Object} panel
     */

  }, {
    key: "togglePanel",
    value: function togglePanel(parent, panel) {
      this.panels.forEach(function (panelItem) {
        if (panelItem.dataset.navParent !== parent) {
          panelItem.classList.remove("active");
        }
      });

      if (panel) {
        var container = panel.closest(".panel-links");
        TweenMax.set(container, {
          scrollTo: {
            y: 0, autoKill: true
          }
        });

        TweenMax.delayedCall(0.1, function () {
          var selected = container.querySelectorAll(".selected");
          selected.forEach(function (item) {
            item.classList.remove("selected");
          });
          panel.classList.add("active");
        });
      }
    }

    /**
     * resize
     */

  }, {
    key: "resize",
    value: function resize() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      this.screen = { width: width, height: height, type: type };

      if (this.screen.type === "mobile") {
        TweenMax.set(this.headerContainer, {
          height: this.screen.height
        });
      } else {
        TweenMax.set(this.headerContainer, {
          clearProps: "height"
        });
      }

      this.onResize();
    }

    /**
     * Ticker
     */

  }, {
    key: "onTick",
    value: function onTick() {
      if (!this.enabled) return;

      if (this.nextScroll < 0) this.nextScroll = 0;

      // auto-collapse on mouse off
      if (!_Utils2.default.isTouchDevice() && this.screen.type === "desktop") {
        // this.checkMouseOffMenu();

        // scrolling when nav is open
        if (this.screen.type === "desktop" && this.listenForScroll && this.scroll !== this.nextScroll) {
          if (!this.panelsAnimatingOff) {
            this.forcingClose = true;
            this.turnPanelsOff();
          }
          return;
        }
      }

      if (this.filtersOpen) {
        return;
      }

      if (this.scroll === this.nextScroll) return;

      // set direction
      if (this.nextScroll < this.scroll) {
        this.direction = "up";
      } else if (this.nextScroll > this.scroll) {
        this.direction = "down";
      } else {
        this.direction = "";
      }

      this.scroll = this.nextScroll;

      if (this.screen.type === "mobile" && this.isMobileNavOpen) return;

      // set mark for scroll
      if (this.direction !== this.lastDirection) {
        this.lastDirection = this.direction;
        this.mark = this.scroll;
        this.startingPos = this.val;
      }

      // if at top of page
      if (this.scroll === 0 && !this.lockedToTop) {
        this.resetNav(this.filtersOpen);

        this.setHollowNav(this.isHollow);
        this.lockedToTop = true;
      }

      // page scroll not at top
      else if (this.scroll !== 0) {
          this.lockedToTop = false;
        }

      // move nav
      this.setNavPosition();

      // save last position
      this.lastDirection = this.direction;
    }

    /**
     * set nav position
     */

  }, {
    key: "setNavPosition",
    value: function setNavPosition() {
      var _this5 = this;

      var scrollPercent = 0.75;
      var val = Math.floor((this.mark - this.scroll) * scrollPercent + this.startingPos);
      if (val > 0) val = 0;

      var hasFilters = this.sidebar;
      var filtersOffset = 52;
      var navOffset = 81;
      var maxPosWithFilters = hasFilters ? filtersOffset + navOffset : navOffset;
      var maxPos = this.screen.type === "mobile" ? maxPosWithFilters : 141;

      if (val < -maxPos) {
        val = -maxPos;

        if (this.screen.type === "desktop") {
          this.turnOnHeader();
          this.setHollowNav(false);
        }
      }

      if (this.screen.type === "mobile" && this.direction === "up" && this.val !== val) {

        if (this.mobileVal !== "on") {
          val = 0;
          this.mobileVal = "on";

          this.val = val;
          TweenMax.killTweensOf(this.container);
          TweenMax.to(this.container, 0.4, {
            y: val,
            ease: Quad.easeOut,
            delay: 0.15,
            onComplete: function onComplete() {
              var hollow = _this5.scroll > 0 ? false : _this5.isHollow;
              _this5.setHollowNav(hollow);
            }
          });
        }
      } else if (this.screen.type === "mobile" && this.direction === "down" && this.val !== val) {

        if (this.mobileVal !== "off") {
          val = -maxPos;
          this.mobileVal = "off";

          this.val = val;
          TweenMax.killTweensOf(this.container);
          TweenMax.to(this.container, 0.4, {
            y: val,
            ease: Quad.easeInOut,
            delay: 0.15,
            onComplete: function onComplete() {
              _this5.setHollowNav(false);
              _this5.turnOnHeader();
            }
          });
        }
      }

      if (this.screen.type === "desktop" && this.val !== val) {
        this.mobileVal = null;
        this.val = val;
        TweenMax.to(this.container, 0.025, {
          y: val,
          ease: Quad.easeOut
        });
      }
    }

    /**
     * set nake nav
     * @param {Boolean} state
     */

  }, {
    key: "setHollowNav",
    value: function setHollowNav(state) {
      if (this.hollow !== state) {
        this.view.classList.toggle("hollow", state);
        this.hollow = state;
      }
    }

    /**
     * Test of auto-collpase
     */

  }, {
    key: "checkMouseOffMenu",
    value: function checkMouseOffMenu() {
      if (this.listenForMove && this.mousePosition.y > 380 && this.screen.type === "desktop") {
        this.turnPanelsOff();
      }
    }

    /**
     * Reset nav
     */

  }, {
    key: "resetNav",
    value: function resetNav(filtersOpen) {
      var _this6 = this;

      var animateBackground = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.lastSize = null;

      TweenMax.to(this.container, 0.4, {
        y: 0,
        ease: Quad.easeOut,
        onComplete: function onComplete() {
          TweenMax.set(_this6.container, { clearProps: "all" });
          _this6.view.classList.add("animateable");
        }
      });

      var autoAlpha = filtersOpen ? 1 : 0;
      var color = void 0;

      if (this.screen.type === "mobile" && !this.isHollow) {
        var path = _Utils2.default.getPath()[0];

        var galleryURL = document.querySelector(".main").dataset.url;

        if (path === galleryURL || path === "color-finder" || path === "shape-finder" || path === "gallery") {
          autoAlpha = 1;
        } else {
          autoAlpha = 0;
        }
        color = "#FAFCFE";
      } else if (filtersOpen && !this.isHollow) {
        autoAlpha = 1;
        color = "#FFFFFF";
      } else {
        color = "#FAFCFE";
      }

      var backgroundActive = filtersOpen ? true : false;

      if (this.backgroundIsOn !== backgroundActive) {
        this.backgroundIsOn = backgroundActive;

        var speed = animateBackground ? 0.3 : 0;

        if (!this.isLightboxOn) {
          TweenMax.to(this.navBackground, speed, {
            display: "block",
            autoAlpha: autoAlpha,
            backgroundColor: color,
            ease: Linear.easeNone
          });

          var value = this.screen.type === "mobile" ? autoAlpha && this.isHollow : autoAlpha;
          this.filterTrigger.classList.toggle("empty", value);
        } else {
          this.resetScrollPosition();
        }
      }
    }

    /**
     * Resize
     */

  }, {
    key: "onResize",
    value: function onResize() {

      if (this.lastType !== this.screen.type) {
        var firstRun = !this.lastType;

        this.lastType = this.screen.type;

        if (firstRun) return;

        this.panelsOn = false;

        this.turnPanelsOff({
          panel: null,
          animate: false
        });
      }
    }
  }]);

  return Header;
}();

exports.default = Header;

},{"../common/Model":4,"../common/Utils":7}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LazyLoad = function () {
  function LazyLoad() {
    _classCallCheck(this, LazyLoad);

    this.events();
  }

  _createClass(LazyLoad, [{
    key: "events",
    value: function events() {
      var _this = this;

      // page change
      document.addEventListener("FRY_REGLET:BEFORE_PAGE_CHANGE", function (event) {
        return _this.beforePageChange(event);
      });

      // grid updated
      document.addEventListener("FRY_REGLET:GRID_UPDATED", function (event) {
        return _this.afterPageChange(event);
      });

      // page complete
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.afterPageChange(event);
      });

      // navigating
      document.addEventListener("FRY_REGLET:NAVIGATING", function (event) {
        return _this.onNavigating(event);
      });

      // intersection observer
      this.observer = new IntersectionObserver(function (entries, observer) {
        return _this.check(entries, observer);
      }, {
        rootMargin: "200px",
        threshold: 0
      });
    }

    /**
     * check lazy load
     * @param  {DOMCollection}   entries
     * @param  {IntersectionObserver}   observer
     */

  }, {
    key: "check",
    value: function check(entries, observer) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          _this2.loadImage(entry.target);
          _this2.observer.unobserve(entry.target);
        }
      });
    }

    /**
     * on navigating
     */

  }, {
    key: "onNavigating",
    value: function onNavigating() {
      this.enabled = false;
    }

    /**
     * before page change
     */

  }, {
    key: "beforePageChange",
    value: function beforePageChange() {
      this.images = [];
    }

    /**
     * after page change
     * @param  {CustomEvent} event
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange(event) {
      var _this3 = this;

      var selector = "[data-src]:not([data-loaded='true']), [data-background]:not([data-loaded='true'])";
      var nodelist = document.querySelectorAll(selector);

      this.images = _Utils2.default.getArrayFromNodeList(nodelist);
      this.enabled = true;

      this.images.forEach(function (image) {
        _this3.observer.observe(image);
      });
    }

    /**
     * Preload image
     * @param  {DOMElement} image
     */

  }, {
    key: "loadImage",
    value: function loadImage(image) {
      var _this4 = this;

      var placeholder = new Image();
      var src = image.dataset.src || image.dataset.background;

      placeholder.onload = function (event) {
        return _this4.imageLoaded(image);
      };
      placeholder.src = _Model.model.baseurl + _Model.model.folder + src;
    }

    /**
     * image loaded
     */

  }, {
    key: "imageLoaded",
    value: function imageLoaded(image) {
      if (image.dataset.src) {
        image.src = _Model.model.baseurl + _Model.model.folder + image.dataset.src;
      } else if (image.dataset.background) {
        var url = _Model.model.baseurl + _Model.model.folder + image.dataset.background;
        image.style.backgroundImage = "url('" + url + "')";
      }
      image.classList.add("trans-all-medium-linear");
      image.classList.remove("autoAlpha0");
    }
  }]);

  return LazyLoad;
}();

exports.default = LazyLoad;

},{"../common/Model":4,"../common/Utils":7}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LightBox = function () {
  function LightBox() {
    var _this = this;

    _classCallCheck(this, LightBox);

    this.ESC_KEY = 27;
    this.htmlEl = document.documentElement;
    this.ajaxContent = document.querySelector("#ajax-content");
    this.lightbox = document.querySelector("#lightbox");

    if (!this.lightbox) return;

    this.slideshow = document.querySelector("#lightbox-slideshow-media");
    this.info = document.querySelector("#lightbox-info");
    this.open = document.querySelector("#lightbox-info-open");
    this.close = document.querySelector("#lightbox-info-close");
    this.infoItems = this.info.querySelectorAll(".autoAlpha0");
    this.overlay = document.querySelector("#lightbox-overlay");
    this.leftButton = document.querySelector("[data-direction='prev']");
    this.rightButton = document.querySelector("[data-direction='next']");

    var shares = document.querySelectorAll(".external-share, .external-mail");
    this.baseShares = [];
    shares.forEach(function (share) {
      _this.baseShares.push(share.href);
    });

    var template = document.querySelector("#lightbox-slideshow-image");
    this.imageTemplate = template.cloneNode(true);
    template.remove();

    this.resize();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(LightBox, [{
    key: "events",
    value: function events() {
      var _this2 = this;

      // click
      document.addEventListener("click", function (event) {
        return _this2.onClick(event);
      });

      // popstate
      window.addEventListener("popstate", function (event) {
        return _this2.onPopState(event);
      });

      // keyup
      document.addEventListener("keyup", function (event) {
        return _this2.onKeyUp(event);
      });

      var fn = _Utils2.default.debounce(this.resize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // before page animate in
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this2.pageComplete(event);
      });
    }

    /**
     * popstate
     */

  }, {
    key: "onPopState",
    value: function onPopState() {
      var path = _Utils2.default.getPath();

      if (path[0] === "gallery" && path[1]) {
        this.setViewState(true, path[1], true, false);
      } else {
        this.setViewState(false, null, true, false);
      }
    }

    /**
     * page changed handler
     */

  }, {
    key: "pageComplete",
    value: function pageComplete() {

      this.trigger = document.querySelector("[data-lightbox]");
      if (!this.trigger) return;

      this.resize();

      this.enabled = false;

      this.isSearchPage = document.querySelector(".search-results-page");
      if (this.isSearchPage) {
        var main = document.querySelector("#main");
        var galleryURL = main.dataset.galleryApi;
        var url = _Model.model.baseurl + _Model.model.folder + "api/" + galleryURL;
        this.fetchData(url);
      }

      this.firePage(true);
    }

    /**
     * fire page
     * @param  {Boolean} updateUrl
     */

  }, {
    key: "firePage",
    value: function firePage(updateUrl) {
      var path = _Utils2.default.getPath();

      if (path[1]) {
        if (this.screen.type === "mobile") {
          this.moileScrollTo(path[1]);
        } else {
          this.setViewState(true, path[1], false, updateUrl);
        }
      }
    }

    /**
     * mobile scroll to item
     * @param  {String} path
     */

  }, {
    key: "moileScrollTo",
    value: function moileScrollTo(path) {
      var item = document.querySelector('.dynamic-grid-item[data-slug="' + path + '"]');

      if (item) {
        var bounds = item.getBoundingClientRect();
        var top = bounds.top - 45;

        TweenMax.to(window, 1, {
          scrollTo: {
            y: top,
            autoKill: false
          },
          ease: Quad.easeInOut
        });
      }
    }

    /**
     * Fetch data
     * @param  {String}  url
     * @param  {Boolean} isPreload
     */

  }, {
    key: "fetchData",
    value: function fetchData(url) {
      fetch(url).then(function (response) {
        return response.text();
      }).then(function (data) {
        var json = JSON.parse(data);
        _Model.model.data = json.items;
      }).catch(function (err) {
        console.log("error", err);
      });
    }

    /**
     * Key up handler
     * @param  {KeyboardEvent} event
     */

  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      if (this.enabled && event.which === this.ESC_KEY) {
        this.setViewState(false);
        event.preventDefault();
      }
    }

    /**
     * Click handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onClick",
    value: function onClick(event) {

      // close lightbox
      var close = event.target.closest("#lightbox-close");
      if (close && this.enabled !== false) {
        this.setViewState(false);
        event.preventDefault();
      }

      var overlay = event.target.closest("#lightbox-overlay");
      if (overlay && this.enabled !== false) {
        this.setViewState(false);
        event.preventDefault();
      }

      // arrows
      var slideshowButton = event.target.closest(".lightbox-button");
      if (slideshowButton) {
        this.triggerSlideChange(slideshowButton);
        event.preventDefault();
      }

      // open lightbox
      var trigger = event.target.closest("[data-lightbox]");

      if (trigger && this.screen.type === "desktop" && this.enabled !== true) {

        this.setViewState(true, trigger.id);
        event.preventDefault();
      }
    }

    /**
     * Trigger slide change
     * @param  {DOMElement} button
     */

  }, {
    key: "triggerSlideChange",
    value: function triggerSlideChange(button) {
      var media = button.closest(".media");
      var leftButton = media.querySelector("[data-direction='prev']");
      var flick = media.querySelector(".flick");

      if (button.dataset.direction === "prev") {
        this.flkty.previous();
      } else if (button.dataset.direction === "next") {
        this.flkty.next();

        // turn on left arrow
        // if(leftButton.classList.contains("autoAlpha0")) {
        //   leftButton.classList.remove("autoAlpha0");
        // }
      }
    }

    /**
     * Set state
     * @param {Boolean} state
     */

  }, {
    key: "setViewState",
    value: function setViewState(state, id) {
      var animate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var updateUrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (state) {
        this.turnOn(id, animate, updateUrl);
      } else {
        if (this.lightbox) {
          this.turnOff(updateUrl);
        }
      }

      this.enabled = state;
    }

    /**
     * Turn on lightbox
     * @return {[type]} [description]
     */

  }, {
    key: "turnOn",
    value: function turnOn(id, animate) {
      var updateUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (this.lightboxOn || this.screen.type === "mobile") return;

      this.lightboxOn = true;

      this.lightbox.classList.remove("hide");
      this.build(id, animate, updateUrl);

      _Utils2.default.dispatch('FRY_REGLET:LIGHTBOX:ON');
    }

    /**
     * Turn off lightbox
     */

  }, {
    key: "turnOff",
    value: function turnOff(updateUrl) {
      if (!this.lightboxOn) return;

      this.lightboxOn = false;

      this.releaseScroll();

      TweenMax.to(this.lightbox, 0.3, {
        autoAlpha: 0,
        ease: Linear.easeNone,
        onComplete: function onComplete() {
          _Utils2.default.dispatch('FRY_REGLET:LIGHTBOX:OFF');
          // this.setInfoState(false, 0);
        }
      });

      var path = window.location.pathname.replace(_Model.model.folder, "").split("/");
      path = path.filter(function (item) {
        return item !== "";
      });

      updateUrl = this.isSearchPage ? false : updateUrl;
      if (updateUrl) {

        if (!this.lastSearch) this.lastSearch = "";
        window.history.pushState("", "", _Model.model.baseurl + _Model.model.folder + path[0] + this.lastSearch);
      }
    }

    /**
     * release scroll
     */

  }, {
    key: "releaseScroll",
    value: function releaseScroll() {
      TweenMax.set(this.ajaxContent, {
        clearProps: "all",
        y: 0
      });

      TweenMax.set(window, {
        scrollTo: { y: this.lastPinnedPosition, autoKill: false }
      });
      this.lastPinnedPosition = 0;
    }

    /**
     * build
     */

  }, {
    key: "build",
    value: function build(id, animate) {
      var _this3 = this;

      var updateUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      this.destroySlideshow();

      var data = this.getDataById(id);
      var dataItems = document.querySelectorAll(".lightbox-data-item");
      var shares = document.querySelectorAll(".external-share, .external-mail");

      this.slideshow.innerHTML = "";

      // media

      var images = _Utils2.default.isRetina() ? data.media2x : data.media;
      images.forEach(function (image) {
        var newImage = _this3.imageTemplate.cloneNode(true);
        newImage.removeAttribute("id");
        var newImageImg = newImage.querySelector('img');

        // newImage.style.backgroundImage = "url('" + model.baseurl + model.folder + image + "')";
        newImageImg.src = _Model.model.baseurl + _Model.model.folder + image;

        _this3.slideshow.appendChild(newImage);
      });

      // update share items
      shares.forEach(function (shareItem, index) {
        var shareText = _this3.baseShares[index];
        if (shareText) {
          shareText = shareText.replace("{url}", data.url);
          shareText = shareText.replace("{name}", data.name);
          shareText = shareText.replace("{media}", _Model.model.baseurl + _Model.model.folder + data["share-image"]);

          shareItem.href = shareText;
        }
      });

      // set content
      dataItems[0].innerHTML = data.name;

      var architects = data.architects && data.architects.length;
      var architectsContainer = this.lightbox.querySelector("#lightbox-architect");

      if (architects) {
        architects = data.architects.join(", ");
        dataItems[1].innerHTML = architects;
        architectsContainer.classList.remove("hide");
      } else {
        architectsContainer.classList.add("hide");
        dataItems[1].innerHTML = "";
      }

      var description = data.description;
      var descriptionContainer = this.lightbox.querySelector("#lightbox-description");
      if (description) {
        dataItems[2].innerHTML = description;
        descriptionContainer.classList.remove("hide");
      } else {
        descriptionContainer.classList.add("hide");
        dataItems[2].innerHTML = "";
      }

      this.lastSearch = window.location.search;

      // this.leftButton.classList.add("autoAlpha0");

      updateUrl = this.isSearchPage ? false : updateUrl;
      if (updateUrl) {
        var path = window.location.pathname.replace(_Model.model.folder, "").split("/");
        path = path.filter(function (item) {
          return item !== "";
        });
        var url = _Model.model.baseurl + _Model.model.folder + path[0] + "/" + data.slug;
        window.history.pushState("", "", url);
      }

      this.animateIn(animate);
    }

    /**
     * Animate in
     * @param  {Boolean} animate
     */

  }, {
    key: "animateIn",
    value: function animateIn(animate) {
      var _this4 = this;

      var speed = animate ? 0.4 : 0.01;

      TweenMax.to(this.lightbox, speed, {
        autoAlpha: 1,
        ease: Linear.easeNone,
        onComplete: function onComplete() {
          _this4.lockScroll();
          _this4.createSlideshow();
        }
      });
    }

    /**
     * lock scroll
     */

  }, {
    key: "lockScroll",
    value: function lockScroll() {
      this.scroll = window.scrollY || window.pageYOffset;

      this.lastPinnedPosition = this.scroll;
      TweenMax.set(this.ajaxContent, {
        position: "fixed",
        zIndex: 0,
        y: -this.lastPinnedPosition
      });
    }

    /**
     * Get data by id
     * @param  {String} id
     */

  }, {
    key: "getDataById",
    value: function getDataById(id) {
      var array = _Utils2.default.getArrayFromNodeList(_Model.model.data);
      return array.find(function (item) {
        return item.id === id;
      });
    }

    /**
     * set state
     */
    // setInfoState(state, speed = 0.5) {
    //   let xPos = state ? "0%" : "100%";

    //   TweenMax.killTweensOf(this.info);
    //   TweenMax.to(this.info, speed, { x: xPos, ease: Power2.easeInOut });

    //   const openDisplay = state ? "" : "block";
    //   const openAlpha = state ? 0 : 1;
    //   const openXPos = state ? "25%" : "0%";

    //   const closeDisplay = state ? "block" : "none";
    //   const closeAlpha = state ? 1 : 0;
    //   const closeXPos = state ? "0%" : "-25%";

    //   TweenMax.to(this.open, speed, {
    //     autoAlpha: openAlpha,
    //     display: openDisplay,
    //     x: openXPos,
    //     ease: Quad.easeInOut
    //   });

    //   TweenMax.to(this.close, speed, {
    //     autoAlpha: closeAlpha,
    //     display: closeDisplay,
    //     x: closeXPos,
    //     ease: Quad.easeInOut
    //   });

    //   if(state) {
    //     TweenMax.staggerFromTo(this.infoItems, 0.35,
    //       { autoAlpha: 0, y: 10 },
    //       { autoAlpha: 1, y: 0, ease: Power2.easeOut, delay: 0.5 }
    //     , 0.05);
    //   }
    // }

    /**
     * createSlideshow
     */

  }, {
    key: "createSlideshow",
    value: function createSlideshow() {
      var _this5 = this;

      if (!this.slideshow) return;

      this.flkty = new Flickity(this.slideshow, {
        lazyLoad: true,
        cellAlign: "left",
        wrapAround: true,
        pageDots: false
      });

      this.flkty.on("change", function (event) {
        return _this5.onChange(event);
      });

      if (this.flkty.slides.length > 1) {
        TweenMax.set(this.leftButton, { display: "block" });
        TweenMax.set(this.rightButton, { display: "block" });
      } else {
        TweenMax.set(this.leftButton, { display: "none" });
        TweenMax.set(this.rightButton, { display: "none" });
      }
    }

    /**
     * Destroy slidshow
     */

  }, {
    key: "destroySlideshow",
    value: function destroySlideshow() {
      if (this.flkty) {
        this.flkty.destroy();
      }
    }

    /**
     * Change lightbox slideshow
     * @param  {Event} event
     */

  }, {
    key: "onChange",
    value: function onChange(event) {
      this.leftButton.classList.remove("autoAlpha0");
    }

    /**
     * resize
     */

  }, {
    key: "resize",
    value: function resize() {
      if (!this.lightbox) return;

      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      this.screen = { width: width, height: height, type: type };
    }
  }]);

  return LightBox;
}();

exports.default = LightBox;

},{"../common/Model":4,"../common/Utils":7}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marquee = function () {
  function Marquee() {
    _classCallCheck(this, Marquee);

    this.inner = document.querySelector(".marquee-inner");
    this.setScreenHeight();

    this.resizeHandler();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(Marquee, [{
    key: "events",
    value: function events() {
      var _this = this;

      // page changed
      document.addEventListener("FRY_REGLET:AFTER_PAGE_CHANGE", function (event) {
        return _this.afterPageChange(event);
      });

      // before page change
      document.addEventListener("FRY_REGLET:BEFORE_PAGE_CHANGE", function (event) {
        return _this.beforePageChange(event);
      });

      // page complete
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.onPageComplete(event);
      });

      // after page added
      document.addEventListener("FRY_REGLET:AFTER_PAGE_ADDED", function (event) {
        return _this.afterPageAdded(event);
      });

      document.addEventListener("orientationchange", function (event) {
        return _this.setScreenHeight(event);
      });

      // ticker
      TweenMax.ticker.addEventListener("tick", function (event) {
        return _this.onTick();
      });

      // resize
      var fn = _Utils2.default.debounce(this.resizeHandler.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // scroll
      var scrollFn = _Utils2.default.debounce(this.onScroll.bind(this), 10);
      document.addEventListener("scroll", scrollFn, _Utils2.default.getPassive);

      // intersection observer
      this.observer = new IntersectionObserver(function (entries, observer) {
        return _this.check(entries, observer);
      }, {
        rootMargin: "0px 0px -200px 0px",
        threshold: 0
      });
    }

    /**
     * set screen height
     */

  }, {
    key: "setScreenHeight",
    value: function setScreenHeight() {
      if (this.inner) {
        TweenMax.set(this.inner, {
          height: window.innerHeight
        });
      }
    }

    /**
     * check lazy load
     * @param  {DOMCollection}   entries
     * @param  {IntersectionObserver}   observer
     */

  }, {
    key: "check",
    value: function check(entries, observer) {
      var _this2 = this;

      entries.forEach(function (entry) {
        var isVideo = entry.target.tagName.toLowerCase() === "video";
        if (entry.intersectionRatio > 0) {
          if (isVideo) {
            _this2.startVideo();
          }
        } else {
          if (isVideo) {
            _this2.stopVideo();
          }
        }
      });
    }

    /**
     * start video
     */

  }, {
    key: "startVideo",
    value: function startVideo() {
      if (this.video && !this.videoPlaying) {
        this.video.play();
        this.videoPlaying = true;
      }
    }

    /**
     * stop video
     */

  }, {
    key: "stopVideo",
    value: function stopVideo() {
      if (this.video && this.videoPlaying) {
        this.video.pause();
        this.videoPlaying = false;
      }
    }

    /**
     * on scroll
     */

  }, {
    key: "onScroll",
    value: function onScroll() {
      this.nextScroll = window.scrollY || window.pageYOffset;
      if (this.nextScroll < 0) this.nextScroll = 0;
    }

    /**
     * after page added
     * @param  {CustomEvent} event
     */

  }, {
    key: "afterPageAdded",
    value: function afterPageAdded(event) {
      var area = event.detail.area;

      this.view = area.querySelector(".marquee");

      if (!this.view) return;

      this.inner = this.view.querySelector(".marquee-inner");

      this.resize();
      this.onTick();
    }

    /**
     * after page change
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange(event) {}

    /**
     * on page complete
     */

  }, {
    key: "onPageComplete",
    value: function onPageComplete() {
      var _this3 = this;

      this.view = document.querySelector(".marquee");

      if (!this.view) return;

      this.inner = document.querySelector(".marquee-inner");
      this.title = document.querySelector(".marquee-title");

      this.resize();
      this.onTick();

      this.animateTitle = true;

      this.button = this.view.querySelector(".start-button");
      this.button.classList.remove("autoAlpha0");
      this.button.classList.add("animate");

      // start button
      this.button.addEventListener("click", function (event) {
        return _this3.onbutton(event);
      });

      this.video = this.view.querySelector("video");
      this.poster = this.view.querySelector(".poster");

      if (this.video) {
        this.video.classList.remove("hide");
        this.startVideo();

        TweenMax.to(this.poster, 0.5, {
          autoAlpha: 0,
          ease: Linear.easeNone,
          display: "none",
          onComplete: function onComplete() {
            _this3.observer.observe(_this3.video);
          }
        });
      }
    }

    /**
     * before page change
     */

  }, {
    key: "beforePageChange",
    value: function beforePageChange() {
      this.animateTitle = false;

      if (this.video) {
        this.observer.unobserve(this.video);
      }
    }

    /**
     * Ticker
     */

  }, {
    key: "onTick",
    value: function onTick() {
      if (!this.view) return;

      // scrolling
      if (this.scroll === this.nextScroll) return;

      this.checkbutton();

      this.moveTitle();

      this.scroll = this.nextScroll;
    }

    /**
     * resize handler
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      this.screen = { width: width, height: height, type: type };

      // screen size change
      if (this.lastType !== type) {
        this.resize();

        this.lastType = type;
      }
    }

    /**
     * move title
     */

  }, {
    key: "moveTitle",
    value: function moveTitle() {
      if (!this.title || !this.animateTitle || this.scroll > this.screen.height || this.offscreen) return;

      var yPos = -this.scroll * 0.1;
      TweenMax.to(this.title, 0.5, {
        y: yPos,
        overwrite: "allOnStart",
        ease: Quad.easeOut
      });
    }

    /**
     * check start button
     */

  }, {
    key: "checkbutton",
    value: function checkbutton() {
      if (this.scroll > 100 && this.buttonEnaled) {

        this.buttonEnaled = false;
        this.disable();
      } else if (this.scroll <= 100 && !this.buttonEnaled) {

        this.buttonEnaled = true;
        this.enable();
      }
    }

    /**
     * resize
     * @param  {String} type
     */

  }, {
    key: "resize",
    value: function resize() {
      // if(this.disabled) return;

      // if(!model.mobile || (model.mobile)) {
      if (!_Utils2.default.isTouchDevice() && this.inner) {
        TweenMax.set(this.inner, {
          height: this.screen.height
        });
      }

      // }
    }

    /**
     * disable start button
     */

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.button.classList.add("trans-all-medium-linear", "autoAlpha0");

      TweenMax.delayedCall(0.4, function () {
        _this4.button.classList.remove("animate");
      });
    }

    /**
     * enable
     */

  }, {
    key: "enable",
    value: function enable() {
      this.button.classList.remove("autoAlpha0");
      this.button.classList.add("animate");
    }

    /**
     * start button handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onbutton",
    value: function onbutton(event) {
      var section = document.querySelectorAll("section")[1];
      var top = section.getBoundingClientRect().top;

      this.disable();

      TweenMax.to(window, 1, { scrollTo: {
          y: top,
          autoKill: false
        },
        ease: Power2.easeInOut
      });
    }
  }]);

  return Marquee;
}();

exports.default = Marquee;

},{"../common/Model":4,"../common/Utils":7}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MediaPlayer = function () {
  function MediaPlayer() {
    _classCallCheck(this, MediaPlayer);

    this.events();
  }

  /**
   * Setup events
   */


  _createClass(MediaPlayer, [{
    key: "events",
    value: function events() {
      var _this = this;

      // page changed
      document.addEventListener("FRY_REGLET:AFTER_PAGE_CHANGE", function (event) {
        return _this.afterPageChange(event);
      });

      // navigating
      document.addEventListener("FRY_REGLET:NAVIGATING", function (event) {
        return _this.navigating(event);
      });

      // unlock pages
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.pageComplete(event);
      });

      // nav open
      document.addEventListener("FRY_REGLET:NAV:OPEN", function (event) {
        return _this.onNavOpen(event);
      });

      // nav closed
      document.addEventListener("FRY_REGLET:NAV:CLOSE", function (event) {
        return _this.onNavClose(event);
      });

      // intersection observer
      this.observer = new IntersectionObserver(function (entries, observer) {
        return _this.check(entries, observer);
      }, { rootMargin: "300px" });
    }

    /**
     * check lazy load
     * @param  {DOMCollection}   entries
     * @param  {IntersectionObserver}   observer
     */

  }, {
    key: "check",
    value: function check(entries, observer) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          _this2.playVideo();
          entry.target.classList.remove('opacity-0', 'visibility-hidden');
        } else {
          _this2.pauseVideo();
          entry.target.classList.add('opacity-0', 'visibility-hidden');
        }
      });
    }

    /**
     * on nav closed
     */

  }, {
    key: "onNavClose",
    value: function onNavClose() {
      if (!this.view) return;

      this.navOpen = false;
    }

    /**
     * on nav open
     */

  }, {
    key: "onNavOpen",
    value: function onNavOpen() {
      if (!this.view) return;

      this.navOpen = true;
      this.pauseVideo();
    }

    /**
     * after page change
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange() {}
    // this.view = document.querySelector("#media-player");

    // if(!this.view) return;

    // this.start = this.view.querySelector(".start-button");
    // this.video = this.view.querySelector("video");
    // this.poster = this.view.querySelector(".poster");
    // this.container = this.view.querySelector(".video-container");

    // this.observer.observe(this.view);


    /**
     * navigating
     * @param  {CustomEvent} event
     */

  }, {
    key: "navigating",
    value: function navigating(event) {
      this.active = false;
      this.pauseVideo(true);

      if (this.video && this.posterAlt) {
        TweenMax.to(this.posterAlt, 0.15, {
          autoAlpha: 1, ease: Linear.easeNone
        });
      }
    }

    /**
     * unlock pages
     */

  }, {
    key: "pageComplete",
    value: function pageComplete(event) {
      this.view = document.querySelector("#media-player");

      if (!this.view) return;

      this.start = this.view.querySelector(".start-button");
      this.video = this.view.querySelector("video");
      this.poster = this.view.querySelector(".poster");
      this.posterAlt = this.view.querySelector(".poster-alt");
      this.container = this.view.querySelector(".video-container");

      this.observer.observe(this.view);

      var marquee = document.querySelector(".marquee");
      this.active = marquee;
    }

    /**
     * play video
     */

  }, {
    key: "playVideo",
    value: function playVideo() {
      if (this.video && !this.videoIsPlaying) {
        this.video.play();
        this.videoIsPlaying = true;
        this.poster.classList.add("hide");
        this.video.classList.remove("hide");
        this.container.classList.remove("hide");
      }
    }

    /**
     * pause video
     */

  }, {
    key: "pauseVideo",
    value: function pauseVideo(enablePoster) {
      var _this3 = this;

      if (this.video) {
        this.video.pause();
        this.videoIsPlaying = false;

        if (enablePoster) {
          TweenMax.set(this.poster, { autoAlpha: 0 });
          this.poster.classList.remove("hide");

          TweenMax.to(this.poster, 0.15, {
            autoAlpha: 1,
            ease: Linear.easeNone,
            onComplete: function onComplete() {
              _this3.video.classList.add("hide");
            }
          });
        }
      }
      // } else {
      // this.poster.classList.remove("hide");

      // TweenMax.to(this.poster, 0.15, {
      //   autoAlpha: 1,
      //   ease: Linear.easeNone,
      //   onComplete: () => {
      //     this.video.classList.add("hide");
      //   }
      // });
      // this.video.classList.add("hide");
      // }
    }
  }]);

  return MediaPlayer;
}();

exports.default = MediaPlayer;

},{"../common/Model":4,"../common/Utils":7}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModelViewer = function () {
  function ModelViewer(container) {
    _classCallCheck(this, ModelViewer);

    this.modelContainer = container;
    this.resizeHandler();
    this.init();
    this.events();

    this.enabled = true;
  }

  /**
   * Events
   */


  _createClass(ModelViewer, [{
    key: "events",
    value: function events() {
      var _this = this;

      // ticker
      TweenMax.ticker.addEventListener("tick", function (event) {
        return _this.onTick();
      });

      if (!_Model.model.iOS) {
        // mousedown
        document.addEventListener("mousedown", function (event) {
          return _this.onMouseDown(event);
        });

        // mouseup
        document.addEventListener("mouseup", function (event) {
          return _this.onMouseUp(event);
        });
      }

      // resize
      var fn = _Utils2.default.debounce(this.resizeHandler.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);
    }

    /**
     * on mouse up
     * @param  {MouseEvent} event
     */

  }, {
    key: "onMouseUp",
    value: function onMouseUp(event) {
      if (!this.modelContainer || !this.grabbing || this.screen.type === "s" || _Model.model.iOS) return;

      this.modelContainer.classList.remove("cursor-grabbing");
      this.grabbing = false;
    }

    /**
     * on mouse down
     * @param  {MouseEvent} event
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      if (!this.modelContainer || this.screen.type === "s" || _Model.model.iOS) return;

      var cell = event.target.closest(".gallery-cell");
      if (cell) {
        // this.modelContainer.classList.remove("pe-none");
      }

      var modelContainer = event.target.closest(".model-container");
      if (modelContainer) {
        this.modelContainer.classList.add("cursor-grabbing");
        this.grabbing = true;
      }
    }

    /**
     * Destory view
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.container) {
        this.enabled = false;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        this.manager = null;
        this.loader = null;
        this.wireframe = null;
        this.meshGeo = null;
        this.mouseX = 0;
        this.mouseY = 0;

        this.container.remove();
        this.container = null;
      }
    }

    /**
     * disable
     */

  }, {
    key: "disable",
    value: function disable() {
      this.enabled = false;
    }

    /**
     * Init
     */

  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.onTick();
      this.setCanvasSize();

      this.container = document.createElement('div');
      this.container.classList.add("autoAlpha0");

      this.modelContainer.appendChild(this.container);

      this.camera = new THREE.PerspectiveCamera(60, this.canvasSizeWidth / this.canvasSizeHeight, 1, 1000);

      this.camera.position.set(100, 60, 50);

      this.camera.updateProjectionMatrix();

      this.renderer = new THREE.WebGLRenderer({
        antialias: true
      });

      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(this.canvasSizeWidth, this.canvasSizeHeight);

      this.effect = new THREE.OutlineEffect(this.renderer, {
        defaultThickness: 0.0025,
        defaultColor: [0, 0, 0x0057B8]
      });

      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);

      this.setCameraZoom();

      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.25;
      this.controls.screenSpacePanning = false;
      this.controls.autoRotate = true;
      this.controls.autoRotateSpeed = 0.5;
      this.controls.minDistance = 125;
      this.controls.maxDistance = 125;

      // scene
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xf2f6fb);

      this.container.appendChild(this.renderer.domElement);

      this.manager = new THREE.LoadingManager(function () {
        return _this2.loadModel();
      });

      var shader = this.getShader();
      var uniforms = THREE.UniformsUtils.clone(shader.uniforms);
      var outline_material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: shader.vertex_shader,
        fragmentShader: shader.fragment_shader
      });

      this.loader = new THREE.OBJLoader(this.manager);

      var object = document.querySelector("[data-model]");
      var path = _Model.model.baseurl + _Model.model.folder + object.dataset.model;

      this.loader.load(path, function (object) {
        _this2.modelLoaded(object, true);
      }, function (xhr) {
        _this2.onProgress(xhr);
      }, function () {
        return _this2.onError();
      });
    }

    /**
     * Resize
     */
    // onResize() {
    //   this.camera.aspect = this.canvasSizeWidth / this.canvasSizeHeight;
    //   this.camera.updateProjectionMatrix();

    //   this.renderer.setSize(
    //     this.canvasSizeWidth, this.canvasSizeHeight
    //   );
    // }

    /**
     * Render
     */

  }, {
    key: "render",
    value: function render() {
      this.camera.lookAt(this.scene.position);
      this.renderer.render(this.scene, this.camera);
    }

    /**
     * on model progress
     * @param  {XMLHttpRequest} xhr
     */

  }, {
    key: "onProgress",
    value: function onProgress(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        // console.log('model ' + Math.round( percentComplete, 2 ) + '% downloaded');
      }
    }

    /**
     * model loaded
     * @param  {Object} object
     */

  }, {
    key: "modelLoaded",
    value: function modelLoaded(obj, animate) {
      var _this3 = this;

      obj.traverse(function (child) {

        _this3.obj = obj;

        var wireframe_material = new THREE.MeshBasicMaterial({ color: 0xf2f6fb });
        if (child instanceof THREE.Mesh) {
          child.material = wireframe_material;
        }

        if (_this3.wireframe) {
          _this3.scene.remove(_this3.wireframe);
          _this3.scene.remove(_this3.meshGeo);
        }

        _this3.meshGeo = obj.children[0];
        _this3.meshGeo.material = wireframe_material;
        _this3.meshGeo.geometry = new THREE.Geometry().fromBufferGeometry(_this3.meshGeo.geometry);

        _this3.meshGeo.geometry.mergeVertices();
        _this3.meshGeo.geometry.computeVertexNormals();
        _this3.meshGeo.geometry = new THREE.BufferGeometry().fromGeometry(_this3.meshGeo.geometry);

        var geo = new THREE.EdgesGeometry(_this3.meshGeo.geometry);
        var mat = new THREE.LineBasicMaterial({ color: 0x0057B8 });
        _this3.wireframe = new THREE.LineSegments(geo, mat);

        var geometry = _this3.meshGeo.geometry;

        _this3.meshGeo.position.x = 0;
        _this3.meshGeo.position.y = 0;
        _this3.meshGeo.position.z = 0;
        _this3.meshGeo.scale.set(500, 500, 500);

        _this3.obj.position.x = 0;
        _this3.obj.position.y = 0;
        _this3.obj.position.z = 0;
        _this3.obj.scale.set(500, 500, 500);

        _this3.wireframe.position.x = 0;
        _this3.wireframe.position.y = 0;
        _this3.wireframe.position.z = 0;
        _this3.wireframe.scale.set(500.0001, 500.0001, 500.0001);

        _this3.scene.add(_this3.wireframe);
        _this3.scene.add(_this3.meshGeo);
      });

      if (animate) {
        TweenMax.fromTo(this.container, 0.5, { y: 20 }, {
          y: 0,
          autoAlpha: 1,
          ease: Quad.easeOut,
          delay: 0.1
        });
      }
    }

    /**
     * Tick handler
     */

  }, {
    key: "onTick",
    value: function onTick() {
      if (!this.modelContainer || !this.enabled) return;

      if (this.controls) {

        if (this.meshGeo) {
          this.meshGeo.position.y = -10;
          this.obj.position.y = -10;
          this.wireframe.position.y = -10;
        }

        this.camera.aspect = this.canvasSizeWidth / this.canvasSizeHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.canvasSizeWidth, this.canvasSizeHeight);

        this.controls.update();
        this.render();
      }
    }

    /**
     * resize handler
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      var width = window.innerWidth;
      var height = window.innerHeight;

      var type = void 0;
      if (width <= 320) {
        type = "xs";
      } else if (width < 768) {
        type = "s";
      } else if (width < 1024) {
        type = "m";
      } else {
        type = "l";
      }

      if (!this.screen || this.screen.width !== width || this.screen.height !== height) {
        this.screen = { width: width, height: height, type: type };

        this.setCanvasSize();
        this.setCameraZoom();
      }
    }

    /**
     * set camera zoom
     */

  }, {
    key: "setCameraZoom",
    value: function setCameraZoom() {
      if (!this.camera) return;

      if (this.screen.type === "l") {
        this.camera.zoom = 1;
      } else if (this.screen.type === "m") {
        this.camera.zoom = 1.5;
      } else if (this.screen.type === "s") {
        this.camera.zoom = 1.25;
      } else if (this.screen.type === "xs") {
        this.camera.zoom = 1.75;
      }
    }

    /**
     * set canvas size
     */

  }, {
    key: "setCanvasSize",
    value: function setCanvasSize() {
      if (this.screen.type === "l") {
        this.canvasSizeWidth = window.innerWidth * 0.5;
        this.canvasSizeHeight = window.innerHeight;
      } else if (this.screen.type === "m") {
        this.canvasSizeWidth = window.innerWidth;
        this.canvasSizeHeight = 500;
      } else if (this.screen.type === "s") {
        this.canvasSizeWidth = window.innerWidth;
        this.canvasSizeHeight = 400;
      } else if (this.screen.type === "xs") {
        this.canvasSizeWidth = window.innerWidth;
        this.canvasSizeHeight = 250;
      }
    }

    /**
     * outline shader
     */

  }, {
    key: "getShader",
    value: function getShader() {
      return {
        uniforms: {
          "linewidth": { type: "f", value: 0.3 }
        },
        vertex_shader: ["uniform float linewidth;", "void main() {", "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "vec4 displacement = vec4( normalize( normalMatrix * normal ) * linewidth, 0.0 ) + mvPosition;", "gl_Position = projectionMatrix * displacement;", "}"].join("\n"),
        fragment_shader: ["void main() {", "gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 );", "}"].join("\n")
      };
    }

    /**
     * Load model handler
     */

  }, {
    key: "loadModel",
    value: function loadModel() {}

    /**
     * Error model handler
     */

  }, {
    key: "onError",
    value: function onError() {}
  }]);

  return ModelViewer;
}();

exports.default = ModelViewer;

},{"../common/Model":4,"../common/Utils":7}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

var _ModelViewer = require("./ModelViewer");

var _ModelViewer2 = _interopRequireDefault(_ModelViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModelViewerController = function () {
  function ModelViewerController() {
    _classCallCheck(this, ModelViewerController);

    this.events();
  }

  /**
   * Events
   */


  _createClass(ModelViewerController, [{
    key: "events",
    value: function events() {
      var _this = this;

      // navigating
      document.addEventListener("FRY_REGLET:NAVIGATING", function (event) {
        return _this.onNavigating(event);
      });

      // page complete
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.pageComplete(event);
      });
    }

    /**
     * navigating
     */

  }, {
    key: "onNavigating",
    value: function onNavigating() {
      if (this.modelViewers) {
        for (var i = 0; i < this.modelViewers.length; i++) {
          this.modelViewers[i].disable();
        }
      }
    }

    /**
     * After page change
     */

  }, {
    key: "pageComplete",
    value: function pageComplete() {
      var _this2 = this;

      this.destroy();

      this.startButton = document.querySelector(".start-button");
      if (this.startButton) {
        this.onStartButtonHandler = function (event) {
          return _this2.onStartButton(event);
        };
        this.startButton.addEventListener("click", this.onStartButtonHandler);
      }

      this.init();
    }

    /**
     * Destory view
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.modelViewers) {
        for (var i = 0; i < this.modelViewers.length; i++) {
          this.modelViewers[i].destroy();
          this.modelViewers[i] = null;
        }
      }
    }

    /**
     * Init
     */

  }, {
    key: "init",
    value: function init() {
      this.modelViewers = [];
      var viewers = document.querySelectorAll(".model-container");
      for (var i = 0; i < viewers.length; i++) {
        this.modelViewers.push(new _ModelViewer2.default(viewers[i]));
      }
    }

    /**
     * start button handler
     * @param  {MouseEvent} event
     */

  }, {
    key: "onStartButton",
    value: function onStartButton(event) {
      var section = document.querySelectorAll("section")[1];
      var top = section.getBoundingClientRect().top;

      TweenMax.to(window, 1, { scrollTo: {
          y: top,
          autoKill: false
        },
        ease: Power2.easeInOut
      });
    }
  }]);

  return ModelViewerController;
}();

exports.default = ModelViewerController;

},{"../common/Model":4,"../common/Utils":7,"./ModelViewer":21}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parallax = function () {
  function Parallax() {
    _classCallCheck(this, Parallax);

    this.resize();
    this.onTick();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(Parallax, [{
    key: "events",
    value: function events() {
      var _this = this;

      // ticker
      TweenMax.ticker.addEventListener("tick", function (event) {
        return _this.onTick();
      });

      // after page change
      document.addEventListener("FRY_REGLET:AFTER_PAGE_CHANGE", function (event) {
        return _this.afterPageChange(event);
      });

      // resize
      var fn = _Utils2.default.debounce(this.resize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // scroll
      var scrollFn = _Utils2.default.debounce(this.onScroll.bind(this), 10);
      document.addEventListener("scroll", scrollFn, _Utils2.default.getPassive);
    }

    /**
     * on scroll
     */

  }, {
    key: "onScroll",
    value: function onScroll() {
      this.nextScroll = window.scrollY || window.pageYOffset;
      if (this.nextScroll < 0) this.nextScroll = 0;
    }

    /**
     * on page complete
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange(event) {
      var area = event.detail.area || document;

      this.items = area.querySelectorAll(".parallax");

      if (!this.items) return;

      this.scroll = -1;
    }

    /**
     * Ticker
     */

  }, {
    key: "onTick",
    value: function onTick() {
      if (!this.items) return;

      if (this.scroll === this.nextScroll) return;

      this.scroll = this.nextScroll;

      this.update();
    }

    /**
     * update
     */

  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      this.items.forEach(function (item) {
        var bounds = item.getBoundingClientRect();

        if (bounds.top > -_this2.screen.height && bounds.top < _this2.quarterHeight) {
          var yPos = -Math.ceil(bounds.top * 0.05);
          TweenMax.set(item, { y: yPos });
        }
      });
    }

    /**
     * resize
     */

  }, {
    key: "resize",
    value: function resize() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      this.screen = { width: width, height: height, type: type };

      this.quarterHeight = this.screen.height * 1.25;
    }
  }]);

  return Parallax;
}();

exports.default = Parallax;

},{"../common/Model":4,"../common/Utils":7}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParallaxCallout = function () {
  function ParallaxCallout() {
    _classCallCheck(this, ParallaxCallout);

    this.resize();
    this.onTick();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(ParallaxCallout, [{
    key: "events",
    value: function events() {
      var _this = this;

      // ticker
      TweenMax.ticker.addEventListener("tick", function (event) {
        return _this.onTick();
      });

      // page navigating
      document.addEventListener("FRY_REGLET:NAVIGATING", function (event) {
        return _this.onNavigating(event);
      });

      // page complete
      document.addEventListener("FRY_REGLET:PAGE_COMPLETE", function (event) {
        return _this.onPageComplete(event);
      });

      // scroll event
      var fn = _Utils2.default.debounce(this.resize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // scroll
      var scrollFn = _Utils2.default.debounce(this.onScroll.bind(this), 10);
      document.addEventListener("scroll", scrollFn, _Utils2.default.getPassive);
    }

    /**
     * on scroll
     */

  }, {
    key: "onScroll",
    value: function onScroll() {
      this.nextScroll = window.scrollY || window.pageYOffset;
      if (this.nextScroll < 0) this.nextScroll = 0;
    }

    /**
     * navigating
     */

  }, {
    key: "onNavigating",
    value: function onNavigating() {
      this.enabled = false;
    }

    /**
     * after page change
     */

  }, {
    key: "onPageComplete",
    value: function onPageComplete() {
      var _this2 = this;

      this.container = document.querySelector(".parallax-callout");

      if (!this.container || this.screen && this.screen.type === "mobile") {
        return;
      } else {

        this.images = this.container.querySelector(".parallax-callout-images");

        if (!this.images) return;

        var image = this.images.querySelectorAll(".parallax-image");
        this.main = document.querySelector("#main");
        this.scroll = -1;
        this.imageNumber = -1;

        image = _Utils2.default.shuffle(_Utils2.default.getArrayFromNodeList(image));

        this.image = [];
        image.forEach(function (img, index) {
          if (index < 2) {
            _this2.image.push(img);
          } else {
            img.remove();
          }
        });

        this.enabled = true;
      }
    }

    /**
     * ontick
     */

  }, {
    key: "onTick",
    value: function onTick() {
      if (!this.container || !this.enabled || this.screen.type === "mobile") return;

      if (this.scroll === this.nextScroll) return;

      this.scroll = this.nextScroll;

      this.setSticky();
    }

    /**
     * resize
     */

  }, {
    key: "resize",
    value: function resize() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      this.screen = { width: width, height: height, type: type };

      if (!this.images) return;

      if (this.screen && this.screen.type === "mobile") {
        this.state = null;
        this.imageNumber = null;
        TweenMax.set(this.images, { clearProps: "all" });
        TweenMax.set(this.image[0], { autoAlpha: 1 });
        TweenMax.set(this.image[1], { autoAlpha: 0 });
      } else {
        this.setSticky();
      }
    }

    /**
     * Set sticky
     */

  }, {
    key: "setSticky",
    value: function setSticky() {
      if (!this.container) return;

      var bounds = this.container.getBoundingClientRect();
      var boundsTop = bounds.top < 0 ? bounds.top : 0;
      var boundsBottom = bounds.bottom < this.screen.height ? bounds.bottom : 0;

      this.updateImages(bounds);
    }

    /**
     * update images
     */

  }, {
    key: "updateImages",
    value: function updateImages(bounds) {
      var _this3 = this;

      var percentage = -(bounds.top / (bounds.height - this.screen.height));
      if (percentage <= 0) percentage = 0;
      if (percentage >= 1) percentage = 1;

      var imageNumber = Math.floor(percentage * this.image.length);
      imageNumber = imageNumber > this.image.length - 1 ? this.image.length - 1 : imageNumber;

      if (imageNumber === this.imageNumber) return;

      this.imageNumber = imageNumber;

      this.image.forEach(function (image, index) {
        if (_this3.screen.type === "desktop") {
          var alpha = index === imageNumber;
          TweenMax.to(image, 0.2, { autoAlpha: alpha, ease: Linear.easeNone });
        } else {
          var _alpha = index === 0;
          TweenMax.to(image, 0.2, { autoAlpha: _alpha, ease: Linear.easeNone });
        }
      });
    }
  }]);

  return ParallaxCallout;
}();

exports.default = ParallaxCallout;

},{"../common/Model":4,"../common/Utils":7}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Model


// Utils


var _Model = require("../common/Model");

var _Utils = require("../common/Utils");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sidebar = function () {
  function Sidebar() {
    _classCallCheck(this, Sidebar);

    this.onScroll();
    this.resize();
    this.events();
  }

  /**
   * Setup events
   */


  _createClass(Sidebar, [{
    key: "events",
    value: function events() {
      var _this = this;

      // ticker
      TweenMax.ticker.addEventListener("tick", function (event) {
        return _this.onTick();
      });

      // page changed
      document.addEventListener("FRY_REGLET:AFTER_PAGE_CHANGE", function (event) {
        return _this.afterPageChange(event);
      });

      // quote item answered
      document.addEventListener("FRY_REGLET:SIDEBAR:RESIZE", function (event) {
        return _this.onSidebarResize(event);
      });

      // mobile filters open
      document.addEventListener("FRY_REGLET:MOBILE_FILTERS_OPEN", function (event) {
        return _this.mobileFiltersOpen();
      });

      // mobile filters close
      document.addEventListener("FRY_REGLET:MOBILE_FILTERS_CLOSE", function (event) {
        return _this.mobileFiltersClose();
      });

      // resize
      var fn = _Utils2.default.debounce(this.resize.bind(this), 10);
      window.addEventListener("resize", fn, _Utils2.default.getPassive);

      // scroll
      var scrollFn = _Utils2.default.debounce(this.onScroll.bind(this), 10);
      document.addEventListener("scroll", scrollFn, _Utils2.default.getPassive);
    }

    /**
     * on scroll
     */

  }, {
    key: "onScroll",
    value: function onScroll() {
      this.nextScroll = window.scrollY || window.pageYOffset;
      if (this.nextScroll < 0) this.nextScroll = 0;
    }

    /**
     * mobile filters open
     */

  }, {
    key: "mobileFiltersOpen",
    value: function mobileFiltersOpen() {
      this.filtersOpen = true;
      this.enableResize = false;
      this.resetScroll(0.3);
    }

    /**
     * mobile filters close
     */

  }, {
    key: "mobileFiltersClose",
    value: function mobileFiltersClose() {
      this.filtersOpen = false;
      this.enableResize = true;
    }

    /**
     * reset scroll
     */

  }, {
    key: "resetScroll",
    value: function resetScroll() {
      var speed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.startingPos = 0;
      this.lastDirection = null;
      this.val = 0;
    }

    /**
     * sidebar resize
     */

  }, {
    key: "onSidebarResize",
    value: function onSidebarResize() {
      this.resizeSidebar();
    }

    /**
     * on page changed
     * @param  {CustomEvent} event
     */

  }, {
    key: "afterPageChange",
    value: function afterPageChange(event) {
      var area = event.detail.area || document;
      var sidebar = area.querySelector(".sidebar");

      if (!sidebar) return;

      this.val = 0;
      this.sidebar = sidebar;
      this.sidebarContent = this.sidebar.querySelector(".sidebar-content");
      this.footer = area.querySelector(".site-footer");
      this.sidebarAccordion = document.querySelector(".sidebar .accordion");
      this.footer = document.querySelector(".site-footer");

      this.enableResize = true;
    }

    /**
     * resize
     */

  }, {
    key: "resize",
    value: function resize() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var type = width < 1024 ? "mobile" : "desktop";

      if (!this.screen || this.screen.width !== width || this.screen.height !== height) {
        this.screen = { width: width, height: height, type: type };
      }
    }

    /**
     * Ticker
     */

  }, {
    key: "onTick",
    value: function onTick() {

      if (!this.sidebar) return;

      if (this.scroll === this.nextScroll || this.filtersOpen) return;

      this.resizeSidebar();

      if (this.nextScroll < this.scroll) {
        this.direction = "up";
      } else if (this.nextScroll > this.scroll) {
        this.direction = "down";
      } else {
        this.direction = "";
      }

      this.scroll = this.nextScroll;

      // set mark for scroll
      if (this.direction !== this.lastDirection) {
        if (this.direction === "down" && this.screen.type !== "mobile") {
          this.autoCollpaseDrawer();
        }
      }
    }

    /**
     * resize sidebar
     */

  }, {
    key: "resizeSidebar",
    value: function resizeSidebar() {
      if (!this.sidebarAccordion) return;

      if (this.screen.type === "mobile") {
        TweenMax.set(this.sidebarAccordion, { clearProps: "all" });
      } else {
        var bounds = this.sidebarAccordion.getBoundingClientRect();
        var footerBounds = this.footer.getBoundingClientRect();
        var footerOffset = footerBounds.top < this.screen.height + 140 ? this.screen.height + 140 - footerBounds.top : 0;

        var sidebarBounds = this.sidebarContent.getBoundingClientRect();
        var sidebarContentHeight = sidebarBounds.height;

        var height = this.screen.height - bounds.top - footerOffset;
        TweenMax.set(this.sidebarAccordion, { height: height });
      }
    }

    /**
     * auto collapse drawer
     */

  }, {
    key: "autoCollpaseDrawer",
    value: function autoCollpaseDrawer() {
      var selector = '[data-basic-accordion-drawer="filters"]';
      var drawer = document.querySelector(selector);
      if (drawer) {
        var height = drawer.style.height.replace("px", "");

        if (height > 0) {
          if (this.mobileFilterButton) {
            this.mobileFilterButton.click();
          }
        }
      }
    }
  }]);

  return Sidebar;
}();

exports.default = Sidebar;

},{"../common/Model":4,"../common/Utils":7}]},{},[2])
//# sourceMappingURL=app.js.map
