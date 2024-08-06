import React from 'react';

const ProfileCard: React.FC = () => {
  const transactions = [
    { icon: '🏦', description: 'Transfer Bank', amount: '$532.14', status: 'Completed' },
    { icon: '💼', description: 'Connect statue wallet', amount: 'Free', status: 'Completed' },
    { icon: '🛒', description: 'Access join the shop', amount: 'Waiting', status: 'Pending' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96">
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Profile</h2>
        <div className="relative">
          <button className="relative z-10 block w-8 h-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white">
            <img className="object-cover w-full h-full" src="/path/to/profile/image" alt="Your avatar" />
          </button>
          <div className="absolute inset-0 w-2 h-2 ml-6 -mt-1 bg-red-600 rounded-full"></div>
        </div>
      </header>
      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
        <h3 className="text-xl font-semibold">Ashley Wesker</h3>
        <p className="text-gray-500">Owner shop</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Last Transaction</h4>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
              {transaction.icon}
            </div>
            <div>
              <p className="font-semibold">{transaction.description}</p>
              <p className="text-gray-500">{transaction.amount}</p>
            </div>
          </div>
        ))}
        <a href="#" className="text-blue-500">See All</a>
      </div>
      <div className="p-4 bg-blue-100 rounded-lg">
        <h5 className="text-sm font-semibold">Upgrade plan for unlock best offers!</h5>
        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">Upgrade Now</button>
      </div>
    </div>
  );
};

export default ProfileCard;
