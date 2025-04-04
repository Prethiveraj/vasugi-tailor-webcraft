
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-tailor-dark text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-tailor-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-16 w-96 h-96 bg-tailor-gold opacity-10 rounded-full blur-3xl"></div>
      
      {/* Hero Background with enhanced styling */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80')" }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-40">
        <div className="max-w-3xl space-y-8">
          <div className="inline-block animate-fade-in" style={{ animationDelay: "200ms" }}>
            <span className="bg-tailor-maroon/80 px-4 py-1 rounded-full text-sm font-poppins tracking-wider uppercase">
              Premium Tailoring Since 1985
            </span>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in" style={{ animationDelay: "400ms" }}>
            Crafting <span className="text-tailor-gold italic">Elegance</span> With Every Stitch
          </h1>
          
          <p className="font-poppins text-lg md:text-xl text-gray-200 max-w-xl animate-fade-in" style={{ animationDelay: "600ms" }}>
            Experience perfection in every detail at Vasugi Tailor's. 
            Where traditional craftsmanship meets contemporary style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Link to="/services">
              <Button className="bg-tailor-maroon hover:bg-tailor-maroon/90 text-white font-poppins px-8 py-6 rounded-md text-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg group">
                Explore Services
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-tailor-dark text-white font-poppins px-8 py-6 rounded-md text-lg transition-all duration-300 shadow-lg">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tailor-gold to-transparent"></div>
    </div>
  );
};

export default Hero;
