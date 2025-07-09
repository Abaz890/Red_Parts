import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Frequency from "@/components/Frequency"; 

const Frequency_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Frequency/> 
      <Footer />
    </div>
  );
};

export default Frequency_Page;
