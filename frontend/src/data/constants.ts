import type { ReactNode } from 'react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export const PERSONAL = {
  name: 'Parth Jain',
  title: 'Full-Stack Developer',
  email: 'parth.jainworks@gmail.com',
  phone: '+91 8591670298',
  location: 'Mumbai, India',
  github: 'https://github.com/btwitssparth',
  linkedin: 'https://www.linkedin.com/in/parth-jain-8200aa270/',
  resume: '/Parth_Jain_CV.pdf',
  status: 'Available for opportunities',
  tagline: 'Building fast, scalable web applications with modern technologies.',
  bio: "I'm Parth Jain, a B.Sc. IT Graduate (Class of 2026) and Full-Stack Developer specializing in the MERN stack. I design complex database architectures, develop RESTful APIs, and integrate real-time functionality to build production-quality applications that solve real-world problems.",
  currentFocus: 'Building full-stack applications and strengthening my software engineering fundamentals.',
  careerGoal:
    'To contribute to engineering teams building high-impact products while continuously growing as a software engineer.',
  quickFacts: [
    { label: 'Location', value: 'Mumbai, India' },
    { label: 'Availability', value: 'Open to opportunities' },
    { label: 'Focus', value: 'Full-Stack Development' },
    { label: 'Education', value: 'B.Sc. IT, Class of 2026' },
  ],
  interests: [
    'Distributed systems & scalable architecture',
    'Backend engineering & API design',
    'Modern frontend experiences',
    'Database optimization',
    'Open-source collaboration',
  ],
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  description: string;
  icon: string;
};

