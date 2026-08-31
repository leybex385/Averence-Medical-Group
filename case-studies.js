const caseStudiesData = {
    "leading-private-hospital": {
        region: "Southeast Asia",
        institution: "Leading Private Hospital Group",
        title: "Advanced Diagnostic Imaging Modernization",
        specialty: "Advanced Diagnostic Imaging",
        image: "assets/case_study_asia.png",
        overview: "A comprehensive modernization initiative deployed across a leading private healthcare network in Southeast Asia, aimed at transforming diagnostic capabilities into a unified, high-efficiency clinical network.",
        challenge: "The hospital group was looking to modernize its diagnostic imaging capabilities and improve imaging workflow across its facilities. Expanding patient volumes required faster throughput without compromising diagnostic precision.",
        solution: "AVERENCE supported the evaluation and implementation of advanced diagnostic imaging technology suited to the institution's clinical workflow and operational requirements, bridging infrastructural gaps with high-performance imaging assets.",
        process: [
            "Comprehensive technical feasibility assessment",
            "Custom hardware and workflow mapping",
            "Logistical staging and clinical integration",
            "Operational workflow optimization training"
        ],
        technology: [
            "Next-Generation CT Scanning Infrastructure",
            "High-Resolution Digital X-Ray Systems",
            "Unified PACS Diagnostic Network"
        ],
        related: [
            "Digital X-Ray System",
            "CT Scanner System"
        ],
        impact: "A more modern diagnostic imaging environment with improved workflow efficiency and technology integration."
    },
    "university-medical-center": {
        region: "Europe",
        institution: "University Medical Center",
        title: "Establishing Connected Clinical Environments",
        specialty: "Integrated Patient Monitoring",
        image: "assets/case_study_europe.png",
        overview: "An infrastructural upgrade for a prominent European University Medical Center, designed to establish a ubiquitous, uninterrupted flow of patient vitals across various departments.",
        challenge: "The medical center required modern patient-monitoring technology to support clinical teams across multiple care environments. Legacy systems created fragmented data silos that hindered rapid response times.",
        solution: "AVERENCE provided healthcare technology solutions designed to improve monitoring capabilities and support efficient clinical workflows, delivering unified telemetry solutions across intensive care and step-down units.",
        process: [
            "Departmental telemetry capability auditing",
            "Enterprise-scale network architecture structuring",
            "Seamless vital integration deployment",
            "Specialized clinical adaptation strategies"
        ],
        technology: [
            "Advanced Patient Monitoring Systems",
            "Centralized Telemetry Data Nodes",
            "Continuous Ambulatory Tracking Arrays"
        ],
        related: [
            "Patient Monitoring System",
            "EEG Monitoring Unit"
        ],
        impact: "Improved monitoring workflows and a more connected clinical technology environment."
    },
    "specialized-neuroscience-hospital": {
        region: "Middle East",
        institution: "Specialized Neuroscience Hospital",
        title: "Strengthening Neurological Assessment Capabilities",
        specialty: "Advanced Neurological Diagnostics",
        image: "assets/case_study_middle_east.png",
        overview: "A highly specialized deployment of premium neurological diagnostic technology within one of the Middle East's premier neuroscience institutes, facilitating advanced brain monitoring and analysis.",
        challenge: "The institution sought advanced technology to strengthen neurological diagnostic and monitoring capabilities, specifically requiring high-channel precision mapping for complex cerebral assessments.",
        solution: "AVERENCE supported the integration of specialized neurological diagnostic technology appropriate for modern neuroscience care, enabling clinicians to acquire high-fidelity electrophysiological data.",
        process: [
            "Diagnostic requirement synthesis mapping",
            "Precision equipment sourcing and calibration",
            "Specialized integration deployment",
            "Post-deployment diagnostic validation protocols"
        ],
        technology: [
            "Advanced EEG Monitoring Systems",
            "Electrophysiological Signal Processors",
            "Continuous Neuro-Telemetry Networking"
        ],
        related: [
            "EEG Monitoring System",
            "CT Head Scan Modular Unit",
            "MRI System Series"
        ],
        impact: "Enhanced technological capabilities for neurological assessment and a more advanced diagnostic environment."
    }
};
// Append Chinese translations to case-studies.js
if (typeof caseStudiesData !== 'undefined') {
    caseStudiesData['leading-private-hospital'].institution_zh = "领先私立医院集团";
    caseStudiesData['leading-private-hospital'].region_zh = "东南亚";
    caseStudiesData['leading-private-hospital'].title_zh = "现代化诊断成像基础设施";
    caseStudiesData['leading-private-hospital'].specialty_zh = "高级医学成像";
    caseStudiesData['leading-private-hospital'].overview_zh = "在东南亚领先的私立医疗网络中部署的全面现代化计划，旨在改变诊断能力。";
    caseStudiesData['leading-private-hospital'].challenge_zh = "该医院集团正寻求将其诊断成像能力现代化，并改善其各设施的成像工作流程。患者数量的扩大需要更快的吞吐量，同时不影响诊断的精确性。";
    caseStudiesData['leading-private-hospital'].solution_zh = "AVERENCE 支持评估和实施适合该机构临床工作流程和运营需求的高级诊断成像技术，用高性能成像资产弥合基础设施差距。";
    caseStudiesData['leading-private-hospital'].process_zh = [
        "全面的技术可行性评估",
        "定制硬件和工作流程映射",
        "物流准备和临床整合",
        "运营工作流程优化培训"
    ];
    caseStudiesData['leading-private-hospital'].technology_zh = [
        "下一代 CT 扫描基础设施",
        "高分辨率数字 X 射线系统",
        "统一的 PACS 诊断网络"
    ];
    caseStudiesData['leading-private-hospital'].related_zh = [
        "数字 X 射线系统",
        "CT 扫描仪系统"
    ];
    caseStudiesData['leading-private-hospital'].impact_zh = "更现代化的诊断成像环境具备更高的工作流程效率和技术整合度。";

    caseStudiesData['university-medical-center'].institution_zh = "大学医疗中心";
    caseStudiesData['university-medical-center'].region_zh = "欧洲";
    caseStudiesData['university-medical-center'].title_zh = "建立互联的临床环境";
    caseStudiesData['university-medical-center'].specialty_zh = "综合患者监测";
    caseStudiesData['university-medical-center'].overview_zh = "欧洲知名大学医疗中心的基础设施升级，旨在建立各部门之间患者生命体征的无缝全覆盖数据流。";
    caseStudiesData['university-medical-center'].challenge_zh = "该医疗中心需要现代化的患者监测技术，以支持多个护理环境中的临床团队。传统的孤立系统造成了数据壁垒，阻碍了快速响应时间。";
    caseStudiesData['university-medical-center'].solution_zh = "AVERENCE 提供了旨在改善监测能力和支持高效临床工作流程的医疗技术解决方案，在重症监护和降级护理病房提供统一的遥测解决方案。";
    caseStudiesData['university-medical-center'].process_zh = [
        "部门遥测能力审计",
        "企业级网络架构构建",
        "无缝生命体征数据整合部署",
        "专门的临床适应策略"
    ];
    caseStudiesData['university-medical-center'].technology_zh = [
        "高级患者监测系统",
        "集中式遥测数据节点",
        "连续动态追踪阵列"
    ];
    caseStudiesData['university-medical-center'].related_zh = [
        "患者监测系统",
        "EEG 监测单元"
    ];
    caseStudiesData['university-medical-center'].impact_zh = "改善了监测工作流程和连接度更高的临床技术环境。";

    caseStudiesData['specialized-neuroscience-hospital'].institution_zh = "专业神经科学医院";
    caseStudiesData['specialized-neuroscience-hospital'].region_zh = "中东";
    caseStudiesData['specialized-neuroscience-hospital'].title_zh = "加强神经学评估能力";
    caseStudiesData['specialized-neuroscience-hospital'].specialty_zh = "高级神经诊断";
    caseStudiesData['specialized-neuroscience-hospital'].overview_zh = "中东首屈一指的神经科学研究所内高度专业化的高端神经诊断技术部署，促进了高级大脑监测和分析。";
    caseStudiesData['specialized-neuroscience-hospital'].challenge_zh = "该机构寻求先进技术以加强神经诊断和监测能力，特别需要用于复杂大脑评估的高通道精确绘图系统。";
    caseStudiesData['specialized-neuroscience-hospital'].solution_zh = "AVERENCE 支持整合适合现代神经科学护理的专业神经诊断技术，使临床医生能够获取高保真电生理数据。";
    caseStudiesData['specialized-neuroscience-hospital'].process_zh = [
        "诊断需求综合映射",
        "精密设备的采购与校准",
        "专业集成部署",
        "部署后的诊断验证协议"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].technology_zh = [
        "高级 EEG 监测系统",
        "电生理信号处理器",
        "连续神经遥测网络"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].related_zh = [
        "EEG 监测系统",
        "CT 头脑扫描模块",
        "MRI 系统系列"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].impact_zh = "增强了用于神经学评估的技术能力，提供了更先进的诊断环境。";
}

