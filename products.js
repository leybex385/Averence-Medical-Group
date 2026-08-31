const productsData = {
    "digital-xray-system": {
        name: "Digital X-Ray System",
        category: "Imaging",
        image: "assets/product_xray.png",
        overview: "Advanced digital imaging technology designed for fast and accurate diagnostic radiography.",
        description: "The Digital X-Ray System is a sophisticated imaging platform delivering high-resolution diagnostic radiography. Engineered for speed and precision, it ensures optimal image clarity with minimal radiation exposure, enhancing both workflow efficiency and patient care in demanding clinical environments.",
        applications: ["Emergency Medicine", "Orthopedics", "General Radiography", "Outpatient Clinics"],
        capabilities: [
            "Ultra-low dose imaging protocols",
            "Instantaneous image acquisition and processing",
            "Automated positioning mechanics",
            "Seamless PACS/HIS integration"
        ],
        specs: {
            "Product Type": "Digital Radiography (DR) System",
            "Detector Type": "Amorphous Silicon Flat Panel",
            "Imaging/Monitoring Technology": "High-Frequency X-Ray Generator",
            "Configuration": "Ceiling Suspended or Floor Mounted",
            "Operating Requirements": "200-240V, 50/60Hz, 3-Phase",
            "Certifications": "ISO 13485, CE Marked (Placeholder)"
        }
    },
    "ct-scanner": {
        name: "CT Scanner",
        category: "Tomography",
        image: "assets/product_ct.png",
        overview: "High-performance computed tomography system for detailed cross-sectional medical imaging.",
        description: "This High-Performance CT Scanner utilizes advanced computed tomography algorithms to produce exceptionally detailed cross-sectional images of the human body. Designed for complex diagnostic scenarios, it balances rapid scan times with superior image fidelity, crucial for neurology, oncology, and cardiovascular assessments.",
        applications: ["Neurology", "Oncology", "Cardiology", "Trauma Centers"],
        capabilities: [
            "High-slice multi-detector array",
            "AI-assisted image reconstruction",
            "Advanced motion artifact reduction",
            "Automated dose modulation"
        ],
        specs: {
            "Product Type": "Computed Tomography System",
            "Detector Type": "Solid-State Scintillator Array",
            "Imaging Technology": "Multi-Slice Helical Scanning",
            "Configuration": "Standard Gantry with Automated Table",
            "Bore Size": "70cm - 80cm",
            "Operating Requirements": "380-480V, 50/60Hz, 3-Phase"
        }
    },
    "mri-system": {
        name: "MRI System",
        category: "Magnetic Resonance",
        image: "assets/product_mri.png",
        overview: "Advanced magnetic resonance imaging technology for detailed, non-invasive diagnostic examinations.",
        description: "Our state-of-the-art MRI System leverages advanced magnetic resonance technology to capture high-contrast soft tissue imaging without ionizing radiation. It features a patient-centric bore design and quiet scanning technology to maximize comfort while delivering critical diagnostic insights.",
        applications: ["Neuroimaging", "Musculoskeletal", "Body Imaging", "Advanced Research"],
        capabilities: [
            "High-field superconducting magnet",
            "Zero-boil-off helium technology",
            "Advanced neuro and cardiac sequencing",
            "Acoustic noise reduction technology"
        ],
        specs: {
            "Product Type": "Magnetic Resonance Imaging System",
            "Field Strength": "1.5T / 3.0T (Placeholder)",
            "Technology": "Superconducting Magnet",
            "Configuration": "Wide-Bore Cylindrical",
            "Bore Size": "70cm Wide Bore",
            "Operating Requirements": "Dedicated HVAC and RF Shielding"
        }
    },
    "ultrasound-system": {
        name: "Ultrasound System",
        category: "Sonography",
        image: "assets/product_ultrasound.png",
        overview: "Modern diagnostic ultrasound equipment for real-time imaging across multiple clinical applications.",
        description: "This modern Ultrasound System provides dynamic, real-time diagnostic imaging. Engineered for versatility, it supports a wide array of probes and features intuitive touchscreen controls, making it an indispensable tool for obstetrics, cardiology, and general sonography point-of-care environments.",
        applications: ["Obstetrics & Gynecology", "Cardiology", "Vascular Surgery", "Point-of-Care (POCUS)"],
        capabilities: [
            "Real-time 3D/4D volume rendering",
            "Advanced Color Doppler sensitivity",
            "Automated biometric measurements",
            "Ergonomic, height-adjustable console"
        ],
        specs: {
            "Product Type": "Diagnostic Ultrasound System",
            "Display": "21-inch High-Resolution OLED",
            "Imaging Technology": "Piezoelectric Transducer Array",
            "Configuration": "Mobile Cart-Based",
            "Transducer Ports": "4 Active Ports",
            "Operating Requirements": "100-240V, Standard Outlet"
        }
    },
    "robotic-surgical-system": {
        name: "Robotic-Assisted Surgical System",
        category: "Surgical Tech",
        image: "assets/product_robot.png",
        overview: "Advanced surgical technology designed to support precision and minimally invasive procedures.",
        description: "The Robotic-Assisted Surgical System represents the pinnacle of modern surgical intervention. By translating surgeon hand movements into highly precise micro-movements of robotic instruments, it facilitates complex, minimally invasive procedures with unparalleled control, 3D visualization, and dexterity.",
        applications: ["Urology", "Gynecology", "General Surgery", "Cardiothoracic Surgery"],
        capabilities: [
            "7 Degrees of Freedom instrument articulation",
            "Immersive 3D HD visualization console",
            "Tremor filtration and motion scaling",
            "Integrated intraoperative imaging"
        ],
        specs: {
            "Product Type": "Robotic Surgical Interface",
            "Components": "Surgeon Console, Patient Cart, Vision Cart",
            "Vision Technology": "3D Endoscopic Vision",
            "Configuration": "Multi-Arm Robotic Articulation",
            "Dimensions": "Requires standard OR footprint minimums",
            "Operating Requirements": "Hospital-grade redundant power systems"
        }
    },
    "eeg-monitoring-system": {
        name: "EEG / Brain Monitoring System",
        category: "Neurology",
        image: "assets/product_eeg.png",
        overview: "Specialized equipment for monitoring and evaluating electrical brain activity.",
        description: "Our EEG / Brain Monitoring System is designed for the rigorous evaluation of cerebral electrical activity. Providing continuous, high-fidelity neuro-monitoring, it is essential for diagnosing neurological disorders, managing epilepsy, and monitoring brain function in critical care settings.",
        applications: ["Epilepsy Monitoring Units", "Neurological ICU", "Sleep Centers", "Operating Rooms"],
        capabilities: [
            "High-density channel recording",
            "Real-time spectral analysis matrices",
            "Artifact rejection algorithms",
            "Synchronized digital video monitoring"
        ],
        specs: {
            "Product Type": "Electroencephalogram (EEG) System",
            "Channels": "Up to 256 active channels",
            "Monitoring Technology": "Electrophysiological Signal Processing",
            "Configuration": "Mobile Cart or Wall-Mounted",
            "Sampling Rate": "Up to 10,000 Hz / Channel",
            "Operating Requirements": "100-240V, Isolated Power Strip"
        }
    },
    "patient-monitoring-system": {
        name: "Patient Monitoring System",
        category: "Vital Tracking",
        image: "assets/product_monitor.png",
        overview: "Integrated monitoring technology for tracking essential patient vital signs in clinical environments.",
        description: "The Patient Monitoring System is an integrated, ruggedized platform for real-time tracking of critical patient vitals. With customizable intuitive displays and smart-alarming networks, it ensures clinical teams have continuous, actionable insights into patient health across the acuity spectrum.",
        applications: ["Intensive Care Units (ICU)", "Emergency Departments", "Post-Anesthesia Care (PACU)", "General Wards"],
        capabilities: [
            "Multi-parameter vital sign tracking (ECG, SpO2, NIBP, etc.)",
            "Central station networking telemetry",
            "Predictive clinical early-warning scores",
            "Hot-swappable transport modules"
        ],
        specs: {
            "Product Type": "Multi-Parameter Patient Monitor",
            "Display": "15-inch Touchscreen TFT LCD",
            "Monitoring Technology": "Continuous Vital Sign Telemetry",
            "Configuration": "Bedside Mount & Transport Capable",
            "Battery Life": "Up to 6 hours continuous operation",
            "Operating Requirements": "100-240V with Battery Backup"
        }
    },
    "laboratory-analyzer": {
        name: "Laboratory Analyzer",
        category: "Diagnostics",
        image: "assets/product_lab.png",
        overview: "Automated laboratory technology designed to support efficient and reliable diagnostic testing.",
        description: "Designed for high-throughput clinical laboratories, this Automated Laboratory Analyzer offers rapid analytical testing for blood and bodily fluids. Delivering precise, reliable diagnostic metadata, it features automated sample loading, extensive test menus, and intelligent quality control integrations.",
        applications: ["Clinical Pathology Labs", "Hospital Central Laboratories", "Research Facilities", "Blood Banks"],
        capabilities: [
            "High-throughput sample processing",
            "Automated reagent handling and cooling",
            "Continuous random-access capability",
            "Bi-directional LIS integration"
        ],
        specs: {
            "Product Type": "Clinical Chemistry / Immunoassay Analyzer",
            "Throughput": "Up to 800 tests/hour (Placeholder)",
            "Technology": "Spectrophotometry & Chemiluminescence",
            "Configuration": "Benchtop or Floor-Standing",
            "Sample Capacity": "100+ continuous loading tubes",
            "Operating Requirements": "Deionized water supply and specialized drainage"
        }
    }
};
// Append Chinese translations to products.js
if (typeof productsData !== 'undefined') {
    productsData['digital-xray-system'].name_zh = "数字 X 射线系统";
    productsData['digital-xray-system'].category_zh = "成像 (Imaging)";
    productsData['digital-xray-system'].overview_zh = "专为快速、准确的诊断放射学而设计的高级数字成像技术。该系统利用低剂量放射以极高保真度捕获解剖结构。";
    productsData['digital-xray-system'].description_zh = "我们的数字 X 射线系统提供全面的放射成像解决方案。系统采用平板探测器技术和增强的图像处理算法，从而产生满足苛刻临床环境需求的高分辨率图像。工作流程自动化减少了患者等待时间，同时保持了严谨的图像质量。";
    productsData['digital-xray-system'].specs_zh = {
        "探测器类型": "非晶硅 (TFT)",
        "像素间距": "139 微米",
        "空间分辨率": "3.6 lp/mm",
        "原像采集时间": "< 3 秒",
        "重量承载能力": "高达 300 公斤"
    };
    productsData['digital-xray-system'].capabilities_zh = [
        "针对复杂评估的自动曝光控制 (AEC)",
        "儿科低剂量模式",
        "无缝连接至机构 PACS 系统",
        "一键式自动全景成像对齐"
    ];
    productsData['digital-xray-system'].applications_zh = [
        "常规门诊放射成像",
        "急诊创伤评估",
        "骨科结构分析",
        "儿科胸部成像"
    ];

    productsData['ct-scanner'].name_zh = "CT 扫描仪";
    productsData['ct-scanner'].category_zh = "断层扫描 (Tomography)";
    productsData['ct-scanner'].overview_zh = "用于详细的横截面医疗成像的高性能计算机断层扫描系统，能够在短采集窗口期提供亚毫米分辨率。";
    productsData['ct-scanner'].description_zh = "这款 CT 扫描仪旨在满足急用诊断部门高吞吐量需求。它采用先进的人工智能降噪软件并可灵活配置高达 128 层的检测配置。该扫描仪非常适合心血管成像、神经学分析和广泛的肿瘤筛查参数。";
    productsData['ct-scanner'].specs_zh = {
        "系统层数": "128 层",
        "机架孔径": "78 cm",
        "扫描速度": "高达 0.35 秒/转",
        "探测器覆盖范围": "40 mm",
        "X 射线管热容量": "8.0 MHU"
    };
    productsData['ct-scanner'].capabilities_zh = [
        "AI 辅助迭代重建",
        "提供卓越冠状动脉成像的自动心电图门控",
        "金属伪影减少软件",
        "提供增强对比度反馈的双能量扫描选项"
    ];
    productsData['ct-scanner'].applications_zh = [
        "高级心脏和血管成像",
        "脑损伤和中风评估",
        "肺病和结节测绘",
        "骨科 3D 重建"
    ];

    productsData['mri-system'].name_zh = "MRI 系统";
    productsData['mri-system'].category_zh = "磁共振 (Magnetic Resonance)";
    productsData['mri-system'].overview_zh = "高级磁共振成像技术，用于详细的非侵入性诊断检查，以业界领先的梯度性能提供卓越的软组织对比度。";
    productsData['mri-system'].description_zh = "这款 3.0T MRI 系统旨在实现最高标准的临床和研究成像。通过利用超导磁体设计和创新射频采集方法，不仅生成了出色的图像质量，还能显著减少扫描持续时间。它具有声学降噪和舒适导向的设计。";
    productsData['mri-system'].specs_zh = {
        "场强": "3.0 Tesla",
        "机架直径": "70 cm（宽孔径）",
        "最大梯度振幅": "45 mT/m",
        "压摆率": "200 T/m/s",
        "氦消耗量": "零液氦蒸发技术"
    };
    productsData['mri-system'].capabilities_zh = [
        "高通道数头部/颈部线圈",
        "多核光谱成像支持",
        "声学降噪高达 80%",
        "安静的神经传导映射序列"
    ];
    productsData['mri-system'].applications_zh = [
        "复杂的神经学评估",
        "详细的肌肉骨骼网络绘图",
        "非对比度血管造影",
        "全身肿瘤学筛查"
    ];

    productsData['ultrasound-system'].name_zh = "超声系统";
    productsData['ultrasound-system'].category_zh = "超声 (Sonography)";
    productsData['ultrasound-system'].overview_zh = "现代化的诊断超声设备，用于适用于多种临床应用的实时成像，具有无与伦比的移动性和多功能性。";
    productsData['ultrasound-system'].description_zh = "这款优质超声服务车为床旁及专门诊断提供了卓越的人体工程学设计与高清成像功能组合。具有用于先进组织表征的应变弹性成像能力，支持全面护理环境中的快速、数据驱动的临床决策。";
    productsData['ultrasound-system'].specs_zh = {
        "监视器": "21.5英寸高清 LED",
        "换能器端口": "4 个激活端口",
        "系统架构": "128 通道高级波束成形技术",
        "电池待机时间": "2 小时",
        "系统重量": "55 公斤"
    };
    productsData['ultrasound-system'].capabilities_zh = [
        "用于组织分析的实时弹性成像",
        "全景成像与 3D/4D 支持",
        "自动卵泡和产科测量",
        "使用 AI 智能多普勒提高血流灵敏度"
    ];
    productsData['ultrasound-system'].applications_zh = [
        "心脏病学及心脏回声监测",
        "妇产科详细筛查",
        "血管诊断",
        "微小组织和浅表靶向评估"
    ];

    productsData['robotic-surgical-system'].name_zh = "机器人辅助手术系统";
    productsData['robotic-surgical-system'].category_zh = "外科技术 (Surgical Tech)";
    productsData['robotic-surgical-system'].overview_zh = "旨在支持高精度微创手术的高级介入手术技术。";
    productsData['robotic-surgical-system'].description_zh = "由最新的运动缩放和控制算法主导的下一代外科机器人平台。该系统为外科医生提供了具有十倍放大率的清晰 3D 高清视觉以及高灵活性设备控制，使复杂手术的复苏时间更短且结果更安全。";
    productsData['robotic-surgical-system'].specs_zh = {
        "机械臂数量": "4 个全活动臂",
        "视觉系统": "3D 高分辨率、双传感器",
        "器械自由度": "7 自由度",
        "医生控制台": "带集成触摸屏的双人体工学设计界面",
        "设置时间": "部署不超过 10 分钟"
    };
    productsData['robotic-surgical-system'].capabilities_zh = [
        "带运动消除的直观运动缩放",
        "集成荧光成像引导",
        "多象限访问管理配置",
        "用于教学和协作目的的双控制台就绪"
    ];
    productsData['robotic-surgical-system'].applications_zh = [
        "心胸外科",
        "泌尿外科干预",
        "胃肠直肠切除术",
        "复杂的妇科手术"
    ];

    productsData['eeg-monitoring-system'].name_zh = "EEG / 大脑监测系统";
    productsData['eeg-monitoring-system'].category_zh = "神经学 (Neurology)";
    productsData['eeg-monitoring-system'].overview_zh = "监控和评估大脑电生理活动的专业设备。";
    productsData['eeg-monitoring-system'].description_zh = "提供异常神经稳定性的研究级高保真 EEG 配置组合平台，专为神经科临床和睡眠评估中心设计，它结合了长时遥测和无噪音采集算法。";
    productsData['eeg-monitoring-system'].specs_zh = {
        "可配置通道数": "从 32 扩展到 128 通道",
        "采样带宽": "高达 4,000 Hz / 通道",
        "A/D 转换器": "24位分辨率",
        "存储接口": "云及临床数据库",
        "放大器重量": "< 400 克（可穿戴应用）"
    };
    productsData['eeg-monitoring-system'].capabilities_zh = [
        "连续长时遥测记录",
        "针对小幅癫痫发作的自动波形模式识别",
        "具有头皮视图映射的脑电地形图分析",
        "与其他生理神经源模块协同整合"
    ];
    productsData['eeg-monitoring-system'].applications_zh = [
        "临床癫痫评估和测图",
        "睡眠障碍多导睡眠图诊断",
        "ICU环境中的脑血管重症监测",
        "神经系统发展中的认知筛查"
    ];

    productsData['patient-monitoring-system'].name_zh = "患者监测系统";
    productsData['patient-monitoring-system'].category_zh = "生命体征跟踪 (Vital Tracking)";
    productsData['patient-monitoring-system'].overview_zh = "一种集成监控技术框架，用于不间断地跟踪临床环境中的患者核心生命体征。";
    productsData['patient-monitoring-system'].description_zh = "这款中央监控阵列是一个强大、完全网络互联的主干组件，用于支持急症护理记录。它旨在适应各种临床严峻情况，可保证针对关键生命体征出现波动时提供精确的数据可视性和通知，同时无缝集成所有住院病房记录。";
    productsData['patient-monitoring-system'].specs_zh = {
        "触摸屏显示器": "15 英寸 TFT 彩色多点触控",
        "参数功能": "心电图, 脉搏血氧, 血压计, 体温, 呼吸参数",
        "数据处理": "记录最多 120 小时的全公开波形",
        "连接协议": "HL7 和直接 EMR 导入结构",
        "警报系统": "具有视觉多重过滤的 3 个优先级"
    };
    productsData['patient-monitoring-system'].capabilities_zh = [
        "动态心电图自动分析",
        "带集中遥测系统的连接无线警报",
        "静默夜间护理模式配置",
        "连续心输出量血流分析模块化扩展"
    ];
    productsData['patient-monitoring-system'].applications_zh = [
        "急救和外科恢复网络",
        "重症监护 (ICU) 生命周期管理",
        "新生儿专门重症病房网络",
        "基础门诊及降级护理"
    ];

    productsData['laboratory-analyzer'].name_zh = "实验室分析仪";
    productsData['laboratory-analyzer'].category_zh = "诊断 (Diagnostics)";
    productsData['laboratory-analyzer'].overview_zh = "用于支持高效、高信度和快速批量处理诊断测试的自动实验室技术。";
    productsData['laboratory-analyzer'].description_zh = "一款紧凑而高级的全自动生化和临床分析仪。该系统针对处理中到高工作量的化验研究室而设计，其利用了离散检测方法，有效防止交叉污染并降低总拥有资源消耗成本，缩短了响应时间。";
    productsData['laboratory-analyzer'].specs_zh = {
        "吞吐能力": "最高 400 次 / 小时",
        "样本和试剂位": "90 组样品以及灵活的试剂阵列",
        "读取波长": "多波长选项 340nm-800nm",
        "纯水消耗量": "< 6 升 / 小时",
        "温控探测器": "精确保持在 37°C (+/- 0.1°C)"
    };
    productsData['laboratory-analyzer'].capabilities_zh = [
        "随时进行统计及随机自动样本访问",
        "自动重新稀释超范围数据",
        "具备条形码读取以方便自动化试剂和样品追踪",
        "免维护电化学 ISE 读取模块"
    ];
    productsData['laboratory-analyzer'].applications_zh = [
        "临床血清学及生化试验",
        "特定内分泌和毒理学筛查评估",
        "专门用于高要求的急诊科检测配置",
        "基础护理门诊诊断操作评估"
    ];
}

