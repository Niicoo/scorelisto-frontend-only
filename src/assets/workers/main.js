/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/rxjs/_esm5/index.js":
/*!******************************************!*\
  !*** ./node_modules/rxjs/_esm5/index.js ***!
  \******************************************/
/*! exports provided: Observable, ConnectableObservable, GroupedObservable, observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, asapScheduler, asyncScheduler, queueScheduler, animationFrameScheduler, VirtualTimeScheduler, VirtualAction, Scheduler, Subscription, Subscriber, Notification, pipe, noop, identity, isObservable, ArgumentOutOfRangeError, EmptyError, ObjectUnsubscribedError, UnsubscriptionError, TimeoutError, bindCallback, bindNodeCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, fromEventPattern, generate, iif, interval, merge, never, of, onErrorResumeNext, pairs, race, range, throwError, timer, using, zip, EMPTY, NEVER, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/observable/ConnectableObservable */ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/operators/groupBy */ "./node_modules/rxjs/_esm5/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/BehaviorSubject */ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/ReplaySubject */ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./internal/AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/scheduler/asap */ "./node_modules/rxjs/_esm5/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./internal/scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./internal/scheduler/queue */ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./internal/scheduler/animationFrame */ "./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./internal/scheduler/VirtualTimeScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./internal/Scheduler */ "./node_modules/rxjs/_esm5/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./internal/Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./internal/Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./internal/Notification */ "./node_modules/rxjs/_esm5/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./internal/util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./internal/util/noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./internal/util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./internal/util/isObservable */ "./node_modules/rxjs/_esm5/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./internal/util/ArgumentOutOfRangeError */ "./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./internal/util/EmptyError */ "./node_modules/rxjs/_esm5/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./internal/util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./internal/util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./internal/util/TimeoutError */ "./node_modules/rxjs/_esm5/internal/util/TimeoutError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./internal/observable/bindCallback */ "./node_modules/rxjs/_esm5/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./internal/observable/bindNodeCallback */ "./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./internal/observable/combineLatest */ "./node_modules/rxjs/_esm5/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./internal/observable/concat */ "./node_modules/rxjs/_esm5/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./internal/observable/defer */ "./node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./internal/observable/empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./internal/observable/forkJoin */ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./internal/observable/from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./internal/observable/fromEvent */ "./node_modules/rxjs/_esm5/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./internal/observable/fromEventPattern */ "./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./internal/observable/generate */ "./node_modules/rxjs/_esm5/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./internal/observable/iif */ "./node_modules/rxjs/_esm5/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./internal/observable/interval */ "./node_modules/rxjs/_esm5/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./internal/observable/merge */ "./node_modules/rxjs/_esm5/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./internal/observable/never */ "./node_modules/rxjs/_esm5/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./internal/observable/of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./internal/observable/onErrorResumeNext */ "./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./internal/observable/pairs */ "./node_modules/rxjs/_esm5/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./internal/observable/race */ "./node_modules/rxjs/_esm5/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_44__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./internal/observable/range */ "./node_modules/rxjs/_esm5/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_45__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./internal/observable/throwError */ "./node_modules/rxjs/_esm5/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_46__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./internal/observable/timer */ "./node_modules/rxjs/_esm5/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_47__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./internal/observable/using */ "./node_modules/rxjs/_esm5/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_48__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./internal/observable/zip */ "./node_modules/rxjs/_esm5/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_49__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"]; });

/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./internal/config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_50__["config"]; });

/** PURE_IMPORTS_START  PURE_IMPORTS_END */





















































//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/AsyncSubject.js ***!
  \**********************************************************/
/*! exports provided: AsyncSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */



var AsyncSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=AsyncSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/BehaviorSubject.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/BehaviorSubject.js ***!
  \*************************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */



var BehaviorSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function () {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function (subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function () {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__["ObjectUnsubscribedError"]();
        }
        else {
            return this._value;
        }
    };
    BehaviorSubject.prototype.next = function (value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

//# sourceMappingURL=BehaviorSubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/InnerSubscriber.js ***!
  \*************************************************************/
/*! exports provided: InnerSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var InnerSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=InnerSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Notification.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Notification.js ***!
  \**********************************************************/
/*! exports provided: Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/throwError */ "./node_modules/rxjs/_esm5/internal/observable/throwError.js");
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */



var Notification = /*@__PURE__*/ (function () {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function (observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function (next, error, complete) {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function (nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    };
    Notification.prototype.toObservable = function () {
        var kind = this.kind;
        switch (kind) {
            case 'N':
                return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);
            case 'E':
                return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);
            case 'C':
                return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function (value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function (err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function () {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}());

//# sourceMappingURL=Notification.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observable.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observable.js ***!
  \********************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js");
/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */





var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink.add(this.source || (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[_internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Observer.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Observer.js ***!
  \******************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/OuterSubscriber.js ***!
  \*************************************************************/
/*! exports provided: OuterSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


var OuterSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

//# sourceMappingURL=OuterSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/ReplaySubject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/ReplaySubject.js ***!
  \***********************************************************/
/*! exports provided: ReplaySubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheduler/queue */ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */







var ReplaySubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        }
        else {
            _this.next = _this.nextTimeWindow;
        }
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
        var _events = this._events;
        _events.push(value);
        if (_events.length > this._bufferSize) {
            _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function (value) {
        this._events.push(new ReplayEvent(this._getNow(), value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__["ObjectUnsubscribedError"]();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__["SubjectSubscription"](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__["ObserveOnSubscriber"](subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__["queue"]).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]));

var ReplayEvent = /*@__PURE__*/ (function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Scheduler.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Scheduler.js ***!
  \*******************************************************/
/*! exports provided: Scheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
var Scheduler = /*@__PURE__*/ (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = Scheduler.now;
        }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subject.js ***!
  \*****************************************************/
/*! exports provided: SubjectSubscriber, Subject, AnonymousSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */







var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]));

var Subject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__["rxSubscriber"]] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/SubjectSubscription.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/SubjectSubscription.js ***!
  \*****************************************************************/
/*! exports provided: SubjectSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=SubjectSubscription.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscriber.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscriber.js ***!
  \********************************************************/
/*! exports provided: Subscriber, SafeSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */







var Subscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        _this._parentSubscription = null;
        switch (arguments.length) {
            case 0:
                _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__["rxSubscriber"]] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        this._parentSubscription = null;
        return this;
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]));

var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
                context = Object.create(observerOrNext);
                if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

//# sourceMappingURL=Subscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/Subscription.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/Subscription.js ***!
  \**********************************************************/
/*! exports provided: Subscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _util_tryCatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/tryCatch */ "./node_modules/rxjs/_esm5/internal/util/tryCatch.js");
/* harmony import */ var _util_errorObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorObject */ "./node_modules/rxjs/_esm5/internal/util/errorObject.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_tryCatch,_util_errorObject,_util_UnsubscriptionError PURE_IMPORTS_END */






var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
            var trial = Object(_util_tryCatch__WEBPACK_IMPORTED_MODULE_3__["tryCatch"])(_unsubscribe).call(this);
            if (trial === _util_errorObject__WEBPACK_IMPORTED_MODULE_4__["errorObject"]) {
                hasErrors = true;
                errors = errors || (_util_errorObject__WEBPACK_IMPORTED_MODULE_4__["errorObject"].e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_5__["UnsubscriptionError"] ?
                    flattenUnsubscriptionErrors(_util_errorObject__WEBPACK_IMPORTED_MODULE_4__["errorObject"].e.errors) : [_util_errorObject__WEBPACK_IMPORTED_MODULE_4__["errorObject"].e]);
            }
        }
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
                    var trial = Object(_util_tryCatch__WEBPACK_IMPORTED_MODULE_3__["tryCatch"])(sub.unsubscribe).call(sub);
                    if (trial === _util_errorObject__WEBPACK_IMPORTED_MODULE_4__["errorObject"]) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = _util_errorObject__WEBPACK_IMPORTED_MODULE_4__["errorObject"].e;
                        if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_5__["UnsubscriptionError"]) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_5__["UnsubscriptionError"](errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function') {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            this._parent = parent;
        }
        else if (!_parents) {
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());

function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_5__["UnsubscriptionError"]) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/config.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/config.js ***!
  \****************************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js ***!
  \******************************************************************************/
/*! exports provided: ConnectableObservable, connectableObservableDescriptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../operators/refCount */ "./node_modules/rxjs/_esm5/internal/operators/refCount.js");
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */






var ConnectableObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function (subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function () {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
            this._subject = this.subjectFactory();
        }
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function () {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
            connection.add(this.source
                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
            }
            else {
                this._connection = connection;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function () {
        return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_5__["refCount"])()(this);
    };
    return ConnectableObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]));

var connectableProto = ConnectableObservable.prototype;
var connectableObservableDescriptor = {
    operator: { value: null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null, writable: true },
    _connection: { value: null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
};
var ConnectableSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function (err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function () {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) {
                connection.unsubscribe();
            }
        }
    };
    return ConnectableSubscriber;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["SubjectSubscriber"]));
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));
//# sourceMappingURL=ConnectableObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/bindCallback.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/bindCallback.js ***!
  \*********************************************************************/
/*! exports provided: bindCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return bindCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                var state = {
                    args: args, subscriber: subscriber, params: params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js ***!
  \*************************************************************************/
/*! exports provided: bindNodeCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return bindNodeCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AsyncSubject */ "./node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/canReportError */ "./node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
            };
        }
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
                    var handler = function () {
                        var innerArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            innerArgs[_i] = arguments[_i];
                        }
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([handler]));
                    }
                    catch (err) {
                        if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                return scheduler.schedule(dispatch, 0, { params: params, subscriber: subscriber, context: context });
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();
        var handler = function () {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i] = arguments[_i];
            }
            var err = innerArgs.shift();
            if (err) {
                _this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([handler]));
        }
        catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=bindNodeCallback.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/combineLatest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/combineLatest.js ***!
  \**********************************************************************/
/*! exports provided: combineLatest, CombineLatestOperator, CombineLatestSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */






var NONE = {};
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = null;
    var scheduler = null;
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        resultSelector = observables.pop();
    }
    if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(observables[0])) {
        observables = observables[0];
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ (function () {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}());

var CombineLatestSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) {
                this._tryResultSelector(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=combineLatest.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/concat.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/concat.js ***!
  \***************************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./of */ "./node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/concatAll */ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js");
/** PURE_IMPORTS_START _util_isScheduler,_of,_from,_operators_concatAll PURE_IMPORTS_END */




function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1 || (observables.length === 2 && Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(observables[1]))) {
        return Object(_from__WEBPACK_IMPORTED_MODULE_2__["from"])(observables[0]);
    }
    return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_3__["concatAll"])()(_of__WEBPACK_IMPORTED_MODULE_1__["of"].apply(void 0, observables));
}
//# sourceMappingURL=concat.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/defer.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/defer.js ***!
  \**************************************************************/
/*! exports provided: defer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function defer(observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var input;
        try {
            input = observableFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
        return source.subscribe(subscriber);
    });
}
//# sourceMappingURL=defer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/empty.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/empty.js ***!
  \**************************************************************/
/*! exports provided: EMPTY, empty, emptyScheduled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyScheduled", function() { return emptyScheduled; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/forkJoin.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/forkJoin.js ***!
  \*****************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return forkJoin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START tslib,_Observable,_util_isArray,_empty,_util_subscribeToResult,_OuterSubscriber,_operators_map PURE_IMPORTS_END */







function forkJoin() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    var resultSelector;
    if (typeof sources[sources.length - 1] === 'function') {
        resultSelector = sources.pop();
    }
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(sources[0])) {
        sources = sources[0];
    }
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    if (resultSelector) {
        return forkJoin(sources).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_6__["map"])(function (args) { return resultSelector.apply(void 0, args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
        return new ForkJoinSubscriber(subscriber, sources);
    });
}
var ForkJoinSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ForkJoinSubscriber, _super);
    function ForkJoinSubscriber(destination, sources) {
        var _this = _super.call(this, destination) || this;
        _this.sources = sources;
        _this.completed = 0;
        _this.haveValues = 0;
        var len = sources.length;
        _this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            var source = sources[i];
            var innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(_this, source, null, i);
            if (innerSubscription) {
                _this.add(innerSubscription);
            }
        }
        return _this;
    }
    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        if (!innerSub._hasValue) {
            innerSub._hasValue = true;
            this.haveValues++;
        }
    };
    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
        var _a = this, destination = _a.destination, haveValues = _a.haveValues, values = _a.values;
        var len = values.length;
        if (!innerSub._hasValue) {
            destination.complete();
            return;
        }
        this.completed++;
        if (this.completed !== len) {
            return;
        }
        if (haveValues === len) {
            destination.next(values);
        }
        destination.complete();
    };
    return ForkJoinSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_5__["OuterSubscriber"]));
//# sourceMappingURL=forkJoin.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/from.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/from.js ***!
  \*************************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/_esm5/internal/util/isIterable.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _fromPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fromPromise */ "./node_modules/rxjs/_esm5/internal/observable/fromPromise.js");
/* harmony import */ var _fromIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fromIterable */ "./node_modules/rxjs/_esm5/internal/observable/fromIterable.js");
/* harmony import */ var _fromObservable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fromObservable */ "./node_modules/rxjs/_esm5/internal/observable/fromObservable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */










function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
            return input;
        }
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_9__["subscribeTo"])(input));
    }
    if (input != null) {
        if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_3__["isInteropObservable"])(input)) {
            return Object(_fromObservable__WEBPACK_IMPORTED_MODULE_8__["fromObservable"])(input, scheduler);
        }
        else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_1__["isPromise"])(input)) {
            return Object(_fromPromise__WEBPACK_IMPORTED_MODULE_6__["fromPromise"])(input, scheduler);
        }
        else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__["isArrayLike"])(input)) {
            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(input, scheduler);
        }
        else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_4__["isIterable"])(input) || typeof input === 'string') {
            return Object(_fromIterable__WEBPACK_IMPORTED_MODULE_7__["fromIterable"])(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
//# sourceMappingURL=from.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromArray.js ***!
  \******************************************************************/
/*! exports provided: fromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_2__["subscribeToArray"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromEvent.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromEvent.js ***!
  \******************************************************************/
/*! exports provided: fromEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return fromEvent; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function () { return source_1.removeEventListener(eventName, handler, options); };
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function () { return source_2.off(eventName, handler); };
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function () { return source_3.removeListener(eventName, handler); };
    }
    else if (sourceObj && sourceObj.length) {
        for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}
//# sourceMappingURL=fromEvent.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js ***!
  \*************************************************************************/
/*! exports provided: fromEventPattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return fromEventPattern; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) { return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args); }));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var handler = function () {
            var e = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                e[_i] = arguments[_i];
            }
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
            return undefined;
        }
        return function () { return removeHandler(handler, retValue); };
    });
}
//# sourceMappingURL=fromEventPattern.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromIterable.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromIterable.js ***!
  \*********************************************************************/
/*! exports provided: fromIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromIterable", function() { return fromIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToIterable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */




function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__["subscribeToIterable"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            var iterator;
            sub.add(function () {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromObservable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromObservable.js ***!
  \***********************************************************************/
/*! exports provided: fromObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromObservable", function() { return fromObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/subscribeToObservable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */




function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            sub.add(scheduler.schedule(function () {
                var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
                sub.add(observable.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/fromPromise.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/fromPromise.js ***!
  \********************************************************************/
/*! exports provided: fromPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/subscribeToPromise */ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */



function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__["subscribeToPromise"])(input));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            sub.add(scheduler.schedule(function () {
                return input.then(function (value) {
                    sub.add(scheduler.schedule(function () {
                        subscriber.next(value);
                        sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                    }));
                }, function (err) {
                    sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
                });
            }));
            return sub;
        });
    }
}
//# sourceMappingURL=fromPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/generate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/generate.js ***!
  \*****************************************************************/
/*! exports provided: generate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = options.scheduler;
    }
    else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
        scheduler = resultSelectorOrObservable;
    }
    else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var state = initialState;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                subscriber: subscriber,
                iterate: iterate,
                condition: condition,
                resultSelector: resultSelector,
                state: state
            });
        }
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return undefined;
            }
        } while (true);
        return undefined;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) {
        return undefined;
    }
    if (state.needIterate) {
        try {
            state.state = state.iterate(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
    }
    else {
        state.needIterate = true;
    }
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) {
            return undefined;
        }
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    }
    catch (err) {
        subscriber.error(err);
        return undefined;
    }
    if (subscriber.closed) {
        return undefined;
    }
    subscriber.next(value);
    if (subscriber.closed) {
        return undefined;
    }
    return this.schedule(state);
}
//# sourceMappingURL=generate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/iif.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/iif.js ***!
  \************************************************************/
/*! exports provided: iif */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return iif; });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defer */ "./node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */


function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) {
        trueResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    if (falseResult === void 0) {
        falseResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
    }
    return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () { return condition() ? trueResult : falseResult; });
}
//# sourceMappingURL=iif.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/interval.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/interval.js ***!
  \*****************************************************************/
/*! exports provided: interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */



function interval(period, scheduler) {
    if (period === void 0) {
        period = 0;
    }
    if (scheduler === void 0) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber: subscriber, counter: 0, period: period }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({ subscriber: subscriber, counter: counter + 1, period: period }, period);
}
//# sourceMappingURL=interval.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/merge.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/merge.js ***!
  \**************************************************************/
/*! exports provided: merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/mergeAll */ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
            concurrent = observables.pop();
        }
    }
    else if (typeof last === 'number') {
        concurrent = observables.pop();
    }
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return observables[0];
    }
    return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}
//# sourceMappingURL=merge.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/never.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/never.js ***!
  \**************************************************************/
/*! exports provided: NEVER, never */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */


var NEVER = /*@__PURE__*/ new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);
function never() {
    return NEVER;
}
//# sourceMappingURL=never.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/of.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/of.js ***!
  \***********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _scalar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scalar */ "./node_modules/rxjs/_esm5/internal/observable/scalar.js");
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */




function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = args[args.length - 1];
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
        args.pop();
    }
    else {
        scheduler = undefined;
    }
    switch (args.length) {
        case 0:
            return Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])(scheduler);
        case 1:
            return scheduler ? Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args, scheduler) : Object(_scalar__WEBPACK_IMPORTED_MODULE_3__["scalar"])(args[0]);
        default:
            return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args, scheduler);
    }
}
//# sourceMappingURL=of.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js ***!
  \**************************************************************************/
/*! exports provided: onErrorResumeNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */




function onErrorResumeNext() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    if (sources.length === 0) {
        return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
    }
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
        return onErrorResumeNext.apply(void 0, first);
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var subNext = function () { return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber)); };
        return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
            next: function (value) { subscriber.next(value); },
            error: subNext,
            complete: subNext,
        });
    });
}
//# sourceMappingURL=onErrorResumeNext.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/pairs.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/pairs.js ***!
  \**************************************************************/
/*! exports provided: pairs, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function pairs(obj, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length && !subscriber.closed; i++) {
                var key = keys[i];
                if (obj.hasOwnProperty(key)) {
                    subscriber.next([key, obj[key]]);
                }
            }
            subscriber.complete();
        });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
            var keys = Object.keys(obj);
            var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
            subscription.add(scheduler.schedule(dispatch, 0, { keys: keys, index: 0, subscriber: subscriber, subscription: subscription, obj: obj }));
            return subscription;
        });
    }
}
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([key, obj[key]]);
            subscription.add(this.schedule({ keys: keys, index: index + 1, subscriber: subscriber, subscription: subscription, obj: obj }));
        }
        else {
            subscriber.complete();
        }
    }
}
//# sourceMappingURL=pairs.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/race.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/race.js ***!
  \*************************************************************/
/*! exports provided: race, RaceOperator, RaceSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    if (observables.length === 1) {
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(observables, undefined).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());

var RaceSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]));

//# sourceMappingURL=race.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/range.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/range.js ***!
  \**************************************************************/
/*! exports provided: range, dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function range(start, count, scheduler) {
    if (start === void 0) {
        start = 0;
    }
    if (count === void 0) {
        count = 0;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var index = 0;
        var current = start;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(current++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
        return undefined;
    });
}
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) {
        return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
//# sourceMappingURL=range.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/scalar.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/scalar.js ***!
  \***************************************************************/
/*! exports provided: scalar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalar", function() { return scalar; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function scalar(value) {
    var result = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        subscriber.next(value);
        subscriber.complete();
    });
    result._isScalar = true;
    result.value = value;
    return result;
}
//# sourceMappingURL=scalar.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/throwError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/throwError.js ***!
  \*******************************************************************/
/*! exports provided: throwError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return subscriber.error(error); });
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) { return scheduler.schedule(dispatch, 0, { error: error, subscriber: subscriber }); });
    }
}
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/timer.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/timer.js ***!
  \**************************************************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isNumeric */ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isScheduler */ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) {
        dueTime = 0;
    }
    var period = -1;
    if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period: period, subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}
//# sourceMappingURL=timer.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/using.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/using.js ***!
  \**************************************************************/
/*! exports provided: using */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "using", function() { return using; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empty */ "./node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function using(resourceFactory, observableFactory) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        }
        catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        var subscription = source.subscribe(subscriber);
        return function () {
            subscription.unsubscribe();
            if (resource) {
                resource.unsubscribe();
            }
        };
    });
}
//# sourceMappingURL=using.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/observable/zip.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/observable/zip.js ***!
  \************************************************************/
/*! exports provided: zip, ZipOperator, ZipSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../internal/symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */







function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') {
        observables.pop();
    }
    return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /*@__PURE__*/ (function () {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator;
}());

var ZipSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        var _this = _super.call(this, destination) || this;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : null;
        _this.values = values;
        return _this;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] === 'function') {
            iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--;
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) {
            this._tryresultSelector(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryresultSelector = function (args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]));

var StaticIterator = /*@__PURE__*/ (function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
var ZipBufferIterator = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
        return this;
    };
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__["subscribeToResult"])(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__["OuterSubscriber"]));
//# sourceMappingURL=zip.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/concatAll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/concatAll.js ***!
  \*****************************************************************/
/*! exports provided: concatAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeAll */ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

function concatAll() {
    return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}
//# sourceMappingURL=concatAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/groupBy.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/groupBy.js ***!
  \***************************************************************/
/*! exports provided: groupBy, GroupedObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Subject */ "./node_modules/rxjs/_esm5/internal/Subject.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */





function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
var GroupBySubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = new Map();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = (this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]());
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupDurationSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
var GroupedObservable = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]));

var InnerRefCountSubscription = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]));
//# sourceMappingURL=groupBy.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/map.js ***!
  \***********************************************************/
/*! exports provided: map, MapOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') {
            throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        }
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ (function () {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}());

var MapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function (value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=map.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeAll.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeAll.js ***!
  \****************************************************************/
/*! exports provided: mergeAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeMap */ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/identity */ "./node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}
//# sourceMappingURL=mergeAll.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/mergeMap.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/mergeMap.js ***!
  \****************************************************************/
/*! exports provided: mergeMap, MergeMapOperator, MergeMapSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/_esm5/internal/observable/from.js");
/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */






function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'function') {
        return function (source) { return source.pipe(mergeMap(function (a, i) { return Object(_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (b, ii) { return resultSelector(a, b, i, ii); })); }, concurrent)); };
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return function (source) { return source.lift(new MergeMapOperator(project, concurrent)); };
}
var MergeMapOperator = /*@__PURE__*/ (function () {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}());

var MergeMapSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            this._tryNext(value);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapSubscriber.prototype._tryNext = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result, value, index);
    };
    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
        var innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__["InnerSubscriber"](this, undefined, undefined);
        var destination = this.destination;
        destination.add(innerSubscriber);
        Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, ish, value, index, innerSubscriber);
    };
    MergeMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]));

//# sourceMappingURL=mergeMap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/observeOn.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/observeOn.js ***!
  \*****************************************************************/
/*! exports provided: observeOn, ObserveOnOperator, ObserveOnSubscriber, ObserveOnMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Notification */ "./node_modules/rxjs/_esm5/internal/Notification.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */



function observeOn(scheduler, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
var ObserveOnOperator = /*@__PURE__*/ (function () {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}());

var ObserveOnSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function (arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function (value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function (err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function () {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));

var ObserveOnMessage = /*@__PURE__*/ (function () {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}());

//# sourceMappingURL=observeOn.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/operators/refCount.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/operators/refCount.js ***!
  \****************************************************************/
/*! exports provided: refCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ (function () {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function (subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) {
            refCounter.connection = connectable.connect();
        }
        return subscription;
    };
    return RefCountOperator;
}());
var RefCountSubscriber = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function () {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) {
            sharedConnection.unsubscribe();
        }
    };
    return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]));
//# sourceMappingURL=refCount.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/Action.js ***!
  \**************************************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */


var Action = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return this;
    };
    return Action;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]));

//# sourceMappingURL=Action.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js ***!
  \****************************************************************************/
/*! exports provided: AnimationFrameAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function() { return AnimationFrameAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var AnimationFrameAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () { return scheduler.flush(null); }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=AnimationFrameAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js ***!
  \*******************************************************************************/
/*! exports provided: AnimationFrameScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function() { return AnimationFrameScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AnimationFrameScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AnimationFrameScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js ***!
  \******************************************************************/
