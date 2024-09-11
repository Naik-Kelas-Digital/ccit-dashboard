// components/Dashboard.tsx
import React from 'react';
import MonthlyAverageIncome from './MonthlyAverageIncome';  
import ProfileCard from './ProfileCard';
import Link from 'next/link'; // Tambahkan import Link

const Dashboard: React.FC = () => {
  const products = [
    { name: "Sweater Winter", salesInfo: "Best sales in shop 1", price: "$129.99", orders: 50, total: "$6,492.44" },
    { name: "Modern Chair", salesInfo: "Best sales in shop 2", price: "$105.99", orders: 42, total: "$4,412.44" },
    { name: "Winter Clothing", salesInfo: "Best sales in shop 3", price: "$79.99", orders: 36, total: "$2,844.99" },
  ];

  return (
    <main className="flex-grow p-8">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-8">
          <div className="flex flex-col">
            <h1 className="text-[#3B4C68] text-2xl font-bold custom-font">Dashboard View</h1>
            <p className="text-[#B7C1D1] custom-font">Welcome back to dashboard !!</p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 w-[307px] h-[40px] border border-gray-300 rounded-full"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">🔍</span>
          </div>
        </div>
      </header>
      <section className="flex space-x-8">
        <div className="flex-grow">
          <MonthlyAverageIncome />
          <div className="p-4 bg-white rounded-lg shadow mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Product Highlight</h2>
              {/* Tambahkan Link ke Product List */}
              <Link href="/products" className="text-blue-500">View All Products</Link>
            </div>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-200 rounded-full mr-4"></div>
                    <div>
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="text-gray-500">{product.salesInfo}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div>
                      <p className="text-gray-500">Price</p>
                      <p className="font-bold">{product.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Orders</p>
                      <p className="font-bold">{product.orders}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Total</p>
                      <p className="font-bold">{product.total}</p>
                    </div>
                    <div className="text-gray-500">...</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Tambahkan Link ke Add Product */}
          <div className="mt-4">
            <Link href="/products/add" className="bg-blue-500 text-white py-2 px-4 rounded">Add New Product</Link>
          </div>
        </div>
        <ProfileCard />
      </section>
    </main>
  );
};

export default Dashboard;