export const SKILLS: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', description: 'Building interactive UIs with component-based architecture', icon: 'react' },
      { name: 'JavaScript', description: 'Modern ES6+, asynchronous patterns, DOM APIs', icon: 'javascript' },
      { name: 'TypeScript', description: 'Type-safe development for large-scale applications', icon: 'typescript' },
      { name: 'HTML5', description: 'Semantic markup, accessibility fundamentals', icon: 'html' },
      { name: 'CSS3', description: 'Responsive layouts, animations, modern selectors', icon: 'css' },
      { name: 'Tailwind CSS', description: 'Utility-first styling, design systems', icon: 'tailwind' },
      { name: "Next.js",description:"", icon: "nextjs" },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', description: 'Server-side runtime, streaming, event-driven architecture', icon: 'nodejs' },
      { name: 'Express.js', description: 'REST API design, middleware, routing', icon: 'express' },
      { name: 'Socket.io', description: 'Real-time bidirectional communication', icon: 'socketio' },
      { name: 'JWT', description: 'Secure authentication & authorization pipelines', icon: 'jwt' },
      { name: 'REST APIs', description: 'Resource-oriented design, versioning, error handling', icon: 'api' },
      { name: "Flask",description:"" ,icon: "flask" }
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'MongoDB', description: 'NoSQL data modeling, aggregation pipelines', icon: 'mongodb' },
      { name: 'Mongoose', description: 'ODM schemas, validations, middleware hooks', icon: 'mongoose' },
      { name: "GraphQL",description:"", icon: "graphql" },
      { name: "SQL",description:"", icon: "sql" },

    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      { name: 'Python', description: 'Scripting, data processing, automation', icon: 'python' },
      { name: 'BeautifulSoup', description: 'Web scraping, data extraction & cleaning', icon: 'beautifulsoup' },
      { name: 'C++', description: 'OOP fundamentals, data structures, algorithms', icon: 'cpp' },
      { name: "Java",description:"", icon: "java" },
      { name: "JavaScript",description:"", icon: "javascript" },
      { name: "TypeScript",description:"", icon: "typescript" },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git', description: 'Version control, branching, collaboration workflows', icon: 'git' },
      { name: 'GitHub', description: 'Repository hosting, issues, pull requests', icon: 'github' },
      { name: 'Vite', description: 'Modern build tooling, HMR, bundling', icon: 'vite' },
      { name: 'npm', description: 'Package management, scripts, monorepos', icon: 'npm' },
      { name: 'Postman', description: 'API testing, collections, documentation', icon: 'postman' },
      { name: 'Vercel', description: 'CI/CD, deployments, preview branches', icon: 'vercel' },
      { name: "Docker",description:"", icon: "docker" },
      { name: "Render",description:"", icon: "render" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  tags: string[];
  tagsFull: { name: string; category: string }[];
  link?: string;
  github: string;
  featured: boolean;
  category: 'fullstack' | 'frontend' | 'backend' | 'other';
  keyFeatures: string[];
  challenges: string[];
  imagePlaceholder: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'lend-sphere',
    title: 'Lend-Sphere',
    description:
      'A decentralized peer-to-peer marketplace for electronics and appliance rentals featuring algorithmic double-booking prevention and real-time WebSocket chat.',
    longDescription:
      'Lend-Sphere connects users who want to rent out underused electronics and appliances with those who need them short-term. The platform handles listings, bookings, secure user accounts, and real-time conversations between owners and renters.',
    problem:
      'P2P rental marketplaces suffer from double-booking conflicts, lack of transparency in real-time communication, and fragmented trust systems that discourage participation.',
    solution:
      'Built an algorithmic availability engine that validates booking windows across the entire platform before confirming, and integrated Socket.io for real-time chat that keeps conversations attached to specific listings.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
    tagsFull: [
      { name: 'MongoDB', category: 'Database' },
      { name: 'Express.js', category: 'Backend' },
      { name: 'React.js', category: 'Frontend' },
      { name: 'Node.js', category: 'Runtime' },
      { name: 'Socket.io', category: 'Real-time' },
    ],
    link: 'https://lend-sphere.vercel.app/',
    github: 'https://github.com/btwitssparth/Lend-Sphere',
    featured: true,
    category: 'fullstack',
    keyFeatures: [
      'Algorithmic double-booking prevention engine',
      'Real-time WebSocket chat per listing',
      'Secure JWT authentication with role-based access',
      'Complex database schema for listings, bookings & users',
      'Responsive search & filter system',
    ],
    challenges: [
      'Designing a correct booking-conflict resolution algorithm that scaled',
      'Attaching realtime conversations to specific listings with history',
      'Modeling relational data in MongoDB with proper indexing',
    ],
    imagePlaceholder: 'code-marketplace',
  },
  {
    id: 'insight-ai',
    title: 'InsightAI',
    description:
      'An AI-powered data analyst that turns CSV and Excel datasets into verified analysis, visualizations, and evidence-backed insights through natural-language questions.',
    longDescription:
      'InsightAI is a full-stack data analysis application. Users upload CSV or XLSX datasets, inspect data profiles, and ask questions in natural language. Gemini translates a question into a structured analysis plan, Pydantic validates it, and a Pandas-based engine executes the calculations against the actual dataset before Gemini explains the verified results.',
    problem:
      'Using an LLM alone to answer data questions can produce unsupported or incorrect numerical results, while manual exploration of large spreadsheets can be slow and repetitive.',
    solution:
      'Designed a multi-stage analysis pipeline that separates AI planning from deterministic computation: structured plans are validated before execution, Pandas calculates the results, and the insight generator explains only the computed output. Supabase provides authentication, PostgreSQL persistence, and private dataset storage.',
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'Pandas', 'Gemini', 'Supabase'],
    tagsFull: [
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'FastAPI', category: 'Backend' },
      { name: 'Python', category: 'Language' },
      { name: 'Pandas', category: 'Data Analysis' },
      { name: 'Google Gemini', category: 'AI' },
      { name: 'Supabase PostgreSQL', category: 'Database' },
      { name: 'Supabase Storage', category: 'Storage' },
    ],
    link: 'https://insight-ai-puce.vercel.app/dashboard',
    github: 'https://github.com/btwitssparth/InsightAI',
    featured: true,
    category: 'fullstack',
    keyFeatures: [
      'CSV and XLSX upload with dataset preview, profiling, missing-value and duplicate-row insights',
      'Natural-language questions translated into validated multi-step analysis plans',
      'Pandas execution for grouped summaries, filtering, sorting, comparisons, shares, correlations, and time grouping',
      'Bar, line, and pie visualizations generated from computed results',
      'Evidence-backed AI explanations and contextual follow-up questions',
      'Supabase authentication, owner-scoped dataset and analysis access, and private file storage',
      'Persistent analysis history for revisiting previous questions and results',
    ],
    challenges: [
      'Separating LLM planning and explanation from deterministic numerical computation',
      'Validating model-generated plans and safely executing supported analysis operations',
      'Keeping uploaded datasets and analysis records isolated to the authenticated owner',
      'Handling varied data types, missing values, and Pandas results safely for API responses and visualizations',
    ],
    imagePlaceholder: 'code-insight-ai',
  },
  {
    id: 'ai-resume-optimizer',
    title: 'AI Resume Optimizer',
    description:
      'An ATS-focused resume analyzer and builder that compares resumes against job descriptions, identifies missing keywords, suggests edits, and generates updated resumes without fabricating facts.',
    longDescription:
      'AI Resume Optimizer is a full-stack application for improving resumes against specific job descriptions. Users upload a PDF resume, provide a job description, receive an ATS match score with missing keywords and actionable edits, selectively regenerate accepted changes, and build structured resumes with PDF export.',
    problem:
      'Generic resume reviews do not clearly show how well a resume matches a specific role, while AI-assisted rewriting can introduce fabricated skills, metrics, employers, or dates.',
    solution:
      'Built a protected full-stack workflow that extracts PDF text, sends structured analysis requests to Gemini, persists resumes and scans per authenticated user, and constrains regeneration to facts already present in the original resume.',
    tags: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'Gemini', 'Clerk'],
    tagsFull: [
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'Flask', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Database' },
      { name: 'Google Gemini', category: 'AI' },
      { name: 'Clerk', category: 'Authentication' },
    ],
    link: 'https://ai-resume-optimizer-one-tau.vercel.app',
    github: 'https://github.com/btwitssparth/ai_resume_optimizer',
    featured: true,
    category: 'fullstack',
    keyFeatures: [
      'ATS match scoring with missing keyword detection',
      'Selective AI regeneration using only existing resume facts',
      'Structured resume builder with PDF export',
      'Clerk authentication with per-user data isolation',
      'PDF validation, upload limits, CORS allow-list, and consistent API errors',
      'Persistent resume scans and builder documents in PostgreSQL',
    ],
    challenges: [
      'Designing structured Gemini responses that remain predictable for the UI',
      'Preventing AI regeneration from inventing resume facts or metrics',
      'Keeping authentication and user-scoped database access consistent across frontend and Flask API',
    ],
    imagePlaceholder: 'code-resume',
  },
  {
    id: 'smart-product-matching',
    title: 'Smart Product Matching Engine',
    description:
      'A dynamic matching engine utilizing automated web scraping scripts to extract, clean, and format large datasets of raw product specifications for multi-variable consumer analysis.',
    longDescription:
      'This engine automates the tedious process of comparing similar products across different sources. It scrapes live product pages, normalizes noisy specs into structured data, and exposes a clean dataset for downstream matching logic.',
    problem:
      'Manual product research across sites is slow, error-prone, and produces inconsistent specs that are impossible to compare systematically.',
    solution:
      'Wrote Python scraping pipelines using BeautifulSoup that handle site-specific quirks, apply fuzzy-cleaning routines to normalize spec fields, and output structured records ready for matching analysis.',
    tags: ['Python', 'BeautifulSoup', 'Node.js', 'Data Extraction'],
    tagsFull: [
      { name: 'Python', category: 'Language' },
      { name: 'BeautifulSoup', category: 'Scraping' },
      { name: 'Node.js', category: 'Runtime' },
      { name: 'Data Extraction', category: 'Processing' },
    ],
    github: 'https://github.com/btwitssparth',
    featured: false,
    category: 'other',
    keyFeatures: [
      'Automated scraping across multiple e-commerce sources',
      'Cleaning & normalization pipeline for messy raw specs',
      'Structured CSV/JSON output for downstream analysis',
      'Rate-limiting and polite scraping defaults',
    ],
    challenges: [
      'Handling inconsistent HTML structures across sources',
      'Normalizing product specs with different naming conventions',
      'Preventing detection while maintaining throughput',
    ],
    imagePlaceholder: 'code-data',
  },
];
export const JOURNEY = [
  {
    id: 'education-2023',
    year: '2023 — 2026',
    title: 'B.Sc. in Information Technology',
    subtitle: 'Undergraduate Degree',
    description:
      'Pursuing a B.Sc. IT degree with a focus on software engineering, data structures, algorithms, computer networks, and database systems. Class of 2026.',
    type: 'education',
  },
  {
    id: 'learning-mern',
    year: '2024',
    title: 'MERN Stack Specialization',
    subtitle: 'Self-directed learning & projects',
    description:
      'Deepened expertise across MongoDB, Express, React, and Node by building multiple full-stack projects end-to-end, from schema design to deployment.',
    type: 'learning',
  },
  {
    id: 'project-lendsphere',
    year: '2024',
    title: 'Built Lend-Sphere',
    subtitle: 'Featured Full-Stack Project',
    description:
      'Designed and shipped Lend-Sphere, a P2P rental marketplace featuring a custom double-booking prevention engine and realtime chat via WebSockets.',
    type: 'project',
  },
  {
    id: 'learning-scraping',
    year: '2025',
    title: 'Python Scraping & Data Pipelines',
    subtitle: 'Self-directed learning',
    description:
      'Explored data engineering fundamentals with Python and BeautifulSoup, building automated extraction and cleaning pipelines for large product datasets.',
    type: 'learning',
  },
];

export type EmptyIconProps = {
  className?: string;
};

export type SkillIconRenderer = (props: EmptyIconProps) => ReactNode;
