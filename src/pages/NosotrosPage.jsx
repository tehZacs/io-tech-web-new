import { Link } from 'react-router-dom';

// Página Nosotros - IO-TECH
export const NosotrosPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
            alt="Equipo profesional de tecnología"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(21, 101, 192, 0.8), rgba(10, 58, 127, 0.8))' }}></div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white">Nosotros</span>
            </nav>
            <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6 leading-tight">
              Somos IO-TECH
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              El motor tecnológico que impulsa tu evolución. Más de 7 años transformando empresas con soluciones innovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-5xl mb-12 text-gray-900">
              Nuestra Historia
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                Con más de 7 años de crecimiento acelerado, IO-TECH se ha consolidado como un consorcio de empresas mexicanas
                líderes en transformación digital. Nuestra experiencia abarca tanto el sector público como el privado,
                donde hemos implementado soluciones que marcan la diferencia.
              </p>
              <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                Nuestro principal activo es nuestro talento humano especializado: más de 200 profesionales certificados
                con más de 400 certificaciones internacionales, trabajando juntos para potenciar la grandeza de las organizaciones.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos el frente comercial del consorcio Engine Core, lo que nos permite ofrecer un portafolio integral
                de servicios tecnológicos de clase mundial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 text-white" style={{ background: 'linear-gradient(to bottom right, #1565C0, #0D47A1, #0A3A7F)' }}>
        <div className="container">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-16 text-center text-white">
            Cifras que nos Respaldan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-bold mb-3 text-white">+200</div>
              <div className="text-white/90 font-medium text-lg">Especialistas Técnicos</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3 text-white">+400</div>
              <div className="text-white/90 font-medium text-lg">Certificaciones</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3 text-white">7</div>
              <div className="text-white/90 font-medium text-lg">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-3 text-white">50+</div>
              <div className="text-white/90 font-medium text-lg">Clientes Activos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="font-display font-bold text-3xl lg:text-5xl mb-16 text-gray-900 text-center">
            Nuestra Propuesta de Valor
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1976D2, #1565C0)' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-gray-900">
                Líderes Regionales
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Organización líder en el ecosistema tecnológico regional
              </p>
            </div>

            <div className="text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1976D2, #1565C0)' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-gray-900">
                Portafolio Integral
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                De modernización a tecnologías emergentes de vanguardia
              </p>
            </div>

            <div className="text-center p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #1976D2, #1565C0)' }}>
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-gray-900">
                Soluciones Robustas
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Escalables, personalizadas y con resultados medibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(to bottom right, #1565C0, #0A3A7F)' }}>
        <div className="container text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
            ¿Quieres ser parte de nuestro éxito?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Conoce más sobre nuestras certificaciones y partners tecnológicos
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            style={{ color: '#0D47A1' }}
          >
            Contáctanos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};