/*! exports provided: AsapAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ "./node_modules/rxjs/_esm5/internal/util/Immediate.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */



var AsapAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_2__["AsyncAction"]));

//# sourceMappingURL=AsapAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js ***!
  \*********************************************************************/
/*! exports provided: AsapScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var AsapScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=AsapScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js ***!
  \*******************************************************************/
/*! exports provided: AsyncAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/_esm5/internal/scheduler/Action.js");
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */


var AsyncAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]));

//# sourceMappingURL=AsyncAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js ***!
  \**********************************************************************/
/*! exports provided: AsyncScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/_esm5/internal/Scheduler.js");
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */


var AsyncScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) {
            now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"].now;
        }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) {
            delay = 0;
        }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"]));

//# sourceMappingURL=AsyncScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js ***!
  \*******************************************************************/
/*! exports provided: QueueAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */


var QueueAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        return scheduler.flush(this);
    };
    return QueueAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=QueueAction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js ***!
  \**********************************************************************/
/*! exports provided: QueueScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */


var QueueScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]));

//# sourceMappingURL=QueueScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js ***!
  \****************************************************************************/
/*! exports provided: VirtualTimeScheduler, VirtualAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return VirtualAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */



var VirtualTimeScheduler = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) {
            SchedulerAction = VirtualAction;
        }
        if (maxFrames === void 0) {
            maxFrames = Number.POSITIVE_INFINITY;
        }
        var _this = _super.call(this, SchedulerAction, function () { return _this.frame; }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__["AsyncScheduler"]));

var VirtualAction = /*@__PURE__*/ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) {
            index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]));

//# sourceMappingURL=VirtualTimeScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js ***!
  \**********************************************************************/
/*! exports provided: animationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js");
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */


var animationFrame = /*@__PURE__*/ new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);
//# sourceMappingURL=animationFrame.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/asap.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/asap.js ***!
  \************************************************************/
/*! exports provided: asap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */


var asap = /*@__PURE__*/ new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);
//# sourceMappingURL=asap.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/async.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/async.js ***!
  \*************************************************************/
/*! exports provided: async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var async = /*@__PURE__*/ new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);
//# sourceMappingURL=async.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/scheduler/queue.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/scheduler/queue.js ***!
  \*************************************************************/
/*! exports provided: queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueAction */ "./node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueScheduler */ "./node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */


var queue = /*@__PURE__*/ new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);
//# sourceMappingURL=queue.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/iterator.js ***!
  \*************************************************************/
/*! exports provided: getSymbolIterator, iterator, $$iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;
//# sourceMappingURL=iterator.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/observable.js ***!
  \***************************************************************/
/*! exports provided: observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js ***!
  \*****************************************************************/
/*! exports provided: rxSubscriber, $$rxSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function'
    ? /*@__PURE__*/ Symbol('rxSubscriber')
    : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
var $$rxSubscriber = rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js ***!
  \**************************************************************************/
/*! exports provided: ArgumentOutOfRangeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
}
ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/EmptyError.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/EmptyError.js ***!
  \*************************************************************/
/*! exports provided: EmptyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
    Error.call(this);
    this.message = 'no elements in sequence';
    this.name = 'EmptyError';
    return this;
}
EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var EmptyError = EmptyErrorImpl;
//# sourceMappingURL=EmptyError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/Immediate.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/Immediate.js ***!
  \************************************************************/
/*! exports provided: Immediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};
function runIfPresent(handle) {
    var cb = tasksByHandle[handle];
    if (cb) {
        cb();
    }
}
var Immediate = {
    setImmediate: function (cb) {
        var handle = nextHandle++;
        tasksByHandle[handle] = cb;
        Promise.resolve().then(function () { return runIfPresent(handle); });
        return handle;
    },
    clearImmediate: function (handle) {
        delete tasksByHandle[handle];
    },
};
//# sourceMappingURL=Immediate.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js ***!
  \**************************************************************************/
/*! exports provided: ObjectUnsubscribedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/TimeoutError.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/TimeoutError.js ***!
  \***************************************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
    Error.call(this);
    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    return this;
}
TimeoutErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var TimeoutError = TimeoutErrorImpl;
//# sourceMappingURL=TimeoutError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js ***!
  \**********************************************************************/
/*! exports provided: UnsubscriptionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/canReportError.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/canReportError.js ***!
  \*****************************************************************/
/*! exports provided: canReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
//# sourceMappingURL=canReportError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/errorObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/errorObject.js ***!
  \**************************************************************/
/*! exports provided: errorObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorObject", function() { return errorObject; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/hostReportError.js ***!
  \******************************************************************/
/*! exports provided: hostReportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
//# sourceMappingURL=hostReportError.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/identity.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/identity.js ***!
  \***********************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArray.js ***!
  \**********************************************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isArrayLike.js ***!
  \**************************************************************/
/*! exports provided: isArrayLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isFunction.js ***!
  \*************************************************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}
//# sourceMappingURL=isFunction.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isInteropObservable.js ***!
  \**********************************************************************/
/*! exports provided: isInteropObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
    return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}
//# sourceMappingURL=isInteropObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isIterable.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isIterable.js ***!
  \*************************************************************/
/*! exports provided: isIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
    return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}
//# sourceMappingURL=isIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isNumeric.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isNumeric.js ***!
  \************************************************************/
/*! exports provided: isNumeric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ "./node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
    return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && (val - parseFloat(val) + 1) >= 0;
}
//# sourceMappingURL=isNumeric.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObject.js ***!
  \***********************************************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x != null && typeof x === 'object';
}
//# sourceMappingURL=isObject.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isObservable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isObservable.js ***!
  \***************************************************************/
/*! exports provided: isObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
//# sourceMappingURL=isObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isPromise.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isPromise.js ***!
  \************************************************************/
/*! exports provided: isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
//# sourceMappingURL=isPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/isScheduler.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/isScheduler.js ***!
  \**************************************************************/
/*! exports provided: isScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}
//# sourceMappingURL=isScheduler.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/noop.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/noop.js ***!
  \*******************************************************/
/*! exports provided: noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() { }
//# sourceMappingURL=noop.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/pipe.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/pipe.js ***!
  \*******************************************************/
/*! exports provided: pipe, pipeFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (!fns) {
        return _noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeTo.js ***!
  \**************************************************************/
/*! exports provided: subscribeTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */










var subscribeTo = function (result) {
    if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
        return function (subscriber) {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            }
            else {
                return result.subscribe(subscriber);
            }
        };
    }
    else if (result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_9__["observable"]] === 'function') {
        return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__["subscribeToObservable"])(result);
    }
    else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_5__["isArrayLike"])(result)) {
        return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(result);
    }
    else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(result)) {
        return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__["subscribeToPromise"])(result);
    }
    else if (result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__["iterator"]] === 'function') {
        return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__["subscribeToIterable"])(result);
    }
    else {
        var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_7__["isObject"])(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToArray.js ***!
  \*******************************************************************/
/*! exports provided: subscribeToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        if (!subscriber.closed) {
            subscriber.complete();
        }
    };
};
//# sourceMappingURL=subscribeToArray.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js ***!
  \**********************************************************************/
/*! exports provided: subscribeToIterable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
    return function (subscriber) {
        var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();
        do {
            var item = iterator.next();
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) {
                break;
            }
        } while (true);
        if (typeof iterator.return === 'function') {
            subscriber.add(function () {
                if (iterator.return) {
                    iterator.return();
                }
            });
        }
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToIterable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js ***!
  \************************************************************************/
/*! exports provided: subscribeToObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
    return function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();
        if (typeof obs.subscribe !== 'function') {
            throw new TypeError('Provided object does not correctly implement Symbol.observable');
        }
        else {
            return obs.subscribe(subscriber);
        }
    };
};
//# sourceMappingURL=subscribeToObservable.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js ***!
  \*********************************************************************/
/*! exports provided: subscribeToPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
    return function (subscriber) {
        promise.then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
        return subscriber;
    };
};
//# sourceMappingURL=subscribeToPromise.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/subscribeToResult.js ***!
  \********************************************************************/
/*! exports provided: subscribeToResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */


function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) {
        destination = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);
    }
    if (destination.closed) {
        return;
    }
    return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(destination);
}
//# sourceMappingURL=subscribeToResult.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/toSubscriber.js ***!
  \***************************************************************/
/*! exports provided: toSubscriber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/_esm5/internal/Observer.js");
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
            return nextOrObserver;
        }
        if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
            return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
    }
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}
//# sourceMappingURL=toSubscriber.js.map


/***/ }),

/***/ "./node_modules/rxjs/_esm5/internal/util/tryCatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/_esm5/internal/util/tryCatch.js ***!
  \***********************************************************/
/*! exports provided: tryCatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryCatch", function() { return tryCatch; });
/* harmony import */ var _errorObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorObject */ "./node_modules/rxjs/_esm5/internal/util/errorObject.js");
/** PURE_IMPORTS_START _errorObject PURE_IMPORTS_END */

var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        _errorObject__WEBPACK_IMPORTED_MODULE_0__["errorObject"].e = e;
        return _errorObject__WEBPACK_IMPORTED_MODULE_0__["errorObject"];
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
//# sourceMappingURL=tryCatch.js.map


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/worker/app-workers/app.workers.ts":
/*!***********************************************!*\
  !*** ./src/worker/app-workers/app.workers.ts ***!
  \***********************************************/
/*! exports provided: AppWorkers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWorkers", function() { return AppWorkers; });
/* harmony import */ var _pitch_detector_worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pitch-detector.worker */ "./src/worker/app-workers/pitch-detector.worker.ts");
/* harmony import */ var _step_detector_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step-detector.worker */ "./src/worker/app-workers/step-detector.worker.ts");
/* harmony import */ var _rhythm_detector_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rhythm-detector.worker */ "./src/worker/app-workers/rhythm-detector.worker.ts");
/* harmony import */ var _shared_worker_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/worker-message.model */ "./src/worker/app-workers/shared/worker-message.model.ts");
/* harmony import */ var _shared_worker_topic_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/worker-topic.constants */ "./src/worker/app-workers/shared/worker-topic.constants.ts");
/* <project-root>/src/worker/app-workers/app.workers.ts */





var AppWorkers = /** @class */ (function () {
    function AppWorkers(workerCtx) {
        this.workerCtx = workerCtx;
        this.created = new Date();
    }
    AppWorkers.prototype.workerBroker = function ($event) {
        var _this = this;
        var _a = $event.data, topic = _a.topic, data = _a.data;
        var workerMessage = new _shared_worker_message_model__WEBPACK_IMPORTED_MODULE_3__["WorkerMessage"](topic, data);
        switch (topic) {
            case _shared_worker_topic_constants__WEBPACK_IMPORTED_MODULE_4__["WORKER_TOPIC"].pitchDetector:
                _pitch_detector_worker__WEBPACK_IMPORTED_MODULE_0__["PitchDetectorWorker"].doWork(workerMessage).subscribe(function (message) { _this.returnWorkResults(message); });
                break;
            case _shared_worker_topic_constants__WEBPACK_IMPORTED_MODULE_4__["WORKER_TOPIC"].stepDetector:
                _step_detector_worker__WEBPACK_IMPORTED_MODULE_1__["StepDetectorWorker"].doWork(workerMessage).subscribe(function (message) { _this.returnWorkResults(message); });
                break;
            case _shared_worker_topic_constants__WEBPACK_IMPORTED_MODULE_4__["WORKER_TOPIC"].rhythmDetector:
                _rhythm_detector_worker__WEBPACK_IMPORTED_MODULE_2__["RhythmDetectorWorker"].doWork(workerMessage).subscribe(function (message) { _this.returnWorkResults(message); });
                break;
            default: // Add support for other workers here
                console.error('Topic Does Not Match');
        }
    };
    AppWorkers.prototype.returnWorkResults = function (message) {
        this.workerCtx.postMessage(message);
    };
    return AppWorkers;
}());



/***/ }),

/***/ "./src/worker/app-workers/pitch-detector.worker.ts":
/*!*********************************************************!*\
  !*** ./src/worker/app-workers/pitch-detector.worker.ts ***!
  \*********************************************************/
/*! exports provided: PitchDetectorWorker, DefaultPitchParameter, PitchDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchDetectorWorker", function() { return PitchDetectorWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPitchParameter", function() { return DefaultPitchParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PitchDetector", function() { return PitchDetector; });
/* harmony import */ var _shared_common_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/common-detector */ "./src/worker/app-workers/shared/common-detector.ts");
/* harmony import */ var _shared_worker_message_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/worker-message.model */ "./src/worker/app-workers/shared/worker-message.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* <project-root>/src/worker/app-workers/mocked-cpu-intensive.worker.ts */



var PitchDetectorWorker = /** @class */ (function () {
    function PitchDetectorWorker() {
    }
    PitchDetectorWorker.doWork = function (value) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var pitchDetector = new PitchDetector();
            pitchDetector.init_parameters(value.data.parameters);
            pitchDetector.run(value.data.buffer, value.data.sampleRate, value.data.timeStart, value.data.timeStop, value.data.debug).subscribe(function (data) {
                observer.next(new _shared_worker_message_model__WEBPACK_IMPORTED_MODULE_1__["WorkerMessage"](value.topic, data));
                if (data.progression == null) {
                    observer.complete();
                }
            });
        });
    };
    return PitchDetectorWorker;
}());

var DefaultPitchParameter = {
    windowtimesize_s: 20e-3,
    sonogramperiod_s: 1e-3,
    f0_hz: 32.7032,
    freqmin_hz: 80,
    freqmax_hz: 5000,
    cutoff: 0.97,
    smallcutoff: 0.5
};
var PitchDetector = /** @class */ (function () {
    function PitchDetector() {
        this.maxPositions = [];
        this.periodEstimates = [];
        this.ampEstimates = [];
    }
    PitchDetector.prototype.init_parameters = function (pitchParameter) {
        // Mc Leod Pitch detection parameters
        this.cutoff = pitchParameter.cutoff;
        this.smallCutoff = pitchParameter.smallcutoff;
        this.lowerPitchCutoff = pitchParameter.freqmin_hz;
        this.higherPitchCutoff = pitchParameter.freqmax_hz;
        // Pitch array parameters
        this.WindowTimeSize_s = pitchParameter.windowtimesize_s;
        this.SonogramPeriod_s = pitchParameter.sonogramperiod_s;
        this.f0_hz = pitchParameter.f0_hz;
    };
    // MC LEOD PITCH DETECTOR
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    PitchDetector.prototype._ClosestTimeIndice = function (bufferMono, time_s) {
        var ind = Math.round(time_s * this.sampleRate);
        if (ind < 0) {
            ind = 0;
        }
        if (ind > bufferMono.length - 1) {
            ind = bufferMono.length - 1;
        }
        return ind;
    };
    PitchDetector.prototype._GetIndiceStartAndStop = function (bufferMono, TimeStart_s, TimeStop_s) {
        var IndStart = 0;
        var IndStop = 0;
        if (TimeStop_s == null) {
            IndStop = bufferMono.length;
        }
        else {
            IndStop = this._ClosestTimeIndice(bufferMono, TimeStop_s);
        }
        if (TimeStart_s == null) {
            IndStart = 0;
        }
        else {
            IndStart = this._ClosestTimeIndice(bufferMono, TimeStart_s);
        }
        if ((IndStop > bufferMono.length) || (IndStart > IndStop) || (IndStop < 1) || (IndStart < 0)) {
            console.log("Error choosing time start and time stop");
        }
        return [IndStart, IndStop];
    };
    PitchDetector.prototype.run = function (bufferMono, sampleRate, TimeStart_s, TimeStop_s, debug) {
        var _this = this;
        if (debug === void 0) { debug = false; }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var _a;
            _this.sampleRate = sampleRate;
            var WS = Math.round(_this.WindowTimeSize_s * _this.sampleRate);
            _this.nsdf = new Float32Array(WS);
            var PitchList = [];
            var EnergyList = [];
            var tempPitch = 0;
            var tempEnergy = 0;
            var IndStart = 0;
            var IndStop = 0;
            _a = _this._GetIndiceStartAndStop(bufferMono, TimeStart_s, TimeStop_s), IndStart = _a[0], IndStop = _a[1];
            var num_sample = 0;
            var IndA = IndStart;
            var IndB = IndStart + WS;
            var sound_chunk = new Array(WS);
            _this.progression = 0;
            var pastprogress = 0;
            while (IndB < IndStop) {
                _this.progression = Math.round((IndB - IndStart) * 100.0 / (IndStop - IndStart));
                if (_this.progression != pastprogress) {
                    pastprogress = _this.progression;
                    observer.next({ progression: { value: _this.progression, total: 100, step: "Mc Leod Pitch Detection" } });
                }
                for (var k = 0; k < WS; k++) {
                    sound_chunk[k] = bufferMono[IndA + k];
                }
                tempPitch = _this.getPitch(sound_chunk);
                tempPitch = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_0__["ConvertFreqToTone"])(tempPitch, _this.f0_hz);
                tempEnergy = _this.getEnergy(sound_chunk) / WS;
                tempEnergy = 10.0 * Math.log10(tempEnergy);
                if (Number.isNaN(tempPitch) || !Number.isFinite(tempPitch)) {
                    tempPitch = -1;
                }
                if (Number.isNaN(tempEnergy) || !Number.isFinite(tempEnergy)) {
                    tempEnergy = -1000;
                }
                PitchList.push(tempPitch);
                EnergyList.push(tempEnergy);
                // Next indice of chunk
                num_sample = num_sample + 1;
                IndA = Math.round((num_sample * _this.SonogramPeriod_s) * _this.sampleRate) + IndStart;
                IndB = IndA + WS;
            }
            var output = {
                'pitch_st': PitchList,
                'energy_db': EnergyList,
                'te_s': _this.SonogramPeriod_s,
                'f0_hz': _this.f0_hz,
                'timestart_s': TimeStart_s,
                'timestop_s': TimeStop_s
            };
            observer.next({ result: output });
            observer.complete();
        });
    };
    PitchDetector.prototype.getEnergy = function (audioBuffer) {
        var energy = 0;
        for (var k = 0; k < audioBuffer.length; k++) {
            energy = energy + Math.pow(audioBuffer[k], 2);
        }
        return energy;
    };
    // MC LEOD PITCH DETECTOR
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    PitchDetector.prototype.normalizedSquareDifference = function (audioBuffer) {
        //
        var audioBufferMean = 0;
        for (var tau = 0; tau < audioBuffer.length; tau++) {
            audioBufferMean += audioBuffer[tau];
        }
        audioBufferMean = audioBufferMean / audioBuffer.length;
        for (var tau = 0; tau < audioBuffer.length; tau++) {
            audioBuffer[tau] -= audioBufferMean;
        }
        var maxval;
        //
        for (var tau = 0; tau < audioBuffer.length; tau++) {
            var acf = 0;
            for (var i = 0; i < audioBuffer.length - tau; i++) {
                acf += audioBuffer[i] * audioBuffer[i + tau];
            }
            if (tau === 0) {
                maxval = acf;
            }
            this.nsdf[tau] = acf / maxval;
        }
    };
    PitchDetector.prototype.getPitch = function (audioBuffer) {
        // 0. Clear previous results (Is this faster than initializing a list
        // again and again?)
        this.maxPositions = [];
        this.periodEstimates = [];
        this.ampEstimates = [];
        // 1. Calculate the normalized square difference for each Tau value.
        this.normalizedSquareDifference(audioBuffer);
        // 2. Peak picking time: time to pick some peaks.
        this.peakPicking();
        var highestAmplitude = -Infinity;
        for (var i = 0; i < this.maxPositions.length; i++) {
            var tau = this.maxPositions[i];
            // make sure every annotation has a probability attached
            highestAmplitude = Math.max(highestAmplitude, this.nsdf[tau]);
            if (this.nsdf[tau] > this.smallCutoff) {
                // calculates turningPointX and Y
                this.parabolicInterpolation(tau);
                // store the turning points
                this.ampEstimates.push(this.turningPointY);
                this.periodEstimates.push(this.turningPointX);
                // remember the highest amplitude
                highestAmplitude = Math.max(highestAmplitude, this.turningPointY);
            }
        }
        var pitch = null;
        if (this.periodEstimates.length > 0) {
            // use the overall maximum to calculate a cutoff.
            // The cutoff value is based on the highest value and a relative
            // threshold.
            var actualCutoff = this.cutoff * highestAmplitude;
            // find first period above or equal to cutoff
            var periodIndex = 0;
            for (var i = 0; i < this.ampEstimates.length; i++) {
                if (this.ampEstimates[i] >= actualCutoff) {
                    periodIndex = i;
                    break;
                }
            }
            var period = this.periodEstimates[periodIndex];
            var pitchEstimate = Number(this.sampleRate / period);
            if (pitchEstimate > this.lowerPitchCutoff) {
                pitch = pitchEstimate;
            }
            else {
                pitch = -1;
            }
        }
        return pitch;
    };
    PitchDetector.prototype.parabolicInterpolation = function (tau) {
        var nsdfa = this.nsdf[tau - 1];
        var nsdfb = this.nsdf[tau];
        var nsdfc = this.nsdf[tau + 1];
        var bValue = tau;
        var bottom = nsdfc + nsdfa - 2 * nsdfb;
        if (bottom == 0.0) {
            this.turningPointX = bValue;
            this.turningPointY = nsdfb;
        }
        else {
            var delta = nsdfa - nsdfc;
            this.turningPointX = bValue + delta / (2 * bottom);
            this.turningPointY = nsdfb - delta * delta / (8 * bottom);
        }
    };
    PitchDetector.prototype.peakPicking = function () {
        var pos = 0;
        var curMaxPos = 0;
        // find the first negative zero crossing
        while (pos < (this.nsdf.length - 1) / 3 && this.nsdf[pos] > 0) {
            pos++;
        }
        // loop over all the values below zero
        while (pos < this.nsdf.length - 1 && this.nsdf[pos] <= 0.0) {
            pos++;
        }
        // can happen if output[0] is NAN
        if (pos == 0) {
            pos = 1;
        }
        while (pos < this.nsdf.length - 1) {
            if (this.nsdf[pos] > this.nsdf[pos - 1] &&
                this.nsdf[pos] >= this.nsdf[pos + 1]) {
                if (curMaxPos == 0) {
                    // the first max (between zero crossings)
                    curMaxPos = pos;
                }
                else if (this.nsdf[pos] > this.nsdf[curMaxPos]) {
                    // a higher max (between the zero crossings)
                    curMaxPos = pos;
                }
            }
            pos++;
            // a negative zero crossing
            if (pos < this.nsdf.length - 1 && this.nsdf[pos] <= 0) {
                // if there was a maximum add it to the list of maxima
                if (curMaxPos > 0) {
                    this.maxPositions.push(curMaxPos);
                    curMaxPos = 0; // clear the maximum position, so we start
                    // looking for a new ones
                }
                while (pos < this.nsdf.length - 1 && this.nsdf[pos] <= 0.0) {
                    pos++; // loop over all the values below zero
                }
            }
        }
        if (curMaxPos > 0) {
            // if there was a maximum in the last part
            this.maxPositions.push(curMaxPos); // add it to the vector of maxima
        }
    };
    return PitchDetector;
}());



/***/ }),

/***/ "./src/worker/app-workers/rhythm-detector.worker.ts":
/*!**********************************************************!*\
  !*** ./src/worker/app-workers/rhythm-detector.worker.ts ***!
  \**********************************************************/
/*! exports provided: RhythmDetectorWorker, DefaultRhythmParameter, DigitalNote, RhythmDetector, Configuration, COMBINATIONS_DIVISION, LENGTH_WHOLE, LENGTH_HALF, LENGTH_QUARTER, LENGTH_EIGHTH, LENGTH_16TH, LENGTH_T_EIGHTH, LENGTH_T_16TH, COMBINATIONS, ConvertAllowedRhythmsToMaskDico, NoteTypesCorrespond, CombinationExists, CalculateRatio, CalculateError, GetListIndicesFromListComb, DivideCombination, LengthToDuration, AddBeamInformation, GetNotesFromCombination, GetListNotesFromListComb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RhythmDetectorWorker", function() { return RhythmDetectorWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultRhythmParameter", function() { return DefaultRhythmParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalNote", function() { return DigitalNote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RhythmDetector", function() { return RhythmDetector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMBINATIONS_DIVISION", function() { return COMBINATIONS_DIVISION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_WHOLE", function() { return LENGTH_WHOLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_HALF", function() { return LENGTH_HALF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_QUARTER", function() { return LENGTH_QUARTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_EIGHTH", function() { return LENGTH_EIGHTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_16TH", function() { return LENGTH_16TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_T_EIGHTH", function() { return LENGTH_T_EIGHTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_T_16TH", function() { return LENGTH_T_16TH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMBINATIONS", function() { return COMBINATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertAllowedRhythmsToMaskDico", function() { return ConvertAllowedRhythmsToMaskDico; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteTypesCorrespond", function() { return NoteTypesCorrespond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombinationExists", function() { return CombinationExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateRatio", function() { return CalculateRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateError", function() { return CalculateError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetListIndicesFromListComb", function() { return GetListIndicesFromListComb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivideCombination", function() { return DivideCombination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LengthToDuration", function() { return LengthToDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBeamInformation", function() { return AddBeamInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNotesFromCombination", function() { return GetNotesFromCombination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetListNotesFromListComb", function() { return GetListNotesFromListComb; });
/* harmony import */ var _shared_worker_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/worker-message.model */ "./src/worker/app-workers/shared/worker-message.model.ts");
/* harmony import */ var _shared_common_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/common-detector */ "./src/worker/app-workers/shared/common-detector.ts");
/* harmony import */ var _shared_dijkstra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/dijkstra */ "./src/worker/app-workers/shared/dijkstra.ts");
/* harmony import */ var _shared_music_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/music-xml */ "./src/worker/app-workers/shared/music-xml.ts");
/* harmony import */ var _shared_midi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/midi */ "./src/worker/app-workers/shared/midi.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var RhythmDetectorWorker = /** @class */ (function () {
    function RhythmDetectorWorker() {
    }
    RhythmDetectorWorker.doWork = function (value) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            var rhythmDetector = new RhythmDetector();
            rhythmDetector.init_parameters(value.data.parameters);
            rhythmDetector.run(value.data.stepResult, value.data.debug).subscribe(function (data) {
                observer.next(new _shared_worker_message_model__WEBPACK_IMPORTED_MODULE_0__["WorkerMessage"](value.topic, data));
                if (data.progression == null) {
                    observer.complete();
                }
            });
        });
    };
    return RhythmDetectorWorker;
}());

