import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutUsSection } from "../components/AboutUsSection"; 
import { Experience } from "../components/Experience"; 
import { ProfessionalTeam } from "../components/Proffesional_Team"; 
import { Testimonials } from "../components/Testimonials";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutUsSection /> 
      <Experience/> 
      <ProfessionalTeam/> 
      <Testimonials/>
      <Footer />
    </div>
  );
};

export default About;
