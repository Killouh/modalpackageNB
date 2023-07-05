"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// voir attribut/template de taille
// voir proposition avec modal header/title, footer
// Voir les différents usages de modale
// voir pour ajouter classe dans la modale
/**
 * Provide a modal package for react project
 * @param {Usestate}, from modal action : isopen = true or false
 * @returns {JSX}, render the modal if isopen = true and close it when false
 * Render modal content and behavior
 */
var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children,
    modalClassName = _ref.modalClassName,
    contentClassName = _ref.contentClassName,
    closeClassName = _ref.closeClassName;
  var closeModal = function closeModal() {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };
  if (!isOpen) {
    return null;
  }
  var modalClassNameConst = modalClassName;
  var contentClassNameConst = contentClassName;
  var closeClassNameeConst = closeClassName;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: modalClassNameConst,
    "data-testid": "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: contentClassNameConst,
    "data-testid": "content"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: closeClassNameeConst,
    onClick: closeModal,
    "data-testid": "close"
  }, " ", "X", " "), children));
};
Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired,
  modalClassName: _propTypes["default"].string,
  contentClassName: _propTypes["default"].string,
  closeClassName: _propTypes["default"].string
};
var _default = Modal;
exports["default"] = _default;
