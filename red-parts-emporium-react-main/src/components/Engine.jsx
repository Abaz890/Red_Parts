import React from 'react';

const Engine = () => {

    const products = [
        {
            id: 1,
            sku: '140-10440-B',
            name: 'Brandix Spark Plug Kit ASR-400',
            price: 19.00,
            originalPrice: null,
            rating: 4,
            reviews: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhBfA42rPJtgM6ApmVmGoqc5j1UBNhWSAb6Q&s',
            labels: ['SALE', 'NEW', 'HOT'],
        },
        {
            id: 2,
            sku: '573-23743-C',
            name: 'Brandix Brake Kit BDX-750Z370-S',
            price: 224.00,
            originalPrice: null,
            rating: 5,
            reviews: 22,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lECvk63HHyOkFtqsVPQ4Lt2o-flZXpQ3BA&s', // Placeholder image
            labels: ['SALE'],
        },
        {
            id: 3,
            sku: '009-50079-Z',
            name: 'Left Headlight Of Brandix Z54',
            price: 349.00,
            originalPrice: 415.00,
            rating: 3,
            reviews: 14,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BNOEcnPHHFX94qTHGYTQ0C0EfUPlo5ssMA&s',
            labels: ['SALE'],
        },
        {
            id: 4,
            sku: 'A43-44328-B',
            name: 'Glossy Gray 19" Aluminium Wheel AR-19',
            price: 589.00,
            originalPrice: null,
            rating: 5,
            reviews: 12,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78Z3DF3TbNFufmCg8zSaEI-8WsTPcoVPYaQ&s', // Placeholder image
            labels: ['HOT'],
        },
        {
            id: 5,
            sku: '140-10441-A',
            name: 'Brandix Air Filter X200',
            price: 25.50,
            originalPrice: null,
            rating: 4,
            reviews: 8,
            image: 'https://i.pinimg.com/736x/05/13/40/051340d455a5b182014e5cc4fabf578a.jpg',
            labels: [],
        },
        {
            id: 6,
            sku: '573-23744-D',
            name: 'Brandix Shock Absorber Set',
            price: 150.00,
            originalPrice: null,
            rating: 4,
            reviews: 10,
            image: 'https://media.istockphoto.com/id/542198830/photo/car-shock-absorber-assembly.jpg?s=612x612&w=0&k=20&c=GQR4DEwSZ_8-qO43AlSA4MJAs30xL1Y2gs1Gnv3e4LM=',
            labels: ['NEW'],
        },
        {
            id: 7,
            sku: '009-50080-Y',
            name: 'Right Tail Light Brandix C30',
            price: 280.00,
            originalPrice: null,
            rating: 5,
            reviews: 18,
            image: 'https://image.made-in-china.com/2f0j00WCmcNQrorhbl/Tyj-High-Precision-Backlight-Tail-Lamps-Inter-Auto-Body-Kits-for-Corolla-2020-Middle-East.webp',
            labels: [],
        },
        {
            id: 8,
            sku: 'A43-44329-C',
            name: 'Matte Black 18" Alloy Wheel',
            price: 450.00,
            originalPrice: null,
            rating: 4,
            reviews: 9,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KsQBIGEcN3v_1WvUIRkPtuSHrLGE9Y_87w&s',
            labels: [],
        },
        {
            id: 9,
            sku: '140-10442-B',
            name: 'Brandix Oil Filter Pro-100',
            price: 15.75,
            originalPrice: null,
            rating: 3,
            reviews: 5,
            image: 'https://media.istockphoto.com/id/1033298590/photo/car-oil-filter-isolated-on-white-background-automobile-spare-part.jpg?s=612x612&w=0&k=20&c=OHzfK0cuoP3VrJ-rvN2AbFZABj2or9NKa19vLXrNQhI=',
            labels: [],
        },
        {
            id: 10,
            sku: '573-23745-E',
            name: 'Brandix Clutch Kit Heavy Duty',
            price: 350.00,
            originalPrice: null,
            rating: 5,
            reviews: 25,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJcAsFzYMrGMU12yOhsgQv6mUNyGhcZ9S4g&s',
            labels: ['SALE'],
        },
        {
            id: 11,
            sku: '009-50081-X',
            name: 'Front Bumper Brandix X5',
            price: 620.00,
            originalPrice: null,
            rating: 4,
            reviews: 7,
            image: 'https://a.allegroimg.com/s1024/115444/ebd962f74e5ba22453f228ac653e/ZDERZAK-PRZOD-PRZEDNI-BMW-X5-E70-LCI-LIFT-MPAKIET-M-PAKIET-A52-Strona-zabudowy-przod',
            labels: [],
        },
        {
            id: 12,
            sku: 'A43-44330-D',
            name: 'Chrome Finish Exhaust Tip',
            price: 85.00,
            originalPrice: null,
            rating: 4,
            reviews: 11,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKIGUrye3mvbkdFIkZt8N_s5GKf850VkbUg&s',
            labels: ['NEW'],
        },
        {
            id: 13,
            sku: '140-10443-C',
            name: 'Brandix Fuel Pump Assembly',
            price: 95.00,
            originalPrice: null,
            rating: 4,
            reviews: 6,
            image: 'https://cache3.pakwheels.com/ad_pictures/5269/Slide_universal-fuel-pump-thin-pin-52690342.jpg',
            labels: ['HOT'],
        },
        {
            id: 14,
            sku: '573-23746-F',
            name: 'Brandix Radiator Coolant',
            price: 12.00,
            originalPrice: null,
            rating: 5,
            reviews: 30,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-p2wfsi758XsUmIbOeJsiYgi7wNwnzF0QQ&s',
            labels: [],
        },
        {
            id: 15,
            sku: '009-50082-W',
            name: 'Side Mirror Brandix R1',
            price: 75.00,
            originalPrice: null,
            rating: 3,
            reviews: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmfjewBm_ULmXJ1ot-MvUPjQjAeqWjiPPLg&s',
            labels: [],
        },
        {
            id: 16,
            sku: 'A43-44331-E',
            name: 'Performance Spark Plugs (4-pack)',
            price: 49.99,
            originalPrice: null,
            rating: 5,
            reviews: 15,
            image: 'https://mcpartsdepot.com/cdn/shop/files/KT5505.01.png?v=1715204481',
            labels: ['SALE'],
        },
        {
            id: 17,
            sku: '140-10444-D',
            name: 'Brandix Alternator Unit',
            price: 180.00,
            originalPrice: null,
            rating: 4,
            reviews: 9,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62Br27uuVjyELDMcpys3H4OefXQmn2uODMw&s',
            labels: [],
        },
        {
            id: 18,
            sku: '573-23747-G',
            name: 'Brandix Ignition Coil Pack',
            price: 65.00,
            originalPrice: null,
            rating: 4,
            reviews: 13,
            image: 'https://afepower.com/media/catalog/product/7/7/77-92010-mc_1.jpg?optimize=medium&fit=bounds&height=&width=',
            labels: ['NEW'],
        },
        {
            id: 19,
            sku: '009-50083-V',
            name: 'Power Steering Pump',
            price: 110.00,
            originalPrice: null,
            rating: 3,
            reviews: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzX3qiCG1v2nnfIUbaxGfG4P3WJPvLn6CmeQ&s',
            labels: [],
        },
        {
            id: 20,
            sku: 'A43-44332-F',
            name: 'LED Headlight Conversion Kit',
            price: 299.00,
            originalPrice: null,
            rating: 5,
            reviews: 20,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cJDh_rVXxW8iJ80EbgSIWF8GMZnbgnfLpA&s',
            labels: ['HOT'],
        },
        {
            id: 21,
            sku: '140-10445-E',
            name: 'Brandix Water Pump',
            price: 70.00,
            originalPrice: null,
            rating: 4,
            reviews: 7,
            image: 'https://goldenpumps.com.pk/wp-content/uploads/2015/10/deepwell1-1.jpg',
            labels: [],
        },
        {
            id: 22,
            sku: '573-23748-H',
            name: 'Brandix Timing Belt Kit',
            price: 130.00,
            originalPrice: null,
            rating: 4,
            reviews: 16,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBMq_fdRMkn7t1a7bFlkvQiFlWSNZagKr1w&s',
            labels: ['SALE'],
        },
        {
            id: 23,
            sku: '009-50084-U',
            name: 'Wheel Bearing Kit (Front)',
            price: 55.00,
            originalPrice: null,
            rating: 3,
            reviews: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RuqBJHcb44IaUkfNY2-5FD1zxYW0WHBS7A&s',
            labels: [],
        },
        {
            id: 24,
            sku: 'A43-44333-G',
            name: 'Sport Suspension Kit',
            price: 750.00,
            originalPrice: null,
            rating: 5,
            reviews: 10,
            image: 'https://www.birdsauto.com/sites/default/files/IMG_4223_best.jpg',
            labels: ['NEW'],
        },
    ];

    // Star rating component
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
                    Engine Parts
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

export default Engine; 
