'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditProduct = ({ params }) => {
  const [product, setProduct] = useState(null);
  const { id } = params; // Ambil ID dari route params

  useEffect(() => {
    // Fetch product data by ID dari API
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return product ? (
    <div>
      <h1>Edit Product: {product.name}</h1>
      {/* Form untuk mengedit produk */}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EditProduct;
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditProduct = ({ params }) => {
  const [product, setProduct] = useState(null);
  const { id } = params; // Ambil ID dari route params

  useEffect(() => {
    // Fetch product data by ID dari API
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return product ? (
    <div>
      <h1>Edit Product: {product.name}</h1>
      {/* Form untuk mengedit produk */}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EditProduct;
