export const PROGRAMMES_DATA = [
  {
    id: 'ai-core',
    title: 'Artificial Intelligence & Machine Learning',
    category: 'Flagship Track',
    shortDesc: 'Master classical machine learning algorithms, deep neural architectures, computer vision, and NLP with real-world production datasets.',
    badge: 'Most Popular',
    level: 'Intermediate to Advanced',
    duration: '16 Weeks • 8 hrs/week',
    format: 'Live Mentorship + Hands-on Labs',
    accentColor: 'from-blue-600 to-indigo-600',
    borderGlow: 'hover:border-blue-500/50',
    skills: ['PyTorch', 'Scikit-Learn', 'TensorFlow', 'Deep Neural Nets', 'Computer Vision', 'Model Deployment'],
    overview: 'This comprehensive programme takes you from foundational mathematical concepts of machine learning through modern deep learning architectures. You will construct, train, optimize, and deploy high-performance models using industry-standard tooling.',
    prerequisites: 'Basic Python programming and high school algebra/calculus fundamentals.',
    capstoneProject: {
      title: 'Autonomous Multi-Modal Medical Image Classifier',
      description: 'Build a production-grade convolutional neural network pipeline capable of diagnosing chest X-ray pathologies with Grad-CAM visual interpretability.'
    },
    modules: [
      {
        week: 'Weeks 1-3',
        title: 'Foundations of Statistical Learning & Scikit-Learn',
        topics: ['Feature Engineering & Preprocessing', 'Regression & Classification Ensembles', 'Cross-Validation & Hyperparameter Optimization', 'Model Evaluation & Bias-Variance Tradeoff']
      },
      {
        week: 'Weeks 4-7',
        title: 'Deep Learning & Neural Network Architectures',
        topics: ['Backpropagation & Loss Functions', 'PyTorch Tensor Fundamentals', 'Custom Dataset Loaders', 'Regularization (Dropout, BatchNorm, Early Stopping)']
      },
      {
        week: 'Weeks 8-11',
        title: 'Computer Vision & Natural Language Processing',
        topics: ['Convolutional Neural Networks (ResNet, EfficientNet)', 'Object Detection & Semantic Segmentation', 'Recurrent Nets & Transformer Attention Mechanics', 'Transfer Learning & Hugging Face Transformers']
      },
      {
        week: 'Weeks 12-16',
        title: 'MLOps, Optimization & Capstone Production Deployment',
        topics: ['Model Quantization & ONNX Runtime', 'FastAPI REST Serving & Dockerization', 'Cloud Deployment & Monitoring', 'End-to-End Capstone Defense']
      }
    ]
  },
  {
    id: 'generative-ai',
    title: 'Generative AI & LLM Systems Engineering',
    category: 'Advanced Track',
    shortDesc: 'Architect modern enterprise AI agents, Retrieval-Augmented Generation (RAG) pipelines, custom fine-tuning, and multi-agent systems.',
    badge: 'Trending Industry Demand',
    level: 'Intermediate',
    duration: '12 Weeks • 10 hrs/week',
    format: 'Project-First Bootcamp',
    accentColor: 'from-violet-600 to-purple-600',
    borderGlow: 'hover:border-purple-500/50',
    skills: ['LangChain', 'LlamaIndex', 'Vector Databases', 'RAG Pipelines', 'Fine-Tuning LoRA', 'AI Agents'],
    overview: 'Learn how modern enterprise AI applications are engineered. You will master prompt orchestration, semantic search using vector databases, RAG architecture, function calling, autonomous agent reasoning, and parameter-efficient fine-tuning (PEFT/LoRA).',
    prerequisites: 'Comfortable with Python and familiarity with REST APIs.',
    capstoneProject: {
      title: 'Autonomous Financial Analyst & SEC Filing Research Agent',
      description: 'Create an intelligent multi-agent system that analyzes financial PDF 10-K reports, generates investment summaries, and verifies claims with vector citations.'
    },
    modules: [
      {
        week: 'Weeks 1-3',
        title: 'Prompt Architecture & LLM Fundamentals',
        topics: ['Tokens, Embeddings & Vector Representations', 'Structured Outputs & Pydantic Validation', 'Chain-of-Thought & ReAct Prompting', 'OpenAI & Claude API Integration']
      },
      {
        week: 'Weeks 4-6',
        title: 'Advanced Retrieval-Augmented Generation (RAG)',
        topics: ['Chunking Strategies & Hybrid Search', 'Vector Embeddings (Chroma, Pinecone, Qdrant)', 'Reranking Algorithms & Metadata Filtering', 'Evaluating RAG with RAGAS Metrics']
      },
      {
        week: 'Weeks 7-9',
        title: 'Autonomous Agents & Tool Execution',
        topics: ['LangGraph & Multi-Agent Workflows', 'Function Calling & Dynamic Tool Routing', 'Persistent Memory & State Machines', 'Human-in-the-Loop Supervision']
      },
      {
        week: 'Weeks 10-12',
        title: 'Open-Source LLMs, Fine-Tuning & Deployment',
        topics: ['Ollama, vLLM & Local Inference', 'LoRA & QLoRA Fine-Tuning on Custom Datasets', 'Guardrails, Safety & Prompt Injection Defense', 'Production Capstone Launch']
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    category: 'Career Starter Track',
    shortDesc: 'Extract actionable commercial insights using advanced SQL queries, Python data wrangling, interactive PowerBI dashboards, and statistical storytelling.',
    badge: 'High Placement Rate',
    level: 'Beginner to Intermediate',
    duration: '14 Weeks • 6 hrs/week',
    format: 'Case Study & Dashboard Driven',
    accentColor: 'from-emerald-600 to-teal-600',
    borderGlow: 'hover:border-emerald-500/50',
    skills: ['Advanced SQL', 'Python Pandas', 'PowerBI / Tableau', 'Statistical Testing', 'ETL Pipelines', 'Data Storytelling'],
    overview: 'Transform raw, messy enterprise data into compelling visual narratives and strategic business recommendations. This track focuses on real datasets from e-commerce, fintech, and SaaS companies.',
    prerequisites: 'No prior coding experience required; basic analytical mindset and curiosity.',
    capstoneProject: {
      title: 'Real-Time E-Commerce Customer Lifetime Value & Churn Dashboard',
      description: 'Develop an executive BI dashboard analyzing 500,000+ transactions with cohort retention analysis, RFM segmentation, and predictive churn modeling.'
    },
    modules: [
      {
        week: 'Weeks 1-4',
        title: 'Advanced SQL & Relational Database Analytics',
        topics: ['Complex Multi-Table Joins & Subqueries', 'Window Functions (Row_Number, Rank, Lead/Lag)', 'Common Table Expressions (CTEs) & Indexing', 'Database Schema Design & Normalization']
      },
      {
        week: 'Weeks 5-8',
        title: 'Python for Data Wrangling & Exploratory Analysis',
        topics: ['Pandas & NumPy Deep Dive', 'Data Cleaning & Outlier Imputation', 'Exploratory Data Analysis (Seaborn, Matplotlib)', 'Automated Data Extraction & API Ingestion']
      },
      {
        week: 'Weeks 9-11',
        title: 'Applied Business Statistics & A/B Testing',
        topics: ['Hypothesis Testing & p-values', 'A/B Experimentation Design', 'Correlation vs. Causation Analysis', 'Cohort Analysis & Customer Lifetime Value (LTV)']
      },
      {
        week: 'Weeks 12-14',
        title: 'Executive Visual Dashboards & Business Storytelling',
        topics: ['PowerBI / Tableau Interactive Dax Measures', 'Executive Dashboard UX & KPI Frameworks', 'Presentation & Stakeholder Storytelling', 'Portfolio Defense']
      }
    ]
  },
  {
    id: 'full-stack-dev',
    title: 'Full Stack Web & AI Application Development',
    category: 'Engineering Track',
    shortDesc: 'Build scalable modern web applications with React, Next.js, Node.js, Express, Tailwind CSS, and embed cutting-edge AI features.',
    badge: 'Comprehensive Full Stack',
    level: 'Beginner to Intermediate',
    duration: '18 Weeks • 10 hrs/week',
    format: 'Full Codebase Engineering',
    accentColor: 'from-amber-600 to-orange-600',
    borderGlow: 'hover:border-amber-500/50',
    skills: ['React.js', 'Next.js', 'Node.js & Express', 'Tailwind CSS', 'REST & GraphQL', 'AI API Integration'],
    overview: 'Learn modern full stack architecture from frontend component design to backend API creation and cloud hosting. Incorporate modern AI APIs directly into full-featured web applications.',
    prerequisites: 'Basic HTML/CSS familiarity is helpful but covered from basics.',
    capstoneProject: {
      title: 'Full Stack Collaborative AI Workspace & Content Studio',
      description: 'Develop a responsive SaaS application featuring real-time collaborative document editing, AI-assisted content synthesis, and dynamic export options.'
    },
    modules: [
      {
        week: 'Weeks 1-5',
        title: 'Modern Frontend Architecture with React & Tailwind',
        topics: ['Component Lifecycles & Custom Hooks', 'Tailwind CSS Responsive Design Systems', 'State Management (Zustand & Context)', 'Client-side Routing & Protected Views']
      },
      {
        week: 'Weeks 6-10',
        title: 'Backend Systems, APIs & Node.js Express',
        topics: ['Node.js Runtime & Express Server Design', 'RESTful API Standards & Validation', 'JWT Authentication & Security Middleware', 'Asynchronous Job Queues & Webhooks']
      },
      {
        week: 'Weeks 11-14',
        title: 'AI Microservices & Next.js Full Stack',
        topics: ['Server-Side Rendering (SSR) & Server Actions', 'Integrating Streaming LLM Responses', 'Vector Search & Embedding Integrations', 'File Uploads & Cloud Storage']
      },
      {
        week: 'Weeks 15-18',
        title: 'Testing, CI/CD, Deployment & Capstone',
        topics: ['Unit & Integration Testing (Jest, React Testing Library)', 'Docker Containerization & GitHub Actions CI/CD', 'Cloud Deployment (Vercel & Railway)', 'Live Capstone Product Launch']
      }
    ]
  },
  {
    id: 'python-programming',
    title: 'Python for Data Science & Automation',
    category: 'Foundational Track',
    shortDesc: 'A rigorous programming foundation teaching object-oriented design, script automation, data processing, and algorithmic problem solving.',
    badge: 'Beginner Friendly',
    level: 'Absolute Beginner',
    duration: '10 Weeks • 6 hrs/week',
    format: 'Interactive Coding Labs',
    accentColor: 'from-cyan-600 to-blue-600',
    borderGlow: 'hover:border-cyan-500/50',
    skills: ['Python 3.12', 'OOP Principles', 'File & Web Scraping', 'Data Processing', 'API Automation', 'Git & GitHub'],
    overview: 'The ideal entry point into modern technology. Learn clean Python coding conventions, error handling, web scraping, task automation, and build real automated tools for your daily workflow.',
    prerequisites: 'Zero coding experience required. Suitable for all educational backgrounds.',
    capstoneProject: {
      title: 'Automated Multi-Source Intelligence & Market Scraper',
      description: 'Build an automated Python utility that scrapes real estate or stock intelligence, cleans data, performs sentiment analysis, and emails formatted PDF digests.'
    },
    modules: [
      {
        week: 'Weeks 1-3',
        title: 'Python Core & Algorithmic Thinking',
        topics: ['Variables, Data Types & Control Structures', 'Functions, Scope & Lambda Expressions', 'List/Dictionary Comprehensions', 'Debugging Techniques & Clean Code PEP8']
      },
      {
        week: 'Weeks 4-6',
        title: 'Object-Oriented Programming & File Systems',
        topics: ['Classes, Objects, Inheritance & Polymorphism', 'Working with Files (JSON, CSV, Parquet)', 'Custom Exception Handling & Logging', 'Modules, Packages & Virtual Environments']
      },
      {
        week: 'Weeks 7-8',
        title: 'Web Scraping, Automation & APIs',
        topics: ['BeautifulSoup & Playwright Web Scraping', 'Handling Paginated & Dynamic Content', 'Consuming REST APIs with Requests', 'Automating Email & Slack Notifications']
      },
      {
        week: 'Weeks 9-10',
        title: 'Data Analytics Foundations & Capstone Defense',
        topics: ['NumPy & Pandas Essentials', 'Building Interactive CLI Applications', 'Version Control with Git & GitHub', 'Capstone Code Review']
      }
    ]
  }
];

export const TRUST_METRICS = [
  { value: '4.92 / 5', label: 'Average Learner Rating', note: 'Based on 1,200+ course feedback logs' },
  { value: '94%', label: 'Hands-on Project Completion', note: 'Portfolio-first evaluation curriculum' },
  { value: '1:1', label: 'Dedicated Industry Mentorship', note: 'Weekly code review & career guidance' },
  { value: '18+', label: 'Real-World Production Projects', note: 'Deployable on your personal GitHub' }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    icon: 'Terminal',
    title: 'Practical, Hands-on Learning',
    desc: 'Forget passive video lectures. Spend 70% of your time writing code, solving algorithmic challenges, and building real features.'
  },
  {
    icon: 'Briefcase',
    title: 'Industry-Oriented Projects',
    desc: 'Work on production-grade case studies designed in consultation with senior tech leads from high-growth technology companies.'
  },
  {
    icon: 'Cpu',
    title: 'Modern AI & Tech Stacks',
    desc: 'Learn contemporary frameworks and architectures: PyTorch, LangChain, Next.js, Vector Databases, and Automated Testing.'
  },
  {
    icon: 'Users',
    title: '1-on-1 Expert Mentorship',
    desc: 'Pair directly with experienced software engineers and data scientists who review your pull requests and unblock your logic.'
  },
  {
    icon: 'TrendingUp',
    title: 'Career-Focused Skills & Portfolio',
    desc: 'Graduate with a verified GitHub portfolio, deployable production projects, and tailored interview prep that impresses hiring managers.'
  }
];

export const LEARNING_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Choose Your Programme',
    desc: 'Select an AI, Data, or Full Stack track aligned with your career aspirations and current technical proficiency.',
    icon: 'Compass'
  },
  {
    step: '02',
    title: 'Register & Meet Your Mentor',
    desc: 'Submit your enquiry, complete an interactive skills diagnostic, and get paired with your dedicated industry mentor.',
    icon: 'UserCheck'
  },
  {
    step: '03',
    title: 'Learn Through Practical Labs',
    desc: 'Participate in live weekend interactive labs, complete weekly coding sprints, and debug code under real-world constraints.',
    icon: 'Code2'
  },
  {
    step: '04',
    title: 'Build & Demonstrate Projects',
    desc: 'Ship 3-4 capstone projects to production, present your architecture to industry panels, and showcase your verified portfolio.',
    icon: 'Rocket'
  }
];

