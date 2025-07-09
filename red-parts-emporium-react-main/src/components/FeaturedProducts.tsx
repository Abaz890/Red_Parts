
import { ProductCard } from "./ProductCard";

export const FeaturedProducts = () => {
  // Dummy product data - will be replaced with API data
  const products = [
    {
      id: 1,
      name: "Brandix Spark Plug Kit ASR-400",
      price: 19.00,
      originalPrice: null,
      image: "https://c1.wallpaperflare.com/preview/146/492/835/spark-plug-iridium-metal-glass.jpg",
      rating: 4,
      reviews: 3,
      badges: ["SALE", "NEW", "HOT"],
      sku: "140-10440-B"
    },
    {
      id: 2,
      name: "Brandix Brake Kit BDX-750Z370-S",
      price: 224.00,
      originalPrice: null,
      image: "https://apracing.com/cdn/pages/14/14/Brake%20kit.jpg",
      rating: 5,
      reviews: 22,
      badges: ["SALE"],
      sku: "573-23743-C"
    },
    {
      id: 3,
      name: "Left Headlight Of Brandix Z54",
      price: 349.00,
      originalPrice: 415.00,
      image: "https://www.autostore.pk/wp-content/uploads/2023/03/dds.png",
      rating: 3,
      reviews: 14,
      badges: ["SALE"],
      sku: "009-50078-Z"
    },
    {
      id: 4,
      name: "Glossy Gray 19\" Aluminium Wheel AR-19",
      price: 589.00,
      originalPrice: null,
      image: "https://images-cdn.ubuy.co.in/66393bc517284a458c67cbc8-replica-alloy-rims-repc19-26x10-6x139-7.jpg",
      rating: 4,
      reviews: 26,
      badges: ["HOT"],
      sku: "A43-44328-B"
    },
    {
      id: 5,
      name: "Twin Exhaust Pipe From Brandix Z54",
      price: 749.00,
      originalPrice: null,
      image: "https://m.media-amazon.com/images/I/71XCPHVDn5L._AC_SL1500_.jpg",
      rating: 4,
      reviews: 9,
      badges: [],
      sku: "LDX-1945-H"
    },
    {
      id: 6,
      name: "Motor Oil Level 5",
      price: 23.00,
      originalPrice: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwIupY3rh2O9S7I5CXrHQQlIomqOs6kONM7Q&s",
      rating: 5,
      reviews: 2,
      badges: [],
      sku: "MOT-5L-001"
    },
    {
      id: 7,
      name: "Brandix Engine Block Z4",
      price: 452.00,
      originalPrice: null,
      image: "https://s19528.pcdn.co/wp-content/uploads/2020/12/Engine-Blocks.jpg",
      rating: 0,
      reviews: 0,
      badges: [],
      sku: "ENG-Z4-2024"
    },
    {
      id: 8,
      name: "Brandix Clutch Discs Z175",
      price: 345.00,
      originalPrice: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnl79pIqibtLTC8Ul__58lEg5A_DgX2uqexA&s",
      rating: 3,
      reviews: 7,
      badges: [],
      sku: "CLU-Z175-X"
    },
    {
      id: 9,
      name: "Brandix Manual Five Speed Gearbox",
      price: 879.00,
      originalPrice: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzmdH3th9gIbB3Yy-HC1doR_ms2LumG6Byg&s",
      rating: 4,
      reviews: 6,
      badges: [],
      sku: "GBX-5SPD-M"
    },
    {
      id: 10,
      name: "Air Filter Premium Quality",
      price: 35.00,
      originalPrice: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStinC0wnWR9TG0frg629k3Yc_zmLu6c1TTtw&s",
      rating: 5,
      reviews: 15,
      badges: ["NEW"],
      sku: "AF-PREM-001"
    },
    {
      id: 11,
      name: "Performance Exhaust System",
      price: 1250.00,
      originalPrice: 1500.00,
      image: "https://images-na.ssl-images-amazon.com/images/I/41ub7iL433L.jpg",
      rating: 4,
      reviews: 12,
      badges: ["SALE", "HOT"],
      sku: "EXH-PERF-SYS"
    },
    {
      id: 12,
      name: "LED Headlight Conversion Kit",
      price: 189.00,
      originalPrice: null,
      image: "https://www.tractorseats.com/images/variant/large/2722.jpg",
      rating: 5,
      reviews: 8,
      badges: ["NEW"],
      sku: "LED-KIT-H7"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-900 text-white rounded">All</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Power Tools</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Hand Tools</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">Plumbing</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
