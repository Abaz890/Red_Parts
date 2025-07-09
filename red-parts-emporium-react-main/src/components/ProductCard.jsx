
import { Button } from "@/components/ui/button";
import { Star, Heart, RotateCcw, Eye } from "lucide-react";

export const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'SALE':
        return 'bg-red-500 text-white';
      case 'NEW':
        return 'bg-blue-500 text-white';
      case 'HOT':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.badges.map((badge, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-semibold rounded ${getBadgeColor(badge)}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">SKU: {product.sku}</div>
        <h3 className="font-semibold text-gray-900 mb-2 hover:text-red-500 cursor-pointer">
          {product.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500">
            {product.rating} on {product.reviews} reviews
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
