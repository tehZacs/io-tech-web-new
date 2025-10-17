import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * Individual Service Page: Experiencia Digital
 */
export const ExperienciaDigitalPage = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);

  const challenges = [
    {
      title: 'Silos de Información de Cliente',
      description: 'Datos fragmentados en múltiples sistemas sin vista unificada 360° del cliente',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Experiencia Cliente Inconsistente',
      description: 'Omnicanalidad deficiente: experiencias diferentes en web, móvil, tienda física y call center',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Contact Centers Ineficientes',
      description: 'Tiempos de espera largos, baja resolución en primer contacto (FCR), agentes sin contexto',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'ERPs Obsoletos y Complejos',
      description: 'Sistemas ERP legacy difíciles de usar, procesos manuales, falta de integración',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Interfaces No Intuitivas',
      description: 'UX/UI deficiente: aplicaciones difíciles de navegar, alta curva de aprendizaje, baja adopción',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Falta de Personalización',
      description: 'Marketing masivo sin segmentación, ofertas irrelevantes, comunicación no personalizada',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
  ];

  const verticals = [
    {
      title: 'Plataformas CRM Enterprise',
      description: 'Implementación y optimización de CRM líderes: Salesforce Sales Cloud, Service Cloud, Marketing Cloud (Journey Builder, Einstein AI), Microsoft Dynamics 365 Customer Engagement (Sales, Customer Service, Field Service, Marketing), Oracle CX Cloud (Sales, Service, Commerce), HubSpot CRM (Starter, Professional, Enterprise), Zoho CRM Plus, SAP Customer Experience (C/4HANA). Vista 360° del cliente unificando ventas, marketing, servicio, comercio. Automatización de flujos de trabajo: lead scoring, nurturing campaigns, case routing automático. Integraciones nativas con ERP, e-commerce, redes sociales (LinkedIn Sales Navigator, WhatsApp Business API). Mobile CRM para equipos en campo. Analytics predictivo con IA: churn prediction, next best action, sentiment analysis. Personalizaciones custom con Apex (Salesforce), Power Platform (Dynamics), Oracle APEX.',
    },
    {
      title: 'Contact Center Inteligente y Omnicanal',
      description: 'Soluciones CCaaS (Contact Center as a Service) cloud-native: Genesys Cloud CX (ACD inteligente, IVR conversacional, workforce management), Amazon Connect (integración AWS, analytics en tiempo real, machine learning), Five9 (omnichannel routing, predictive dialer, quality management), NICE CXone (analytics, WFO, AI-powered automation), Avaya OneCloud CCaaS, Cisco Webex Contact Center. Omnicanalidad verdadera: voz, email, chat web, WhatsApp, Facebook Messenger, Instagram, SMS, video. Chatbots con NLU (Natural Language Understanding): Amazon Lex, Google Dialogflow, Microsoft Bot Framework, IBM Watson Assistant. Análisis de sentimiento en tiempo real. Speech analytics con transcripción automática (Nuance, Google Speech-to-Text). Routing inteligente basado en skills, prioridad, SLA. Workforce Management (WFM): forecasting, scheduling óptimo de agentes. Quality Management: grabación de llamadas 100%, evaluación automática, coaching. Dashboards en tiempo real para supervisores (Grafana, Power BI embedded).',
    },
    {
      title: 'Sistemas ERP y Gestión Empresarial',
      description: 'Implementación, upgrade y optimización de ERPs enterprise: SAP S/4HANA (on-premise, cloud, RISE with SAP), módulos FI/CO (finanzas), MM (materiales), SD (ventas), PP (producción), HCM/SuccessFactors (recursos humanos). Oracle ERP Cloud (Fusion): financials, procurement, project management, supply chain. Microsoft Dynamics 365 Finance & Operations (antes AX): manufactura, retail, distribución. Odoo Enterprise (open-source): ERP modular escalable para PYMES (CRM, ventas, inventario, contabilidad, MRP). NetSuite ERP (Oracle): cloud-native para medianas empresas. Infor CloudSuite: soluciones verticales (manufactura, hospitality, healthcare). Integraciones B2B/EDI para supply chain (ANSI X12, EDIFACT). Migraciones legacy: Oracle EBS → Oracle Cloud, SAP ECC → S/4HANA (brownfield/greenfield). Customizaciones: ABAP (SAP), PL/SQL (Oracle), X++ (Dynamics), Python (Odoo). BI embebido: SAP Analytics Cloud, Oracle Analytics, Power BI.',
    },
    {
      title: 'Diseño UX/UI y Customer Experience',
      description: 'Diseño centrado en usuario (UCD) con metodología Design Thinking: empatía, definición, ideación, prototipado, testing. Research cuantitativo y cualitativo: encuestas NPS/CSAT/CES, entrevistas en profundidad, pruebas de usabilidad moderadas/no moderadas, card sorting, tree testing, eye tracking. Personas y customer journey maps detallados identificando pain points, momentos de verdad (moments of truth), emociones en cada touchpoint. Arquitectura de información (IA): site maps, wireframes low-fi/high-fi con Figma, Adobe XD, Sketch. Prototipado interactivo clickeable para validación temprana. Design systems corporativos: atomic design (átomos, moléculas, organismos), component libraries reutilizables (Storybook, Zeroheight), design tokens para consistencia cross-platform. UI design: interfaces accesibles WCAG 2.1 AA/AAA, responsive mobile-first, microinteracciones con Framer Motion, Lottie animations. Herramientas: Figma (colaborativo), Adobe Creative Suite, InVision, Miro (workshops remotos). Pruebas A/B multivariadas con Google Optimize, Optimizely, VWO. Heatmaps y session recordings con Hotjar, FullStory, Microsoft Clarity. Métricas UX: task success rate, time on task, error rate, System Usability Scale (SUS).',
    },
    {
      title: 'Marketing Automation y Personalización',
      description: 'Plataformas de automatización marketing (MAP): HubSpot Marketing Hub (workflows, email marketing, landing pages, SEO), Marketo Engage (Adobe): lead nurturing multicanal, account-based marketing (ABM), Salesforce Marketing Cloud (Journey Builder para customer journeys complejos, Email Studio, Mobile Studio, Advertising Studio), Oracle Eloqua (B2B enterprise), Mailchimp (PYMES). Email marketing avanzado: segmentación dinámica, A/B testing, personalización con merge tags, responsive templates, deliverability optimization (SPF, DKIM, DMARC). Lead scoring predictivo con machine learning. Nurturing campaigns con contenido personalizado según etapa del buyer journey (TOFU, MOFU, BOFU). Web personalization: contenido dinámico según industria, rol, comportamiento previo (Optimizely, Dynamic Yield). Motores de recomendación: collaborative filtering, content-based, híbridos (Amazon Personalize, Azure Personalizer). CDP (Customer Data Platform) para unificar datos first-party: Segment, mParticle, Adobe Real-Time CDP, Salesforce CDP. Integraciones: Google Analytics 4, Google Tag Manager, Meta Pixel, LinkedIn Insight Tag. Atribución multicanal: first-touch, last-touch, linear, time-decay, data-driven (algorítmica).',
    },
    {
      title: 'E-commerce y Comercio Digital',
      description: 'Plataformas e-commerce enterprise: Salesforce Commerce Cloud (B2C, B2B): Einstein Product Recommendations, Order Management, Endless Aisle. SAP Commerce Cloud (antes Hybris): omnichannel commerce, configuración de productos complejos (CPQ), integración nativa con SAP ERP. Adobe Commerce (Magento): open-source escalable, B2B con cotizaciones, múltiples tiendas/idiomas/monedas. Shopify Plus: commerce-as-a-service para marcas D2C (direct-to-consumer), Shopify Flow para automatización, Hydrogen (headless React framework). BigCommerce Enterprise: APIs robustas, integraciones nativas con ERPs (NetSuite, Acumatica), multi-storefront. VTEX: plataforma latinoamericana multi-tenant, marketplace nativo, OMS (Order Management System). Headless commerce: desacoplamiento front-end/back-end con Next.js + Strapi CMS, Contentful, Sanity. Pagos: integraciones con pasarelas (Stripe, PayPal, MercadoPago, Conekta México), wallets digitales (Apple Pay, Google Pay), BNPL (Buy Now Pay Later: Affirm, Klarna). Logística: integraciones con 3PLs (Fulfillment by Amazon, ShipStation, Shippo), seguimiento en tiempo real. Seguridad: PCI-DSS Level 1 compliance, 3D Secure 2.0, fraud detection (Signifyd, Riskified).',
    },
    {
      title: 'Portales de Autoservicio y Comunidades',
      description: 'Portales web de autoservicio B2C y B2B: Salesforce Experience Cloud (antes Community Cloud): portales de clientes/partners/empleados, case deflection con knowledge base, gamificación. Microsoft Power Pages (antes Power Apps Portals): integración nativa con Dynamics 365, autenticación Azure AD/B2C. ServiceNow Customer Service Management: knowledge base con IA, virtual agent, case management. Liferay DXP: portal enterprise open-source, personalization engine, integración con ECM (gestión documental). Comunidades online: foros (Discourse, Vanilla Forums), Q&A (Stack Overflow for Teams), social listening. Knowledge management: bases de conocimiento con búsqueda semántica (Elasticsearch, Algolia), artículos multiidioma, versionado, analytics de contenido más consultado. Chatbots de autoservicio: FAQs automatizadas, resolución de casos simples sin intervención humana (reducción de tickets 30-40%). Portales B2B para partners: onboarding, training, deal registration, MDF (Market Development Funds), POS (Proof of Sale), co-op marketing. Self-service analytics: dashboards interactivos para clientes (ventas, inventario, órdenes, facturación).',
    },
    {
      title: 'Voice of Customer (VoC) y Gestión de Feedback',
      description: 'Programas VoC (Voice of Customer) para capturar, analizar y actuar sobre feedback: encuestas multicanal (email, SMS, in-app, web intercept, QR codes en tienda física). Métricas clave: NPS (Net Promoter Score: promotores, pasivos, detractores), CSAT (Customer Satisfaction), CES (Customer Effort Score), churn risk score. Plataformas VoC enterprise: Qualtrics XM (Experience Management): CX, EX (Employee Experience), text analytics con NLU, closed-loop follow-up automático. Medallia: real-time alerts, role-based dashboards, predictive analytics. SurveyMonkey Enterprise, Typeform. Análisis de sentimiento con NLP: procesamiento de comentarios abiertos, identificación de temas emergentes (topic modeling), escalamiento automático de feedback negativo. Social listening: monitoreo de menciones en redes sociales (Brandwatch, Sprout Social, Hootsuite Insights), análisis de tendencias, crisis management. Review management: agregación de reseñas de múltiples fuentes (Google, Facebook, Trustpilot, Amazon), respuesta centralizada, análisis de competencia. Customer advisory boards (CAB) y focus groups virtuales. Integración con CRM para closed-loop: casos automáticos desde encuestas, seguimiento de acciones correctivas.',
    },
  ];

  const benefits = [
    {
      title: 'Vista 360° del Cliente',
      description: 'Unificación de datos de todas las interacciones: historial de compras, servicio, marketing, redes sociales en plataforma única',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: 'Omnicanalidad Real',
      description: 'Experiencia consistente y contextual en todos los canales: web, móvil, tienda, call center, redes sociales, WhatsApp',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Automatización Inteligente',
      description: 'IA y ML para automatizar procesos: lead scoring, routing inteligente, chatbots, recomendaciones personalizadas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Mejora Continua Basada en Datos',
      description: 'Analytics, dashboards en tiempo real, NPS/CSAT, A/B testing para optimización continua de experiencia',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const technologies = [
    { name: 'Salesforce', logo: '☁️' },
    { name: 'Microsoft Dynamics', logo: '🔷' },
    { name: 'SAP', logo: '🔵' },
    { name: 'Oracle CX', logo: '🔴' },
    { name: 'HubSpot', logo: '🧡' },
    { name: 'Genesys', logo: '📞' },
    { name: 'Amazon Connect', logo: '📱' },
    { name: 'Adobe Experience', logo: '🎨' },
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo toma implementar un CRM enterprise como Salesforce o Dynamics 365?',
      answer: 'Depende del alcance y complejidad. Implementación básica (Sales Cloud, configuración estándar): 2-3 meses. Implementación completa multi-cloud (Sales + Service + Marketing, integraciones con ERP, migraciones de datos, customizaciones): 6-12 meses. Incluye: discovery workshop, diseño de solución, configuración/desarrollo, migraciones de datos (ETL), pruebas UAT, capacitación usuarios, go-live y soporte post-implementación. Utilizamos metodologías ágiles con entregas incrementales cada sprint.',
    },
    {
      question: '¿Qué beneficios concretos aporta un Contact Center omnicanal vs tradicional?',
      answer: 'Contact center tradicional: solo voz (teléfono), datos aislados, sin contexto histórico, routing básico por colas. Omnicanal moderno: voz + chat + email + WhatsApp + redes sociales + video, vista unificada 360°, routing inteligente con IA (skills-based, prioridad por SLA, cliente VIP), chatbots para deflección 30-40%, analytics en tiempo real, workforce management optimizado. Mejoras típicas: +25% resolución en primer contacto (FCR), -30% tiempo promedio de atención (AHT), +15 puntos NPS, -20% tasa de abandono.',
    },
    {
      question: '¿Pueden migrar nuestro ERP legacy (Oracle EBS, SAP ECC) a la nube?',
      answer: 'Sí, somos especialistas en migraciones ERP complejas. Oracle EBS → Oracle Cloud ERP (Fusion): lift-and-shift a OCI o reimplementación (greenfield/brownfield). SAP ECC → S/4HANA: conversión técnica (brownfield: System Conversion) o nueva implementación (greenfield: New Implementation), opción RISE with SAP (BTP incluido). Microsoft Dynamics AX → Dynamics 365 Finance & Operations. Proceso: assessment inicial (fit-gap analysis), diseño target architecture, data migration (ETL con validación), testing exhaustivo (integración, performance, UAT), cutover planificado (big bang o phased), hypercare post go-live (4-8 semanas). Duración típica: 12-18 meses para ERPs enterprise complejos.',
    },
    {
      question: '¿Ofrecen diseño UX/UI para aplicaciones móviles y web?',
      answer: 'Sí, equipos especializados de UX researchers, UI designers, front-end developers. Proceso: research inicial (user interviews, encuestas, analytics existente), definición de personas y journey maps, arquitectura de información (IA), wireframes low-fidelity, prototipado interactivo high-fidelity en Figma/Adobe XD, pruebas de usabilidad moderadas/no moderadas (5-8 usuarios por iteración), iteración de diseños, design system corporativo (component library, design tokens), UI design final (mobile-first responsive), desarrollo front-end (React, React Native, Flutter), pruebas A/B post-lanzamiento. Accesibilidad WCAG 2.1 AA garantizada. Timeline típico: 8-12 semanas para MVP, 4-6 meses para aplicación compleja.',
    },
    {
      question: '¿Qué ROI se puede esperar de un proyecto de transformación digital CX?',
      answer: 'ROI varía según industria y madurez inicial. Beneficios cuantificables típicos: +20-30% eficiencia operativa (automatización, reducción de tareas manuales), +15-25% ingresos por cross-sell/up-sell (recomendaciones personalizadas, nurturing automatizado), -25-40% costos de servicio (deflección a autoservicio, chatbots, FAQs), +10-20 puntos NPS, -15-30% churn (retención mejorada por experiencia superior). Payback típico: 12-24 meses. Intangibles: mejora de marca, employee satisfaction (herramientas modernas), agilidad competitiva. Métricas de éxito: customer lifetime value (CLV), cost per acquisition (CPA), customer acquisition cost (CAC), ratio CAC/CLV >3:1.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/img/services/services-001.jpg"
            alt="Digital Experience"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated overlay with rotating gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/95 via-yellow-950/90 to-amber-950/95 animate-gradient-slow"></div>

        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link>
              <span className="mx-2 text-white/60">/</span>
              <Link to="/servicios" className="text-white/80 hover:text-white transition-colors">Servicios</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white">Experiencia Digital</span>
            </nav>
            <h1 className="font-display font-bold text-4xl lg:text-display-lg mb-6 text-white">
              Experiencia Digital
            </h1>
            <p className="text-2xl text-amber-300 font-semibold mb-6">
              CRM, Contact Center, ERP y UX/UI: Transformación End-to-End
            </p>
            <p className="text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed">
              Plataformas CRM enterprise (Salesforce, Dynamics 365, Oracle), contact centers omnicanal inteligentes,
              sistemas ERP (SAP, Oracle, Odoo), diseño UX/UI, e-commerce y marketing automation. Vista 360° del cliente
              con experiencias personalizadas en todos los touchpoints.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-lg font-bold text-lg hover:bg-amber-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(245,158,11,0.12),transparent_50%)]"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Transformamos la experiencia de tus clientes con soluciones integrales que abarcan todo el ciclo de vida:
                desde la captación (marketing automation, CRM) hasta el servicio postventa (contact center omnicanal, portales
                de autoservicio), optimizando operaciones internas con ERPs modernos.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Más de 100 especialistas certificados en plataformas líderes: Salesforce (Sales, Service, Marketing Cloud),
                Microsoft Dynamics 365, SAP S/4HANA, Oracle CX/ERP, Genesys, Amazon Connect. Diseñadores UX/UI, arquitectos
                de soluciones, desarrolladores front-end/back-end y consultores funcionales trabajando en equipo para entregar
                experiencias excepcionales que generan lealtad, incrementan ventas y reducen costos operativos.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
                <p className="text-xl font-semibold text-amber-900 italic">
                  "De silos de información a vista 360°: conectamos todos los touchpoints del customer journey
                  para ofrecer experiencias omnicanal personalizadas que superan expectativas."
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
            Enfrentamos los desafíos más comunes en experiencia de cliente y transformación digital
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 border-2 border-gray-700 rounded-xl p-6 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all"
              >
                <div className="text-amber-400 mb-4">{challenge.icon}</div>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_60%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-gray-900 text-center">
            Nuestra Solución
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Cobertura completa del ecosistema de experiencia digital y sistemas empresariales
          </p>
          <div className="max-w-5xl mx-auto space-y-4">
            {verticals.map((vertical, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-amber-500 hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex items-center justify-between hover:bg-amber-50 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    {vertical.title}
                  </span>
                  <svg className="w-5 h-5 text-amber-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-white relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(251,191,36,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(245,158,11,0.15),transparent_40%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-12 text-gray-900 text-center">
            Beneficios Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 transition-all"
              >
                <div className="text-amber-600 mb-4">{benefit.icon}</div>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(245,158,11,0.06),transparent_50%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-gray-900 text-center">
            Plataformas y Partners
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Alianzas con líderes globales en CRM, ERP, Contact Center y Customer Experience
          </p>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl px-8 py-6 hover:border-amber-500 hover:shadow-lg hover:bg-white transition-all"
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
            Resolvemos tus dudas sobre transformación digital y experiencia de cliente
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-800/50 border-2 border-gray-700 rounded-xl overflow-hidden hover:border-amber-500 transition-colors"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-gray-800/80 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-amber-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <pattern id="exp-cta-grid-lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            </pattern>

            {/* Layer 2: Crosses on the same axes as grid lines - 16px total (±8) */}
            <pattern id="exp-cta-grid-crosses" width="80" height="80" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#exp-cta-grid-lines)" />
          <rect width="100%" height="100%" fill="url(#exp-cta-grid-crosses)" />
        </svg>

        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6 text-white">
              ¿Listo para Transformar tu Experiencia Digital?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Agenda una sesión con nuestros expertos en CX, CRM, ERP y UX/UI
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-bold text-xl mb-6 text-white">¿Qué servicios te interesan?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {[
                  'Implementación CRM (Salesforce, Dynamics, Oracle)',
                  'Contact Center omnicanal inteligente',
                  'ERP (SAP, Oracle, Odoo)',
                  'Diseño UX/UI y customer experience',
                  'E-commerce y comercio digital',
                  'Marketing automation y personalización',
                ].map((service, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer text-white hover:text-amber-300 transition-colors">
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
                    ? `Estoy interesado en los siguientes servicios de Experiencia Digital:\n\n${selectedServices.map(s => `- ${s}`).join('\n')}`
                    : 'Me gustaría recibir información sobre sus servicios de Experiencia Digital.';
                  navigate(`/contacto?services=${encodeURIComponent(servicesText)}`);
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-white rounded-lg font-bold text-lg hover:bg-amber-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
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
