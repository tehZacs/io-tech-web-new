import { KioTechHeroSection } from '../components/sections/KioTechHeroSection';
import { KioTechServicesSection } from '../components/sections/KioTechServicesSection';
import { KioTechCertificationsSection } from '../components/sections/KioTechCertificationsSection';
import { CTASection } from '../components/sections/CTASection';

/**
 * HomePage con diseño inspirado en kio.tech
 * - Fondos con formas angulares y geométricas
 * - Tarjetas con clip-path y diseños dinámicos
 * - UI/UX moderna y atractiva
 */
export const HomePageKioTech = () => {
  return (
    <div className="overflow-hidden">
      <KioTechHeroSection />
      <KioTechServicesSection />
      <KioTechCertificationsSection />
      <CTASection />
    </div>
  );
};
