import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(''); 

        if (password !== repeatPassword) {
            setErrorMessage('Passwords do not match!');
            return;
        }

        console.log('Registration submitted:', { email, password });
        alert('Registration attempted for: ' + email);
        setEmail('');
        setPassword('');
        setRepeatPassword('');
    };

    return (
        <div className="min-h-100 flex items-center justify-center bg-gray-100 p-4 font-inter">
            <div
                className="bg-white p-8 rounded-lg shadow-xl border border-gray-200"
                style={{ width: '400px', height: 'auto' }} 
            >

                <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">Register</h2>

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

                    {/* Password Input */}
                    <div className="mb-5">
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
                    </div>

                    <div className="mb-6">
                        <label htmlFor="repeatPassword" className="block text-gray-700 text-sm font-medium mb-2">
                            Repeat password
                        </label>
                        <input
                            type="password"
                            id="repeatPassword"
                            className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
                            placeholder="Password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                    </div>

                    {errorMessage && (
                        <p className="text-red-600 text-sm mb-4 text-center">{errorMessage}</p>
                    )}

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline-red transition duration-200 ease-in-out w-full"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
