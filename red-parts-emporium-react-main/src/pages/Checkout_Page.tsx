import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Checkout from "@/components/Checkout";

const Checkout_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Checkout/>
      <Footer />
    </div>
  );
};

export default Checkout_Page;
