import { Link } from 'react-router-dom';

export const NosotrosPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white">Inicio</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white">Nosotros</span>
            </nav>
            <h1 className="font-display font-bold text-4xl lg:text-display-lg mb-6">
              Somos IO-TECH
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              El motor tecnológico que impulsa tu evolución
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8 text-gray-900">
              Nuestra Historia
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Con más de 7 años de crecimiento acelerado, IO-TECH se ha consolidado como un consorcio de empresas mexicanas
                líderes en transformación digital. Nuestra experiencia abarca tanto el sector público como el privado,
                donde hemos implementado soluciones que marcan la diferencia.
              </p>
              <p className="mb-6">
                Nuestro principal activo es nuestro talento humano especializado: más de 200 profesionales certificados
                con más de 400 certificaciones internacionales, trabajando juntos para potenciar la grandeza de las organizaciones.
              </p>
              <p>
                Somos el frente comercial del consorcio Engine Core, lo que nos permite ofrecer un portafolio integral
                de servicios tecnológicos de clase mundial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-brand-50 to-accent-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-600 mb-2">+200</div>
              <div className="text-gray-700 font-medium">Especialistas Técnicos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-600 mb-2">+400</div>
              <div className="text-gray-700 font-medium">Certificaciones</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-600 mb-2">7</div>
              <div className="text-gray-700 font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Clientes Activos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-12 text-gray-900 text-center">
            Nuestra Propuesta de Valor
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-white rounded-2xl border-2 border-brand-200 hover:border-brand-500 transition-colors">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-gray-900">
                Líderes Regionales
              </h3>
              <p className="text-gray-600">
                Organización líder en el ecosistema tecnológico regional
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl border-2 border-brand-200 hover:border-brand-500 transition-colors">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-gray-900">
                Portafolio Integral
              </h3>
              <p className="text-gray-600">
                De modernización a tecnologías emergentes de vanguardia
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl border-2 border-brand-200 hover:border-brand-500 transition-colors">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-gray-900">
                Soluciones Robustas
              </h3>
              <p className="text-gray-600">
                Escalables, personalizadas y con resultados medibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
            ¿Quieres ser parte de nuestro éxito?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Conoce más sobre nuestras certificaciones y partners tecnológicos
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
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