// Append Spanish translations to products.js
if (typeof productsData !== 'undefined') {
    productsData['digital-xray-system'].name_es = "Sistema de Rayos X Digital";
    productsData['digital-xray-system'].category_es = "Imagenología";
    productsData['digital-xray-system'].overview_es = "Tecnología de imagenología digital avanzada diseñada para radiografías diagnósticas rápidas y precisas. El sistema captura la anatomía con una exposición a dosis más bajas con altísima fidelidad.";
    productsData['digital-xray-system'].description_es = "El Sistema de Rayos X Digital es una plataforma sofisticada que ofrece radiografías diagnósticas de alta resolución. Diseñado para ofrecer velocidad y precisión, garantiza un flujo de trabajo óptimo y seguridad para el paciente en entornos clínicos exigentes.";
    productsData['digital-xray-system'].specs_es = {
        "Tipo de Producto": "Sistema de Radiografía Digital (DR)",
        "Tipo de Detector": "Panel Plano de Silicio Amorfo",
        "Tecnología Principal": "Generador de Rayos X de Alta Frecuencia",
        "Configuración": "Suspendido en Techo o Montado en Suelo",
        "Requisitos Operativos": "200-240V, 50/60Hz, Trifásico",
        "Certificaciones": "ISO 13485, Marca CE"
    };
    productsData['digital-xray-system'].capabilities_es = [
        "Protocolos de imagenología de dosis ultrabaja",
        "Adquisición y procesamiento de imágenes instantáneo",
        "Mecánica de posicionamiento automatizado",
        "Integración perfecta con PACS/HIS"
    ];
    productsData['digital-xray-system'].applications_es = [
        "Medicina de Urgencias",
        "Ortopedia",
        "Radiografía General",
        "Clínicas Ambulatorias"
    ];

    productsData['ct-scanner'].name_es = "Escáner CT";
    productsData['ct-scanner'].category_es = "Tomografía";
    productsData['ct-scanner'].overview_es = "Sistema de tomografía computarizada de alto rendimiento para imágenes médicas transversales detalladas, capaz de proporcionar resolución submilimétrica en ventanas de adquisición breves.";
    productsData['ct-scanner'].description_es = "Este Escáner CT de alto rendimiento utiliza algoritmos avanzados para producir imágenes transversales excepcionalmente detalladas. Mejora los diagnósticos complejos con tiempos de exploración rápidos, crucial para evaluaciones neurológicas, oncológicas y cardiovasculares.";
    productsData['ct-scanner'].specs_es = {
        "Tipo de Producto": "Sistema de Tomografía Computarizada",
        "Tipo de Detector": "Matriz de Centelleador de Estado Sólido",
        "Tecnología de Imagenología": "Exploración Helicoidal Multicorte",
        "Configuración": "Gantry Estándar con Mesa Automatizada",
        "Tamaño de Abertura": "70cm - 80cm",
        "Requisitos Operativos": "380-480V, 50/60Hz, Trifásico"
    };
    productsData['ct-scanner'].capabilities_es = [
        "Matriz multidetector de altos cortes",
        "Reconstrucción de imágenes asistida por IA",
        "Reducción avanzada de artefactos de movimiento",
        "Modulación automatizada de dosis"
    ];
    productsData['ct-scanner'].applications_es = [
        "Neurología",
        "Oncología",
        "Cardiología",
        "Centros de Traumatología"
    ];

    productsData['mri-system'].name_es = "Sistema MRI";
    productsData['mri-system'].category_es = "Resonancia Magnética";
    productsData['mri-system'].overview_es = "Tecnología avanzada de imágenes por resonancia magnética para evaluaciones diagnósticas detalladas y no invasivas, proporcionando un contraste excepcional de tejidos blandos.";
    productsData['mri-system'].description_es = "Nuestro avanzado Sistema MRI aprovecha la tecnología de resonancia magnética para capturar imágenes de tejidos blandos de alto contraste sin radiación ionizante. Cuenta con un diseño amplio y tecnología de escaneo silencioso para maximizar el confort del paciente.";
    productsData['mri-system'].specs_es = {
        "Tipo de Producto": "Sistema de Imágenes por Resonancia Magnética",
        "Intensidad de Campo": "1.5T / 3.0T",
        "Tecnología": "Imán Superconductor",
        "Configuración": "Cilíndrico de Abertura Amplia",
        "Tamaño de Abertura": "Abertura Amplia de 70cm",
        "Requisitos Operativos": "HVAC Especializado y Blindaje RF"
    };
    productsData['mri-system'].capabilities_es = [
        "Imán superconductor de alto campo",
        "Tecnología de helio sin evaporación",
        "Secuencias neurológicas y cardíacas avanzadas",
        "Tecnología de reducción de ruido acústico"
    ];
    productsData['mri-system'].applications_es = [
        "Neuroimagen",
        "Musculoesquelético",
        "Imágenes Corporales",
        "Investigación Avanzada"
    ];

    productsData['ultrasound-system'].name_es = "Sistema de Ultrasonido";
    productsData['ultrasound-system'].category_es = "Sonografía";
    productsData['ultrasound-system'].overview_es = "Equipo de ultrasonido diagnóstico moderno para imágenes en tiempo real en múltiples aplicaciones clínicas, con movilidad y versatilidad incomparables.";
    productsData['ultrasound-system'].description_es = "Este moderno Sistema de Ultrasonido proporciona imágenes diagnósticas dinámicas en tiempo real. Diseñado para la versatilidad, es compatible con una amplia gama de sondas y cuenta con controles táctiles intuitivos, ideal para obstetricia, cardiología y sonografía general en el punto de atención (POC).";
    productsData['ultrasound-system'].specs_es = {
        "Tipo de Producto": "Sistema de Ultrasonido Diagnóstico",
        "Pantalla": "OLED de Alta Resolución de 21 pulgadas",
        "Tecnología de Imagenología": "Matriz de Transductores Piezoeléctricos",
        "Configuración": "Basado en Carrito Móvil",
        "Puertos del Transductor": "4 Puertos Activos",
        "Requisitos Operativos": "100-240V, Toma de Corriente Estándar"
    };
    productsData['ultrasound-system'].capabilities_es = [
        "Renderizado de volúmenes 3D/4D en tiempo real",
        "Sensibilidad avanzada de Doppler a color",
        "Mediciones biométricas automatizadas",
        "Consola ergonómica y ajustable en altura"
    ];
    productsData['ultrasound-system'].applications_es = [
        "Obstetricia y Ginecología",
        "Cardiología",
        "Cirugía Vascular",
        "Punto de Atención (POCUS)"
    ];

    productsData['robotic-surgical-system'].name_es = "Sistema Quirúrgico Asistido por Robot";
    productsData['robotic-surgical-system'].category_es = "Tecnología Quirúrgica";
    productsData['robotic-surgical-system'].overview_es = "Tecnología quirúrgica avanzada diseñada para respaldar procedimientos de alta precisión y mínima invasión.";
    productsData['robotic-surgical-system'].description_es = "El Sistema Quirúrgico Asistido por Robot representa el pináculo de la intervención moderna. Traduce los movimientos naturales de las manos en micromovimientos precisos, facilitando procedimientos mínimos complejos con destreza inigualable y visualización 3D.";
    productsData['robotic-surgical-system'].specs_es = {
        "Tipo de Producto": "Interfaz Quirúrgica Robótica",
        "Componentes": "Consola del Cirujano, Carrito del Paciente, Carrito de Visión",
        "Tecnología de Visión": "Visión Endoscópica en 3D",
        "Configuración": "Articulación Robótica Multibrazo",
        "Dimensiones": "Requiere dimensiones estándares mínimas de quirófanos",
        "Requisitos Operativos": "Sistemas de energía redundantes de grado hospitalario"
    };
    productsData['robotic-surgical-system'].capabilities_es = [
        "Articulación de instrumentos con 7 grados de libertad",
        "Consola de visualización envolvente en 3D HD",
        "Mecanismo de filtrado de temblores y escalado de movimientos",
        "Imágenes intraoperatorias integradas"
    ];
    productsData['robotic-surgical-system'].applications_es = [
        "Urología",
        "Ginecología",
        "Cirugía General",
        "Cirugía Cardiotorácica"
    ];

    productsData['eeg-monitoring-system'].name_es = "Sistema EEG / Monitoreo Cerebral";
    productsData['eeg-monitoring-system'].category_es = "Neurología";
    productsData['eeg-monitoring-system'].overview_es = "Equipos especializados para la monitorización y evaluación del registro de la actividad eléctrica cerebral.";
    productsData['eeg-monitoring-system'].description_es = "Nuestro Sistema de Monitoreo Cerebral / EEG está diseñado para la evaluación rigurosa de la actividad eléctrica cerebral. Ofrece un neuromonitoreo continuo de alta fidelidad, fundamental para diagnosticar trastornos neurológicos y el manejo de epilepsia.";
    productsData['eeg-monitoring-system'].specs_es = {
        "Tipo de Producto": "Sistema de Electroencefalograma (EEG)",
        "Canales": "Hasta 256 canales activos",
        "Tecnología de Monitoreo": "Procesamiento de Señales Electrofisiológicas",
        "Configuración": "Carrito Móvil o Montado en Pared",
        "Frecuencia de Muestreo": "Hasta 10,000 Hz / Canal",
        "Requisitos Operativos": "100-240V, Regleta de Alimentación Aislada"
    };
    productsData['eeg-monitoring-system'].capabilities_es = [
        "Grabación de canales de alta densidad",
        "Matrices de análisis espectral en tiempo real",
        "Algoritmos innovadores en rechazos de artefactos",
        "Monitoreo de video digital sincronizado"
    ];
    productsData['eeg-monitoring-system'].applications_es = [
        "Unidades de Monitoreo de Epilepsia",
        "UCI Neurológica",
        "Centros del Sueño",
        "Quirófanos"
    ];

    productsData['patient-monitoring-system'].name_es = "Sistema de Monitoreo de Pacientes";
    productsData['patient-monitoring-system'].category_es = "Signos Vitales";
    productsData['patient-monitoring-system'].overview_es = "Un marco integrador tecnológico para el seguimiento ininterrumpido de constantes y signos vitales del paciente a nivel clínico.";
    productsData['patient-monitoring-system'].description_es = "El Sistema de Monitoreo de Pacientes es una plataforma sólida que proporciona información crítica en tiempo real sobre los signos vitales. Sus paneles intuitivos garantizan datos inmediatos y prácticos, mejorando las redes y alertas sobre todo espectro para equipos médicos.";
    productsData['patient-monitoring-system'].specs_es = {
        "Tipo de Producto": "Monitor de Pacientes Multiparamétrico",
        "Pantalla": "Pantalla Táctil TFT LCD de 15 pulgadas",
        "Tecnología de Monitoreo": "Telemetría Continua de Signos Vitales",
        "Configuración": "Soporte de Cabecera y Capacidad de Transporte",
        "Duración de Batería": "Hasta 6 horas de operación continua",
        "Requisitos Operativos": "100-240V con Batería de Respaldo"
    };
    productsData['patient-monitoring-system'].capabilities_es = [
        "Rastreo multiparamétrico (ECG, SpO2, NIBP, etc.)",
        "Red de telemetría de estación central",
        "Puntuaciones predictivas y sistemas clínicos de alerta temprana",
        "Módulos de transporte portátiles intercambiables listos"
    ];
    productsData['patient-monitoring-system'].applications_es = [
        "Unidades de Cuidados Intensivos (UCI)",
        "Departamentos de Urgencias",
        "Unidad de Reanimación/Anestesia (URPA)",
        "Salas Generales"
    ];

    productsData['laboratory-analyzer'].name_es = "Analizador de Laboratorio";
    productsData['laboratory-analyzer'].category_es = "Diagnóstico";
    productsData['laboratory-analyzer'].overview_es = "Tecnología automatizada en laboratorio diseñada para respaldar flujos de trabajo sobre un diagnóstico y procesamiento veloz por lotes altamente eficientes.";
    productsData['laboratory-analyzer'].description_es = "Diseñado para los laboratorios clínicos de alta productividad, el Analizador Automático optimiza y proporciona pruebas analíticas precisas de forma rápida para sangre o fluidos corporales con una amplia oferta y métricas fiables de menús de prueba e integraciones.";
    productsData['laboratory-analyzer'].specs_es = {
        "Tipo de Producto": "Analizador de Química Clínica e Inmunoensayo",
        "Rendimiento": "Hasta 800 pruebas/hora",
        "Tecnología": "Espectrofotometría y Quimioluminiscencia",
        "Configuración": "De Sobremesa o de Suelo",
        "Capacidad de Muestra": "Más de 100 tubos de carga continua",
        "Requisitos Operativos": "Suministro de agua desionizada y drenaje especializado"
    };
    productsData['laboratory-analyzer'].capabilities_es = [
        "Alto rendimiento total en procesamiento veloz e integración de muestras",
        "Manejo y enfriamiento de reactivos automatizados",
        "Capacidad rápida general de acceso aleatorio continuo",
        "Integración bidireccional sobre bases LIS"
    ];
    productsData['laboratory-analyzer'].applications_es = [
        "Laboratorios Clínicos y de Patología",
        "Laboratorios Hospitalarios y Sistemas Centrales",
        "Centros de Investigación",
        "Bancos de Sangre"
    ];
}


