// components/ProductEdit.tsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductEdit: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [orders, setOrders] = useState("");

  useEffect(() => {
    if (id) {
      // Fetch product data from API
      fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
          setName(data.name);
          setPrice(data.price);
          setOrders(data.orders);
        });
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = { name, price: parseFloat(price), orders: parseInt(orders) };

    // Call API to update the product
    fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    }).then(response => {
      if (response.ok) {
        window.location.href = "/products"; // Redirect setelah berhasil update
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      {product ? (
        <>
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
            Update Product
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </form>
  );
};

export default ProductEdit;
