import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Dashboard from "@/components/Dashboard";

const Dashboard_Page = () => { 
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Dashboard/> 
      <Footer />
    </div>
  );
};

export default Dashboard_Page; 
