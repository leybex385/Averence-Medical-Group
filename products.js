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
