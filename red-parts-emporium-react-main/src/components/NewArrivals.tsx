
import { ProductCard } from "./ProductCard";

export const NewArrivals = () => {
  // New arrival products data
  const newProducts = [
    {
      id: 13,
      name: "Carbon Fiber Hood Scoop",
      price: 299.00,
      originalPrice: null,
      image: "https://cdn11.bigcommerce.com/s-fh9wsjv2/images/stencil/1280x1280/products/5939/41381/IMG_5018__75323__26837.1660612920.jpg?c=2",
      rating: 5,
      reviews: 4,
      badges: ["NEW"],
      sku: "CF-HOOD-001"
    },
    {
      id: 14,
      name: "Performance Cold Air Intake",
      price: 189.00,
      originalPrice: 220.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9tOC22oVQKRmRY2H8kEDNmMqfJgghR45SA&s",
      rating: 4,
      reviews: 7,
      badges: ["NEW", "SALE"],
      sku: "CAI-PERF-X1"
    },
    {
      id: 15,
      name: "Racing Strut Bar",
      price: 159.00,
      originalPrice: null,
      image: "https://m.media-amazon.com/images/I/41tcZrFdy7L.jpg",
      rating: 4,
      reviews: 12,
      badges: ["NEW"],
      sku: "RSB-TOWER-1"
    },
    {
      id: 16,
      name: "Aluminum Radiator",
      price: 425.00,
      originalPrice: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqzPV9EkOCGEgfn5xceYSErip7KJV94KnK5w&s",
      rating: 5,
      reviews: 9,
      badges: ["NEW", "HOT"],
      sku: "ALU-RAD-2024"
    },
    {
      id: 17,
      name: "Turbo Intercooler Kit",
      price: 650.00,
      originalPrice: 750.00,
      image: "https://m.media-amazon.com/images/I/81siN+XigyL.jpg",
      rating: 4,
      reviews: 6,
      badges: ["NEW", "SALE"],
      sku: "TIC-KIT-500"
    },
    {
      id: 18,
      name: "High Flow Fuel Pump",
      price: 89.00,
      originalPrice: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tRlicKlMi-DHSHIR_BDULx0xuzoLFrX2Kg&s",
      rating: 5,
      reviews: 11,
      badges: ["NEW"],
      sku: "HFP-255-LPH"
    },
    {
      id: 19,
      name: "Coilover Suspension Kit",
      price: 1299.00,
      originalPrice: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eRJAA12yg-vXDBnesxH9w-EF40mnPjml_g&s",
      rating: 5,
      reviews: 3,
      badges: ["NEW", "HOT"],
      sku: "COIL-ADJ-PRO"
    },
    {
      id: 20,
      name: "Ceramic Brake Pads",
      price: 125.00,
      originalPrice: null,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVA_cQiITxVDcN8svlyxtRVA_8Q0jiBKZGg&s",
      rating: 4,
      reviews: 18,
      badges: ["NEW"],
      sku: "CBP-CERAMIC"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
