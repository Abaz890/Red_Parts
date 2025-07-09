import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export const HeroSection = () => {
  // TODO: These will be integrated with API for dynamic data in the future
  const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018"];
  const makes = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes", "Audi"];
  const models = ["Camry", "Civic", "F-150", "Silverado", "3 Series", "C-Class", "A4"];
  const engines = ["2.0L", "2.4L", "3.5L V6", "5.0L V8", "Electric", "Hybrid", "Turbo"];

  return (
    <div 
      className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find Parts For Your Vehicle
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Over hundreds of brands and tens of thousands of parts
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Select>
              <SelectTrigger className="h-12 bg-white text-gray-900">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 bg-white text-gray-900">
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {makes.map((make) => (
                  <SelectItem key={make} value={make}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 bg-white text-gray-900">
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {models.map((model) => (
                  <SelectItem key={model} value={model}>
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="h-12 bg-white text-gray-900">
                <SelectValue placeholder="Select Engine" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {engines.map((engine) => (
                  <SelectItem key={engine} value={engine}>
                    {engine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-3 text-lg font-semibold"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
