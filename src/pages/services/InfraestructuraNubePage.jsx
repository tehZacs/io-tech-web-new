import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * Individual Service Page: Infraestructura y Nube
 * Based on documentation structure from 02-ESTRUCTURA-PAGINAS.md
 */
export const InfraestructuraNubePage = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const challenges = [
    {
      title: 'Sistemas Legacy de Misión Crítica',
      description: 'Operación especializada de plataformas core banking, ERP y mainframes sin interrumpir el negocio',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Talento Especializado Escaso',
      description: 'Falta de expertos en Oracle, DB2, Mainframe y plataformas enterprise',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Centros de Datos On-Premise',
      description: 'Administración 24/7 de infraestructura física crítica y virtualizada',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Bases de Datos Enterprise',
      description: 'Performance tuning, alta disponibilidad y respaldos de Oracle, SQL Server, DB2',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'Optimización de Recursos',
      description: 'Reducción de costos operativos sin comprometer disponibilidad ni rendimiento',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Continuidad Operativa 24/7',
      description: 'Disaster Recovery y alta disponibilidad para operaciones críticas financieras y corporativas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const verticals = [
    {
      title: 'Sistemas Legacy Enterprise',
      description: 'Administración experta de Mainframe (z/OS, z/Linux, CICS, IMS), Sparc/Solaris, IBM AIX (PowerVM, LPAR), HP-UX e Itanium. Migraciones de plataforma, optimización de cargas de trabajo y soporte 24/7 a sistemas críticos de banca, seguros, retail y manufactura con décadas de antigüedad. Mantenemos operando core banking, ERPs y plataformas transaccionales legacy.',
    },
    {
      title: 'Bases de Datos Enterprise',
      description: 'Oracle Database (RAC, DataGuard, Exadata, ASM, RMAN), SQL Server (Always On, Failover Cluster, Replication), DB2, Informix, Sybase. Performance tuning, alta disponibilidad 24/7, respaldos automatizados y disaster recovery. Contamos con uno de los mejores equipos técnicos de Oracle Database en México, certificados OCP/OCM.',
    },
    {
      title: 'Centros de Datos On-Premise',
      description: 'Administración 24/7 de infraestructura física: diseño de racks, sistemas UPS/generadores, climatización, cableado estructurado categoría 6A/7. Virtualización avanzada con VMware vSphere (vCenter, vMotion, DRS, HA), Nutanix HCI, Hyper-V y KVM/Proxmox. Consolidación de servidores y optimización de recursos.',
    },
    {
      title: 'Almacenamiento y Respaldos',
      description: 'Storage SAN/NAS enterprise (EMC Unity/VNX, NetApp FAS/AFF, IBM FlashSystem, Pure Storage), políticas de retención multinivel (RPO/RTO), respaldos automatizados con Veritas NetBackup, Commvault, Veeam, IBM Spectrum Protect. Replicación de datos, snapshots y archivado a largo plazo.',
    },
    {
      title: 'Sistemas Operativos Enterprise',
      description: 'Red Hat Enterprise Linux, SUSE Linux Enterprise, Oracle Linux, Ubuntu Server, IBM AIX, Solaris, HP-UX, Windows Server (2016-2022). Hardening según CIS Benchmarks, DISA STIGs, PCI-DSS y mejores prácticas de seguridad corporativa. Gestión de parches, auditoría y compliance continuo.',
    },
    {
      title: 'Middleware y Aplicaciones',
      description: 'Servidores de aplicaciones: WebSphere, Oracle WebLogic, JBoss/WildFly, Apache Tomcat, Microsoft IIS. Integración empresarial con IBM MQ Series, Oracle SOA Suite, Red Hat Fuse (ESB), TIBCO, MuleSoft. Especialistas en ambientes financieros, retail, manufactura y telco de alta concurrencia.',
    },
    {
      title: 'Redes y Seguridad',
      description: 'Firewalls de próxima generación (Palo Alto Networks, Fortinet FortiGate, Cisco ASA/Firepower), balanceadores F5 BIG-IP, VPN site-to-site y remote access, microsegmentación, zero trust network access (ZTNA). Cumplimiento PCI-DSS, SOX, ISO 27001 y regulaciones financieras internacionales.',
    },
    {
      title: 'Monitoreo y NOC 24/7',
      description: 'Centro de operaciones de red (NOC) con monitoreo proactivo mediante Nagios, Zabbix, Prometheus/Grafana, IBM Tivoli, HP OpenView, SolarWinds. Correlación de eventos, dashboards ejecutivos en tiempo real, alertas automáticas y respuesta inmediata para infraestructura de misión crítica.',
    },
    {
      title: 'Mesa de Servicio Certificada',
      description: 'Mesa de ayuda ITIL v4 con atención multinivel (L1/L2/L3), gestión de incidentes, problemas y cambios. SLAs empresariales personalizados, reporteo ejecutivo y análisis de tendencias. Experiencia comprobada con instituciones financieras, aseguradoras, retail y grandes corporativos multinacionales. Disponibilidad 24/7/365.',
    },
    {
      title: 'Disaster Recovery y BCP',
      description: 'Planes de continuidad de negocio (BCP) certificados ISO 22301, disaster recovery planning (DRP), sitios alternos hot/warm/cold, RPO/RTO garantizados según criticidad. Pruebas periódicas de recuperación, documentación detallada y runbooks. Respaldo de operaciones de misión crítica para banca, seguros, retail y manufactura.',
    },
    {
      title: 'Nube Híbrida y Migraciones',
      description: 'Arquitecturas multi-cloud con AWS (EC2, RDS, S3), Microsoft Azure (VMs, SQL Database, Blob Storage), Google Cloud Platform (Compute Engine, Cloud SQL), Oracle Cloud Infrastructure (OCI). Migraciones controladas on-premise a nube, estrategias lift-and-shift, re-platforming y cloud-native. Gestión unificada de ambientes híbridos.',
    },
  ];

  const benefits = [
    {
      title: 'Experiencia en infraestructura crítica',
      description: 'Más de 7 años operando plataformas de misión crítica para banca, seguros, retail y manufactura. Cumplimiento PCI-DSS, SOX, ISO 27001 y regulaciones financieras',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Equipo técnico de élite',
      description: '+200 especialistas certificados. Expertos en bases de datos enterprise, sistemas legacy, virtualización y cloud',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Operación 24/7 garantizada',
      description: 'SLA 99.9%, NOC activo, mesa de servicio L1/L2/L3, planes DR/BCP certificados ISO 22301',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Cumplimiento y seguridad',
      description: 'Frameworks NIST, ISO 27001, CIS Benchmarks, PCI-DSS, SOX. Experiencia en auditorías financieras y corporativas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const technologies = [
    { name: 'AWS', logo: '☁️' },
    { name: 'Microsoft Azure', logo: '☁️' },
    { name: 'Google Cloud', logo: '☁️' },
    { name: 'Oracle Cloud', logo: '☁️' },
    { name: 'VMware', logo: '⚙️' },
    { name: 'Nutanix', logo: '⚙️' },
    { name: 'Red Hat', logo: '🐧' },
    { name: 'Kubernetes', logo: '☸️' },
  ];

  const faqs = [
    {
      question: '¿Pueden administrar nuestra infraestructura on-premise legacy?',
      answer: 'Sí, somos especialistas en administración 24/7 de infraestructura crítica on-premise incluyendo sistemas legacy: Mainframe (z/OS, CICS, IMS), Sparc/Solaris, IBM AIX, HP-UX, bases de datos enterprise (Oracle Database, SQL Server, DB2, Informix) y centros de datos completos. Contamos con uno de los mejores equipos técnicos de Oracle Database en México certificados OCP/OCM, especialistas en tuning, RAC, DataGuard y Exadata. Operamos plataformas core banking, ERPs y sistemas transaccionales críticos para banca, seguros y manufactura con SLAs 99.9%. Incluye: NOC 24/7, mesa de servicio ITIL v4 multinivel, gestión de parches, respaldos automatizados y disaster recovery.',
    },
    {
      question: '¿Qué tan rápido pueden responder ante una falla crítica?',
      answer: 'Nuestro NOC (Network Operations Center) 24/7/365 garantiza respuesta inmediata ante incidentes críticos: Severity 1 (Crítico - Sistema caído): respuesta en 15 minutos, resolución target 4 horas. Severity 2 (Alto - Degradación severa): respuesta en 30 minutos, resolución target 8 horas. Severity 3 (Medio): respuesta en 2 horas, Severity 4 (Bajo): respuesta en 8 horas. Contamos con mesa de servicio ITIL v4 multinivel (L1/L2/L3), escalamiento automático, runbooks detallados para sistemas críticos y equipo on-call de especialistas senior (DBAs, SysAdmins, Arquitectos). Para infraestructura de misión crítica financiera, ofrecemos ingeniero dedicado on-site. SLA 99.9% con penalizaciones contractuales por incumplimiento.',
    },
    {
      question: '¿Cómo garantizan la seguridad y cumplimiento normativo?',
      answer: 'Aplicamos frameworks de seguridad y cumplimiento enterprise: ISO 27001:2022 para gestión de seguridad de la información, PCI-DSS v4.0 (obligatorio marzo 2025) para datos de tarjetas, SOX para controles financieros, NIST Cybersecurity Framework, CIS Benchmarks y DISA STIGs para hardening. Implementamos: cifrado AES-256 en tránsito (TLS 1.3) y reposo, segmentación de red, firewalls NGFW (Palo Alto, Fortinet), microsegmentación, Zero Trust Network Access (ZTNA), IAM con MFA, SIEM para correlación de eventos y auditoría continua. Según ISMS.online (2024), la integración ISO 27001 + PCI-DSS optimiza controles compartidos. Equipo certificado: CISSP, CEH, CISM, CISA. Auditorías trimestrales y pentesting anual. Referencias: <a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener" class="text-cyan-600 hover:text-cyan-700 underline">ISO 27001:2022</a>, <a href="https://www.pcisecuritystandards.org/document_library/" target="_blank" rel="noopener" class="text-cyan-600 hover:text-cyan-700 underline">PCI DSS v4.0</a>, <a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener" class="text-cyan-600 hover:text-cyan-700 underline">NIST CSF</a>, <a href="https://www.isms.online/iso-27001/integration-with-pci-dss/" target="_blank" rel="noopener" class="text-cyan-600 hover:text-cyan-700 underline">ISMS.online</a>.',
    },
    {
      question: '¿También manejan migraciones a nube e infraestructura híbrida?',
      answer: 'Sí, además de nuestra especialidad en on-premise, gestionamos migraciones cloud y arquitecturas híbridas. Soportamos AWS, Azure, GCP y Oracle Cloud. Según Gartner (2024), el 65% de workloads empresariales estarán cloud-ready para 2027. Proyectos típicos: 3-12 meses para migraciones controladas, hasta 18 meses para sistemas legacy complejos (Mainframe, core banking). Utilizamos las "7 Rs de Migración" (Rehost, Replatform, Refactor, Repurchase, Retain, Retire, Relocate). BCG (2021) reporta que estrategias multi-cloud aumentan agilidad y poder de negociación. Migraciones por fases para minimizar riesgos. Post-migración: FinOps para optimizar costos (savings 30-40%). Referencias: <a href="https://www.gartner.com/en/information-technology/trends/the-it-roadmap-for-cloud-migration" target="_blank" rel="noopener" class="text-cyan-600 hover:text-cyan-700 underline">Gartner Cloud Migration</a>, <a href="https://www.bcg.com/publications/2021/navigating-multicloud-strategy" target="_blank" rel="noopener" class="text-cyan-600 hover:text-cyan-700 underline">BCG Multicloud Strategy</a>, <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/unlocking-business-acceleration-in-a-hybrid-cloud-world" target="_blank" rel="noopener" class="text-cyan-600 hover:text-cyan-700 underline">McKinsey Hybrid Cloud</a>.',
    },
    {
      question: '¿Qué modelos de contratación ofrecen?',
      answer: 'Ofrecemos 5 modelos flexibles: (1) Managed Services 24/7 - cuota mensual fija para operación continua on-premise, ideal para centros de datos, Mainframe, Oracle RAC, core banking (modelo más contratado por banca/seguros). (2) Proyecto Fixed-Price - migraciones, upgrades, implementaciones con timeline y entregables definidos. (3) Staff Augmentation - especialistas dedicados (DBAs Oracle/SQL Server/DB2, SysAdmins AIX/Solaris, Arquitectos) integrados a tu equipo. (4) Consultoría por horas - troubleshooting experto, performance tuning, arquitectura, auditorías. (5) Híbrido - proyecto inicial + managed services continuo. Todos incluyen: documentación técnica completa, transferencia de conocimiento, SLAs con penalizaciones por incumplimiento, reportería ejecutiva mensual.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with Background Image */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/img/services/datacenter-001.jpg"
            alt="Data Center Infrastructure"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated overlay with rotating gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-brand-900/85 via-gray-900/88 to-brand-900/85 animate-gradient-slow"></div>

        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl">
            <nav className="text-sm mb-6">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Inicio</Link>
              <span className="mx-2 text-white/60">/</span>
              <Link to="/servicios" className="text-white/80 hover:text-white transition-colors">Servicios</Link>
              <span className="mx-2 text-white/60">/</span>
              <span className="text-white">Infraestructura y Nube</span>
            </nav>
            <h1 className="font-display font-bold text-4xl lg:text-display-lg mb-6 text-white">
              Infraestructura y Nube
            </h1>
            <p className="text-2xl text-cyan-400 font-semibold mb-6">
              Del Mainframe a la Nube: Infraestructura Completa en Todas las Plataformas
            </p>
            <p className="text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed">
              Administración experta de infraestructura tecnológica en todas sus generaciones: desde sistemas legacy (Mainframe, Sparc, AIX),
              centros de datos on-premise, hasta migraciones cloud y arquitecturas híbridas. Más de 200 especialistas certificados
              atendiendo al sector financiero, corporativos y empresas de alto rendimiento en México.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_50%)]"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Con más de 7 años de experiencia operando infraestructuras críticas en México, dominamos todas las
                generaciones tecnológicas: desde sistemas legacy (Mainframe, Sparc, AIX, HP-UX), pasando por centros de datos
                on-premise modernos, hasta arquitecturas cloud-native y multi-cloud (AWS, Azure, Google Cloud, Oracle Cloud).
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Nuestro equipo de +200 especialistas certificados domina bases de datos enterprise (Oracle Database, SQL Server, DB2, Informix),
                virtualización avanzada, orquestación de contenedores y gestión multi-cloud. Contamos con uno de los mejores equipos técnicos
                de Oracle Database en México. Atendemos a instituciones financieras, aseguradoras, retail, manufactura, agencias gubernamentales (federal, estatal y municipal)
                y grandes corporativos que requieren operación 24/7 con SLAs empresariales y cumplimiento normativo estricto.
              </p>
              <div className="bg-brand-50 border-l-4 border-brand-600 p-6 my-8">
                <p className="text-xl font-semibold text-brand-900 italic">
                  "Somos el puente entre lo tradicional y lo moderno: mantenemos operando tus sistemas legacy críticos,
                  optimizamos tu infraestructura on-premise actual, y te acompañamos hacia el futuro con nube híbrida y transformación digital."
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
            Enfrentamos los desafíos más complejos de infraestructura tecnológica
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 border-2 border-gray-700 rounded-xl p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                <div className="text-cyan-400 mb-4">{challenge.icon}</div>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.08),transparent_60%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-gray-900 text-center">
            Nuestra Solución
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Cobertura completa en todas las capas de tu infraestructura tecnológica
          </p>
          <div className="max-w-5xl mx-auto space-y-4">
            {verticals.map((vertical, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-cyan-500 hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex items-center justify-between hover:bg-cyan-50 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    {vertical.title}
                  </span>
                  <svg className="w-5 h-5 text-cyan-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-white relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(6,182,212,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(59,130,246,0.15),transparent_40%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-12 text-gray-900 text-center">
            Beneficios Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
              >
                <div className="text-cyan-600 mb-4">{benefit.icon}</div>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(6,182,212,0.06),transparent_50%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-gray-900 text-center">
            Tecnologías y Partners
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Alianzas estratégicas con los líderes tecnológicos globales
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl px-8 py-6 hover:border-cyan-500 hover:shadow-lg hover:bg-white transition-all"
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
            Resolvemos tus dudas sobre infraestructura y nube
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-800/50 border-2 border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-gray-800/80 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-cyan-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div
                  className="px-6 pb-6 pt-4 text-gray-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
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
            <pattern id="infra-cta-grid-lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            </pattern>

            {/* Layer 2: Crosses on the same axes as grid lines - 16px total (±8) */}
            <pattern id="infra-cta-grid-crosses" width="80" height="80" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#infra-cta-grid-lines)" />
          <rect width="100%" height="100%" fill="url(#infra-cta-grid-crosses)" />
        </svg>

        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6 text-white">
              Tu Infraestructura en Manos Expertas
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Sea cual sea tu tecnología (legacy, on-premise o nube), tenemos el equipo para operarla
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-bold text-xl mb-6 text-white">¿Qué servicios te interesan?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {[
                  'Administración on-premise 24/7',
                  'Bases de datos enterprise',
                  'Migración a nube',
                  'Disaster Recovery',
                  'Infraestructura híbrida',
                  'Soporte a sistemas legacy',
                ].map((service, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer text-white hover:text-cyan-200 transition-colors">
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
                    ? `Estoy interesado en los siguientes servicios de Infraestructura y Nube:\n\n${selectedServices.map(s => `- ${s}`).join('\n')}`
                    : 'Me gustaría recibir información sobre sus servicios de Infraestructura y Nube.';
                  navigate(`/contacto?services=${encodeURIComponent(servicesText)}`);
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white rounded-lg font-bold text-lg hover:bg-cyan-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
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
