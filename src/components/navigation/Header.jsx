import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Improved Header Component
 * - Better contrast and visibility
 * - Mega menu for services
 * - Mobile-friendly navigation
 * - Fixed on scroll with transition
 * - Transparent at top, solid white on scroll
 */
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      name: 'Infraestructura y Nube',
      href: '/servicios/infraestructura-nube',
      description: 'Centros de datos on-premise, nube híbrida y disaster recovery',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      name: 'Desarrollo de Software',
      href: '/servicios/desarrollo-software',
      description: 'Soluciones a medida y modernización de aplicaciones',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: 'Inteligencia de Negocio',
      href: '/servicios/business-intelligence',
      description: 'BI, Data Analytics y Machine Learning',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      name: 'Experiencia Digital',
      href: '/servicios/experiencia-digital',
      description: 'CRM, Contact Center y ERP',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Ciberseguridad',
      href: '/servicios/ciberseguridad',
      description: 'SOC, Pentesting y Gestión de Vulnerabilidades',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      name: 'Consultoría',
      href: '/servicios/consultoria',
      description: 'Gobierno de TI, PMO y Arquitectura Empresarial',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={isScrolled ? "/assets/img/logo-io-tech-color.svg" : "/assets/img/logo-io-tech-white.svg"}
              alt="IO-TECH"
              className="h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/')
                  ? isScrolled ? 'text-brand-600' : 'text-white'
                  : isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Inicio
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <Link
                to="/servicios"
                className={`font-medium transition-colors flex items-center gap-1 ${
                  location.pathname.startsWith('/servicios')
                    ? isScrolled ? 'text-brand-600' : 'text-white'
                    : isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform ${servicesMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Mega Menu - Centrado respecto a "Servicios" con más espacio */}
              {servicesMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 w-[600px]">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex gap-4 p-4 rounded-lg hover:bg-brand-50 transition-colors group"
                        >
                          <div className="text-brand-600 group-hover:text-brand-700">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-brand-700 mb-1">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-600">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link
                        to="/servicios"
                        className="text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-2"
                      >
                        Ver todos los servicios
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/nosotros"
              className={`font-medium transition-colors ${
                isActive('/nosotros')
                  ? isScrolled ? 'text-brand-600' : 'text-white'
                  : isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Nosotros
            </Link>

            <Link
              to="/contacto"
              className={`px-6 py-2.5 rounded-lg font-semibold transition-all shadow-sm hover:shadow-md ${
                isScrolled
                  ? 'bg-brand-600 text-white hover:bg-brand-700'
                  : 'bg-white text-brand-600 hover:bg-gray-50'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white/90 hover:text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="container py-4 space-y-2">
            <Link
              to="/"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-700 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-700 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="block px-8 py-2 rounded-lg text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <Link
              to="/nosotros"
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-brand-50 hover:text-brand-700 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className="block mx-4 px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
