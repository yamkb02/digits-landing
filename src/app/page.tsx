import Navbar from './components/Navbar'
import PainPointsSection from './components/PainPointsSection'
import TargetAudienceSection from './components/TargetAudienceSection'
import CoreBenefitsSection from './components/CoreBenefitsSection'
import FeaturesSection from './components/FeaturesSection'
import ComingSoonSection from './components/ComingSoonSection'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import FloatingActionButton from '@/components/FloatingActionButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <TargetAudienceSection />
      <CoreBenefitsSection />
      <FeaturesSection />
      <ComingSoonSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingActionButton />
    </div>
  )
}
