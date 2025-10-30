import { useState, useEffect } from 'react';
import { Button } from '../base/Button';

/**
 * Optimized Hero Section
 * - Modern gradient background
 * - Animated image slideshow with crossfade
 * - Lazy loading for performance
 * - Random image transitions
 */
export const HeroSection = () => {
  const heroImages = [
    '/assets/img/hero/001.jpg',
    '/assets/img/hero/002.jpg',
    '/assets/img/hero/003.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Preload all images for smooth transitions
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Change image every 6 seconds
    const interval = setInterval(() => {
      setIsTransitioning(true);

      // Get random next image (different from current)
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * heroImages.length);
      } while (randomIndex === currentImageIndex);

      setNextImageIndex(randomIndex);

      // After fade animation completes, update current image
      setTimeout(() => {
        setCurrentImageIndex(randomIndex);
        setIsTransitioning(false);
      }, 1500); // Match this with CSS transition duration
    }, 6000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section className="relative pt-20 pb-20 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        {/* Current Image */}
        <img
          src={heroImages[currentImageIndex]}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out"
          style={{ opacity: isTransitioning ? 0 : 1 }}
          loading="lazy"
        />

        {/* Next Image (for crossfade effect) */}
        <img
          src={heroImages[nextImageIndex]}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out"
          style={{ opacity: isTransitioning ? 1 : 0 }}
          loading="lazy"
        />

        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/70 to-blue-800/60"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>
            Innovación y Tecnología de Vanguardia
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-display-xl mb-6 text-white">
            Soluciones tecnológicas integrales para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              empresas que buscan innovar
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
            Desde modernización de infraestructura hasta implementación de tecnologías emergentes.
            Infraestructura robusta, desarrollo de software y consultoría especializada para impulsar su crecimiento.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#contacto" className="bg-white text-brand-700 hover:bg-gray-100 shadow-xl">
              Solicitar Consultoría
            </Button>
            <Button variant="outline" size="lg" href="#servicios" className="border-white text-white hover:bg-white/10 shadow-xl">
              Explorar Servicios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold mb-1">+200</div>
              <div className="text-sm text-white/80">Especialistas Certificados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">+400</div>
              <div className="text-sm text-white/80">Certificaciones Técnicas</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99.99%</div>
              <div className="text-sm text-white/80">Disponibilidad</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Soporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated wave separator */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#00BCD4', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#1976D2', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0D47A1', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Animated wave path */}
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z;
                M0,50 C150,0 350,100 600,50 C850,0 1050,100 1200,50 L1200,120 L0,120 Z;
                M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z
              "
            />
          </path>

          {/* Second layer for depth */}
          <path
            d="M0,20 C200,80 400,20 600,60 C800,100 1000,40 1200,80 L1200,120 L0,120 Z"
            fill="white"
            opacity="0.5"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,20 C200,80 400,20 600,60 C800,100 1000,40 1200,80 L1200,120 L0,120 Z;
                M0,60 C200,20 400,80 600,40 C800,20 1000,80 1200,60 L1200,120 L0,120 Z;
                M0,20 C200,80 400,20 600,60 C800,100 1000,40 1200,80 L1200,120 L0,120 Z
              "
            />
          </path>

          {/* Third layer - white base */}
          <path
            d="M0,60 C300,100 500,60 700,80 C900,100 1100,80 1200,100 L1200,120 L0,120 Z"
            fill="white"
          >
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M0,60 C300,100 500,60 700,80 C900,100 1100,80 1200,100 L1200,120 L0,120 Z;
                M0,80 C300,60 500,100 700,70 C900,60 1100,100 1200,90 L1200,120 L0,120 Z;
                M0,60 C300,100 500,60 700,80 C900,100 1100,80 1200,100 L1200,120 L0,120 Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  );
};