var DefaultRhythmParameter = {
    delaymin_s: 0.3,
    delaymax_s: 1.5,
    maxdelayvar: 0.5,
    errormax: 10,
    allowed_rhythms: {
        onenoteonebeat: true,
        onenotetwobeat: true,
        onenotethreebeat: true,
        onenotefourbeat: true,
        onenotefivebeat: true,
        onenotesixbeat: true,
        onenotesevenbeat: true,
        onenoteeightbeat: true,
        onerestonebeat: true,
        oneresttwobeat: true,
        onerestthreebeat: true,
        onerestfourbeat: true,
        onerestfivebeat: true,
        onerestsixbeat: true,
        onerestsevenbeat: true,
        oneresteightbeat: true,
        en_en: true,
        er_en: true,
        en_er: true,
        den_sn: true,
        sn_den: true,
        dqn_en: true,
        qr_er_en: true,
        dqn_er: true,
        en_en_qn: true,
        qn_dqn_en: true,
        qr_qr_er_en: true,
        qn_dqn_er: true,
        en_en_hn: true,
        hn_dqn_en: true,
        qr_qr_qr_er_en: true,
        hn_dqn_er: true,
        en_en_dhn: true,
        en_sn_sn: true,
        er_sn_sn: true,
        sn_sn_en: true,
        sn_sn_er: true,
        sn_en_sn: true,
        t_en_en_en: true,
        t_en_den_sn: true,
        t_en_sn_den: true,
        t_sn_en_den: true,
        t_sn_den_en: true,
        t_den_en_sn: true,
        t_den_sn_en: true,
        en_qn_en: true,
        dqn_sn_sn: true,
        qn_dqn_sn_sn: true,
        hn_dqn_sn_sn: true,
        sn_sn_sn_sn: true
    }
};
var DigitalNote = /** @class */ (function () {
    function DigitalNote(isANote, analoglength, analogheight, octave) {
        if ((this.isANote) && ((analogheight == null) || (octave == null))) {
            console.log("Error: trying to create a note without providing height and octave parameters");
            return;
        }
        this.isANote = isANote;
        this.analoglength = analoglength;
        if (this.isANote) {
            this.analogheight = analogheight;
            this.octave = octave;
        }
    }
    DigitalNote.prototype.get_analoglength = function () {
        return this.analoglength;
    };
    DigitalNote.prototype.get_analogheight = function () {
        return this.analogheight;
    };
    DigitalNote.prototype.get_octave = function () {
        return this.octave;
    };
    DigitalNote.prototype.set_analoglength = function (analoglength) {
        this.analoglength = analoglength;
    };
    DigitalNote.prototype.set_analogheight = function (analogheight) {
        this.analogheight = analogheight;
    };
    DigitalNote.prototype.set_octave = function (octave) {
        this.octave = octave;
    };
    // To know if it's a note or a rest
    DigitalNote.prototype.is_note = function () {
        return this.isANote;
    };
    DigitalNote.prototype.reset_configurations = function () {
        this.configurations = [];
    };
    DigitalNote.prototype.get_configurations = function () {
        return (this.configurations);
    };
    DigitalNote.prototype.add_configuration = function (configuration) {
        this.configurations.push(configuration);
    };
    DigitalNote.prototype.MaskCombinations = function (combinationMasked) {
        for (var _i = 0, _a = this.configurations; _i < _a.length; _i++) {
            var config = _a[_i];
            for (var _b = 0, _c = config.get_options(); _b < _c.length; _b++) {
                var option = _c[_b];
                option.mask = combinationMasked[option.key];
            }
        }
    };
    DigitalNote.prototype.ApplyOffset = function (offset) {
        var newValue;
        var height = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["ConvertNoteAndOctaveToSemitone"])(this.analogheight, this.octave);
        height += offset;
        newValue = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["ConvertSemitoneToNoteAndOctave"])(height);
        this.analogheight = newValue.height;
        this.octave = newValue.octave;
    };
    DigitalNote.prototype.GetRoundedHeightAndOctave = function () {
        if (this.analogheight >= 11.5) {
            return ([0, this.octave + 1]);
        }
        else {
            var IntHeight = Math.round(this.analogheight);
            return [IntHeight, this.octave];
        }
    };
    DigitalNote.prototype.IsHeightInFifth = function (fifth) {
        var _a;
        if (!this.is_note()) {
            console.log("Trying to get the parameter of the note height whereas it's actually just a 'rest'");
            return;
        }
        var IntHeight;
        var Octave;
        _a = this.GetRoundedHeightAndOctave(), IntHeight = _a[0], Octave = _a[1];
        // DO / SI DIESE
        if ((IntHeight == 0) && (((fifth >= -5) && (fifth <= 1)) || (fifth == 7))) {
            return true;
            // DO DIESE / RE BEMOL
        }
        else if ((IntHeight == 1) && ((fifth >= 2) || (fifth <= -4))) {
            return true;
            // RE
        }
        else if ((IntHeight == 2) && ((fifth >= -3) && (fifth <= 3))) {
            return true;
            // RE DIESE / MI BEMOL
        }
        else if ((IntHeight == 3) && ((fifth >= 4) || (fifth <= -2))) {
            return true;
            // MI / FA BEMOL
        }
        else if ((IntHeight == 4) && (((fifth >= -1) && (fifth <= 5)) || (fifth == -7))) {
            return true;
            // FA / MI DIESE
        }
        else if ((IntHeight == 5) && (((fifth >= -6) && (fifth <= 0)) || (fifth >= 6))) {
            return true;
            // FA DIESE / SOL BEMOL
        }
        else if ((IntHeight == 6) && ((fifth >= 1) || (fifth <= -5))) {
            return true;
            // SOL
        }
        else if ((IntHeight == 7) && ((fifth >= -4) && (fifth <= 2))) {
            return true;
            // SOL DIESE / LA BEMOL
        }
        else if ((IntHeight == 8) && ((fifth >= 3) || (fifth <= -3))) {
            return true;
            // LA
        }
        else if ((IntHeight == 9) && ((fifth >= -2) && (fifth <= 4))) {
            return true;
            // LA DIESE / SI BEMOL
        }
        else if ((IntHeight == 10) && ((fifth >= 5) || (fifth <= -1))) {
            return true;
            // SI / DO BEMOL
        }
        else if ((IntHeight == 11) && (((fifth >= 0) && (fifth <= 6)) || (fifth <= -6))) {
            return true;
        }
        else {
            return false;
        }
    };
    DigitalNote.prototype.IncreaseOneOctave = function () {
        if (!this.is_note()) {
            console.log("Changing the octave of a rest has no effect.");
        }
        else {
            this.octave += 1;
        }
    };
    DigitalNote.prototype.LowerOneOctave = function () {
        if (!this.is_note()) {
            console.log("Changing the octave of a rest has no effect.");
        }
        else {
            this.octave -= 1;
        }
    };
    DigitalNote.prototype.LowerOneHalftone = function () {
        if (!this.is_note()) {
            console.log("Changing the tone of a rest has no effect.");
        }
        else {
            if ((this.analogheight - 1.0) < 0.0) {
                this.LowerOneOctave();
            }
            this.analogheight = (this.analogheight - 1.0) % 12;
        }
    };
    DigitalNote.prototype.IncreaseOneHalftone = function () {
        if (!this.is_note()) {
            console.log("Changing the tone of a rest has no effect.");
        }
        else {
            if ((this.analogheight + 1.0) >= 12.0) {
                this.IncreaseOneOctave();
            }
            this.analogheight = (this.analogheight + 1.0) % 12;
        }
    };
    DigitalNote.prototype.GetStepAlterOctave = function (fifths) {
        var _a;
        if (!this.is_note()) {
            console.log("Trying to get the parameter of the note height whereas it's actually just a 'rest'");
        }
        var IntHeight;
        var Octave;
        _a = this.GetRoundedHeightAndOctave(), IntHeight = _a[0], Octave = _a[1];
        if (IntHeight == 0) {
            if (fifths >= 7) {
                // SI DIESE
                return ({ 'step': 'B', 'alter': 1, 'octave': Octave - 1 });
            }
            else {
                // DO
                return ({ 'step': 'C', 'alter': 0, 'octave': Octave });
            }
        }
        else if (IntHeight == 1) {
            if (fifths >= -3) {
                // DO DIESE
                return ({ 'step': 'C', 'alter': 1, 'octave': Octave });
            }
            else {
                // RE BEMOL
                return ({ 'step': 'D', 'alter': -1, 'octave': Octave });
            }
        }
        else if (IntHeight == 2) {
            // RE
            return ({ 'step': 'D', 'alter': 0, 'octave': Octave });
        }
        else if (IntHeight == 3) {
            if (fifths >= 4) {
                // RE DIESE
                return ({ 'step': 'D', 'alter': 1, 'octave': Octave });
            }
            else {
                // MI BEMOL
                return ({ 'step': 'E', 'alter': -1, 'octave': Octave });
            }
        }
        else if (IntHeight == 4) {
            if (fifths <= -7) {
                // FA BEMOL
                return ({ 'step': 'F', 'alter': 1, 'octave': Octave });
            }
            else {
                // MI
                return ({ 'step': 'E', 'alter': 0, 'octave': Octave });
            }
        }
        else if (IntHeight == 5) {
            if (fifths >= 6) {
                // MI DIESE
                return ({ 'step': 'E', 'alter': 1, 'octave': Octave });
            }
            else {
                // FA
                return ({ 'step': 'F', 'alter': 0, 'octave': Octave });
            }
        }
        else if (IntHeight == 6) {
            if (fifths >= -4) {
                // FA DIESE
                return ({ 'step': 'F', 'alter': 1, 'octave': Octave });
            }
            else {
                // SOL BEMOL
                return ({ 'step': 'G', 'alter': -1, 'octave': Octave });
            }
        }
        else if (IntHeight == 7) {
            // SOL
            return ({ 'step': 'G', 'alter': 0, 'octave': Octave });
        }
        else if (IntHeight == 8) {
            if (fifths > 0) {
                // SOL DIESE
                return ({ 'step': 'G', 'alter': 1, 'octave': Octave });
            }
            else {
                // LA BEMOL
                return ({ 'step': 'A', 'alter': -1, 'octave': Octave });
            }
        }
        else if (IntHeight == 9) {
            // LA
            return ({ 'step': 'A', 'alter': 0, 'octave': Octave });
        }
        else if (IntHeight == 10) {
            if (fifths >= 5) {
                // LA DIESE
                return ({ 'step': 'A', 'alter': 1, 'octave': Octave });
            }
            else {
                // SI BEMOL
                return ({ 'step': 'B', 'alter': -1, 'octave': Octave });
            }
        }
        else if (IntHeight == 11) {
            if (fifths >= -5) {
                // SI
                return ({ 'step': 'B', 'alter': 0, 'octave': Octave });
            }
            else {
                // DO BEMOL
                return ({ 'step': 'C', 'alter': -1, 'octave': Octave + 1 });
            }
        }
        else {
            console.log('Invalid note height (must be an integer between 0 and 11)');
        }
    };
    return DigitalNote;
}());

