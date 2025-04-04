
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-tailor-dark text-white">
      <div 
        className="bg-center bg-cover bg-no-repeat opacity-20 absolute inset-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl space-y-6">
          <span className="bg-tailor-maroon px-4 py-1 rounded-full text-sm font-poppins tracking-wider uppercase">
            Premium Tailoring Since 1985
          </span>
          
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Crafting <span className="text-tailor-gold">Elegance</span> With Every Stitch
          </h1>
          
          <p className="font-poppins text-lg md:text-xl text-gray-200 max-w-xl">
            Experience perfection in every detail at Vasugi Tailor's. 
            Where traditional craftsmanship meets contemporary style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/services">
              <Button className="bg-tailor-maroon hover:bg-tailor-maroon/90 text-white font-poppins px-6 py-2">
                Explore Services
                <ChevronRight className="ml-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-tailor-dark text-white font-poppins px-6 py-2">
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
