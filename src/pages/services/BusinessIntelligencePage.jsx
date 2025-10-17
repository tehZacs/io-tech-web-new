import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**
 * Individual Service Page: Inteligencia de Negocio y Data
 */
export const BusinessIntelligencePage = () => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);
  const challenges = [
    {
      title: 'Datos Dispersos y Aislados',
      description: 'Información fragmentada en múltiples sistemas sin visibilidad unificada',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
    {
      title: 'Falta de Gobierno de Datos',
      description: 'Datos inconsistentes, duplicados y sin linaje claro de origen',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Reporteo Manual y Lento',
      description: 'Generación de reportes en Excel que consume horas de trabajo repetitivo',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Decisiones sin Datos',
      description: 'Toma de decisiones basada en intuición en vez de analytics objetivos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Falta de Predictibilidad',
      description: 'Incapacidad de anticipar tendencias, riesgos y oportunidades',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: 'Infraestructura de Datos Obsoleta',
      description: 'Data warehouses lentos, ETLs manuales, sin arquitectura moderna',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
    },
  ];

  const verticals = [
    {
      title: 'Gobierno de Datos y Data Quality',
      description: 'Implementación de frameworks de gobierno corporativo: políticas de calidad de datos (completitud, precisión, consistencia, vigencia), data stewardship con roles y responsabilidades claros, catálogos de metadatos empresariales (Collibra, Alation, Azure Purview), MDM (Master Data Management) para entidades críticas (clientes, productos, proveedores), data lineage end-to-end para trazabilidad, perfilado y validación automática de datos, reglas de negocio documentadas, compliance normativo (GDPR, LFPDPPP México, CCPA California, HIPAA salud). Auditorías de calidad con dashboards de monitoreo continuo. Data quality KPIs: completitud >95%, exactitud >98%, duplicados <1%. Soluciones Informatica, Talend, Azure Data Factory, AWS Glue.',
    },
    {
      title: 'Arquitectura de Datos Moderna',
      description: 'Diseño de arquitecturas escalables cloud-native: Data Warehouses enterprise (Snowflake Data Cloud, Amazon Redshift, Azure Synapse Analytics, Google BigQuery) con separación compute/storage, particionamiento automático, compresión optimizada. Data Lakes para datos no estructurados (AWS S3, Azure Data Lake Gen2, Google Cloud Storage) con organización medallion architecture (bronze/raw → silver/curated → gold/aggregated). Data Lakehouses unificados con Databricks Lakehouse Platform (Delta Lake, Unity Catalog). Arquitecturas streaming: Lambda (batch + real-time) y Kappa (solo streaming) con Apache Kafka, Azure Event Hubs, AWS Kinesis. ELT moderno vs ETL tradicional. Procesamiento distribuido con Apache Spark (PySpark, Spark SQL, Structured Streaming). CDC (Change Data Capture) para sincronización en tiempo real. Data mesh para organizaciones descentralizadas.',
    },
    {
      title: 'Business Intelligence y Visualización',
      description: 'Dashboards ejecutivos y operativos enterprise: Microsoft Power BI (Desktop, Service, Premium, Embedded, Paginated Reports) con DirectQuery y Import, DAX avanzado, seguridad RLS (Row-Level Security), Tableau (Desktop, Server, Online) con cálculos LOD, sets, parámetros dinámicos, Looker (LookML para semantic layer), Qlik Sense (modelo asociativo in-memory), Google Looker Studio. Self-service BI para usuarios de negocio: semantic layers, data modeling dimensional (Kimball, Inmon), KPIs con drill-down/drill-through, filtros interactivos, bookmarks, mobile BI. Embedded analytics (iframes, APIs, white-label). Alertas automáticas basadas en umbrales. Reportes automáticos por email. Certificaciones: Microsoft Certified: Data Analyst Associate, Tableau Desktop Specialist.',
    },
    {
      title: 'Analítica Avanzada y Predictiva',
      description: 'Modelos estadísticos y analíticos con Python (pandas, NumPy, scikit-learn, statsmodels), R (tidyverse, caret, prophet). Time series forecasting: ARIMA, SARIMA, Prophet (Facebook), LSTM (redes neuronales recurrentes). Detección de anomalías: Isolation Forest, One-Class SVM, autoencoders. Clustering y segmentación: K-means, DBSCAN, hierarchical clustering, Gaussian Mixture Models. Análisis de cesta de mercado (market basket analysis) con algoritmos de asociación (Apriori, FP-Growth). Análisis de churn (predicción de fuga de clientes) con modelos de supervivencia (survival analysis). RFM (Recency, Frequency, Monetary) para segmentación de clientes. A/B testing estadístico con pruebas de hipótesis. Optimización de precios dinámicos. Procesamiento distribuido con Apache Spark MLlib para big data (>100GB). Jupyter Notebooks / Databricks Notebooks para análisis exploratorio.',
    },
    {
      title: 'Machine Learning en Producción',
      description: 'Desarrollo end-to-end de modelos ML supervisados: clasificación (Logistic Regression, Random Forest, XGBoost, LightGBM, CatBoost), regresión (Linear, Polynomial, Ridge, Lasso), ensemble methods. No supervisados: clustering, reducción de dimensionalidad (PCA, t-SNE, UMAP). NLP (Natural Language Processing): análisis de sentimiento, NER (Named Entity Recognition), topic modeling (LDA), transformers (BERT, RoBERTa). Computer Vision: clasificación de imágenes (CNNs), detección de objetos (YOLO, Faster R-CNN), segmentación semántica. Sistemas de recomendación: collaborative filtering, content-based, híbridos (Matrix Factorization, Deep Learning). MLOps: versionado de modelos (MLflow, DVC), pipelines CI/CD para ML, despliegue con Docker/Kubernetes, monitoreo de drift (data drift, concept drift), reentrenamiento automático, A/B testing de modelos en producción. Plataformas: Azure ML, AWS SageMaker, Google Vertex AI, Databricks ML.',
    },
    {
      title: 'Inteligencia Artificial Generativa',
      description: 'IA generativa aplicada a casos de negocio: Large Language Models (LLMs) GPT-4, Claude 3 (Anthropic), Llama 3 (Meta), Gemini (Google), Mistral para generación de texto, resumen automático, traducción, Q&A. Fine-tuning de modelos con datos corporativos (LoRA, QLoRA). RAG (Retrieval Augmented Generation) para bases de conocimiento empresariales: embeddings vectoriales (OpenAI, Cohere, Sentence Transformers), vector databases (Pinecone, Weaviate, Azure AI Search, Chroma), chunking strategies, semantic search. Chatbots inteligentes conversacionales con memoria de contexto, function calling para integraciones, guardrails para respuestas seguras. Asistentes virtuales para atención al cliente, soporte técnico, ventas. Agentes autónomos (LangChain, AutoGPT) para tareas complejas. Generación de código con GitHub Copilot, Amazon CodeWhisperer. Imagen: DALL-E 3, Midjourney, Stable Diffusion. Compliance y ética: detección de sesgos, explicabilidad (LIME, SHAP), privacidad diferencial.',
    },
    {
      title: 'Data Engineering y Pipelines ETL/ELT',
      description: 'Ingeniería de datos a escala: pipelines ETL/ELT con Apache Airflow (DAGs Python), Azure Data Factory (pipelines visuales, triggers, linked services), AWS Glue (crawlers, ETL Spark serverless), Talend, Informatica PowerCenter. Orquestación compleja con dependencias, reintentos, alertas. Streaming real-time: Apache Kafka (producers, consumers, topics, partitions, Kafka Connect), Azure Event Hubs, AWS Kinesis Streams. Procesamiento streaming: Spark Structured Streaming, Flink, Kafka Streams. CDC (Change Data Capture) con Debezium para captura de cambios desde bases de datos transaccionales (Oracle, SQL Server, PostgreSQL, MySQL). Data validation con Great Expectations, dbt tests. Esquemas y versionado con Apache Avro, Parquet (columnar storage optimizado para analytics). Infraestructura como código (Terraform) para despliegue reproducible. Monitoreo de pipelines: logs centralizados (ELK), métricas (Prometheus), alerting (PagerDuty). Data observability (Monte Carlo, Databand).',
    },
    {
      title: 'Migración y Modernización de Plataformas BI Legacy',
      description: 'Migración estratégica de plataformas BI legacy (Cognos, BusinessObjects, MicroStrategy, SSRS, Crystal Reports) hacia soluciones modernas cloud-native (Power BI, Tableau, Looker). Assessment inicial: inventario de reportes (cuáles se usan realmente vs zombies), complejidad, dependencias, usuarios. Estrategias de migración: lift-and-shift (migración directa con mínimos cambios), refactoring (rediseño aprovechando capacidades modernas), retirement (eliminar reportes no usados). Fases típicas: 15-20% de reportes representan 80% del valor (Pareto). Migración incremental por oleadas (waves): reportes críticos primero. Re-capacitación de usuarios en self-service BI. Coexistencia temporal de plataformas durante transición (6-12 meses). Validación de datos post-migración (reconciliación numérica). TCO (Total Cost of Ownership): reducción típica 40-60% al migrar de on-premise a cloud BI. Casos de éxito: Oracle OBIEE → Power BI, SAP BusinessObjects → Tableau Server.',
    },
  ];

  const benefits = [
    {
      title: 'Democratización de Datos',
      description: 'Self-service BI para que cada área tome decisiones basadas en datos en tiempo real',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'ROI Medible',
      description: 'Reducción de hasta 70% en tiempo de generación de reportes, decisiones 3x más rápidas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Arquitectura Escalable',
      description: 'Soluciones cloud-native que escalan desde GBs hasta PBs de datos sin rediseño',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'IA Aplicada al Negocio',
      description: 'Modelos ML en producción que generan valor tangible: churn prediction, pricing optimization, demand forecasting',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  const technologies = [
    { name: 'Power BI', logo: '📊' },
    { name: 'Tableau', logo: '📈' },
    { name: 'Snowflake', logo: '❄️' },
    { name: 'Databricks', logo: '🧱' },
    { name: 'Python/R', logo: '🐍' },
    { name: 'Apache Spark', logo: '⚡' },
    { name: 'AWS/Azure ML', logo: '☁️' },
    { name: 'TensorFlow', logo: '🧠' },
  ];

  const faqs = [
    {
      question: '¿Cuánto tiempo toma implementar una solución de BI?',
      answer: 'Un dashboard ejecutivo básico toma 4-6 semanas. Una implementación completa de data warehouse + BI toma 3-6 meses dependiendo de la complejidad y cantidad de fuentes de datos. Trabajamos con entregas incrementales.',
    },
    {
      question: '¿Qué herramientas de BI recomiendan?',
      answer: 'Depende del ecosistema tecnológico y presupuesto. Power BI para organizaciones Microsoft, Tableau para empresas que buscan visualización avanzada, Looker para arquitecturas cloud-native. Somos agnósticos de herramienta.',
    },
    {
      question: '¿Ofrecen capacitación para usuarios de negocio?',
      answer: 'Sí, incluimos capacitación en self-service BI para que los usuarios de negocio creen sus propios reportes. Transferencia de conocimiento es clave en nuestros proyectos.',
    },
    {
      question: '¿Cómo garantizan la calidad de los datos?',
      answer: 'Implementamos gobierno de datos con validaciones automáticas, perfilado de datos, monitoreo de calidad, catálogos de datos. Definimos data quality KPIs y dashboards de monitoreo continuo.',
    },
    {
      question: '¿Qué diferencia hay entre BI tradicional y analítica predictiva?',
      answer: 'BI tradicional responde "¿qué pasó?" (descriptivo). Analítica predictiva responde "¿qué pasará?" usando modelos estadísticos y ML. Recomendamos comenzar con BI sólido y evolucionar a predictivo.',
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
            alt="Business Intelligence and Data Analytics"
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
              <span className="text-white">Business Intelligence</span>
            </nav>
            <h1 className="font-display font-bold text-4xl lg:text-display-lg mb-6 text-white">
              Inteligencia de Negocio y Data
            </h1>
            <p className="text-2xl text-accent-400 font-semibold mb-6">
              De Silos de Datos a Decisiones Inteligentes: BI, Analytics, ML e IA
            </p>
            <p className="text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed">
              Gobierno de datos, arquitectura de información, dashboards ejecutivos, analítica predictiva, machine learning
              e inteligencia artificial aplicada. Científicos de datos e ingenieros ML transformando información en ventaja competitiva.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.12),transparent_50%)]"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Convertimos tus datos en activos estratégicos con soluciones end-to-end: desde gobierno de datos
                y arquitectura de información hasta dashboards ejecutivos, modelos predictivos e inteligencia artificial.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Nuestros científicos de datos, ingenieros de ML y arquitectos de información diseñan soluciones escalables
                en plataformas cloud-native (Snowflake, Databricks, AWS, Azure) con herramientas enterprise-grade
                (Power BI, Tableau, Looker, Python, Spark).
              </p>
              <div className="bg-brand-50 border-l-4 border-brand-600 p-6 my-8">
                <p className="text-xl font-semibold text-brand-900 italic">
                  "De silos de datos a democratización de insights. De reportes Excel a dashboards en tiempo real.
                  De decisiones intuitivas a estrategias data-driven."
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
            Enfrentamos los desafíos más comunes en datos, analytics e inteligencia artificial
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 border-2 border-gray-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                <div className="text-blue-400 mb-4">{challenge.icon}</div>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-gray-900 text-center">
            Nuestra Solución
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Cobertura completa del ciclo de vida de datos e inteligencia de negocios
          </p>
          <div className="max-w-5xl mx-auto space-y-4">
            {verticals.map((vertical, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex items-center justify-between hover:bg-blue-50 transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    {vertical.title}
                  </span>
                  <svg className="w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white relative overflow-hidden">
        {/* Subtle animated background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.15),transparent_40%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(99,102,241,0.15),transparent_40%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-12 text-gray-900 text-center">
            Beneficios Clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4 text-gray-900 text-center">
            Stack Tecnológico
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Plataformas y herramientas enterprise-grade para datos y analytics
          </p>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-2 border-gray-200 rounded-xl px-8 py-6 hover:border-blue-500 hover:shadow-lg hover:bg-white transition-all"
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
            Resolvemos tus dudas sobre Business Intelligence y Analytics
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-800/50 border-2 border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-white flex items-center justify-between hover:bg-gray-800/80 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-blue-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <pattern id="bi-cta-grid-lines" width="80" height="80" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="80" y2="0" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
            </pattern>

            {/* Layer 2: Crosses on the same axes as grid lines - 16px total (±8) */}
            <pattern id="bi-cta-grid-crosses" width="80" height="80" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#bi-cta-grid-lines)" />
          <rect width="100%" height="100%" fill="url(#bi-cta-grid-crosses)" />
        </svg>

        <div className="container text-center relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              ¿Listo para Transformar Datos en Decisiones?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Agenda una sesión de diagnóstico con nuestros científicos de datos
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="font-bold text-xl mb-6">¿Qué servicios te interesan?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                {[
                  'Dashboards ejecutivos (BI)',
                  'Data warehouse / Data lake',
                  'Gobierno de datos',
                  'Analítica predictiva',
                  'Machine Learning',
                  'Inteligencia Artificial',
                ].map((service, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer hover:text-accent-300 transition-colors">
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
                    ? `Estoy interesado en los siguientes servicios de Business Intelligence y Data:\n\n${selectedServices.map(s => `- ${s}`).join('\n')}`
                    : 'Me gustaría recibir información sobre sus servicios de Business Intelligence y Data.';
                  navigate(`/contacto?services=${encodeURIComponent(servicesText)}`);
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
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
