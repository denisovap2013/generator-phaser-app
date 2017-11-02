(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _Boot = require("./states/Boot.js");

var _Boot2 = _interopRequireDefault(_Boot);

var _Preload = require("./states/Preload.js");

var _Preload2 = _interopRequireDefault(_Preload);

var _Game = require("./states/Game.js");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game;

window.onload = function () {
	game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
	game.state.add('boot', _Boot2.default);
	game.state.add('preload', _Preload2.default);
	game.state.add('game', _Game2.default);
	game.state.start("boot");
};

},{"./states/Boot.js":2,"./states/Game.js":3,"./states/Preload.js":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Boot = function () {
	function Boot() {
		_classCallCheck(this, Boot);
	}

	_createClass(Boot, [{
		key: "preload",
		value: function preload() {
			this.load.image("preloader", "assets/images/loading_bar.png");
		}
	}, {
		key: "create",
		value: function create() {
			this.game.input.maxPointers = 1;
			this.game.state.start("preload");
		}
	}]);

	return Boot;
}();

exports.default = Boot;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);
    }

    _createClass(Game, [{
        key: "create",
        value: function create() {}
    }]);

    return Game;
}();

exports.default = Game;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Preload = function () {
    function Preload() {
        _classCallCheck(this, Preload);

        this.asset = null;
        this.ready = false;
    }

    _createClass(Preload, [{
        key: "preload",
        value: function preload() {
            this.load.image("loading_bg", "assets/images/loading_bg.jpg");
        }
    }, {
        key: "create",
        value: function create() {

            // background for a game
            this.add.sprite(0, 0, "loading_bg");

            this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, "preloader");
            this.asset.anchor.setTo(0.5, 0.5);

            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
            this.load.setPreloadSprite(this.asset);

            // LOADING ASSETS HERE

            // start loading
            this.load.start();
        }
    }, {
        key: "update",
        value: function update() {
            if (this.ready) {
                this.game.state.start("game");
            }
        }
    }, {
        key: "onLoadComplete",
        value: function onLoadComplete() {
            this.ready = true;
        }
    }]);

    return Preload;
}();

