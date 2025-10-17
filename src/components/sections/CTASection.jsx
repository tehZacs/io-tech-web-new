import { Button } from '../base/Button';

/**
 * Call to Action Section
 * - Gradient background for visual impact
 * - Clear action buttons
 * - Optimized for conversions
 * - Animated gradient mesh background (modern blob effect)
 */
export const CTASection = () => {
  return (
    <section className="py-20 gradient-brand relative overflow-hidden">
      {/* CSS Animations for gradient mesh blobs */}
      <style>{`
        @keyframes blob1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes blob2 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(-40px, 30px) scale(1.15) rotate(120deg);
          }
          66% {
            transform: translate(30px, -40px) scale(0.85) rotate(240deg);
          }
        }
        @keyframes blob3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, -30px) scale(1.2);
          }
        }
        @keyframes blob4 {
          0%, 100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(40px, -30px) scale(0.9) rotate(-120deg);
          }
          66% {
            transform: translate(-30px, 40px) scale(1.1) rotate(-240deg);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      {/* Animated Gradient Mesh - Organic Blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-70">
        {/* Blob 1 - Top Left - Cyan/Blue */}
        <div
          className="absolute top-0 left-0 w-[35rem] h-[35rem] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, rgba(59, 130, 246, 0.6) 40%, rgba(14, 165, 233, 0.3) 70%, transparent 100%)',
            animation: 'blob1 20s ease-in-out infinite'
          }}
        ></div>

        {/* Blob 2 - Top Right - Purple/Pink */}
        <div
          className="absolute -top-10 -right-10 w-[38rem] h-[38rem] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.7) 0%, rgba(236, 72, 153, 0.5) 40%, rgba(147, 51, 234, 0.3) 70%, transparent 100%)',
            animation: 'blob2 25s ease-in-out infinite'
          }}
        ></div>

        {/* Blob 3 - Bottom Left - Teal/Green */}
        <div
          className="absolute -bottom-10 left-10 w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.75) 0%, rgba(16, 185, 129, 0.5) 40%, rgba(13, 148, 136, 0.3) 70%, transparent 100%)',
            animation: 'blob3 22s ease-in-out infinite'
          }}
        ></div>

        {/* Blob 4 - Bottom Right - Blue/Indigo */}
        <div
          className="absolute -bottom-10 -right-10 w-[40rem] h-[40rem] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, rgba(59, 130, 246, 0.6) 40%, rgba(79, 70, 229, 0.3) 70%, transparent 100%)',
            animation: 'blob4 18s ease-in-out infinite'
          }}
        ></div>

        {/* Blob 5 - Center - Subtle ambient light */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, transparent 70%)',
            animation: 'float-slow 15s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="container text-center relative z-10">
        {/* Heading */}
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-display-lg mb-6 text-white">
          Impulse la transformación digital de su organización
        </h2>

        {/* Description */}
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance">
          Contáctenos para una consultoría especializada y descubra cómo nuestras soluciones pueden
          optimizar sus procesos y acelerar su crecimiento.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href="#contacto"
            className="bg-white text-brand-800 hover:bg-gray-50 hover:text-brand-900 hover:scale-105 shadow-2xl font-bold transition-all duration-200 border-2 border-white"
          >
            Solicitar Consultoría
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="tel:+525512345678"
            className="border-3 border-white bg-white/40 backdrop-blur-md text-white hover:bg-white hover:text-brand-800 hover:scale-105 shadow-2xl font-bold transition-all duration-200"
          >
            Llamar Ahora
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Atención ágil y personalizada</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Consultoría especializada</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Sin compromiso</span>
          </div>
        </div>
      </div>
    </section>
  );
};
