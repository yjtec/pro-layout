"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

require("./Header.less");

var _react = _interopRequireWildcard(require("react"));

var _GlobalHeader = _interopRequireDefault(require("./GlobalHeader"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Header = _layout.default.Header;

var HeaderView =
/*#__PURE__*/
function (_Component) {
  _inherits(HeaderView, _Component);

  function HeaderView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderContent = function () {
      return _react.default.createElement(_GlobalHeader.default, _this.props);
    };

    _this.getHeadWidth = function () {
      var _this$props = _this.props,
          isMobile = _this$props.isMobile,
          collapsed = _this$props.collapsed,
          fixedHeader = _this$props.fixedHeader,
          layout = _this$props.layout,
          _this$props$siderWidt = _this$props.siderWidth,
          siderWidth = _this$props$siderWidt === void 0 ? 256 : _this$props$siderWidt;

      if (isMobile || !fixedHeader || layout === 'topmenu') {
        return '100%';
      }

      return collapsed ? 'calc(100% - 80px)' : "calc(100% - ".concat(siderWidth, "px)");
    };

    return _this;
  }

  _createClass(HeaderView, [{
    key: "render",
    value: function render() {
      var fixedHeader = this.props.fixedHeader;
      var width = this.getHeadWidth();
      return _react.default.createElement(Header, {
        style: {
          padding: 0,
          zIndex: 2,
          width: '100%'
        },
        className: fixedHeader ? 'ant-pro-fixed-header' : ''
      }, this.renderContent());
    }
  }]);

  return HeaderView;
}(_react.Component);

HeaderView.defaultProps = {};
var _default = HeaderView;
exports.default = _default;