const leadershipData = {
    'marcus-vail': {
        name: 'Dr. Marcus Vail',
        title: 'Chief Medical Officer',
        image: 'photo_2026-08-31_04-31-29.jpg',
        overview: 'Dr. Marcus Vail drives the clinical strategy and oversight of Averence Medical Group\'s global partnerships. With over 15 years of experience in cross-border medical integration, he ensures that the hardware and systems sourced meet the most rigorous international clinical standards.',
        responsibilities: [
            'Oversight of clinical hardware validation and safety protocols',
            'Bridging the gap between engineering specifications and medical application',
            'Directing the medical advisory board for product integration'
        ],
        focus: 'Clinical Integration & Technology Efficacy',
        contribution: 'Dr. Vail ensures that Averence does not merely supply equipment, but rather delivers holistic clinical capabilities. His profound understanding of hospital workflows allows the organization to preemptively solve logistical gaps before new technology reaches the operating theater.'
    },
    'sarah-chen': {
        name: 'Sarah Chen',
        title: 'VP of Global Operations',
        image: 'photo_2026-08-31_04-31-21.jpg',
        overview: 'Sarah Chen orchestrates the complex global supply chain across Averence’s international nodes. Specializing in rapid-deployment logistics, she streamlines the acquisition, shipping, and installation of massive infrastructural medical technologies.',
        responsibilities: [
            'Management of international logistics and cross-border distribution',
            'Optimization of supply chain pathways for high-tier medical hardware',
            'Oversight of procurement timelines and vendor relations'
        ],
        focus: 'Supply Chain Velocity & Operational Scaling',
        contribution: 'Through her strategic deployment frameworks, Chen has reduced average hardware procurement times by 30%, ensuring that crucial medical infrastructure reaches developing and established clinical environments precisely when needed.'
    },
    'julian-smith': {
        name: 'Julian Smith',
        title: 'Director of Strategic Partnerships',
        image: 'photo_2026-08-31_04-31-25.jpg',
        overview: 'Julian Smith serves as the primary liaison connecting Averence Medical Group with elite healthcare institutions, government health boards, and sovereign wealth funds. He establishes the foundational relationships necessary to execute massive infrastructural upgrades.',
        responsibilities: [
            'Negotiation of massive B2B medical infrastructure contracts',
            'Expansion of the Averence network into emerging healthcare markets',
            'Alignment of institutional objectives with Averence capabilities'
        ],
        focus: 'B2B Enterprise Relations & Market Expansion',
        contribution: 'Julian is instrumental in cementing Averence’s position as a preferred partner for governmental healthcare modernization initiatives. His diplomatic approach to corporate structuring secures long-term sustainability across multinational deployments.'
    },
    'elara-voss': {
        name: 'Elara Voss',
        title: 'Head of Technical Compliance',
        image: 'photo_2026-08-31_04-31-15.jpg',
        overview: 'Elara Voss leads the regulatory clearance and technical compliance divisions. Operating at the intersection of local medical laws and global engineering standards, she ensures that every piece of technology deployed by Averence is fully certified for clinical use in its destination country.',
        responsibilities: [
            'Navigation of international medical device regulations (FDA, CE, ISO)',
            'Conducting compliance audits for new manufacturing partners',
            'Managing documentation for cross-border medical hardware'
        ],
        focus: 'Regulatory Navigation & Quality Assurance',
        contribution: 'Her rigorous attention to regulatory nuances guarantees that Averence deployments are never delayed by compliance hurdles, protecting both the institution\'s timeline and the ultimate safety of the patients.'
    }
};
// Append Chinese translations to leadership.js
if (typeof leadershipData !== 'undefined') {
    leadershipData['marcus-vail'].name_zh = "Marcus Vail 博士";
    leadershipData['marcus-vail'].title_zh = "首席医疗官 (CMO)";
    leadershipData['marcus-vail'].overview_zh = "Marcus Vail 博士负责 Averence Medical Group 全球合作伙伴关系的临床战略和监督。他拥有超过 15 年的跨境医疗整合经验，确保所采购的硬件和系统满足最严格的国际临床标准。";
    leadershipData['marcus-vail'].responsibilities_zh = [
        "监督临床硬件验证和安全协议",
        "填补工程规格与医疗应用之间的差距",
        "指导产品集成医疗咨询委员会"
    ];
    leadershipData['marcus-vail'].focus_zh = "临床整合与技术效能";
    leadershipData['marcus-vail'].contribution_zh = "Vail 博士确保 Averence 不仅仅提供设备，而是提供全面的临床能力。他对医院工作流程的深刻理解，使组织能够在新技术到达手术室之前，预先解决物流缺口。";

    leadershipData['sarah-chen'].name_zh = "Sarah Chen";
    leadershipData['sarah-chen'].title_zh = "全球运营副总裁";
    leadershipData['sarah-chen'].overview_zh = "Sarah Chen 负责协调 Averence 国际节点内复杂的全球供应链。她专注于快速部署物流，简化了大型医疗基础设施技术的采购、运输和安装流程。";
    leadershipData['sarah-chen'].responsibilities_zh = [
        "管理国际物流和跨境分销",
        "优化高端医疗硬件的供应链路径",
        "监督采购时间表和供应商关系"
    ];
    leadershipData['sarah-chen'].focus_zh = "供应链速度与运营扩展";
    leadershipData['sarah-chen'].contribution_zh = "通过她的战略部署框架，Chen 将平均硬件采购时间缩短了 30%，确保最关键的医疗基础设施在最需要的时候到达发展中以及成熟的临床环境中。";

    leadershipData['julian-smith'].name_zh = "Julian Smith";
    leadershipData['julian-smith'].title_zh = "战略合作总监";
    leadershipData['julian-smith'].overview_zh = "Julian Smith 担任 Averence Medical Group 与精英医疗机构、政府卫生委员会和主权财富基金连接的主要联络人。他建立了执行大型基础设施升级所必需的基础合作关系。";
    leadershipData['julian-smith'].responsibilities_zh = [
        "谈判大型 B2B 医疗基础设施合同",
        "将 Averence 网络扩展到新兴医疗市场",
        "使机构目标与 Averence 能力保持一致"
    ];
    leadershipData['julian-smith'].focus_zh = "B2B 企业关系与市场扩张";
    leadershipData['julian-smith'].contribution_zh = "Julian 在巩固 Averence 作为政府医疗现代化计划首选合作伙伴方面发挥了关键作用。他应对企业结构的战略性方法确保了跨国部署的长期可持续性。";

    leadershipData['elara-voss'].name_zh = "Elara Voss";
    leadershipData['elara-voss'].title_zh = "技术合规主管";
    leadershipData['elara-voss'].overview_zh = "Elara Voss 领导监管清关和技术合规部门。在当地医疗法律和全球工程标准的交汇处，她确保 Averence 部署的每一项技术均完全获得目的地国家/地区的临床使用认证。";
    leadershipData['elara-voss'].responsibilities_zh = [
        "负责国际医疗设备法规 (FDA, CE, ISO) 导航",
        "对新制造合作伙伴进行合规审计",
        "管理跨境医疗硬件的文件编制"
    ];
    leadershipData['elara-voss'].focus_zh = "监管导航与质量保证";
    leadershipData['elara-voss'].contribution_zh = "她对监管细微差别的一丝不苟，确保 Averence 的部署永远不会因合规障碍而延误，保护了医疗机构的时间表和患者的最终安全。";
}

