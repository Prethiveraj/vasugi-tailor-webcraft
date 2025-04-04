
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-tailor-dark text-white">
      {/* Hero Background - Replace this URL with your image */}
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80')" }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Premium <span className="text-tailor-gold">Tailoring</span> Services
          </h1>
          <p className="font-poppins text-lg md:text-xl text-gray-200 mb-8">
            Experience the perfect fit with Vasugi Tailor's expert craftsmanship and attention to detail.
            Custom tailoring and alterations that transform your wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services">
              <Button className="bg-tailor-maroon hover:bg-tailor-gold text-white font-poppins px-8 py-6 rounded-md text-lg">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white hover:text-tailor-dark text-white font-poppins px-8 py-6 rounded-md text-lg">
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
