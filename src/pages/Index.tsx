
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
      <FeaturedServices />
      <AboutSection />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