// Append Spanish translations to leadership.js
if (typeof leadershipData !== 'undefined') {
    leadershipData['marcus-vail'].name_es = "Dr. Marcus Vail";
    leadershipData['marcus-vail'].title_es = "Director Médico (CMO)";
    leadershipData['marcus-vail'].overview_es = "El Dr. Marcus Vail dirige la estrategia clínica y la supervisión de las asociaciones globales de Averence Medical Group. Con más de 15 años de experiencia en integración médica transfronteriza, garantiza que el hardware y los sistemas adquiridos cumplan con los estándares clínicos internacionales más rigurosos.";
    leadershipData['marcus-vail'].responsibilities_es = [
        "Supervisar la alineación de protocolos clínicos en instituciones extranjeras",
        "Conectar la ingeniería técnica con la práctica médica especializada",
        "Dirigir el proceso de validación en la adquisición de tecnología médica"
    ];
    leadershipData['marcus-vail'].focus_es = "Integración Clínica y Eficacia Tecnológica";
    leadershipData['marcus-vail'].contribution_es = "El Dr. Vail asegura que Averence no solo proporcione equipos, sino una capacidad clínica integral. Su profundo conocimiento de los flujos de trabajo hospitalarios permite a las organizaciones resolver brechas logísticas proactivamente antes de que la nueva tecnología llegue al quirófano.";

    leadershipData['sarah-chen'].name_es = "Sarah Chen";
    leadershipData['sarah-chen'].title_es = "Vicepresidenta de Operaciones Globales";
    leadershipData['sarah-chen'].overview_es = "Sarah Chen orquesta las complejas cadenas de suministro globales dentro de la red internacional de Averence. Especializada en logística de despliegue rápido, optimiza los flujos de adquisición, transporte e instalación de tecnología para infraestructura médica pesada.";
    leadershipData['sarah-chen'].responsibilities_es = [
        "Gestionar la logística internacional y distribución transfronteriza",
        "Optimizar las rutas de la cadena de suministro para el hardware médico pesado",
        "Supervisar cronogramas de compras y relaciones con los proveedores"
    ];
    leadershipData['sarah-chen'].focus_es = "Velocidad de la Cadena de Suministro y Escalamiento Operativo";
    leadershipData['sarah-chen'].contribution_es = "A través de sus esquemas de despliegue estratégico, Chen ha reducido los tiempos promedio en adquisiciones de hardware en un 30%, garantizando que la infraestructura médica más crítica llegue exactamente cuando se necesita a entornos clínicos maduros y en desarrollo.";

    leadershipData['julian-smith'].name_es = "Julian Smith";
    leadershipData['julian-smith'].title_es = "Director de Asociaciones Estratégicas";
    leadershipData['julian-smith'].overview_es = "Julian Smith es el principal enlace que conecta a Averence Medical Group con instituciones médicas de élite, juntas de salud gubernamentales y fondos soberanos de inversión. Establece las alianzas fundamentales necesarias para ejecutar actualizaciones masivas de infraestructura.";
    leadershipData['julian-smith'].responsibilities_es = [
        "Negociar grandes contratos B2B para infraestructuras de atención médica",
        "Expandir la red de Averence a los mercados emergentes de salud",
        "Alinear los objetivos institucionales con las capacidades operativas de Averence"
    ];
    leadershipData['julian-smith'].focus_es = "Relaciones Corporativas B2B y Expansión de Mercado";
    leadershipData['julian-smith'].contribution_es = "Julian ha sido fundamental para consolidar a Averence como el socio preferido en iniciativas gubernamentales para modernizar la atención médica. Su enfoque estratégico hacia la estructura corporativa garantiza la sostenibilidad a largo plazo en implementaciones multinacionales.";

    leadershipData['elara-voss'].name_es = "Elara Voss";
    leadershipData['elara-voss'].title_es = "Directora de Cumplimiento Técnico";
    leadershipData['elara-voss'].overview_es = "Elara Voss lidera la división sobre el despacho normativo y cumplimiento técnico. Operando en la intersección de las leyes médicas locales y los estándares de ingeniería globales, garantiza que cada equipo implementado por Averence esté completamente certificado para uso clínico en el país de destino.";
    leadershipData['elara-voss'].responsibilities_es = [
        "Gestión de normativas internacionales sobre dispositivos médicos (FDA, CE, ISO)",
        "Realizar auditorías de cumplimiento a nuevos socios de manufactura",
        "Administrar la documentación para cruce fronterizo del hardware médico"
    ];
    leadershipData['elara-voss'].focus_es = "Orientación Regulatoria y Aseguramiento de Calidad";
    leadershipData['elara-voss'].contribution_es = "Su meticulosa atención a los detalles regulatorios garantiza que una implementación de Averence nunca se retrase por obstáculos de cumplimiento normativo, protegiendo los plazos del hospital y, en última instancia, la seguridad de los pacientes."
}



