// components/ProductAdd.tsx
"use client";
import React, { useState } from "react";

const ProductAdd: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [orders, setOrders] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = { name, price: parseFloat(price), orders: parseInt(orders) };

    // Call API to add a new product
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    }).then(response => {
      if (response.ok) {
        window.location.href = "/products"; // Redirect ke halaman product list setelah menambahkan
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Orders</label>
        <input
          type="number"
          value={orders}
          onChange={(e) => setOrders(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Product
      </button>
    </form>
  );
};

export default ProductAdd;
