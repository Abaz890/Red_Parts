import React from 'react';

const Interior = () => {
  const products = [
    {
      id: 1,
      sku: 'INT-SEAT-001',
      name: 'Premium Leather Seat Covers (Full Set)',
      price: 299.99,
      originalPrice: 350.00,
      rating: 5,
      reviews: 60,
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/12/OB/PC/OX/3693396/premium-synthetic-leather-car-seat-cover.jpg', 
      labels: ['SALE', 'HOT'],
    },
    {
      id: 2,
      sku: 'INT-MAT-002',
      name: 'All-Weather Floor Mats (4-piece set)',
      price: 65.00,
      originalPrice: null,
      rating: 4,
      reviews: 40,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rurX5PHB0_PgPtRQDkZtaxCery-tWwPAlQ&s', // Placeholder for floor mats
      labels: ['NEW'],
    },
    {
      id: 3,
      sku: 'INT-STER-003',
      name: 'Sport Steering Wheel (Carbon Fiber)',
      price: 180.00,
      originalPrice: null,
      rating: 5,
      reviews: 25,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUEn5heeVcqPP-967Ura3cCvtTdIGWFr_xlw&s', 
      labels: ['HOT'],
    },
    {
      id: 4,
      sku: 'INT-DASH-004',
      name: 'Custom Fit Dashboard Cover',
      price: 45.99,
      originalPrice: null,
      rating: 4,
      reviews: 15,
      image: 'https://m.media-amazon.com/images/I/61mW-FnQyyL._UF894,1000_QL80_.jpg', // Placeholder for dashboard cover
      labels: [],
    },
    {
      id: 5,
      sku: 'INT-SHIFT-005',
      name: 'Aluminum Shift Knob',
      price: 32.50,
      originalPrice: null,
      rating: 4,
      reviews: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREbyyS7I_PKcdp7xDeNs7pnO-h6wikt_OG0A&s', // Placeholder for shift knob
      labels: [],
    },
    {
      id: 6,
      sku: 'INT-LIGHT-006',
      name: 'Interior LED Ambient Lighting Kit',
      price: 75.00,
      originalPrice: null,
      rating: 5,
      reviews: 35,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT89LgcZBeBEYnnqfdnX-pUJHHxkftgYygtrQ&s', // Placeholder for LED lighting
      labels: ['SALE', 'NEW'],
    },
    {
      id: 7,
      sku: 'INT-ARM-007',
      name: 'Center Console Armrest Cover',
      price: 28.00,
      originalPrice: null,
      rating: 3,
      reviews: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinIc91GHgLu8pqc5XMaSCXoKeVfccRyaurQ&s', // Placeholder for armrest cover
      labels: [],
    },
    {
      id: 8,
      sku: 'INT-PEDAL-008',
      name: 'Sport Pedal Covers (3-piece set)',
      price: 39.00,
      originalPrice: null,
      rating: 4,
      reviews: 20,
      image: 'https://img.drz.lazcdn.com/g/kf/S8c6b266262a24b3a9d3f0f004cfa826cf.jpg_960x960q80.jpg_.webp', // Placeholder for pedal covers
      labels: [],
    },
    {
      id: 9,
      sku: 'INT-SUN-009',
      name: 'Retractable Sun Shade (Windshield)',
      price: 22.00,
      originalPrice: null,
      rating: 4,
      reviews: 12,
      image: 'https://target.scene7.com/is/image/Target/GUEST_384668c4-2c98-4b7e-b42e-1994991b5193', // Placeholder for sun shade
      labels: [],
    },
    {
      id: 10,
      sku: 'INT-TRUNK-010',
      name: 'Cargo Liner for Trunk',
      price: 55.00,
      originalPrice: null,
      rating: 5,
      reviews: 18,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVnRUg76pDmlRTvSCP4sxDp9ZWgLQNhgYsw&s', // Placeholder for cargo liner
      labels: [],
    },
    {
      id: 11,
      sku: 'INT-CUP-011',
      name: 'Universal Car Cup Holder Expander',
      price: 14.99,
      originalPrice: null,
      rating: 3,
      reviews: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4WoLSTJHLbhqi0Kzg1EZow9hhSxaHjaAyg&s', // Placeholder for cup holder
      labels: [],
    },
    {
      id: 12,
      sku: 'INT-PHONE-012',
      name: 'Magnetic Phone Mount (Dashboard)',
      price: 19.99,
      originalPrice: null,
      rating: 4,
      reviews: 22,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8_li1pZFUVJqUB-4TVcvQecgILUAVunMfLw&s', // Placeholder for phone mount
      labels: ['NEW'],
    },
    {
      id: 13,
      sku: 'INT-AIR-013',
      name: 'Car Air Freshener Diffuser',
      price: 8.50,
      originalPrice: null,
      rating: 4,
      reviews: 50,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kixqdN3glvGcz3UXQay61-EKvBogFFINyQ&s',
      labels: [],
    },
    {
      id: 14,
      sku: 'INT-CLEAN-014',
      name: 'Interior Detailer Spray (500ml)',
      price: 16.00,
      originalPrice: null,
      rating: 5,
      reviews: 30,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5dgrD6u5rXnE3pRvOWVPssm9mvDAAQ53WA&s', 
      labels: [],
    },
    {
      id: 15,
      sku: 'INT-ORG-015',
      name: 'Backseat Organizer with Tablet Holder',
      price: 29.99,
      originalPrice: null,
      rating: 4,
      reviews: 28,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5orA414Bp3VogObkrCMiotQ0MQLW68TS4Q&s', 
      labels: ['HOT'],
    },
    {
      id: 16,
      sku: 'INT-HEAD-016',
      name: 'Comfort Headrest Pillows (Pair)',
      price: 24.00,
      originalPrice: null,
      rating: 4,
      reviews: 15,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-zkeU3YiPUFvf5VMz1C3QGwevTtmgExV1w&s', // Placeholder for headrest pillows
      labels: [],
    },
    {
      id: 17,
      sku: 'INT-COVER-017',
      name: 'Steering Wheel Cover (Perforated Leather)',
      price: 35.00,
      originalPrice: null,
      rating: 5,
      reviews: 19,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCMoUoufPiSLPDvPLIUt12tD7_kRc8FIK0A&s', // Placeholder for steering wheel cover
      labels: ['SALE'],
    },
    {
      id: 18,
      sku: 'INT-MIRROR-018',
      name: 'Panoramic Rear View Mirror',
      price: 18.00,
      originalPrice: null,
      rating: 3,
      reviews: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6tfyFNTnCZX61WMCEQtjbp6-kLaJP1MkMg&s', // Placeholder for rear view mirror
      labels: [],
    },
    {
      id: 19,
      sku: 'INT-CHAR-019',
      name: 'Dual USB Car Charger (Fast Charge)',
      price: 11.00,
      originalPrice: null,
      rating: 4,
      reviews: 40,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIcOM-EsgXz3i3EVxmqnIppxy_VmEASEjcg&s', // Placeholder for car charger
      labels: [],
    },
    {
      id: 20,
      sku: 'INT-TRASH-020',
      name: 'Mini Car Trash Can',
      price: 9.00,
      originalPrice: null,
      rating: 4,
      reviews: 25,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXGIo-fLt6GakBiZ7glVG_ROXxVTHevUw1Q&s', // Placeholder for trash can
      labels: [],
    },
    {
      id: 21,
      sku: 'INT-NET-021',
      name: 'Car Trunk Storage Net',
      price: 15.00,
      originalPrice: null,
      rating: 3,
      reviews: 10,
      image: 'https://store.ijdmtoy.com/cdn/shop/products/Car_Trunk_Organizer_1000x673.jpg?v=1726074779', // Placeholder for storage net
      labels: [],
    },
    {
      id: 22,
      sku: 'INT-GPS-022',
      name: 'GPS Navigation System (7-inch)',
      price: 150.00,
      originalPrice: null,
      rating: 4,
      reviews: 12,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS996lHp4ByHFD5QxSuNFX-nhCTVC1sdFXNiw&s', // Placeholder for GPS
      labels: ['NEW'],
    },
    {
      id: 23,
      sku: 'INT-CAM-023',
      name: 'Dash Cam with Parking Monitor',
      price: 89.00,
      originalPrice: null,
      rating: 5,
      reviews: 33,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7Fn_AYOeYpSBnmfBzAsRBS8kDqVu3L2Fww&s', // Placeholder for dash cam
      labels: ['HOT'],
    },
    {
      id: 24,
      sku: 'INT-HEATER-024',
      name: 'Portable Car Seat Heater',
      price: 49.00,
      originalPrice: null,
      rating: 4,
      reviews: 16,
      image: 'https://images-na.ssl-images-amazon.com/images/I/81Y2ovoRejL._AC_UL200_SR200,200_.jpg', 
      labels: [],
    },
  ];

  // Star rating component (remains the same)
  const StarRating = ({ rating, reviews }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return (
      <div className="flex items-center mt-2">
        {stars}
        <span className="ml-2 text-sm text-gray-500">
          {reviews} {reviews === 1 ? 'review' : 'reviews'}
        </span>
      </div>
    );
  };

  return (
    <div className="font-inter antialiased bg-gray-100 min-h-screen p-4 sm:p-8">
      {/* Header Section */}
      <div className="text-center mb-10 mt-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Interior Parts & Accessories
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4"></div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative p-4 flex justify-center items-center h-48 bg-gray-50">
                {/* Product Labels (SALE, NEW, HOT) */}
                <div className="absolute top-2 left-2 flex flex-col space-y-1">
                  {product.labels.includes('SALE') && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      SALE
                    </span>
                  )}
                  {product.labels.includes('NEW') && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      NEW
                    </span>
                  )}
                  {product.labels.includes('HOT') && (
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                      HOT
                    </span>
                  )}
                </div>
                {/* Image Placeholder with fallback */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain rounded-md"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop if fallback also fails
                    e.target.src = `https://placehold.co/150x150/E0E0E0/333333?text=Image+Error`;
                  }}
                />
                {/* Expand icon (optional, as seen in image) */}
                <div className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1V20m0 0h-4m4 0l-5-5"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between">
                {/* Checkmark icon (as seen in image) */}
                <div className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 text-green-500 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-600">SKU: {product.sku}</span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                  {product.name}
                </h3>

                {/* Star Rating */}
                <StarRating rating={product.rating} reviews={product.reviews} />

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <button className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    {/* Shopping Cart Icon */}
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.697.707 1.697H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interior;
