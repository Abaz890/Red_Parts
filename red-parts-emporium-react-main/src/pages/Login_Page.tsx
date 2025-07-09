import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Login from "@/components/LoginForm"; 

const Login_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Login/>
      <Footer />
    </div>
  );
};

export default Login_Page;
