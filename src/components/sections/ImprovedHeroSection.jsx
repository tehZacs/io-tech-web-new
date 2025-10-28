import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MatrixBackground } from '../effects/MatrixBackground';

/**
 * Improved Hero Section
 * - MUCH better contrast (dark overlay on image)
 * - Highly visible buttons with proper styling
 * - Trust indicators with better visibility
 * - Animated image slideshow with crossfade
 * - Optimized with WebP format + JPG fallback
 * - Intelligent preloading strategy
 */
export const ImprovedHeroSection = () => {
  // Hero images with WebP for modern browsers and JPG fallback
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
  const [showMatrix, setShowMatrix] = useState(true); // Start with Matrix
  const [isMatrixVisible, setIsMatrixVisible] = useState(true);

  useEffect(() => {
    // Preload only next 2 images to save bandwidth (lazy loading strategy)
    const preloadImages = (index) => {
      const imagesToPreload = [
        heroImages[(index + 1) % heroImages.length],
        heroImages[(index + 2) % heroImages.length],
      ];

      imagesToPreload.forEach((image) => {
        // Preload WebP (modern format)
        const webpImg = new Image();
        webpImg.src = image.webp;

        // Preload JPG fallback
        const jpgImg = new Image();
        jpgImg.src = image.jpg;
      });
    };

    // Preload initial images
    preloadImages(currentImageIndex);

    // Alternate between Matrix (30s) and Images (30s each)
    const interval = setInterval(() => {
      if (showMatrix) {
        // Currently showing Matrix, switch to image
        setIsTransitioning(true);

        // Get random next image (different from current)
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * heroImages.length);
        } while (randomIndex === currentImageIndex);

        setNextImageIndex(randomIndex);
        preloadImages(randomIndex);

        // Fade out Matrix, fade in image
        setTimeout(() => {
          setIsMatrixVisible(false);
          setCurrentImageIndex(randomIndex);
          setIsTransitioning(false);
          setShowMatrix(false);
        }, 1500);

      } else {
        // Currently showing image, switch to Matrix or next image
        // 50% chance to show Matrix, 50% to show another image
        if (Math.random() > 0.5) {
          // Show Matrix
          setIsTransitioning(true);
          setTimeout(() => {
            setIsMatrixVisible(true);
            setIsTransitioning(false);
            setShowMatrix(true);
          }, 1500);
        } else {
          // Show another image
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
        }
      }
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, showMatrix]);

  return (
    <section className="relative min-h-[90vh] h-[90vh] flex items-center overflow-hidden -mt-20" style={{ backgroundColor: '#101820' }}>
      {/* Matrix Background Effect - Shown when isMatrixVisible is true */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1500"
        style={{ opacity: isMatrixVisible ? 1 : 0, pointerEvents: isMatrixVisible ? 'auto' : 'none' }}
      >
        <MatrixBackground opacity={0.25} />
      </div>

      {/* Animated Background Images with Crossfade - Shown when isMatrixVisible is false */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-1500"
        style={{ opacity: isMatrixVisible ? 0 : 1, pointerEvents: isMatrixVisible ? 'none' : 'auto' }}
      >
        {/* Current Image - WebP with JPG fallback */}
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

        {/* Next Image (for crossfade effect) - WebP with JPG fallback */}
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

        {/* Dark overlay for images to improve text contrast - Deep dark */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(16, 24, 32, 0.85), rgba(20, 28, 36, 0.75), rgba(16, 24, 32, 0.80), rgba(20, 28, 36, 0.75))' }}></div>
      </div>

      {/* Dark gradient overlay for better contrast - Deep dark tones */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to bottom, rgba(16, 24, 32, 0.5), rgba(16, 24, 32, 0.3), rgba(16, 24, 32, 0.6))' }}></div>

      <div className="container relative z-10 pt-52 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/20 backdrop-blur-sm rounded-full text-accent-300 text-sm font-semibold mb-6 border border-accent-500/30">
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
            Innovación y Tecnología de Vanguardia
          </div>

          {/* Main Heading - Excellent Contrast */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-display-xl mb-6 text-white leading-tight">
            Soluciones tecnológicas integrales para{' '}
            <span className="text-accent-300 font-extrabold">
              empresas que buscan innovar
            </span>
          </h1>

          {/* Subheading - Better Contrast */}
          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            Desde modernización de infraestructura hasta implementación de tecnologías emergentes.
            Infraestructura robusta, desarrollo de software y consultoría especializada para impulsar su crecimiento.
          </p>

          {/* CTA Buttons - Highly Visible */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              Solicitar Consultoría
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30 hover:border-white/50 shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Explorar Servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
