
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Scissors } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent backdrop-blur-sm bg-white/70 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <Scissors size={24} className="text-tailor-maroon mr-2 transition-transform group-hover:rotate-45" />
            <span className="font-playfair text-2xl md:text-3xl font-bold text-tailor-maroon">
              Vasugi <span className="text-tailor-dark">Tailor</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Services", "About", "Gallery", "Contact"].map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              
              return (
                <Link 
                  key={item}
                  to={path} 
                  className={`font-poppins font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-tailor-maroon after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive 
                      ? 'text-tailor-maroon after:scale-x-100' 
                      : 'text-tailor-dark hover:text-tailor-maroon transition-colors'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                <Phone size={18} className="mr-2" />
                Book Appointment
              </Button>
            </Link>
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
        <div className="md:hidden bg-white border-t border-gray-100 py-4 animate-fade-in shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {["Home", "Services", "About", "Gallery", "Contact"].map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = location.pathname === path;
                
                return (
                  <Link 
                    key={item}
                    to={path} 
                    className={`font-poppins font-medium py-2 ${
                      isActive 
                        ? 'text-tailor-maroon' 
                        : 'text-tailor-dark hover:text-tailor-maroon transition-colors'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                );
              })}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white w-full shadow-md">
                  <Phone size={18} className="mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
