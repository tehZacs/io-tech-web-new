import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero Section Ultra Elegante y Estilizado
 * - Diseño minimalista y sofisticado
 * - Tipografía refinada con espaciado perfecto
 * - Formas geométricas sutiles pero impactantes
 * - Animaciones suaves y profesionales
 */
export const KioTechHeroSection = () => {
  const heroImages = [
    { webp: '/assets/img/hero/001.webp', jpg: '/assets/img/hero/001.jpg', alt: 'Tecnología e Innovación' },
    { webp: '/assets/img/hero/002.webp', jpg: '/assets/img/hero/002.jpg', alt: 'Soluciones Empresariales' },
    { webp: '/assets/img/hero/003.webp', jpg: '/assets/img/hero/003.jpg', alt: 'Transformación Digital' },
    { webp: '/assets/img/hero/004.webp', jpg: '/assets/img/hero/004.jpg', alt: 'Infraestructura Tecnológica' },
    { webp: '/assets/img/hero/005.webp', jpg: '/assets/img/hero/005.jpg', alt: 'Desarrollo de Software' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const preloadImages = (index) => {
      const imagesToPreload = [
        heroImages[(index + 1) % heroImages.length],
        heroImages[(index + 2) % heroImages.length],
      ];

      imagesToPreload.forEach((image) => {
        const webpImg = new Image();
        webpImg.src = image.webp;
        const jpgImg = new Image();
        jpgImg.src = image.jpg;
      });
    };

    preloadImages(currentImageIndex);

    const interval = setInterval(() => {
      setIsTransitioning(true);

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * heroImages.length);
      } while (randomIndex === currentImageIndex);

      setNextImageIndex(randomIndex);
      preloadImages(randomIndex);

      setTimeout(() => {
        setCurrentImageIndex(randomIndex);
        setIsTransitioning(false);
      }, 1500);
    }, 8000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-20 bg-[#0a0a0f]">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; filter: blur(40px); }
          50% { opacity: 0.5; filter: blur(60px); }
        }
      `}</style>

      {/* Imagen de fondo con máscara elegante */}
      <div className="absolute inset-0 z-0">
        {/* Current Image */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={heroImages[currentImageIndex].webp} type="image/webp" />
          <img
            src={heroImages[currentImageIndex].jpg}
            alt={heroImages[currentImageIndex].alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out"
            style={{ opacity: isTransitioning ? 0 : 1 }}
            loading="eager"
            fetchpriority="high"
          />
        </picture>

        {/* Next Image */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={heroImages[nextImageIndex].webp} type="image/webp" />
          <img
            src={heroImages[nextImageIndex].jpg}
            alt={heroImages[nextImageIndex].alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out"
            style={{ opacity: isTransitioning ? 1 : 0 }}
            loading="lazy"
          />
        </picture>

        {/* Overlay oscuro sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f]/98 via-[#0f0f1a]/95 to-[#1a1a2e]/92"></div>
      </div>

      {/* Forma angular moderna - Estilo tarjeta inclinada grande (Azul IO-Tech) */}
      <div
        className="absolute top-[10%] right-[-5%] w-[600px] h-[500px] z-[1]"
        style={{
          clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.12) 0%, rgba(21, 101, 192, 0.08) 100%)',
          transform: 'rotate(-5deg)',
          animation: 'float-slow 20s ease-in-out infinite'
        }}
      >
        {/* Borde interno luminoso */}
        <div
          className="absolute inset-[2px]"
          style={{
            clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)',
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.04) 0%, rgba(21, 101, 192, 0.02) 100%)',
          }}
        ></div>
      </div>

      {/* Forma angular secundaria - Más pequeña (Cyan IO-Tech) */}
      <div
        className="absolute top-[35%] right-[15%] w-[350px] h-[300px] z-[1]"
        style={{
          clipPath: 'polygon(20% 0, 100% 5%, 95% 100%, 0 95%)',
          background: 'linear-gradient(225deg, rgba(0, 188, 212, 0.1) 0%, rgba(0, 172, 193, 0.06) 100%)',
          transform: 'rotate(8deg)',
          animation: 'float-slow 15s ease-in-out infinite reverse'
        }}
      ></div>

      {/* Forma angular terciaria - Acento (Azul oscuro IO-Tech) */}
      <div
        className="absolute bottom-[20%] right-[5%] w-[280px] h-[200px] z-[1]"
        style={{
          clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
          background: 'linear-gradient(180deg, rgba(13, 71, 161, 0.08) 0%, rgba(25, 118, 210, 0.04) 100%)',
          transform: 'rotate(-3deg)',
          animation: 'float-slow 18s ease-in-out infinite'
        }}
      ></div>

      {/* Brillo difuminado de fondo (Azul IO-Tech) */}
      <div
        className="absolute top-[20%] right-[20%] w-[500px] h-[500px] z-[0] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(25, 118, 210, 0.12) 0%, transparent 70%)',
          animation: 'glow-pulse 8s ease-in-out infinite',
          filter: 'blur(80px)'
        }}
      ></div>

      {/* Contenido principal */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Columna de contenido - 8 columnas */}
            <div className="lg:col-span-8">
              {/* Badge ultra minimalista */}
              <div className="inline-flex items-center gap-3 mb-8 group">
                <div className="flex items-center gap-3 px-5 py-2 bg-white/[0.03] backdrop-blur-xl rounded-full border border-white/[0.08] hover:border-accent-400/30 transition-all duration-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400"></span>
                  </span>
                  <span className="text-sm font-medium tracking-wide text-gray-300/90">
                    Innovación Tecnológica
                  </span>
                </div>
              </div>

              {/* Main Heading - Tipografía ultra refinada */}
              <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 leading-[1.1] tracking-tight">
                <span className="block text-white/95 mb-2">
                  Transformación
                </span>
                <span className="block relative inline-block">
                  <span className="relative z-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-300 via-brand-300 to-accent-200">
                    Digital Premium
                  </span>
                  {/* Underline sutil y elegante */}
                  <span
                    className="absolute -bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-brand-500/0 via-brand-500/60 to-brand-500/0"
                    style={{
                      boxShadow: '0 0 20px rgba(25, 118, 210, 0.4)'
                    }}
                  ></span>
                </span>
              </h1>

              {/* Subheading elegante */}
              <p className="text-xl md:text-2xl text-gray-300/80 mb-12 leading-relaxed font-light max-w-2xl">
                Soluciones tecnológicas de vanguardia diseñadas para empresas
                que lideran el futuro.
              </p>

              {/* CTA Buttons - Diseño ultra refinado */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-16">
                <Link
                  to="/contacto"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-lg font-medium text-base overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
                >
                  <span className="relative z-10">Iniciar Proyecto</span>
                  <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  {/* Shimmer effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 2s infinite'
                    }}
                  ></div>
                </Link>

                <Link
                  to="/servicios"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.03] backdrop-blur-xl text-white rounded-lg font-medium text-base border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-500"
                >
                  <span>Explorar Servicios</span>
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Stats - Diseño minimalista y elegante */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/[0.06]">
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-light text-white/95 mb-2 tracking-tight">
                    15<span className="text-accent-400">+</span>
                  </div>
                  <div className="text-sm text-gray-400/80 font-light tracking-wide">Años de Excelencia</div>
                </div>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-light text-white/95 mb-2 tracking-tight">
                    500<span className="text-accent-400">+</span>
                  </div>
                  <div className="text-sm text-gray-400/80 font-light tracking-wide">Proyectos Exitosos</div>
                </div>
                <div className="group">
                  <div className="text-4xl lg:text-5xl font-light text-white/95 mb-2 tracking-tight">
                    98<span className="text-accent-400">%</span>
                  </div>
                  <div className="text-sm text-gray-400/80 font-light tracking-wide">Satisfacción</div>
                </div>
              </div>
            </div>

            {/* Columna decorativa - 4 columnas */}
            <div className="hidden lg:block lg:col-span-4 relative">
              {/* Elemento decorativo elegante */}
              <div className="relative h-[500px]">
                {/* Círculo decorativo con borde */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/[0.05]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/5 to-accent-500/5 backdrop-blur-sm"></div>
                </div>

                {/* Círculo interno */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-white/[0.08]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/10 to-accent-500/10"></div>
                </div>

                {/* Punto central luminoso */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-400" style={{
                  boxShadow: '0 0 40px rgba(0, 188, 212, 0.6), 0 0 80px rgba(0, 188, 212, 0.3)'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator elegante */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
