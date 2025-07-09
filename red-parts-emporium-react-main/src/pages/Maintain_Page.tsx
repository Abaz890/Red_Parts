import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Maintain from "@/components/Maintenance"; 

const Maintain_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Maintain/>
      <Footer />
    </div>
  );
};

export default Maintain_Page;
