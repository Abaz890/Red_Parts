import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Compare from "@/components/Compare";

const Compare_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Compare/>
      <Footer />
    </div>
  );
};

export default Compare_Page;
