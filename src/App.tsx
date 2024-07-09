import React, { useState } from "react";
import "./App.css";
import NavHeader from "./components/nav-header/nav-header";
import ProductCard from "./components/ProductsCard";
import Rafello from "./assets/products/rafaeloi.jpg";
import PlainBelgian from "./assets/products/PlainBelgain.jpg";
import MilkChocolate from "./assets/products/MilkChocolate.jpg";
import shrimp from "./assets/products/ShrimpAndBasil.jpg";
import lemonIced from "./assets/products/LemonIced.jpg";
import churro from "./assets/products/Churro.jpg";
import biscoff from "./assets/products/Biscof.jpg";
import wafflePops from "./assets/products/wafflepops.jpg";
import saltedCaramel from "./assets/products/saltedcaramel.jpg";
import Footer from "./components/footer/footer";
import Modal from "./components/modal/modal";
import ModalCard from "./components/modalcard/ModalCard";

const products = [
  {
    name: "Rafaello",
    image: Rafello,
    price: 9.99,
    id: 1,
  },
  {
    name: "Plain Belgian",
    image: PlainBelgian,
    price: 5.99,
    id: 2,
  },
  {
    name: "Milk Chocolate",
    image: MilkChocolate,
    price: 7.99,
    id: 3,
  },
  {
    name: "Shrimp & Basil",
    image: shrimp,
    price: 12.99,
    id: 4,
  },
  {
    name: "Lemon Iced",
    image: lemonIced,
    price: 15.99,
    id: 5,
  },
  {
    name: "Churro",
    image: churro,
    price: 6.99,
    id: 6,
  },
  {
    name: "Biscoff",
    image: biscoff,
    price: 8.99,
    id: 7,
  },
  {
    name: "Waffle Pops",
    image: wafflePops,
    price: 10.99,
    id: 8,
  },
  {
    name: "Salted Caramel",
    image: saltedCaramel,
    price: 11.99,
    id: 9,
  },
];

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };
  console.log("product", selectedProduct)

  return (
    <>
      <NavHeader />
      <div className="body-wrapper">
        <div className="center-div">
          <h1 className="productHeader">Browse by Category</h1>
          <h4>All</h4>
          <p>Pre-packed</p>
          <p>Savoury</p>
          <p>Sweet</p>
          <p>Premium</p>

          <div>
            <h4>Filter by price</h4>
            <p>₦2500 - ₦4000</p>
            <p>₦4000 - ₦6000</p>
            <p>₦6000 - ₦8000</p>
            <p>₦8000 - ₦10000</p>
            <p>₦10000 +</p>
          </div>
        </div>
        <div className="productWrapper">
          <div className="three-column-container">
            {products.map((product) => (
              <div
                className="three-column-item"
                key={product.id}
                onClick={() => openModal(product)}
              >
                <ProductCard
                  name={product.name}
                  imageUrl={product.image}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>

      {modalVisible && selectedProduct && (
        <Modal isOpen={modalVisible} onClose={closeModal}>
          <ModalCard
            title={selectedProduct.name}
            description={`This is a description of the product: ${selectedProduct.name}`}
            imageUrl={selectedProduct.image}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
