import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Latest from "@/components/News"; 

const Latest_News = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Latest/>
      <Footer />
    </div>
  );
};

export default Latest_News;