var RhythmDetector = /** @class */ (function () {
    function RhythmDetector() {
        this.previousNotes = { note: '', rest: '' };
        this.NumRefNote = 0;
        this.clef = 'G';
        this.fifths = 0;
        this.NotesDico = {};
    }
    RhythmDetector.prototype.init_parameters = function (rhythmParameter) {
        this.delaymin_s = rhythmParameter.delaymin_s;
        this.delaymax_s = rhythmParameter.delaymax_s;
        this.maxdelayvar = rhythmParameter.maxdelayvar;
        this.errormax = rhythmParameter.errormax;
        this.allowed_rhythms = rhythmParameter.allowed_rhythms;
    };
    RhythmDetector.prototype._AddNote = function (IsANote, NoteLength, NoteHeight) {
        if (IsANote) {
            // Create new note in the dictionary
            var NoteParams = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["ConvertSemitoneToNoteAndOctave"])(NoteHeight);
            var dignote = new DigitalNote(IsANote, NoteLength, NoteParams['height'], NoteParams['octave']);
            var NewRef = "NOTE_" + this.NumRefNote.toString();
            this.NumRefNote += 1;
            this.NotesDico[NewRef] = { note: dignote, next: [], previous: [] };
            // Set the connexions with previous note(s)
            if (this.previousNotes.note.length != 0) {
                var pastRef = this.previousNotes.note;
                this.NotesDico[pastRef].next.push(NewRef);
                this.NotesDico[NewRef].previous.push(pastRef);
            }
            if (this.previousNotes.rest.length != 0) {
                var pastRef = this.previousNotes.rest;
                this.NotesDico[pastRef].next.push(NewRef);
                this.NotesDico[NewRef].previous.push(pastRef);
            }
            // Set the current note as previous note for next iteration
            this.previousNotes.note = NewRef;
            this.previousNotes.rest = '';
        }
        else {
            if (this.previousNotes.note.length == 0) {
                // Rest at the beginning of a score
                console.log("Adding a rest to the beginning of a partition ? ignoring it");
                return;
            }
            else if (this.previousNotes.rest.length != 0) {
                // The previous note already have a rest associated
                var pastRef = this.previousNotes.note;
                this.NotesDico[pastRef].note.set_analoglength(this.NotesDico[pastRef].note.get_analoglength() + NoteLength);
                pastRef = this.previousNotes.rest;
                this.NotesDico[pastRef].note.set_analoglength(this.NotesDico[pastRef].note.get_analoglength() + NoteLength);
            }
            else {
                var pastRef = this.previousNotes.note;
                // Adding a new rest
                var dignote = new DigitalNote(false, NoteLength);
                var NewRestRef = "REST_" + this.NumRefNote.toString();
                this.NumRefNote += 1;
                this.NotesDico[NewRestRef] = { note: dignote, next: [], previous: [pastRef,] };
                this.NotesDico[pastRef].next.push(NewRestRef);
                // Simulate a note having length of the past note + this rest
                var simu_length = this.NotesDico[pastRef].note.get_analoglength() + NoteLength;
                var simu_analogheight = this.NotesDico[pastRef].note.get_analogheight();
                var simu_octave = this.NotesDico[pastRef].note.get_octave();
                dignote = new DigitalNote(true, simu_length, simu_analogheight, simu_octave);
                var NewNoteRef = "SNOTE_" + this.NumRefNote.toString();
                this.NumRefNote += 1;
                var simu_previous = this.NotesDico[pastRef].previous.slice();
                this.NotesDico[NewNoteRef] = { note: dignote, next: [], previous: simu_previous };
                for (var _i = 0, simu_previous_1 = simu_previous; _i < simu_previous_1.length; _i++) {
                    var pastpastRef = simu_previous_1[_i];
                    this.NotesDico[pastpastRef].next.push(NewNoteRef);
                }
                // Set the current note and rest as previous for next iteration
                this.previousNotes.rest = NewRestRef;
                this.previousNotes.note = NewNoteRef;
            }
        }
    };
    RhythmDetector.prototype.init_set_notes = function (stepResult) {
        this.NotesDico = {};
        this.previousNotes = { note: '', rest: '' };
        for (var k = 0; k < stepResult.notes.length; k++) {
            this._AddNote(stepResult.notes[k].type_b, stepResult.notes[k].length_s, stepResult.notes[k].pitch_st);
        }
    };
    RhythmDetector.prototype._SetSimulatedRestsBeginning = function () {
        for (var noteref in this.NotesDico) {
            if (noteref[0] === 'F') {
                delete this.NotesDico[noteref];
            }
            else {
                this.NotesDico[noteref].previous = this.NotesDico[noteref].previous.filter(function (ref) { return ref[0] !== 'F'; });
            }
        }
        var note_length;
        var dignote;
        var FakeRestRef;
        for (var noteref in this.NotesDico) {
            if ((noteref[0] === 'N') || (noteref[0] === 'S')) {
                // If previous == 0 ==> it's a note at the beginning of the score
                if (this.NotesDico[noteref].previous.length == 0) {
                    // Get ength of the note
                    note_length = this.NotesDico[noteref].note.get_analoglength();
                    // Simulate a rest of the same length (considering a start ofthe score off-beat)
                    dignote = new DigitalNote(false, note_length);
                    FakeRestRef = "FAKE_" + this.NumRefNote.toString();
                    this.NumRefNote += 1;
                    this.NotesDico[FakeRestRef] = { note: dignote, next: [noteref,], previous: [] };
                    this.NotesDico[noteref].previous.push(FakeRestRef);
                }
            }
        }
    };
    RhythmDetector.prototype._CalculateOptimumOffset = function (precision) {
        if (precision === void 0) { precision = 0.005; }
        var NbOffsetToTest = Math.floor(1.0 / precision);
        var offsetTested;
        var errorTested;
        var height_simulated;
        var error_min = Number.MAX_VALUE;
        var offset_opt = 0;
        for (var k = 0; k < NbOffsetToTest; k++) {
            offsetTested = -0.5 + k * precision;
            errorTested = 0.0;
            // Iterate over all the notes (not rest either simulated notes)
            for (var noteref in this.NotesDico) {
                if (noteref[0] === 'N') {
                    height_simulated = this.NotesDico[noteref].note.get_analogheight() + offsetTested;
                    errorTested += Math.abs(height_simulated - Math.round(height_simulated));
                }
            }
            if (errorTested < error_min) {
                error_min = errorTested;
                offset_opt = offsetTested;
            }
        }
        return offset_opt;
    };
    RhythmDetector.prototype._ApplyOffsetToAllNotes = function (offset) {
        for (var noteref in this.NotesDico) {
            if (this.NotesDico[noteref].note.is_note()) {
                this.NotesDico[noteref].note.ApplyOffset(offset);
            }
        }
    };
    RhythmDetector.prototype._CalculateAverageHeight = function () {
        var AverageHeight = 0;
        var NbNotes = 0;
        var temp_height;
        var temp_octave;
        for (var noteref in this.NotesDico) {
            if (noteref[0] === 'N') {
                temp_height = this.NotesDico[noteref].note.get_analogheight();
                temp_octave = this.NotesDico[noteref].note.get_octave();
                AverageHeight += Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["ConvertNoteAndOctaveToSemitone"])(temp_height, temp_octave);
                NbNotes += 1;
            }
        }
        AverageHeight = AverageHeight / NbNotes;
        return AverageHeight;
    };
    RhythmDetector.prototype.IncreaseOneOctaveEveryNotes = function () {
        for (var noteref in this.NotesDico) {
            if (this.NotesDico[noteref].note.is_note()) {
                this.NotesDico[noteref].note.IncreaseOneOctave();
            }
        }
    };
    RhythmDetector.prototype.LowerOneOctaveEveryNotes = function () {
        for (var noteref in this.NotesDico) {
            if (this.NotesDico[noteref].note.is_note()) {
                this.NotesDico[noteref].note.LowerOneOctave();
            }
        }
    };
    RhythmDetector.prototype.IncreaseOneHalftoneEveryNotes = function () {
        for (var noteref in this.NotesDico) {
            if (this.NotesDico[noteref].note.is_note()) {
                this.NotesDico[noteref].note.IncreaseOneHalftone();
            }
        }
    };
    RhythmDetector.prototype.LowerOneHalftoneEveryNotes = function () {
        for (var noteref in this.NotesDico) {
            if (this.NotesDico[noteref].note.is_note()) {
                this.NotesDico[noteref].note.LowerOneHalftone();
            }
        }
    };
    RhythmDetector.prototype.A_MinimizeHeightError = function () {
        var OffsetToApply = this._CalculateOptimumOffset();
        this._ApplyOffsetToAllNotes(OffsetToApply);
    };
    RhythmDetector.prototype.B_AutoSetFifths = function () {
        var NbSignsTemp;
        var BestFifths = 0;
        var BestNbSigns = Number.MAX_VALUE;
        for (var _i = 0, _a = [0, 1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7]; _i < _a.length; _i++) {
            var fifth = _a[_i];
            NbSignsTemp = 0;
            for (var noteref in this.NotesDico) {
                // not selecting simulated notes !!
                if (noteref[0] === 'N') {
                    if (!this.NotesDico[noteref].note.IsHeightInFifth(fifth)) {
                        NbSignsTemp += 1;
                    }
                }
            }
            if (NbSignsTemp < BestNbSigns) {
                BestFifths = fifth;
                BestNbSigns = NbSignsTemp;
            }
        }
        this.fifths = BestFifths;
    };
    RhythmDetector.prototype.C_AutoSetClef = function () {
        var AverageHeight = this._CalculateAverageHeight();
        if (AverageHeight / 12.0 >= 4) {
            this.clef = 'G';
        }
        else {
            this.clef = 'F';
        }
    };
    RhythmDetector.prototype.D_AutoTranslateOctave = function () {
        var AverageHeight = this._CalculateAverageHeight();
        var NbOctaves;
        if (this.clef === 'G') {
            NbOctaves = Math.round(((5 * 12 - 1) - AverageHeight) / 12.0);
        }
        else if (this.clef === 'F') {
            NbOctaves = Math.round(((3 * 12 + 2) - AverageHeight) / 12.0);
        }
        else {
            console.log("Invalid attributes 'clef', can be 'G' or 'F'");
            return;
        }
        if (NbOctaves > 0) {
            for (var k = 0; k < Math.abs(NbOctaves); k++) {
                this.IncreaseOneOctaveEveryNotes();
            }
        }
        else if (NbOctaves < 0) {
            for (var k = 0; k < Math.abs(NbOctaves); k++) {
                this.LowerOneOctaveEveryNotes();
            }
        }
    };
    RhythmDetector.prototype._ListNotesNext = function (refNote, NbNotes) {
        var ListOfPaths = [];
        var ListOfPaths_temp = [];
        ListOfPaths.push([refNote,]);
        var modification = true;
        while (modification) {
            modification = false;
            var ListOfPaths_temp_1 = [];
            // Iterate over all current paths
            for (var k = 0; k < ListOfPaths.length; k++) {
                // If the path still didn't reach the number of notes desired
                if (ListOfPaths[k].length < NbNotes) {
                    // Reference of the last note of the path
                    var refLastNote = ListOfPaths[k][ListOfPaths[k].length - 1];
                    // Iterate over the note connected to the last notes
                    for (var _i = 0, _a = this.NotesDico[refLastNote].next; _i < _a.length; _i++) {
                        var nextNoteRef = _a[_i];
                        ListOfPaths_temp_1.push(ListOfPaths[k].slice().concat([nextNoteRef]));
                        modification = true;
                    }
                }
                else {
                    ListOfPaths_temp_1.push(ListOfPaths[k].slice());
                }
            }
            ListOfPaths = ListOfPaths_temp_1.slice();
        }
        return ListOfPaths;
    };
    RhythmDetector.prototype._ListBestCombinationsForOneConf = function (path, nb_beats) {
        var nb_notes = path.length;
        var NoteTypes = [];
        var NoteLengths = [];
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var noteRef = path_1[_i];
            NoteLengths.push(this.NotesDico[noteRef].note.get_analoglength());
            if (this.NotesDico[noteRef].note.is_note()) {
                NoteTypes.push('note');
            }
            else {
                NoteTypes.push('rest');
            }
        }
        var delay = NoteLengths.reduce(function (a, b) { return a + b; }, 0) / nb_beats;
        var config = new Configuration(nb_notes, nb_beats, delay, path, '');
        for (var keyComb in COMBINATIONS) {
            if (COMBINATIONS[keyComb]['nbnotes'] != nb_notes) {
                continue;
            }
            if (COMBINATIONS[keyComb]['nbbeats'] != nb_beats) {
                continue;
            }
            if (!NoteTypesCorrespond(COMBINATIONS[keyComb]['notetypes'], NoteTypes)) {
                continue;
            }
            var error_comb = CalculateError(keyComb, NoteLengths);
            config.AddOption({ key: keyComb, error: error_comb, mask: false });
        }
        if (config.get_nboptions() == 0) {
            return null;
        }
        else {
            return config;
        }
    };
    RhythmDetector.prototype.E_GetConfigurationsForAllNotes = function () {
        this._SetSimulatedRestsBeginning();
        var NumComb = 0;
        for (var noteref in this.NotesDico) {
            this.NotesDico[noteref].note.reset_configurations();
            for (var NbNotes = 1; NbNotes < 5; NbNotes++) {
                var paths = this._ListNotesNext(noteref, NbNotes);
                for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
                    var path = paths_1[_i];
                    for (var NbBeats = 1; NbBeats < 9; NbBeats++) {
                        var conf = this._ListBestCombinationsForOneConf(path, NbBeats);
                        if (conf != null) {
                            var conf_ref = "CONF_" + NumComb.toString();
                            conf.set_ref(conf_ref);
                            this.NotesDico[noteref].note.add_configuration(conf);
                            NumComb += 1;
                        }
                    }
                }
            }
        }
    };
    RhythmDetector.prototype.F_MaskCOMBINATIONS = function () {
        // combstomask = NOT this.allowed_rhythms
        var CombinationsToMask = ConvertAllowedRhythmsToMaskDico(this.allowed_rhythms);
        for (var noteref in this.NotesDico) {
            this.NotesDico[noteref].note.MaskCombinations(CombinationsToMask);
        }
    };
    RhythmDetector.prototype._IsTheLastNote = function (noteRef) {
        if (this.NotesDico[noteRef].next.length === 0) {
            return true;
        }
        return false;
    };
    RhythmDetector.prototype.G_BuildGraph = function () {
        // errormax = this.errormax
        // delaymin_s = this.delaymin_s
        // delaymax_s = this.delaymax_s
        // maxdelayvar = this.maxdelayvar
        var WeightAdjust = 0.5;
        this.graph = new _shared_dijkstra__WEBPACK_IMPORTED_MODULE_2__["Graph"]();
        this.graph.addVertex('StartPoint');
        this.graph.addVertex('EndPoint');
        // Creating vertex
        for (var noteref in this.NotesDico) {
            for (var _i = 0, _a = this.NotesDico[noteref].note.get_configurations(); _i < _a.length; _i++) {
                var config = _a[_i];
                if (config.AtLeastOneUnmaskOption()) {
                    this.graph.addVertex(config.get_ref());
                }
            }
        }
        // Creating edges from 'StartPoint'
        for (var noteref in this.NotesDico) {
            // If the note is one of the fake rests added at the beginning
            if (noteref[0] === 'F') {
                var LengthSimulatedRest = this.NotesDico[noteref].note.get_analoglength();
                for (var _b = 0, _c = this.NotesDico[noteref].note.get_configurations(); _b < _c.length; _b++) {
                    var config = _c[_b];
                    if (config.AtLeastOneUnmaskOption()) {
                        this.graph.addEdge('StartPoint', config.get_ref(), -LengthSimulatedRest);
                    }
                }
            }
            else {
                // If the noteonly have fake rests as previous notes
                var previous = this.NotesDico[noteref].previous.filter(function (ref) { return ref[0] !== 'F'; });
                if (previous.length === 0) {
                    for (var _d = 0, _e = this.NotesDico[noteref].note.get_configurations(); _d < _e.length; _d++) {
                        var config = _e[_d];
                        if (config.AtLeastOneUnmaskOption()) {
                            this.graph.addEdge('StartPoint', config.get_ref(), 0);
                        }
                    }
                }
            }
        }
        var CurrentRef;
        var NextRef;
        var CurrentDelay;
        var NextDelay;
        var CombError;
        var TotLengthComb;
        var LastKeyNoteOfTheConf;
        var DelayVarValid;
        var WeightDelay;
        var Weight;
        for (var noteref in this.NotesDico) {
            for (var _f = 0, _g = this.NotesDico[noteref].note.get_configurations(); _f < _g.length; _f++) {
                var config = _g[_f];
                if (!config.IsValid(this.errormax, this.delaymin_s, this.delaymax_s)) {
                    continue;
                }
                CurrentRef = config.get_ref();
                CurrentDelay = config.get_delay();
                CombError = config.get_bestoption().error;
                TotLengthComb = config.get_delay() * config.get_nbbeats();
                LastKeyNoteOfTheConf = config.get_last_path_ref();
                if (this._IsTheLastNote(LastKeyNoteOfTheConf)) {
                    this.graph.addEdge(CurrentRef, 'EndPoint', TotLengthComb);
                }
                else {
                    for (var _h = 0, _j = this.NotesDico[LastKeyNoteOfTheConf].next; _h < _j.length; _h++) {
                        var nextNoteRef = _j[_h];
                        for (var _k = 0, _l = this.NotesDico[nextNoteRef].note.get_configurations(); _k < _l.length; _k++) {
                            var nextConfig = _l[_k];
                            NextRef = nextConfig.get_ref();
                            NextDelay = nextConfig.get_delay();
                            DelayVarValid = (Math.abs(CurrentDelay - NextDelay) / CurrentDelay) < this.maxdelayvar;
                            if (nextConfig.IsValid(this.errormax, this.delaymin_s, this.delaymax_s) && DelayVarValid) {
                                WeightDelay = Math.sqrt(Math.pow(10.0 * Math.log10(NextDelay) - 10.0 * Math.log10(CurrentDelay), 2.0) + Math.pow(TotLengthComb, 2.0));
                                Weight = (1.0 - WeightAdjust) * WeightDelay + WeightAdjust * CombError;
                                this.graph.addEdge(CurrentRef, NextRef, Weight);
                            }
                        }
                    }
                }
            }
        }
        // Delete vertex with no edges
        this.graph.deleteUselessVertices("EndPoint");
    };
    RhythmDetector.prototype._GetConfFromConfRef = function (confRef) {
        for (var noteref in this.NotesDico) {
            for (var _i = 0, _a = this.NotesDico[noteref].note.get_configurations(); _i < _a.length; _i++) {
                var config = _a[_i];
                if (config.get_ref() === confRef) {
                    return config;
                }
            }
        }
        return;
    };
    RhythmDetector.prototype.H_GetOptimalPath = function () {
        this.BestPath = [];
        var config;
        var BestPathFound = this.graph.getDijstraShortestPath('StartPoint', 'EndPoint');
        console.log(BestPathFound);
        this.BestPath = [];
        for (var k = 1; k < BestPathFound.length - 1; k++) {
            config = this._GetConfFromConfRef(BestPathFound[k]);
            this.BestPath.push(config);
        }
    };
    RhythmDetector.prototype._FindBestPathConfiguration = function () {
        var ListBeats = [];
        var ListBestComb = [];
        var ListNotesRef = [];
        for (var _i = 0, _a = this.BestPath; _i < _a.length; _i++) {
            var config = _a[_i];
            ListBeats.push(config.get_nbbeats());
            ListBestComb.push(config.get_bestoption().key);
            ListNotesRef = ListNotesRef.concat(config.get_path());
        }
        var MeasureConfiguration = [];
        var _loop_1 = function (BeatPerMeasure) {
            var _loop_2 = function (NbRestsToAdded) {
                var TestedConfig = ListBeats.slice();
                for (var k = 0; k < NbRestsToAdded; k++) {
                    TestedConfig.unshift(1.0);
                }
                for (var k = 1; k < TestedConfig.length; k++) {
                    TestedConfig[k] = TestedConfig[k] + TestedConfig[k - 1];
                }
                var UnlinkedCombs = [];
                var MeasureNumber = 0;
                TestedConfig.forEach(function (nb_beat, index) {
                    var NbMeasureTemp = Math.floor(nb_beat / BeatPerMeasure);
                    if (NbMeasureTemp > MeasureNumber) {
                        if (nb_beat % BeatPerMeasure != 0) {
                            UnlinkedCombs.push(ListBestComb[index - NbRestsToAdded]);
                        }
                        MeasureNumber = NbMeasureTemp;
                    }
                });
                MeasureConfiguration.push({ 'BeatPerMeasure': BeatPerMeasure, 'NbRestsAdded': NbRestsToAdded, 'UnlinkedCombs': UnlinkedCombs });
            };
            for (var NbRestsToAdded = 0; NbRestsToAdded < (BeatPerMeasure - ListBeats[0] + 1); NbRestsToAdded++) {
                _loop_2(NbRestsToAdded);
            }
        };
        for (var _b = 0, _c = [3, 4, 5]; _b < _c.length; _b++) {
            var BeatPerMeasure = _c[_b];
            _loop_1(BeatPerMeasure);
        }
        var BEST_Nb_EN_QN_EN = Number.POSITIVE_INFINITY;
        var BEST_Nb_DQN_EN = Number.POSITIVE_INFINITY;
        var BEST_Nb_1NOTE_2BEATS = Number.POSITIVE_INFINITY;
        var BEST_NbLinked = Number.POSITIVE_INFINITY;
        var BEST_NbBeatsPerMeasure = Number.POSITIVE_INFINITY;
        var BEST_NbRestsAdded = Number.POSITIVE_INFINITY;
        for (var _d = 0, MeasureConfiguration_1 = MeasureConfiguration; _d < MeasureConfiguration_1.length; _d++) {
            var measureconf = MeasureConfiguration_1[_d];
            var Nb_EN_QN_EN = measureconf['UnlinkedCombs'].filter(function (comb) { return comb === "EN_QN_EN"; }).length;
            var Nb_DQN_EN = measureconf['UnlinkedCombs'].filter(function (comb) { return comb === "DQN_EN"; }).length;
            var Nb_1NOTE_2BEATS = measureconf['UnlinkedCombs'].filter(function (comb) { return comb === "1NOTE_2BEATS"; }).length;
            var NbLinked = measureconf['UnlinkedCombs'].length;
            var NbBeatsPerMeasure = measureconf['BeatPerMeasure'];
            var NbRestsAdded = measureconf['NbRestsAdded'];
            if (Nb_EN_QN_EN < BEST_Nb_EN_QN_EN) {
                BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
                BEST_Nb_DQN_EN = Nb_DQN_EN;
                BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
                BEST_NbLinked = NbLinked;
                BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
                BEST_NbRestsAdded = NbRestsAdded;
            }
            if (Nb_EN_QN_EN > BEST_Nb_EN_QN_EN) {
                continue;
            }
            if (Nb_DQN_EN < BEST_Nb_DQN_EN) {
                BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
                BEST_Nb_DQN_EN = Nb_DQN_EN;
                BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
                BEST_NbLinked = NbLinked;
                BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
                BEST_NbRestsAdded = NbRestsAdded;
            }
            if (Nb_DQN_EN > BEST_Nb_DQN_EN) {
                continue;
            }
            if (Nb_1NOTE_2BEATS < BEST_Nb_1NOTE_2BEATS) {
                BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
                BEST_Nb_DQN_EN = Nb_DQN_EN;
                BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
                BEST_NbLinked = NbLinked;
                BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
                BEST_NbRestsAdded = NbRestsAdded;
            }
            if (Nb_1NOTE_2BEATS > BEST_Nb_1NOTE_2BEATS) {
                continue;
            }
            if (NbLinked < BEST_NbLinked) {
                BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
                BEST_Nb_DQN_EN = Nb_DQN_EN;
                BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
                BEST_NbLinked = NbLinked;
                BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
                BEST_NbRestsAdded = NbRestsAdded;
            }
            if (NbLinked > BEST_NbLinked) {
                continue;
            }
            if (NbBeatsPerMeasure < BEST_NbBeatsPerMeasure) {
                BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
                BEST_Nb_DQN_EN = Nb_DQN_EN;
                BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
                BEST_NbLinked = NbLinked;
                BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
                BEST_NbRestsAdded = NbRestsAdded;
            }
            if (NbBeatsPerMeasure > BEST_NbBeatsPerMeasure) {
                continue;
            }
            if (NbRestsAdded < BEST_NbRestsAdded) {
                BEST_Nb_EN_QN_EN = Nb_EN_QN_EN;
                BEST_Nb_DQN_EN = Nb_DQN_EN;
                BEST_Nb_1NOTE_2BEATS = Nb_1NOTE_2BEATS;
                BEST_NbLinked = NbLinked;
                BEST_NbBeatsPerMeasure = NbBeatsPerMeasure;
                BEST_NbRestsAdded = NbRestsAdded;
            }
        }
        // Adding rest at the beginning of the score
        for (var k = 0; k < BEST_NbRestsAdded; k++) {
            ListBestComb.unshift('1REST_1BEAT');
            ListNotesRef.unshift('FAKE_REST');
        }
        return { 'beat_per_measure': BEST_NbBeatsPerMeasure, 'list_combination_keys': ListBestComb, 'list_note_refs': ListNotesRef };
    };
    RhythmDetector.prototype._GenerateMusicXMLScore = function (author, title) {
        var _this = this;
        var score;
        if (this.BestPath.length === 0) {
            return null;
        }
        // Get: - number of beat per measure, - list of best combination key, - list of note references
        var PathConfig = this._FindBestPathConfiguration();
        var ListMeasures = GetListNotesFromListComb(PathConfig['list_combination_keys'], PathConfig['beat_per_measure']);
        // Create a partition
        var ScoreXML = new _shared_music_xml__WEBPACK_IMPORTED_MODULE_3__["MusicXml"](title, author);
        // Create the parts
        var IdPart1 = "P1";
        ScoreXML.AddPart(IdPart1, "Solo");
        // Attributes
        var ClefLine = 2;
        if (this.clef === 'F') {
            ClefLine = 4;
        }
        var E_attributes = Object(_shared_music_xml__WEBPACK_IMPORTED_MODULE_3__["CreateAttributesElement"])({
            "divisions": COMBINATIONS_DIVISION,
            "key_fifths": this.fifths,
            "key_mode": "major",
            "time_beats": PathConfig['beat_per_measure'],
            "time_beattype": 4,
            "clef_sign": this.clef,
            "clef_line": ClefLine
        });
        // Part 1
        ListMeasures.forEach(function (measure, IndMeasure) {
            ScoreXML.AddMeasure(IdPart1);
            if (IndMeasure == 0) {
                ScoreXML.AddAttributes(IdPart1, E_attributes);
            }
            for (var _i = 0, measure_1 = measure; _i < measure_1.length; _i++) {
                var notecomb = measure_1[_i];
                for (var _a = 0, notecomb_1 = notecomb; _a < notecomb_1.length; _a++) {
                    var note = notecomb_1[_a];
                    if (note['pitchORrest'] == 'rest') {
                        ScoreXML.AddNote(IdPart1, Object(_shared_music_xml__WEBPACK_IMPORTED_MODULE_3__["CreateNoteElement"])("rest", note['duration'], note['type']));
                    }
                    else {
                        var KeyNote = PathConfig['list_note_refs'][note['indice']];
                        var NoteInfo = _this.NotesDico[KeyNote].note.GetStepAlterOctave(_this.fifths);
                        ScoreXML.AddNote(IdPart1, Object(_shared_music_xml__WEBPACK_IMPORTED_MODULE_3__["CreateNoteElement"])("pitch", note['duration'], note['type'], NoteInfo['step'], NoteInfo['octave'], NoteInfo['alter'], note['dot'], note['triplet'], note['beam']));
                    }
                }
            }
        });
        // Writting the file
        score = ScoreXML.tostring();
        return score;
    };
    RhythmDetector.prototype._GetMeanDelayPath = function () {
        var MeanDelay = 0.0;
        var nbtotbeats = 0;
        for (var _i = 0, _a = this.BestPath; _i < _a.length; _i++) {
            var config = _a[_i];
            var delay = config.get_delay();
            var nbbeats = config.get_nbbeats();
            MeanDelay += delay * nbbeats;
            nbtotbeats += nbbeats;
        }
        MeanDelay = MeanDelay / nbtotbeats;
        return MeanDelay;
    };
    RhythmDetector.prototype._GenerateMidiScore = function () {
        var _this = this;
        if (this.BestPath.length === 0) {
            return null;
        }
        // Get: - number of beat per measure, - list of best combination key, - list of note references
        var PathConfig = this._FindBestPathConfiguration();
        var ListMeasures = GetListNotesFromListComb(PathConfig['list_combination_keys'], PathConfig['beat_per_measure']);
        var MeanDelay = this._GetMeanDelayPath();
        // Ticks per quarter note
        var PPQ = 480;
        // microseconds per quarter note
        var Tempo = Math.round(MeanDelay * 1e6);
        var midi_score = new _shared_midi__WEBPACK_IMPORTED_MODULE_4__["Midi"](PPQ);
        midi_score.AddTrack();
        midi_score.Tracks[0].AddDeltaTime(0);
        midi_score.Tracks[0].AddMetaEvent("Set Tempo", Tempo);
        midi_score.Tracks[0].AddDeltaTime(0);
        midi_score.Tracks[0].AddMetaEvent("Time Signature", [PathConfig['beat_per_measure'], 4, COMBINATIONS_DIVISION, 8]);
        midi_score.Tracks[0].AddDeltaTime(0);
        midi_score.Tracks[0].AddMetaEvent("End of Track");
        midi_score.AddTrack();
        midi_score.Tracks[1].AddDeltaTime(0);
        midi_score.Tracks[1].AddMetaEvent("Sequence/Track Name", "Main track");
        midi_score.Tracks[1].AddDeltaTime(0);
        midi_score.Tracks[1].AddMidiEvent("Program Change", [1]);
        var DeltaTimeTicks = 0;
        ListMeasures.forEach(function (measure, IndMeasure) {
            var _a;
            for (var _i = 0, measure_2 = measure; _i < measure_2.length; _i++) {
                var notecomb = measure_2[_i];
                for (var _b = 0, notecomb_2 = notecomb; _b < notecomb_2.length; _b++) {
                    var note = notecomb_2[_b];
                    var Duration_NbTicks = Math.round((note['duration'] * 1.0 / COMBINATIONS_DIVISION) * PPQ);
                    if (note['pitchORrest'] === 'rest') {
                        DeltaTimeTicks += Duration_NbTicks;
                    }
                    else {
                        var KeyNote = PathConfig['list_note_refs'][note['indice']];
                        var IntHeight = void 0;
                        var Octave = void 0;
                        _a = _this.NotesDico[KeyNote].note.GetRoundedHeightAndOctave(), IntHeight = _a[0], Octave = _a[1];
                        var KEY = Math.round(Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["ConvertNoteAndOctaveToSemitone"])(IntHeight, Octave));
                        midi_score.Tracks[1].AddNote(DeltaTimeTicks, Duration_NbTicks, KEY, 120);
                        DeltaTimeTicks = 0;
                    }
                }
            }
        });
        midi_score.Tracks[1].AddDeltaTime(0);
        midi_score.Tracks[1].AddMetaEvent("End of Track");
        var score_content = midi_score.GenerateMidiArray();
        return score_content;
    };
    RhythmDetector.prototype._GenerateMidiScore_norythm = function () {
        var _a;
        // Ticks per quarter note
        var PPQ = 480;
        // microseconds per quarter note
        var Tempo = 1000000;
        var midi_score = new _shared_midi__WEBPACK_IMPORTED_MODULE_4__["Midi"](PPQ);
        midi_score.AddTrack();
        midi_score.Tracks[0].AddDeltaTime(0);
        midi_score.Tracks[0].AddMetaEvent("Set Tempo", Tempo);
        midi_score.Tracks[0].AddDeltaTime(0);
        midi_score.Tracks[0].AddMetaEvent("End of Track");
        midi_score.AddTrack();
        midi_score.Tracks[1].AddDeltaTime(0);
        midi_score.Tracks[1].AddMetaEvent("Sequence/Track Name", "Main track");
        midi_score.Tracks[1].AddDeltaTime(0);
        midi_score.Tracks[1].AddMidiEvent("Program Change", [1]);
        // Finding the first note
        var CurrentNoteRef = null;
        for (var noteref in this.NotesDico) {
            if ((noteref[0] === 'N') || (noteref[0] === 'S')) {
                // If previous == 0 ==> it's a note at the beginning of the score
                var previousNotes = this.NotesDico[noteref].previous.filter(function (ref) { return ref[0] !== 'F'; });
                if (previousNotes.length === 0) {
                    CurrentNoteRef = noteref;
                    break;
                }
            }
        }
        var DeltaTimeTicks = 0;
        while (CurrentNoteRef != null) {
            var NoteLength = this.NotesDico[CurrentNoteRef].note.get_analoglength();
            var Duration_NbTicks = Math.round(NoteLength * PPQ);
            if (!this.NotesDico[CurrentNoteRef].note.is_note()) {
                DeltaTimeTicks += Duration_NbTicks;
            }
            else {
                var IntHeight = void 0;
                var Octave = void 0;
                _a = this.NotesDico[CurrentNoteRef].note.GetRoundedHeightAndOctave(), IntHeight = _a[0], Octave = _a[1];
                var KEY = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["ConvertNoteAndOctaveToSemitone"])(IntHeight, Octave);
                midi_score.Tracks[1].AddNote(DeltaTimeTicks, Duration_NbTicks, KEY, 120);
                DeltaTimeTicks = 0;
            }
            // Next note
            CurrentNoteRef = this.NotesDico[CurrentNoteRef].next.find(function (ref) { return (ref[0] === 'N') || (ref[0] === 'R'); });
        }
        midi_score.Tracks[1].AddDeltaTime(0);
        midi_score.Tracks[1].AddMetaEvent("End of Track");
        var score_content = midi_score.GenerateMidiArray();
        return score_content;
    };
    RhythmDetector.prototype.I_GenerateScore = function () {
        var S_XML;
        var MIDI;
        var MIDI_NR;
        S_XML = this._GenerateMusicXMLScore("scorelisto.com", "Untitled");
        MIDI = this._GenerateMidiScore();
        MIDI_NR = this._GenerateMidiScore_norythm();
        return { score_musicxml: S_XML, score_midi: MIDI, score_midinorhythm: MIDI_NR };
    };
    RhythmDetector.prototype.run = function (stepResult, debug) {
        var _this = this;
        if (debug === void 0) { debug = false; }
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            var SCORES;
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Building class with notes");
                console.log("/////////////////////////////////////");
            }
            _this.init_set_notes(stepResult);
            if (debug) {
                console.log("    Dictionary of notes created:");
                console.log(_this.NotesDico);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Minimizing notes height errors");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 1, total: 10, step: "Minimizing pitch errors" } });
            _this.A_MinimizeHeightError();
            if (debug) {
                console.log("    Dictionary of notes:");
                console.log(_this.NotesDico);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Auto detecting the fifth");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 2, total: 10, step: "Auto-Detecting optimal fifth" } });
            _this.B_AutoSetFifths();
            if (debug) {
                console.log("    Fifth detected:");
                console.log(_this.fifths);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Auto detecting clef");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 3, total: 10, step: "Auto-Detecting optimal clef" } });
            _this.C_AutoSetClef();
            if (debug) {
                console.log("    Clef detected:");
                console.log(_this.clef);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Auto detecting octave");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 4, total: 10, step: "Auto-Detecting optimal octave" } });
            _this.D_AutoTranslateOctave();
            if (debug) {
                console.log("    Octave detected, dictionary of notes:");
                console.log(_this.NotesDico);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Listing all possible configurations of rhythm");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 5, total: 10, step: "Listing all possibles rhythms for each note" } });
            _this.E_GetConfigurationsForAllNotes();
            if (debug) {
                console.log("    Dictionary of notes:");
                console.log(_this.NotesDico);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Masking unwanted rhythms");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 6, total: 10, step: "Masking unwanted rhythms" } });
            _this.F_MaskCOMBINATIONS();
            if (debug) {
                console.log("    Dictionary of notes:");
                console.log(_this.NotesDico);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Building Dijkstra Graph");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 7, total: 10, step: "Building graph of all possibles scores" } });
            _this.G_BuildGraph();
            if (debug) {
                console.log("    Graph:");
                console.log(_this.graph);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Searching best path");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 8, total: 10, step: "Searching best score configuration" } });
            _this.H_GetOptimalPath();
            if (debug) {
                console.log("    Best path:");
                console.log(_this.BestPath);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Rhythm detector: Creatng scores");
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 9, total: 10, step: "Writting scores" } });
            SCORES = _this.I_GenerateScore();
            if (debug) {
                console.log(SCORES);
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 10, total: 10, step: "Finished" } });
            observer.next({ result: SCORES });
            observer.complete();
        });
    };
    return RhythmDetector;
}());

