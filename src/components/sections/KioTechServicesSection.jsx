import { Link } from 'react-router-dom';

/**
 * Services Section Ultra Premium y Elegante
 * - Diseño minimalista con máximo impacto visual
 * - Tarjetas con glassmorphism refinado
 * - Tipografía y espaciado perfectos
 * - Hover effects sutiles y sofisticados
 */
export const KioTechServicesSection = () => {
  const services = [
    {
      id: 'infraestructura',
      link: '/servicios/infraestructura-nube',
      number: '01',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Infraestructura y Nube',
      description: 'Centro de Datos empresarial con servicios gestionados, virtualización avanzada y gestión híbrida multi-nube de última generación.',
      gradient: 'from-blue-500/80 to-cyan-500/80',
      glowColor: 'rgba(59, 130, 246, 0.3)',
    },
    {
      id: 'desarrollo',
      link: '/servicios/desarrollo-software',
      number: '02',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Desarrollo de Soluciones',
      description: 'Fábrica de software especializada en desarrollo a medida, modernización de aplicaciones y automatización robótica de procesos.',
      gradient: 'from-purple-500/80 to-fuchsia-500/80',
      glowColor: 'rgba(168, 85, 247, 0.3)',
    },
    {
      id: 'inteligencia',
      link: '/servicios/business-intelligence',
      number: '03',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Inteligencia de Negocio',
      description: 'Soluciones de BI, visualización avanzada, analítica predictiva, Machine Learning e inteligencia artificial aplicada a negocio.',
      gradient: 'from-emerald-500/80 to-teal-500/80',
      glowColor: 'rgba(16, 185, 129, 0.3)',
    },
    {
      id: 'experiencia',
      link: '/servicios/experiencia-digital',
      number: '04',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Experiencia Digital',
      description: 'Transformación digital omnicanal con CRM, Contact Center inteligente, ERP y soluciones de gestión empresarial integrada.',
      gradient: 'from-orange-500/80 to-amber-500/80',
      glowColor: 'rgba(249, 115, 22, 0.3)',
    },
    {
      id: 'ciberseguridad',
      link: '/servicios/ciberseguridad',
      number: '05',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Ciberseguridad',
      description: 'SOC, gestión de vulnerabilidades, respuesta a incidentes, IAM, DevSecOps y cumplimiento normativo internacional.',
      gradient: 'from-red-500/80 to-rose-500/80',
      glowColor: 'rgba(239, 68, 68, 0.3)',
    },
    {
      id: 'consultoria',
      link: '/servicios/consultoria',
      number: '06',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Consultoría y Gobierno',
      description: 'Gobierno de TI, PMO, consultoría estratégica tecnológica, gestión de cumplimiento y diseño de arquitectura empresarial.',
      gradient: 'from-indigo-500/80 to-violet-500/80',
      glowColor: 'rgba(99, 102, 241, 0.3)',
    },
  ];

  return (
    <section id="servicios" className="py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] relative overflow-hidden">
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Forma decorativa angular superior (IO-Tech Blue) */}
      <div
        className="absolute top-0 left-0 w-[40%] h-[500px] z-0 opacity-40"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 30% 100%, 0 100%)',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.06) 0%, rgba(21, 101, 192, 0.03) 100%)',
        }}
      ></div>

      {/* Forma decorativa angular inferior (IO-Tech Cyan) */}
      <div
        className="absolute bottom-0 right-0 w-[50%] h-[600px] z-0 opacity-40"
        style={{
          clipPath: 'polygon(70% 0, 100% 0, 100% 100%, 0 100%)',
          background: 'linear-gradient(225deg, rgba(0, 188, 212, 0.06) 0%, rgba(0, 172, 193, 0.03) 100%)',
        }}
      ></div>

      {/* Grid sutil de fondo */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      ></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/[0.03] backdrop-blur-xl rounded-full border border-white/[0.08] text-gray-300 text-sm font-medium mb-8">
            Servicios Premium
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl mb-6 text-white/95 tracking-tight">
            Portafolio de{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-brand-300">
              Soluciones
            </span>
          </h2>
          <p className="text-xl text-gray-400/80 font-light leading-relaxed">
            Soluciones tecnológicas integrales diseñadas para impulsar la transformación digital de su organización
          </p>
        </div>

        {/* Services Grid - Bento box style elegante */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={service.id}
              to={service.link}
              className="group block relative"
              style={{
                animation: `float-gentle ${8 + index}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Tarjeta principal con glassmorphism */}
              <div className="relative h-full bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-2xl group-hover:-translate-y-2">
                {/* Brillo de fondo en hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl -z-10"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${service.glowColor}, transparent 70%)`,
                  }}
                ></div>

                {/* Gradiente sutil de acento */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${service.gradient.replace('from-', 'var(--tw-gradient-from, ').replace('to-', 'var(--tw-gradient-to, ')})`,
                  }}
                ></div>

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Header con número e ícono */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-light text-white/[0.03] group-hover:text-white/[0.06] transition-colors duration-700">
                      {service.number}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center text-gray-300 group-hover:bg-white/[0.08] group-hover:border-white/[0.15] group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="font-display font-medium text-2xl mb-4 text-white/90 group-hover:text-white transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>

                  {/* Línea decorativa */}
                  <div className="w-12 h-[1px] bg-gradient-to-r from-white/20 to-transparent mb-4 group-hover:w-24 transition-all duration-500"></div>

                  {/* Descripción */}
                  <p className="text-gray-400/90 text-base leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Link con flecha */}
                  <div className="flex items-center gap-2 text-gray-300 font-medium text-sm group-hover:text-white group-hover:gap-3 transition-all duration-500">
                    <span>Conocer más</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Esquina decorativa sutil */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                  <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-white/30 rounded-tl-full"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Decoración final */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.02] backdrop-blur-xl rounded-full border border-white/[0.06]">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 border-2 border-[#0a0a0f]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 border-2 border-[#0a0a0f]"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-700 to-accent-700 border-2 border-[#0a0a0f]"></div>
            </div>
            <span className="text-sm text-gray-400 font-light">
              Más de 500 proyectos exitosos entregados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
