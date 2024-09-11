'use client';
import React, { useState, useEffect } from 'react';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data product dari API untuk daftar produk
    fetch('/api/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        setError(err.message);
        console.error("Fetch error:", err);
      });
  }, []);

  return (
    <div>
      <h1>Product Listing</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductListing;