var Configuration = /** @class */ (function () {
    function Configuration(NbNotes, NbBeats, Delay, path, Ref) {
        if (Ref === void 0) { Ref = ''; }
        this.delay = Delay;
        this.nbbeats = NbBeats;
        this.nbnotes = NbNotes;
        this.path = path.slice();
        this.ref = Ref;
        this.options = [];
    }
    Configuration.prototype.get_delay = function () {
        return this.delay;
    };
    Configuration.prototype.get_nbbeats = function () {
        return this.nbbeats;
    };
    Configuration.prototype.get_nbnotes = function () {
        return this.nbnotes;
    };
    Configuration.prototype.get_ref = function () {
        return this.ref;
    };
    Configuration.prototype.set_ref = function (ref) {
        this.ref = ref;
    };
    Configuration.prototype.get_path = function () {
        return this.path;
    };
    Configuration.prototype.get_last_path_ref = function () {
        return this.path[this.path.length - 1];
    };
    Configuration.prototype.get_nboptions = function () {
        return this.options.length;
    };
    Configuration.prototype.get_options = function () {
        return this.options;
    };
    Configuration.prototype.get_bestoption = function () {
        var error_min = Number.MAX_VALUE;
        var best_option;
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.mask == false) {
                if (option.error < error_min) {
                    error_min = option.error;
                    best_option = option;
                }
            }
        }
        return best_option;
    };
    Configuration.prototype.AtLeastOneUnmaskOption = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.mask == false) {
                return true;
            }
        }
        return false;
    };
    Configuration.prototype.KeycombAlreadyAdded = function (key) {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var combination = _a[_i];
            if (combination.key === key) {
                return true;
            }
        }
        return false;
    };
    Configuration.prototype.IsValid = function (ErrorMax, DelayMin, DelayMax) {
        if ((this.delay > DelayMax) || (this.delay < DelayMin)) {
            return false;
        }
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var combination = _a[_i];
            if ((combination.mask == false) && (combination.error < ErrorMax)) {
                return true;
            }
        }
        return false;
    };
    Configuration.prototype.AddOption = function (option) {
        if (this.KeycombAlreadyAdded(option.key)) {
            console.log("Trying to add a combination that is already in there");
        }
        this.options.push(option);
    };
    return Configuration;
}());

var COMBINATIONS_DIVISION = 24;
var LENGTH_WHOLE = COMBINATIONS_DIVISION * 4;
var LENGTH_HALF = COMBINATIONS_DIVISION * 2;
var LENGTH_QUARTER = COMBINATIONS_DIVISION;
var LENGTH_EIGHTH = COMBINATIONS_DIVISION / 2;
var LENGTH_16TH = COMBINATIONS_DIVISION / 4;
var LENGTH_T_EIGHTH = COMBINATIONS_DIVISION / 3;
var LENGTH_T_16TH = COMBINATIONS_DIVISION / 6;
var COMBINATIONS = {
    // 1 NOTE
    ////////////////////////////////////////////////////////////////////////////////////////////
    '1NOTE_1BEAT': { 'notelengths': [LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 1, 'notetypes': ['note'], 'triplet': false },
    '1REST_1BEAT': { 'notelengths': [LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 1, 'notetypes': ['rest'], 'triplet': false },
    '1NOTE_2BEATS': { 'notelengths': [LENGTH_HALF], 'nbnotes': 1, 'nbbeats': 2, 'notetypes': ['note'], 'triplet': false },
    '1REST_2BEATS': { 'notelengths': [LENGTH_HALF], 'nbnotes': 1, 'nbbeats': 2, 'notetypes': ['rest'], 'triplet': false },
    '1NOTE_3BEATS': { 'notelengths': [LENGTH_HALF + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 3, 'notetypes': ['note'], 'triplet': false },
    '1REST_3BEATS': { 'notelengths': [LENGTH_HALF + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 3, 'notetypes': ['rest'], 'triplet': false },
    '1NOTE_4BEATS': { 'notelengths': [LENGTH_WHOLE], 'nbnotes': 1, 'nbbeats': 4, 'notetypes': ['note'], 'triplet': false },
    '1REST_4BEATS': { 'notelengths': [LENGTH_WHOLE], 'nbnotes': 1, 'nbbeats': 4, 'notetypes': ['rest'], 'triplet': false },
    '1NOTE_5BEATS': { 'notelengths': [LENGTH_WHOLE + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 5, 'notetypes': ['note'], 'triplet': false },
    '1REST_5BEATS': { 'notelengths': [LENGTH_WHOLE + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 5, 'notetypes': ['rest'], 'triplet': false },
    '1NOTE_6BEATS': { 'notelengths': [LENGTH_WHOLE + LENGTH_HALF], 'nbnotes': 1, 'nbbeats': 6, 'notetypes': ['note'], 'triplet': false },
    '1REST_6BEATS': { 'notelengths': [LENGTH_WHOLE + LENGTH_HALF], 'nbnotes': 1, 'nbbeats': 6, 'notetypes': ['rest'], 'triplet': false },
    '1NOTE_7BEATS': { 'notelengths': [LENGTH_WHOLE + LENGTH_HALF + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 7, 'notetypes': ['note'], 'triplet': false },
    '1REST_7BEATS': { 'notelengths': [LENGTH_WHOLE + LENGTH_HALF + LENGTH_QUARTER], 'nbnotes': 1, 'nbbeats': 7, 'notetypes': ['rest'], 'triplet': false },
    '1NOTE_8BEATS': { 'notelengths': [LENGTH_WHOLE + LENGTH_WHOLE], 'nbnotes': 1, 'nbbeats': 8, 'notetypes': ['note'], 'triplet': false },
    '1REST_8BEATS': { 'notelengths': [LENGTH_WHOLE + LENGTH_WHOLE], 'nbnotes': 1, 'nbbeats': 8, 'notetypes': ['rest'], 'triplet': false },
    // 2 NOTES
    ////////////////////////////////////////////////////////////////////////////////////////////
    // 1 BEAT
    'EN_EN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['note', 'note'], 'triplet': false },
    'ER_EN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['rest', 'note'], 'triplet': false },
    'EN_ER': { 'notelengths': [LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['note', 'rest'], 'triplet': false },
    'DEN_SN': { 'notelengths': [LENGTH_EIGHTH + LENGTH_16TH, LENGTH_16TH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['note', 'note'], 'triplet': false },
    'SN_DEN': { 'notelengths': [LENGTH_16TH, LENGTH_EIGHTH + LENGTH_16TH], 'nbnotes': 2, 'nbbeats': 1, 'notetypes': ['note', 'note'], 'triplet': false },
    // 2 BEATS
    'DQN_EN': { 'notelengths': [LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 2, 'notetypes': ['note', 'note'], 'triplet': false },
    'QR-ER_EN': { 'notelengths': [LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 2, 'notetypes': ['rest', 'note'], 'triplet': false },
    'DQN_ER': { 'notelengths': [LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 2, 'notetypes': ['note', 'rest'], 'triplet': false },
    'EN_EN-QN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_QUARTER + LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 2, 'notetypes': ['note', 'note'], 'triplet': false },
    // 3 BEATS
    'QN-DQN_EN': { 'notelengths': [LENGTH_HALF + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 3, 'notetypes': ['note', 'note'], 'triplet': false },
    'QR-QR-ER_EN': { 'notelengths': [LENGTH_HALF + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 3, 'notetypes': ['rest', 'note'], 'triplet': false },
    'QN-DQN_ER': { 'notelengths': [LENGTH_HALF + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 3, 'notetypes': ['note', 'rest'], 'triplet': false },
    'EN_EN-HN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_HALF + LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 3, 'notetypes': ['note', 'note'], 'triplet': false },
    // 4 BEATS
    'HN-DQN_EN': { 'notelengths': [LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 4, 'notetypes': ['note', 'note'], 'triplet': false },
    'QR-QR-QR-ER_EN': { 'notelengths': [LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 4, 'notetypes': ['rest', 'note'], 'triplet': false },
    'HN-DQN_ER': { 'notelengths': [LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 4, 'notetypes': ['note', 'rest'], 'triplet': false },
    'EN_EN-DHN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH], 'nbnotes': 2, 'nbbeats': 4, 'notetypes': ['note', 'note'], 'triplet': false },
    // 3 NOTES
    ////////////////////////////////////////////////////////////////////////////////////////////
    // 1 BEAT
    'EN_SN_SN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': false },
    'ER_SN_SN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['rest', 'note', 'note'], 'triplet': false },
    'SN_SN_EN': { 'notelengths': [LENGTH_16TH, LENGTH_16TH, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': false },
    'SN_SN_ER': { 'notelengths': [LENGTH_16TH, LENGTH_16TH, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'rest'], 'triplet': false },
    'SN_EN_SN': { 'notelengths': [LENGTH_16TH, LENGTH_EIGHTH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': false },
    'T_EN_EN_EN': { 'notelengths': [LENGTH_T_EIGHTH, LENGTH_T_EIGHTH, LENGTH_T_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true },
    'T_EN_DEN_SN': { 'notelengths': [LENGTH_T_EIGHTH, LENGTH_EIGHTH, LENGTH_T_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true },
    'T_EN_SN_DEN': { 'notelengths': [LENGTH_T_EIGHTH, LENGTH_T_16TH, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true },
    'T_SN_EN_DEN': { 'notelengths': [LENGTH_T_16TH, LENGTH_T_EIGHTH, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true },
    'T_SN_DEN_EN': { 'notelengths': [LENGTH_T_16TH, LENGTH_EIGHTH, LENGTH_T_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true },
    'T_DEN_EN_SN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_T_EIGHTH, LENGTH_T_16TH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true },
    'T_DEN_SN_EN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_T_16TH, LENGTH_T_EIGHTH], 'nbnotes': 3, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note'], 'triplet': true },
    // 2 BEATS
    'EN_QN_EN': { 'notelengths': [LENGTH_EIGHTH, LENGTH_QUARTER, LENGTH_EIGHTH], 'nbnotes': 3, 'nbbeats': 2, 'notetypes': ['note', 'note', 'note'], 'triplet': false },
    'DQN_SN_SN': { 'notelengths': [LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 2, 'notetypes': ['note', 'note', 'note'], 'triplet': false },
    // 3 BEATS
    'QN-DQN_SN_SN': { 'notelengths': [LENGTH_HALF + LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 3, 'notetypes': ['note', 'note', 'note'], 'triplet': false },
    // 4 BEATS
    'HN-DQN_SN_SN': { 'notelengths': [LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 3, 'nbbeats': 4, 'notetypes': ['note', 'note', 'note'], 'triplet': false },
    // 4 NOTES
    ////////////////////////////////////////////////////////////////////////////////////////////
    // 1 BEAT
    'SN_SN_SN_SN': { 'notelengths': [LENGTH_16TH, LENGTH_16TH, LENGTH_16TH, LENGTH_16TH], 'nbnotes': 4, 'nbbeats': 1, 'notetypes': ['note', 'note', 'note', 'note'], 'triplet': false }
};
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
function ConvertAllowedRhythmsToMaskDico(allowedRhythms) {
    var combination_to_mask = {
        '1NOTE_1BEAT': !allowedRhythms.onenoteonebeat,
        '1REST_1BEAT': !allowedRhythms.onerestonebeat,
        '1NOTE_2BEATS': !allowedRhythms.onenotetwobeat,
        '1REST_2BEATS': !allowedRhythms.oneresttwobeat,
        '1NOTE_3BEATS': !allowedRhythms.onenotethreebeat,
        '1REST_3BEATS': !allowedRhythms.onerestthreebeat,
        '1NOTE_4BEATS': !allowedRhythms.onenotefourbeat,
        '1REST_4BEATS': !allowedRhythms.onerestfourbeat,
        '1NOTE_5BEATS': !allowedRhythms.onenotefivebeat,
        '1REST_5BEATS': !allowedRhythms.onerestfivebeat,
        '1NOTE_6BEATS': !allowedRhythms.onenotesixbeat,
        '1REST_6BEATS': !allowedRhythms.onerestsixbeat,
        '1NOTE_7BEATS': !allowedRhythms.onenotesevenbeat,
        '1REST_7BEATS': !allowedRhythms.onerestsevenbeat,
        '1NOTE_8BEATS': !allowedRhythms.onenoteeightbeat,
        '1REST_8BEATS': !allowedRhythms.oneresteightbeat,
        'EN_EN': !allowedRhythms.en_en,
        'ER_EN': !allowedRhythms.er_en,
        'EN_ER': !allowedRhythms.en_er,
        'DEN_SN': !allowedRhythms.den_sn,
        'SN_DEN': !allowedRhythms.sn_den,
        'DQN_EN': !allowedRhythms.dqn_en,
        'QR-ER_EN': !allowedRhythms.qr_er_en,
        'DQN_ER': !allowedRhythms.dqn_er,
        'EN_EN-QN': !allowedRhythms.en_en_qn,
        'QN-DQN_EN': !allowedRhythms.qn_dqn_en,
        'QR-QR-ER_EN': !allowedRhythms.qr_qr_er_en,
        'QN-DQN_ER': !allowedRhythms.qn_dqn_er,
        'EN_EN-HN': !allowedRhythms.en_en_hn,
        'HN-DQN_EN': !allowedRhythms.hn_dqn_en,
        'QR-QR-QR-ER_EN': !allowedRhythms.qr_qr_qr_er_en,
        'HN-DQN_ER': !allowedRhythms.hn_dqn_er,
        'EN_EN-DHN': !allowedRhythms.en_en_dhn,
        'EN_SN_SN': !allowedRhythms.en_sn_sn,
        'ER_SN_SN': !allowedRhythms.er_sn_sn,
        'SN_SN_EN': !allowedRhythms.sn_sn_en,
        'SN_SN_ER': !allowedRhythms.sn_sn_er,
        'SN_EN_SN': !allowedRhythms.sn_en_sn,
        'T_EN_EN_EN': !allowedRhythms.t_en_en_en,
        'T_EN_DEN_SN': !allowedRhythms.t_en_den_sn,
        'T_EN_SN_DEN': !allowedRhythms.t_en_sn_den,
        'T_SN_EN_DEN': !allowedRhythms.t_sn_en_den,
        'T_SN_DEN_EN': !allowedRhythms.t_sn_den_en,
        'T_DEN_EN_SN': !allowedRhythms.t_den_en_sn,
        'T_DEN_SN_EN': !allowedRhythms.t_den_sn_en,
        'EN_QN_EN': !allowedRhythms.en_qn_en,
        'DQN_SN_SN': !allowedRhythms.dqn_sn_sn,
        'QN-DQN_SN_SN': !allowedRhythms.qn_dqn_sn_sn,
        'HN-DQN_SN_SN': !allowedRhythms.hn_dqn_sn_sn,
        'SN_SN_SN_SN': !allowedRhythms.sn_sn_sn_sn
    };
    return combination_to_mask;
}
function NoteTypesCorrespond(arrayOne, arrayTwo) {
    if (arrayOne.length != arrayTwo.length) {
        return false;
    }
    for (var k = 0; k < arrayOne.length; k++) {
        if (arrayOne[k] !== arrayTwo[k]) {
            return false;
        }
    }
    return true;
}
function CombinationExists(keyComb) {
    return (keyComb in COMBINATIONS);
}
function CalculateRatio(keyComb) {
    if (!CombinationExists(keyComb)) {
        console.log("The combination doesn't exists");
    }
    var IdealRatio = [];
    for (var k = 0; k < COMBINATIONS[keyComb]['notelengths'].length; k++) {
        IdealRatio.push(COMBINATIONS[keyComb]['notelengths'][k] / (COMBINATIONS_DIVISION * COMBINATIONS[keyComb]['nbbeats']));
    }
    return IdealRatio;
}
function CalculateError(keyComb, NoteLengths) {
    if (!CombinationExists(keyComb)) {
        console.log("The combination doesn't exists");
    }
    if (NoteLengths.length != COMBINATIONS[keyComb]['notelengths'].length) {
        console.log("Length of array does not match");
        return;
    }
    var TotLength = NoteLengths.reduce(function (a, b) { return a + b; }, 0);
    var IdealRatio = CalculateRatio(keyComb);
    var IdealLength;
    var ErrorLength;
    var TotalError = 0;
    for (var k = 0; k < COMBINATIONS[keyComb]['notelengths'].length; k++) {
        IdealLength = IdealRatio[k] * TotLength;
        ErrorLength = Math.abs(IdealLength - NoteLengths[k]) * COMBINATIONS[keyComb]['nbbeats'];
        TotalError += Math.sqrt(Math.pow(IdealLength, 2.0) + Math.pow(ErrorLength, 2.0));
    }
    return TotalError;
}
function GetListIndicesFromListComb(KeyCombList) {
    var CombNotesIndices = [0];
    KeyCombList.forEach(function (KeyComb, kComb) {
        var IndBefore = CombNotesIndices[CombNotesIndices.length - 1];
        if (kComb != KeyCombList.length - 1) {
            CombNotesIndices.push(IndBefore + COMBINATIONS[KeyComb]['nbnotes']);
        }
    });
    return CombNotesIndices;
}
function DivideCombination(KeyComb, BeatStart, BeatEnd) {
    var OriginalLengths = COMBINATIONS[KeyComb]['notelengths'].slice();
    var CutLengths = COMBINATIONS[KeyComb]['notelengths'].slice();
    var NoteTypes = COMBINATIONS[KeyComb]['notetypes'].slice();
    var OffsetStartIndice = 0;
    var NbTicksIgnore = BeatStart * COMBINATIONS_DIVISION;
    for (var _i = 0, OriginalLengths_1 = OriginalLengths; _i < OriginalLengths_1.length; _i++) {
        var value = OriginalLengths_1[_i];
        if (value == NbTicksIgnore) {
            CutLengths.splice(0, 1);
            NoteTypes.splice(0, 1);
            OffsetStartIndice += 1;
            NbTicksIgnore = 0;
            break;
        }
        else if (value < NbTicksIgnore) {
            CutLengths.splice(0, 1);
            NoteTypes.splice(0, 1);
            OffsetStartIndice += 1;
            NbTicksIgnore -= value;
        }
        else {
            CutLengths[0] -= NbTicksIgnore;
            break;
        }
    }
    var NbTicksToDelete = CutLengths.reduce(function (a, b) { return a + b; }, 0) - (BeatEnd - BeatStart) * COMBINATIONS_DIVISION;
    var MaxInd = CutLengths.length - 1;
    for (var ind = MaxInd; ind > -1; ind--) {
        if (CutLengths[ind] == NbTicksToDelete) {
            CutLengths.splice(ind, 1);
            NoteTypes.splice(ind, 1);
            break;
        }
        else if (CutLengths[ind] < NbTicksToDelete) {
            NbTicksToDelete -= CutLengths[ind];
            CutLengths.splice(ind, 1);
            NoteTypes.splice(ind, 1);
        }
        else {
            CutLengths[ind] -= NbTicksToDelete;
            break;
        }
    }
    return { 'lengths': CutLengths, 'types': NoteTypes, 'offset': OffsetStartIndice };
}
function LengthToDuration(Lengths, LengthsType, Triplet) {
    var lengths_notes = [];
    Lengths.forEach(function (length, ind) {
        var notetemp = [];
        var pitchORrest = LengthsType[ind];
        var SumDuration = 0;
        while (SumDuration < length) {
            if (length == (LENGTH_WHOLE + LENGTH_EIGHTH)) {
                // blanche pointée -> noire pointée :    4,5 beats
                notetemp.push({ 'duration': LENGTH_HALF + LENGTH_QUARTER, 'type': 'half', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
                notetemp.push({ 'duration': LENGTH_QUARTER + LENGTH_EIGHTH, 'type': 'quarter', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_WHOLE) {
                // ronde :                               4 beats
                notetemp.push({ 'duration': LENGTH_WHOLE, 'type': 'whole', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length == LENGTH_HALF + LENGTH_QUARTER + LENGTH_EIGHTH) {
                // blanche -> noire pointée :            3,5 beats
                notetemp.push({ 'duration': LENGTH_HALF, 'type': 'quarter', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
                notetemp.push({ 'duration': LENGTH_QUARTER + LENGTH_EIGHTH, 'type': 'quarter', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_HALF + LENGTH_QUARTER) {
                // blanche pointée :                     3 beats
                notetemp.push({ 'duration': LENGTH_HALF + LENGTH_QUARTER, 'type': 'half', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length == LENGTH_HALF + LENGTH_EIGHTH) {
                // noire -> noire pointée :              2,5 beats
                notetemp.push({ 'duration': LENGTH_QUARTER, 'type': 'quarter', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
                notetemp.push({ 'duration': LENGTH_QUARTER + LENGTH_EIGHTH, 'type': 'quarter', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_HALF) {
                // blanche :                             2 beats
                notetemp.push({ 'duration': LENGTH_HALF, 'type': 'half', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_QUARTER + LENGTH_EIGHTH) {
                // noire pointée :                       1,5 beats
                notetemp.push({ 'duration': LENGTH_QUARTER + LENGTH_EIGHTH, 'type': 'quarter', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_QUARTER) {
                // noire :                               1 beat
                notetemp.push({ 'duration': LENGTH_QUARTER, 'type': 'quarter', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_EIGHTH + LENGTH_16TH) {
                // croche pointée :                      0.75 beat
                notetemp.push({ 'duration': LENGTH_EIGHTH + LENGTH_16TH, 'type': 'eighth', 'dot': true, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_EIGHTH) {
                if (Triplet) {
                    // croche triolet pointée:              0.5 beat
                    notetemp.push({ 'duration': LENGTH_EIGHTH, 'type': 'eighth', 'dot': true, 'triplet': true, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
                }
                else {
                    // croche :                              0.5 beat
                    notetemp.push({ 'duration': LENGTH_EIGHTH, 'type': 'eighth', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
                }
            }
            else if (length >= LENGTH_T_EIGHTH) {
                // croche triolet :                      0.33 beat
                notetemp.push({ 'duration': LENGTH_T_EIGHTH, 'type': 'eighth', 'dot': false, 'triplet': true, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_16TH) {
                // double croche :                       0.25 beat
                notetemp.push({ 'duration': LENGTH_16TH, 'type': '16th', 'dot': false, 'triplet': false, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else if (length >= LENGTH_T_16TH) {
                // double croche triolet :               0.1666 beat
                notetemp.push({ 'duration': LENGTH_T_16TH, 'type': '16th', 'dot': false, 'triplet': true, 'pitchORrest': pitchORrest, 'beam': {}, 'indice': null });
            }
            else {
                console.log("Invalid input argument 'Lengths', the data value does not correspond to a known note rythm");
            }
            SumDuration = 0;
            for (var _i = 0, notetemp_1 = notetemp; _i < notetemp_1.length; _i++) {
                var note = notetemp_1[_i];
                SumDuration += note['duration'];
            }
        }
        if (SumDuration != length) {
            console.log("Error calculating the best note to write, wrong input values or not implemented rythm");
        }
        lengths_notes.push(notetemp);
    });
    return lengths_notes;
}
function AddBeamInformation(Notes, KeyComb) {
    if (['EN_EN', 'DEN_SN', 'SN_DEN'].some(function (key) { return key === KeyComb; })) {
        Notes[0][0]['beam'] = { '1': 'begin' };
        Notes[1][0]['beam'] = { '1': 'end' };
    }
    else if (['T_EN_EN_EN', 'T_EN_DEN_SN', 'T_EN_SN_DEN', 'T_SN_EN_DEN', 'T_SN_DEN_EN', 'T_DEN_EN_SN', 'T_DEN_SN_EN'].some(function (key) { return key === KeyComb; })) {
        Notes[0][0]['beam'] = { '1': 'begin' };
        Notes[1][0]['beam'] = { '1': 'continue' };
        Notes[2][0]['beam'] = { '1': 'end' };
    }
    else if (['EN_SN_SN'].some(function (key) { return key === KeyComb; })) {
        Notes[0][0]['beam'] = { '1': 'begin' };
        Notes[1][0]['beam'] = { '1': 'continue', '2': 'begin' };
        Notes[2][0]['beam'] = { '1': 'end', '2': 'end' };
    }
    else if (['ER_SN_SN'].some(function (key) { return key === KeyComb; })) {
        Notes[0][0]['beam'] = {};
        Notes[1][0]['beam'] = { '1': 'begin', '2': 'begin' };
        Notes[2][0]['beam'] = { '1': 'end', '2': 'end' };
    }
    else if (['SN_SN_EN'].some(function (key) { return key === KeyComb; })) {
        Notes[0][0]['beam'] = { '1': 'begin', '2': 'begin' };
        Notes[1][0]['beam'] = { '1': 'continue', '2': 'end' };
        Notes[2][0]['beam'] = { '1': 'end' };
    }
    else if (['SN_SN_ER'].some(function (key) { return key === KeyComb; })) {
        Notes[0][0]['beam'] = { '1': 'begin', '2': 'begin' };
        Notes[1][0]['beam'] = { '1': 'end', '2': 'end' };
        Notes[2][0]['beam'] = {};
    }
    else if (['SN_EN_SN'].some(function (key) { return key === KeyComb; })) {
        Notes[0][0]['beam'] = { '1': 'begin' };
        Notes[1][0]['beam'] = { '1': 'continue' };
        Notes[2][0]['beam'] = { '1': 'end' };
    }
    else if (['SN_SN_SN_SN'].some(function (key) { return key === KeyComb; })) {
        Notes[0][0]['beam'] = { '1': 'begin' };
        Notes[1][0]['beam'] = { '1': 'continue' };
        Notes[2][0]['beam'] = { '1': 'continue' };
        Notes[3][0]['beam'] = { '1': 'end' };
    }
}
function GetNotesFromCombination(KeyComb, BeatStart, BeatEnd) {
    if (!CombinationExists(KeyComb)) {
        console.log("ERROR: Invalid input argument, the combination doesn't exists");
    }
    if (BeatStart > BeatEnd) {
        console.log("ERROR: Invalid input argument, the starting beat cannot be superior than ending beat");
    }
    if (BeatStart < 0) {
        console.log("ERROR: Invalid input argument, beat indices cannot be negatives");
    }
    if (BeatEnd > COMBINATIONS[KeyComb]['nbbeats']) {
        console.log("ERROR: Invalid input argument, the indices of the ending beat exceed the number of beats of the selected combination");
    }
    var res = DivideCombination(KeyComb, BeatStart, BeatEnd);
    var CutLengths = res['lengths'];
    var NotesType = res['types'];
    var OffsetStartIndice = res['offset'];
    var notes = LengthToDuration(CutLengths, NotesType, COMBINATIONS[KeyComb]['triplet']);
    AddBeamInformation(notes, KeyComb);
    return { 'notes': notes, 'offset': OffsetStartIndice };
}
function GetListNotesFromListComb(KeyCombList, TimeBeat) {
    var NbBeatsPerComb = [];
    for (var _i = 0, KeyCombList_1 = KeyCombList; _i < KeyCombList_1.length; _i++) {
        var comb = KeyCombList_1[_i];
        NbBeatsPerComb.push(COMBINATIONS[comb]['nbbeats']);
    }
    var CombNotesIndices = GetListIndicesFromListComb(KeyCombList);
    var NbBeatsTotal = NbBeatsPerComb.reduce(function (a, b) { return a + b; }, 0);
    var NbBeatsDone = 0;
    var IndComb = 0;
    var IndBeatStart = 0;
    var MeasureBeatsRemaining = TimeBeat;
    var ListMeasures = [];
    var MeasureTemp = [];
    while (NbBeatsDone < NbBeatsTotal) {
        // Number of beat remaining in the current combination
        var CombBeatsRemaining = NbBeatsPerComb[IndComb] - IndBeatStart;
        // End Indice of the combination to consider
        var IndBeatEnd = void 0;
        if (CombBeatsRemaining < MeasureBeatsRemaining) {
            IndBeatEnd = NbBeatsPerComb[IndComb];
        }
        else {
            IndBeatEnd = IndBeatStart + MeasureBeatsRemaining;
        }
        // Get the correspondant notes
        var res = GetNotesFromCombination(KeyCombList[IndComb], IndBeatStart, IndBeatEnd);
        var NoteListTemp = res['notes'];
        var OffsetStartIndice = res['offset'];
        var noteind = OffsetStartIndice + CombNotesIndices[IndComb];
        for (var _a = 0, NoteListTemp_1 = NoteListTemp; _a < NoteListTemp_1.length; _a++) {
            var notes = NoteListTemp_1[_a];
            for (var _b = 0, notes_1 = notes; _b < notes_1.length; _b++) {
                var notetemp = notes_1[_b];
                notetemp['indice'] = noteind;
            }
            MeasureTemp.push(notes);
            noteind += 1;
        }
        // Adding the number ot beat done
        NbBeatsDone += (IndBeatEnd - IndBeatStart);
        // Increment on the combination if all the beat of the combination are processed
        if (CombBeatsRemaining <= MeasureBeatsRemaining) {
            IndComb += 1;
            IndBeatStart = 0;
        }
        else {
            IndBeatStart += MeasureBeatsRemaining;
        }
        // Adding a new measure if the measure is finished
        if (CombBeatsRemaining >= MeasureBeatsRemaining) {
            ListMeasures.push(MeasureTemp);
            MeasureTemp = [];
            MeasureBeatsRemaining = TimeBeat;
        }
        else {
            MeasureBeatsRemaining -= CombBeatsRemaining;
        }
    }
    // Complete the last measure of silence
    if (MeasureTemp != []) {
        for (var k = 0; k < MeasureBeatsRemaining; k++) {
            var notetemp = [{ 'duration': LENGTH_QUARTER, 'type': 'quarter', 'dot': false, 'triplet': false, 'pitchORrest': 'rest', 'beam': {}, 'indice': 0 }];
            MeasureTemp.push(notetemp);
        }
        ListMeasures.push(MeasureTemp);
    }
    return ListMeasures;
}


/***/ }),

/***/ "./src/worker/app-workers/shared/common-detector.ts":
/*!**********************************************************!*\
  !*** ./src/worker/app-workers/shared/common-detector.ts ***!
  \**********************************************************/
/*! exports provided: ConvertToneToFreq, ConvertFreqToTone, autocovariance, gaussian, histogram, convolve, mode, MaxOfArray, MinOfArray, ConvertSemitoneToNoteAndOctave, ConvertNoteAndOctaveToSemitone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToneToFreq", function() { return ConvertToneToFreq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertFreqToTone", function() { return ConvertFreqToTone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocovariance", function() { return autocovariance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaussian", function() { return gaussian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return histogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convolve", function() { return convolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mode", function() { return mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxOfArray", function() { return MaxOfArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinOfArray", function() { return MinOfArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertSemitoneToNoteAndOctave", function() { return ConvertSemitoneToNoteAndOctave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertNoteAndOctaveToSemitone", function() { return ConvertNoteAndOctaveToSemitone; });
function ConvertToneToFreq(Tone, f0) {
    return (f0 * Math.pow(2.0, Tone / 12.0));
}
function ConvertFreqToTone(Freq, f0) {
    return (Math.log10(Freq / f0) * 12.0 / Math.log10(2.0));
}
function autocovariance(Xi) {
    var N = Xi.length;
    var Xs = 0;
    for (var k = 0; k < N; k++) {
        Xs = Xs + Xi[k];
    }
    Xs = Xs / N;
    var autoCov = 0;
    for (var k = 0; k < N; k++) {
        autoCov = autoCov + Math.pow((Xi[k] - Xs), 2);
    }
    return (1 / (N - 1)) * autoCov;
}
function gaussian(N, std, densityfunction) {
    if (N % 2 == 0) {
        console.log("Error: input 'N' must be an even number");
        return;
    }
    var moy = (N - 1) / 2;
    var coef = 1.0;
    if (densityfunction) {
        var coef_1 = 1.0 / (std * Math.sqrt(2.0 * Math.PI));
    }
    var result = [];
    var tempvalue;
    for (var k = 0; k < N; k++) {
        tempvalue = coef * Math.exp(-0.5 * Math.pow((k - moy) / std, 2));
        result.push(tempvalue);
    }
    return result;
}
function histogram(data, bins, range_min, range_max) {
    var x = [];
    var stepbins = (range_max - range_min) / bins;
    for (var k = 0; k < bins + 1; k++) {
        x.push(range_min + stepbins * k);
    }
    var histo = new Array(bins).fill(0);
    var xmin;
    var xmax;
    for (var k = 0; k < bins; k++) {
        xmin = x[k];
        xmax = x[k + 1];
        for (var p = 0; p < data.length; p++) {
            if ((data[p] >= xmin) && (data[p] < xmax)) {
                histo[k] = histo[k] + 1;
            }
        }
    }
    return [histo, x];
}
function convolve(A, B) {
    // same size as 'A' array
    var size_A = A.length;
    var size_B = B.length;
    // output same size as A
    var mid;
    if (size_A == size_B) {
        if (size_A % 2 == 0) {
            mid = size_A / 2 - 1;
        }
        else {
            mid = (size_A - 1) / 2;
        }
    }
    else {
        if (size_B % 2 == 0) {
            mid = size_B / 2 - 1;
        }
        else {
            mid = (size_B - 1) / 2;
        }
    }
    var result = [];
    var tempvalue;
    var m_min;
    var m_max;
    for (var n = mid; n < mid + size_A; n++) {
        tempvalue = 0;
        m_min = Math.max(0, n - size_B + 1);
        m_max = Math.min(size_A - 1, n);
        for (var m = m_min; m < m_max + 1; m++) {
            tempvalue = tempvalue + A[m] * B[n - m];
        }
        result.push(tempvalue);
    }
    return result;
}
function mode(array) {
    if (array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0];
    var maxCount = 1;
    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null) {
            modeMap[el] = 1;
        }
        else {
            modeMap[el]++;
        }
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
function MaxOfArray(array) {
    var valmax = -Number.MAX_VALUE;
    var ind_max = 0;
    for (var k = 0; k < array.length; k++) {
        if (array[k] > valmax) {
            valmax = array[k];
            ind_max = k;
        }
    }
    return { argmax: ind_max, value: valmax };
}
function MinOfArray(array) {
    var valmin = Number.MAX_VALUE;
    var ind_min = 0;
    for (var k = 0; k < array.length; k++) {
        if (array[k] < valmin) {
            valmin = array[k];
            ind_min = k;
        }
    }
    return { argmin: ind_min, value: valmin };
}
// RHYTHM DETECTOR
function ConvertSemitoneToNoteAndOctave(semitone) {
    var Height = semitone % 12;
    var Octave = Math.floor(semitone / 12.0);
    return { height: Height, octave: Octave };
}
function ConvertNoteAndOctaveToSemitone(height, octave) {
    var semitone = octave * 12.0 + height;
    return semitone;
}


/***/ }),

/***/ "./src/worker/app-workers/shared/dijkstra.ts":
/*!***************************************************!*\
  !*** ./src/worker/app-workers/shared/dijkstra.ts ***!
  \***************************************************/
/*! exports provided: Graph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return Graph; });
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertices = [];
    }
    /**
     * Returns the graphs vertices
     */
    Graph.prototype.getVerticies = function () {
        return this.vertices;
    };
    /**
     * Returns the vertex instance in the graph
     * @param {number} vertex
     * @return {Vertex}
     */
    Graph.prototype.getVertex = function (nominal) {
        return this.vertices.find(function (v) { return v.nominal === nominal; });
    };
    /**
     * Adds a vertex with an empty array of edges to the graph
     * @param {number} nominal
     * @return {void}
     */
    Graph.prototype.addVertex = function (nominal) {
        this.vertices.push({
            nominal: nominal,
            edges: []
        });
    };
    /**
     * Creates an edge between two verticies
     * @param {number} nominal1
     * @param {number} nominal2
     * @param {number} distance
     */
    Graph.prototype.addEdge = function (nominal_from, nominal_to, distance) {
        var vertex_from = this.vertices.find(function (v) { return v.nominal === nominal_from; });
        var vertex_to = this.vertices.find(function (v) { return v.nominal === nominal_to; });
        vertex_from.edges.push({
            terminal: vertex_to,
            distance: distance
        });
        // vertex2.edges.push({
        //     terminal: vertex1,
        //     distance: distance
        // });
    };
    /**
     * Get full shortest path from previous vertices in vertex's shortest path
     * @param prev
     * @param source
     */
    Graph.prototype.deriveShortestPaths = function (prev, source) {
        var getPrev = function (path, v) {
            var next = prev[v];
            if (next) {
                path.push(next);
                return getPrev(path, next);
            }
            else {
                path.push(source);
                path.reverse();
                return path;
            }
        };
        return prev.map(function (v, i) { return getPrev([i], i); });
    };
    Graph.prototype.deleteUselessVertices = function (targetToIgnore) {
        var ArrayVertex = [];
        var pastLength = this.vertices.length;
        this.vertices = this.vertices.filter(function (vertex) { return (vertex.edges.length !== 0) || (vertex.nominal === targetToIgnore); });
        while (pastLength !== this.vertices.length) {
            pastLength = this.vertices.length;
            ArrayVertex = [];
            for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
                var vertex = _a[_i];
                ArrayVertex.push(vertex.nominal);
            }
            for (var _b = 0, _c = this.vertices; _b < _c.length; _b++) {
                var vertex = _c[_b];
                vertex.edges = vertex.edges.filter(function (edge) { return ArrayVertex.some(function (x) { return x == edge.terminal.nominal; }); });
            }
            this.vertices = this.vertices.filter(function (vertex) { return (vertex.edges.length !== 0) || (vertex.nominal === targetToIgnore); });
        }
    };
    Graph.prototype.getDijstraShortestPath = function (source, target) {
        if (this.getVertex(source) === undefined) {
            console.log("Error: Source vertex does not exists");
            return [];
        }
        if (this.getVertex(target) === undefined) {
            console.log("Error: Target vertex does not exists");
            return [];
        }
        var tempNominal;
        var shortestPath = [];
        var resDijstra = this.Dijkstra(this.getVertex(source));
        if (!Number.isFinite(resDijstra.dist[target])) {
            return [];
        }
        shortestPath.push(target);
        while (shortestPath[0] !== source) {
            tempNominal = resDijstra.prev[shortestPath[0]];
            shortestPath.unshift(tempNominal);
        }
        return shortestPath;
    };
    Graph.prototype.Dijkstra = function (source) {
        var Q = [];
        var dist = {};
        var prev = {};
        var u;
        var alt;
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            /**
             * Initialize distance between source
             * and all nodes to Infinity,
             * and all shortest paths to undefined
             */
            dist[vertex.nominal] = Infinity;
            prev[vertex.nominal] = undefined;
            Q.push(vertex);
        }
        /**
         * Path to source from source is zero
         */
        dist[source.nominal] = 0;
        while (Q.length > 0) {
            /**
             * Get the vertext with the shortest distance to
             * the source that has not yet been visited
             */
            u = Q.reduce(function (min, next) {
                if (dist[next.nominal] < dist[min.nominal]) {
                    min = next;
                }
                return min;
            });
            Q = Q.filter(function (v) { return v !== u; });
            /**
             * Get neighbors of u that are still unvisited
             */
            var neighbors = u.edges
                .map(function (e) { return e.terminal; })
                .filter(function (t) { return ~Q.indexOf(t); });
            var _loop_1 = function (v) {
                /**
                 * Add the source->u distance to the u->v distance
                 */
                alt = dist[u.nominal] + u.edges.find(function (e) { return e.terminal === v; }).distance;
                if (alt < dist[v.nominal]) {
                    /**
                     * If the current source->v distance is
                     * further than the source->u + u->v distance,
                     * then set the new source->v distance
                     * to source->u + u->v
                     */
                    dist[v.nominal] = alt;
                    /**
                     * Set the previous vertex in the shortest
                     * path from source->v to u
                     */
                    prev[v.nominal] = u.nominal;
                }
            };
            for (var _b = 0, neighbors_1 = neighbors; _b < neighbors_1.length; _b++) {
                var v = neighbors_1[_b];
                _loop_1(v);
            }
        }
        return { dist: dist, prev: prev };
    };
    return Graph;
}());



/***/ }),

/***/ "./src/worker/app-workers/shared/midi.ts":
/*!***********************************************!*\
  !*** ./src/worker/app-workers/shared/midi.ts ***!
  \***********************************************/
/*! exports provided: Midi, appendBuffer, unpack, str2Bytes, codes2Str, pack, MidiTrack, ToVLQBytes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Midi", function() { return Midi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendBuffer", function() { return appendBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpack", function() { return unpack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str2Bytes", function() { return str2Bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codes2Str", function() { return codes2Str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return pack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MidiTrack", function() { return MidiTrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToVLQBytes", function() { return ToVLQBytes; });
var Midi = /** @class */ (function () {
    function Midi(PPQ) {
        if (PPQ === void 0) { PPQ = 480; }
        this.Tracks = [];
        this.PPQ = PPQ;
        this.Format = 1;
    }
    Midi.prototype.GetNumberOfTracks = function () {
        return (this.Tracks.length);
    };
    Midi.prototype.AddTrack = function () {
        this.Tracks.push(new MidiTrack());
    };
    Midi.prototype.GenerateMidiArray = function () {
        var HeaderArray = unpack("MThd");
        HeaderArray = appendBuffer(HeaderArray, pack('>I', 6));
        HeaderArray = appendBuffer(HeaderArray, pack('>H', this.Format));
        HeaderArray = appendBuffer(HeaderArray, pack('>H', this.GetNumberOfTracks()));
        HeaderArray = appendBuffer(HeaderArray, pack('>H', this.PPQ));
        // Tracks
        var TracksArray = new Uint8Array(0);
        for (var _i = 0, _a = this.Tracks; _i < _a.length; _i++) {
            var track = _a[_i];
            TracksArray = appendBuffer(TracksArray, track.GenerateArrayOfBytes());
        }
        return (appendBuffer(HeaderArray, TracksArray));
    };
    return Midi;
}());

function appendBuffer(buffer1, buffer2) {
    var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    return tmp;
}
function unpack(str) {
    var bytes = [];
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        bytes.push(char & 0xFF);
    }
    return (new Uint8Array(bytes));
}
function str2Bytes(str, finalBytes) {
    if (finalBytes) {
        while ((str.length / 2) < finalBytes) {
            str = "0" + str;
        }
    }
    var bytes = [];
    for (var i = str.length - 1; i >= 0; i = i - 2) {
        var chars = i === 0 ? str[i] : str[i - 1] + str[i];
        bytes.unshift(parseInt(chars, 16));
    }
    return bytes;
}
function codes2Str(byteArray) {
    return String.fromCharCode.apply(null, byteArray);
}
function pack(format, data) {
    if (format === '>H') {
        return (new Uint8Array(str2Bytes(data.toString(16), 2)));
    }
    else if (format === '>I') {
        return (new Uint8Array(str2Bytes(data.toString(16), 4)));
    }
    else if (format === 'B') {
        return (new Uint8Array(str2Bytes(data.toString(16), 1)));
    }
    else {
        console.log("Error in 'pack' function: format does not exists");
    }
    return new Uint8Array(0);
}
var MidiTrack = /** @class */ (function () {
    function MidiTrack() {
        this.TrackArray = new Uint8Array(0);
        this.MetaEventMode = true;
        this.DeltaTimeSet = false;
    }
    MidiTrack.prototype.GenerateArrayOfBytes = function () {
        if (this.DeltaTimeSet == false) {
            // Header 'MTrk'
            var ArrayOfBytes = unpack("MTrk");
            ArrayOfBytes = appendBuffer(ArrayOfBytes, pack('>I', this.GetTrackSize()));
            ArrayOfBytes = appendBuffer(ArrayOfBytes, this.TrackArray);
            return ArrayOfBytes;
        }
        else {
            console.log("Uncompleted track: a delta time has been defined with no event following");
            return;
        }
    };
    MidiTrack.prototype.GetTrackSize = function () {
        return this.TrackArray.length;
    };
    MidiTrack.prototype.AddNote = function (DeltaTime, Duration, Key, Volume, Channel) {
        if (Channel === void 0) { Channel = 0; }
        this.AddDeltaTime(DeltaTime);
        this.AddMidiEvent("Note On", [Key, Volume], Channel);
        this.AddDeltaTime(Duration);
        this.AddMidiEvent("Note Off", [Key, 64], Channel);
    };
    MidiTrack.prototype.AddDeltaTime = function (TicksNumber) {
        if (this.DeltaTimeSet == false) {
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(TicksNumber));
            this.DeltaTimeSet = true;
        }
        else {
            console.log("A delta time has already been defined, an event is now expected");
        }
    };
    MidiTrack.prototype.AddMidiEvent = function (Message, Data, Channel) {
        if (Channel === void 0) { Channel = 0; }
        var MessageWritten = true;
        if (this.DeltaTimeSet == false) {
            MessageWritten = false;
            console.log("You first need to defined a delta time before creating an event");
        }
        else if (Message === "Note Off") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 128 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
        }
        else if (Message === "Note On") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 144 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
        }
        else if (Message === "Polyphonic Key Pressure") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 160 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
        }
        else if (Message === "Controller Change") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
        }
        else if (Message === "Program Change") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 192 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
        }
        else if (Message === "Channel Key Pressure") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 208 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
        }
        else if (Message === "Pitch Bend") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 224 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1]));
        }
        else if (Message === "All Sound Off") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 120));
        }
        else if (Message === "Reset All Controllers") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 121));
        }
        else if (Message === "Local Control") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 122));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
        }
        else if (Message === "All Notes Off") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 123));
        }
        else if (Message === "Omni Mode Off") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 124));
        }
        else if (Message === "Omni Mode On") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 125));
        }
        else if (Message === "Mono Mode On") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 126));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0]));
        }
        else if (Message === "Poly Mode On") {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 176 + Channel));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 127));
        }
        else {
            MessageWritten = false;
            console.log('Wrong value of input "Message"');
        }
        if (MessageWritten) {
            this.DeltaTimeSet = false;
        }
    };
    MidiTrack.prototype.AddMetaEvent = function (EventName, Data) {
        var MessageWritten = true;
        if (this.DeltaTimeSet == false) {
            MessageWritten = false;
            console.log("You first need to defined a delta time before creating an event");
        }
        else if (this.MetaEventMode == false) {
            MessageWritten = false;
            console.log("You no longer can defined a meta event, a midi event has already been written");
            // Sequence Number
        }
        else if (EventName === "Sequence Number" || EventName === 0) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 0));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 2));
            this.TrackArray = appendBuffer(this.TrackArray, pack('>H', Data));
            // Text Event
        }
        else if (EventName === "Text Event" || EventName === 1) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 1));
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
            this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
            // Copyright Notice
        }
        else if (EventName === "Copyright Notice" || EventName === 2) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 2));
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
            this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
            // Sequence/Track Name
        }
        else if (EventName === "Sequence/Track Name" || EventName === 3) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 3));
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
            this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
            // Instrument Name
        }
        else if (EventName === "Instrument Name" || EventName === 4) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 4));
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
            this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
            // Lyric
        }
        else if (EventName === "Lyric" || EventName === 5) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 5));
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
            this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
            // Marker
        }
        else if (EventName === "Marker" || EventName === 6) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 6));
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
            this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
            // Cue Point
        }
        else if (EventName === "Cue Point" || EventName === 7) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 7));
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
            this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
            // MIDI Channel Prefix
        }
        else if (EventName === "MIDI Channel Prefix" || EventName === 32) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 32));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 1));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data));
            // End of Track
        }
        else if (EventName === "End of Track" || EventName === 47) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 47));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 0));
            // Set Tempo
        }
        else if (EventName === "Set Tempo" || EventName === 81) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 81));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 3));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', str2Bytes(Data.toString(16), 3)[0]));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', str2Bytes(Data.toString(16), 3)[1]));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', str2Bytes(Data.toString(16), 3)[2]));
            // SMTPE Offset
        }
        else if (EventName === "SMTPE Offset" || EventName === 84) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 84));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 5));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0])); //hh
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1])); //mm
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[2])); //ss
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[3])); //fr
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[4])); //ff
            // Time Signature
        }
        else if (EventName === "Time Signature" || EventName === 88) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 88));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 4));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[0])); //nn
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1])); //dd
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[2])); //cc
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[3])); //bb
            // Key Signature
        }
        else if (EventName === "Key Signature" || EventName === 89) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 89));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 2));
            this.TrackArray = appendBuffer(this.TrackArray, pack('b', Data[0])); //sf
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', Data[1])); //mi
            // Sequencer-Specific Meta-event
        }
        else if (EventName === "Sequencer-Specific Meta-event" || EventName === 127) {
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 255));
            this.TrackArray = appendBuffer(this.TrackArray, pack('B', 127));
            this.TrackArray = appendBuffer(this.TrackArray, ToVLQBytes(Data.length));
            this.TrackArray = appendBuffer(this.TrackArray, unpack(Data));
        }
        else {
            MessageWritten = false;
            console.log('Wrong value of type');
        }
        if (MessageWritten) {
            this.DeltaTimeSet = false;
        }
    };
    return MidiTrack;
}());