exports.default = Preload;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGFwcC5qcyIsInNyY1xcc3RhdGVzXFxCb290LmpzIiwic3JjXFxzdGF0ZXNcXEdhbWUuanMiLCJzcmNcXHN0YXRlc1xcUHJlbG9hZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFKQSxJQUFJLElBQUo7O0FBTUEsT0FBTyxNQUFQLEdBQWdCLFlBQVk7QUFDM0IsUUFBTyxJQUFJLE9BQU8sSUFBWCxDQUFnQixHQUFoQixFQUFvQixHQUFwQixFQUF5QixPQUFPLElBQWhDLEVBQXNDLE1BQXRDLENBQVA7QUFDQSxNQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsTUFBZjtBQUNBLE1BQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxTQUFmO0FBQ0EsTUFBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE1BQWY7QUFDQSxNQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCO0FBQ0EsQ0FORDs7Ozs7Ozs7Ozs7OztJQ05xQixJOzs7Ozs7OzRCQUNUO0FBQ1YsUUFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixFQUE2QiwrQkFBN0I7QUFDQTs7OzJCQUVTO0FBQ1QsUUFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixHQUE4QixDQUE5QjtBQUNBLFFBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FBc0IsU0FBdEI7QUFDQTs7Ozs7O2tCQVJtQixJOzs7Ozs7Ozs7Ozs7O0lDQUEsSTs7Ozs7OztpQ0FFUCxDQUVUOzs7Ozs7a0JBSmdCLEk7Ozs7Ozs7Ozs7Ozs7SUNBQSxPO0FBQ3BCLHVCQUFjO0FBQUE7O0FBQ2IsYUFBSyxLQUFMLEdBQWEsSUFBYjtBQUNBLGFBQUssS0FBTCxHQUFhLEtBQWI7QUFDQTs7OztrQ0FFYTtBQUNQLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFlBQWhCLEVBQThCLDhCQUE5QjtBQUNIOzs7aUNBRVM7O0FBRVQ7QUFDQSxpQkFBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFxQixZQUFyQjs7QUFFQSxpQkFBSyxLQUFMLEdBQWEsS0FBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixLQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWdCLENBQWhDLEVBQ0wsS0FBSyxJQUFMLENBQVUsTUFBVixHQUFpQixDQURaLEVBRUwsV0FGSyxDQUFiO0FBR0EsaUJBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNEIsR0FBNUI7O0FBRUEsaUJBQUssSUFBTCxDQUFVLGNBQVYsQ0FBeUIsT0FBekIsQ0FBaUMsS0FBSyxjQUF0QyxFQUFzRCxJQUF0RDtBQUNBLGlCQUFLLElBQUwsQ0FBVSxnQkFBVixDQUEyQixLQUFLLEtBQWhDOztBQUVBOztBQUVBO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVY7QUFDQTs7O2lDQUVRO0FBQ1IsZ0JBQUksS0FBSyxLQUFULEVBQWdCO0FBQ2YscUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FBc0IsTUFBdEI7QUFDQTtBQUNEOzs7eUNBRWlCO0FBQ2pCLGlCQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0E7Ozs7OztrQkFyQ2dCLE8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGdhbWU7XHJcblxyXG5pbXBvcnQgQm9vdCBmcm9tIFwiLi9zdGF0ZXMvQm9vdC5qc1wiO1xyXG5pbXBvcnQgUHJlbG9hZCBmcm9tIFwiLi9zdGF0ZXMvUHJlbG9hZC5qc1wiO1xyXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9zdGF0ZXMvR2FtZS5qc1wiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRnYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCw2MDAsIFBoYXNlci5BVVRPLCAnZ2FtZScpO1xyXG5cdGdhbWUuc3RhdGUuYWRkKCdib290JywgQm9vdCk7XHJcblx0Z2FtZS5zdGF0ZS5hZGQoJ3ByZWxvYWQnLCBQcmVsb2FkKTtcclxuXHRnYW1lLnN0YXRlLmFkZCgnZ2FtZScsIEdhbWUpO1xyXG5cdGdhbWUuc3RhdGUuc3RhcnQoXCJib290XCIpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vdCB7XHJcblx0cHJlbG9hZCAoKSB7XHJcblx0XHR0aGlzLmxvYWQuaW1hZ2UoXCJwcmVsb2FkZXJcIiwgXCJhc3NldHMvaW1hZ2VzL2xvYWRpbmdfYmFyLnBuZ1wiKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZSAoKSB7XHJcblx0XHR0aGlzLmdhbWUuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xyXG5cdFx0dGhpcy5nYW1lLnN0YXRlLnN0YXJ0KFwicHJlbG9hZFwiKTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuXHJcbiAgICBjcmVhdGUgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmFzc2V0ID0gbnVsbDtcclxuXHRcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHR9XHJcblxyXG4gICAgcHJlbG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKFwibG9hZGluZ19iZ1wiLCBcImFzc2V0cy9pbWFnZXMvbG9hZGluZ19iZy5qcGdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlICgpIHtcclxuXHJcbiAgICBcdC8vIGJhY2tncm91bmQgZm9yIGEgZ2FtZVxyXG4gICAgXHR0aGlzLmFkZC5zcHJpdGUoMCwwLCBcImxvYWRpbmdfYmdcIik7XHJcblxyXG4gICAgXHR0aGlzLmFzc2V0ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aC8yLCBcclxuICAgIFx0XHRcdFx0XHRcdFx0XHQgdGhpcy5nYW1lLmhlaWdodC8yLFxyXG4gICAgXHRcdFx0XHRcdFx0XHRcdCBcInByZWxvYWRlclwiKTtcclxuICAgIFx0dGhpcy5hc3NldC5hbmNob3Iuc2V0VG8oMC41LDAuNSk7XHJcblxyXG4gICAgXHR0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgIFx0dGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5hc3NldCk7XHJcblxyXG4gICAgXHQvLyBMT0FESU5HIEFTU0VUUyBIRVJFXHJcblxyXG4gICAgXHQvLyBzdGFydCBsb2FkaW5nXHJcbiAgICBcdHRoaXMubG9hZC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgIFx0aWYgKHRoaXMucmVhZHkpIHtcclxuICAgIFx0XHR0aGlzLmdhbWUuc3RhdGUuc3RhcnQoXCJnYW1lXCIpO1xyXG4gICAgXHR9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkQ29tcGxldGUgKCkge1xyXG4gICAgXHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==