// Append Spanish translations to case-studies.js
if (typeof caseStudiesData !== 'undefined') {
    caseStudiesData['leading-private-hospital'].institution_es = "Grupo Prestigioso de Hospitales Privados";
    caseStudiesData['leading-private-hospital'].region_es = "Sudeste Asiático";
    caseStudiesData['leading-private-hospital'].title_es = "Modernización Avanzada de Imágenes Diagnósticas";
    caseStudiesData['leading-private-hospital'].specialty_es = "Imágenes Diagnósticas Avanzadas";
    caseStudiesData['leading-private-hospital'].overview_es = "Una iniciativa integral de modernización implementada en una red médica privada líder en el Sudeste Asiático, destinada a transformar las capacidades diagnósticas en una red clínica unificada y de alta eficiencia.";
    caseStudiesData['leading-private-hospital'].challenge_es = "El grupo hospitalario buscaba modernizar sus capacidades de imágenes diagnósticas y mejorar el flujo de trabajo en sus instalaciones. La expansión del volumen de pacientes exigía un procesamiento más rápido sin comprometer la precisión diagnóstica.";
    caseStudiesData['leading-private-hospital'].solution_es = "AVERENCE apoyó la evaluación e implementación de tecnología avanzada de imágenes diagnósticas adaptada al flujo clínico y los requisitos operativos de la institución, superando las brechas de infraestructura con equipos de alto rendimiento.";
    caseStudiesData['leading-private-hospital'].process_es = [
        "Evaluación técnica integral de viabilidad",
        "Mapeo personalizado de hardware y flujo de trabajo",
        "Preparación logística e integración clínica",
        "Capacitación en optimización del flujo operativo"
    ];
    caseStudiesData['leading-private-hospital'].technology_es = [
        "Infraestructura de tomografía computarizada de última generación",
        "Sistemas de rayos X digitales de ultra alta resolución",
        "Red de diagnóstico PACS unificada"
    ];
    caseStudiesData['leading-private-hospital'].related_es = [
        "Sistema de Rayos X Digital",
        "Sistema de Escáner TC"
    ];
    caseStudiesData['leading-private-hospital'].impact_es = "Un entorno de imágenes diagnósticas más moderno, con mayor eficiencia en el flujo de trabajo y profunda integración tecnológica.";

    caseStudiesData['university-medical-center'].institution_es = "Centro Médico Universitario";
    caseStudiesData['university-medical-center'].region_es = "Europa";
    caseStudiesData['university-medical-center'].title_es = "Estableciendo Ambientes Clínicos Conectados";
    caseStudiesData['university-medical-center'].specialty_es = "Monitoreo Integrado de Pacientes";
    caseStudiesData['university-medical-center'].overview_es = "Una actualización de infraestructura para un destacado Centro Médico Universitario Europeo, diseñada para establecer un flujo constante e ininterrumpido a partir de los signos vitales del paciente en todos los departamentos.";
    caseStudiesData['university-medical-center'].challenge_es = "El centro médico necesitaba tecnología moderna de monitorización para respaldar a los equipos clínicos en diversos entornos de atención. Los sistemas heredados creaban silos de datos fragmentados que retrasaban los tiempos de respuesta inmediata.";
    caseStudiesData['university-medical-center'].solution_es = "AVERENCE proporcionó soluciones tecnológicas médicas diseñadas para mejorar las capacidades de monitorización y optimizar los flujos clínicos, brindando soluciones integradas de telemetría a lo largo de las salas de cuidados intensivos y atención intermedia.";
    caseStudiesData['university-medical-center'].process_es = [
        "Auditoría de capacidad telemétrica departamental",
        "Estructuración de arquitectura de red a escala corporativa",
        "Despliegue e integración ininterrumpida de signos vitales",
        "Estrategias especializadas para la adaptación clínica"
    ];
    caseStudiesData['university-medical-center'].technology_es = [
        "Sistemas avanzados de monitorización de pacientes",
        "Nodos de datos centralizados de telemetría",
        "Redes continuas de rastreo ambulatorio"
    ];
    caseStudiesData['university-medical-center'].related_es = [
        "Sistema de Monitorización de Pacientes",
        "Unidad de Monitorización EEG"
    ];
    caseStudiesData['university-medical-center'].impact_es = "Mejores flujos de trabajo de monitorización y un entorno de tecnología clínica altamente conectado.";

    caseStudiesData['specialized-neuroscience-hospital'].institution_es = "Hospital Especializado en Neurociencia";
    caseStudiesData['specialized-neuroscience-hospital'].region_es = "Medio Oriente";
    caseStudiesData['specialized-neuroscience-hospital'].title_es = "Fortaleciendo Capacidades de Evaluación Neurológica";
    caseStudiesData['specialized-neuroscience-hospital'].specialty_es = "Diagnósticos Neurológicos Avanzados";
    caseStudiesData['specialized-neuroscience-hospital'].overview_es = "Un despliegue altamente especializado de tecnología diagnóstica neurológica premium en uno de los principales institutos de neurociencia del Medio Oriente, facilitando el análisis y la monitorización avanzada del cerebro.";
    caseStudiesData['specialized-neuroscience-hospital'].challenge_es = "La institución buscaba tecnología avanzada para fortalecer sus capacidades de diagnóstico y monitoreo neurológico, exigiendo específicamente sistemas de mapeo de alta precisión para evaluaciones cerebrales complejas.";
    caseStudiesData['specialized-neuroscience-hospital'].solution_es = "AVERENCE respaldó la integración de tecnología de diagnóstico apropiada para la atención moderna en neurociencia, permitiendo a los médicos adquirir datos electrofisiológicos de alta fidelidad.";
    caseStudiesData['specialized-neuroscience-hospital'].process_es = [
        "Mapeo integral de requisitos diagnósticos",
        "Adquisición y calibración de equipos de precisión",
        "Despliegue para integración especializada",
        "Protocolos de validación del diagnóstico post-implementación"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].technology_es = [
        "Sistemas avanzados de monitorización EEG",
        "Procesadores de señales electrofisiológicas",
        "Redes continuas de neuro-telemetría"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].related_es = [
        "Sistema de Monitorización EEG",
        "Unidad Modular de Escáner TC Cefálico",
        "Serie de Sistemas RM"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].impact_es = "Mayores capacidades tecnológicas para la evaluación neurológica y el establecimiento de un entorno diagnóstico moderno y avanzado."
}



