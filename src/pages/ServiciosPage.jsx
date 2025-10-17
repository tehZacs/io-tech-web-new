import { Link } from 'react-router-dom';
import { Card } from '../components/base/Card';

export const ServiciosPage = () => {
  const services = [
    {
      id: 'infraestructura-nube',
      title: 'Infraestructura y Nube',
      tagline: 'Centro de Datos y Soluciones Multi-cloud',
      description: 'Servicios gestionados de infraestructura on-premise, nube pública y modelos híbridos. Migración, administración, optimización y disaster recovery.',
      colorClasses: {
        iconBg: 'from-cyan-500/20 to-blue-500/20',
        iconHoverBg: 'group-hover:from-cyan-500/30 group-hover:to-blue-500/30',
        iconColor: 'text-cyan-400',
        iconHoverColor: 'group-hover:text-cyan-300',
        iconBorder: 'border-cyan-500/30',
        titleHover: 'group-hover:text-cyan-300',
        tagline: 'text-cyan-400',
        badgeBg: 'bg-cyan-500/10',
        badgeText: 'text-cyan-300',
        badgeBorder: 'border-cyan-500/30',
        ctaText: 'text-cyan-400',
        ctaHover: 'group-hover:text-cyan-300'
      },
      verticals: [
        'Almacenamiento y Respaldos',
        'Virtualización',
        'Sistemas Operativos',
        'Bases de Datos',
        'Contenedores y DevOps',
        'Redes y Seguridad',
        'Monitoreo',
        'DRP y BCP',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      id: 'desarrollo-software',
      title: 'Desarrollo de Software',
      tagline: 'Fábrica de Software y Modernización',
      description: 'Desarrollo de soluciones a medida, modernización de aplicaciones legadas, integración de sistemas empresariales y automatización robótica de procesos.',
      colorClasses: {
        iconBg: 'from-indigo-500/20 to-blue-600/20',
        iconHoverBg: 'group-hover:from-indigo-500/30 group-hover:to-blue-600/30',
        iconColor: 'text-indigo-400',
        iconHoverColor: 'group-hover:text-indigo-300',
        iconBorder: 'border-indigo-500/30',
        titleHover: 'group-hover:text-indigo-300',
        tagline: 'text-indigo-400',
        badgeBg: 'bg-indigo-500/10',
        badgeText: 'text-indigo-300',
        badgeBorder: 'border-indigo-500/30',
        ctaText: 'text-indigo-400',
        ctaHover: 'group-hover:text-indigo-300'
      },
      verticals: [
        'Software a Medida',
        'Modernización de Aplicaciones',
        'Integración de Sistemas',
        'DevOps y CI/CD',
        'RPA (Robotic Process Automation)',
        'Testing y QA',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'business-intelligence',
      title: 'Inteligencia de Negocio y Data',
      tagline: 'BI, Analytics y Machine Learning',
      description: 'Soluciones de gobierno de datos, arquitectura de información, business intelligence, analítica predictiva y machine learning aplicado.',
      colorClasses: {
        iconBg: 'from-blue-500/20 to-sky-500/20',
        iconHoverBg: 'group-hover:from-blue-500/30 group-hover:to-sky-500/30',
        iconColor: 'text-blue-400',
        iconHoverColor: 'group-hover:text-blue-300',
        iconBorder: 'border-blue-500/30',
        titleHover: 'group-hover:text-blue-300',
        tagline: 'text-blue-400',
        badgeBg: 'bg-blue-500/10',
        badgeText: 'text-blue-300',
        badgeBorder: 'border-blue-500/30',
        ctaText: 'text-blue-400',
        ctaHover: 'group-hover:text-blue-300'
      },
      verticals: [
        'Gobierno de Datos',
        'Arquitectura de Información',
        'BI y Visualización',
        'Analítica Predictiva',
        'Machine Learning',
        'Inteligencia Artificial',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'experiencia-digital',
      title: 'Experiencia Digital',
      tagline: 'CRM, Contact Center y ERP',
      description: 'Transformación digital omnicanal con implementación de plataformas CRM, Contact Center inteligente y sistemas ERP (SAP, Oracle, Odoo).',
      colorClasses: {
        iconBg: 'from-amber-500/20 to-yellow-500/20',
        iconHoverBg: 'group-hover:from-amber-500/30 group-hover:to-yellow-500/30',
        iconColor: 'text-amber-400',
        iconHoverColor: 'group-hover:text-amber-300',
        iconBorder: 'border-amber-500/30',
        titleHover: 'group-hover:text-amber-300',
        tagline: 'text-amber-400',
        badgeBg: 'bg-amber-500/10',
        badgeText: 'text-amber-300',
        badgeBorder: 'border-amber-500/30',
        ctaText: 'text-amber-400',
        ctaHover: 'group-hover:text-amber-300'
      },
      verticals: [
        'CRM y Marketing Automation',
        'Contact Center',
        'ERP (SAP, Oracle, Odoo)',
        'Sistemas de Gestión Inteligente',
        'Omnicanalidad',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'ciberseguridad',
      title: 'Ciberseguridad',
      tagline: 'SOC, Pentesting y Cumplimiento',
      description: 'Centro de Operaciones de Seguridad (SOC), gestión de vulnerabilidades, respuesta a incidentes, gestión de identidades y cumplimiento normativo.',
      colorClasses: {
        iconBg: 'from-emerald-500/20 to-green-500/20',
        iconHoverBg: 'group-hover:from-emerald-500/30 group-hover:to-green-500/30',
        iconColor: 'text-emerald-400',
        iconHoverColor: 'group-hover:text-emerald-300',
        iconBorder: 'border-emerald-500/30',
        titleHover: 'group-hover:text-emerald-300',
        tagline: 'text-emerald-400',
        badgeBg: 'bg-emerald-500/10',
        badgeText: 'text-emerald-300',
        badgeBorder: 'border-emerald-500/30',
        ctaText: 'text-emerald-400',
        ctaHover: 'group-hover:text-emerald-300'
      },
      verticals: [
        'SOC (Security Operations Center)',
        'Pentesting y Ethical Hacking',
        'Gestión de Vulnerabilidades',
        'IAM (Identity Access Management)',
        'DevSecOps',
        'Cumplimiento Normativo',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 'consultoria',
      title: 'Consultoría y Gobierno Corporativo',
      tagline: 'Gobierno de TI y PMO',
      description: 'Gobierno de TI, oficina de gestión de proyectos (PMO), consultoría estratégica tecnológica y diseño de arquitectura empresarial.',
      colorClasses: {
        iconBg: 'from-red-500/20 to-red-600/20',
        iconHoverBg: 'group-hover:from-red-500/30 group-hover:to-red-600/30',
        iconColor: 'text-red-400',
        iconHoverColor: 'group-hover:text-red-300',
        iconBorder: 'border-red-500/30',
        titleHover: 'group-hover:text-red-300',
        tagline: 'text-red-400',
        badgeBg: 'bg-red-500/10',
        badgeText: 'text-red-300',
        badgeBorder: 'border-red-500/30',
        ctaText: 'text-red-400',
        ctaHover: 'group-hover:text-red-300'
      },
      verticals: [
        'Gobierno de TI',
        'PMO (Project Management Office)',
        'Consultoría Estratégica',
        'Arquitectura Empresarial',
        'Gestión de Cumplimiento',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Background */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/img/services/services-001.jpg"
            alt="Infraestructura Tecnológica"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Animated overlay with rotating gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-brand-900/85 via-gray-900/88 to-brand-900/85 animate-gradient-slow"></div>
        </div>

        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">
                Inicio
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Servicios</span>
            </nav>

            {/* Main Heading */}
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight">
              Servicios Integrales de{' '}
              <span className="text-accent-300">Transformación Digital</span>
            </h1>

            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              Desde la modernización de plataformas legadas hasta la implementación de tecnologías emergentes de vanguardia,
              ofrecemos soluciones robustas, escalables y personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Protocol-style Cards */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link key={service.id} to={`/servicios/${service.id}`} className="block group">
                <Card variant="protocol" hover className="h-full">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.colorClasses.iconBg} rounded-xl flex items-center justify-center mb-6 ${service.colorClasses.iconColor} ${service.colorClasses.iconHoverBg} ${service.colorClasses.iconHoverColor} transition-all border ${service.colorClasses.iconBorder}`}>
                    {service.icon}
                  </div>

                  {/* Title and Tagline */}
                  <h2 className={`font-display font-bold text-2xl mb-2 text-white ${service.colorClasses.titleHover} transition-colors`}>
                    {service.title}
                  </h2>
                  <p className={`${service.colorClasses.tagline} font-semibold mb-4 text-sm uppercase tracking-wide`}>
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Verticals */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-xs text-gray-400 uppercase tracking-wide mb-3">
                      Verticales Principales
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.verticals.slice(0, 4).map((vertical, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 ${service.colorClasses.badgeBg} ${service.colorClasses.badgeText} text-xs rounded-full border ${service.colorClasses.badgeBorder} font-medium`}
                        >
                          {vertical}
                        </span>
                      ))}
                      {service.verticals.length > 4 && (
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700 font-medium">
                          +{service.verticals.length - 4} más
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className={`inline-flex items-center gap-2 ${service.colorClasses.ctaText} font-bold group-hover:gap-3 transition-all ${service.colorClasses.ctaHover}`}>
                    Ver detalles del servicio
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

      {/* CTA Section */}
      <section className="py-20 gradient-brand relative overflow-hidden">
        {/* Grid pattern with crosses at intersections */}
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
          <defs>
            {/* Layer 1: Grid pattern with light gray lines */}
            <pattern id="cta-grid-lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            </pattern>

            {/* Layer 2: Crosses on the same axes as grid lines - 16px total (±8) */}
            <pattern id="cta-grid-crosses" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Cross at (0,0) */}
              <line x1="-8" y1="0" x2="8" y2="0" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <line x1="0" y1="-8" x2="0" y2="8" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              {/* Cross at (80,0) */}
              <line x1="72" y1="0" x2="88" y2="0" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <line x1="80" y1="-8" x2="80" y2="8" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              {/* Cross at (0,80) */}
              <line x1="-8" y1="80" x2="8" y2="80" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <line x1="0" y1="72" x2="0" y2="88" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              {/* Cross at (80,80) */}
              <line x1="72" y1="80" x2="88" y2="80" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <line x1="80" y1="72" x2="80" y2="88" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid-lines)" />
          <rect width="100%" height="100%" fill="url(#cta-grid-crosses)" />
        </svg>

        <div className="container text-center relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl mb-6 text-white">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-white/90">
            Contáctanos para diseñar una solución a medida para tu organización
          </p>
          <Link
            to="/contacto?services=Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20Transformaci%C3%B3n%20Digital."
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-lg font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl hover:shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            Hablar con un experto
          </Link>
        </div>
      </section>
    </div>
  );
};
