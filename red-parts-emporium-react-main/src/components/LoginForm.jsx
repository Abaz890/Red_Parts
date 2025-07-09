import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-100 flex items-center justify-center bg-gray-100 p-4 font-inter">
      <div
        className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
        style={{ width: '400px', height: 'auto' }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="customer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="inline-block align-baseline font-medium text-sm text-red-600 hover:text-red-800 mt-2">
              Forgot password?
            </a>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline-red transition duration-200 ease-in-out w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm; 
