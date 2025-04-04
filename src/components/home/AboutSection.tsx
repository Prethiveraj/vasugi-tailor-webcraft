
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const AboutSection = () => {
  const features = [
    "30+ years of tailoring expertise",
    "Skilled master tailors",
    "High-quality materials",
    "Attention to detail",
    "Perfect fit guarantee",
    "Quick turnaround times"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column - Replace this URL with your image */}
          <div className="relative">
            <div 
              className="rounded-lg shadow-xl h-[500px] bg-center bg-cover"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80')" }}
            ></div>
            {/* Duplicate image that can be replaced later */}
            <div 
              className="absolute -bottom-6 -right-6 rounded-lg shadow-xl h-[200px] w-[200px] bg-center bg-cover border-4 border-white"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80')" }}
            ></div>
          </div>
          
          {/* Content Column */}
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-tailor-dark mb-4">
              About Vasugi Tailor
            </h2>
            <div className="w-20 h-1 bg-tailor-maroon mb-6"></div>
            <p className="font-poppins text-gray-700 mb-6">
              Since 1985, Vasugi Tailor has been providing premium tailoring services in Chennai. Our master tailors combine traditional techniques with modern styles to create perfect-fitting garments for every occasion.
            </p>
            <p className="font-poppins text-gray-700 mb-8">
              We take pride in our craftsmanship and attention to detail, ensuring that every stitch meets our high standards of quality. Whether you need alterations, custom clothing, or wedding outfits, we are committed to exceeding your expectations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check size={18} className="text-tailor-maroon mr-2" />
                  <span className="font-poppins text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
