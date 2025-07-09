import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Register from "@/components/Register"; 

const Register_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Register/>
      <Footer />
    </div>
  );
};

export default Register_Page;