// Append French translations to leadership.js
if (typeof leadershipData !== 'undefined') {
    leadershipData['marcus-vail'].name_fr = "Dr Marcus Vail";
    leadershipData['marcus-vail'].title_fr = "Médecin en Chef (CMO)";
    leadershipData['marcus-vail'].overview_fr = "Le Dr Marcus Vail dirige la stratégie clinique et la supervision des partenariats mondiaux d'Averence Medical Group. Avec plus de 15 ans d'expérience dans l'intégration médicale transfrontalière, il s'assure que le matériel et les systèmes acquis répondent aux normes cliniques internationales les plus rigoureuses.";
    leadershipData['marcus-vail'].responsibilities_fr = [
        "Supervision de la validation du matériel clinique et des protocoles de sécurité",
        "Combler le fossé entre les spécifications d'ingénierie et l'application médicale",
        "Direction du conseil consultatif médical pour l'intégration des produits"
    ];
    leadershipData['marcus-vail'].focus_fr = "Intégration Clinique et Efficacité Technologique";
    leadershipData['marcus-vail'].contribution_fr = "Le Dr Vail veille à ce qu'Averence ne se contente pas de fournir des équipements, mais offre plutôt des capacités cliniques complètes. Sa profonde compréhension des flux de travail hospitaliers permet à l'organisation de résoudre de manière préventive les lacunes logistiques avant même que la nouvelle technologie n'atteigne la salle d'opération.";

    leadershipData['sarah-chen'].name_fr = "Sarah Chen";
    leadershipData['sarah-chen'].title_fr = "Vice-Présidente des Opérations Mondiales";
    leadershipData['sarah-chen'].overview_fr = "Sarah Chen orchestre la chaîne d'approvisionnement mondiale complexe à travers les nœuds internationaux d'Averence. Spécialisée dans la logistique de déploiement rapide, elle rationalise l'acquisition, l'expédition et l'installation d'importantes technologies d'infrastructure médicale.";
    leadershipData['sarah-chen'].responsibilities_fr = [
        "Gestion de la logistique internationale et de la distribution transfrontalière",
        "Optimisation des voies de la chaîne d'approvisionnement pour le matériel médical haut de gamme",
        "Supervision des délais d'approvisionnement et des relations avec les fournisseurs"
    ];
    leadershipData['sarah-chen'].focus_fr = "Vélocité de la Chaîne d'Approvisionnement et Mise à l'Échelle Opérationnelle";
    leadershipData['sarah-chen'].contribution_fr = "Grâce à ses cadres de déploiement stratégique, Sarah a réduit les temps moyens d'approvisionnement en matériel de 30 %, garantissant que les infrastructures médicales cruciales atteignent les environnements cliniques en développement et établis précisément au moment opportun.";

    leadershipData['julian-smith'].name_fr = "Julian Smith";
    leadershipData['julian-smith'].title_fr = "Dir. des Partenariats Stratégiques";
    leadershipData['julian-smith'].overview_fr = "Julian Smith agit en tant que liaison principale connectant Averence Medical Group avec les institutions de santé d'élite, les conseils de santé gouvernementaux et les fonds souverains. Il établit les relations fondamentales nécessaires pour exécuter des mises à niveau infrastructurelles massives.";
    leadershipData['julian-smith'].responsibilities_fr = [
        "Négociation d'importants contrats d'infrastructure médicale B2B",
        "Expansion du réseau Averence vers les marchés de santé émergents",
        "Alignement des objectifs institutionnels avec les capacités d'Averence"
    ];
    leadershipData['julian-smith'].focus_fr = "Relations d'Entreprise B2B et Expansion de Marché";
    leadershipData['julian-smith'].contribution_fr = "Julian joue un rôle clé dans la consolidation de la position d'Averence en tant que partenaire de choix pour les initiatives gouvernementales de modernisation des soins de santé. Son approche diplomatique de la structuration d'entreprise assure une durabilité à long terme lors des déploiements multinationaux.";

    leadershipData['elara-voss'].name_fr = "Elara Voss";
    leadershipData['elara-voss'].title_fr = "Responsable de la Conformité Technique";
    leadershipData['elara-voss'].overview_fr = "Elara Voss dirige les divisions des autorisations réglementaires et de la conformité technique. Opérant à l'intersection des lois médicales locales et des normes d'ingénierie mondiales, elle s'assure que chaque technologie déployée par Averence est entièrement certifiée pour une utilisation clinique dans son pays de destination.";
    leadershipData['elara-voss'].responsibilities_fr = [
        "Navigation dans les réglementations internationales des dispositifs médicaux (FDA, CE, ISO)",
        "Réalisation d'audits de conformité pour les nouveaux partenaires de fabrication",
        "Gestion de la documentation pour le matériel médical transfrontalier"
    ];
    leadershipData['elara-voss'].focus_fr = "Navigation Réglementaire et Assurance Qualité";
    leadershipData['elara-voss'].contribution_fr = "Son attention rigoureuse aux nuances réglementaires garantit que les déploiements d'Averence ne sont jamais retardés par des obstacles de conformité, protégeant à la fois le calendrier de l'institution et la sécurité ultime des patients.";
}

