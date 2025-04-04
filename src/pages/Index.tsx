
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedServices from "@/components/home/FeaturedServices";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="reveal-on-scroll" data-delay="200">
        <FeaturedServices />
      </div>
      <div className="reveal-on-scroll" data-delay="400">
        <AboutSection />
      </div>
      <div className="reveal-on-scroll" data-delay="600">
        <Testimonials />
      </div>
      <div className="reveal-on-scroll" data-delay="800">
        <ContactCTA />
      </div>
    </Layout>
  );
};

export default Index;