// Append French translations to products.js
if (typeof productsData !== 'undefined') {
    productsData['digital-xray-system'].name_fr = "Système de Radiographie Numérique";
    productsData['digital-xray-system'].category_fr = "Imagerie";
    productsData['digital-xray-system'].overview_fr = "Technologie d'imagerie numérique avancée conçue pour une radiographie diagnostique rapide et précise.";
    productsData['digital-xray-system'].description_fr = "Le système de radiographie numérique est une plate-forme d'imagerie sophistiquée fournissant des radiographies diagnostiques haute résolution. Conçu pour la vitesse et la précision, il assure une clarté d'image optimale avec une exposition minimale aux rayonnements, améliorant à la fois l'efficacité du flux de travail et les soins aux patients dans les environnements cliniques exigeants.";
    productsData['digital-xray-system'].specs_fr = {
        "Type de produit": "Système de Radiographie Numérique (DR)",
        "Type de Détecteur": "Écran Plat en Silicium Amorphe",
        "Technologie d'Imagerie": "Générateur de Rayons X à Haute Fréquence",
        "Configuration": "Suspendu au Plafond ou Fixé au Sol",
        "Exigences Opérationnelles": "200-240V, 50/60Hz, Triphasé",
        "Certifications": "ISO 13485, Marquage CE"
    };
    productsData['digital-xray-system'].capabilities_fr = [
        "Protocoles d'imagerie à dose ultra-faible",
        "Acquisition et traitement d'images instantanés",
        "Mécanique de positionnement automatisée",
        "Intégration transparente avec le système PACS/HIS"
    ];
    productsData['digital-xray-system'].applications_fr = [
        "Médecine d'Urgence",
        "Orthopédie",
        "Radiographie Générale",
        "Cliniques Externes"
    ];

    productsData['ct-scanner'].name_fr = "Scanner CT";
    productsData['ct-scanner'].category_fr = "Tomographie";
    productsData['ct-scanner'].overview_fr = "Système de tomodensitométrie haute performance pour une imagerie médicale transversale détaillée.";
    productsData['ct-scanner'].description_fr = "Ce scanner CT haute performance utilise des algorithmes avancés de tomodensitométrie pour produire des images transversales exceptionnellement détaillées du corps humain. Conçu pour des scénarios de diagnostic complexes, il équilibre des temps de balayage rapides avec une qualité d'image supérieure, essentielle pour les évaluations en neurologie, oncologie et cardiologie.";
    productsData['ct-scanner'].specs_fr = {
        "Type de Produit": "Système de Tomodensitométrie",
        "Type de Détecteur": "Réseau de Scintillateurs à l'État Solide",
        "Technologie d'Imagerie": "Exploration Hélicoïdale Multicoupe",
        "Configuration": "Portique Standard avec Table Automatisée",
        "Taille de l'Anneau": "70 cm - 80 cm",
        "Exigences Opérationnelles": "380-480V, 50/60Hz, Triphasé"
    };
    productsData['ct-scanner'].capabilities_fr = [
        "Réseau de détecteurs multiples à haute résolution",
        "Reconstruction d'images assistée par l'IA",
        "Réduction avancée des artefacts de mouvement",
        "Modulation d'exposition automatisée"
    ];
    productsData['ct-scanner'].applications_fr = [
        "Neurologie",
        "Oncologie",
        "Cardiologie",
        "Centres de Traumatologie"
    ];

    productsData['mri-system'].name_fr = "Système IRM";
    productsData['mri-system'].category_fr = "Résonance Magnétique";
    productsData['mri-system'].overview_fr = "Technologie avancée d'imagerie par résonance magnétique pour des examens diagnostiques détaillés et non invasifs.";
    productsData['mri-system'].description_fr = "Notre système IRM de pointe utilise la technologie de résonance magnétique avancée pour capturer des images des tissus mous à contraste élevé sans rayonnement ionisant. Il présente une conception d'anneau axée sur la patience et un système de balayage silencieux pour un confort maximal, tout en offrant des informations diagnostiques critiques.";
    productsData['mri-system'].specs_fr = {
        "Type de Produit": "Système d'Imagerie par Résonance Magnétique",
        "Intensité du Champ": "1.5T / 3.0T",
        "Technologie": "Aimant Supraconducteur",
        "Configuration": "Cylindrique à Anneau Large",
        "Taille de l'Anneau": "Anneau Large de 70 cm",
        "Exigences Opérationnelles": "CVC Dédié et Blindage RF"
    };
    productsData['mri-system'].capabilities_fr = [
        "Aimant supraconducteur à champ élevé",
        "Technologie d'hélium zéro évaporation",
        "Séquences neurologiques et cardiaques avancées",
        "Technologie de réduction du bruit acoustique"
    ];
    productsData['mri-system'].applications_fr = [
        "Neuroimagerie",
        "Musculo-Squelettique",
        "Imagerie Corporelle",
        "Recherche Avancée"
    ];

    productsData['ultrasound-system'].name_fr = "Système d'Échographie";
    productsData['ultrasound-system'].category_fr = "Échographie";
    productsData['ultrasound-system'].overview_fr = "Équipement d'échographie diagnostique moderne pour l'imagerie en temps réel dans de multiples applications cliniques.";
    productsData['ultrasound-system'].description_fr = "Ce système d'échographie moderne offre une imagerie diagnostique dynamique en temps réel. Conçu pour la polyvalence, il prend en charge un large éventail de sondes et dispose de commandes tactiles intuitives, ce qui en fait un outil indispensable pour l'obstétrique, la cardiologie et l'échographie générale sur le lieu de soins.";
    productsData['ultrasound-system'].specs_fr = {
        "Type de Produit": "Système d'Échographie Diagnostique",
        "Écran": "OLED Haute Résolution de 21 pouces",
        "Technologie d'Imagerie": "Matrice de Transducteurs Piézoélectriques",
        "Configuration": "Sur Chariot Mobile",
        "Ports de Transducteur": "4 Ports Actifs",
        "Exigences Opérationnelles": "100-240V, Prise Standard"
    };
    productsData['ultrasound-system'].capabilities_fr = [
        "Rendu de volume 3D/4D en temps réel",
        "Sensibilité Doppler couleur avancée",
        "Mesures biométriques automatisées",
        "Console ergonomique et réglable en hauteur"
    ];
    productsData['ultrasound-system'].applications_fr = [
        "Obstétrique et Gynécologie",
        "Cardiologie",
        "Chirurgie Vasculaire",
        "Échographie sur le Lieu de Soins (POCUS)"
    ];

    productsData['robotic-surgical-system'].name_fr = "Système Chirurgical Assisté par Robot";
    productsData['robotic-surgical-system'].category_fr = "Technologie Chirurgicale";
    productsData['robotic-surgical-system'].overview_fr = "Technologie chirurgicale avancée conçue pour soutenir la précision et les procédures mini-invasives.";
    productsData['robotic-surgical-system'].description_fr = "Le système chirurgical assisté par robot représente le summum de l'intervention chirurgicale moderne. En traduisant les mouvements de la main du chirurgien en micro-mouvements très précis, il facilite les procédures complexes et mini-invasives avec un contrôle, une visualisation en 3D et une dextérité inégalés.";
    productsData['robotic-surgical-system'].specs_fr = {
        "Type de Produit": "Interface Chirurgicale Robotique",
        "Composants": "Console Chirurgien, Chariot Patient, Chariot de Vision",
        "Technologie de Vision": "Vision Endoscopique 3D",
        "Configuration": "Articulation Robotique à Bras Multiples",
        "Dimensions": "Empreinte requise correspondant à la salle d'opération standard",
        "Exigences Opérationnelles": "Systèmes électriques de secours aux normes hospitalières"
    };
    productsData['robotic-surgical-system'].capabilities_fr = [
        "Mécanismes d'articulation à 7 degrés de liberté",
        "Console de visualisation immersive HD 3D",
        "Filtration des tremblements et mise à l'échelle des mouvements",
        "Imagerie peropératoire intégrée"
    ];
    productsData['robotic-surgical-system'].applications_fr = [
        "Urologie",
        "Gynécologie",
        "Chirurgie Générale",
        "Chirurgie Cardiothoracique"
    ];

    productsData['eeg-monitoring-system'].name_fr = "Système EEG / Surveillance Cérébrale";
    productsData['eeg-monitoring-system'].category_fr = "Neurologie";
    productsData['eeg-monitoring-system'].overview_fr = "Équipement spécialisé pour la surveillance et l'évaluation de l'activité électrique cérébrale.";
    productsData['eeg-monitoring-system'].description_fr = "Notre système d'EEG / surveillance cérébrale est conçu pour l'évaluation rigoureuse de l'activité électrique de la mémoire et du système nerveux. Assurant une surveillance continue de haute fidélité, il est indispensable pour diagnostiquer des troubles, gérer l'épilepsie, et surveiller l'état en soins intensifs.";
    productsData['eeg-monitoring-system'].specs_fr = {
        "Type de Produit": "Système d'Électroencéphalographie (EEG)",
        "Canaux": "Jusqu'à 256 canaux actifs",
        "Technologie de Surveillance": "Traitement du Signal Électrophysiologique",
        "Configuration": "Chariot Mobile ou Montage Mural",
        "Taux d'Échantillonnage": "Jusqu'à 10,000 Hz / Canal",
        "Exigences Opérationnelles": "100-240V, Barrette d'Alimentation Isolée"
    };
    productsData['eeg-monitoring-system'].capabilities_fr = [
        "Enregistrement des canaux à haute densité",
        "Matrices d'analyse spectrale en temps réel",
        "Algorithmes de rejet des artefacts",
        "Surveillance vidéo numérique synchronisée"
    ];
    productsData['eeg-monitoring-system'].applications_fr = [
        "Unités de Surveillance de l'Épilepsie",
        "Soins Intensifs Neurologiques",
        "Centres du Sommeil",
        "Blocs Opératoires"
    ];

    productsData['patient-monitoring-system'].name_fr = "Système de Surveillance des Patients";
    productsData['patient-monitoring-system'].category_fr = "Suivi des Fonctions Vitales";
    productsData['patient-monitoring-system'].overview_fr = "Technologie de surveillance intégrée pour le suivi des signes vitaux essentiels des patients dans les environnements cliniques.";
    productsData['patient-monitoring-system'].description_fr = "Le système de surveillance des patients est une plate-forme intégrée et robuste conçue pour le suivi en temps réel et en continu des fonctions vitales. Avec des interfaces tactiles simplifiées et une intelligence réseau d'alarmes, il assure un encadrement réactif sur le système de soins des malades.";
    productsData['patient-monitoring-system'].specs_fr = {
        "Type de Produit": "Moniteur Patient Multi-Paramètres",
        "Écran": "Écran Tactile TFT LCD de 15 pouces",
        "Technologie de Surveillance": "Télémétrie Continue des Signes Vitaux",
        "Configuration": "Support de Chevet et Capable de Transport",
        "Autonomie de la Batterie": "Jusqu'à 6 heures d'opération continue",
        "Exigences Opérationnelles": "100-240V avec Batterie de Secours"
    };
    productsData['patient-monitoring-system'].capabilities_fr = [
        "Suivi multi-paramètres virtuels (ECG, SpO2, PNI, etc.)",
        "Télémétrie de réseau et stations centrales",
        "Scores cliniques d'alerte précoce prédictive",
        "Modules de transport portables avec échanges à chaud"
    ];
    productsData['patient-monitoring-system'].applications_fr = [
        "Unités de Soins Intensifs (USI)",
        "Services des Urgences",
        "Soins Post-Anesthésie (SSPI)",
        "Réanimation et Services Généraux"
    ];

    productsData['laboratory-analyzer'].name_fr = "Analyseur de Laboratoire";
    productsData['laboratory-analyzer'].category_fr = "Diagnostics";
    productsData['laboratory-analyzer'].overview_fr = "Technologie de laboratoire automatisée conçue pour soutenir des tests diagnostiques efficaces et fiables.";
    productsData['laboratory-analyzer'].description_fr = "Conçu pour les laboratoires cliniques à haut débit, cet analyseur automatique permet d'opérer rigoureusement des tests sur les flux d'informations des diagnostics sanguins sur divers corps, assurant d'avoir à terme les conditions des contrôles optimaux de grande qualité.";
    productsData['laboratory-analyzer'].specs_fr = {
        "Type de Produit": "Analyseur de Chimie Clinique / Immunoessai",
        "Débit": "Jusqu'à 800 tests/heure",
        "Technologie": "Spectrophotométrie et Chimioluminescence",
        "Configuration": "Sur Paillasse ou Fixé au Sol",
        "Capacité des Échantillons": "Plus de 100 tubes à chargement continu",
        "Exigences Opérationnelles": "Alimentation en eau désionisée et drainage spécialisé"
    };
    productsData['laboratory-analyzer'].capabilities_fr = [
        "Traitement des échantillons à haut débit continu",
        "Refroidissement et traitement automatique des réactifs",
        "Capacité d'accès aléatoire avec facilité continu",
        "Intégration transparente bidirectionnelle SIL"
    ];
    productsData['laboratory-analyzer'].applications_fr = [
        "Laboratoires de Pathologie Clinique",
        "Laboratoires Centraux des Hôpitaux",
        "Centres de Recherche en Pathobiologie",
        "Banques de Sang"
    ];
}

