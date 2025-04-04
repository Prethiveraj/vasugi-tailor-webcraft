
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Clock, User, Send, FileText } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon!",
      });
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Contact Header */}
      <div className="bg-tailor-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for appointments, inquiries, or to discuss your tailoring needs.
          </p>
        </div>
      </div>
      
      {/* Contact Info and Form */}
      <div className="py-16 bg-tailor-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-6">Get In Touch</h2>
              
              <div className="space-y-8">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin size={24} className="text-tailor-maroon mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-2">Our Location</h3>
                        <p className="font-poppins text-gray-600">
                          123 Tailor Street, Chennai, Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone size={24} className="text-tailor-maroon mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-2">Phone</h3>
                        <p className="font-poppins text-gray-600 mb-1">
                          <a href="tel:+919876543210" className="hover:text-tailor-maroon transition-colors">
                            +91 98765 43210
                          </a>
                        </p>
                        <p className="font-poppins text-gray-600">
                          <a href="tel:+919876543211" className="hover:text-tailor-maroon transition-colors">
                            +91 98765 43211
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail size={24} className="text-tailor-maroon mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-2">Email</h3>
                        <p className="font-poppins text-gray-600 mb-1">
                          <a href="mailto:info@vasugitailor.com" className="hover:text-tailor-maroon transition-colors">
                            info@vasugitailor.com
                          </a>
                        </p>
                        <p className="font-poppins text-gray-600">
                          <a href="mailto:appointments@vasugitailor.com" className="hover:text-tailor-maroon transition-colors">
                            appointments@vasugitailor.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock size={24} className="text-tailor-maroon mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-2">Business Hours</h3>
                        <div className="font-poppins text-gray-600">
                          <p className="mb-1">Monday - Friday: 9:00 AM - 7:00 PM</p>
                          <p className="mb-1">Saturday: 10:00 AM - 6:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-6">Send Us a Message</h2>
              
              <Card className="bg-white">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="font-poppins font-medium text-tailor-dark mb-1 block">
                        Your Name <span className="text-tailor-maroon">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="font-poppins font-medium text-tailor-dark mb-1 block">
                          Email <span className="text-tailor-maroon">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail size={18} className="text-gray-400" />
                          </div>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="font-poppins font-medium text-tailor-dark mb-1 block">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone size={18} className="text-gray-400" />
                          </div>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="font-poppins font-medium text-tailor-dark mb-1 block">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FileText size={18} className="text-gray-400" />
                        </div>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tailor-maroon focus:border-transparent"
                        >
                          <option value="">Select a Service</option>
                          <option value="custom">Custom Tailoring</option>
                          <option value="alterations">Alterations</option>
                          <option value="wedding">Wedding Outfits</option>
                          <option value="ethnic">Ethnic Wear</option>
                          <option value="repair">Repair Services</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="font-poppins font-medium text-tailor-dark mb-1 block">
                        Your Message <span className="text-tailor-maroon">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[150px]"
                        placeholder="Tell us more about your requirements..."
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-tailor-maroon hover:bg-tailor-dark text-white py-6"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <Send size={18} className="mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Visit Our Shop</h2>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in the heart of Chennai. Come visit us for a consultation.
            </p>
          </div>
          
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            {/* Map Placeholder - Replace with actual map embed code */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="font-poppins text-gray-600">Map goes here - Replace with actual Google Maps embed</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Appointment CTA */}
      <div className="py-16 bg-tailor-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Need a Quick Appointment?</h2>
          <p className="font-poppins text-gray-700 max-w-2xl mx-auto mb-8">
            Call us directly for immediate appointments or questions about our services.
          </p>
          <a href="tel:+919876543210">
            <Button className="bg-tailor-maroon hover:bg-tailor-dark text-white px-8 py-6 text-lg">
              <Phone size={20} className="mr-2" />
              Call Now: +91 98765 43210
            </Button>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
