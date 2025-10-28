import { Link } from 'react-router-dom';

/**
 * Aviso de Privacidad Page
 * - Privacy notice compliant with Mexican data protection laws (LFPDPPP)
 * - Content based on official IO-TECH privacy notice document
 * - Professional and serious design
 */
export const AvisoPrivacidadPage = () => {
  return (
    <div className="bg-white">
      {/* Hero with Background Image */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000"
            alt="Protección de datos y privacidad"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/80 to-brand-800/80"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white">Aviso de Privacidad</span>
            </nav>
            <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6 leading-tight">
              Aviso de Privacidad
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              Última actualización: 16 de octubre de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container max-w-4xl">

          {/* Introducción */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <p className="text-gray-700 text-base leading-relaxed">
              En cumplimiento con lo dispuesto por la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, se hace saber que <strong>IO-TECH SA DE CV</strong>, con domicilio en VICENTE SALADO ALVAREZ No 4, CIUDAD SATELITE Demarcación Territorial, NAUCALPAN DE JUAREZ, CÓDIGO POSTAL 53100, ESTADO DE MÉXICO, MÉXICO, es responsable del tratamiento y protección de los datos personales que recaba a través de su sitio web <a href="https://io-tech.com.mx" className="text-blue-700 hover:underline">https://io-tech.com.mx</a>, bajo los siguientes conceptos.
            </p>
          </div>

          {/* 1. Datos personales que se recaban */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              1. Datos personales que se recaban
            </h2>
            <p className="text-gray-700 mb-4">
              Los datos personales que podremos recabar directamente a través de nuestro sitio web son los siguientes:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-700 font-bold">•</span>
                <span>Nombre completo (dato de identificación)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-700 font-bold">•</span>
                <span>Correo electrónico (dato de contacto)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-700 font-bold">•</span>
                <span>Número telefónico - opcional (dato de contacto)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-700 font-bold">•</span>
                <span>Empresa u organización - opcional (dato laboral)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-700 font-bold">•</span>
                <span>Cargo o puesto - opcional (dato laboral)</span>
              </li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <p className="text-gray-800 font-semibold">
                IMPORTANTE: No se recaban datos personales sensibles ni datos financieros o patrimoniales.
              </p>
            </div>
          </div>

          {/* 2. Finalidades del tratamiento */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              2. Finalidades del tratamiento
            </h2>
            <p className="text-gray-700 mb-6">
              Los datos personales mencionados serán utilizados para las siguientes:
            </p>

            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Finalidades primarias (no se requiere consentimiento adicional):
              </h3>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>Proporcionar información sobre los productos y servicios ofrecidos por IO-TECH SA DE CV.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>Atender solicitudes de información, cotizaciones o demostraciones.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>Dar seguimiento a las consultas o requerimientos realizados por el titular.</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">
                Finalidades secundarias (se requiere de su consentimiento expreso):
              </h3>
              <p className="text-gray-700 mb-3 text-sm">que no son necesarias para la relación jurídica, pero nos permiten mejorar la atención:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>Enviar comunicaciones promocionales, boletines informativos</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-700 font-bold">•</span>
                  <span>Enviar encuestas de satisfacción.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-700 p-4">
              <p className="text-gray-700 text-sm">
                Si <strong>NO</strong> desea que sus datos sean tratados para las finalidades secundarias, puede manifestarlo enviando un correo a{' '}
                <a href="mailto:dpo@io-tech.com.mx" className="text-blue-700 font-semibold hover:underline">
                  dpo@io-tech.com.mx
                </a>{' '}
                o marcando la casilla correspondiente en el formulario de captura de datos.
              </p>
            </div>
          </div>

          {/* 3. Transferencia de datos personales */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              3. Transferencia de datos personales
            </h2>
            <p className="text-gray-700 mb-4">
              IO-TECH SA DE CV informa que <strong>no realizará transferencia ni cesión de los datos personales</strong> a terceros nacionales o extranjeros, salvo en los siguientes casos previstos por la ley:
            </p>
            <ul className="space-y-2 mb-4 ml-6">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-700 font-bold">•</span>
                <span>Cuando sea legalmente requerido por autoridad competente</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-700 font-bold">•</span>
                <span>Cuando la transferencia sea efectuada a sociedades controladoras, subsidiarias o afiliadas, siempre que compartan los mismos principios de privacidad</span>
              </li>
            </ul>
            <p className="text-gray-700 text-sm">
              En caso de que en el futuro requiramos realizar transferencias no contempladas en estas excepciones, solicitaremos su consentimiento expreso.
            </p>
          </div>

          {/* 4. Mecanismos para ejercer los derechos ARCO */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              4. Mecanismos para ejercer los derechos ARCO y revocar el consentimiento
            </h2>
            <p className="text-gray-700 mb-6">
              Tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerte</strong> (derechos ARCO) al tratamiento de tus datos personales, así como a <strong>revocar el consentimiento</strong> que nos hayas otorgado.
            </p>

            <h3 className="font-bold text-gray-900 mb-4">Procedimiento para ejercer tus derechos:</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">1. Solicitud:</h4>
                <p className="text-gray-700 ml-4">
                  Envía un correo electrónico a nuestro Departamento de Protección de Datos Personales a la dirección:{' '}
                  <a href="mailto:dpo@io-tech.com.mx" className="text-blue-700 font-semibold hover:underline">
                    dpo@io-tech.com.mx
                  </a>{' '}
                  con el asunto "Ejercicio de derechos ARCO".
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">2. Contenido de la solicitud:</h4>
                <ul className="space-y-2 ml-8 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">◦</span>
                    <span>Nombre completo del titular.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">◦</span>
                    <span>Copia de identificación oficial vigente (credencial de elector, pasaporte, cédula profesional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">◦</span>
                    <span>Descripción clara y precisa del derecho ARCO que desea ejercer (Acceso, Rectificación, Cancelación u Oposición) y de los datos personales respecto de los cuales desea ejercerlo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">◦</span>
                    <span>En caso de Rectificación, deberá indicar las modificaciones a realizarse y aportar la documentación que sustente su petición</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">◦</span>
                    <span>Datos de contacto (dirección de correo electrónico para recibir notificaciones)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">3. Plazos:</h4>
                <ul className="space-y-2 ml-8 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">◦</span>
                    <span><strong>Confirmación de recepción:</strong> dentro de los 5 días hábiles siguientes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">◦</span>
                    <span><strong>Determinación sobre la solicitud:</strong> en un plazo máximo de 20 días hábiles contados a partir de la recepción completa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">◦</span>
                    <span><strong>Ejecución de la medida:</strong> en caso de ser procedente, se hará efectiva dentro de los 15 días hábiles siguientes a la notificación de la resolución.</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-700 text-sm mt-6 p-4 bg-gray-50 border border-gray-200">
              En caso de que la solicitud no cumpla con los requisitos, se requerirá al titular dentro de los 5 días hábiles siguientes a la recepción para que la corrija en un plazo de 10 días hábiles; de no hacerlo, la solicitud se tendrá por no presentada.
            </p>
          </div>

          {/* 5. Uso de cookies */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              5. Uso de cookies y tecnologías similares
            </h2>
            <p className="text-gray-700 mb-3">
              Nuestro sitio web puede utilizar cookies o tecnologías similares únicamente para mejorar la experiencia de navegación y fines estadísticos. No recabamos información personal identificable mediante dichas tecnologías.
            </p>
            <p className="text-gray-700">
              Puede deshabilitarlas desde la configuración de tu navegador.
            </p>
          </div>

          {/* 6. Medidas de seguridad */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              6. Medidas de seguridad y confidencialidad
            </h2>
            <p className="text-gray-700 mb-4">
              De conformidad con los principios de <strong>confidencialidad, integridad y disponibilidad</strong>, IO-TECH SA DE CV adopta las medidas administrativas, técnicas y físicas necesarias para proteger los datos personales contra daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado.
            </p>
            <p className="text-gray-700 mb-4">
              Todos nuestros colaboradores y terceros que tengan acceso a sus datos personales están obligados a guardar estricta confidencialidad respecto de estos. Esta obligación de confidencialidad subsiste aun después de finalizar su relación laboral o contractual con IO-TECH.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-4">
              <p className="text-gray-900 font-semibold mb-3">Contamos con controles internos que incluyen:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span>◦</span>
                  <span>Acceso restringido a datos personales mediante credenciales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>◦</span>
                  <span>Cifrado de datos en tránsito y en reposo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>◦</span>
                  <span>Capacitación periódica a personal en materia de protección de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>◦</span>
                  <span>Protocolos de respuesta ante brechas de seguridad</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 7. Plazos de conservación */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              7. Plazos de conservación
            </h2>
            <p className="text-gray-700 mb-3">
              Sus datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades descritas en este aviso, y posteriormente durante los plazos legalmente establecidos para atender requerimientos de información de autoridades competentes.
            </p>
            <p className="text-gray-700 mb-3">
              Una vez cumplidas las finalidades del tratamiento y transcurridos los plazos legales aplicables, sus datos personales serán bloqueados y posteriormente eliminados de nuestros sistemas de manera segura.
            </p>
            <p className="text-gray-700">
              Usted puede solicitar la cancelación de sus datos en cualquier momento mediante el procedimiento ARCO descrito en este aviso.
            </p>
          </div>

          {/* 8. Actualizaciones */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              8. Actualizaciones al Aviso de Privacidad
            </h2>
            <p className="text-gray-700 mb-3">
              Nos reservamos el derecho de realizar modificaciones o actualizaciones al presente aviso en cualquier momento, para atender cambios legislativos, regulatorios o internos.
            </p>
            <p className="text-gray-700">
              Estas modificaciones estarán disponibles a través de nuestro sitio web:{' '}
              <a href="https://io-tech.com.mx/politica-de-privacidad" className="text-blue-700 hover:underline">
                https://io-tech.com.mx/politica-de-privacidad
              </a>
            </p>
          </div>

          {/* 9. Autoridad de protección */}
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              9. Autoridad de protección de datos
            </h2>
            <p className="text-gray-700 mb-3">
              Si considera que tu derecho a la protección de datos personales ha sido vulnerado por IO-TECH, puede presentar su reclamación ante la <strong>Secretaría Anticorrupción y Buen Gobierno</strong>, autoridad competente en materia de protección de datos personales en posesión de particulares.
            </p>
            <p className="text-gray-700">
              Para más información, puede consultar:{' '}
              <a href="https://www.gob.mx/sab" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                www.gob.mx/sab
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* Contacto - Professional Footer */}
      <section className="bg-gray-100 py-12 border-t border-gray-300">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Departamento de Protección de Datos Personales
          </h2>

          <div className="bg-white border border-gray-300 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-600 mb-1 font-semibold">Correo electrónico</p>
                <a href="mailto:dpo@io-tech.com.mx" className="text-blue-700 hover:underline text-lg">
                  dpo@io-tech.com.mx
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1 font-semibold">Última actualización</p>
                <p className="text-gray-900 text-lg">16 de octubre de 2025</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">¿Necesita más información?</p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-lg font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-xl"
              >
                Contáctanos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
