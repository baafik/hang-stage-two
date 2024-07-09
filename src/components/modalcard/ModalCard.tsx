import React from "react";
import "./ModalCard.css";
import PlainBelgian from "../../assets/products/PlainBelgain.jpg";
import Modal from "../modal/Modal";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ModalCard: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ModalCard;