// Append German translations to leadership.js
if (typeof leadershipData !== 'undefined') {
    leadershipData['marcus-vail'].name_de = "Dr. Marcus Vail";
    leadershipData['marcus-vail'].title_de = "Medizinischer Leiter (CMO)";
    leadershipData['marcus-vail'].overview_de = "Dr. Marcus Vail leitet die klinische Strategie und beaufsichtigt die globalen Partnerschaften der Averence Medical Group. Mit über 15 Jahren Erfahrung in der grenzüberschreitenden medizinischen Integration stellt er sicher, dass die beschaffte Hardware und die Systeme den strengsten internationalen klinischen Standards entsprechen.";
    leadershipData['marcus-vail'].responsibilities_de = [
        "Aufsicht über die klinische Hardware-Validierung und Sicherheitsprotokolle",
        "Die Lücke zwischen technischen Spezifikationen und medizinischer Anwendung schließen",
        "Leitung des medizinischen Beirats zur Produktintegration"
    ];
    leadershipData['marcus-vail'].focus_de = "Klinische Integration & Technologische Wirksamkeit";
    leadershipData['marcus-vail'].contribution_de = "Dr. Vail stellt sicher, dass Averence nicht nur Ausrüstung liefert, sondern ganzheitliche klinische Kapazitäten bereitstellt. Sein tiefgreifendes Verständnis der Arbeitsabläufe in Krankenhäusern ermöglicht es der Organisation, logistische Lücken präventiv zu schließen, bevor neue Technologie in den Operationssaal gelangt.";

    leadershipData['sarah-chen'].name_de = "Sarah Chen";
    leadershipData['sarah-chen'].title_de = "VP für Globale Operationen";
    leadershipData['sarah-chen'].overview_de = "Sarah Chen orchestriert die komplexe globale Lieferkette über die internationalen Knotenpunkte von Averence. Spezialisiert auf Schnelleinsatz-Logistik, rationalisiert sie die Beschaffung, den Versand und die Installation von massiven infrastrukturellen Medizintechnologien.";
    leadershipData['sarah-chen'].responsibilities_de = [
        "Management der internationalen Logistik und der grenzüberschreitenden Distribution",
        "Optimierung der Lieferketten für medizinische High-End-Hardware",
        "Aufsicht über Beschaffungsfristen und Lieferantenbeziehungen"
    ];
    leadershipData['sarah-chen'].focus_de = "Geschwindigkeit der Lieferkette & Operative Skalierung";
    leadershipData['sarah-chen'].contribution_de = "Durch ihre strategischen Einsatzkonzepte hat Sarah die durchschnittlichen Beschaffungszeiten für Hardware um 30 % verkürzt und damit sichergestellt, dass wichtige medizinische Infrastruktur in entstehenden sowie etablierten klinischen Umgebungen genau dann ankommt, wenn sie benötigt wird.";

    leadershipData['julian-smith'].name_de = "Julian Smith";
    leadershipData['julian-smith'].title_de = "Dir. für Strategische Partnerschaften";
    leadershipData['julian-smith'].overview_de = "Julian Smith fungiert als primärer Ansprechpartner, der die Averence Medical Group mit elitären Gesundheitsinstitutionen, staatlichen Gesundheitsbehörden und Staatsfonds verbindet. Er baut die fundamentalen Beziehungen auf, die zur Durchführung von massiven infrastrukturellen Modernisierungen nötig sind.";
    leadershipData['julian-smith'].responsibilities_de = [
        "Verhandlung über großvolumige B2B-Verträge im Bereich der medizinischen Infrastruktur",
        "Erweiterung des Averence-Netzwerks auf aufstrebende Gesundheitsmärkte",
        "Abstimmung institutioneller Ziele mit den Kapazitäten von Averence"
    ];
    leadershipData['julian-smith'].focus_de = "B2B-Unternehmensbeziehungen & Marktexpansion";
    leadershipData['julian-smith'].contribution_de = "Julian ist maßgeblich daran beteiligt, die Position von Averence als bevorzugter Partner für staatliche Initiativen zur Modernisierung des Gesundheitswesens zu festigen. Sein diplomatischer Ansatz der Unternehmensstrukturierung sichert langfristige Nachhaltigkeit über länderübergreifende Einsätze hinweg.";

    leadershipData['elara-voss'].name_de = "Elara Voss";
    leadershipData['elara-voss'].title_de = "Leiterin der Technischen Konformität";
    leadershipData['elara-voss'].overview_de = "Elara Voss leitet die Bereiche für behördliche Zulassungen und technische Konformität. An der Schnittstelle zwischen lokalen medizinischen Gesetzen und globalen Ingenieurstandards stellt sie sicher, dass jedes von Averence eingesetzte Stück Technologie in seinem Zielland vollständig für den klinischen Gebrauch zertifiziert ist.";
    leadershipData['elara-voss'].responsibilities_de = [
        "Sichere Navigation durch internationale Vorschriften für Medizinprodukte (FDA, CE, ISO)",
        "Durchführung von Konformitätsprüfungen für neue Fertigungspartner",
        "Verwaltung der Dokumentation für grenzüberschreitende medizinische Hardware"
    ];
    leadershipData['elara-voss'].focus_de = "Navigation durch Regularien & Qualitätssicherung";
    leadershipData['elara-voss'].contribution_de = "Ihre rigorose Aufmerksamkeit für regulatorische Nuancen garantiert, dass die Bereitstellung durch Averence niemals durch Beschränkungen der Rechtskonformität verzögert wird, was sowohl den Zeitplan der Institution als auch die letztendliche Sicherheit der Patienten schützt.";
}
