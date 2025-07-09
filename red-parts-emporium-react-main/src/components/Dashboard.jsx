import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');
    const navigate = useNavigate(); 

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null); 

    const userProfile = {
        name: 'Helena Garcia',
        email: 'red-parts@example.com',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s',
        address: {
            line1: '115302, Moscow',
            line2: 'ul. Varshavskaya, 15-2-178'
        },
        phoneNumber: '38 972 588-42-36',
        contactEmail: 'helena@example.com'
    };

    const allOrders = [
        { id: '#8132', date: '02 April, 2019', status: 'Pending', total: '$2,719.00 for 5 item(s)' },
        { id: '#7592', date: '28 March, 2019', status: 'Pending', total: '$374.00 for 3 item(s)' },
        { id: '#7192', date: '15 March, 2019', status: 'Shipped', total: '$791.00 for 4 item(s)' },
        { id: '#6321', date: '28 February, 2019', status: 'Completed', total: '$57.00 for 1 item(s)' },
        { id: '#6001', date: '21 February, 2019', status: 'Completed', total: '$252.00 for 2 item(s)' },
        { id: '#4120', date: '11 December, 2018', status: 'Completed', total: '$3,978.00 for 7 item(s)' },
    ];

    const recentOrders = allOrders.slice(0, 3); 

    const orderDetails = {
        orderId: '#9478',
        placedDate: 'Oct 19, 2020',
        status: 'Pending',
        products: [
            { name: 'Brandix Spark Plug Kit ASR-400', quantity: 2, price: 38.00 },
            { name: 'Brandix Brake Kit BDX-750Z370-S', quantity: 1, price: 224.00 },
            { name: 'Left Headlight Of Brandix Z54', quantity: 3, price: 1047.00 },
        ],
        subtotal: 1309.00,
        shipping: 25.00,
        tax: 262.00,
        total: 1596.00,
        shippingAddress: {
            name: 'Ryan Ford',
            line1: 'Random Federation',
            line2: '115302, Moscow',
            line3: 'ul. Varshavskaya, 15-2-178',
            phoneNumber: '38 972 588-42-36',
            email: 'stroyka@example.com'
        },
        billingAddress: {
            name: 'Ryan Ford',
            line1: 'Random Federation',
            line2: '115302, Moscow',
            line3: 'ul. Varshavskaya, 15-2-178',
            phoneNumber: '38 972 588-42-36',
            email: 'stroyka@example.com'
        }
    };

    const [addresses, setAddresses] = useState([
        {
            id: 1,
            name: 'Helena Garcia',
            isDefault: true,
            line1: 'Random Federation',
            line2: '115302, Moscow',
            line3: 'ul. Varshavskaya, 15-2-178',
            phoneNumber: '38 972 588-42-36',
            email: 'helena@example.com'
        },
        {
            id: 2,
            name: 'Jupiter Saturnov',
            isDefault: false,
            line1: 'RandomLand',
            line2: '4b4f53, MarsGrad',
            line3: 'Sun Orbit, 43.3241-85.239',
            phoneNumber: 'ZX 971 972-57-26',
            email: 'jupiter@example.com'
        }
    ]);

    const [editAddressData, setEditAddressData] = useState({
        firstName: 'Mark',
        lastName: 'Twain',
        company: 'RedParts corp.',
        country: 'Select a country...',
        streetAddress1: 'House number and street name',
        streetAddress2: 'Apartment, suite, unit etc.',
        city: 'Houston',
        state: 'Texas',
        postcode: '19720',
        email: 'user@example.com',
        phoneNumber: '+1 999 888 7777',
        isDefault: false,
    });

    const handleEditAddressChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditAddressData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSaveAddress = () => {
        handleShowModal('Address saved successfully!');
    };

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        reenterNewPassword: '',
    });

    const handlePasswordChangeInput = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({ ...prev, [name]: value }));
    };

    const handleChangePassword = () => {
        if (passwordData.newPassword !== passwordData.reenterNewPassword) {
            handleShowModal('New passwords do not match. Please re-enter.');
            return;
        }

        handleShowModal('Password changed successfully!');
        setPasswordData({ currentPassword: '', newPassword: '', reenterNewPassword: '' });
    };

    const [vehicles, setVehicles] = useState([
        { id: 1, year: '2011', make: 'Ford Focus S', engine: '2.0L 1742DA L4 FI Turbo' },
        { id: 2, year: '2019', make: 'Audi Q7 Premium', engine: '3.0L 5626CC L6 QK' },
        { id: 3, year: 2015, make: 'Kia Rio LX', engine: '1.6L 8306JK L5 RL' },
        { id: 4, year: '2008', make: 'BMW M5', engine: '5.0L 8351XZ V10 DB' },
    ]);

    const years = ['Select Year', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008'];
    const brands = ['Select Brand', 'Ford', 'Audi', 'Kia', 'BMW', 'Toyota', 'Honda'];
    const models = ['Select Model', 'Focus S', 'Q7 Premium', 'Rio LX', 'M5', 'Camry', 'Civic'];
    const engines = ['Select Engine', '2.0L Turbo', '3.0L V6', '1.6L I4', '5.0L V10'];

    const [newVehicle, setNewVehicle] = useState({
        year: '',
        brand: '',
        model: '',
        engine: '',
        vin: ''
    });

    const handleGarageInputChange = (e) => {
        const { name, value } = e.target;
        setNewVehicle(prev => ({ ...prev, [name]: value }));
    };

    const handleShowModal = (message, action = null) => {
        setModalMessage(message);
        setModalAction(() => action); 
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalMessage('');
        setModalAction(null);
    };

    const handleConfirmAction = () => {
        if (modalAction) {
            modalAction();
        }
        handleCloseModal();
    };

    const handleAddVehicle = () => {
        if (newVehicle.year && newVehicle.brand && newVehicle.model && newVehicle.engine) {
            handleShowModal(`Adding vehicle: ${newVehicle.year} ${newVehicle.brand} ${newVehicle.model} with engine ${newVehicle.engine}`);
            setNewVehicle({ year: '', brand: '', model: '', engine: '', vin: '' }); 
        } else if (newVehicle.vin) {
            handleShowModal(`Adding vehicle with VIN: ${newVehicle.vin}`);
            setNewVehicle({ year: '', brand: '', model: '', engine: '', vin: '' }); 
        } else {
            handleShowModal('Please select all vehicle details or enter a VIN number.');
        }
    };

    const handleDeleteVehicle = (id) => {
        handleShowModal('Are you sure you want to delete this vehicle?', () => {
            setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
        });
    };

    const handleDeleteAddress = (id) => {
        handleShowModal('Are you sure you want to delete this address?', () => {
            setAddresses(addresses.filter(address => address.id !== id));
        });
    };

    const [profileData, setProfileData] = useState({
        firstName: 'Helena',
        lastName: 'Garcia',
        email: 'red-parts@example.com',
        phoneNumber: '38 972 588-42-36'
    });

    const handleProfileInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({ ...prev, [name]: value }));
    };

    const handleProfileSave = () => {
        handleShowModal('Profile information saved successfully!');
    };

    // Handle Logout
    const handleLogout = () => {
        handleShowModal('Are you sure you want to log out?', () => {
            navigate('/login');
        });
    };


    // Navigation items
    const navItems = [
        'Dashboard',
        'Garage',
        'Edit Profile',
        'Order History',
        'Order Details',
        'Addresses',
        'Edit Address',
        'Password',
        'Logout'
    ];

    const renderContent = () => {
        switch (activeItem) {
            case 'Dashboard':
                return (
                    <div className="flex flex-col gap-6 p-4 md:p-0">
                        {/* Header Cards Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Profile Card */}
                            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                                <div className="mb-5">
                                    <img
                                        src={userProfile.avatar}
                                        alt={userProfile.name}
                                        className="w-28 h-28 rounded-full object-cover border-4 border-gray-100 shadow-sm"
                                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/A0A0A0/FFFFFF?text=HG"; }} // Fallback image
                                    />
                                </div>
                                <p className="text-xl font-bold text-gray-800">{userProfile.name}</p>
                                <p className="text-base text-gray-600 mb-5">{userProfile.email}</p>
                                <button className="mt-2 bg-white text-red-600 border border-red-600 px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                                    Edit Profile
                                </button>
                            </div>

                            {/* Address & Contact Card */}
                            <div className="bg-white p-6 rounded-xl shadow-lg relative flex flex-col justify-between">
                                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">DEFAULT</span>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{userProfile.name}</h3>
                                    <p className="text-base text-gray-700">{userProfile.address.line1}</p>
                                    <p className="text-base text-gray-700 mb-4">{userProfile.address.line2}</p>
                                    <p className="text-base text-gray-700">Phone Number: <span className="font-semibold text-gray-800">{userProfile.phoneNumber}</span></p>
                                    <p className="text-base text-gray-700 mb-5">Email Address: <span className="font-semibold text-gray-800">{userProfile.contactEmail}</span></p>
                                </div>
                                <button className="self-start bg-white text-red-600 border border-red-600 px-6 py-3 rounded-lg text-base font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">
                                    Edit Address
                                </button>
                            </div>
                        </div>

                        {/* Recent Orders Section */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h2 className="text-xl font-bold text-gray-800 mb-5">Recent Orders</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                ORDER
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                DATE
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                STATUS
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                TOTAL
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {recentOrders.map((order) => (
                                            <tr key={order.id} className="hover:bg-gray-50 transition-colors duration-150">
                                                <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-red-600">
                                                    {order.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                                                    {order.date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                                                    {order.status}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                                                    {order.total}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            case 'Garage':
                return (
                    <div className="mt-4 p-6 bg-white rounded-xl shadow-lg text-gray-700">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Garage</h2>

                        {/* My Vehicles Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">My Vehicles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {vehicles.map(vehicle => (
                                    <div key={vehicle.id} className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-200">
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800">{vehicle.year} {vehicle.make}</p>
                                            <p className="text-sm text-gray-600">{vehicle.engine}</p>
                                            <button className="text-red-600 text-sm font-medium mt-2 hover:underline">Show Parts</button>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteVehicle(vehicle.id)}
                                            className="text-gray-400 hover:text-red-600 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
                                            aria-label="Delete vehicle"
                                        >
                                            {/* Trash can icon (inline SVG for simplicity) */}
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Add A Vehicle Section */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add A Vehicle</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                <select
                                    name="year"
                                    value={newVehicle.year}
                                    onChange={handleGarageInputChange}
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                >
                                    {years.map(y => <option key={y} value={y === 'Select Year' ? '' : y}>{y}</option>)}
                                </select>
                                <select
                                    name="brand"
                                    value={newVehicle.brand}
                                    onChange={handleGarageInputChange}
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                >
                                    {brands.map(b => <option key={b} value={b === 'Select Brand' ? '' : b}>{b}</option>)}
                                </select>
                                <select
                                    name="model"
                                    value={newVehicle.model}
                                    onChange={handleGarageInputChange}
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                >
                                    {models.map(m => <option key={m} value={m === 'Select Model' ? '' : m}>{m}</option>)}
                                </select>
                                <select
                                    name="engine"
                                    value={newVehicle.engine}
                                    onChange={handleGarageInputChange}
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                >
                                    {engines.map(e => <option key={e} value={e === 'Select Engine' ? '' : e}>{e}</option>)}
                                </select>
                            </div>

                            <div className="text-center text-gray-500 font-semibold my-4">OR</div>

                            <input
                                type="text"
                                name="vin"
                                placeholder="Enter VIN number"
                                value={newVehicle.vin}
                                onChange={handleGarageInputChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200 mb-6"
                            />

                            <button
                                onClick={handleAddVehicle}
                                className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                            >
                                Add A Vehicle
                            </button>
                        </div>
                    </div>
                );
            case 'Edit Profile':
                return (
                    <div className="mt-4 p-6 bg-white rounded-xl shadow-lg text-gray-700">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Profile</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={profileData.firstName}
                                    onChange={handleProfileInputChange}
                                    placeholder="First Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={profileData.lastName}
                                    onChange={handleProfileInputChange}
                                    placeholder="Last Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleProfileInputChange}
                                placeholder="Email Address"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={profileData.phoneNumber}
                                onChange={handleProfileInputChange}
                                placeholder="Phone Number"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>

                        <button
                            onClick={handleProfileSave}
                            className="bg-red-600 text-white px-6 py-1.5 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg mt-4"
                        >
                            Save
                        </button>
                    </div>
                );
            case 'Order History':
                return (
                    <div className="mt-4 p-6 bg-white rounded-xl shadow-lg">
                        <h2 className="text-xl font-bold text-gray-800 mb-5">Order History</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                            ORDER
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                            DATE
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                            STATUS
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                            TOTAL
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {allOrders.map((order) => (     
                                        <tr key={order.id} className="hover:bg-gray-50 transition-colors duration-150">
                                            <td className="px-6 py-4 whitespace-nowrap text-base font-semibold text-red-600">
                                                {order.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                                                {order.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                                                {order.status}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                                                {order.total}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'Order Details':
                return (
                    <div className="mt-4 p-6 bg-white rounded-xl shadow-lg text-gray-700">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Order {orderDetails.orderId}</h2>
                            <button
                                onClick={() => setActiveItem('Order History')}
                                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors duration-200"
                            >
                                Back to list
                            </button>
                        </div>

                        <p className="text-lg mb-6">
                            Was placed on <span className="font-semibold">{orderDetails.placedDate}</span> and is currently <span className="font-semibold text-red-600">{orderDetails.status}</span>.
                        </p>

                        {/* Product List */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">PRODUCT</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                PRODUCT
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-600 uppercase tracking-wider">
                                                TOTAL
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-100">
                                        {orderDetails.products.map((product, index) => (
                                            <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">
                                                    {product.name} &times; {product.quantity}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 text-right">
                                                    ${product.price.toFixed(2)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Totals */}
                        <div className="flex justify-end mb-8">
                            <div className="w-full max-w-xs">
                                <div className="flex justify-between py-2 border-b border-gray-200">
                                    <span className="text-base text-gray-700">Subtotal</span>
                                    <span className="text-base font-semibold text-gray-800">${orderDetails.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-200">
                                    <span className="text-base text-gray-700">Shipping</span>
                                    <span className="text-base font-semibold text-gray-800">${orderDetails.shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-200">
                                    <span className="text-base text-gray-700">Tax</span>
                                    <span className="text-base font-semibold text-gray-800">${orderDetails.tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between py-2 mt-4 text-xl font-bold text-gray-800">
                                    <span>Total</span>
                                    <span>${orderDetails.total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Addresses */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Shipping Address */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 relative">
                                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">SHIPPING ADDRESS</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{orderDetails.shippingAddress.name}</h3>
                                <p className="text-base text-gray-700">{orderDetails.shippingAddress.line1}</p>
                                <p className="text-base text-gray-700">{orderDetails.shippingAddress.line2}</p>
                                <p className="text-base text-gray-700 mb-4">{orderDetails.shippingAddress.line3}</p>
                                <p className="text-base text-gray-700">Phone Number: <span className="font-semibold text-gray-800">{orderDetails.shippingAddress.phoneNumber}</span></p>
                                <p className="text-base text-gray-700">Email Address: <span className="font-semibold text-gray-800">{orderDetails.shippingAddress.email}</span></p>
                            </div>

                            {/* Billing Address */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 relative">
                                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">BILLING ADDRESS</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{orderDetails.billingAddress.name}</h3>
                                <p className="text-base text-gray-700">{orderDetails.billingAddress.line1}</p>
                                <p className="text-base text-gray-700">{orderDetails.billingAddress.line2}</p>
                                <p className="text-base text-gray-700 mb-4">{orderDetails.billingAddress.line3}</p>
                                <p className="text-base text-gray-700">Phone Number: <span className="font-semibold text-gray-800">{orderDetails.billingAddress.phoneNumber}</span></p>
                                <p className="text-base text-gray-700">Email Address: <span className="font-semibold text-gray-800">{orderDetails.billingAddress.email}</span></p>
                            </div>
                        </div>
                    </div>
                );
            case 'Addresses':
                return (
                    <div className="mt-4 p-6 bg-white rounded-xl shadow-lg text-gray-700">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Addresses</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Add New Address Card */}
                            <div
                                className="bg-gray-50 p-6 rounded-xl shadow-sm border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-red-500 transition-colors duration-200"
                                onClick={() => setActiveItem('Edit Address')} // Assuming 'Edit Address' is for adding new as well
                            >
                                <div className="text-gray-400 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-lg font-semibold text-gray-600">Add New</span>
                            </div>

                            {/* Existing Address Cards */}
                            {addresses.map(address => (
                                <div key={address.id} className="bg-white p-6 rounded-xl shadow-lg relative border border-gray-200">
                                    {address.isDefault && (
                                        <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">DEFAULT</span>
                                    )}
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{address.name}</h3>
                                    <p className="text-base text-gray-700">{address.line1}</p>
                                    <p className="text-base text-gray-700">{address.line2}</p>
                                    <p className="text-base text-gray-700 mb-4">{address.line3}</p>
                                    <p className="text-base text-gray-700">Phone Number: <span className="font-semibold text-gray-800">{address.phoneNumber}</span></p>
                                    <p className="text-base text-gray-700 mb-5">Email Address: <span className="font-semibold text-gray-800">{address.email}</span></p>
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => setActiveItem('Edit Address')} // In a real app, you'd pass address.id to edit
                                            className="text-red-600 text-base font-medium hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteAddress(address.id)}
                                            className="text-red-600 text-base font-medium hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'Edit Address':
                return (
                    <div className="mt-4 p-6 bg-white rounded-xl shadow-lg text-gray-700">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={editAddressData.firstName}
                                    onChange={handleEditAddressChange}
                                    placeholder="First Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={editAddressData.lastName}
                                    onChange={handleEditAddressChange}
                                    placeholder="Last Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={editAddressData.company}
                                onChange={handleEditAddressChange}
                                placeholder="RedParts corp."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                            <select
                                id="country"
                                name="country"
                                value={editAddressData.country}
                                onChange={handleEditAddressChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            >
                                <option>Select a country...</option>
                                <option>USA</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="streetAddress1" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                            <input
                                type="text"
                                id="streetAddress1"
                                name="streetAddress1"
                                value={editAddressData.streetAddress1}
                                onChange={handleEditAddressChange}
                                placeholder="House number and street name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200 mb-2"
                            />
                            <input
                                type="text"
                                id="streetAddress2"
                                name="streetAddress2"
                                value={editAddressData.streetAddress2}
                                onChange={handleEditAddressChange}
                                placeholder="Apartment, suite, unit etc."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={editAddressData.city}
                                onChange={handleEditAddressChange}
                                placeholder="City"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={editAddressData.state}
                                onChange={handleEditAddressChange}
                                placeholder="State"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                            <input
                                type="text"
                                id="postcode"
                                name="postcode"
                                value={editAddressData.postcode}
                                onChange={handleEditAddressChange}
                                placeholder="Postcode"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={editAddressData.email}
                                    onChange={handleEditAddressChange}
                                    placeholder="user@example.com"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={editAddressData.phoneNumber}
                                    onChange={handleEditAddressChange}
                                    placeholder="+1 999 888 7777"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                                />
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="isDefault"
                                name="isDefault"
                                checked={editAddressData.isDefault}
                                onChange={handleEditAddressChange}
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                            />
                            <label htmlFor="isDefault" className="ml-2 block text-base text-gray-900">
                                Set as my default address
                            </label>
                        </div>

                        <button
                            onClick={handleSaveAddress}
                            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            Save
                        </button>
                    </div>
                );
            case 'Password':
                return (
                    <div className="mt-4 p-6 bg-white rounded-xl shadow-lg text-gray-700">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Password</h2>
                        <div className="mb-4">
                            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                            <input
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                                value={passwordData.currentPassword}
                                onChange={handlePasswordChangeInput}
                                placeholder="Current Password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                value={passwordData.newPassword}
                                onChange={handlePasswordChangeInput}
                                placeholder="New Password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="reenterNewPassword" className="block text-sm font-medium text-gray-700 mb-1">Reenter New Password</label>
                            <input
                                type="password"
                                id="reenterNewPassword"
                                name="reenterNewPassword"
                                value={passwordData.reenterNewPassword}
                                onChange={handlePasswordChangeInput}
                                placeholder="Reenter New Password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-all duration-200"
                            />
                        </div>
                        <button
                            onClick={handleChangePassword}
                            className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            Change
                        </button>
                    </div>
                );
            case 'Logout':
                return (
                    <div className="p-6 bg-white rounded-xl shadow-lg text-gray-700">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Logging Out...</h2>
                        <p className="text-lg">You will be redirected to the login page shortly.</p>
                    </div>
                );
            default:
                return (
                    <div className="p-6 bg-white rounded-xl shadow-lg text-gray-700">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome!</h2>
                        <p className="text-lg">Please select an item from the navigation.</p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-[90vh] flex flex-col md:flex-row bg-gray-50 font-inter antialiased p-4 md:p-6">
            {/* Navigation Bar */}
            <div
                className="bg-white shadow-xl rounded-xl flex-shrink-0 md:ml-6 overflow-y-auto mt-12 p-4"
                style={{ width: '270px', height: 'calc(125vh - 48px)' }}
            >
                <h3 className="text-xl font-bold text-gray-800 mb-6 px-3">Navigation</h3>
                <ul className="list-none p-0 m-0">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            className={`px-3 py-3 cursor-pointer text-lg font-medium transition-all duration-250 ease-in-out rounded-lg mx-2 mb-1.5
                                ${activeItem === item
                                    ? 'bg-red-50 text-red-700 font-semibold shadow-sm'
                                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            onClick={() => {
                                if (item === 'Logout') {
                                    handleLogout();
                                } else {
                                    setActiveItem(item);
                                }
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-10 mt-3">
                {renderContent()}
            </div>

            {/* Custom Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
                        <p className="text-lg font-semibold mb-4">{modalMessage}</p>
                        <div className="flex justify-center space-x-4">
                            {modalAction && ( // Show confirm button only if there's an action
                                <button
                                    onClick={handleConfirmAction}
                                    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                                >
                                    Confirm
                                </button>
                            )}
                            <button
                                onClick={handleCloseModal}
                                className={`${modalAction ? 'bg-gray-300 text-gray-800 hover:bg-gray-400' : 'bg-red-600 text-white hover:bg-red-700'} px-5 py-2 rounded-lg transition-colors duration-200`}
                            >
                                {modalAction ? 'Cancel' : 'OK'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
