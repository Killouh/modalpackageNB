import React from "react";
import PropTypes from "prop-types";



// voir attribut/template de taille
// voir proposition avec modal header/title, footer
// Voir les différents usages de modale



/**
 * Provide a modal package for react project
 * @param {Usestate}, from modal action : isopen = true or false
 * @returns {JSX}, render the modal if isopen = true and close it when false
 * Render modal content and behavior
 */

const Modal = ({
  isOpen,
  onClose,
  children,
  modalClassName,
  contentClassName,
  closeClassName,
}) => {
  const closeModal = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const modalClassNameConst = modalClassName;
  const contentClassNameConst = contentClassName;
  const closeClassNameeConst = closeClassName;

  return (
    <div className={modalClassNameConst} data-testid="modal">
      <div className={contentClassNameConst} data-testid="content">
        <span
          className={closeClassNameeConst}
          onClick={closeModal}
          data-testid="close"
        >
          {" "}
          X{" "}
        </span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  modalClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  closeClassName: PropTypes.string,
};

export default Modal;
