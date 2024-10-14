import React, { useState, useEffect } from 'react';
import './Content.css';
import Product from '../Product/Product';

function Content() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = (query, order) => {
    const searchUrl = query
      ? `https://dummyjson.com/products/search?q=${query}&sortBy=title&order=${order}`
      : `https://dummyjson.com/products?sortBy=title&order=${order}`;

    fetch(searchUrl)
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
    fetchProducts(searchQuery, sortOrder);
  }, [sortOrder, searchQuery]); 

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="content">
      <h1>Product List</h1>

      <div className="search-sort-bar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <select
          className="sort-dropdown"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="asc">Sort by Title (Ascending)</option>
          <option value="desc">Sort by Title (Descending)</option>
        </select>
      </div>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <Product
              key={product.id} 
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Content;
