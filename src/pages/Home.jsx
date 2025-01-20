import React from "react";
import { Link } from "react-router-dom";
import productsData from "../products.json";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>รายการสินค้า</h1>
      <div className="product-grid">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} บาท</p>
            <Link to={`/product/${product.id}`}>
              <button>ดูรายละเอียด</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
