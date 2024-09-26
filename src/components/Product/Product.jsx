import React from 'react';
import './Product.css';

function Product({ title, description, image }) {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
