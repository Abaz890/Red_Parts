import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Headlights from "@/components/Headlights"; 

const HeadlightsLightingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Headlights/>
      <Footer />
    </div>
  );
};

export default HeadlightsLightingPage;
