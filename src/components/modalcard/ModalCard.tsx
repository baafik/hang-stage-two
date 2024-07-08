import React from "react";
import PlainBelgian from "../../assets/products/PlainBelgain.jpg";
import Modal from "../modal/modal";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ModalCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <Modal>
      <div className="card">
        <img src={PlainBelgian} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
