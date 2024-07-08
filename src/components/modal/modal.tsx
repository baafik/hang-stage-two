/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./modal.css";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: any;
  closeModal?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  // const closeModal = () => {
  //   navigate("..");
  // };

  return (
    <>
      <div className="backdrop" onClick={closeModal} />
      <div className="modal">{children}</div>
    </>
  );
};

export default Modal;
