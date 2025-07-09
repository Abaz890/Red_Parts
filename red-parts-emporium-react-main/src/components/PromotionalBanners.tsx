
import { Button } from "@/components/ui/button";

export const PromotionalBanners = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Motor Oils Banner */}
          <div 
            className="relative min-h-[300px] rounded-lg overflow-hidden bg-cover bg-center flex items-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
            }}
          >
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">MOTOR OILS</h2>
              <p className="text-lg mb-2">Synthetic motor oil with free shipping</p>
              <p className="mb-6">Friction free life guaranteed</p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Interior Parts Banner */}
          <div 
            className="relative min-h-[300px] rounded-lg overflow-hidden bg-cover bg-center flex items-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
            }}
          >
            <div className="p-8 text-white">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">SAVE UP TO $40</h2>
              <p className="text-lg mb-2">Luxurious interior part for real aesthetes</p>
              <p className="mb-6">Leather, fabric, ivory and more.</p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
