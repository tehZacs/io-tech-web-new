import { Card } from '../base/Card';
import { Link } from 'react-router-dom';

/**
 * Optimized Services Section
 * - Grid-based layout for performance
 * - Pure CSS hover effects
 * - Semantic HTML for SEO
 */
export const ServicesSection = () => {
  const services = [
    {
      id: 'infraestructura',
      link: '/servicios/infraestructura-nube',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Infraestructura y Nube',
      description: 'Centro de Datos empresarial con servicios gestionados, virtualización avanzada, almacenamiento de alto rendimiento y gestión híbrida multi-nube.',
      features: ['Centro de Datos', 'Cloud Computing', 'Virtualización', 'Almacenamiento'],
    },
    {
      id: 'desarrollo',
      link: '/servicios/desarrollo-software',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Desarrollo de Soluciones',
      description: 'Fábrica de software especializada en desarrollo a medida, modernización de aplicaciones legadas, integración de sistemas empresariales y automatización robótica.',
      features: ['Software a Medida', 'Modernización', 'Integración', 'RPA'],
    },
    {
      id: 'inteligencia',
      link: '/servicios/business-intelligence',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Inteligencia de Negocio y Data',
      description: 'Soluciones de gobierno de datos, arquitectura de información, BI y visualización avanzada, analítica predictiva, Machine Learning e inteligencia artificial aplicada.',
      features: ['Business Intelligence', 'Data Analytics', 'Machine Learning', 'AI'],
    },
    {
      id: 'experiencia',
      link: '/servicios/experiencia-digital',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Experiencia Digital',
      description: 'Transformación digital omnicanal con implementación de plataformas CRM, Contact Center inteligente, sistemas ERP y soluciones de gestión empresarial integrada.',
      features: ['CRM', 'ERP', 'Contact Center', 'Omnicanalidad'],
    },
    {
      id: 'ciberseguridad',
      link: '/servicios/ciberseguridad',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Ciberseguridad',
      description: 'Centro de Operaciones de Seguridad (SOC), gestión de vulnerabilidades, respuesta a incidentes, gestión de identidades (IAM), DevSecOps y cumplimiento normativo.',
      features: ['SOC', 'Pentesting', 'IAM', 'Compliance'],
    },
    {
      id: 'consultoria',
      link: '/servicios/consultoria',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Consultoría y Gobierno',
      description: 'Gobierno de TI, oficina de gestión de proyectos (PMO), consultoría estratégica tecnológica, gestión de cumplimiento normativo y diseño de arquitectura empresarial.',
      features: ['Gobierno TI', 'PMO', 'Arquitectura', 'Estrategia'],
    },
  ];

  return (
    <section
      id="servicios"
      className="py-20 lg:py-32 bg-gray-950 relative"
    >
      {/* Top glow line with breathing animation */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_20px_rgba(0,188,212,0.6)]">
        <style>{`
          @keyframes breathe {
            0%, 100% {
              opacity: 0.6;
              box-shadow: 0 0 20px rgba(0,188,212,0.6);
            }
            50% {
              opacity: 1;
              box-shadow: 0 0 40px rgba(0,188,212,1);
            }
          }
        `}</style>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style={{ animation: 'breathe 5s ease-in-out infinite' }}></div>
      </div>

      {/* Top central semicircle with gradient - mirrored and breathing */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-b-full bg-gradient-to-b from-cyan-400/20 to-transparent blur-xl" style={{ animation: 'breathe 5s ease-in-out infinite' }}></div>

      {/* Animated wave separator at top - mirrored vertically */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0] z-20" style={{ transform: 'scaleY(-1)' }}>
        <svg
          className="relative block w-full h-[50px] md:h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Cyan gradient for first wave */}
            <linearGradient id="wave1GradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#00BCD4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#26C6DA', stopOpacity: 1 }} />
            </linearGradient>

            {/* Blue primary gradient for second wave */}
            <linearGradient id="wave2GradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#1976D2', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#42A5F5', stopOpacity: 1 }} />
            </linearGradient>

            {/* Black gradient for third wave */}
            <linearGradient id="wave3GradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1a1a1a', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* First wave - Cyan - Different animation pattern with extreme variation */}
          <path
            d="M0,60 C200,0 400,115 600,60 C800,0 1000,115 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave1GradientTop)"
            opacity="0.15"
          >
            <animate
              attributeName="d"
              dur="9s"
              repeatCount="indefinite"
              values="
                M0,60 C200,0 400,115 600,60 C800,0 1000,115 1200,60 L1200,120 L0,120 Z;
                M0,25 C200,95 400,25 600,75 C800,95 1000,25 1200,75 L1200,120 L0,120 Z;
                M0,60 C200,0 400,115 600,60 C800,0 1000,115 1200,60 L1200,120 L0,120 Z
              "
            />
          </path>

          {/* Second wave - Blue Primary - Different animation pattern with extreme variation */}
          <path
            d="M0,70 C250,10 450,120 600,60 C750,5 950,110 1200,70 L1200,120 L0,120 Z"
            fill="url(#wave2GradientTop)"
            opacity="0.12"
          >
            <animate
              attributeName="d"
              dur="11s"
              repeatCount="indefinite"
              values="
                M0,70 C250,10 450,120 600,60 C750,5 950,110 1200,70 L1200,120 L0,120 Z;
                M0,15 C250,105 450,25 600,85 C750,105 950,35 1200,95 L1200,120 L0,120 Z;
                M0,70 C250,10 450,120 600,60 C750,5 950,110 1200,70 L1200,120 L0,120 Z
              "
            />
          </path>

          {/* Third wave - Black - Different animation pattern with extreme variation */}
          <path
            d="M0,85 C300,40 500,115 700,75 C900,30 1100,115 1200,95 L1200,120 L0,120 Z"
            fill="url(#wave3GradientTop)"
            opacity="0.2"
          >
            <animate
              attributeName="d"
              dur="13s"
              repeatCount="indefinite"
              values="
                M0,85 C300,40 500,115 700,75 C900,30 1100,115 1200,95 L1200,120 L0,120 Z;
                M0,45 C300,105 500,55 700,95 C900,105 1100,65 1200,105 L1200,120 L0,120 Z;
                M0,85 C300,40 500,115 700,75 C900,30 1100,115 1200,95 L1200,120 L0,120 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* Bottom light border with gradient to transparent and breathing animation */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style={{ animation: 'breathe 5s ease-in-out infinite' }}></div>
      </div>

      {/* Bottom central semicircle with gradient to transparent and breathing animation */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-t-full bg-gradient-to-t from-cyan-400/20 to-transparent blur-xl" style={{ animation: 'breathe 5s ease-in-out infinite' }}></div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(39,174,229,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(18,122,191,0.1),transparent_50%)]"></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-semibold mb-4 border border-cyan-500/30">
            Nuestros Servicios
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-display-lg mb-4 text-white">
            Portafolio Completo de Soluciones
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-balance">
            Soluciones tecnológicas integrales desde infraestructura hasta transformación digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.id} to={service.link} className="block group">
              <Card hover padding="lg" variant="protocol" className="h-full">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 group-hover:text-cyan-300 transition-all border border-cyan-500/30">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl mb-3 text-gray-50 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800/60 text-gray-200 text-sm rounded-full border border-gray-600/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold group-hover:text-cyan-300 group-hover:gap-3 transition-all">
                  <span>Ver más</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};




