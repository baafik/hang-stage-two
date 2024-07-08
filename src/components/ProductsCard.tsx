/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  name,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt="alt" className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">from ${price}</p>
      <button className="add-to-cart-button">Add To Cart</button>
    </div>
  );
}
