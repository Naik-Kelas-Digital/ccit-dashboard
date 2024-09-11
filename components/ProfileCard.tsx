// components/ProfileCard.tsx
import React from 'react';

const ProfileCard: React.FC = () => {
  const transactions = [
    { icon: '🏦', description: 'Transfer Bank', amount: '$532.14', status: 'Completed' },
    { icon: '💼', description: 'Connect statue wallet', amount: 'Free', status: 'Completed' },
    { icon: '🛒', description: 'Access join the shop', amount: 'Waiting', status: 'Pending' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-80">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Profile</h2>
        <div className="relative">
          <button className="relative block w-6 h-6 text-blue-500 focus:outline-none">
            🔔
          </button>
          <div className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full"></div>
        </div>
      </header>
      <div className="flex flex-col items-center mb-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
            {/* You can replace the following div with an img tag if you have a profile image */}
            <div className="w-20 h-20 rounded-full border-4 border-blue-500"></div>
          </div>
        </div>
        <h3 className="text-xl font-semibold">Ashley Wesker</h3>
        <p className="text-gray-400">Owner shop</p>
      </div>
      <div className="mb-4 w-full">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg font-semibold">Last Transaction</h4>
          <a href="#" className="text-blue-500 text-sm">See All</a>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-500 mr-4">
              {transaction.icon}
            </div>
            <div>
              <p className="font-semibold">{transaction.description}</p>
              <p className="text-gray-400">{transaction.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-blue-50 rounded-lg flex justify-between items-center">
        <div>
          <h5 className="text-sm font-semibold">Upgrade plan for unlock best offers!</h5>
        </div>
        <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg">Upgrade Now</button>
      </div>
    </div>
  );
};

export default ProfileCard;
