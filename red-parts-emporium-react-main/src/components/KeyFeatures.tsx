
import { Truck, Shield, Tag } from "lucide-react";

export const KeyFeatures = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "For orders from $50",
      color: "text-red-500"
    },
    {
      icon: Shield,
      title: "100% Safety",
      description: "Only secure payments",
      color: "text-red-500"
    },
    {
      icon: Tag,
      title: "Hot Offers",
      description: "Discounts up to 90%",
      color: "text-red-500"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
