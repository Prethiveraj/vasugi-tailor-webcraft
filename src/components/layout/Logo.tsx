
import { Shirt } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="font-playfair text-2xl md:text-3xl font-bold text-tailor-maroon">Vasugi</span>
      <Shirt size={24} className="mx-2 text-tailor-maroon" />
      <span className="font-playfair text-2xl md:text-3xl font-bold text-tailor-maroon">Tailor</span>
    </Link>
  );
};

export default Logo;
