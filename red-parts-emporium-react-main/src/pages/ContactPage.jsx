import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactUs } from "../components/ContactUs";

const ContactPage = () => { 
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactUs/> 
      <Footer />
    </div>
  );
};

export default ContactPage; 
