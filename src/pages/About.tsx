
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Vasugi Raman",
      position: "Founder & Master Tailor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      description: "With over 35 years of experience, Vasugi is the visionary behind our tailoring shop, bringing traditional techniques and modern styles together."
    },
    {
      name: "Rajesh Kumar",
      position: "Senior Tailor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      description: "Rajesh specializes in men's formal wear and has been creating impeccable suits and shirts for more than 15 years."
    },
    {
      name: "Lakshmi Devi",
      position: "Wedding Attire Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      description: "Lakshmi's attention to detail and creativity make her our go-to expert for wedding and ceremonial attire."
    },
    {
      name: "Arjun Reddy",
      position: "Alterations Expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      description: "Arjun has a remarkable ability to transform and perfect existing garments with his alteration expertise."
    }
  ];

  // Milestones data
  const milestones = [
    { year: "1985", title: "Founded", description: "Vasugi Tailor was established in a small shop in Chennai." },
    { year: "1995", title: "Expansion", description: "Expanded services to include wedding attire specialization." },
    { year: "2005", title: "Award", description: "Received 'Best Tailoring Service' award from Chennai Business Association." },
    { year: "2015", title: "Modern Studio", description: "Moved to a larger, modern studio with increased capacity." },
    { year: "2020", title: "Digital Presence", description: "Launched online appointment booking and consultation services." }
  ];

  return (
    <Layout>
      {/* About Header */}
      <div className="bg-tailor-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">About Vasugi Tailor</h1>
          <p className="font-poppins text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the story behind our tailoring expertise and our commitment to craftsmanship and quality.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Replace with your actual image */}
            <div className="order-2 lg:order-1">
              <div 
                className="rounded-lg shadow-xl h-[500px] bg-center bg-cover"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80')" }}
              ></div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-tailor-maroon mb-6"></div>
              <p className="font-poppins text-gray-700 mb-6">
                Vasugi Tailor began as a small family business in 1985, founded by Vasugi Raman with a simple mission: to create perfectly fitted garments that make people feel confident and comfortable.
              </p>
              <p className="font-poppins text-gray-700 mb-6">
                Over the decades, we have grown from a modest shop to a respected name in tailoring, serving generations of customers who value quality craftsmanship and attention to detail.
              </p>
              <p className="font-poppins text-gray-700 mb-6">
                Today, while we embrace modern techniques and styles, we remain committed to the traditional values of personalized service and exceptional quality that have defined our business from the beginning.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-tailor-maroon mb-2">35+</div>
                  <div className="font-poppins text-gray-600">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-tailor-maroon mb-2">5000+</div>
                  <div className="font-poppins text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-playfair font-bold text-tailor-maroon mb-2">10+</div>
                  <div className="font-poppins text-gray-600">Expert Tailors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values Section */}
      <div className="py-16 bg-tailor-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Our Values</h2>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              At Vasugi Tailor, we are guided by core principles that ensure we deliver the best to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Star size={40} className="text-tailor-maroon" />, 
                title: "Quality", 
                description: "We use only premium materials and maintain the highest standards in our craftsmanship."
              },
              { 
                icon: <Check size={40} className="text-tailor-maroon" />, 
                title: "Precision", 
                description: "Every measurement and stitch is executed with meticulous attention to detail."
              },
              { 
                icon: <Users size={40} className="text-tailor-maroon" />, 
                title: "Customer Focus", 
                description: "We listen carefully to your needs and work collaboratively to exceed your expectations."
              }
            ].map((value, idx) => (
              <Card key={idx} className="border border-gray-200 shadow-sm">
                <CardContent className="pt-8 text-center">
                  <div className="mx-auto mb-4">{value.icon}</div>
                  <h3 className="font-playfair text-2xl font-bold text-tailor-dark mb-3">{value.title}</h3>
                  <p className="font-poppins text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Meet Our Team</h2>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              Our skilled team brings together decades of experience in tailoring and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-tailor-cream">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-1">{member.name}</h3>
                <p className="font-poppins text-tailor-maroon mb-3">{member.position}</p>
                <p className="font-poppins text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Milestones */}
      <div className="py-16 bg-tailor-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Our Journey</h2>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tailor-maroon"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'} md:justify-between`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-tailor-gold border-4 border-tailor-maroon z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="font-playfair text-2xl font-bold text-tailor-maroon mb-2">{milestone.year}</div>
                      <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-2">{milestone.title}</h3>
                      <p className="font-poppins text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Awards & Recognition */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-tailor-dark mb-4">Awards & Recognition</h2>
            <p className="font-poppins text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized throughout the years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2020", title: "Best Tailoring Service", organization: "Chennai Business Awards" },
              { year: "2018", title: "Excellence in Craftsmanship", organization: "Tailoring Guild of India" },
              { year: "2015", title: "Customer Satisfaction Award", organization: "Tamil Nadu Retail Association" }
            ].map((award, idx) => (
              <Card key={idx} className="border border-gray-200 shadow-sm">
                <CardContent className="pt-8 text-center">
                  <Award size={40} className="text-tailor-gold mx-auto mb-4" />
                  <div className="font-poppins text-tailor-maroon mb-2">{award.year}</div>
                  <h3 className="font-playfair text-xl font-bold text-tailor-dark mb-2">{award.title}</h3>
                  <p className="font-poppins text-gray-600">{award.organization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-tailor-maroon text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">Experience Our Craftsmanship</h2>
          <p className="font-poppins text-lg mb-8 max-w-2xl mx-auto">
            Visit our shop or schedule an appointment to experience the Vasugi Tailor difference.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-tailor-maroon hover:bg-tailor-cream hover:text-tailor-dark px-8 py-6 text-lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default About;
