export const siteConfig = {
  name: "Murali Krishna Maddineni",
  title: "MS Computer Science · Applied AI / Software",
  description:
    "Portfolio of Murali Krishna Maddineni — MS CS at Georgia State University, Graduate Assistant in Deep Learning.",
  accentColor: "#1d4ed8",
  social: {
    email: "mmaddineni1@student.gsu.edu",
    linkedin: "https://www.linkedin.com/in/murali-maddineni-709151247/",
    github: "https://github.com/mkm-007",
  },
  aboutMe:
    "From ECE + AIML to MS Computer Science at Georgia State, I turn research-grade thinking into practical AI systems built for real users and scalable products.",
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
      name: "NLQ Chatbot over Database",
      description:
        "Natural-language-to-SQL chatbot so staff can query records without raw SQL; answers grounded on database results with a constrained, demoable query path.",
      link: "https://github.com/mkm-007/nlq-chatbot",
      skills: ["Python", "LangChain", "Postgres", "LLM"],
    },
    {
      name: "Document Abstraction with LLM (RAG)",
      description:
        "Schematic chunking, vector indexing, and LLM summarization for document Q&A — retrieval-grounded abstracts with a reproducible pipeline.",
      link: "https://github.com/mkm-007/doc-abstraction-llm",
      skills: ["Python", "ChromaDB", "LangChain", "RAG"],
    },
    {
      name: "UI Component Agent Bot",
      description:
        "Agent that maps natural-language UI requests to component specs and emits Angular-ready stubs via a plan–act–emit loop.",
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
        "Support in-person Deep Learning labs; guide students on Python/Linux debugging, experiment setup, and technical communication",
        "Contribute to research workflows in weak supervision, vision, and generative DL under Prof. Hemanth Venkateswara",
      ],
    },
    {
      company: "Centre for Advanced Technology Solutions, GITAM University",
      title: "Administrative Assistant — AI Systems",
      dateRange: "May 2024 – Dec 2024",
      bullets: [
        "Led internal AI tools (NLQ chatbot, document RAG, UI agent) using Python, LangChain, LLMs, Postgres, and ChromaDB",
        "Owned Angular integration and agentic workflows; validated data paths, docs, and demo handoff for staff use",
      ],
    },
    {
      company: "National Small Industries Corporation (NSIC)",
      title: "Embedded Systems Intern",
      dateRange: "May 2023 – Jul 2023",
      bullets: [
        "Built ESP8266 NodeMCU voice-triggered LED prototype (Embedded C, IFTTT); documented bring-up, tests, and demo",
      ],
    },
  ],
  education: [
    {
      school: "Georgia State University",
      degree: "M.Sc. Computer Science",
      dateRange: "Jan 2025 – Present",
      achievements: [
        "Coursework: Deep Learning, Machine Learning, Database Systems, Privacy Aware Computing, Advanced Image Processing",
        "Graduate Assistant — Deep Learning (CSC 8851)",
      ],
    },
    {
      school: "GITAM University",
      degree: "B.Tech ECE (AIML Specialization)",
      dateRange: "Aug 2020 – Apr 2024",
      achievements: [
        "CGPA 7.95 · First Class with Distinction",
        "Capstone: VoiceMate (RAGO) — context-aware voice assistant",
        "Coursework: Machine Learning, Deep Learning, Modern AI, Big Data Analytics, DSA, DBMS, IoT, DSP",
      ],
    },
  ],
};