export const SAMPLE_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Autonomous Multi-Modal Medical Image Classifier',
    programme: 'Artificial Intelligence & ML',
    tag: 'Deep Learning',
    summary: 'A deep convolutional neural network that analyzes chest radiographs to detect 14 distinct thoracic pathologies with Grad-CAM visual heatmaps.',
    tech: ['PyTorch', 'ResNet-50', 'Grad-CAM', 'FastAPI', 'Docker'],
    difficulty: 'Advanced',
    highlights: '91.4% validation AUC, REST API inference server with sub-150ms response latency.'
  },
  {
    id: 'proj-2',
    title: 'Enterprise RAG Agent for SEC Financial Disclosures',
    programme: 'Generative AI Systems',
    tag: 'LLMs & Agents',
    summary: 'An intelligent retrieval agent that ingests 200-page corporate financial reports, answers complex queries, and verifies balance sheet cross-checks.',
    tech: ['LangChain', 'ChromaDB', 'Llama-3', 'FastAPI', 'Streamlit'],
    difficulty: 'Intermediate',
    highlights: 'Hybrid dense-sparse retrieval, multi-step ReAct reasoning, 98% factual precision.'
  },
  {
    id: 'proj-3',
    title: 'E-Commerce Predictive Churn & Retention Engine',
    programme: 'Data Analytics',
    tag: 'Analytics & BI',
    summary: 'An end-to-end analytics workflow processing 500,000+ customer records to identify attrition risk and suggest proactive discount campaigns.',
    tech: ['Python', 'SQL', 'Pandas', 'PowerBI', 'Random Forest'],
    difficulty: 'Intermediate',
    highlights: 'Interactive executive dashboard with dynamic RFM segmentation and scenario simulation.'
  },
  {
    id: 'proj-4',
    title: 'Collaborative AI Workspace with Real-Time Streaming',
    programme: 'Full Stack Development',
    tag: 'Web & AI',
    summary: 'A Notion-like collaborative document studio featuring real-time multiplayer editing and AI inline summarization, rewriting, and code generation.',
    tech: ['React', 'Next.js 14', 'Tailwind CSS', 'Node.js', 'SSE Streams'],
    difficulty: 'Advanced',
    highlights: 'Zero-latency WebSocket sync, streaming token UI, and responsive mobile architecture.'
  }
];