function ToVLQBytes(num) {
    var BinString = num.toString(2);
    var NbBits = BinString.length;
    var NbVLQBytes = Math.floor(NbBits / 7);
    if (NbBits % 7 > 0) {
        NbVLQBytes += 1;
    }
    var ArrayOfBytes = new Uint8Array(0);
    var TempByte;
    for (var k = 0; k < NbVLQBytes; k++) {
        if (k == 0) {
            var NbBitsLastByte = NbBits % 7;
            if (NbBitsLastByte === 0) {
                NbBitsLastByte = 7;
            }
            var NbZeros = 7 - NbBitsLastByte;
            if (k === NbVLQBytes - 1) {
                TempByte = '0';
                for (var kzero = 0; kzero < NbZeros; kzero++) {
                    TempByte += '0';
                }
                TempByte += BinString;
            }
            else {
                TempByte = '1';
                for (var kzero = 0; kzero < NbZeros; kzero++) {
                    TempByte += '0';
                }
                for (var kbyte = 0; kbyte < NbBitsLastByte; kbyte++) {
                    TempByte += BinString[kbyte];
                }
            }
        }
        else if (k == NbVLQBytes - 1) {
            TempByte = '0';
            for (var kbyte = BinString.length - 7; kbyte < BinString.length; kbyte++) {
                TempByte += BinString[kbyte];
            }
        }
        else {
            TempByte = '1';
            for (var kbyte = (BinString.length - (k + 1) * 7); kbyte < (BinString.length - k * 7); kbyte++) {
                TempByte += BinString[kbyte];
            }
        }
        ArrayOfBytes = appendBuffer(ArrayOfBytes, pack('B', parseInt(TempByte, 2)));
    }
    return ArrayOfBytes;
}


/***/ }),

/***/ "./src/worker/app-workers/shared/music-xml.ts":
/*!****************************************************!*\
  !*** ./src/worker/app-workers/shared/music-xml.ts ***!
  \****************************************************/
