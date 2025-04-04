
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-tailor-maroon text-white relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546367791-e7447b431084?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience Premium Tailoring?
        </h2>
        <p className="font-poppins text-lg mb-8 max-w-3xl mx-auto opacity-90">
          Schedule an appointment or visit our shop to discuss your tailoring needs. 
          Our experts will help you find the perfect fit for any garment.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact">
            <Button className="bg-white text-tailor-maroon hover:bg-tailor-cream flex items-center">
              <Phone size={18} className="mr-2" />
              Book Appointment
            </Button>
          </Link>
          <a href="mailto:info@vasugitailor.com">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tailor-maroon flex items-center">
              <Mail size={18} className="mr-2" />
              Email Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
