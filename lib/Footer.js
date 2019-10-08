"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/layout/style");

var _layout = _interopRequireDefault(require("antd/es/layout"));

var _react = _interopRequireWildcard(require("react"));

var _GlobalFooter = _interopRequireDefault(require("./GlobalFooter"));

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

var Footer = _layout.default.Footer;
var defaultLinks = [{
  key: 'Ant Design Pro',
  title: 'official web',
  href: 'http://www.hnyjkj.com',
  blankTarget: true
}, {
  key: 'github',
  title: _react.default.createElement(_icon.default, {
    type: "github"
  }),
  href: 'https://github.com/ant-design/ant-design-pro',
  blankTarget: true
}, {
  key: 'Ant Design',
  title: 'about us',
  href: 'http://www.hnyjkj.com/contact/',
  blankTarget: true
}];
var defaultCopyright = '2019 艺境空间 技术部出品';

var FooterView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FooterView, _React$Component);

  function FooterView() {
    _classCallCheck(this, FooterView);

    return _possibleConstructorReturn(this, _getPrototypeOf(FooterView).apply(this, arguments));
  }

  _createClass(FooterView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          links = _this$props.links,
          copyright = _this$props.copyright;
      return _react.default.createElement(Footer, {
        style: {
          padding: 0
        }
      }, _react.default.createElement(_GlobalFooter.default, {
        links: links || defaultLinks,
        copyright: _react.default.createElement(_react.Fragment, null, "Copyright ", _react.default.createElement(_icon.default, {
          type: "copyright"
        }), " ", copyright || defaultCopyright)
      }));
    }
  }]);

  return FooterView;
}(_react.default.Component);

var _default = FooterView;
exports.default = _default;