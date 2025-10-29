/**
 * Certifications Section Ultra Sofisticada y Elegante
 * - Diseño minimalista premium
 * - Glassmorphism refinado
 * - Animaciones sutiles y fluidas
 * - Tipografía y espaciado perfectos
 */
export const KioTechCertificationsSection = () => {
  const certifications = [
    { name: 'ISO 9001', description: 'Gestión de Calidad', customIcon: '/assets/img/certs/iso9001.svg' },
    { name: 'ISO 15504', description: 'Evaluación de Procesos', customIcon: '/assets/img/certs/iso15504.svg' },
    { name: 'ISO 20001', description: 'Servicios TI', customIcon: '/assets/img/certs/iso20001.svg' },
    { name: 'ISO 22301', description: 'Continuidad de Negocio', customIcon: '/assets/img/certs/iso22301.svg' },
    { name: 'ISO 27001', description: 'Seguridad Información', customIcon: '/assets/img/certs/iso27001.svg', highlight: true },
    { name: 'ISO 37001', description: 'Anti-Soborno', customIcon: '/assets/img/certs/iso37001.svg' },
    { name: 'CMMI DEV/5', description: 'Madurez Desarrollo', customIcon: '/assets/img/certs/cmmidev5-exp-2025.png' },
    { name: 'CMMI SVC/5', description: 'Madurez Servicios', customIcon: '/assets/img/certs/cmmisvc5-exp-2025.png' },
  ];

  const recognitions = [
    {
      image: '/assets/img/certs/istqb-platinum.png',
      title: 'ISTQB Platinum',
      description: 'Socio Platino en Testing'
    },
    {
      image: '/assets/img/certs/nomil.png',
      title: 'Movilidad Laboral',
      description: 'Gestión de Talento'
    },
    {
      image: '/assets/img/certs/BestPlaceToCode-logo.png',
      title: 'Best Place to Code',
      description: 'Cultura Organizacional'
    },
  ];

  return (
    <section id="certificaciones" className="pt-24 pb-24 lg:pt-32 lg:pb-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Forma decorativa angular superior - ultra sutil (IO-Tech Blue) */}
      <div
        className="absolute top-0 left-0 w-[45%] h-[400px] z-0 opacity-30"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 20% 100%, 0 100%)',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.04) 0%, rgba(21, 101, 192, 0.02) 100%)',
        }}
      ></div>

      {/* Forma decorativa angular inferior (IO-Tech Cyan) */}
      <div
        className="absolute bottom-0 right-0 w-[55%] h-[500px] z-0 opacity-30"
        style={{
          clipPath: 'polygon(80% 0, 100% 0, 100% 100%, 0 100%)',
          background: 'linear-gradient(225deg, rgba(0, 188, 212, 0.04) 0%, rgba(0, 172, 193, 0.02) 100%)',
        }}
      ></div>

      {/* Grid pattern ultra sutil */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-50/80 backdrop-blur-sm rounded-full border border-brand-100/50 text-brand-700 text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Calidad Certificada</span>
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900 tracking-tight">
            Certificaciones{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">
              Internacionales
            </span>
          </h2>
          <p className="text-xl text-gray-600/90 font-light leading-relaxed">
            Respaldados por los estándares más exigentes de la industria tecnológica global
          </p>
        </div>

        {/* Certifications Grid - Diseño elegante y espacioso */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="group relative"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Tarjeta con glassmorphism sutil */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/80 hover:border-brand-200/50 overflow-hidden group-hover:-translate-y-1">
                {/* Brillo sutil en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 group-hover:from-brand-50/50 group-hover:to-accent-50/30 transition-all duration-500"></div>

                {/* Contenido */}
                <div className="relative z-10">
                  {/* Icono */}
                  {cert.customIcon ? (
                    <div className="h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={cert.customIcon}
                        alt={cert.name}
                        className="h-16 w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_2px_8px_rgba(168,85,247,0.15)]"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-purple-50 group-hover:bg-purple-100 transition-colors duration-500">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}

                  {/* Título */}
                  <h3 className="font-semibold text-gray-900 mb-1 text-center text-sm group-hover:text-brand-700 transition-colors duration-500">
                    {cert.name}
                  </h3>

                  {/* Descripción */}
                  <p className="text-xs text-gray-500 text-center font-light">
                    {cert.description}
                  </p>
                </div>

                {/* Badge destacado para certificación principal */}
                {cert.highlight && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Cards - Diseño premium horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {recognitions.map((recognition, index) => (
            <div
              key={recognition.title}
              className="group relative"
              style={{
                animation: `float-subtle ${6 + index}s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {/* Tarjeta con glassmorphism */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/80 hover:border-brand-200/50 overflow-hidden">
                {/* Brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 group-hover:from-brand-50/40 group-hover:to-accent-50/30 transition-all duration-500"></div>

                {/* Contenido */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="h-16 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={recognition.image}
                      alt={recognition.title}
                      className="h-14 w-auto object-contain drop-shadow-sm"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base group-hover:text-brand-700 transition-colors duration-500">
                    {recognition.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    {recognition.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats elegante */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-6 px-10 py-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100/80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">
                  11 Certificaciones
                </div>
                <div className="text-sm text-gray-500 font-light">Estándares Internacionales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
