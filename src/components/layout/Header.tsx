
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors">
              Home
            </Link>
            <Link to="/services" className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors">
              Services
            </Link>
            <Link to="/about" className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors">
              About
            </Link>
            <Link to="/gallery" className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Button className="bg-tailor-pink hover:bg-pink-600 text-white font-exo">
              <Phone size={18} className="mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-tailor-dark p-2 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/gallery" 
                className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact" 
                className="font-exo font-medium text-tailor-dark hover:text-tailor-pink transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-tailor-pink hover:bg-pink-600 text-white font-exo w-full">
                <Phone size={18} className="mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
