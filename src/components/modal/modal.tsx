/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./modal.css";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="backdrop" onClick={onClose} />
      <div className="modal">
        <button onClick={onClose} className="modal-close-button">
          ×
        </button>
        {children}
        <div className="modal-buttons">
          <button
            onClick={() => {
              navigate("/cart");
            }}
            className="view-cart-button"
          >
            View Cart
          </button>
          <button className="continue-shopping-button" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
