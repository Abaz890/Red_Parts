import React from 'react';

const Wishlist = () => {
    const wishlistItems = [
        {
            id: 1,
            image: 'https://onlinecarparts.co.za/85518-home_default/toyota-tuv-13-h-spark-plug-1982-1987-eng-code-4k-ngk-bpr5es.jpg',
            productName: 'Brandix Spark Plug Kit ASR-400',
            reviewsCount: 3,
            stars: 3,
            stockStatus: 'In Stock',
            price: 19.00,
        },
        {
            id: 2,
            image: 'https://media.torque.com.sg/public/2019/04/big-brake-kits.jpg',
            productName: 'Brandix Brake Kit BDX-750Z370-S',
            reviewsCount: 22,
            stars: 5,
            stockStatus: 'In Stock',
            price: 224.00,
        },
        {
            id: 3,
            image: 'https://image.made-in-china.com/202f0j00pzyoOefcEJug/High-Cost-Performance-Factory-Price-Left-Front-Headlight-for-Byd-Atto3-Parts-EL-4121010A.webp',
            productName: 'Left Headlight Of Brandix Z54',
            reviewsCount: 14,
            stars: 3,
            stockStatus: 'In Stock',
            price: 349.00,
        },
    ];

    const renderStars = (filledStars) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < filledStars) {
                stars.push(<span key={i} className="text-yellow-500">&#9733;</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">&#9733;</span>);
            }
        }
        return stars;
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-4xl mx-auto box-border">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Wishlist</h2>

            <div className="overflow-x-auto">
                <table
                    className="min-w-full divide-y divide-gray-200"
                    style={{ marginLeft: '40px' }}
                >

                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stock Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {wishlistItems.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-16 w-16">
                                            <img className="h-16 w-16 rounded-md object-cover" src={item.image} alt={item.productName} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/f3f4f6/374151?text=N/A' }} />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{item.productName}</div>
                                    <div className="text-sm text-gray-500 flex items-center mt-1">
                                        <span className="flex">
                                            {renderStars(item.stars)}
                                        </span>
                                        <span className="ml-2">({item.reviewsCount} reviews)</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.stockStatus === 'In Stock' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {item.stockStatus}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                                    ${item.price.toFixed(2)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end space-x-2">
                                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                            Add to cart
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600 ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;