import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import PortfolioSection from './PortfolioSection';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
