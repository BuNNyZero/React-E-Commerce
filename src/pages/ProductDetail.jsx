import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../products.json";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="error-message">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>ราคา: {product.price} บาท</p>
      <Link to="/">
        <button>กลับไปหน้าแรก</button>
      </Link>
    </div>
  );
}

export default ProductDetail;
