
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { KeyFeatures } from "@/components/KeyFeatures";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PromotionalBanners } from "@/components/PromotionalBanners";
import { NewArrivals } from "@/components/NewArrivals";
import { LatestNews } from "@/components/LatestNews";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <KeyFeatures />
      <FeaturedProducts />  
      <PromotionalBanners />
      <NewArrivals />
      <LatestNews />
      <Footer />
    </div>
  );
};

export default Index;
