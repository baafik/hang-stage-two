// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
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

function App() {
  // const [count, setCount] = useState(0);

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

  // Render the products
  const renderProducts = () => {
    return (
      <div className="three-column-container">
        {products.map((product) => (
          <div className="three-column-item">
            <ProductCard
              key={product.name}
              name={product.name}
              imageUrl={product.image}
              price={product.price}
            />
          </div>
        ))}
      </div>
    );
  };

  // Inside the return statement
  // {renderProducts()}

  return (
    <>
      <NavHeader />
      <div className="body-wrapper">
        <div className="left-div">
          <h1 className="productHeader">Browse by categories</h1>
          <h2>All</h2>
          <p>Pre-packed</p>
          <p>Savoury</p>
          <p>Sweet</p>
          <p>Premium</p>
        </div>
        <div className="productWrapper"> {renderProducts()}</div>
      </div>
      <footer>
        <Footer />
      </footer>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
