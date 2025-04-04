
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-tailor-light">
      <div className="text-center p-8">
        <h1 className="font-playfair text-8xl font-bold text-tailor-maroon mb-4">404</h1>
        <div className="w-16 h-1 bg-tailor-gold mx-auto mb-6"></div>
        <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Page Not Found</h2>
        <p className="font-poppins text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white">
            <Home size={18} className="mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
