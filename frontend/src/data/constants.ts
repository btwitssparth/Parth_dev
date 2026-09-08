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
  email: 'parthwhats@gmail.com',
  phone: '+91 8591670298',
  location: 'Mumbai, India',
  github: 'https://github.com/btwitssparth',
  linkedin: 'https://www.linkedin.com/in/parth-jain-8200aa270/',
  resume: '/Parth Jain Resume.pdf',
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
    id: 'taskflow',
    title: 'TaskFlow',
    description:
      'A scalable task management application featuring robust user authentication, authorization pipelines utilizing JWT, and secure cookie-based sessions.',
    longDescription:
      'TaskFlow is a production-grade task management platform focused on secure authentication and clean UX. Users can create projects, organize tasks by status, collaborate through ownership, and stay signed in securely.',
    problem:
      'Many beginner task-management apps skip serious auth, session handling, and proper permission checks leading to vulnerable implementations.',
    solution:
      'Implemented a complete auth stack with JWT access tokens, refresh tokens in HTTP-only secure cookies, input validation, role-based task ownership checks, and protected API routes.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    tagsFull: [
      { name: 'React.js', category: 'Frontend' },
      { name: 'Node.js', category: 'Runtime' },
      { name: 'Express.js', category: 'Backend' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'JWT', category: 'Auth' },
    ],
    github: 'https://github.com/btwitssparth',
    featured: true,
    category: 'fullstack',
    keyFeatures: [
      'JWT authentication + secure refresh-token cookies',
      'Project-level role authorization',
      'CRUD operations for tasks with drag-and-drop status',
      'Input validation and sanitization on all endpoints',
      'Protected routes on both client and server',
    ],
    challenges: [
      'Implementing a silent refresh flow without UX flicker',
      'Ensuring task actions respect ownership scopes',
      'Balancing session security with practical UX',
    ],
    imagePlaceholder: 'code-tasks',
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
  {
    id: 'youtube-backend',
    title: 'YouTube Backend Simulation',
    description:
      'A comprehensive RESTful API simulating core video platform functionalities, including optimized routes for user management, media handling, and comment threading.',
    longDescription:
      'A backend-focused project that models the essential behaviors of a video platform: users, channels, videos, likes, subscriptions, and threaded comments — all exposed as a clean REST API.',
    problem:
      'Platforms like YouTube have complex nested data relationships (comments, replies, nested likes) that are non-trivial to model and query efficiently.',
    solution:
      'Designed a schema-first backend in Express + MongoDB with properly referenced documents, indexed query paths, and purpose-built endpoints to handle threaded comments and aggregated counts.',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    tagsFull: [
      { name: 'Node.js', category: 'Runtime' },
      { name: 'Express.js', category: 'Backend' },
      { name: 'MongoDB', category: 'Database' },
      { name: 'REST API', category: 'Protocol' },
    ],
    github: 'https://github.com/btwitssparth',
    featured: false,
    category: 'backend',
    keyFeatures: [
      'RESTful routing for users, videos, comments & subscriptions',
      'Threaded comment replies with proper nesting',
      'Optimized query patterns with indexed lookups',
      'Error handling & consistent response envelopes',
      'Video metadata + stats aggregation',
    ],
    challenges: [
      'Modeling nested comment replies efficiently',
      'Keeping like/subscription counts eventually consistent',
      'Ensuring each endpoint uses indexed queries',
    ],
    imagePlaceholder: 'code-api',
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
    id: 'project-taskflow',
    year: '2024',
    title: 'Built TaskFlow',
    subtitle: 'Auth-Focused Full-Stack Project',
    description:
      'Engineered a task management platform with JWT auth, refresh-token cookies, role-based access control, and protected endpoints on both client and server.',
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
