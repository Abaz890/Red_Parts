import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Engine from "@/components/Engine"; 

const Engine_Parts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Engine/> 
      <Footer />
    </div>
  );
};

export default Engine_Parts;
