import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CreateWallet = () => {
  const [showPin, setShowPin] = useState(false);

  const toggleShowPin = () => {
    setShowPin(!showPin);
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md pb-10 sm:pb-10 -ml-4 sm:ml-0">
        <h2 className="text-base font-medium mb-4">Create New Wallet</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">Wallet Name</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Wallet Name..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">Wallet Email</label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 border rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Wallet Email..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-black">Select Currency</label>
            <select className="mt-1 w-full px-3 py-2 border rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Select Currency</option>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="btc">BTC</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">Enter Security Question</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Wallet Email..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">Answer</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Wallet Email..."
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-black text-sm font-medium mb-1">Create New PIN</label>
            <input
              type={showPin ? 'text' : 'password'}
              className="mt-1 w-full px-3 py-2 border rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter PIN..."
            />
            <div
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={toggleShowPin}
            >
              {showPin ? <FaEye className='absolute right-4 top-9 text-xl' /> : <FaEyeSlash className='absolute top-9  right-4 text-xl' />}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#723EEB] hover:bg-[#5818ec] duration-500 text-white px-6 py-2 rounded-md w-full mt-5"
          >
            Create Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWallet;
