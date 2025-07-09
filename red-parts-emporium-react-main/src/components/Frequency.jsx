import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Frequency = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContactUsClick = () => {
    navigate('/contact'); // Redirect to the /contact page
  };

  return (
    <div className="p-4 container mx-auto px-4 py-8 max-w-4xl font-inter">
      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-tight mb-12">
        Frequently Asked Questions
      </h1>

      {/* Shipping Information Section */}
      <div className="mt-4 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Shipping Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What shipping methods are available?
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Do you ship internationally?
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          {/* Question 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How might I obtain an estimated date of delivery?
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          {/* Question 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Can I split my order to ship to different locations?
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Information Section */}
      <div className="mt-4 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Payment Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              What payments methods are available?
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Can I split my payment?
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>

      {/* Orders and Returns Section */}
      <div className="mt-4 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Orders and Returns
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How do I return or exchange an item?
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              How do I cancel an order?
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>

      {/* Still Have Questions Section */}
      <div className="mt-4 text-center mt-16">
        <p className="text-gray-700 text-lg mb-4">
          Still Have A Questions?
        </p>
        <p className="text-gray-600 mb-6">
          We will be happy to answer any questions you may have.
        </p>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out"
          onClick={handleContactUsClick} // Added onClick handler
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Frequency;
