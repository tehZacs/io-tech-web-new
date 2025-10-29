import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/navigation/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/utils/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { HomePageKioTech } from './pages/HomePage.kiotech';
import { ServiciosPage } from './pages/ServiciosPage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ContactoPage } from './pages/ContactoPage';
import { InfraestructuraNubePage } from './pages/services/InfraestructuraNubePage';
import { DesarrolloSoftwarePage } from './pages/services/DesarrolloSoftwarePage';
import { BusinessIntelligencePage } from './pages/services/BusinessIntelligencePage';
import { ExperienciaDigitalPage } from './pages/services/ExperienciaDigitalPage';
import { CiberseguridadPage } from './pages/services/CiberseguridadPage';
import { ConsultoriaPage } from './pages/services/ConsultoriaPage';
import { AvisoPrivacidadPage } from './pages/AvisoPrivacidadPage';

/**
 * Main App Component with React Router
 * - Multi-page architecture
 * - Better navigation and UX
 * - Individual service pages for all 6 services
 */
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kiotech" element={<HomePageKioTech />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/servicios/infraestructura-nube" element={<InfraestructuraNubePage />} />
            <Route path="/servicios/desarrollo-software" element={<DesarrolloSoftwarePage />} />
            <Route path="/servicios/business-intelligence" element={<BusinessIntelligencePage />} />
            <Route path="/servicios/experiencia-digital" element={<ExperienciaDigitalPage />} />
            <Route path="/servicios/ciberseguridad" element={<CiberseguridadPage />} />
            <Route path="/servicios/consultoria" element={<ConsultoriaPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/aviso-privacidad" element={<AvisoPrivacidadPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
