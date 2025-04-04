
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with styling */}
      <div className="absolute inset-0 bg-tailor-maroon">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546367791-e7447b431084?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-tailor-maroon/90 to-tailor-maroon/70"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tailor-gold to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tailor-gold to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-tailor-gold text-sm font-poppins tracking-wider uppercase mb-6">Get In Touch</span>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Experience Premium Tailoring?
        </h2>
        <p className="font-poppins text-lg mb-10 max-w-3xl mx-auto text-white/90">
          Schedule an appointment or visit our shop to discuss your tailoring needs. 
          Our experts will help you find the perfect fit for any garment.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact">
            <Button className="bg-white text-tailor-maroon hover:bg-tailor-cream hover:text-tailor-dark flex items-center px-6 py-7 text-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg font-medium group">
              <Phone size={20} className="mr-2" />
              Book Appointment
              <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <a href="mailto:info@vasugitailor.com">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tailor-maroon flex items-center px-6 py-7 text-lg transition-all duration-300 hover:translate-y-[-2px] shadow-lg font-medium">
              <Mail size={20} className="mr-2" />
              Email Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
