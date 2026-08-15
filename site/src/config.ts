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
    "MS Computer Science student and Deep Learning Graduate Assistant at Georgia State. I am putting an ECE + AIML foundation to work through study, campus AI systems, and lab practice, with a practical mindset: understand clearly, build carefully, evaluate honestly, and keep moving toward Software and Applied AI roles where that discipline matters.",
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
      name: "Voice Pipeline Eval Kit",
      description:
        "Offline ASR / voice-handoff eval harness with fixture clips, latency and fidelity scores, and failure dumps from one run path.",
      link: "https://github.com/mkm-007/voice-pipeline-eval-kit",
      skills: ["Python", "pytest", "speech eval"],
    },
    {
      name: "Chunked Transcript Replay",
      description:
        "Replay timed partial-transcript chunks and flag time-to-final latency so streaming handoffs stay measurable.",
      link: "https://github.com/mkm-007/chunked-transcript-replay",
      skills: ["Python", "streaming latency", "pytest"],
    },
    {
      name: "Retrieval Evaluation Kit",
      description:
        "Offline RAG-style recall@k harness with labeled fixtures and miss dumps from one run path.",
      link: "https://github.com/mkm-007/retrieval-eval-kit",
      skills: ["Python", "RAG eval", "pytest"],
    },
    {
      name: "Prompt Regression Kit",
      description:
        "Offline prompt/response overlap checks with failure dumps so LLM handoff wording drifts stay catchable.",
      link: "https://github.com/mkm-007/prompt-regression-kit",
      skills: ["Python", "LLMs", "pytest"],
    },
    {
      name: "NLQ Chatbot over Database",
      description:
        "Natural-language queries over a database with grounded answers, so users can ask questions without writing SQL.",
      link: "https://github.com/mkm-007/nlq-chatbot",
      skills: ["Python", "LangChain", "Postgres", "LLM"],
    },
    {
      name: "Document Abstraction with LLM (RAG)",
      description:
        "Document Q&A with chunking, vector retrieval, and LLM summarization so answers stay tied to source text.",
      link: "https://github.com/mkm-007/doc-abstraction-llm",
      skills: ["Python", "ChromaDB", "LangChain", "RAG"],
    },
    {
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
        "Guide Deep Learning lab students on Python/Linux debugging, experiment setup, and clear technical communication",
        "Support research practice in weak supervision, vision, and generative deep learning under Prof. Hemanth Venkateswara",
      ],
    },
    {
      company: "Centre for Advanced Technology Solutions, GITAM University",
      title: "Administrative Assistant — AI Systems",
      dateRange: "May 2024 – Dec 2024",
      bullets: [
        "Built campus AI tools (NLQ chatbot, document RAG, UI agent) with Python, LangChain, LLMs, Postgres, and ChromaDB",
        "Integrated Angular front ends with agent workflows; checked data paths and prepared demos for staff handoff",
      ],
    },
    {
      company: "National Small Industries Corporation (NSIC)",
      title: "Embedded Systems Intern",
      dateRange: "May 2023 – Jul 2023",
      bullets: [
        "Developed an ESP8266 voice-triggered LED prototype in Embedded C with IFTTT; documented bring-up and test notes",
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
        "Capstone: VoiceMate (RAGO), context-aware voice assistant",
        "Coursework: Machine Learning, Deep Learning, Modern AI, Big Data Analytics, DSA, DBMS, IoT, DSP",
      ],
    },
  ],
};
