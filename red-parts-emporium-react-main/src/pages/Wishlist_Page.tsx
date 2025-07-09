import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Wishlist from "@/components/Wishlist"; 

const Wishlist_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Wishlist/>
      <Footer />
    </div>
  );
};

export default Wishlist_Page;
