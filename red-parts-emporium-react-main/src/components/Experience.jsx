import React from 'react';

export const Experience = () => { 
  return (
    <div className="container mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-900">
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <p className="text-5xl font-bold text-red-600 mb-2">350</p>
        <p className="text-lg text-gray-700">Stores around the world</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <p className="text-5xl font-bold text-red-600 mb-2">80 000</p>
        <p className="text-lg text-gray-700">Original auto parts</p>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <p className="text-5xl font-bold text-red-600 mb-2">5 000</p>
        <p className="text-lg text-gray-700">Satisfied customers</p>
      </div>
    </div>
  );
};
