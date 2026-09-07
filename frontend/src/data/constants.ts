// src/data/constants.ts

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  contactEmail: string;
  phone: string;
  location: string;
  github: string;
  cgpa: string;
  degree: string;
  institution: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  databases: string[];
  toolsAndConcepts: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
}

export const personalInfo: PersonalInfo = {
  name: "Parth Jain",
  role: "Full-Stack Web Developer | MERN Stack Specialist",
  tagline: "Detail-oriented Full-Stack Developer specializing in building secure, scalable web applications, RESTful APIs, and complex database architectures.",
  contactEmail: "parthwhats@gmail.com",
  phone: "8591670298",
  location: "Mumbai",
  github: "https://github.com/btwitssparth",
  cgpa: "9.17 / 10",
  degree: "B.Sc. in Information Technology",
  institution: "Somaiya School Of Basic And Applied Science, Mumbai",
};

export const skills: Skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "PHP", "C#", "Flask"],
  databases: ["MongoDB", "MySQL", "SQL Server", "Redis"],
  toolsAndConcepts: [
    "Git",
    "GitHub",
    "REST APIs",
    ".NET Framework",
    "OOP",
    "Socket.io",
    "JWT Authentication"
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Lend-Sphere",
    subtitle: "Peer-to-Peer Rental Platform",
    description: [
      "Engineered a decentralized marketplace for electronics and appliance rentals.",
      "Developed an algorithmic double-booking prevention system using MongoDB aggregation.",
      "Integrated real-time chat via WebSockets (Socket.io) and built a Dispute Resolution Center with evidence hosting.",
      "Implemented Role-Based Access Control (RBAC) via secure JSON Web Tokens (JWT)."
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "Cloudinary"],
    githubLink: "https://github.com/btwitssparth",
    liveLink: "https://lend-sphere.vercel.app/",
  },
  {
    id: 2,
    title: "Smart Product Specification Matching Engine",
    subtitle: "Final-Year Academic Project",
    description: [
      "Engineered automated web scraping scripts using BeautifulSoup to extract, clean, and format large datasets of raw product specs.",
      "Architected backend logic and database schemas to compare and match multi-variable data points for consumer analysis."
    ],
    techStack: ["Python", "BeautifulSoup", "Node.js", "MongoDB"],
    githubLink: "https://github.com/btwitssparth",
  },
  {
    id: 3,
    title: "TaskFlow",
    subtitle: "Task Management App",
    description: [
      "Developed a scalable task management application featuring full CRUD capabilities.",
      "Implemented robust user authentication and authorization pipelines utilizing JWT and secure cookie-based sessions."
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    githubLink: "https://github.com/btwitssparth",
  },
  {
    id: 4,
    title: "YouTube Backend Simulation",
    subtitle: "RESTful API Engine",
    description: [
      "Architected a comprehensive RESTful API simulating core video platform functionalities.",
      "Built optimized backend routes for user management, media handling, and comment threading."
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubLink: "https://github.com/btwitssparth",
  }
];