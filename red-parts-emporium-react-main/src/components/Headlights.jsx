import React from 'react';

const Headlights = () => {
  const products = [
    {
      id: 1,
      sku: 'HL-LED-001',
      name: 'LED Headlight Conversion Kit - H4',
      price: 89.99,
      originalPrice: null,
      rating: 5,
      reviews: 75,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyUuxT13_XCNsM9IrKXFednVQSy3mYNRmwQ&s',
      labels: ['NEW', 'HOT'],
    },
    {
      id: 2,
      sku: 'TL-SMK-002',
      name: 'Smoked LED Tail Lights (Pair)',
      price: 159.00,
      originalPrice: 199.00,
      rating: 4,
      reviews: 40,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfPo8VfAfw_wvV66xDJkT3ao3ArV633mIXCw&s',
      labels: ['SALE'],
    },
    {
      id: 3,
      sku: 'FOG-YLLW-003',
      name: 'Yellow LED Fog Light Bulbs - H11',
      price: 39.50,
      originalPrice: null,
      rating: 4,
      reviews: 25,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwoFTAdwXibw7Th241zq0dY6TmGQVW5-3pw&s',
      labels: ['HOT'],
    },
    {
      id: 4,
      sku: 'DRL-SWCH-004',
      name: 'Daytime Running Light (DRL) Switchback Strips',
      price: 65.00,
      originalPrice: null,
      rating: 5,
      reviews: 30,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbz79mDi8wq3y1Ig6iPNdRKRtad3U8UxbLQ&s',
      labels: [],
    },
    {
      id: 5,
      sku: 'INT-AMB-005',
      name: 'Interior Ambient Lighting Kit (RGB)',
      price: 49.99,
      originalPrice: null,
      rating: 4,
      reviews: 55,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu8_y1m562bZQILlxWzfFZMB8o-Y2VE1vUQ&s',
      labels: ['NEW'],
    },
    {
      id: 6,
      sku: 'ACC-HL-006',
      name: 'Headlight Restoration Kit',
      price: 25.00,
      originalPrice: 35.00,
      rating: 4,
      reviews: 60,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2MQ_Hp3XckSv4H9POHUyloxrULwiHKiRTIw&s',
      labels: ['SALE'],
    },
    {
      id: 7,
      sku: 'BULB-HB3-007',
      name: 'High Beam HB3 LED Bulbs',
      price: 79.00,
      originalPrice: null,
      rating: 5,
      reviews: 22,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7-ga6YMzbC_DXXFJYmFgnmzl8EoEZtMLpw&s',
      labels: [],
    },
    {
      id: 8,
      sku: 'LIGHTBAR-OFFRD-008',
      name: 'Off-Road LED Light Bar (20-inch)',
      price: 110.00,
      originalPrice: null,
      rating: 4,
      reviews: 15,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8TFn2UEeR4ZqjKcGEVbO7O5yamBMTiyH_g&s',
      labels: [],
    },
    {
      id: 9,
      sku: 'TURN-SEQ-009',
      name: 'Sequential LED Turn Signal Mirrors',
      price: 95.00,
      originalPrice: null,
      rating: 4,
      reviews: 18,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTG5LdvLobHXxMHrxm9E8JsnobXWBeAN7pPA&s',
      labels: [],
    },
    {
      id: 10,
      sku: 'UNDERGLOW-APP-010',
      name: 'App-Controlled Underglow Lighting Kit',
      price: 120.00,
      originalPrice: null,
      rating: 5,
      reviews: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-2iLt2_uWN-fH1OhGXRRuuJihWSvT2lS1g&s',
      labels: [],
    },
    {
      id: 11,
      sku: 'ACC-CLEAN-011',
      name: 'Headlight Lens Cleaner Spray',
      price: 14.99,
      originalPrice: null,
      rating: 4,
      reviews: 30,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6eCCJQXiWCSZOqMessMPvGQKHP9tbFa0hg&s',
      labels: [],
    },
    {
      id: 12,
      sku: 'HL-PROJ-012',
      name: 'Projector Headlight Assembly (Pair)',
      price: 320.00,
      originalPrice: 380.00,
      rating: 5,
      reviews: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVlLW0B5n9f3XxMnQ-YWh4oVsv1Tq7XyUFg&s',
      labels: ['NEW', 'SALE'],
    },
    {
      id: 13,
      sku: 'HL-COVER-013',
      name: 'Custom Headlight Covers',
      price: 55.00,
      originalPrice: null,
      rating: 3,
      reviews: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIW2KB6wXWs6MQCwbLSpudo3p_nUtvyZd5Hw&s',
      labels: [],
    },
    {
      id: 14,
      sku: 'TL-TINT-014',
      name: 'Tail Light Tint Film Roll',
      price: 29.99,
      originalPrice: null,
      rating: 4,
      reviews: 15,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3S51yek0y3gMP6opChDbfN6TScreLXl5xMg&s',
      labels: [],
    },
    {
      id: 15,
      sku: 'EMB-LOGO-015',
      name: 'Illuminated Car Emblem Logo',
      price: 35.00,
      originalPrice: null,
      rating: 4,
      reviews: 12,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvj8RMM6bJaK22xKCOd9YDIa66nTEnPwyGaA&s',
      labels: ['HOT'],
    },
    {
      id: 16,
      sku: 'PWR-HARN-016',
      name: 'Heavy Duty Wiring Harness for LED Lights',
      price: 19.99,
      originalPrice: null,
      rating: 5,
      reviews: 45,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFZ1hNdeHccZ2yaGf3Fh3MS3QM10ThEb7Fw&s',
      labels: [],
    },
    {
      id: 17,
      sku: 'BULB-PARK-017',
      name: 'LED Parking Light Bulbs (Pair)',
      price: 12.50,
      originalPrice: null,
      rating: 4,
      reviews: 28,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXpp_mUJPpiCrgoTzpTkHdY7GbRV_-_B4JA&s',
      labels: [],
    },
    {
      id: 18,
      sku: 'HL-MOUNT-018',
      name: 'Headlight Mounting Brackets',
      price: 28.00,
      originalPrice: null,
      rating: 3,
      reviews: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx48pZcJRU5DRIctxtHy7YIwngJTszw1bZog&s',
      labels: [],
    },
    {
      id: 19,
      sku: 'KIT-INT-019',
      name: 'Interior Dome & Map Light LED Kit',
      price: 24.99,
      originalPrice: null,
      rating: 5,
      reviews: 33,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOLN3EP9ZZZuixlMhluE3_e-9jStffHA8KA&s',
      labels: ['SALE'],
    },
    {
      id: 20,
      sku: 'TL-GASKET-020',
      name: 'Tail Light Gasket Seal',
      price: 16.00,
      originalPrice: null,
      rating: 4,
      reviews: 9,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1y3WI8IwzdNWPmTC7adEF7GB3f1QwPqyPw&s',
      labels: [],
    },
    {
      id: 21,
      sku: 'HL-DRY-021',
      name: 'Headlight De-Fogging Silica Gel Packs',
      price: 9.99,
      originalPrice: null,
      rating: 3,
      reviews: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQV4KvrEAUrTJTcDMG-eZfNIfvSasgGCVBDQ&s',
      labels: [],
    },
    {
      id: 22,
      sku: 'SIDE-MARKER-022',
      name: 'LED Side Marker Lights (Amber/Red)',
      price: 32.00,
      originalPrice: null,
      rating: 4,
      reviews: 11,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknbaNONwJQBfPlRpuxV3L3EEWSqLBCd7kGA&s',
      labels: ['NEW'],
    },
    {
      id: 23,
      sku: 'KIT-WIRING-023',
      name: 'Universal Lighting Wiring Kit with Relay',
      price: 45.00,
      originalPrice: null,
      rating: 5,
      reviews: 18,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7QmDftMWjN-jtwSgNLAtmpOdgLdz_UCH3A&s',
      labels: [],
    },
    {
      id: 24,
      sku: 'HL-ADHESIVE-024',
      name: 'Headlight Sealant Adhesive',
      price: 17.50,
      originalPrice: null,
      rating: 4,
      reviews: 14,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozFdxODqev-UkT-rgUwn3v-1DEgXlKXL-oA&s',
      labels: ['HOT'],
    },
  ];

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
          Headlights & Lighting
        </h1> {/* Changed heading to reflect content */}
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

export default Headlights;
