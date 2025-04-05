
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-[#EC7FA9] text-white">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562137579-f8666276649e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')" }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in text-center md:text-left">
          <h1 className="font-exo text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#FFEDFA] italic">
            Lovely<br />Women Style
          </h1>
          <p className="font-exo text-lg md:text-xl text-white mb-8">
            Experience the perfect fit with Vasugi Tailor's expert craftsmanship.
            Custom designs that transform your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/services">
              <Button className="bg-[#BE5985] hover:bg-[#FFEDFA] hover:text-[#BE5985] text-white font-exo px-8 py-6 rounded-md text-lg transition-colors duration-300">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#BE5985] text-white font-exo px-8 py-6 rounded-md text-lg transition-colors duration-300">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
