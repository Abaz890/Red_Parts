import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Interior from "@/components/Interior"; 

const Interior_Parts = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Interior/>
      <Footer />
    </div>
  );
};

export default Interior_Parts;
