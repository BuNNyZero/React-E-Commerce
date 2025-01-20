import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import tshirtImage from "../images/t_shirt_white.jpg"; 
import jeansImage from "../images/jeans.jpg"; 

function ProductCard({ product }) {

  const imageUrl = product.id === 1 ? tshirtImage : jeansImage;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.price} บาท</p>
      <Link to={`/product/${product.id}`}>
        <button>ดูรายละเอียด</button>
      </Link>
    </div>
  );
}

export default ProductCard;
