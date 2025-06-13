import Navbar from './components/Navbar'
import PainPointsSection from './components/PainPointsSection'
import TargetAudienceSection from './components/TargetAudienceSection'
import CoreBenefitsSection from './components/CoreBenefitsSection'
import FeaturesSection from './components/FeaturesSection'
import ComingSoonSection from './components/ComingSoonSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MainLayout from './components/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div className='min-h-screen bg-white'>
        <Navbar />
        <HeroSection />
        <PainPointsSection />
        <TargetAudienceSection />
        <CoreBenefitsSection />
        <FeaturesSection />
        <ComingSoonSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
    </MainLayout>
  );
}

