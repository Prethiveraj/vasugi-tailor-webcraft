
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-16 bg-tailor-maroon text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience Premium Tailoring?
        </h2>
        <p className="font-poppins text-lg mb-8 max-w-3xl mx-auto">
          Schedule an appointment or visit our shop to discuss your tailoring needs. 
          Our experts will help you find the perfect fit for any garment.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-white text-tailor-maroon hover:bg-tailor-cream hover:text-tailor-dark flex items-center px-6 py-6 text-lg">
              <Phone size={20} className="mr-2" />
              Book Appointment
            </Button>
          </Link>
          <a href="mailto:info@vasugitailor.com">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-tailor-maroon flex items-center px-6 py-6 text-lg">
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
