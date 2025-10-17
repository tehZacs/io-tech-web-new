import { ImprovedHeroSection } from '../components/sections/ImprovedHeroSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { CertificationsSection } from '../components/sections/CertificationsSection';
import { CTASection } from '../components/sections/CTASection';

export const HomePage = () => {
  return (
    <div>
      <ImprovedHeroSection />
      <ServicesSection />
      <CertificationsSection />
      <CTASection />
    </div>
  );
};
