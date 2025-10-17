import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const ConsultoriaPage = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);

  const challenges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Alineación Estratégica Fragmentada",
      desc: "Desconexión entre estrategia corporativa y ejecución tecnológica. Falta de visión unificada entre áreas de negocio y TI."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Gestión del Cambio Deficiente",
      desc: "Resistencia organizacional a transformaciones necesarias. Falta de metodologías probadas para adopción efectiva."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Gobernanza sin Madurez",
      desc: "Ausencia de frameworks estructurados de toma de decisiones. Procesos informales que generan ineficiencias y riesgos."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      title: "Visibilidad Limitada del Portafolio",
      desc: "Proyectos ejecutados en silos sin visión holística. Incapacidad para medir valor real y priorizar inversiones."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Complejidad Regulatoria Creciente",
      desc: "Múltiples normativas simultáneas y en constante cambio. Dificultad para mantener compliance integral."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Presión por Resultados Inmediatos",
      desc: "Expectativas de ROI rápido vs. transformaciones de largo plazo. Balance entre quick wins y sostenibilidad estratégica."
    }
  ];

  const verticals = [
    {
      title: "Gobierno de TI y Corporativo",
      desc: "Establecemos marcos de gobierno TI robustos alineados a COBIT 2019, ITIL 4, ISO/IEC 38500 y mejores prácticas internacionales. Diseñamos estructuras de gobierno con comités ejecutivos, comités de arquitectura y comités de cambio, definiendo roles, responsabilidades y matrices RACI claras. Implementamos procesos de toma de decisiones estructurados con criterios de priorización, marcos de evaluación de inversiones TI (business cases, análisis costo-beneficio, TCO/ROI), gestión de demanda tecnológica, y mecanismos de rendición de cuentas. Incluye definición de políticas corporativas TI, estándares tecnológicos, procesos de aprobación de excepciones, gestión de riesgos tecnológicos, y sistemas de métricas y KPIs para medir desempeño y valor generado por TI."
    },
    {
      title: "Oficina de Gestión de Proyectos (PMO)",
      desc: "Diseñamos e implementamos PMOs empresariales con capacidades de gestión de portafolio, programas y proyectos según PMI (Project Management Institute) y mejores prácticas ágiles. Establecemos metodologías de gestión de proyectos híbridas (predictivas y ágiles), procesos estandarizados de inicio, planificación, ejecución, monitoreo y cierre de proyectos, plantillas y artefactos reutilizables, herramientas de gestión (MS Project, Jira, Azure DevOps, ServiceNow PPM), dashboards ejecutivos en tiempo real, gestión de recursos compartidos, gestión de dependencias entre proyectos, y evaluaciones post-implementación (lessons learned). Capacitamos equipos en metodologías ágiles (Scrum, Kanban, SAFe), gestión predictiva (PMBoK) y gestión de cambio organizacional."
    },
    {
      title: "Consultoría Estratégica de TI",
      desc: "Proporcionamos asesoría ejecutiva para alinear la estrategia tecnológica con los objetivos de negocio. Realizamos diagnósticos de madurez TI con evaluaciones contra frameworks reconocidos (COBIT, CMMI, ITIL), análisis de brecha (gap analysis), identificación de quick wins y roadmaps de transformación digital. Desarrollamos planes estratégicos TI con visión 3-5 años, definición de iniciativas estratégicas priorizadas, business cases con análisis financiero (NPV, IRR, payback), arquitecturas target, hojas de ruta de tecnologías emergentes (cloud, IA, blockchain, edge computing), estrategias de sourcing (insourcing, outsourcing, partnerships), y modelos operativos TI optimizados. Acompañamos a CTOs y CIOs en la transformación organizacional y cultural."
    },
    {
      title: "Gestión de Compliance y Cumplimiento",
      desc: "Acompañamos en el cumplimiento integral de marcos regulatorios y normativos aplicables al sector: Ley Federal de Protección de Datos Personales (México), NOM-151-SCFI, LGPDPPSO, Ley Fintech, regulaciones CNBV (sector financiero), COFEPRIS (salud), CRE (energía), IFT (telecomunicaciones), normativas internacionales (GDPR, HIPAA, PCI-DSS, SOX), y estándares ISO (9001, 20000, 27001, 22301). Implementamos sistemas de gestión de cumplimiento con evaluaciones de brechas, diseño de controles, documentación de políticas y procedimientos, programas de capacitación y concientización, generación de evidencias para auditorías, auditorías internas de preparación, acompañamiento en auditorías de certificación externas, y mantenimiento de sistemas de gestión con mejora continua."
    },
    {
      title: "Gestión del Cambio Organizacional",
      desc: "Diseñamos e implementamos estrategias de gestión del cambio basadas en metodologías probadas (Prosci ADKAR, Kotter, Lewin) para asegurar la adopción exitosa de transformaciones tecnológicas y organizacionales. Realizamos análisis de impacto del cambio, identificación de stakeholders y mapeo de poder-interés, desarrollo de planes de comunicación multicanal, diseño de programas de capacitación y entrenamiento (presencial, virtual, e-learning), creación de redes de agentes de cambio (champions), gestión de resistencias con estrategias de mitigación, medición de adopción con indicadores de éxito, y planes de sostenibilidad post-implementación. Facilitamos workshops, focus groups y sesiones de co-creación para involucrar a las personas en el proceso de transformación."
    },
    {
      title: "Arquitectura Empresarial",
      desc: "Diseñamos arquitecturas empresariales integrales alineadas a frameworks TOGAF, Zachman o Gartner Enterprise Architecture. Desarrollamos arquitecturas de negocio (procesos, capacidades, modelo operativo), arquitecturas de información (modelos de datos, flujos de información, catálogo de datos maestros), arquitecturas de aplicaciones (portafolio de aplicaciones, integraciones, roadmap de modernización), y arquitecturas tecnológicas (infraestructura, plataformas, estándares técnicos). Incluye análisis de estado actual (As-Is), definición de estado objetivo (To-Be), identificación de brechas, secuenciación de iniciativas de transformación, principios arquitectónicos, patrones de diseño, estándares de integración (APIs, ESB, eventos), governance de arquitectura con comités de revisión (ARB), y herramientas de modelado (ArchiMate, UML, BPMN)."
    },
    {
      title: "Optimización de Procesos",
      desc: "Realizamos análisis, rediseño y optimización de procesos de negocio y TI utilizando metodologías Lean, Six Sigma, BPM (Business Process Management) y Design Thinking. Ejecutamos mapeo de procesos actuales (As-Is) con identificación de puntos de dolor, cuellos de botella, desperdicios (7 wastes de Lean), análisis de tiempos de ciclo y value stream mapping. Diseñamos procesos objetivo (To-Be) optimizados con eliminación de actividades sin valor agregado, automatización de tareas repetitivas (RPA), digitalización de flujos de trabajo, implementación de controles y checkpoints, y KPIs de proceso. Utilizamos herramientas de modelado BPMN, simulación de procesos, y plataformas BPM (Bizagi, Bonita, Camunda) para automatización y orquestación de procesos end-to-end."
    },
    {
      title: "Evaluación de Madurez y Benchmarking",
      desc: "Realizamos evaluaciones de madurez organizacional y tecnológica contra modelos reconocidos internacionalmente: CMMI (Capability Maturity Model Integration) para desarrollo y servicios, COBIT para gobierno TI, ITIL para gestión de servicios, ISO/IEC 33001 (SPICE) para procesos de software, y modelos de madurez digital. Ejecutamos assessments mediante entrevistas con stakeholders clave, revisión documental, observación de prácticas, y análisis de evidencias. Entregamos reportes de madurez con scoring por áreas de proceso, identificación de fortalezas y oportunidades de mejora, benchmarking contra industria, priorización de iniciativas de mejora, y roadmaps de evolución de madurez con quick wins y proyectos estratégicos."
    },
    {
      title: "Gestión de Portafolio de Proyectos",
      desc: "Implementamos procesos de Portfolio Management con visión holística de inversiones tecnológicas. Establecemos comités de priorización con criterios multicriterio (valor de negocio, alineación estratégica, riesgo, viabilidad técnica, urgencia), scoring models, y matrices de priorización (Eisenhower, MoSCoW, RICE). Gestionamos pipelines de demanda con intake estructurado, evaluación de business cases, balanceo de portafolio (run vs. grow vs. transform), gestión de capacidad y recursos compartidos, seguimiento de ejecución con dashboards ejecutivos (budget vs. actual, schedule performance, benefits realization), gestión de interdependencias, y evaluación continua con stage gates y kill criteria para proyectos que no generan valor esperado."
    },
    {
      title: "Gestión de Proveedores y Vendors",
      desc: "Diseñamos estrategias de sourcing y gestión integral del ciclo de vida de proveedores tecnológicos. Incluye definición de estrategia de aprovisionamiento (make vs. buy, single vs. multi-sourcing), desarrollo de RFPs (Request for Proposal) y RFQs estructurados, evaluación y selección de proveedores con scorecards multi-criterio, negociación de contratos y SLAs con métricas claras y penalizaciones, onboarding de proveedores, gestión de desempeño con revisiones periódicas de cumplimiento de SLAs, gestión de relaciones (vendor relationship management), gestión de riesgos de terceros (TPRM - Third Party Risk Management), auditorías de cumplimiento de proveedores, optimización de costos mediante consolidación de vendors y renegociaciones, y estrategias de salida (exit planning) para mitigar riesgos de dependencia."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Decisiones Informadas y Ágiles",
      desc: "Marco estructurado para toma de decisiones basadas en datos y criterios objetivos"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Visibilidad y Control Total",
      desc: "Transparencia completa del portafolio de proyectos e inversiones tecnológicas"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Ejecución Estratégica Efectiva",
      desc: "Traducción exitosa de visión en resultados tangibles y sostenibles"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Optimización de Inversiones",
      desc: "Maximización del valor de cada peso invertido mediante priorización estratégica"
    }
  ];

  const technologies = [
    { name: "COBIT 2019", logo: "📋" },
    { name: "TOGAF", logo: "🏛️" },
    { name: "PMI/PMBoK", logo: "📊" },
    { name: "ITIL 4", logo: "⚙️" },
    { name: "SAFe", logo: "🔄" },
    { name: "ISO Standards", logo: "📜" },
    { name: "CMMI", logo: "📈" },
    { name: "Jira/Azure DevOps", logo: "🛠️" }
  ];

  const faqs = [
    {
      q: "¿Cuánto tiempo toma implementar una PMO?",
      a: "La implementación de una PMO típicamente toma entre 3-6 meses dependiendo del alcance, madurez organizacional actual y complejidad del portafolio de proyectos. Incluye diagnóstico inicial, diseño del modelo operativo, definición de procesos y metodologías, selección e implementación de herramientas, capacitación de equipos, y estabilización operativa con proyectos piloto."
    },
    {
      q: "¿Qué frameworks de gobierno TI recomiendan?",
      a: "Recomendamos COBIT 2019 como marco integral de gobierno y gestión TI, complementado con ITIL 4 para gestión de servicios, TOGAF para arquitectura empresarial, y ISO/IEC 38500 para principios de gobierno corporativo TI. La selección depende del contexto organizacional, industria y objetivos específicos."
    },
    {
      q: "¿Cómo miden el éxito de las iniciativas de transformación?",
      a: "Medimos el éxito mediante KPIs definidos en la fase de planeación: cumplimiento de cronograma y presupuesto, adopción de usuarios, beneficios realizados vs. proyectados (ROI, cost savings, revenue growth), mejoras en KPIs de negocio, madurez de procesos alcanzada, y satisfacción de stakeholders. Realizamos evaluaciones post-implementación (PIR) y seguimiento de beneficios a 6 y 12 meses."
    },
    {
      q: "¿Ofrecen servicios de asesoría continua o solo proyectos puntuales?",
      a: "Ofrecemos ambos modelos: proyectos de consultoría puntuales con entregables definidos, y servicios de asesoría continua mediante staff augmentation o retainers mensuales. Para transformaciones de largo plazo, recomendamos esquemas de acompañamiento continuo con revisiones trimestrales de avances y ajustes al roadmap según evolución del contexto."
    },
    {
      q: "¿Tienen experiencia en mi industria?",
      a: "Tenemos experiencia probada en sector gobierno, banca y finanzas, salud, telecomunicaciones, retail, manufactura y energía. Nuestros consultores cuentan con certificaciones internacionales (PMP, TOGAF, COBIT, ITIL) y experiencia en proyectos de alta complejidad en México. Podemos compartir casos de éxito relevantes a su industria durante una sesión de descubrimiento inicial."
    }
  ];

  const handleCheckboxChange = (service) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleContactClick = () => {
    const servicesText = selectedServices.length > 0
      ? `Estoy interesado en los siguientes servicios de Consultoría:\n\n${selectedServices.map(s => `- ${s}`).join('\n')}`
      : 'Me gustaría recibir información sobre sus servicios de Consultoría y Gobierno Corporativo.';

    navigate(`/contacto?services=${encodeURIComponent(servicesText)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero con imagen de fondo */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
            alt="Consultoría"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/95 via-red-900/90 to-red-800/90 animate-gradient-slow" />
        </div>

        <div className="container relative pt-32 pb-16">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link>
              <span className="mx-2 text-white/60">/</span>
              <Link to="/servicios" className="text-white/80 hover:text-white transition-colors">Servicios</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Consultoría</span>
            </nav>

            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-6 text-white leading-tight">
              Consultoría
            </h1>

            <p className="text-2xl font-semibold mb-6 text-red-200">
              Impulsamos decisiones estratégicas con visión técnica y de negocio
            </p>

            <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
              Acompañamos a las organizaciones en la planificación, ejecución y control de proyectos clave,
              fortaleciendo sus capacidades operativas, regulatorias y tecnológicas con enfoque integral
              y resultados sostenibles.
            </p>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Solicitar Consultoría Estratégica
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Descripción */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-20 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              La gobernanza efectiva es el puente entre la visión estratégica y la excelencia operacional.
              En un entorno de constante evolución tecnológica, ayudamos a las organizaciones a tomar
              decisiones informadas, gestionar sus portafolios de inversión TI y ejecutar transformaciones
              con metodologías probadas y resultados medibles.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Nuestros consultores certificados (PMP, TOGAF, COBIT, ITIL, Scrum Master, SAFe) combinan
              expertise técnico con visión de negocio para diseñar estrategias, optimizar procesos,
              implementar frameworks de gobierno y acompañar en la gestión del cambio organizacional.
            </p>
          </div>
        </div>
      </section>

      {/* Grandes Retos */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-6">
              Grandes Retos que Enfrentas
            </h2>
            <p className="text-xl text-gray-300">
              La complejidad del entorno exige un socio con visión estratégica y experiencia probada
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors border border-gray-700">
                <div className="text-red-400 mb-4">
                  {challenge.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">
                  {challenge.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solución - Verticales */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-slate" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="rgb(220 38 38 / 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-slate)" />
          </svg>
        </div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-gray-900">
              Nuestra Solución de Consultoría
            </h2>
            <p className="text-xl text-gray-600">
              Acompañamiento integral en gobierno, gestión y transformación organizacional
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {verticals.map((vertical, idx) => (
              <details key={idx} className="group bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all">
                <summary className="cursor-pointer p-8 hover:bg-red-50 transition-colors list-none flex items-center justify-between">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors pr-4">
                    {vertical.title}
                  </h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 pt-4 bg-gradient-to-br from-red-50/30 to-transparent">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {vertical.desc}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}} />
        </div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-white">
              Beneficios Clave
            </h2>
            <p className="text-xl text-white/90">
              Transformamos la visión estratégica en ejecución exitosa y resultados medibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all border border-white/20">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-gray-900">
              Frameworks y Metodologías
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con los estándares y mejores prácticas reconocidos internacionalmente
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all border-2 border-gray-100 hover:border-red-200 group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {tech.logo}
                </div>
                <div className="text-center font-semibold text-gray-700 group-hover:text-red-600 transition-colors">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl mb-12 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                  <summary className="cursor-pointer p-6 hover:bg-gray-750 transition-colors list-none flex items-center justify-between">
                    <h3 className="font-bold text-lg pr-4">
                      {faq.q}
                    </h3>
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 overflow-hidden gradient-brand">
        {/* Grid pattern with crosses at intersections */}
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
          <defs>
            {/* Layer 1: Grid pattern with light gray lines */}
            <pattern id="consul-cta-grid-lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            </pattern>

            {/* Layer 2: Crosses on the same axes as grid lines - 16px total (±8) */}
            <pattern id="consul-cta-grid-crosses" width="80" height="80" patternUnits="userSpaceOnUse">
              {/* Cross at (0,0) */}
              <line x1="-8" y1="0" x2="8" y2="0" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <line x1="0" y1="-8" x2="0" y2="8" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              {/* Cross at (80,0) */}
              <line x1="72" y1="0" x2="88" y2="0" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <line x1="80" y1="-8" x2="80" y2="8" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              {/* Cross at (0,80) */}
              <line x1="-8" y1="80" x2="8" y2="80" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <line x1="0" y1="72" x2="0" y2="88" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              {/* Cross at (80,80) */}
              <line x1="72" y1="80" x2="88" y2="80" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
              <line x1="80" y1="72" x2="80" y2="88" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#consul-cta-grid-lines)" />
          <rect width="100%" height="100%" fill="url(#consul-cta-grid-crosses)" />
        </svg>

        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl mb-6 text-white">
                Transformemos tu Visión en Realidad
              </h2>
              <p className="text-xl text-white/90">
                Selecciona los servicios de consultoría que necesitas y te contactaremos para diseñar una estrategia integral
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Gobierno de TI y Corporativo",
                  "Oficina de Gestión de Proyectos (PMO)",
                  "Consultoría Estratégica de TI",
                  "Gestión de Compliance y Cumplimiento",
                  "Gestión del Cambio Organizacional",
                  "Arquitectura Empresarial",
                  "Optimización de Procesos",
                  "Evaluación de Madurez y Benchmarking",
                  "Gestión de Portafolio de Proyectos",
                  "Gestión de Proveedores y Vendors"
                ].map((service, idx) => (
                  <label key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                      className="mt-1 w-5 h-5 rounded border-white/30 text-red-600 focus:ring-red-500 focus:ring-offset-0 bg-white/10"
                    />
                    <span className="text-white group-hover:text-red-200 transition-colors leading-snug">
                      {service}
                    </span>
                  </label>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 px-10 py-4 bg-white text-red-600 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
                >
                  Solicitar Consultoría
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="mt-4 text-white/70 text-sm">
                  Respuesta en menos de 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
