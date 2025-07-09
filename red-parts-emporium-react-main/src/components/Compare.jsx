import React from 'react';

const products = [
    {
        id: 1,
        image: './rsz_istockphoto-480955900-612x612.jpg',
        name: 'Brandix Spark Plug Kit ASR-400',
        rating: 4,
        reviews: 9,
        availability: 'In Stock',
        price: '$19.00',
        sku: '140-10440-B',
        weight: '0.1 Kg',
        color: 'Gray',
        material: 'Thorium',
    },
    {
        id: 2,
        image: './rsz_big_brake_kit-b.png', 
        name: 'Brandix Brake Kit BDX-750Z370-S',
        rating: 3,
        reviews: 22,
        availability: 'In Stock',
        price: '$224.00',
        sku: '573-23743-C',
        weight: '2.3 Kg',
        color: 'Red',
        material: 'Steel',
    },
    {
        id: 3,
        image: './rsz_1dds.png', 
        name: 'Left Headlight Of Brandix Z54',
        rating: 4,
        reviews: 14,
        availability: 'In Stock',
        price: '$349.00',
        sku: '009-50078-Z',
        weight: '1.4 Kg',
        color: 'Black',
        material: 'Plastic',
    },
    {
        id: 4,
        image: './rsz_1images.jpg', 
        name: 'Glossy Gray 19" Aluminium Wheel AR-19',
        rating: 3,
        reviews: 26,
        availability: 'In Stock',
        price: '$589.00',
        sku: 'A43-44328-B',
        weight: '5 Kg',
        color: 'Black',
        material: 'Aluminium',
    },
    {
        id: 5,
        image: './rsz_41ogouycfll_ss400_.jpg', 
        name: 'Twin Exhaust Pipe From Brandix Z54',
        rating: 4,
        reviews: 9,
        availability: 'In Stock',
        price: '$749.00',
        sku: '729-51203-B',
        weight: '2 Kg',
        color: 'Metallic',
        material: 'Aluminium',
    },
];

const StarRating = ({ rating, reviews }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex flex-col items-center justify-center text-yellow-400 text-sm">
            <div className="flex">
                {[...Array(fullStars)].map((_, i) => (
                    <svg key={`full-${i}`} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                ))}
                {hasHalfStar && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0v15.27z" />
                    </svg>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <svg key={`empty-${i}`} className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
                    </svg>
                ))}
            </div>
            <span className="mt-1 text-gray-600 text-xs text-center">Based on {reviews} reviews</span>
        </div>
    );
};

const App = () => {
    const features = [
        {
            key: 'product', label: 'Product', render: (product) => (
                <div className="flex flex-col items-center p-2">
                    <div className="w-20 h-20 mb-1 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/E0E0E0/333333?text=Error'; }}
                        />
                    </div>

                    <p className="text-xs font-semibold text-gray-800 text-center break-words">{product.name}</p>
                </div>
            )
        },
        { key: 'rating', label: 'Rating', render: (product) => <StarRating rating={product.rating} reviews={product.reviews} /> },
        {
            key: 'availability', label: 'Availability', render: (product) => (
                <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${product.availability === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.availability}
                </span>
            )
        },
        { key: 'price', label: 'Price', render: (product) => <span className="font-bold text-base text-gray-900">{product.price}</span> },
        {
            key: 'add_to_cart', label: 'Add to cart', render: () => (
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-3 rounded-lg shadow-md transition duration-300 ease-in-out text-sm">
                    Add to cart
                </button>
            )
        },
        { key: 'sku', label: 'SKU', render: (product) => <span className="text-gray-700 text-xs">{product.sku}</span> },
        { key: 'weight', label: 'Weight', render: (product) => <span className="text-gray-700 text-xs">{product.weight}</span> },
        { key: 'color', label: 'Color', render: (product) => <span className="text-gray-700 text-xs">{product.color}</span> },
        { key: 'material', label: 'Material', render: (product) => <span className="text-gray-700 text-xs">{product.material}</span> },
        {
            key: 'remove', label: '', render: () => (
                <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                    Remove
                </button>
            )
        },
    ];

    return (
        <div className="container mx-auto p-4 font-inter">
            <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Compare</h1>

            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-32">
                                Feature
                            </th>
                            {products.map((product) => (
                                <th key={product.id} className="px-2 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {features.map((feature) => (
                            <tr key={feature.key}>
                                <td className="px-4 py-3 whitespace-normal text-sm font-medium text-gray-900 bg-gray-50">
                                    {feature.label}
                                </td>
                                {products.map((product) => (
                                    <td key={`${feature.key}-${product.id}`} className="px-2 py-3 text-sm text-gray-500 text-center align-top">
                                        {feature.render(product)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
