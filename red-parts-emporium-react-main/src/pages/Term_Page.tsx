import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Term from "@/components/Terms"; 

const Term_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Term/>
      <Footer />
    </div>
  );
};

export default Term_Page;
