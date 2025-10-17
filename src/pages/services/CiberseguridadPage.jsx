import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const CiberseguridadPage = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);

  const challenges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Amenazas Sofisticadas en Evolución",
      desc: "Ataques de ransomware dirigidos y APTs (Advanced Persistent Threats). Actores estatales y crimen organizado con recursos ilimitados."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Cumplimiento Regulatorio Complejo",
      desc: "Múltiples frameworks y normativas simultáneas. Sanciones severas por incumplimiento o brechas de datos."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Superficie de Ataque Expandida",
      desc: "Trabajo remoto, IoT y cloud multiplican vectores de vulnerabilidad. Perímetro tradicional obsoleto ante arquitecturas distribuidas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Cadena de Suministro Vulnerable",
      desc: "Dependencia de terceros sin visibilidad de su seguridad. Ataques dirigidos a proveedores como puerta de entrada."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Recursos Limitados vs. Riesgo Creciente",
      desc: "Presupuestos insuficientes ante el costo de brechas. Competencia global por talento especializado en seguridad."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Factor Humano Crítico",
      desc: "Ingeniería social cada vez más sofisticada. Falta de cultura de seguridad en todos los niveles organizacionales."
    }
  ];

  const verticals = [
    {
      title: "Centro de Operaciones de Seguridad (SOC)",
      desc: "Implementamos SOC 24/7 con capacidades de monitoreo continuo, detección de amenazas y respuesta rápida ante incidentes. Utilizamos SIEM avanzados (Splunk, IBM QRadar, Microsoft Sentinel), plataformas de gestión de eventos, análisis de comportamiento con UEBA (User and Entity Behavior Analytics), threat intelligence feeds, automatización de respuestas (SOAR), dashboards ejecutivos en tiempo real y procedimientos de escalamiento con runbooks definidos. Nuestro SOC opera con equipos especializados en análisis de nivel 1, 2 y 3, garantizando tiempos de respuesta óptimos y reducción del MTTD (Mean Time to Detect) y MTTR (Mean Time to Respond)."
    },
    {
      title: "Gestión de Vulnerabilidades",
      desc: "Ejecutamos programas sistemáticos de identificación y remediación de vulnerabilidades mediante escaneos continuos con Nessus, Qualys, Rapid7, OpenVAS y Tenable. Implementamos gestión del ciclo de vida de vulnerabilidades con priorización basada en CVSS 3.0+, threat intelligence y contexto del negocio. Incluye vulnerability assessment periódicos, análisis de configuraciones según CIS Benchmarks, parches y hardening de sistemas, gestión de excepciones con controles compensatorios, reportería ejecutiva con KPIs (ventana promedio de remediación, vulnerabilidades críticas pendientes) y roadmaps de mejora continua."
    },
    {
      title: "Respuesta a Incidentes y Forense Digital",
      desc: "Diseñamos e implementamos planes de respuesta a incidentes (IRP) alineados a NIST CSF y frameworks internacionales. Incluye desarrollo de playbooks por tipo de incidente (ransomware, DDoS, data breach, APT), establecimiento de equipos CSIRT, definición de roles y responsabilidades, gestión de crisis con cadenas de comunicación, análisis forense digital con herramientas como EnCase, FTK, Volatility y Autopsy, preservación de evidencia con cadena de custodia, análisis post-mortem con lessons learned, y simulacros de incidentes (tabletop exercises) para validar la preparación organizacional."
    },
    {
      title: "Gestión de Identidades y Accesos (IAM)",
      desc: "Implementamos soluciones robustas de gestión de identidades con plataformas como Okta, Azure AD, ForgeRock, Ping Identity y SailPoint. Incluye Single Sign-On (SSO) corporativo, autenticación multifactor (MFA) con FIDO2, gestión del ciclo de vida de identidades (provisioning/deprovisioning automatizado), control de accesos basado en roles (RBAC) y atributos (ABAC), implementación de Zero Trust Architecture con verificación continua, gestión de identidades privilegiadas (PAM) con CyberArk o BeyondTrust, auditorías de accesos periódicas, y gobernanza de identidades con certificaciones de acceso y segregación de funciones (SoD)."
    },
    {
      title: "Seguridad Cloud y DevSecOps",
      desc: "Aseguramos entornos cloud (AWS, Azure, GCP) mediante implementación de Cloud Security Posture Management (CSPM) con Prisma Cloud, Cloud Custodian o Azure Security Center. Incluye hardening de configuraciones cloud, gestión de secretos con HashiCorp Vault, AWS Secrets Manager o Azure Key Vault, implementación de DevSecOps con seguridad shift-left, escaneo de vulnerabilidades en contenedores (Clair, Trivy, Aqua Security), análisis estático de código (SAST) con SonarQube y Checkmarx, análisis dinámico (DAST), gestión de seguridad en pipelines CI/CD, políticas como código (Policy as Code) con OPA, y controles de seguridad en infraestructura como código (IaC scanning con Terraform Sentinel, CloudFormation Guard)."
    },
    {
      title: "Compliance y Gestión de Riesgos",
      desc: "Acompañamos en el cumplimiento de marcos regulatorios y normativos: ISO 27001, NIST CSF, PCI-DSS, HIPAA, SOC 2, GDPR, Ley Federal de Protección de Datos Personales (México), NOM-151-SCFI, LGPDPPSO y regulaciones sectoriales (financiero CNBV, salud COFEPRIS). Implementamos programas de gestión de riesgos con metodologías como OCTAVE, FAIR, ISO 27005 e ISO 31000. Incluye análisis de riesgos cualitativos y cuantitativos, registro de riesgos, definición de apetito y tolerancia al riesgo, controles de mitigación, auditorías de cumplimiento internas y preparación para auditorías externas, generación de evidencias documentales, y planes de tratamiento de riesgos residuales."
    },
    {
      title: "Pentesting y Ethical Hacking",
      desc: "Ejecutamos evaluaciones de seguridad ofensivas mediante pruebas de penetración externas e internas, red team engagements simulando adversarios reales (APT emulation), social engineering campaigns (phishing, vishing, pretexting), evaluación de aplicaciones web y móviles con OWASP Top 10 y MASVS, análisis de APIs REST/GraphQL, revisión de código fuente seguro, wireless security assessments (WPA3, evil twin), evaluación de seguridad física, y purple team exercises para validar controles defensivos. Utilizamos frameworks como PTES, OWASP Testing Guide y MITRE ATT&CK para mapear técnicas adversarias, entregando reportes ejecutivos y técnicos con hallazgos priorizados, PoCs y recomendaciones de remediación."
    },
    {
      title: "Concientización y Capacitación en Seguridad",
      desc: "Desarrollamos programas de awareness y capacitación en ciberseguridad adaptados al contexto organizacional. Incluye campañas de concientización continuas con posters, newsletters y videos, simulaciones de phishing automatizadas con métricas de efectividad, entrenamiento en línea (e-learning) con módulos interactivos, talleres presenciales y virtuales para usuarios, capacitación especializada para desarrolladores (secure coding), administradores de sistemas, equipos de seguridad y alta dirección (cyber resilience para board members). Medimos madurez con indicadores como tasa de clics en simulaciones de phishing, completitud de cursos, y cambios de comportamiento observados, estableciendo una cultura de seguridad sólida y sostenible."
    },
    {
      title: "Arquitectura de Seguridad",
      desc: "Diseñamos arquitecturas de seguridad empresariales robustas con enfoque Defense in Depth, implementando segmentación de redes con VLANs y microsegmentación, firewalls de nueva generación (NGFW) con Fortinet, Palo Alto Networks o Check Point, sistemas de prevención de intrusiones (IPS/IDS), web application firewalls (WAF) con ModSecurity, F5 o Imperva, Email security gateways, DLP (Data Loss Prevention), Network Access Control (NAC), Zero Trust Network Access (ZTNA), SD-WAN seguro, arquitecturas DMZ, bastionado de servidores y endpoints, y blueprints de seguridad para entornos híbridos y multi-cloud con controles consistentes."
    },
    {
      title: "Consultoría Estratégica en Ciberseguridad",
      desc: "Brindamos asesoría estratégica de alto nivel para la transformación del modelo de seguridad organizacional. Incluye definición de estrategia de ciberseguridad alineada al negocio, diseño de marcos de gobierno de seguridad, implementación de comités de ciberseguridad y estructuras RACI, desarrollo de políticas corporativas de seguridad (AUP, DRP, IRP, Cryptography Policy), roadmaps de madurez de seguridad con evaluaciones contra NIST CSF, ISO 27001, CIS Controls o CMMC, definición de métricas y KPIs de seguridad (KRIs, KPIs), construcción de business cases para inversiones en seguridad con análisis de ROI y ROSI (Return on Security Investment), y soporte en transformación organizacional hacia modelos de seguridad modernos y resilientes."
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Reducción Cuantificable del Riesgo",
      desc: "Disminución demostrable de probabilidad e impacto de incidentes mediante defensa en profundidad"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Detección y Respuesta Acelerada",
      desc: "Minimización del tiempo de exposición y daño potencial ante amenazas activas"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Cumplimiento Normativo Garantizado",
      desc: "Evidencia documentada y auditable para reguladores y stakeholders"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-emerald-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Protección de Activos Críticos",
      desc: "Salvaguarda de propiedad intelectual, datos sensibles y continuidad operacional"
    }
  ];

  const technologies = [
    { name: "Fortinet", logo: "🛡️" },
    { name: "Palo Alto Networks", logo: "🔥" },
    { name: "Splunk", logo: "📊" },
    { name: "Microsoft Sentinel", logo: "☁️" },
    { name: "CyberArk", logo: "🔐" },
    { name: "Okta", logo: "🆔" },
    { name: "Trend Micro", logo: "🔍" },
    { name: "Sophos", logo: "🛡️" }
  ];

  const faqs = [
    {
      q: "¿Cuánto tiempo toma implementar un SOC?",
      a: "La implementación de un SOC completo típicamente toma entre 3-6 meses, dependiendo del alcance, complejidad de la infraestructura y madurez actual de seguridad. Incluye fases de diseño, despliegue de herramientas, integración de fuentes de datos, definición de use cases, capacitación del equipo y estabilización operativa."
    },
    {
      q: "¿Ofrecen servicios de SOC administrado 24/7?",
      a: "Sí, ofrecemos servicios de SOC como servicio (SOCaaS) con cobertura 24/7/365. Nuestro equipo de analistas especializados monitorea continuamente su infraestructura, detecta amenazas, responde a incidentes y genera reportes periódicos de seguridad con métricas y recomendaciones."
    },
    {
      q: "¿Qué incluye una prueba de penetración?",
      a: "Nuestras pruebas de penetración incluyen: reconocimiento y enumeración, escaneo de vulnerabilidades, explotación controlada de hallazgos, escalamiento de privilegios, movimiento lateral, análisis de impacto, y documentación completa con reporte ejecutivo y técnico. Entregamos hallazgos priorizados por riesgo, pruebas de concepto (PoCs) y recomendaciones específicas de remediación."
    },
    {
      q: "¿Cómo ayudan con el cumplimiento normativo?",
      a: "Acompañamos en todo el ciclo de cumplimiento: gap analysis inicial contra el marco regulatorio aplicable, diseño e implementación de controles, documentación de políticas y procedimientos, generación de evidencias, auditorías internas de preparación, acompañamiento en auditorías de certificación externas, y mantenimiento del sistema de gestión para asegurar cumplimiento continuo."
    },
    {
      q: "¿Qué metodologías de respuesta a incidentes utilizan?",
      a: "Utilizamos metodologías reconocidas internacionalmente como NIST CSF (Identify, Protect, Detect, Respond, Recover), SANS Incident Response Framework, y adaptaciones de ISO 27035. Nuestros planes de respuesta incluyen preparación, detección y análisis, contención, erradicación, recuperación y lecciones aprendidas, con playbooks específicos por tipo de incidente y procedimientos de escalamiento definidos."
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
      ? `Estoy interesado en los siguientes servicios de Ciberseguridad:\n\n${selectedServices.map(s => `- ${s}`).join('\n')}`
      : 'Me gustaría recibir información sobre sus servicios de Ciberseguridad.';

    navigate(`/contacto?services=${encodeURIComponent(servicesText)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero con imagen de fondo */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
            alt="Ciberseguridad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/95 via-green-950/90 to-emerald-900/90 animate-gradient-slow" />
        </div>

        <div className="container relative pt-32 pb-16">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link>
              <span className="mx-2 text-white/60">/</span>
              <Link to="/servicios" className="text-white/80 hover:text-white transition-colors">Servicios</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white font-semibold">Ciberseguridad</span>
            </nav>

            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-6 text-white leading-tight">
              Ciberseguridad
            </h1>

            <p className="text-2xl font-semibold mb-6 text-emerald-200">
              Protegemos lo más valioso: tu información
            </p>

            <p className="text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
              Nuestro enfoque integral de ciberseguridad salvaguarda los activos críticos de tu
              organización, aseguramos la prevención, detección y respuesta ante amenazas,
              fortaleciendo los controles y la resiliencia digital de tu organización.
            </p>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Solicitar Evaluación de Seguridad
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        </div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              La ciberseguridad no es un destino, es un viaje continuo que requiere vigilancia permanente.
              En un mundo donde las amenazas evolucionan constantemente, protegemos tu organización
              con soluciones integrales que van desde la prevención hasta la respuesta ante incidentes.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Implementamos controles de seguridad en múltiples capas, fortalecemos la postura de
              ciberseguridad y garantizamos el cumplimiento normativo mediante frameworks reconocidos
              internacionalmente, todo respaldado por nuestro equipo de especialistas certificados
              (CISSP, CEH, OSCP, CISM).
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
              El panorama de amenazas actual presenta desafíos complejos que requieren un socio experto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors border border-gray-700">
                <div className="text-emerald-400 mb-4">
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
              <pattern id="grid-red" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="rgb(16 185 129 / 0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-red)" />
          </svg>
        </div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-gray-900">
              Nuestra Solución de Ciberseguridad
            </h2>
            <p className="text-xl text-gray-600">
              Implementamos controles de seguridad integrales con enfoque Defense in Depth
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {verticals.map((vertical, idx) => (
              <details key={idx} className="group bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-xl transition-all">
                <summary className="cursor-pointer p-8 hover:bg-emerald-50 transition-colors list-none flex items-center justify-between">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-emerald-600 transition-colors pr-4">
                    {vertical.title}
                  </h3>
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-8 pb-8 pt-4 bg-gradient-to-br from-emerald-50/30 to-transparent">
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
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}} />
        </div>

        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display font-bold text-4xl mb-6 text-white">
              Beneficios Clave
            </h2>
            <p className="text-xl text-white/90">
              Seguridad como facilitador, no inhibidor, de iniciativas de innovación
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
              Tecnologías y Partners de Seguridad
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con las plataformas de ciberseguridad líderes del mercado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 flex flex-col items-center justify-center hover:shadow-xl transition-all border-2 border-gray-100 hover:border-emerald-200 group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {tech.logo}
                </div>
                <div className="text-center font-semibold text-gray-700 group-hover:text-emerald-600 transition-colors">
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
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <pattern id="ciber-cta-grid-lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            </pattern>

            {/* Layer 2: Crosses on the same axes as grid lines - 16px total (±8) */}
            <pattern id="ciber-cta-grid-crosses" width="80" height="80" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#ciber-cta-grid-lines)" />
          <rect width="100%" height="100%" fill="url(#ciber-cta-grid-crosses)" />
        </svg>

        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-4xl mb-6 text-white">
                Tu Seguridad en Manos Expertas
              </h2>
              <p className="text-xl text-white/90">
                Selecciona los servicios de seguridad que necesitas y te contactaremos para diseñar una solución integral
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Centro de Operaciones de Seguridad (SOC)",
                  "Gestión de Vulnerabilidades",
                  "Respuesta a Incidentes",
                  "Gestión de Identidades y Accesos (IAM)",
                  "Seguridad Cloud y DevSecOps",
                  "Compliance y Gestión de Riesgos",
                  "Pentesting y Ethical Hacking",
                  "Concientización y Capacitación",
                  "Arquitectura de Seguridad",
                  "Consultoría Estratégica"
                ].map((service, idx) => (
                  <label key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                      className="mt-1 w-5 h-5 rounded border-white/30 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0 bg-white/10"
                    />
                    <span className="text-white group-hover:text-emerald-200 transition-colors leading-snug">
                      {service}
                    </span>
                  </label>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleContactClick}
                  className="inline-flex items-center gap-2 px-10 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
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
