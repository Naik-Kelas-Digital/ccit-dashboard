// components/ProductList.tsx
"use client";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  orders: number;
  total: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch the product list from the API
    fetch('/api/products') // Path ini akan dihubungkan ke API backend
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleDelete = (id: number) => {
    // Call API to delete the product
    fetch(`/api/products/${id}`, {
      method: 'DELETE',
    }).then(() => {
      // Update UI after deletion
      setProducts(products.filter(product => product.id !== id));
    });
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.orders}</td>
              <td>{product.total}</td>
              <td>
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => window.location.href = `/products/edit/${product.id}`}
                >
                  Edit
                </button>
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