// Append French translations to case-studies.js
if (typeof caseStudiesData !== 'undefined') {
    caseStudiesData['leading-private-hospital'].institution_fr = "Groupe Hospitalier Privé de Premier Plan";
    caseStudiesData['leading-private-hospital'].title_fr = "Modernisation de l'Infrastructure d'Imagerie Diagnostique";
    caseStudiesData['leading-private-hospital'].region_fr = "Asie du Sud-Est";
    caseStudiesData['leading-private-hospital'].specialty_fr = "Imagerie et Tomographie";
    caseStudiesData['leading-private-hospital'].overview_fr = "Une initiative de modernisation complète déployée à travers un réseau de santé privé leader en Asie du Sud-Est, visant à transformer les capacités diagnostiques en un réseau clinique unifié et à haute efficacité.";
    caseStudiesData['leading-private-hospital'].challenge_fr = "Le groupe hospitalier cherchait à moderniser ses capacités d'imagerie diagnostique et à améliorer le flux de travail d'imagerie dans ses établissements. L'augmentation des volumes de patients exigeait un débit plus rapide sans compromettre la précision diagnostique.";
    caseStudiesData['leading-private-hospital'].solution_fr = "AVERENCE a soutenu l'évaluation et la mise en œuvre de technologies d'imagerie diagnostique avancées adaptées au flux de travail clinique et aux exigences opérationnelles de l'institution, comblant les lacunes infrastructurelles avec des équipements d'imagerie de haute performance.";
    caseStudiesData['leading-private-hospital'].process_fr = [
        "Évaluation technique approfondie de la faisabilité",
        "Personnalisation du matériel et cartographie des flux de travail",
        "Organisation logistique et intégration clinique",
        "Formation sur l'optimisation des flux opérationnels"
    ];
    caseStudiesData['leading-private-hospital'].technology_fr = [
        "Infrastructure de tomographie de nouvelle génération",
        "Systèmes de radiographie numérique haute résolution",
        "Réseau de diagnostic PACS unifié"
    ];
    caseStudiesData['leading-private-hospital'].related_fr = [
        "Système de Radiographie Numérique",
        "Système de Scanner CT"
    ];
    caseStudiesData['leading-private-hospital'].impact_fr = "Un environnement d'imagerie diagnostique plus moderne, avec une efficacité accrue du flux de travail et d'intégration technologique.";

    caseStudiesData['university-medical-center'].title_fr = "Établissement d'Environnements Cliniques Connectés";
    caseStudiesData['university-medical-center'].institution_fr = "Centre Médical Universitaire";
    caseStudiesData['university-medical-center'].region_fr = "Europe";
    caseStudiesData['university-medical-center'].specialty_fr = "Surveillance et Soins Continus";
    caseStudiesData['university-medical-center'].overview_fr = "Une mise à niveau infrastructurelle pour un centre médical universitaire européen de premier plan, conçue pour établir un flux omniprésent et ininterrompu des signes vitaux des patients à travers divers départements.";
    caseStudiesData['university-medical-center'].challenge_fr = "Le centre médical nécessitait une technologie moderne de surveillance des patients pour soutenir les équipes cliniques dans plusieurs environnements de soins. Les systèmes obsolètes créaient des silos de données fragmentés qui entravaient les temps de réponse rapide.";
    caseStudiesData['university-medical-center'].solution_fr = "AVERENCE a fourni des solutions de technologie de la santé conçues pour améliorer les capacités de surveillance et soutenir des flux de travail cliniques efficaces, fournissant des solutions de télémétrie unifiées pour les soins intensifs et les unités de soins continus.";
    caseStudiesData['university-medical-center'].process_fr = [
        "Audit de la capacité de télémétrie départementale",
        "Architecture de réseau d'entreprise globale",
        "Déploiement d'une intégration vitale fluide",
        "Stratégies spécialisées d'adaptation clinique"
    ];
    caseStudiesData['university-medical-center'].technology_fr = [
        "Systèmes avancés de surveillance des patients",
        "Noeuds centralisés de données de télémétrie",
        "Réseaux de suivi continu ambulatoire"
    ];
    caseStudiesData['university-medical-center'].related_fr = [
        "Système de Surveillance des Patients",
        "Unité de Surveillance EEG"
    ];
    caseStudiesData['university-medical-center'].impact_fr = "Des flux de travail de surveillance améliorés et un environnement clinique et technique mieux connecté.";

    caseStudiesData['specialized-neuroscience-hospital'].title_fr = "Renforcement des Évaluations Neurologiques";
    caseStudiesData['specialized-neuroscience-hospital'].institution_fr = "Hôpital Spécialisé en Neurosciences";
    caseStudiesData['specialized-neuroscience-hospital'].region_fr = "Moyen-Orient";
    caseStudiesData['specialized-neuroscience-hospital'].specialty_fr = "Neurologie et Analyse Électrophysiologique";
    caseStudiesData['specialized-neuroscience-hospital'].overview_fr = "Un déploiement hautement spécialisé d'une technologie diagnostique neurologique de premier plan au sein de l'un des principaux instituts de neurosciences du Moyen-Orient, facilitant une surveillance et une analyse cérébrales avancées.";
    caseStudiesData['specialized-neuroscience-hospital'].challenge_fr = "L'institution a recherché une technologie avancée pour renforcer les capacités de diagnostic et de surveillance neurologiques, nécessitant spécifiquement une cartographie de précision à plusieurs canaux pour les évaluations cérébrales complexes.";
    caseStudiesData['specialized-neuroscience-hospital'].solution_fr = "AVERENCE a soutenu l'intégration d'une technologie diagnostique spécialisée appropriée pour les soins neuroscientifiques modernes, permettant aux cliniciens d'acquérir des données électrophysiologiques de haute fidélité.";
    caseStudiesData['specialized-neuroscience-hospital'].process_fr = [
        "Cartographie et synthèse des exigences diagnostiques",
        "Acquisition et calibrage des équipements de précision",
        "Déploiement avec intégration spécialisée",
        "Protocoles de validation diagnostics post-déploiement"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].technology_fr = [
        "Systèmes avancés de surveillance EEG",
        "Processeurs de traitement de signaux électrophysiologiques",
        "Réseau de neuro-télémétrie en continu"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].related_fr = [
        "Système de Surveillance EEG",
        "Module de Tomodensitométrie",
        "Série de Systèmes IRM"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].impact_fr = "Capacités technologiques améliorées avec évaluations neurologiques avancées, offrant un environnement diagnostic moderne.";
}

