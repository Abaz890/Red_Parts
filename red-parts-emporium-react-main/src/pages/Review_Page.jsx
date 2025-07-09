import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Review from "@/components/Review"; 

const Review_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Review/>
      <Footer />
    </div>
  );
};

export default Review_Page;
