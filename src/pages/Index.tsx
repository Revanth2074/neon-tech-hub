
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import EventsSection from "@/components/EventsSection";
import ReferralBanner from "@/components/ReferralBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <EventsSection />
      <ReferralBanner />
      <Footer />
    </div>
  );
};

export default Index;
