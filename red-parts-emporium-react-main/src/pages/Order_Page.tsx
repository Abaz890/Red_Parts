import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Order from "@/components/OrderSuccessPage"; 

const Order_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Order/>
      <Footer />
    </div>
  );
};

export default Order_Page;
