// pages/TrackOrderPage.jsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrackOrder } from "../components/TrackOrder"; 

const TrackOrderPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <TrackOrder /> 
      <Footer />
    </div>
  );
};

export default TrackOrderPage;
