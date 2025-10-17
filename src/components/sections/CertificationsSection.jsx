/**
 * Optimized Certifications Section
 * - Static content for fast rendering
 * - Grid-based responsive layout
 * - Pure CSS hover effects
 * - Tailwind Studio-inspired grid pattern background with interactive hover
 */
import { useRef, useState } from 'react';

export const CertificationsSection = () => {
  const svgRef = useRef(null);
  const currentBlock = useRef(undefined);
  const counter = useRef(0);
  const [hoveredBlocks, setHoveredBlocks] = useState([]);

  const handleMouseMove = (event) => {
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

    // Convertir coordenadas del mouse a coordenadas de grid
    x = x - rect.width / 2 - 32;
    x += Math.tan(32 / 160) * y;
    x = Math.floor(x / 96);
    y = Math.floor(y / 160);

    if (currentBlock.current?.[0] === x && currentBlock.current?.[1] === y) return;

    currentBlock.current = [x, y];

    setHoveredBlocks((blocks) => {
      const key = counter.current++;
      const block = [x, y, key];
      return [...blocks, block].filter(
        (b) => !(b[0] === x && b[1] === y && b[2] !== key)
      );
    });
  };

  const handleAnimationEnd = (key) => {
    setHoveredBlocks((blocks) => blocks.filter((b) => b[2] !== key));
  };

  const certifications = [
    { name: 'ISO 9001', description: 'Sistema de Gestión de Calidad', customIcon: '/assets/img/certs/iso9001.svg' },
    { name: 'ISO 15504', description: 'Evaluación de Procesos', customIcon: '/assets/img/certs/iso15504.svg' },
    { name: 'ISO 20001', description: 'Gestión de Servicios TI', customIcon: '/assets/img/certs/iso20001.svg' },
    { name: 'ISO 22301', description: 'Continuidad del Negocio', customIcon: '/assets/img/certs/iso22301.svg' },
    { name: 'ISO 27001', description: 'Seguridad de la Información', highlight: true, customIcon: '/assets/img/certs/iso27001.svg' },
    { name: 'ISO 37001', description: 'Anti-Soborno', customIcon: '/assets/img/certs/iso37001.svg' },
    { name: 'CMMI DEV/5', description: 'Madurez en Desarrollo', customIcon: '/assets/img/certs/cmmidev5-exp-2025.png' },
    { name: 'CMMI SVC/5', description: 'Madurez en Servicios', customIcon: '/assets/img/certs/cmmisvc5-exp-2025.png' },
  ];

  const recognitions = [
    { image: '/assets/img/certs/istqb-platinum.png', title: 'ISTQB Platinum Partner', description: 'Socio Platino en Testing de Software' },
    { image: '/assets/img/certs/nomil.png', title: 'Movilidad Laboral', description: 'Certificación en Gestión de Talento' },
    { image: '/assets/img/certs/BestPlaceToCode-logo.png', title: 'Best Place to Code', description: 'Reconocimiento en Cultura Organizacional' },
  ];

  return (
    <section id="certificaciones" className="pt-12 pb-20 lg:pt-16 lg:pb-32 relative overflow-hidden">
      {/* CSS Animations */}
      <style>{`
        @keyframes rotate-glow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes grid-shimmer {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes shine-sweep {
          0% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        @keyframes block-fade {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          20% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>

      {/* Background pattern - Tailwind Studio style */}
      <div className="absolute inset-0 bg-white">
        <svg
          ref={svgRef}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          onMouseMove={handleMouseMove}
          style={{
            maskImage: 'linear-gradient(to bottom left, white 65%, transparent 75%)',
            WebkitMaskImage: 'linear-gradient(to bottom left, white 65%, transparent 75%)'
          }}
        >
          <defs>
            <pattern
              id="grid-pattern-cert"
              width="96"
              height="480"
              x="50%"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"
                fill="none"
                stroke="#9ca3af"
                strokeOpacity="0.25"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern-cert)" />
          <svg x="50%" y="0" strokeWidth="0" className="overflow-visible">
            {/* Bloques usando la fórmula: translate((-32 * y + 96 * x) (160 * y)) */}
            <path
              transform="translate(64 160)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              fill="#f9fafb"
              stroke="#9ca3af"
              strokeOpacity="0.2"
            />
            <path
              transform="translate(128 320)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              fill="#f9fafb"
              stroke="#9ca3af"
              strokeOpacity="0.2"
            />
            <path
              transform="translate(288 480)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              fill="#f9fafb"
              stroke="#9ca3af"
              strokeOpacity="0.2"
            />
            <path
              transform="translate(512 320)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              fill="#f9fafb"
              stroke="#9ca3af"
              strokeOpacity="0.2"
            />
            <path
              transform="translate(640 640)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              fill="#f9fafb"
              stroke="#9ca3af"
              strokeOpacity="0.2"
            />
            <path
              transform="translate(320 800)"
              d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              fill="#f9fafb"
              stroke="#9ca3af"
              strokeOpacity="0.2"
            />

            {/* Bloques dinámicos que aparecen en hover */}
            {hoveredBlocks.map(([x, y, key]) => (
              <path
                key={key}
                transform={`translate(${-32 * y + 96 * x} ${160 * y})`}
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
                fill="#d1d5db"
                stroke="#9ca3af"
                strokeOpacity="0.5"
                style={{
                  animation: 'block-fade 1s ease-out forwards'
                }}
                onAnimationEnd={() => handleAnimationEnd(key)}
              />
            ))}
          </svg>
        </svg>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full text-cyan-600 text-sm font-semibold mb-4 border border-cyan-500/30">
            Calidad Certificada
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-display-lg mb-4 text-gray-900">
            Certificaciones y Reconocimientos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Respaldados por las certificaciones internacionales más exigentes de la industria
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group relative text-center transition-all duration-500 hover:-translate-y-1"
            >
              {/* Borde luminoso delgado con degradado dorado variado */}
              <div className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent"></div>

              {/* White card content */}
              <div className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-500">
                {/* Content */}
                <div className="relative">
                {cert.customIcon ? (
                  <div className="h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={cert.customIcon}
                      alt={cert.name}
                      className="h-20 w-auto object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    cert.highlight ? 'bg-brand-100' : 'bg-gray-100'
                  }`}>
                    <svg
                      className={`w-8 h-8 ${cert.highlight ? 'text-brand-600' : 'text-gray-600'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {cert.highlight ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                  </div>
                )}
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recognitions.map((recognition) => (
            <div
              key={recognition.title}
              className="bg-white rounded-xl p-8 text-center border-2 border-brand-100 hover:border-brand-300 transition-colors"
            >
              <div className="h-20 flex items-center justify-center mx-auto mb-4">
                <img src={recognition.image} alt={recognition.title} className="h-16 w-auto object-contain" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">{recognition.title}</h3>
              <p className="text-sm text-gray-600">{recognition.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