// Append German translations to case-studies.js
if (typeof caseStudiesData !== 'undefined') {
    caseStudiesData['leading-private-hospital'].institution_de = "Führende private Krankenhausgruppe";
    caseStudiesData['leading-private-hospital'].title_de = "Moderne Diagnostik-Bildgebungsinfrastruktur";
    caseStudiesData['leading-private-hospital'].region_de = "Südostasien";
    caseStudiesData['leading-private-hospital'].specialty_de = "Erweiterte diagnostische Bildgebung";
    caseStudiesData['leading-private-hospital'].overview_de = "Eine umfassende Modernisierungsinitiative, die in einem führenden privaten Gesundheitsnetzwerk in Südostasien umgesetzt wurde, um die diagnostischen Kapazitäten in ein einheitliches, hocheffizientes klinisches Netzwerk zu transformieren.";
    caseStudiesData['leading-private-hospital'].challenge_de = "Die Krankenhausgruppe suchte nach Möglichkeiten, ihre diagnostischen Bildgebungskapazitäten zu modernisieren und die Bildgebungs-Workflows in ihren Einrichtungen zu verbessern. Wachsende Patientenzahlen erforderten einen schnelleren Durchsatz, ohne die diagnostische Präzision zu beeinträchtigen.";
    caseStudiesData['leading-private-hospital'].solution_de = "AVERENCE unterstützte die Evaluierung und Implementierung fortschrittlicher diagnostischer Bildgebungstechnologien, die auf die klinischen Workflows und operativen Anforderungen der Institution abgestimmt waren, und überbrückte infrastrukturelle Lücken durch hochleistungsfähige Bildgebungssysteme.";
    caseStudiesData['leading-private-hospital'].process_de = [
        "Umfassende technische Machbarkeitsprüfung",
        "Anpassung an kundenspezifische Hardware und Workflow-Mapping",
        "Logistische Bereitstellung und klinische Integration",
        "Schulungen zur Optimierung operativer Abläufe"
    ];
    caseStudiesData['leading-private-hospital'].technology_de = [
        "CT-Scan-Infrastruktur der nächsten Generation",
        "Hochauflösende digitale Röntgensysteme",
        "Einheitliches PACS-Diagnostiknetzwerk"
    ];
    caseStudiesData['leading-private-hospital'].related_de = [
        "Digitales Röntgensystem",
        "CT-Scanner-System"
    ];
    caseStudiesData['leading-private-hospital'].impact_de = "Ein moderneres Umfeld für die diagnostische Bildgebung mit verbesserter Workflow-Effizienz und tiefgreifender Technologieintegration.";

    caseStudiesData['university-medical-center'].title_de = "Schaffung vernetzter klinischer Umgebungen";
    caseStudiesData['university-medical-center'].institution_de = "Universitätsklinikum";
    caseStudiesData['university-medical-center'].region_de = "Europa";
    caseStudiesData['university-medical-center'].specialty_de = "Integrierte Patientenüberwachung";
    caseStudiesData['university-medical-center'].overview_de = "Ein Infrastruktur-Upgrade für ein renommiertes europäisches Universitätsklinikum, das darauf ausgelegt ist, einen allgegenwärtigen, ununterbrochenen Fluss der Vitaldaten von Patienten über verschiedene Abteilungen hinweg zu etablieren.";
    caseStudiesData['university-medical-center'].challenge_de = "Das medizinische Zentrum benötigte moderne Patientenüberwachungstechnologie, um klinische Teams in zahlreichen Pflegeumgebungen zu unterstützen. Veraltete Systeme schufen fragmentierte Datensilos, die schnelle Reaktionszeiten behinderten.";
    caseStudiesData['university-medical-center'].solution_de = "AVERENCE lieferte medizinische Technologielösungen zur Verbesserung der Überwachungsfähigkeiten und Unterstützung reibungsloser klinischer Workflows und stellte einheitliche Telemetrielösungen auf Intensivstationen und Übergangsstationen zur Verfügung.";
    caseStudiesData['university-medical-center'].process_de = [
        "Abteilungsübergreifendes Telemetrie-Kapazitätsaudit",
        "Aufbau einer unternehmensweiten Netzwerkarchitektur",
        "Nahtlose Bereitstellung integrierter Vitaldaten",
        "Spezialisierte klinische Anpassungsstrategien"
    ];
    caseStudiesData['university-medical-center'].technology_de = [
        "Fortschrittliche Patientenüberwachungssysteme",
        "Zentralisierte Telemetrie-Datenknoten",
        "Kontinuierliche ambulante Erfassungsarrays"
    ];
    caseStudiesData['university-medical-center'].related_de = [
        "Patientenüberwachungssystem",
        "EEG-Überwachungseinheit"
    ];
    caseStudiesData['university-medical-center'].impact_de = "Verbesserte Überwachungs-Workflows und eine hochgradig vernetztere klinische Technologie-Umgebung.";

    caseStudiesData['specialized-neuroscience-hospital'].title_de = "Stärkung neurologischer Untersuchungen";
    caseStudiesData['specialized-neuroscience-hospital'].institution_de = "Spezialisiertes neurowissenschaftliches Krankenhaus";
    caseStudiesData['specialized-neuroscience-hospital'].region_de = "Naher Osten";
    caseStudiesData['specialized-neuroscience-hospital'].specialty_de = "Erweiterte neurologische Diagnostik";
    caseStudiesData['specialized-neuroscience-hospital'].overview_de = "Ein hochspezialisierter Einsatz erstklassiger neurologischer Diagnoseschritte in einem der herausragendsten neurowissenschaftlichen Institute des Nahen Ostens, welcher verbesserte Hirnüberwachung und -analyse ermöglicht.";
    caseStudiesData['specialized-neuroscience-hospital'].challenge_de = "Das Institut war bestrebt, mit fortschrittlicher Technologie neurologische Auswertungen und das Monitoring stark zu verbessern und forderte ganz gezielt ein hochkanaliges Präzisionskartierungs-Tracking zur komplexen Zerebralmessung.";
    caseStudiesData['specialized-neuroscience-hospital'].solution_de = "AVERENCE integrierte die dafür benötigte diagnostische Ausrüstung auf fachlich fortgeschrittenem Level der heutigen neurowissenschaftlichen Fürsorge, wodurch Ärzte nun detailgetreue elektrophysiologische Resultate generieren können.";
    caseStudiesData['specialized-neuroscience-hospital'].process_de = [
        "Diagnostische Anforderungs-Synthesekartierung",
        "Beschaffung und Kalibrierung der Präzisionsausrüstung",
        "Einsatz und Integration hochspezialisierter Systeme",
        "Validierungsprotokolle für Diagnostik nach Bereitstellung"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].technology_de = [
        "Erweiterte EEG-Überwachungssysteme",
        "Elektrophysiologische Signalprozessoren",
        "Kontinuierliche Neurotelemetrie-Vernetzung"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].related_de = [
        "EEG-Überwachungssystem",
        "CT-Kopf-Scan Modulareinheit",
        "Serie für MRT-Systeme"
    ];
    caseStudiesData['specialized-neuroscience-hospital'].impact_de = "Erweiterte technologische Möglichkeiten zur neurologischen Begutachtung und eine fortschrittlichere Diagnostikumgebung.";
}
