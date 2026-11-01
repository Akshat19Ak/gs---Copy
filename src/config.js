// =============================================================
// PORTFOLIO CONFIGURATION — Akshat Gupta
// =============================================================
// Central content file. Edit this to update all portfolio content.

export const config = {
  // ─── Identity ─────────────────────────────────────────────
  name: "Akshat Gupta",
  portrait: "/akshat-portrait.jpg",
  headline: "Building Intelligent Software.",
  subheadline: "AI Engineering · Machine Learning · Full-Stack Development",
  introduction:
    "Computer Science undergraduate building at the intersection of AI systems and production software engineering — from RAG pipelines and multi-agent architectures to deployed full-stack applications.",
  email: "akshat19official@gmail.com",
  phone: "+91 8815975797",
  location: "Bhubaneswar, Odisha",
  resumeUrl: "/Akshat_Gupta_Resume.pdf",

  // ─── Social Links ────────────────────────────────────────
  github: "https://github.com/Akshat19Ak",
  linkedin: "https://www.linkedin.com/in/akshatgupta105/",
  leetcode: "https://leetcode.com/u/Akshat_1_Gupta/",

  // ─── About ───────────────────────────────────────────────
  about: {
    summary:
      "I'm a Computer Science student at KIIT University with a foundation in Python, DSA, and AI/ML engineering. My work spans building RAG pipelines, multi-agent systems with CrewAI and LangChain, backend APIs with FastAPI and Flask, and deep learning models with TensorFlow — all shipped as deployed, production-ready applications.",
    details:
      "What drives me is the challenge of turning research concepts into working software. Whether it's engineering a hybrid retrieval system that combines FAISS and BM25 for academic paper analysis, or architecting a multi-agent debate framework where AI agents cross-examine each other's reasoning — I focus on building systems that actually work in production.",
    philosophy:
      "I believe the best AI engineers aren't just model builders — they're software engineers who understand the full stack from data ingestion to deployment. Every project I build reflects this: real APIs, real databases, real deployment pipelines.",
    quickFacts: [
      { label: "Education", value: "B.Tech CSE, KIIT University" },
      { label: "CGPA", value: "8.82 / 10.0" },
      { label: "Focus", value: "AI Engineering & Full-Stack" },
      { label: "LeetCode", value: "170+ Problems Solved" },
    ],
  },

  // ─── Education ──────────────────────────────────────────
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    university: "Kalinga Institute of Industrial Technology (KIIT)",
    location: "Bhubaneswar, Odisha",
    cgpa: "8.82 / 10.0",
    graduation: "Expected May 2027",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Architecture",
      "Computer Networks",
      "Object-Oriented Programming",
      "Probability & Statistics",
      "Discrete Mathematics",
    ],
  },

  // ─── Experience ─────────────────────────────────────────
  experience: [
    {
      id: "sail-intern",
      role: "Software Development Intern",
      company: "Bhilai Steel Plant (SAIL)",
      location: "Bhilai, Chhattisgarh",
      period: "June 2026",
      description:
        "Developed an Inventory Raw Material Optimizer for plant operations, processing Excel-based raw material data using Python and applying a Facebook Prophet ML Forecasting model to track usage, predict demand, and recommend optimal procurement schedules.",
      highlights: [
        "Built a material-wise prediction and analysis dashboard from scratch using HTML, CSS, and Vanilla JavaScript",
        "Applied Facebook Prophet time-series forecasting model for demand prediction",
        "Reduced supply disruption risk through data-driven procurement scheduling",
      ],
      tech: ["Python", "Facebook Prophet", "JavaScript", "HTML/CSS", "Excel Data Processing"],
    },
  ],

  // ─── Projects ────────────────────────────────────────────
  projects: [
    {
      id: "research-lens",
      title: "Research Lens",
      subtitle: "AI Research Paper Analyzer",
      category: "AI / RAG Systems",
      featured: true,
      description:
        "A full-stack RAG-based research paper analyzer with a FastAPI backend and React UI that extracts, embeds, and retrieves information from academic PDFs and website URLs.",
      highlights: [
        "Engineered a Hybrid FAISS + BM25 Retriever (Pinecone-compatible) using LangChain for scalable, low-latency search",
        "Improved retrieval accuracy using Cross-Encoder reranking and Reciprocal Rank Fusion (RRF)",
        "Integrated real-time Faithfulness, Answer Relevance, and Context Precision metrics to monitor hallucinations",
        "Exposed through REST APIs and deployed to production",
      ],
      tech: ["Python", "FastAPI", "LangChain", "FAISS", "BM25", "Pinecone", "Sentence Transformers", "Groq (Llama 3.3)", "React"],
      github: "https://github.com/Akshat19Ak/AI_RESEARCH_PAPER_ANALYSER",
      live: "https://ai-research-paper-analyser.vercel.app/",
      architecture: {
        ingestion: "PDF/URL → PyPDF2 extraction → Document chunking → Sentence Transformer embeddings",
        retrieval: "Hybrid FAISS (dense) + BM25 (sparse) → Reciprocal Rank Fusion → Cross-Encoder reranking",
        generation: "Groq Llama 3.3 → Faithfulness & relevance scoring → Structured response",
      },
    },
    {
      id: "omniview",
      title: "OmniView",
      subtitle: "Multi-Agent Debate & Decision System",
      category: "Agentic AI",
      featured: true,
      description:
        "An agentic framework using CrewAI where three AI agents — Optimist, Risk Analyst, and Moderator — independently analyze complex decisions, cross-examine trade-offs, and produce a balanced synthesis.",
      highlights: [
        "Architected a 3-agent debate pipeline using CrewAI to evaluate business decisions",
        "Built a Streamlit app with session state management and real-time agent output visualization",
        "Containerized with Docker for consistent deployment",
      ],
      tech: ["Python", "CrewAI", "Pydantic", "Groq API", "Llama 3.3", "Streamlit", "Docker"],
      github: "https://github.com/Akshat19Ak/3DebatingAgents",
      live: "https://akshat-omniview-multiagent.streamlit.app/",
    },
    {
      id: "movie-rec",
      title: "Movie Recommendation System",
      subtitle: "End-to-End NLP Recommendation Engine",
      category: "Machine Learning / NLP",
      featured: true,
      description:
        "A recommendation engine using NLP (TF-IDF) cosine similarity, with a FastAPI backend and Streamlit frontend offering 2 recommendation strategies via the TMDB API.",
      highlights: [
        "Built NLP-based content similarity engine using TF-IDF vectorization",
        "Deployed production-ready app with error handling, CORS security, and fallback logic",
        "Integrated TMDB API for rich movie metadata and poster retrieval",
      ],
      tech: ["Python", "FastAPI", "Streamlit", "Scikit-learn", "NLP (TF-IDF)", "TMDB API", "Pandas"],
      github: "https://github.com/Akshat19Ak/movie-rec-main",
      live: "https://akshat-nlp-movie-rec-main.streamlit.app/",
    },
    {
      id: "stock-prediction",
      title: "Stock Price Predictor",
      subtitle: "Hybrid LSTM + SARIMAX Forecasting",
      category: "Deep Learning",
      featured: false,
      description:
        "A hybrid LSTM + SARIMAX model to forecast stock closing prices, with yfinance-based data ingestion and a Train Offline, Infer Online pipeline.",
      highlights: [
        "Trained a 4-layer stacked LSTM (100-step sliding window, 100 epochs)",
        "Achieved 95.58% R² and 2-3% MAPE on test data",
        "Optimized deployment with tensorflow-cpu and caching",
      ],
      tech: ["Python", "TensorFlow", "Keras", "LSTM", "SARIMAX", "NumPy", "Pandas", "Scikit-learn", "Streamlit"],
      github: "https://github.com/Akshat19Ak/Stock-prediction",
      live: "https://akshat-stock-prediction.streamlit.app/",
    },
    {
      id: "sail-optimizer",
      title: "Raw Material Optimizer",
      subtitle: "Industrial Forecasting Tool — SAIL Internship",
      category: "Industry / ML",
      featured: false,
      description:
        "Industrial inventory forecasting tool developed during internship at Bhilai Steel Plant (SAIL). Combines Facebook Prophet time-series modeling with a custom interactive dashboard for procurement planning.",
      highlights: [
        "Processed Excel-based raw material data for plant operations",
        "Applied Facebook Prophet for demand forecasting",
        "Built interactive material-wise prediction dashboard",
      ],
      tech: ["Python", "Facebook Prophet", "JavaScript", "HTML/CSS", "Data Visualization"],
      github: "https://github.com/Akshat19Ak",
      live: null,
    },
    {
      id: "fraud-detection",
      title: "Credit Card Fraud Detection",
      subtitle: "ML Classification on Imbalanced Data",
      category: "Machine Learning",
      featured: false,
      description:
        "An end-to-end fraud classification system analyzing imbalanced Kaggle transaction data using Random Forest, evaluated via ROC-AUC and confusion matrices.",
      highlights: [
        "Performed robust EDA on imbalanced dataset",
        "Applied StandardScaler transformation and Random Forest classification",
        "Evaluated using ROC-AUC score and confusion matrices",
      ],
      tech: ["Python", "Random Forest", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/Akshat19Ak/Credit-Card-Fraud-Prediction",
      live: null,
    },
  ],

  // ─── Journey Timeline ───────────────────────────────────
  journey: [
    {
      id: "j1",
      date: "Dec 2024",
      phase: "The Spark",
      title: "University Tech Societies & Community",
      summary:
        "Joined KIIT's premier technical societies — Konnexions (Flagship AI Society) and Coding Ninjas Chapter. Served on the Organizing Committee for AI Odyssey 2025 and Central Organizing Committee for Technical KIIT Fest 9.0.",
      tags: ["Konnexions AI", "Coding Ninjas", "AI Odyssey 2025", "Community"],
    },
    {
      id: "j2",
      date: "Mar – Dec 2025",
      phase: "AI/ML Foundations",
      title: "Machine Learning, Cloud, & Deep Learning",
      summary:
        "Completed the Google Arcade Program with 195+ hands-on labs across 50+ GCP courses. Undertook Krish Naik's 99+ hour Complete Data Science, ML, DL & NLP masterclass. Built LSTM models and classification systems.",
      tags: ["Google Cloud (195+ Labs)", "Deep Learning", "Scikit-learn", "TensorFlow"],
    },
    {
      id: "j3",
      date: "Jan – Mar 2026",
      phase: "Generative AI & Agents",
      title: "LLMs, RAG Pipelines, & Multi-Agent Systems",
      summary:
        "Completed 70-hour professional Agentic AI training. Built OmniView (CrewAI multi-agent debate) and Research Lens (hybrid RAG with FAISS + BM25). Explored prompt engineering with IBM.",
      tags: ["Agentic AI (70h)", "CrewAI", "RAG / FAISS", "LangChain"],
    },
    {
      id: "j4",
      date: "Feb – Jun 2026",
      phase: "Full-Stack & Production",
      title: "REST APIs, Deployment, & Industry Experience",
      summary:
        "Mastered Flask and FastAPI for model deployment. Learned Docker and Kubernetes. Completed Software Development Internship at Bhilai Steel Plant (SAIL), building a forecasting dashboard with Python Prophet.",
      tags: ["FastAPI", "Docker", "SAIL Internship", "Production Deployment"],
    },
    {
      id: "j5",
      date: "Ongoing",
      phase: "Software Engineering Core",
      title: "DSA, System Design, & Engineering Discipline",
      summary:
        "Deepening DSA in Python — 170+ LeetCode problems solved. Strengthening core CS: Operating Systems, DBMS, Computer Networks. Completed McKinsey Forward Program in structured problem-solving.",
      tags: ["DSA (170+ LC)", "System Design", "McKinsey Forward", "Core CS"],
    },
  ],

  // ─── Technical Skills ───────────────────────────────────
  skills: {
    categories: [
      {
        name: "Languages",
        icon: "code",
        items: ["Python", "Java", "C", "SQL", "JavaScript", "TypeScript"],
      },
      {
        name: "AI & Machine Learning",
        icon: "brain",
        items: [
          "Machine Learning",
          "Deep Learning",
          "NLP",
          "TensorFlow",
          "Keras",
          "Scikit-learn",
          "NumPy",
          "Pandas",
          "Facebook Prophet",
        ],
      },
      {
        name: "Generative AI & RAG",
        icon: "sparkles",
        items: [
          "RAG Pipelines",
          "LangChain",
          "CrewAI",
          "FAISS",
          "Sentence Transformers",
          "Prompt Engineering",
          "Agentic AI",
          "Groq API",
        ],
      },
      {
        name: "Backend & APIs",
        icon: "server",
        items: ["FastAPI", "Flask", "RESTful API Design", "Pydantic"],
      },
      {
        name: "Databases",
        icon: "database",
        items: ["MySQL", "PostgreSQL", "Pinecone (Vector DB)", "FAISS"],
      },
      {
        name: "Frontend",
        icon: "layout",
        items: ["React", "HTML", "CSS", "JavaScript", "Streamlit"],
      },
      {
        name: "Tools & DevOps",
        icon: "wrench",
        items: ["Git", "GitHub", "Docker", "Google Cloud Platform", "Vercel", "Render"],
      },
      {
        name: "Core CS",
        icon: "cpu",
        items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "DBMS", "Computer Networks"],
      },
    ],
  },

  // ─── Certifications ─────────────────────────────────────
  certifications: [
    {
      title: "Complete Data Science, ML, DL & NLP",
      issuer: "Udemy — Mentor: Krish Naik",
      date: "Oct 2025 – Mar 2026",
      hours: "99+",
      url: "https://www.udemy.com/certificate/UC-0caf0eaf-2404-4578-9c76-4d3136356491/",
    },
    {
      title: "Agentic AI — Professional Training",
      issuer: "ExcelR in association with KIIT University",
      date: "Feb – Mar 2026",
      hours: "70",
      url: "https://drive.google.com/file/d/1Lx-lwrEry0mmNaF3_VKFoknkCwZwZiDd/view",
    },
    {
      title: "Model Deployment using Flask",
      issuer: "AI Planet",
      date: "Feb 2026",
      url: "https://aiplanet.com/course/certificates/verify/5499c1ed-b36b-4878-b1dd-686640796127",
    },
    {
      title: "Model Deployment using Kubernetes and Docker",
      issuer: "AI Planet",
      date: "Feb 2026",
      url: "https://aiplanet.com/course/certificates/verify/9b9830df-b423-48f7-833f-34c18ea9acd4",
    },
    {
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM via Coursera",
      date: "Jul 2026",
      url: "https://coursera.org/share/c9f56b24ed83103d6e3b294b328731d1",
    },
    {
      title: "Prompt Engineering Basics",
      issuer: "IBM via Coursera",
      date: "Jul 2026",
      url: "https://coursera.org/share/1157b809feae584fd853434e44478fa3",
    },
  ],

  // ─── Programs & Leadership ──────────────────────────────
  programs: [
    {
      title: "Google Arcade Program",
      period: "Aug – Dec 2025",
      description: "Completed 195+ hands-on labs across 50+ courses on Google Cloud Platform.",
      url: "https://www.skills.google/public_profiles/561072be-196e-4cc1-ae98-3d904e66eca5",
    },
    {
      title: "McKinsey Forward Program",
      period: "Apr – May 2026",
      description: "Structured training in problem-solving, communication, and data-driven decision-making.",
      url: "https://www.credly.com/badges/610c6d14-5cfa-4200-9019-f33d3f330576/public_url",
    },
  ],

  // ─── Societies / Leadership ─────────────────────────────
  societies: [
    {
      name: "Konnexions",
      role: "Technical Executive of GenAI & ML",
      affiliation: "KIIT Flagship AI Society",
      period: "Dec 2024 – Present",
      highlights:
        "Organizing Committee for AI Odyssey 2025 & Central Organizing Committee for Technical KIIT Fest 9.0.",
    },
    {
      name: "Coding Ninjas KIIT Chapter",
      role: "ML Technical Executive",
      period: "Dec 2024 – Present",
      highlights:
        "Contributing to ML, Data Science sessions, and technical event organizing.",
    },
  ],

  // ─── Navigation ─────────────────────────────────────────
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
