import React, { useState, useEffect } from 'react';
import './Content.css';
import Product from '../Product/Product';

function Content() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const fetchProducts = (order) => {
    fetch(`https://dummyjson.com/products?sortBy=title&order=${order}`)
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description || 'No description available',
          image: product.thumbnail || '',
        }));
        setProducts(fetchedProducts);
      });
  };

  useEffect(() => {
    fetchProducts(sortOrder);
  }, [sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="content">
      <h1>Product List</h1>
      <button onClick={toggleSortOrder}>
        Sort by Title ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <div className="product-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
