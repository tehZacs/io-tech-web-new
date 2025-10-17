import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * Individual Service Page: Desarrollo de Software
 */
export const DesarrolloSoftwarePage = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const challenges = [
    {
      title: 'Sistemas Legados Obsoletos',
      description: 'Aplicaciones antiguas que limitan la innovación y generan altos costos de mantenimiento',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: 'Falta de Integración',
      description: 'Sistemas aislados que no se comunican entre sí, generando silos de información',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Procesos Manuales Repetitivos',
      description: 'Tareas operativas que consumen tiempo y recursos humanos valiosos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Time-to-Market Lento',
      description: 'Ciclos de desarrollo largos que retrasan la innovación y respuesta al mercado',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Deuda Técnica Acumulada',
      description: 'Código obsoleto, falta de documentación y arquitectura no escalable',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Calidad y Testing Insuficiente',
      description: 'Bugs en producción, falta de cobertura de pruebas automatizadas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const verticals = [
    {
      title: 'Desarrollo de Software a Medida',
      description: 'Aplicaciones web empresariales con React.js, Next.js (SSR/SSG), Angular 17+, Vue 3 (Composition API). Backend: .NET Core 8, Java Spring Boot 3.x, Node.js (Express, NestJS), Python (Django, FastAPI). Mobile: Flutter para iOS/Android nativos, React Native, Swift/Kotlin nativos. Desktop: Electron, .NET MAUI. Arquitectura cloud-native desde el diseño: serverless (Lambda, Azure Functions), microservicios con Service Mesh (Istio), event-driven con Kafka/RabbitMQ. Frontend accesible WCAG 2.1 AA, responsive mobile-first, PWA. Backend con patrones DDD, CQRS, Event Sourcing según complejidad. Integración continua desde sprint 1.',
    },
    {
      title: 'Modernización de Aplicaciones Legadas',
      description: 'Migración estratégica de sistemas monolíticos (.NET Framework, Java EE, COBOL, Visual Basic 6, PowerBuilder, Delphi) hacia arquitecturas modernas. Aplicamos Strangler Fig Pattern para migración incremental sin downtime: encapsulación de legacy con APIs, extracción de módulos por fases, reemplazo gradual. Refactoring de código: eliminación de deuda técnica, implementación de tests unitarios (coverage >80%), documentación automática con Swagger/OpenAPI. Migración de bases de datos: Oracle → PostgreSQL, SQL Server → Azure SQL, mainframe VSAM → NoSQL. Modernización UI: de JSP/ASP.NET Web Forms → React/Angular SPA. Replatforming: on-premise → Azure/AWS con PaaS (App Service, Elastic Beanstalk). Fases típicas: 3-6 meses análisis y PoC, 12-24 meses migración completa según complejidad.',
    },
    {
      title: 'Integración de Sistemas Empresariales',
      description: 'APIs RESTful con OpenAPI 3.0, GraphQL (Apollo Server/Client), gRPC para comunicación interna de alto rendimiento. ESB/middleware enterprise: IBM Integration Bus (IIB), MuleSoft Anypoint, Red Hat Fuse (Apache Camel), Dell Boomi. Conectores pre-certificados: SAP (RFC/BAPI, IDoc, OData), Oracle EBS/PeopleSoft, Salesforce (REST/SOAP), Microsoft Dynamics 365, Workday, ServiceNow. Integración ERP legado: adaptadores custom para AS/400, JD Edwards, SAGE. Patrones: API Gateway (Kong, Apigee), Event-Driven Architecture con Kafka/Azure Event Hubs, webhooks para notificaciones en tiempo real. Seguridad OAuth 2.0, JWT, mTLS, rate limiting. Mapeo y transformación de datos (ETL/ELT), enriquecimiento, validación de schemas. Monitoreo de integraciones con distributed tracing (Jaeger, Zipkin).',
    },
    {
      title: 'DevOps, CI/CD y SRE',
      description: 'Pipelines CI/CD empresariales con Azure DevOps (YAML pipelines), GitHub Actions, GitLab CI, Jenkins (Groovy pipelines). Infraestructura como código: Terraform para multi-cloud (AWS, Azure, GCP), Ansible para configuración, Pulumi con TypeScript. Containerización: Docker multi-stage builds optimizados, Docker Compose para dev local. Orquestación Kubernetes (AKS, EKS, GKE): Helm charts, Kustomize, ArgoCD para GitOps, Flux CD. Service Mesh: Istio/Linkerd para traffic management, observability, security (mTLS automático). Secrets management: Azure Key Vault, AWS Secrets Manager, HashiCorp Vault. Monitoreo SRE: Prometheus + Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), Datadog, New Relic. Alerting con PagerDuty. SLI/SLO/SLA tracking, error budgets, blameless postmortems. Chaos Engineering con Chaos Monkey, Gremlin.',
    },
    {
      title: 'Automatización RPA (Robotic Process Automation)',
      description: 'Automatización inteligente de procesos back-office con UiPath (ciudadano desarrollador, orquestador enterprise, AI Computer Vision), Automation Anywhere (IQ Bot para documentos, Control Room), Blue Prism (digital workforce), Microsoft Power Automate (integración nativa Office 365/Dynamics). Casos de uso financiero/corporativo: conciliación bancaria, procesamiento de facturas (OCR + ML para extracción), alta de usuarios en sistemas múltiples, generación automática de reportes regulatorios, scraping web de información pública. Bots attended (asistencia a usuarios) vs unattended (ejecución 24/7). Integración con IA: reconocimiento de documentos (Azure Form Recognizer, AWS Textract), NLP para clasificación de emails. ROI típico: 30-50% reducción de tiempo operativo, <1 año payback. Cumplimiento SOX, auditoría de logs de bots.',
    },
    {
      title: 'Testing, QA y Aseguramiento de Calidad',
      description: 'Testing multinivel certificado ISTQB Platinum Partner. Pruebas unitarias: JUnit 5, NUnit, Jest, Pytest con cobertura >80% (medición con SonarQube). Pruebas de integración: Postman/Newman para APIs, Testcontainers para integración con bases de datos/servicios reales. E2E testing: Selenium WebDriver, Cypress (visual testing integrado), Playwright (soporte multi-browser), Appium para mobile. Performance testing: JMeter, Gatling, k6 (load, stress, spike tests). Security testing: OWASP ZAP, Burp Suite, Snyk para dependencias vulnerables, Trivy para container scanning. Accesibility testing: axe-core, WAVE, Lighthouse audits (PWA, SEO, performance). Test automation frameworks: Robot Framework, Cucumber (BDD con Gherkin). Shift-left testing: pruebas desde sprint 0. Visual regression con Percy, Chromatic. Continuous testing en pipelines CI/CD con quality gates (fallar build si coverage <80%, bugs críticos abiertos).',
    },
    {
      title: 'Arquitectura de Software Enterprise',
      description: 'Diseño de soluciones escalables, resilientes y mantenibles. Arquitecturas: microservicios, event-driven, serverless, hexagonal (ports & adapters), CQRS + Event Sourcing para dominios complejos. Patrones cloud-native: Circuit Breaker (Resilience4j, Polly), Retry con backoff exponencial, Bulkhead para aislamiento de recursos, API Gateway (rate limiting, caching). DDD (Domain-Driven Design) para modelado de negocio complejo: agregados, entidades, value objects, bounded contexts. Clean Architecture, SOLID principles. Arquitectos certificados: AWS Solutions Architect Professional, Azure Solutions Architect Expert, Google Professional Cloud Architect. Documentación técnica: ADRs (Architecture Decision Records), diagramas C4 Model, sequence diagrams, ER diagrams. Revisiones de arquitectura trimestrales, refactoring continuo para evitar deuda técnica.',
    },
    {
      title: 'Desarrollo Low-Code/No-Code Enterprise',
      description: 'Aceleración de soluciones con plataformas enterprise low-code: Microsoft Power Platform (Power Apps canvas/model-driven, Power Automate, Power BI, Dataverse), Mendix (Siemens, para aplicaciones core complejas), OutSystems (full-stack con capacidades de extensión custom), Appian (BPM + case management), ServiceNow App Engine. Casos de uso: aplicaciones de workflow interno (aprobaciones, solicitudes), portales de autoservicio, dashboards operativos en tiempo real, apps móviles para campo (offline-first). Integración con sistemas core mediante conectores estándar o APIs custom. Governance: CoE (Center of Excellence) para estándares, seguridad, ALM (Application Lifecycle Management). Ideal para PoCs rápidos (2-4 semanas MVP), luego industrialización. Balance entre velocidad (low-code) y flexibilidad (código custom cuando se requiere).',
    },
  ];

  const benefits = [
    {
      title: 'Metodologías Ágiles Certificadas',
      description: 'Scrum, Kanban, SAFe con equipos certificados. CMMI DEV Nivel 5 garantiza calidad en procesos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Fábrica de Software Escalable',
      description: 'Equipos multidisciplinarios que escalan según demanda del proyecto',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Stack Tecnológico Moderno',
      description: 'Experiencia en últimas tecnologías: cloud-native, microservicios, serverless, JAMstack',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: 'Garantía de Calidad ISTQB',
      description: 'Partner Platinum ISTQB con ingenieros QA certificados, cobertura de testing >80%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const technologies = [
    { name: 'React / Next.js', logo: '⚛️' },
    { name: '.NET Core', logo: '🟣' },
    { name: 'Node.js', logo: '🟢' },
    { name: 'Java Spring', logo: '☕' },
    { name: 'Flutter', logo: '📱' },
    { name: 'Docker/K8s', logo: '🐳' },
    { name: 'AWS/Azure', logo: '☁️' },
    { name: 'PostgreSQL', logo: '🐘' },
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar una aplicación a medida?',
      answer: 'Depende de la complejidad. Un MVP (Producto Mínimo Viable) toma 2-3 meses. Aplicaciones empresariales complejas pueden tomar 6-12 meses. Trabajamos con sprints de 2 semanas para entregas incrementales.',
    },
    {
      question: '¿Qué metodología de desarrollo usan?',
      answer: 'Utilizamos metodologías ágiles (Scrum/Kanban) certificadas por CMMI DEV Nivel 5. Incluye daily standups, sprint planning, retrospectivas y demos con stakeholders cada 2 semanas.',
    },
    {
      question: '¿Ofrecen modernización de sistemas legados sin reescribir todo?',
      answer: 'Sí, aplicamos estrategias de modernización incremental: strangler pattern, encapsulación de APIs, migración de módulos por fases. Minimizamos riesgos y mantenemos operaciones continuas.',
    },
    {
      question: '¿Cómo garantizan la calidad del software?',
      answer: 'Somos ISTQB Platinum Partner. Aplicamos testing en múltiples niveles: unitario, integración, E2E, carga, seguridad. Cobertura de código >80%, CI/CD con gates de calidad, code review obligatorio.',
    },
    {
      question: '¿Qué incluye el servicio post-lanzamiento?',
      answer: 'Soporte y mantenimiento continuo: corrección de bugs, actualizaciones de seguridad, optimización de rendimiento, evolución de features. SLA con tiempos de respuesta definidos.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/img/services/software-001.jpg"
            alt="Software Development"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated overlay with rotating gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-blue-950/90 to-indigo-950/95 animate-gradient-slow"></div>

        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link>
              <span className="mx-2 text-white/60">/</span>
              <Link to="/servicios" className="text-white/80 hover:text-white transition-colors">Servicios</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white">Desarrollo de Software</span>
            </nav>
            <h1 className="font-display font-bold text-4xl lg:text-display-lg mb-6 text-white">
              Desarrollo de Software
            </h1>
            <p className="text-2xl text-blue-300 font-semibold mb-6">
              De Legacy a Cloud-Native: Fábrica de Software CMMI DEV/5
            </p>
            <p className="text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed">
              Desarrollo de soluciones a medida, modernización de aplicaciones legadas e integración de sistemas empresariales.
              Más de 200 desarrolladores, arquitectos y QA engineers certificados. CMMI DEV Nivel 5 e ISTQB Platinum Partner.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Solicitar Evaluación Gratuita
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_50%)]"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Nuestra fábrica de software combina metodologías ágiles certificadas (CMMI DEV Nivel 5) con las tecnologías
                más modernas para crear soluciones empresariales robustas, escalables y mantenibles.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Con +200 desarrolladores, arquitectos, QA engineers y DevOps specialists certificados, transformamos ideas
                en productos digitales de alto impacto. Desde MVPs hasta sistemas empresariales complejos, aplicamos
                las mejores prácticas de ingeniería de software.
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 my-8">
                <p className="text-xl font-semibold text-indigo-900 italic">
                  "Transformamos sistemas legados en arquitecturas modernas cloud-native, sin interrumpir tus operaciones críticas.
                  Entregas incrementales cada 2 semanas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-white text-center">
            Retos que Resolvemos
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Enfrentamos los desafíos más comunes en desarrollo y modernización de software
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 border-2 border-gray-700 rounded-xl p-6 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
              >
                <div className="text-indigo-400 mb-4">{challenge.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3 text-white">
                  {challenge.title}
                </h3>
                <p className="text-gray-300">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution - Verticals */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full fill-gray-100/50 stroke-gray-200/60"
          >
            <defs>
              <pattern id="solution-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#solution-grid)"></rect>
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08),transparent_60%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-gray-900 text-center">
            Nuestra Solución
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Servicios integrales de desarrollo de software empresarial
          </p>
          <div className="max-w-5xl mx-auto space-y-4">
            {verticals.map((vertical, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-indigo-500 hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex items-center justify-between hover:bg-indigo-50 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    {vertical.title}
                  </span>
                  <svg className="w-5 h-5 text-indigo-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-4 text-gray-700 leading-relaxed">
                  {vertical.description}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-white relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(99,102,241,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(168,85,247,0.15),transparent_40%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-12 text-gray-900 text-center">
            Beneficios Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all"
              >
                <div className="text-indigo-600 mb-4">{benefit.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full fill-gray-100/50 stroke-gray-200/50"
          >
            <defs>
              <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M.5 60V.5H60" fill="none" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)"></rect>
          </svg>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(99,102,241,0.06),transparent_50%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-gray-900 text-center">
            Stack Tecnológico
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Experiencia en tecnologías modernas y frameworks enterprise
          </p>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl px-8 py-6 hover:border-indigo-500 hover:shadow-lg hover:bg-white transition-all"
              >
                <div className="text-4xl mb-2 text-center">{tech.logo}</div>
                <div className="font-semibold text-gray-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-white text-center">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre desarrollo de software
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-800/50 border-2 border-gray-700 rounded-xl overflow-hidden hover:border-indigo-500 transition-colors"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-gray-800/80 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-indigo-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-brand relative overflow-hidden">
        {/* Grid pattern with crosses at intersections */}
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-20">
          <defs>
            {/* Layer 1: Grid pattern with light gray lines */}
            <pattern id="dev-cta-grid-lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            </pattern>

            {/* Layer 2: Crosses on the same axes as grid lines - 16px total (±8) */}
            <pattern id="dev-cta-grid-crosses" width="80" height="80" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#dev-cta-grid-lines)" />
          <rect width="100%" height="100%" fill="url(#dev-cta-grid-crosses)" />
        </svg>

        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              ¿Listo para Transformar tu Software?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Agenda una sesión con nuestros arquitectos de software certificados
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-bold text-xl mb-6">¿Qué servicios te interesan?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {[
                  'Desarrollo de aplicación a medida',
                  'Modernización de sistema legado',
                  'Integración de sistemas',
                  'Automatización RPA',
                  'DevOps y CI/CD',
                  'Testing y QA',
                ].map((service, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer hover:text-indigo-300 transition-colors">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-white/30"
                      checked={selectedServices.includes(service)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedServices([...selectedServices, service]);
                        } else {
                          setSelectedServices(selectedServices.filter(s => s !== service));
                        }
                      }}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
              <button
                onClick={() => {
                  const servicesText = selectedServices.length > 0
                    ? `Estoy interesado en los siguientes servicios de Desarrollo de Software:\n\n${selectedServices.map(s => `- ${s}`).join('\n')}`
                    : 'Me gustaría recibir información sobre sus servicios de Desarrollo de Software.';
                  navigate(`/contacto?services=${encodeURIComponent(servicesText)}`);
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Solicitar Consultoría
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