export const SAMPLE_TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Aarav Deshmukh',
    role: 'Junior ML Engineer at FinTech Corp',
    programme: 'Artificial Intelligence Track',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    content: 'The hands-on project focus made all the difference. When I interviewed for my current role, the interviewers spent 30 minutes discussing my medical imaging capstone project. The mentorship gave me genuine confidence in production ML.',
    rating: 5,
    tag: 'Alumni 2025'
  },
  {
    id: 'test-2',
    name: 'Sneha Kulkarni',
    role: 'Business Intelligence Analyst',
    programme: 'Data Analytics Track',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    content: 'Coming from a non-engineering background, I was intimidated by SQL and Python. The structured learning journey broke everything down into manageable weekly sprints. Building the e-commerce churn dashboard got me hired within 2 months.',
    rating: 5,
    tag: 'Alumni 2025'
  },
  {
    id: 'test-3',
    name: 'Karan Mehra',
    role: 'Full Stack Developer',
    programme: 'Full Stack & AI Development Track',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    content: 'Most courses teach React syntax but never teach how to wire up scalable backend APIs or integrate modern LLM streaming. This programme gave me end-to-end full stack architecture skills that I use daily at work.',
    rating: 5,
    tag: 'Alumni 2026'
  }
];

export const FAQ_DATA = [
  {
    question: 'Who can join these programmes?',
    answer: 'Our programmes are designed for college students, fresh engineering and science graduates, and working professionals looking to transition into modern AI, data science, or full stack development. We offer tracks ranging from absolute beginner to advanced.'
  },
  {
    question: 'Is prior programming knowledge required?',
    answer: 'Not for all tracks! Our "Python for Data Science & Automation" and "Data Analytics & Business Intelligence" tracks start from the absolute basics with zero coding assumed. The "Artificial Intelligence & ML" and "Generative AI" tracks recommend basic familiarity with Python logic.'
  },
  {
    question: 'Are practical hands-on projects included in the curriculum?',
    answer: 'Yes! Practical project work is the core pillar of our philosophy. Every module includes weekly coding labs, and every student builds 3 to 4 substantial portfolio-grade capstone projects that are committed to your public GitHub profile and hosted online.'
  },
  {
    question: 'What is the programme duration and time commitment?',
    answer: 'Programmes range from 10 to 18 weeks depending on the track. The typical weekly commitment is 6 to 10 hours, which includes live mentor-led weekend interactive sessions, self-paced coding labs, and asynchronous code reviews.'
  },
  {
    question: 'How does the registration and enquiry process work?',
    answer: 'Simply complete the enquiry form below with your track of interest and experience level. Our academic advisors will reach out within 24 hours to conduct a brief 15-minute diagnostic consultation, share the comprehensive syllabus PDF, and guide your enrollment.'
  }
];

