import CallToActionSection from "./_components/CallToActionSection";
import DiscoverSection from "./_components/DiscoverSection";
import FeaturesSection from "./_components/FeaturesSection";
import FooterSection from "./_components/FooterSection";
import HeroSection from "./_components/HeroSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <DiscoverSection />
      <CallToActionSection />
      <FooterSection/>
    </div>
  );
};

export default LandingPage;
