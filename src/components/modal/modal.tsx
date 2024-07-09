/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="modal">
        <div className="modal-header">
          <FontAwesomeIcon icon={faTimes} className="close-icon" onClick={onClose} />
        </div>
        {children}
      </div>
    </>
  );
};

export default Modal;
