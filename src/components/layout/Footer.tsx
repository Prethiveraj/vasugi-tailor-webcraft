
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Scissors } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tailor-dark text-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tailor-gold to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-tailor-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-10 w-60 h-60 bg-tailor-gold opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center mb-6 group">
              <Scissors size={24} className="text-tailor-gold mr-2 transition-transform group-hover:rotate-45" />
              <h3 className="font-playfair text-2xl font-bold text-tailor-gold">Vasugi Tailor</h3>
            </div>
            <p className="font-poppins text-gray-300 mb-6 leading-relaxed">
              Providing premium tailoring services with attention to detail and commitment to quality since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-300 hover:text-tailor-gold transition-colors p-2 rounded-full hover:bg-white/5">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-300 hover:text-tailor-gold transition-colors p-2 rounded-full hover:bg-white/5">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-300 hover:text-tailor-gold transition-colors p-2 rounded-full hover:bg-white/5">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="font-playfair text-xl font-bold mb-6 text-tailor-gold fancy-border pb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "About Us", "Gallery", "Contact"].map((item, index) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(' ', '-')}`;
                
                return (
                  <li key={index}>
                    <Link to={path} className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-tailor-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          
          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="font-playfair text-xl font-bold mb-6 text-tailor-gold fancy-border pb-4">Services</h3>
            <ul className="space-y-3">
              {["Custom Clothing", "Alterations", "Wedding Outfits", "Ethnic Wear", "Repair Services"].map((item, index) => (
                <li key={index}>
                  <Link to="/services" className="font-poppins text-gray-300 hover:text-tailor-gold transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-tailor-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="font-playfair text-xl font-bold mb-6 text-tailor-gold fancy-border pb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group hover:translate-x-1 transition-transform">
                <MapPin size={20} className="text-tailor-gold mt-1 mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <span className="font-poppins text-gray-300">123 Tailor Street, Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center group hover:translate-x-1 transition-transform">
                <Phone size={20} className="text-tailor-gold mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <span className="font-poppins text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center group hover:translate-x-1 transition-transform">
                <Mail size={20} className="text-tailor-gold mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <span className="font-poppins text-gray-300">info@vasugitailor.com</span>
              </li>
              <li className="flex items-start group hover:translate-x-1 transition-transform">
                <Clock size={20} className="text-tailor-gold mt-1 mr-3 flex-shrink-0 group-hover:animate-pulse" />
                <div>
                  <span className="font-poppins text-gray-300 block">Mon-Sat: 9:00 AM - 7:00 PM</span>
                  <span className="font-poppins text-gray-300 block">Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="font-poppins text-gray-400">
            &copy; {currentYear} Vasugi Tailor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