/*! exports provided: Element, CreateAttributesElement, CreateNoteElement, MusicXml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAttributesElement", function() { return CreateAttributesElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNoteElement", function() { return CreateNoteElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicXml", function() { return MusicXml; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Element = /** @class */ (function () {
    function Element(tag, parent) {
        if (parent === void 0) { parent = null; }
        this.tag = tag;
        this.childs = [];
        this.text = '';
        this.attributes = {};
        this.parent = parent;
    }
    Element.prototype.SubElement = function (tag) {
        var newElement = new Element(tag, this);
        this.addChild(newElement);
        return newElement;
    };
    Element.prototype.addChild = function (element) {
        element.parent = this;
        this.childs.push(element);
    };
    Element.prototype.setText = function (text) {
        this.text = text;
    };
    Element.prototype.getText = function () {
        return this.text;
    };
    Element.prototype.setAttr = function (attributes) {
        this.attributes = attributes;
    };
    Element.prototype.getAttr = function () {
        return this.attributes;
    };
    Element.prototype.getParent = function () {
        return this.parent;
    };
    Element.prototype.getTag = function () {
        return this.tag;
    };
    Element.prototype.tostring = function (mainIndent) {
        if (mainIndent === void 0) { mainIndent = ''; }
        var hasChilds = this.childs.length !== 0;
        var hasText = this.text.length !== 0;
        var hasAttr = Object.keys(this.attributes).length !== 0;
        var childIndent = mainIndent + '  ';
        var stringContent = '';
        // Start tag
        stringContent += mainIndent + "<" + this.tag;
        // Atributes
        if (hasAttr) {
            for (var attr in this.attributes) {
                stringContent += ' ' + attr + '="' + this.attributes[attr] + '"';
            }
        }
        if (!hasText && !hasChilds) {
            stringContent += "/>" + "\n";
            return stringContent;
        }
        else if (!hasChilds) {
            stringContent += ">";
        }
        else {
            stringContent += ">" + "\n";
        }
        // Text content
        if (hasText) {
            if (hasChilds) {
                stringContent += childIndent + this.text + "\n";
            }
            else {
                stringContent += this.text;
            }
        }
        // Childs content
        for (var _i = 0, _a = this.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            stringContent += child.tostring(childIndent);
        }
        // End tag
        if (hasChilds) {
            stringContent += mainIndent + "</" + this.tag + ">" + "\n";
        }
        else {
            stringContent += "</" + this.tag + ">" + "\n";
        }
        return stringContent;
    };
    Element.prototype.findall = function (subElementName) {
        var listMatch = [];
        for (var _i = 0, _a = this.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.tag === subElementName) {
                listMatch.push(child);
            }
        }
        return listMatch;
    };
    Element.prototype.find = function (subElementName) {
        for (var _i = 0, _a = this.childs; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.tag === subElementName) {
                return child;
            }
        }
        return null;
    };
    return Element;
}());

function CreateAttributesElement(attributes) {
    if (("key_mode" in attributes) && !("key_fifths" in attributes)) {
        console.log("you need to defined at least the 'fifths' key parameters");
    }
    if ((!("time_beats" in attributes) && ("time_beattype" in attributes)) ||
        (("time_beats" in attributes) && !("time_beattype" in attributes))) {
        console.log("you need to defined any or both of the time parameters: 'beats' and 'beat-type'");
    }
    if (("clef_line" in attributes) && !("clef_sign" in attributes)) {
        console.log("you need to defined at least the 'sign' time parameters");
    }
    var E_attributes = new Element("attributes");
    // divisions
    if ("divisions" in attributes) {
        var E_divisions = E_attributes.SubElement("divisions");
        E_divisions.setText(attributes['divisions'].toString());
    }
    // key
    if ("key_fifths" in attributes) {
        var E_key = E_attributes.SubElement("key");
        var E_fifths = E_key.SubElement("fifths");
        E_fifths.setText(attributes['key_fifths'].toString());
        if ("key_mode" in attributes) {
            var E_mode = E_key.SubElement("mode");
            E_mode.setText(attributes['key_mode'].toString());
        }
    }
    // time
    if (("time_beats" in attributes) && ("time_beattype" in attributes)) {
        var E_time = E_attributes.SubElement("time");
        var E_beats = E_time.SubElement("beats");
        E_beats.setText(attributes['time_beats'].toString());
        var E_beattype = E_time.SubElement("beat-type");
        E_beattype.setText(attributes['time_beattype'].toString());
    }
    // clef
    if ("clef_sign" in attributes) {
        var E_clef = E_attributes.SubElement("clef");
        var E_sign = E_clef.SubElement("sign");
        E_sign.setText(attributes['clef_sign'].toString());
        if ("clef_line" in attributes) {
            var E_line = E_clef.SubElement("line");
            E_line.setText(attributes['clef_line'].toString());
        }
    }
    return E_attributes;
}
function CreateNoteElement(PitchOrRest, duration, type, pitch_step, pitch_octave, pitch_alter, dotted, triplet, beams, slurs) {
    if (dotted === void 0) { dotted = false; }
    if (triplet === void 0) { triplet = false; }
    var E_note = new Element("note");
    if (PitchOrRest === "rest") {
        var E_rest = E_note.SubElement("rest");
    }
    else if (PitchOrRest === "pitch") {
        if ((pitch_step == null) || (pitch_octave == null)) {
            console.log("If the note is a pitch, you need to specify the 'step' and the 'octave' parameters");
            return;
        }
        var E_pitch = E_note.SubElement("pitch");
        var E_step = E_pitch.SubElement("step");
        E_step.setText(pitch_step);
        if (pitch_alter != null) {
            var E_alter = E_pitch.SubElement("alter");
            E_alter.setText(pitch_alter.toString());
        }
        var E_octave = E_pitch.SubElement("octave");
        E_octave.setText(pitch_octave.toString());
    }
    else {
        console.log("wrong value for input 'PitchOrRest', can be 'rest' or 'pitch'");
        return;
    }
    var E_duration = E_note.SubElement("duration");
    E_duration.setText(duration.toString());
    var E_type = E_note.SubElement("type");
    E_type.setText(type);
    if (dotted) {
        var E_dot = E_note.SubElement("dot");
    }
    if (triplet) {
        var E_timemod = E_note.SubElement("time-modification");
        var E_actnote = E_timemod.SubElement("actual-notes");
        E_actnote.setText("3");
        var E_normnote = E_timemod.SubElement("normal-notes");
        E_normnote.setText("2");
    }
    if (beams != null) {
        for (var num_beam in beams) {
            var E_beam = E_note.SubElement("beam");
            E_beam.setText(beams[num_beam]);
            E_beam.setAttr({ "number": num_beam });
        }
    }
    if (slurs != null) {
        if (slurs.length > 0) {
            var E_notations = E_note.SubElement("notations");
            for (var _i = 0, slurs_1 = slurs; _i < slurs_1.length; _i++) {
                var slur = slurs_1[_i];
                var E_slur = E_notations.SubElement("slur");
                E_slur.setAttr(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, slur));
            }
        }
    }
    return E_note;
}
var MusicXml = /** @class */ (function () {
    function MusicXml(Title, Composer) {
        if (Title === void 0) { Title = "Untitled"; }
        if (Composer === void 0) { Composer = "Unknown"; }
        this.Header1 = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n';
        this.Header2 = '<!DOCTYPE score-partwise PUBLIC\n\t"-//Recordare//DTD MusicXML 3.0 Partwise//EN"\n\t"http://www.musicxml.org/dtds/partwise.dtd">\n';
        // score-partwise
        this.ScorePartwiseElement = new Element("score-partwise");
        this.ScorePartwiseElement.setAttr({ "version": "3.0" });
        // Title
        this.WorkElement = this.ScorePartwiseElement.SubElement("work");
        this.WorkTitleElement = this.WorkElement.SubElement("work-title");
        this.WorkTitleElement.setText(Title);
        // Composer
        this.IdentificationElement = this.ScorePartwiseElement.SubElement("identification");
        var ComposerElement = this.IdentificationElement.SubElement("creator");
        ComposerElement.setText(Composer);
        ComposerElement.setAttr({ "type": "composer" });
        var RightsElement = this.IdentificationElement.SubElement("rights");
        RightsElement.setText("Copyright © 2019 ScoreListo, Inc.");
        // part-list
        this.PartListElement = this.ScorePartwiseElement.SubElement("part-list");
    }
    MusicXml.prototype.GetPartFromID = function (id) {
        for (var _i = 0, _a = this.ScorePartwiseElement.findall("part"); _i < _a.length; _i++) {
            var Part = _a[_i];
            if (Part.getAttr()['id'] == id) {
                return Part;
            }
        }
        console.log("The part with this id does not exists");
        return;
    };
    MusicXml.prototype.PartIDAlreadyExists = function (Newid) {
        for (var _i = 0, _a = this.PartListElement.findall("score-part"); _i < _a.length; _i++) {
            var ScorePart = _a[_i];
            if (ScorePart.getAttr()['id'] == Newid) {
                return true;
            }
        }
        return false;
    };
    MusicXml.prototype.ChangeTitle = function (NewTitle) {
        this.WorkTitleElement.setText(NewTitle);
    };
    MusicXml.prototype.__GetNumberOfMeasures = function (part) {
        return part.findall("measure").length;
    };
    MusicXml.prototype.__GetTimeElement = function (measure) {
        var AttributesElement = measure.find("attributes");
        if (AttributesElement == null) {
            return null;
        }
        var TimeElement = AttributesElement.find("time");
        if (TimeElement == null) {
            return null;
        }
        return TimeElement;
    };
    MusicXml.prototype.__GetDivisionsElement = function (measure) {
        var AttributesElement = measure.find("attributes");
        if (AttributesElement == null) {
            return null;
        }
        var DivisionsElement = AttributesElement.find("divisions");
        if (DivisionsElement == null) {
            return null;
        }
        return (DivisionsElement);
    };
    MusicXml.prototype.__GetPreviousMeasure = function (measure) {
        var E_part = measure.getParent();
        var measures = E_part.findall("measure");
        for (var k_measure = 0; k_measure < measures.length; k_measure++) {
            if (measures[k_measure].getAttr()["number"] === measure.getAttr()["number"]) {
                if (k_measure - 1 >= 0) {
                    return measures[k_measure - 1];
                }
                else {
                    return null;
                }
            }
        }
        return null;
    };
    MusicXml.prototype.__GetRelatedDivisionsElement = function (measure) {
        var DivElement;
        while (measure != null) {
            DivElement = this.__GetDivisionsElement(measure);
            if (DivElement != null) {
                return DivElement;
            }
            measure = this.__GetPreviousMeasure(measure);
        }
        return null;
    };
    MusicXml.prototype.__GetRelatedTimeElement = function (measure) {
        var TimeElement;
        while (measure != null) {
            TimeElement = this.__GetTimeElement(measure);
            if (TimeElement != null) {
                return TimeElement;
            }
            measure = this.__GetPreviousMeasure(measure);
        }
        return null;
    };
    MusicXml.prototype.__MeasureSumNoteDuration = function (measure) {
        var DurationSum = 0;
        var E_duration;
        for (var _i = 0, _a = measure.findall("note"); _i < _a.length; _i++) {
            var E_note = _a[_i];
            E_duration = E_note.find("duration");
            if (E_duration == null) {
                console.log("A note has been defined without setting the duration parameter");
                return;
            }
            DurationSum += Number(E_duration.getText());
        }
        return DurationSum;
    };
    MusicXml.prototype.__CalculateMaximumDuration = function (measure) {
        var LastDivElement = this.__GetRelatedDivisionsElement(measure);
        var LastTimeElement = this.__GetRelatedTimeElement(measure);
        if ((LastDivElement == null) || (LastTimeElement == null)) {
            console.log("The parameters chosen for 'divisions' and 'time' are not set");
        }
        var divisions = Number(LastDivElement.getText());
        var beats = Number(LastTimeElement.find("beats").getText());
        var beattype = Number(LastTimeElement.find("beat-type").getText());
        var DurationPerMeasure = divisions * beats * (4.0 / beattype);
        if (!Number.isInteger(DurationPerMeasure)) {
            console.log("The parameters chosen for 'divisions' and 'time' are incorrects");
        }
        return DurationPerMeasure;
    };
    MusicXml.prototype.__IsTheMeasureCompleted = function (measure) {
        var DurationPerMeasure = this.__CalculateMaximumDuration(measure);
        var DurationLastMeasure = this.__MeasureSumNoteDuration(measure);
        if (DurationPerMeasure == DurationLastMeasure) {
            return true;
        }
        else {
            return false;
        }
    };
    MusicXml.prototype.isScoreReady = function () {
        var parts = this.ScorePartwiseElement.findall("part");
        if (parts.length === 0) {
            return false;
        }
        var NbMeasuresPast = -1;
        var NbMeasuretemp;
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var E_part = parts_1[_i];
            NbMeasuretemp = this.__GetNumberOfMeasures(E_part);
            if (NbMeasuretemp === 0) {
                return false;
            }
            if ((NbMeasuresPast !== NbMeasuretemp) && (NbMeasuresPast !== -1)) {
                return false;
            }
            NbMeasuresPast = NbMeasuretemp;
        }
        for (var _a = 0, parts_2 = parts; _a < parts_2.length; _a++) {
            var E_part = parts_2[_a];
            for (var _b = 0, _c = E_part.findall("measure"); _b < _c.length; _b++) {
                var E_measure = _c[_b];
                if (!this.__IsTheMeasureCompleted(E_measure)) {
                    return false;
                }
            }
        }
        return true;
    };
    MusicXml.prototype.AddPart = function (id, instrumentname) {
        if (instrumentname === void 0) { instrumentname = "piano"; }
        // Check if the Id does not already exists
        if (this.PartIDAlreadyExists(id)) {
            console.log("Error: The id already exists");
        }
        var ScorePartElement = this.PartListElement.SubElement("score-part");
        ScorePartElement.setAttr({ "id": id });
        var PartNameElement = ScorePartElement.SubElement("part-name");
        PartNameElement.setText("solo");
        var ScoreInstrumentElement = ScorePartElement.SubElement("score-instrument");
        ScoreInstrumentElement.setAttr({ "id": id + "-I1" });
        var InstrumentNameElement = ScoreInstrumentElement.SubElement("instrument-name");
        InstrumentNameElement.setText(instrumentname);
        var partElement = this.ScorePartwiseElement.SubElement("part");
        partElement.setAttr({ "id": id });
    };
    MusicXml.prototype.AddMeasure = function (id_part) {
        var E_part = this.GetPartFromID(id_part);
        var nextnumber;
        var measures = E_part.findall("measure");
        if (measures.length !== 0) {
            var lastmeasure = measures[measures.length - 1];
            if (!this.__IsTheMeasureCompleted(lastmeasure)) {
                console.log("Trying to add a new measure whereas the last measure is not yet completed");
                return;
            }
            nextnumber = Number(lastmeasure.getAttr()['number']) + 1;
        }
        else {
            nextnumber = 1;
        }
        var NewMeasure = E_part.SubElement("measure");
        NewMeasure.setAttr({ "number": nextnumber.toString() });
        return NewMeasure;
    };
    MusicXml.prototype.__CheckTimeBetweenMeasures = function (id_part, IndMeasure, E_time) {
        for (var _i = 0, _a = this.ScorePartwiseElement.findall("part"); _i < _a.length; _i++) {
            var E_part = _a[_i];
            if (E_part.getAttr()['id'] != id_part) {
                var measures = E_part.findall("measure");
                if (measures.length > IndMeasure) {
                    var E_measure = measures[IndMeasure];
                    var MeasureAttributes = E_measure.find("attributes");
                    if (MeasureAttributes == null) {
                        if (E_measure.find("note") != null) {
                            console.log("Trying to add a time signature different than other parts");
                        }
                    }
                    else {
                        var TimeElement = MeasureAttributes.find("time");
                        if (TimeElement == null) {
                            console.log("Trying to add a time signature different than other parts");
                        }
                        var beats_A = Number(TimeElement.find('beats').getText());
                        var beattype_A = Number(TimeElement.find('beat-type').getText());
                        var beats_B = Number(E_time.find('beats').getText());
                        var beattype_B = Number(E_time.find('beat-type').getText());
                        if ((beats_A != beats_B) || (beattype_A != beattype_B)) {
                            console.log("Trying to add a time signature different than other parts");
                        }
                    }
                }
            }
        }
    };
    MusicXml.prototype.__GetLastMeasure = function (id_part) {
        var E_part = this.GetPartFromID(id_part);
        var measures = E_part.findall("measure");
        if (measures.length === 0) {
            console.log("Error: Any measure created in this part, cannot get last measure");
            return null;
        }
        var indice = measures.length - 1;
        var measure = measures[measures.length - 1];
        return [indice, measure];
    };
    MusicXml.prototype.AddAttributes = function (id_part, E_attributes) {
        var _a;
        var IndMeasure;
        var LastMeasure;
        _a = this.__GetLastMeasure(id_part), IndMeasure = _a[0], LastMeasure = _a[1];
        if (LastMeasure.find("note") != null) {
            console.log("Trying to add a attributes whereas a note has already been created... too late");
            return null;
        }
        if (LastMeasure.find("attributes") != null) {
            console.log("Attributes have already been defined");
            return null;
        }
        if (E_attributes.getTag() !== 'attributes') {
            console.log("Wrong input tag: must be 'attributes'");
            return null;
        }
        if (IndMeasure === 0) {
            if ((E_attributes.find("divisions") == null) ||
                (E_attributes.find("key") == null) ||
                (E_attributes.find("time") == null) ||
                (E_attributes.find("clef") == null)) {
                console.log("Error: All attributes have to be set for the first measure");
                return null;
            }
        }
        else {
            if ((E_attributes.find("divisions") == null) &&
                (E_attributes.find("key") == null) &&
                (E_attributes.find("time") == null) &&
                (E_attributes.find("clef") == null)) {
                console.log("Error: You need to defined at least one attribute parameter");
                return null;
            }
        }
        if (E_attributes.find("time") != null) {
            this.__CheckTimeBetweenMeasures(id_part, IndMeasure, E_attributes.find("time"));
        }
        LastMeasure.addChild(E_attributes);
    };
    MusicXml.prototype.AddNote = function (id_part, E_note) {
        var _a;
        var IndMeasure;
        var LastMeasure;
        _a = this.__GetLastMeasure(id_part), IndMeasure = _a[0], LastMeasure = _a[1];
        var CurrentDuration = this.__MeasureSumNoteDuration(LastMeasure);
        var MaximumDuration = this.__CalculateMaximumDuration(LastMeasure);
        var duration = Number(E_note.find('duration').getText());
        if ((CurrentDuration + duration) > MaximumDuration) {
            console.log("With this note duration, the maximum duration of the measure is exceeded: note NOT ADDED");
        }
        if (E_note.getTag() != 'note') {
            console.log("Wrong input tag: must be 'note'");
        }
        LastMeasure.addChild(E_note);
    };
    MusicXml.prototype.tostring = function () {
        if (this.isScoreReady()) {
            return (this.Header1 + this.Header2 + this.ScorePartwiseElement.tostring());
        }
        else {
            console.log("The partition is not ready to be written");
            return null;
        }
    };
    return MusicXml;
}());



/***/ }),

/***/ "./src/worker/app-workers/shared/worker-message.model.ts":
/*!***************************************************************!*\
  !*** ./src/worker/app-workers/shared/worker-message.model.ts ***!
  \***************************************************************/
/*! exports provided: WorkerMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerMessage", function() { return WorkerMessage; });
/* <project-root>/src/worker/app-workers/shared/worker-message.model.ts */
var WorkerMessage = /** @class */ (function () {
    function WorkerMessage(topic, data) {
        this.topic = topic;
        this.data = data;
    }
    WorkerMessage.getInstance = function (value) {
        var topic = value.topic, data = value.data;
        return new WorkerMessage(topic, data);
    };
    return WorkerMessage;
}());



/***/ }),

/***/ "./src/worker/app-workers/shared/worker-topic.constants.ts":
/*!*****************************************************************!*\
  !*** ./src/worker/app-workers/shared/worker-topic.constants.ts ***!
  \*****************************************************************/
/*! exports provided: WORKER_TOPIC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORKER_TOPIC", function() { return WORKER_TOPIC; });
/* <project-root>/src/worker/app-workers/shared/worker-topic.constants.ts */
var WORKER_TOPIC = {
    pitchDetector: 'pitchDetector',
    stepDetector: 'stepDetector',
    rhythmDetector: 'rhythmDetector',
};


/***/ }),

/***/ "./src/worker/app-workers/step-detector.worker.ts":
/*!********************************************************!*\
  !*** ./src/worker/app-workers/step-detector.worker.ts ***!
  \********************************************************/
/*! exports provided: StepDetectorWorker, DefaultStepParameter, gaussian_kde, GaussianKdeHistogram, HysteresisThreshold, ExtractPeakIndices, HistogramMethod, StepDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepDetectorWorker", function() { return StepDetectorWorker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultStepParameter", function() { return DefaultStepParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gaussian_kde", function() { return gaussian_kde; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaussianKdeHistogram", function() { return GaussianKdeHistogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HysteresisThreshold", function() { return HysteresisThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtractPeakIndices", function() { return ExtractPeakIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistogramMethod", function() { return HistogramMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepDetector", function() { return StepDetector; });
/* harmony import */ var _shared_worker_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/worker-message.model */ "./src/worker/app-workers/shared/worker-message.model.ts");
/* harmony import */ var _shared_common_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/common-detector */ "./src/worker/app-workers/shared/common-detector.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var StepDetectorWorker = /** @class */ (function () {
    function StepDetectorWorker() {
    }
    StepDetectorWorker.doWork = function (value) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var stepDetector = new StepDetector();
            stepDetector.init_parameters(value.data.parameters);
            stepDetector.run(value.data.pitchResult, value.data.debug).subscribe(function (data) {
                observer.next(new _shared_worker_message_model__WEBPACK_IMPORTED_MODULE_0__["WorkerMessage"](value.topic, data));
                if (data.progression == null) {
                    observer.complete();
                }
            });
        });
    };
    return StepDetectorWorker;
}());

var DefaultStepParameter = {
    medianfiltersize_s: 51e-3,
    thresholdenergyon_db: 25,
    thresholdenergyoff_db: 30,
    maxpitchvariation_st: 1,
    minimumtimesize_s: 50e-3,
    minnotesize_s: 100e-3,
    minnotediff_st: 0.5,
    lmhgaussian_st: 0.5
};
var gaussian_kde = /** @class */ (function () {
    function gaussian_kde(dataset) {
        this.dataset = dataset;
        this.n = dataset.length;
        this.factor = Math.pow(this.n, -1. / (1 + 4));
        this._data_covariance = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["autocovariance"])(this.dataset);
        this._data_inv_cov = 1.0 / this._data_covariance;
        this.covariance = this._data_covariance * Math.pow(this.factor, 2);
        this.inv_cov = this._data_inv_cov / Math.pow(this.factor, 2);
        this._norm_factor = Math.sqrt(2 * Math.PI * this.covariance) * this.n;
    }
    gaussian_kde.prototype.evaluate = function (points) {
        var m = points.length;
        var result = new Array(m).fill(0);
        var diff;
        var tdiff;
        var energy;
        for (var k = 0; k < this.n; k++) {
            for (var p = 0; p < m; p++) {
                diff = this.dataset[k] - points[p];
                tdiff = this.inv_cov * diff;
                energy = diff * tdiff / 2.0;
                result[p] = result[p] + Math.exp(-energy);
            }
        }
        for (var p = 0; p < m; p++) {
            result[p] = result[p] / this._norm_factor;
        }
        return result;
    };
    return gaussian_kde;
}());

function GaussianKdeHistogram(data, bins) {
    var xmin = 9999;
    var xmax = -9999;
    for (var k = 0; k < data.length; k++) {
        if (data[k] > xmax) {
            xmax = data[k];
        }
        if (data[k] < xmin) {
            xmin = data[k];
        }
    }
    var x = new Array(bins);
    var stepbins = (xmax - xmin) / (bins - 1);
    for (var k = 0; k < bins; k++) {
        x[k] = xmin + stepbins * k;
    }
    var density = new gaussian_kde(data);
    var histogram = density.evaluate(x);
    return [x, histogram];
}
var HysteresisThreshold = /** @class */ (function () {
    function HysteresisThreshold(InputSignal, ActivationThreshold, DeactivationThreshold) {
        if (ActivationThreshold < DeactivationThreshold) {
            console.log("The activation threshold cannot be lower than the deactivation threshold");
        }
        this.Activation = ActivationThreshold;
        this.Deactivation = DeactivationThreshold;
        this.Signal = InputSignal.slice();
    }
    HysteresisThreshold.prototype.StateNumber = function (k) {
        if (this.Signal[k] > this.Activation) {
            // Above the activation threshold
            return 2;
        }
        else if (this.Signal[k] > this.Deactivation) {
            // Between the both thresholds
            return 1;
        }
        else {
            // Below the deactivation threshold
            return 0;
        }
    };
    HysteresisThreshold.prototype.PerformThresholding = function () {
        var N = this.Signal.length;
        var ResultVector = new Array(N).fill(false);
        // Initial condition
        var PastState = this.StateNumber(0);
        var kStartZone1 = 0;
        if (PastState == 0) {
            ResultVector[0] = false;
        }
        else if (PastState == 2) {
            ResultVector[0] = true;
        }
        else {
            // Beginning of a between zone
            kStartZone1 = 0;
        }
        var CurrentState;
        for (var k = 1; k < N; k++) {
            CurrentState = this.StateNumber(k);
            if (CurrentState == 0) {
                if (PastState == 1) {
                    for (var p = kStartZone1; p < k + 1; p++) {
                        ResultVector[p] = false;
                    }
                    PastState = 0;
                }
                else {
                    ResultVector[k] = false;
                    PastState = 0;
                }
            }
            else if (CurrentState == 1) {
                if (PastState == 0) {
                    kStartZone1 = k;
                    PastState = 1;
                }
                else if (PastState == 2) {
                    ResultVector[k] = true;
                    PastState = 2;
                }
            }
            else if (CurrentState == 2) {
                if (PastState == 1) {
                    for (var p = kStartZone1; p < k + 1; p++) {
                        ResultVector[p] = true;
                    }
                    PastState = 2;
                }
                else {
                    ResultVector[k] = true;
                    PastState = 2;
                }
            }
        }
        return (ResultVector);
    };
    return HysteresisThreshold;
}());

