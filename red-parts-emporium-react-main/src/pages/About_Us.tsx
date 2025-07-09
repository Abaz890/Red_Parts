import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutUsSection } from "../components/AboutUsSection"; 
import { Experience } from "../components/Experience"; 
import {Proffesional} from "../components/Proffesional_Team";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutUsSection /> 
      <Experience/> 
      <Proffesional/>
      <Footer />
    </div>
  );
};

export default About;