// Append German translations to products.js
if (typeof productsData !== 'undefined') {
    productsData['digital-xray-system'].name_de = "Digitales Röntgensystem";
    productsData['digital-xray-system'].category_de = "Bildgebung";
    productsData['digital-xray-system'].overview_de = "Erweiterte digitale Bildgebungstechnologie für schnelle und akkurate diagnostische Radiographie.";
    productsData['digital-xray-system'].description_de = "Dieses System der nächsten Generation liefert im Handumdrehen hochauflösende Bilder bei reduzierter Strahlenbelastung für den Patienten. Es lässt sich nahtlos in moderne PACS-Netzwerke integrieren und ist für Durchsatz- und Diagnosepräzision konzipiert.";
    productsData['digital-xray-system'].capabilities_de = [
        "Bildverarbeitung in wenigen Sekunden",
        "Modi mit erweiterter Dosisreduktion",
        "Nahtlose drahtlose Datenübertragung"
    ];
    productsData['digital-xray-system'].applications_de = [
        "Trauma- und Notfalldiagnostik",
        "Orthopädisches Bildgebungs-Screening",
        "Lungen- und Atemwegsuntersuchungen"
    ];
    productsData['digital-xray-system'].specs_de = {
        "Auflösung": "Hoher Kontrast",
        "Konfiguration": "Deckenmontiert / Bodenständig",
        "Konnektivität": "DICOM 3.0 / HL7"
    };

    productsData['ct-scanner'].name_de = "CT-Scanner";
    productsData['ct-scanner'].category_de = "Tomographie";
    productsData['ct-scanner'].overview_de = "Hochleistungsfähiges Computertomographiesystem für detaillierte medizinische Querschnittsbildgebung.";
    productsData['ct-scanner'].description_de = "Entworfen für umfassende Diagnoseprotokolle bietet dieser hochmoderne CT-Scanner beispielloses Scannen mit einer unerreichten Schichtdicke und Auflösung, um kleinste Anomalien in der Onkologie, Kardiologie und Neurologie zu detektieren.";
    productsData['ct-scanner'].capabilities_de = [
        "Rotationsscans mit außergewöhnlich hoher Schichtanzahl",
        "Iterative KI-unterstützte Rekonstruktion",
        "Erweiterte Perfusionsanalyse"
    ];
    productsData['ct-scanner'].applications_de = [
        "Herz-Kreislauf-Beurteilungen",
        "Ganzkörper-Traumascreening",
        "Detektion onkologischer Tumore"
    ];
    productsData['ct-scanner'].specs_de = {
        "Scangeschwindigkeit": "Sub-Sekunden-Rotation",
        "Detektorabdeckung": "Breit / Mehrschichtig",
        "Tragfähigkeit des Tisches": "Hohe Kapazität"
    };

    productsData['mri-system'].name_de = "MRT-System";
    productsData['mri-system'].category_de = "Magnetresonanz";
    productsData['mri-system'].overview_de = "Erweiterte Magnetresonanztomographie-Technologie für detaillierte, nicht-invasive diagnostische Untersuchungen.";
    productsData['mri-system'].description_de = "Dieses hochklassige MRT-Gerät nutzt ultra-starkes Magnetfeldtechnologien, um eine der klarsten Weichteilbildgebungen auf dem Markt zu erzeugen, die für komplexe Neuroabbildungen und detaillierte sportmedizinische Untersuchungen essenziell ist.";
    productsData['mri-system'].capabilities_de = [
        "Premium-Scannen mit supraleitendem Magneten",
        "Flüsterleise Aufnahme-Suite",
        "Erweitertes Spulendesign für optimierten Komfort"
    ];
    productsData['mri-system'].applications_de = [
        "Komplexe neurologische Überprüfungen",
        "Spezialisierte Weichteilabbildungen",
        "Identifikation muskuloskelettaler Risse"
    ];
    productsData['mri-system'].specs_de = {
        "Feldstärke": "1.5T oder 3.0T",
        "Systemtyp": "Geschlossene oder große Öffnung",
        "Pulssequenzen": "Fortschrittliche Gradientendarstellung"
    };

    productsData['ultrasound-system'].name_de = "Ultraschallsystem";
    productsData['ultrasound-system'].category_de = "Sonographie";
    productsData['ultrasound-system'].overview_de = "Modernes diagnostisches Ultraschallgerät für Echtzeit-Bildgebung in verschiedenen klinischen Anwendungen.";
    productsData['ultrasound-system'].description_de = "Dieses Ultraschall-Gerüst zeichnet sich durch hochleistungs-Sondentechnologie und präzise Gefäßdetektion aus und ist dabei leicht genug, um im gesamten Klinikumfeld eingesetzt zu werden.";
    productsData['ultrasound-system'].capabilities_de = [
        "Scharfe Farb-Doppler-Flussabbildung",
        "Echtzeit-Volumenbildgebung",
        "Kompaktes mobiles Design für hohe Mobilität"
    ];
    productsData['ultrasound-system'].applications_de = [
        "Geburtshilfliche & gynäkologische Diagnostik",
        "Vaskuläre & kardiale Überprüfungen",
        "Beurteilungen im Notfall (POC)"
    ];
    productsData['ultrasound-system'].specs_de = {
        "Transducer": "Mehrfrequente Sonden",
        "Darstellung": "Hochauflösendes Farb-LCD",
        "Akku": "Erweiterte Betriebszeit (Mobil)"
    };

    productsData['robotic-surgical-system'].name_de = "Robotergestütztes Chirurgiesystem";
    productsData['robotic-surgical-system'].category_de = "Chirurgietechnik";
    productsData['robotic-surgical-system'].overview_de = "Fortschrittliche chirurgische Technologie zur Unterstützung präziser und minimalinvasiver Eingriffe.";
    productsData['robotic-surgical-system'].description_de = "Dieses System erhöht die Handfertigkeit und Visualisierung von Chirurgen. Mit winzigen Gelenkinstrumenten und einer 3D-HD-Ansicht ist es unschätzbar bei komplexen Verfahren und verbessert drastisch die Genesungszeiten.";
    productsData['robotic-surgical-system'].capabilities_de = [
        "Hochwertige 3D-HD-Farbansicht",
        "EndoWrist-Geräte, die die Mikromanipulation durch den Menschen übertreffen",
        "Tremor-Filterung und intelligente Skalierung"
    ];
    productsData['robotic-surgical-system'].applications_de = [
        "Präzise urologische Eingriffe",
        "Unkomplizierte gynäkologische Modifikationen",
        "Hochintensive kardiale Bypass-Operationen"
    ];
    productsData['robotic-surgical-system'].specs_de = {
        "Konsolentyp": "Design für zwei Chirurgen optional",
        "Sichtsystem": "Binokulare 3D-Anzeige",
        "Instrumente": "Hochgelenkiges Handhabungssystem"
    };

    productsData['eeg-monitoring-system'].name_de = "EEG / Gehirnüberwachungssystem";
    productsData['eeg-monitoring-system'].category_de = "Neurologie";
    productsData['eeg-monitoring-system'].overview_de = "Spezialisierte Ausrüstung zur Überwachung und Auswertung der elektrischen Gehirnaktivität.";
    productsData['eeg-monitoring-system'].description_de = "Eine hochsensible Einheit mit fortschrittlicher Algorithmus-Infrastruktur, um eine akkurate Diagnose neurologischer Störungen, Anfälle und Muster elektrischer Abweichungen in Echtzeit sicherzustellen.";
    productsData['eeg-monitoring-system'].capabilities_de = [
        "Hochdichte Elektrodenkappen-Prothetik",
        "Unterdrückung elektrischer Störgeräusche in Echtzeit",
        "Erweiterte Aufzeichnungsdauer mit Datenredundanz"
    ];
    productsData['eeg-monitoring-system'].applications_de = [
        "Untersuchung von Schlafanomalien",
        "Früherkennung und Verfolgung von Anfallsleiden",
        "Gehirn-Computer-Schnittstellenforschung"
    ];
    productsData['eeg-monitoring-system'].specs_de = {
        "Kanäle": "Multi-Kanal (z. B. 64 / 128 / 256)",
        "Abtastrate": "Erweitertes Megahertz-Spektrum",
        "Konnektivität": "Verzögerungsfreie drahtlose Verbindung"
    };

    productsData['patient-monitoring-system'].name_de = "Patientenüberwachungssystem";
    productsData['patient-monitoring-system'].category_de = "Vitalüberwachung";
    productsData['patient-monitoring-system'].overview_de = "Integrierte Überwachungstechnologie zur Verfolgung relevanter Vitalwerte von Patienten in klinischen Umgebungen.";
    productsData['patient-monitoring-system'].description_de = "Präsentiert Vitalfunktionen auf intuitiven Farbdisplays an der Bettkante bis hin zur zentralen Station und sichert so den durchgängigen Patientenverlauf der kritischen Status durch ausfallsichere Ausfall-Algorithmen ab.";
    productsData['patient-monitoring-system'].capabilities_de = [
        "Erweiterte Multiparameter-Verfolgung",
        "Intelligente Anpassung von Alarmschwellen",
        "Drahtlose Telemetrie über Krankenhaus-Netzwerke hinweg"
    ];
    productsData['patient-monitoring-system'].applications_de = [
        "Kontinuierliche Überwachung auf den Intensivstationen",
        "Routinemäßige postoperative Beobachtung",
        "Kritische Nachsorge vor Entlassung"
    ];
    productsData['patient-monitoring-system'].specs_de = {
        "Bildschirmdiagonale": "In diversen Abmessungen erhältlich",
        "Module": "SpO2, EKG, NIBD Module konfigurierbar",
        "Datenzugriff": "Volle Integration ins Zentralsystem (CMS)"
    };

    productsData['laboratory-analyzer'].name_de = "Laboranalysator";
    productsData['laboratory-analyzer'].category_de = "Diagnostik";
    productsData['laboratory-analyzer'].overview_de = "Automatisierte Labortechnologie zur Unterstützung effizienter und zuverlässiger diagnostischer Tests.";
    productsData['laboratory-analyzer'].description_de = "Mit automatisiertem hohen Durchsatz führt dieses Analysesystem klinische Chemie und Immunoassays der breiten Palette rasch und extrem fehlerresistent durch.";
    productsData['laboratory-analyzer'].capabilities_de = [
        "Extrem hohe Probendurchlauffrequenz",
        "Vollständige Automation per Klick-Workflow",
        "Eingebaute Fehler-Kontrollarchitektur"
    ];
    productsData['laboratory-analyzer'].applications_de = [
        "Massentests bei klinisch infektiösen Krankheiten",
        "Hormondiagnostik und Stoffwechsel-Endokrinologie",
        "Blut-Drogen-Toxikologischer Check"
    ];
    productsData['laboratory-analyzer'].specs_de = {
        "Durchsatz": "Erweiterte Tests/Stunde Skalierbarkeit",
        "Reagenzienkapazität": "Erweitertes On-Board-Angebot",
        "Benutzeroberfläche": "Intuitives Multitouch-Display"
    };
}
