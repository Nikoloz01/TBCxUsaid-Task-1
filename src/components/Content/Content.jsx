import React from 'react';
import './Content.css';
import Product from '../Product/Product';
import Image from "../../Image/box.png"

const products = [
  {
    title: 'Product 1',
    description: 'description for product 1.',
    image: Image,
  },
  {
    title: 'Product 2',
    description: 'description for product 2.',
    image: Image,
  },
  {
    title: 'Product 3',
    description: 'description for product 3.',
    image: Image,
  },
  {
    title: 'Product 4',
    description: 'description for product 4.',
    image: Image,
  },
  {
    title: 'Product 5',
    description: 'description for product 5.',
    image: Image,
  },
  {
    title: 'Product 6',
    description: 'description for product 6.',
    image: Image,
  },
];

function Content() {
  return (
    <div className="content">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <Product
           className= "product-item"
            key={index}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
