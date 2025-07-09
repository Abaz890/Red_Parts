import React, { useState } from 'react';

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    apartmentSuiteEtc: '',
    townCity: '',
    stateCounty: '',
    postcodeZip: '',
    emailAddress: '',
    phone: '',
    createAccount: false,
  });

  const [shippingDetails, setShippingDetails] = useState({
    shipToDifferentAddress: false,
    orderNotes: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('bankTransfer');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Sample order data
  const orderItems = [
    { product: 'Glossy Gray 19" Aluminum Wheel AR-19 x 2', total: 1398.00 },
    { product: 'Brandix Brake Kit BDX-750Z370-S x 1', total: 849.00 },
    { product: 'Twin Exhaust Pipe From Brandix Z54 x 3', total: 3630.00 },
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.total, 0);
  const storeCredit = -20.00;
  const shippingCost = 25.00;
  const totalAmount = subtotal + storeCredit + shippingCost;

  const handleBillingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      // In a real app, you'd show a custom modal or message box
      console.log('Please agree to the website terms and conditions.');
      return;
    }
    console.log('Order submitted!');
    console.log('Billing Details:', billingDetails);
    console.log('Shipping Details:', shippingDetails);
    console.log('Payment Method:', paymentMethod);
    console.log('Order Items:', orderItems);
    console.log('Total Amount:', totalAmount);
    // Here you would typically send this data to a backend
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-inter">
      <div className="container mx-auto p-4 md:p-8 rounded-lg shadow-lg bg-white">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Box: Billing Details & Shipping Details */}
          <div className="lg:col-span-1 p-6 bg-white rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Billing details</h2>

            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={billingDetails.firstName}
                  onChange={handleBillingChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={billingDetails.lastName}
                  onChange={handleBillingChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name (Optional)</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={billingDetails.companyName}
                onChange={handleBillingChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Company Name"
              />
            </div>

            {/* Country */}
            <div className="mb-4">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <select
                id="country"
                name="country"
                value={billingDetails.country}
                onChange={handleBillingChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              >
                <option value="">Select a country...</option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                <option value="GBR">United Kingdom</option>
                <option value="AUS">Australia</option>
                {/* Add more countries as needed */}
              </select>
            </div>

            {/* Street Address */}
            <div className="mb-4">
              <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={billingDetails.streetAddress}
                onChange={handleBillingChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Street Address"
                required
              />
            </div>

            {/* Apartment, suite, unit etc. */}
            <div className="mb-4">
              <label htmlFor="apartmentSuiteEtc" className="block text-sm font-medium text-gray-700 mb-1">Apartment, suite, unit etc. (Optional)</label>
              <input
                type="text"
                id="apartmentSuiteEtc"
                name="apartmentSuiteEtc"
                value={billingDetails.apartmentSuiteEtc}
                onChange={handleBillingChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Apartment, suite, unit etc. (Optional)"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="townCity" className="block text-sm font-medium text-gray-700 mb-1">Town / City</label>
              <input
                type="text"
                id="townCity"
                name="townCity"
                value={billingDetails.townCity}
                onChange={handleBillingChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Town / City"
                required
              />
            </div>

            {/* State / County */}
            <div className="mb-4">
              <label htmlFor="stateCounty" className="block text-sm font-medium text-gray-700 mb-1">State / County</label>
              <input
                type="text"
                id="stateCounty"
                name="stateCounty"
                value={billingDetails.stateCounty}
                onChange={handleBillingChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="State / County"
                required
              />
            </div>

            {/* Postcode / ZIP */}
            <div className="mb-4">
              <label htmlFor="postcodeZip" className="block text-sm font-medium text-gray-700 mb-1">Postcode / ZIP</label>
              <input
                type="text"
                id="postcodeZip"
                name="postcodeZip"
                value={billingDetails.postcodeZip}
                onChange={handleBillingChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Postcode / ZIP"
                required
              />
            </div>

            {/* Email Address & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={billingDetails.emailAddress}
                  onChange={handleBillingChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={billingDetails.phone}
                  onChange={handleBillingChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>

            {/* Shipping Details */}
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Shipping Details</h2>
            <div className="mb-6">
              <label htmlFor="orderNotes" className="block text-sm font-medium text-gray-700 mb-1">Order notes (Optional)</label>
              <textarea
                id="orderNotes"
                name="orderNotes"
                value={shippingDetails.orderNotes}
                onChange={handleShippingChange}
                rows="3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-y"
              ></textarea>
            </div>
          </div>

          {/* Right Box: Your Order & Payment Method */}
          <div className="lg:col-span-1 p-6 bg-white rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Your Order</h2>

            {/* Order Summary Table */}
            <div className="mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PRODUCT</th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">TOTAL</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orderItems.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{item.product}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-right text-sm text-gray-900">${item.total.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Subtotal</td>
                    <td className="px-4 py-3 whitespace-nowrap text-right text-sm text-gray-700">${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Store Credit</td>
                    <td className="px-4 py-3 whitespace-nowrap text-right text-sm text-gray-700">${storeCredit.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-700">Shipping</td>
                    <td className="px-4 py-3 whitespace-nowrap text-right text-sm text-gray-700">${shippingCost.toFixed(2)}</td>
                  </tr>
                  <tr className="font-bold text-lg">
                    <td className="px-4 py-3 whitespace-nowrap text-gray-900">Total</td>
                    <td className="px-4 py-3 whitespace-nowrap text-right text-gray-900">${totalAmount.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="bankTransfer"
                  name="paymentMethod"
                  value="bankTransfer"
                  checked={paymentMethod === 'bankTransfer'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="bankTransfer" className="ml-3 block text-base font-medium text-gray-900">Direct bank transfer</label>
              </div>
              {paymentMethod === 'bankTransfer' && (
                <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-700 mb-4 ml-6 border border-gray-200">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </div>
              )}

              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="checkPayments"
                  name="paymentMethod"
                  value="checkPayments"
                  checked={paymentMethod === 'checkPayments'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                {/* Changed ml-2 to ml-3 for slightly more space */}
                <label htmlFor="checkPayments" className="ml-3 block text-base font-medium text-gray-900">Check payments</label>
              </div>

              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={paymentMethod === 'cashOnDelivery'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                {/* Changed ml-2 to ml-3 for slightly more space */}
                <label htmlFor="cashOnDelivery" className="ml-3 block text-base font-medium text-gray-900">Cash on delivery</label>
              </div>

              <div className="flex items-center mb-6">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="h-4 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="paypal" className="ml-3 block text-base font-medium text-gray-900">PayPal</label>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="h-4 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              {/* Changed ml-2 to ml-3 for slightly more space */}
              <label htmlFor="agreeToTerms" className="ml-3 block text-sm text-gray-900">
                I have read and agree to the website <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
              </label>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;