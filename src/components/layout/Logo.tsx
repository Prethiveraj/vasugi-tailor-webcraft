
import { Shirt } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="font-exo text-2xl md:text-3xl font-bold text-tailor-pink">Vasugi</span>
      <Shirt size={24} className="mx-2 text-tailor-pink" />
      <span className="font-exo text-2xl md:text-3xl font-bold text-tailor-pink">Tailor</span>
    </Link>
  );
};

export default Logo;
