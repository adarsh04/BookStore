"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookStore = function (_React$Component) {
  _inherits(BookStore, _React$Component);

  function BookStore() {
    _classCallCheck(this, BookStore);

    return _possibleConstructorReturn(this, (BookStore.__proto__ || Object.getPrototypeOf(BookStore)).apply(this, arguments));
  }

  _createClass(BookStore, [{
    key: "getCurrentTime",
    value: function getCurrentTime() {
      var date = new Date();
      return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }
  }, {
    key: "render",
    value: function render() {
      var headerText = "Book Store";
      var footerText = this.getCurrentTime();

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { headerText: headerText }),
        React.createElement(
          "p",
          null,
          " This is the book store "
        ),
        React.createElement(Footer, { footerText: footerText })
      );
    }
  }]);

  return BookStore;
}(React.Component);

//some text to indicate that this is the header of the book store


var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          " ",
          this.props.headerText,
          " "
        )
      );
    }
  }]);

  return Header;
}(React.Component);

//text to show the datetime at the bottom of the page


var Footer = function (_React$Component3) {
  _inherits(Footer, _React$Component3);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          null,
          " ",
          this.props.footerText,
          " "
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(BookStore, null), appRoot);