function ExtractPeakIndices(Signal) {
    var PeakIndices = [];
    var StatutNoteAP;
    var StatutNoteAV = -1;
    var kStart = -99;
    if (Signal.length == 1) {
        PeakIndices.push(0);
        return PeakIndices;
    }
    for (var k = 1; k < Signal.length; k++) {
        if (Signal[k] > Signal[k - 1]) {
            StatutNoteAP = 1;
        }
        else if (Signal[k] == Signal[k - 1]) {
            StatutNoteAP = 0;
        }
        else {
            StatutNoteAP = -1;
        }
        // Not a peak
        if ((StatutNoteAV == 1) && (StatutNoteAP == 0)) {
            kStart = k - 1;
        }
        if ((StatutNoteAV == 0) && (StatutNoteAP == 1)) {
            kStart = -99;
        }
        // Peak detected
        if ((StatutNoteAV == 1) && (StatutNoteAP == -1)) {
            PeakIndices.push(k - 1);
        }
        if ((StatutNoteAV == 0) && (StatutNoteAP == -1) && (kStart != -99)) {
            PeakIndices.push(Math.round(((kStart + k - 1) / 2.0)));
        }
        StatutNoteAV = StatutNoteAP;
    }
    if (PeakIndices.length == 0) {
        PeakIndices.push(Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["MaxOfArray"])(Signal).argmax);
    }
    return PeakIndices;
}
var HistogramMethod = /** @class */ (function () {
    function HistogramMethod(Te, LMH, StepST) {
        this.Te = Te;
        this.LMH = LMH;
        this.StepST = StepST;
        this.StdGaussian = (LMH / StepST) / 2.355;
        var NbPointsGaussian = Math.ceil(this.StdGaussian * 3 * 2);
        if (NbPointsGaussian % 2 == 0) {
            NbPointsGaussian += 1;
        }
        this.GaussianSmooth = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["gaussian"])(NbPointsGaussian, this.StdGaussian);
    }
    HistogramMethod.prototype.GetHistogram = function (Sonogram) {
        var _a;
        var NbStepMin = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["MinOfArray"])(Sonogram).value;
        var NbStepMax = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["MaxOfArray"])(Sonogram).value;
        NbStepMin = Math.floor(NbStepMin / this.StepST);
        NbStepMax = Math.ceil(NbStepMax / this.StepST);
        var MinST = NbStepMin * this.StepST;
        var MaxST = NbStepMax * this.StepST;
        var Histo;
        var XRange;
        _a = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["histogram"])(Sonogram, NbStepMax - NbStepMin, MinST, MaxST), Histo = _a[0], XRange = _a[1];
        return [Histo, XRange];
    };
    HistogramMethod.prototype.SmoothHistogram = function (Histogram) {
        var HistogramSmooth = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["convolve"])(Histogram, this.GaussianSmooth);
        return HistogramSmooth;
    };
    HistogramMethod.prototype.DeletePeaksTooLow = function (NotesList, NbSamplesMin) {
        var NewList = NotesList.slice();
        // Sort from highest to lowest
        NewList = NewList.sort(function (n1, n2) { return n2.notelength - n1.notelength; });
        while ((NewList.length > 1) && (NewList[NewList.length - 1].notelength < NbSamplesMin)) {
            NewList.pop();
        }
        return NewList;
    };
    HistogramMethod.prototype.ExtractPeaks = function (Sonogram) {
        var _a;
        var Histo;
        var XRange;
        _a = this.GetHistogram(Sonogram), Histo = _a[0], XRange = _a[1];
        var HistogramSmooth = this.SmoothHistogram(Histo);
        // Detect Peak in the histogram
        var PeakIndices = ExtractPeakIndices(HistogramSmooth);
        var NotesList = [];
        var tempheight;
        var templength;
        for (var k = 0; k < PeakIndices.length; k++) {
            templength = HistogramSmooth[PeakIndices[k]];
            tempheight = XRange[PeakIndices[k]] + this.StepST / 2.0;
            NotesList.push({ notelength: templength, noteheight: tempheight });
        }
        return NotesList;
    };
    HistogramMethod.prototype.DeletePeaksTooClosed = function (NotesList, MinSemiToneGap) {
        var NewList = NotesList.slice();
        var IndNote = 0;
        var NoteListLen = NewList.length;
        while (IndNote < (NoteListLen - 1)) {
            NoteListLen = NewList.length;
            for (var IndNoteTest = NoteListLen - 1; IndNoteTest > IndNote; IndNoteTest--) {
                if (Math.abs(NewList[IndNoteTest].noteheight - NewList[IndNote].noteheight) < MinSemiToneGap) {
                    NewList.slice(IndNoteTest, 1);
                }
            }
            IndNote += 1;
            NoteListLen = NewList.length;
        }
        return NewList;
    };
    HistogramMethod.prototype.ExtractNotes = function (Sonogram, MinNoteSize, MinNoteDiff) {
        var NotesList = this.ExtractPeaks(Sonogram);
        // Delete peaks under MinNoteSize
        var NbSampMin = Math.round(MinNoteSize / (this.Te));
        NotesList = this.DeletePeaksTooLow(NotesList, NbSampMin);
        // Delete peaks too closed (keeping only the higher peak)
        NotesList = this.DeletePeaksTooClosed(NotesList, MinNoteDiff);
        return NotesList;
    };
    return HistogramMethod;
}());

var StepDetector = /** @class */ (function () {
    function StepDetector() {
        this.Groups = [];
        this.FittedSignals = [[]];
    }
    StepDetector.prototype.init_parameters = function (stepParameter) {
        this.medianfiltersize_s = stepParameter.medianfiltersize_s;
        this.thresholdenergyon_db = stepParameter.thresholdenergyon_db;
        this.thresholdenergyoff_db = stepParameter.thresholdenergyoff_db;
        this.maxpitchvariation_st = stepParameter.maxpitchvariation_st;
        this.minimumtimesize_s = stepParameter.minimumtimesize_s;
        this.minnotesize_s = stepParameter.minnotesize_s;
        this.minnotediff_st = stepParameter.minnotediff_st;
        this.lmhgaussian_st = stepParameter.lmhgaussian_st;
    };
    StepDetector.prototype.Masked_Invalid = function () {
        for (var k = 0; k < this.NbSamples; k++) {
            if (!Number.isFinite(this.PitchArray[k]) ||
                !Number.isFinite(this.EnergyArray[k]) ||
                (this.PitchArray[k] < 0)) {
                this.MaskArray[k] = true;
            }
        }
    };
    StepDetector.prototype.set_init_var = function (pitchResult) {
        this.Te = pitchResult.te_s;
        this.f0 = pitchResult.f0_hz;
        this.NbSamples = pitchResult.pitch_st.length;
        this.MaskArray = new Array(this.NbSamples).fill(false);
        this.PitchArray = pitchResult.pitch_st;
        this.EnergyArray = pitchResult.energy_db;
        this.Masked_Invalid();
    };
    // Time First Group
    StepDetector.prototype.TimeOffsetFirstGroup = function () {
        for (var k = 0; k < this.NbSamples; k++) {
            if (this.MaskArray[k] == false) {
                return (k * this.Te);
            }
        }
        return (0.0);
    };
    // Tone height range
    StepDetector.prototype.Masked_ToneHeight = function (ToneMin, ToneMax) {
        if (ToneMin != null) {
            for (var k = 0; k < this.NbSamples; k++) {
                if (this.PitchArray[k] < ToneMin) {
                    this.MaskArray[k] = true;
                }
            }
        }
        if (ToneMax != null) {
            for (var k = 0; k < this.NbSamples; k++) {
                if (this.PitchArray[k] > ToneMax) {
                    this.MaskArray[k] = true;
                }
            }
        }
    };
    StepDetector.prototype._Masked_MinimumEnergy = function (ThresholdOn, ThresholdOff) {
        var HystThreshold = new HysteresisThreshold(this.EnergyArray, ThresholdOn, ThresholdOff);
        var MaskEnergy = HystThreshold.PerformThresholding();
        for (var k = 0; k < this.NbSamples; k++) {
            this.MaskArray[k] = this.MaskArray[k] || !MaskEnergy[k];
        }
    };
    StepDetector.prototype._ClearFittedSignals = function (MinNoteSize) {
        var WindowsSizeDiv2 = Math.round(MinNoteSize / (this.Te));
        var N;
        var IndDeb;
        var IndFin;
        var Modification;
        var MostCommonValue;
        var NewFittedSignal;
        var OriginalfittedSignal;
        for (var indSignal = 0; indSignal < this.FittedSignals.length; indSignal++) {
            N = this.FittedSignals[indSignal].length;
            NewFittedSignal = new Array(N).fill(0);
            if (N <= (2 * WindowsSizeDiv2 + 1)) {
                MostCommonValue = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["mode"])(this.FittedSignals[indSignal]);
                NewFittedSignal = new Array(N).fill(MostCommonValue);
            }
            else {
                Modification = true;
                NewFittedSignal = this.FittedSignals[indSignal].slice();
                while (Modification) {
                    Modification = false;
                    OriginalfittedSignal = NewFittedSignal.slice();
                    // Debut du signal
                    IndDeb = 0;
                    IndFin = 2 * WindowsSizeDiv2 + 1;
                    MostCommonValue = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["mode"])(OriginalfittedSignal.slice(IndDeb, IndFin));
                    for (var k = 0; k < WindowsSizeDiv2; k++) {
                        if (NewFittedSignal[k] != MostCommonValue) {
                            NewFittedSignal[k] = MostCommonValue;
                            Modification = true;
                        }
                    }
                    // Milieu du signal
                    for (var k = WindowsSizeDiv2; k < (N - WindowsSizeDiv2 - 1); k++) {
                        IndDeb = k - WindowsSizeDiv2;
                        IndFin = k + WindowsSizeDiv2 + 1;
                        MostCommonValue = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["mode"])(OriginalfittedSignal.slice(IndDeb, IndFin));
                        if (NewFittedSignal[k] != MostCommonValue) {
                            NewFittedSignal[k] = MostCommonValue;
                            Modification = true;
                        }
                    }
                    // Fin du signal
                    IndFin = N;
                    IndDeb = N - 2 * WindowsSizeDiv2 - 1;
                    MostCommonValue = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["mode"])(OriginalfittedSignal.slice(IndDeb, IndFin));
                    for (var k = (N - WindowsSizeDiv2 - 1); k < N; k++) {
                        if (NewFittedSignal[k] != MostCommonValue) {
                            NewFittedSignal[k] = MostCommonValue;
                            Modification = true;
                        }
                    }
                }
            }
            this.FittedSignals[indSignal] = NewFittedSignal;
        }
    };
    // Median filter
    StepDetector.prototype.A_ApplyMedianFilter = function (WindowSize) {
        if (WindowSize < 0) {
            console.log("WindowSize input cannot be a negatif number");
        }
        var kernel_size = Math.round(WindowSize / this.Te);
        if ((kernel_size % 2) == 0) {
            kernel_size += 1;
        }
        if (kernel_size < 3) {
            console.log("WindowSize is too low, the median filter will have no effect");
        }
        var kMiddle = (kernel_size - 1) / 2;
        var TempArray;
        var SortedTempArray;
        var FilteredArray = new Array(this.NbSamples);
        for (var k = 0; k < this.NbSamples; k++) {
            if (!Number.isFinite(this.PitchArray[k]) ||
                (this.PitchArray[k] < 0)) {
                this.PitchArray[k] = -1;
            }
        }
        for (var k = 0; k < this.NbSamples; k++) {
            if (k < kMiddle) {
                TempArray = this.PitchArray.slice(0, kernel_size);
            }
            else if (k > (this.NbSamples - kMiddle)) {
                TempArray = this.PitchArray.slice(this.NbSamples - kernel_size, this.NbSamples);
            }
            else {
                TempArray = this.PitchArray.slice(k - kMiddle, k + kMiddle + 1);
            }
            SortedTempArray = TempArray.sort(function (n1, n2) { return n1 - n2; });
            FilteredArray[k] = SortedTempArray[kMiddle];
        }
        this.PitchArray = FilteredArray;
        this.Masked_Invalid();
    };
    // Energy filter
    StepDetector.prototype.B_Masked_AutoEnergy = function (ThresholdEnergy_ON, ThresholdEnergy_OFF) {
        var _a;
        var Energy_dB = [];
        for (var k = 0; k < this.NbSamples; k++) {
            if (!this.MaskArray[k]) {
                Energy_dB.push(this.EnergyArray[k]);
            }
        }
        var X_histo;
        var histogram_Energy;
        var bins = 1000;
        _a = GaussianKdeHistogram(Energy_dB, bins), X_histo = _a[0], histogram_Energy = _a[1];
        var indMax = 0;
        var tempMax = -9999;
        for (var k = 0; k < bins; k++) {
            if (histogram_Energy[k] > tempMax) {
                tempMax = histogram_Energy[k];
                indMax = k;
            }
        }
        var MeansignalEnergy = X_histo[indMax];
        var ThresholdNat_ON = MeansignalEnergy - ThresholdEnergy_ON;
        var ThresholdNat_OFF = MeansignalEnergy - ThresholdEnergy_OFF;
        this._Masked_MinimumEnergy(ThresholdNat_ON, ThresholdNat_OFF);
    };
    // Maximum variation
    StepDetector.prototype.C_Masked_MaximumVariation = function (MaxVariation) {
        if (MaxVariation === void 0) { MaxVariation = 1.0; }
        for (var k = 0; k < this.NbSamples - 1; k++) {
            if (Math.abs(this.PitchArray[k] - this.PitchArray[k + 1]) > MaxVariation) {
                this.MaskArray[k] = true;
                this.MaskArray[k + 1] = true;
            }
        }
    };
    // Minimum size of consecutive correct pitch
    StepDetector.prototype.D_Masked_MinimumTimeSize = function (MinimumSize) {
        if (MinimumSize < 0) {
            console.log("MinimumSize input cannot be a negatif number");
        }
        var NbSamplesMin = Math.round(MinimumSize / this.Te);
        var ValMaskInit = this.MaskArray[0];
        var kInit = 0;
        var NbSamplesSameValue = 1;
        for (var k = 1; k < this.NbSamples; k++) {
            if (this.MaskArray[k] == ValMaskInit) {
                NbSamplesSameValue = NbSamplesSameValue + 1;
            }
            else {
                if ((ValMaskInit == false) && (NbSamplesSameValue < NbSamplesMin)) {
                    for (var p = kInit; p < k; p++) {
                        this.MaskArray[p] = true;
                    }
                }
                NbSamplesSameValue = 1;
                ValMaskInit = this.MaskArray[k];
                kInit = k;
            }
        }
        if ((ValMaskInit == false) && (NbSamplesSameValue < NbSamplesMin)) {
            for (var p = kInit; p < this.NbSamples; p++) {
                this.MaskArray[p] = true;
            }
        }
    };
    StepDetector.prototype.E_DetectGroupsOfNotes = function () {
        // Detection de chaque portes
        this.Groups = [];
        var PorteDetected = false;
        var kStart = 0;
        if (this.MaskArray[0] == false) {
            PorteDetected = true;
            kStart = 0;
        }
        for (var k = 1; k < this.NbSamples; k++) {
            if ((this.MaskArray[k] == false) && !PorteDetected) {
                PorteDetected = true;
                kStart = k;
            }
            if ((this.MaskArray[k] == true) && PorteDetected) {
                this.Groups.push({ IndStart: kStart, IndStop: k });
                PorteDetected = false;
            }
        }
    };
    StepDetector.prototype.F_Detectnotes = function (MinNoteSize, MinNoteDiff, LMHGaussian) {
        var SemiToneStep = 0.01;
        var MethodHisto = new HistogramMethod(this.Te, LMHGaussian, SemiToneStep);
        this.FittedSignals = [];
        this.Groups.length;
        var TempSono;
        var FitSignal;
        var NotesList;
        var IndMin;
        var TempMin;
        for (var kgroup = 0; kgroup < this.Groups.length; kgroup++) {
            TempSono = this.PitchArray.slice(this.Groups[kgroup].IndStart, this.Groups[kgroup].IndStop);
            NotesList = MethodHisto.ExtractNotes(TempSono, MinNoteSize, MinNoteDiff);
            // Numerized signal
            FitSignal = new Array(TempSono.length);
            for (var ksono = 0; ksono < TempSono.length; ksono++) {
                TempMin = Number.MAX_VALUE;
                IndMin = 0;
                for (var knl = 0; knl < NotesList.length; knl++) {
                    if (Math.abs(TempSono[ksono] - NotesList[knl].noteheight) < TempMin) {
                        TempMin = Math.abs(TempSono[ksono] - NotesList[knl].noteheight);
                        IndMin = knl;
                    }
                }
                FitSignal[ksono] = NotesList[IndMin].noteheight;
            }
            this.FittedSignals.push(FitSignal);
        }
        this._ClearFittedSignals(MinNoteSize);
    };
    StepDetector.prototype.G_GenerateAnalogPartition = function () {
        var DicoNotes = [];
        var IndGroupStart;
        var IndGroupBeforeStop;
        var LengthSilence;
        var N;
        var IndNoteStart;
        var NbNotes;
        var HeightNoteBefore;
        var HeightNoteCurrent;
        var LinkedNote;
        var NbSamplesNote;
        var EnergyNote;
        for (var IndGroup = 0; IndGroup < this.Groups.length; IndGroup++) {
            IndGroupStart = this.Groups[IndGroup].IndStart;
            // Adding the blank between each group
            if (IndGroup > 0) {
                IndGroupBeforeStop = this.Groups[IndGroup - 1].IndStop;
                LengthSilence = (IndGroupStart - IndGroupBeforeStop) * this.Te;
                // Add A rest
                DicoNotes.push({ type_b: false, length_s: LengthSilence, f0_hz: null, pitch_st: null, energy_db: null, linked_b: null });
            }
            N = this.FittedSignals[IndGroup].length;
            IndNoteStart = 0;
            NbNotes = 0;
            for (var ind = 1; ind < N; ind++) {
                HeightNoteBefore = this.FittedSignals[IndGroup][ind - 1];
                HeightNoteCurrent = this.FittedSignals[IndGroup][ind];
                if ((HeightNoteCurrent != HeightNoteBefore) || (ind == N - 1)) {
                    LinkedNote = NbNotes > 0;
                    NbSamplesNote = ind - IndNoteStart;
                    if (ind == N - 1) {
                        NbSamplesNote += 1;
                    }
                    EnergyNote = Object(_shared_common_detector__WEBPACK_IMPORTED_MODULE_1__["MaxOfArray"])(this.EnergyArray.slice(IndGroupStart + IndNoteStart, IndGroupStart + ind)).value;
                    // Add A note
                    DicoNotes.push({ type_b: true, length_s: NbSamplesNote * this.Te, f0_hz: this.f0, pitch_st: HeightNoteBefore, energy_db: EnergyNote, linked_b: LinkedNote });
                    IndNoteStart = ind;
                    NbNotes += 1;
                }
            }
        }
        var offset = this.TimeOffsetFirstGroup();
        return ({ notes: DicoNotes, offset_s: offset });
    };
    StepDetector.prototype.run = function (pitchResult, debug) {
        var _this = this;
        if (debug === void 0) { debug = false; }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.set_init_var(pitchResult);
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Step detector: Applying median filter");
                console.log("/////////////////////////////////////");
                console.log("    Median filter size: " + _this.medianfiltersize_s.toString() + " seconds");
                console.log("    Pitch array and Mask array before applying filter:");
                console.log(_this.PitchArray);
                console.log(_this.MaskArray);
            }
            observer.next({ progression: { value: 1, total: 8, step: "Applying median filter" } });
            _this.A_ApplyMedianFilter(_this.medianfiltersize_s);
            if (debug) {
                console.log("    Pitch array and Mask array after applying filter:");
                console.log(_this.PitchArray);
                console.log(_this.MaskArray);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////");
                console.log("Step detector: Masking low energy");
                console.log("/////////////////////////////////");
                console.log("    Threshold energy on: " + _this.thresholdenergyon_db.toString() + " dB");
                console.log("    Threshold energy off: " + _this.thresholdenergyoff_db.toString() + " dB");
                console.log("    Energy array and Mask array before applying mask:");
                console.log(_this.EnergyArray);
                console.log(_this.MaskArray);
            }
            observer.next({ progression: { value: 2, total: 8, step: "Masking low energy signals" } });
            _this.B_Masked_AutoEnergy(_this.thresholdenergyon_db, _this.thresholdenergyoff_db);
            if (debug) {
                console.log("    Energy array and Mask array after applying mask:");
                console.log(_this.EnergyArray);
                console.log(_this.MaskArray);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////");
                console.log("Step detector: Masking big variations");
                console.log("/////////////////////////////////////");
                console.log("    Variation max: " + _this.maxpitchvariation_st.toString() + " halftone");
                console.log("    Pitch array and Mask array before applying mask:");
                console.log(_this.PitchArray);
                console.log(_this.MaskArray);
            }
            observer.next({ progression: { value: 3, total: 8, step: "Removing big pitch variations" } });
            _this.C_Masked_MaximumVariation(_this.maxpitchvariation_st);
            if (debug) {
                console.log("    Pitch array and Mask array after applying mask:");
                console.log(_this.PitchArray);
                console.log(_this.MaskArray);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("//////////////////////////////////////////");
                console.log("Step detector: Masking too short detection");
                console.log("//////////////////////////////////////////");
                console.log("    Length min: " + _this.minimumtimesize_s.toString() + " seconds");
                console.log("    Pitch array and Mask array before applying mask:");
                console.log(_this.PitchArray);
                console.log(_this.MaskArray);
            }
            observer.next({ progression: { value: 4, total: 8, step: "Masking too short detections" } });
            _this.D_Masked_MinimumTimeSize(_this.minimumtimesize_s);
            if (debug) {
                console.log("    Energy array and Mask array after applying mask:");
                console.log(_this.PitchArray);
                console.log(_this.MaskArray);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("////////////////////////////////////////");
                console.log("Step detector: Detecting groups of notes");
                console.log("////////////////////////////////////////");
                console.log("    Pitch array and Mask array before detecting groups:");
                console.log(_this.PitchArray);
                console.log(_this.MaskArray);
            }
            observer.next({ progression: { value: 5, total: 8, step: "Detecting group of notes" } });
            _this.E_DetectGroupsOfNotes();
            if (debug) {
                console.log("    Groups detected:");
                console.log(_this.Groups);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("/////////////////////////////////////////////////////////");
                console.log("Step detector: Detecting notes inside each group of notes");
                console.log("/////////////////////////////////////////////////////////");
                console.log("    Groups:");
                console.log(_this.Groups);
            }
            observer.next({ progression: { value: 6, total: 8, step: "Detecting steps (edges)" } });
            _this.F_Detectnotes(_this.minnotesize_s, _this.minnotediff_st, _this.lmhgaussian_st);
            if (debug) {
                console.log("    Signal fitted in each group:");
                console.log(_this.FittedSignals);
                console.log("/////////////////////////////////////");
            }
            if (debug) {
                console.log("////////////////////////////////////////");
                console.log("Step detector: Generate Analog partition");
                console.log("////////////////////////////////////////");
                console.log("    Signal fitted in each group:");
                console.log(_this.FittedSignals);
            }
            observer.next({ progression: { value: 7, total: 8, step: "Building output" } });
            var output = _this.G_GenerateAnalogPartition();
            if (debug) {
                console.log("    OUTPUT:");
                console.log(output);
                console.log("/////////////////////////////////////");
            }
            observer.next({ progression: { value: 8, total: 8, step: "Finished" } });
            observer.next({ result: output });
            observer.complete();
        });
    };
    return StepDetector;
}());



/***/ }),

/***/ "./src/worker/main.worker.ts":
/*!***********************************!*\
  !*** ./src/worker/main.worker.ts ***!
  \***********************************/
/*! exports provided: worker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return worker; });
/* harmony import */ var _app_workers_app_workers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-workers/app.workers */ "./src/worker/app-workers/app.workers.ts");
/* <project-root>/src/worker/main.worker.ts */

var worker = new _app_workers_app_workers__WEBPACK_IMPORTED_MODULE_0__["AppWorkers"](self);
addEventListener('message', function ($event) {
    worker.workerBroker($event);
});


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/worker/main.worker.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/worker/main.worker.ts */"./src/worker/main.worker.ts");


/***/ })

/******/ });