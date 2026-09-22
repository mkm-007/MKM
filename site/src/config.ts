export const siteConfig = {
  name: "Murali Krishna Maddineni",
  title: "MS Computer Science · Applied AI / Software",
  description:
    "MS CS at Georgia State University. Deep Learning Graduate Assistant building practical applied AI from academic work.",
  accentColor: "#1d4ed8",
  social: {
    email: "mmaddineni1@student.gsu.edu",
    linkedin: "https://www.linkedin.com/in/murali-maddineni-709151247/",
    github: "https://github.com/mkm-007",
  },
  aboutMe:
    "MS Computer Science student and Deep Learning Graduate Assistant at Georgia State. I am putting an ECE + AIML foundation to work through study, campus AI systems, and graduate coursework, with a practical mindset: understand clearly, build carefully, evaluate honestly, and keep moving toward Software and Applied AI roles where that discipline matters.",
  skills: [
    "Python",
    "SQL",
    "LangChain",
    "LLMs",
    "RAG",
    "PyTorch",
    "scikit-learn",
    "Postgres",
    "REST APIs",
    "pandas",
    "Git",
    "Linux",
    "pytest",
    "Angular",
    "Embedded C",
  ],
  projects: [
    {
      group: "Coursework",
      name: "Region-guided radiology reports",
      description:
        "Advanced Image Processing coursework: region-guided explainable radiology report generation from chest X-rays.",
      link: "https://github.com/mkm-007/AIP_Radiology_Project",
      skills: ["Python", "vision", "report generation"],
    },
    {
      group: "Coursework",
      name: "Graph Deanonymization",
      description:
        "Privacy Aware Computing coursework: graph deanonymization on network structure.",
      link: "https://github.com/mkm-007/Individual_Project",
      skills: ["Python", "privacy", "graphs"],
    },
    {
      group: "Coursework",
      name: "Lifeline",
      description:
        "Database Systems coursework: blood donation and distribution platform.",
      link: "https://github.com/mkm-007/DBS-CSC-6710",
      skills: ["databases", "full stack"],
    },
    {
      group: "Coursework",
      name: "Weather time-series forecasting",
      description:
        "Machine Learning coursework: weather time-series analysis and forecasting on the Jena dataset.",
      link: "https://github.com/mkm-007/ML-CSC-6850",
      skills: ["Python", "time series", "ML"],
    },
    {
      group: "Coursework",
      name: "Congestion-Aware Survivable Routing",
      description:
        "Advanced Computer Networks coursework: LP routing that minimizes worst-case utilization under single-link failures.",
      link: "https://github.com/mkm-007/acn-survivable-routing",
      skills: ["Python", "networks", "optimization"],
    },
    {
      group: "Coursework",
      name: "VoiceMate (RAGO)",
      description:
        "UG capstone public slice: voice assistant intent orchestration (Recognition → Understanding → Generation → Orchestration).",
      link: "https://github.com/mkm-007/voicemate-rago",
      skills: ["Python", "NLP", "voice AI"],
    },
    {
      group: "UG rebuilds",
      name: "hardware-sketchbook",
      description:
        "BEEE circuit-laws rebuild: KVL/KCL, superposition, Thevenin/Norton on a USB→MCU→LED frame.",
      link: "https://github.com/mkm-007/hardware-sketchbook",
      skills: ["Python", "circuits"],
    },
    {
      group: "UG rebuilds",
      name: "ESP8266 Voice-Triggered LED",
      description:
        "Internship IoT rebuild: assistant phrase → LED command → NodeMCU simulation (Skills proof).",
      link: "https://github.com/mkm-007/internship-iot-sketch",
      skills: ["IoT", "ESP8266", "Embedded C"],
    },
    {
      group: "UG rebuilds",
      name: "UG Core Sketchbook",
      description:
        "High-signal UG minis: DSA, classic ML, tiny DL, networks ARQ, DBMS, MPMC GPIO.",
      link: "https://github.com/mkm-007/ug-core-sketchbook",
      skills: ["Python", "DSA", "ML", "networks"],
    },
    {
      group: "Campus AI (Centre)",
      name: "NLQ Chatbot over Database",
      description:
        "Natural-language queries over a database with grounded answers, so users can ask questions without writing SQL.",
      link: "https://github.com/mkm-007/nlq-chatbot",
      skills: ["Python", "LangChain", "Postgres", "LLM"],
    },
    {
      group: "Campus AI (Centre)",
      name: "Document Abstraction with LLM (RAG)",
      description:
        "Document Q&A with chunking, vector retrieval, and LLM summarization so answers stay tied to source text.",
      link: "https://github.com/mkm-007/doc-abstraction-llm",
      skills: ["Python", "ChromaDB", "LangChain", "RAG"],
    },
    {
      group: "Campus AI (Centre)",
      name: "UI Component Agent Bot",
      description:
        "Turns natural-language UI requests into component specs and Angular-ready stubs for faster prototyping.",
      link: "https://github.com/mkm-007/ui-agent-bot",
      skills: ["Python", "Angular", "Agentic Workflow"],
    },
  ],
  experience: [
    {
      company: "Georgia State University",
      title: "Graduate Assistant — Deep Learning (CSC 8851)",
      dateRange: "Aug 2025 – Present",
      bullets: [
        "Support CSC 8851 Deep Learning labs on Linux; debug Python experiment setup and brittle eval paths so shared coursework stays usable for students and faculty",
        "Work on Prof. Venkateswara's deep learning research projects as part of the GA role: run experiments, review literature, and keep implementation notes so project evals stay reproducible",
      ],
    },
    {
      company: "Centre for Advanced Technology Solutions, GITAM University",
      title: "Applied AI Systems Developer",
      dateRange: "May 2023 – Dec 2024",
      bullets: [
        "Shipped Python REST APIs and Angular UIs over PostgreSQL with tests and run docs so staff could query and update operational data without ad-hoc scripts",
        "Owned staff-facing NLQ, RAG, and UI-agent delivery with handoff notes so campus operators could run LLM tools day to day",
      ],
    },
  ],
  education: [
    {
      school: "Georgia State University",
      degree: "M.Sc. Computer Science",
      dateRange: "Jan 2025 – Present",
      achievements: [
        "Coursework: Deep Learning, Machine Learning, Database Systems, Privacy Aware Computing, Advanced Image Processing, Advanced Computer Networks",
        "Graduate Assistant — Deep Learning (CSC 8851)",
      ],
    },
    {
      school: "GITAM University",
      degree: "B.Tech ECE (AIML Specialization)",
      dateRange: "Aug 2020 – Apr 2024",
      achievements: [
        "CGPA 7.95 · First Class with Distinction",
        "Capstone: VoiceMate (RAGO), context-aware voice assistant",
        "Coursework: Machine Learning, Deep Learning, Modern AI, Big Data Analytics, DSA, DBMS, IoT, DSP",
      ],
    },
  ],
};
