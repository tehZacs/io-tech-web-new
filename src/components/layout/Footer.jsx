import { Link } from 'react-router-dom';

/**
 * Optimized Footer Component
 * - Static content only
 * - No JavaScript interactions
 * - Pure CSS hover effects
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/assets/img/logo-io-tech-white.svg"
              alt="IO-TECH"
              className="h-10 w-auto"
            />
            <p className="text-gray-400 text-sm">
              Soluciones tecnológicas integrales para impulsar la transformación digital de su organización.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/io-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/iotech_mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios/infraestructura-nube" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Infraestructura y Nube
                </Link>
              </li>
              <li>
                <Link to="/servicios/desarrollo-software" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Desarrollo de Software
                </Link>
              </li>
              <li>
                <Link to="/servicios/business-intelligence" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Business Intelligence
                </Link>
              </li>
              <li>
                <Link to="/servicios/experiencia-digital" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Experiencia Digital
                </Link>
              </li>
              <li>
                <Link to="/servicios/ciberseguridad" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Ciberseguridad
                </Link>
              </li>
              <li>
                <Link to="/servicios/consultoria" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Consultoría
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+525512345678" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-brand-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contacto@io-tech.com.mx" className="text-gray-400 hover:text-white transition-colors text-sm">
                  contacto@io-tech.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} IO-TECH. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
