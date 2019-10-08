import './index.less';
import React from 'react';
import classNames from 'classnames';
export default (function (props) {
  var className = props.className,
      links = props.links,
      copyright = props.copyright;
  var clsString = classNames('ant-pro-global-footer', className);
  return React.createElement("footer", {
    className: clsString
  }, links && React.createElement("div", {
    className: "ant-pro-global-footer-links"
  }, links.map(function (link) {
    return React.createElement("a", {
      key: link.key,
      title: link.key,
      target: link.blankTarget ? '_blank' : '_self',
      href: link.href
    }, link.title);
  })), copyright && React.createElement("div", {
    className: "ant-pro-global-footer-copyright"
  }, copyright));
});