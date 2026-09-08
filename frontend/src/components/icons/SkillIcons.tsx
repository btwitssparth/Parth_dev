import * as React from 'react';

interface IconProps {
  className?: string;
}

const base = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export const IconReact = ({ className }: IconProps) => (
  <svg className={className} {...base}>
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);

export const IconJS = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.75 3.5h-1.5v11.25L8.25 12v2.25l4.5 2.25h1.5V3.5zm6 0v13.5c0 1.5-.75 2.25-2.25 2.25-1.125 0-1.875-.375-2.25-.75l1.125-1.5c.375.375.75.562 1.125.562.375 0 .75-.187.75-.937V3.5h1.5z" />
  </svg>
);

export const IconTS = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2" opacity="0.1" />
    <path d="M13.5 10.5V9H7v1.5h2.25V20h1.5V10.5H13.5zm2.625 6.75v1.5c.75 0 1.125.375 1.125.75s-.375.75-.75.75c-.375 0-.75-.1875-1.125-.375l-.75 1.125c.75.5625 1.5.9375 2.625.9375 1.5 0 2.625-.9375 2.625-2.25 0-1.5-1.125-1.875-2.25-2.0625v-.1875c.75-.1875 1.5-.75 1.5-1.6875 0-.9375-.75-1.6875-1.875-1.6875-.9375 0-1.6875.375-2.25.9375l1.125 1.125c.375-.375.75-.5625 1.125-.5625.375 0 .5625.1875.5625.5625s-.1875.5625-.9375.5625h-1.5v1.5h.9375c.75 0 1.125.375 1.125.75s-.375.75-.9375.75z" fill="currentColor" />
  </svg>
);

export const IconHTML = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm13.25 5H7.5l.25 3h9.25l-.75 8.25L12 20l-4.25-.75L7.5 14h1.75l.25 3.5 2.5.5 2.5-.5.25-3H8.5l-.75-8h8.5l-.25 2z" />
  </svg>
);

export const IconCSS = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm13.25 5l-1.125 12L12 20l-4.125-.75L6.75 8h10.5zM9 10.5l-.25 2.75h5.75L14.25 16l-2.25.25-2.25-.25L9.5 14H8l.25 3 3.75.75 3.75-.75L16.5 10.5H9z" />
  </svg>
);

export const IconTailwind = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.78.2 1.3.76 1.85 1.35C13.66 11.28 14.77 12.5 17 12.5c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.78-.2-1.3-.76-1.85-1.35C15.34 7.22 14.23 6 12 6zM7 12.5C4.33 12.5 2.67 13.83 2 16.5c1-1.33 2.17-1.83 3.5-1.5.78.2 1.3.76 1.85 1.35C8.66 17.78 9.77 19 12 19c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.78-.2-1.3-.76-1.85-1.35C10.34 13.72 9.23 12.5 7 12.5z" />
  </svg>
);

export const IconNode = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
    <path d="M8 10.5v3c0 .8.6 1.5 1.5 1.5h1.5" />
    <path d="M14 10.5v3c0 .8-.6 1.5-1.5 1.5H12" />
    <path d="M8.5 9h7" />
    <path d="M14 13.5h1.5" />
  </svg>
);

export const IconExpress = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7l2.5 10L9 7" />
    <path d="M10 12h8" />
    <path d="M10 9h6" />
    <path d="M10 15h5" />
  </svg>
);

export const IconSocket = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M8 11v3" />
    <path d="M12 11v3" />
    <path d="M16 11v3" />
    <path d="M3 10h18" />
  </svg>
);

export const IconJWT = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M7 10l2 4 2-4" />
    <path d="M13 10v4h2" />
    <path d="M17 10v4" />
  </svg>
);

export const IconAPI = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 9l-4 3 4 3" />
    <path d="M16 9l4 3-4 3" />
    <path d="M14 5l-4 14" />
  </svg>
);

export const IconMongo = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3c1 3 4 6 4 11s-2 7-4 7-4-3-4-7 3-8 4-11z" />
    <path d="M12 3v18" />
  </svg>
);

export const IconMongoose = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 19c-2 0-3-1-3-3s1-3 3-3 3 1 3 3-1 3-3 3z" />
    <path d="M9 16l7-7" />
    <path d="M16 9l3-3-3-3-3 3" />
    <circle cx="16" cy="9" r="1" fill="currentColor" />
  </svg>
);

export const IconPython = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path d="M12 3c-3 0-4 1.5-4 3v3h5v1H6s-3 0-3 4 3 4 3 4h2v-2c0-2 2-3 4-3h4s3 0 3-3V8s0-3-3-3h-3zm-1 2h.01" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 21c3 0 4-1.5 4-3v-3h-5v-1h7s3 0 3-4-3-4-3-4h-2v2c0 2-2 3-4 3H7s-3 0-3 3v4s0 3 3 3h3zm1-2h-.01" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconBowl = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11h18l-2 8H5l-2-8z" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
    <path d="M9 3l.5 3M12 3v3M15 3l-.5 3" />
  </svg>
);

export const IconCPP = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <rect x="2" y="4" width="14" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 9v6M4 12h6" strokeLinecap="round" />
    <path d="M20 10v4M18 12h4M20 18l.5-4" strokeLinecap="round" />
  </svg>
);

export const IconGit = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="12" r="2.5" />
    <path d="M6 8.5v7M8.5 6h3l4 3M11.5 9l4 3M15.5 12H18" />
  </svg>
);

export const IconGitHub = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </svg>
);

export const IconVite = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4l8.5 3 3.5-1 6-1.5L11.5 22 3 4z" />
    <path d="M11.5 7l-5 1.5L11.5 22" />
    <path d="M14 13l3-8 3 1-5 7" />
  </svg>
);

export const IconNpm = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="10" rx="1" />
    <rect x="5" y="10" width="3" height="4" fill="currentColor" stroke="none" />
    <rect x="10.5" y="10" width="3" height="7" fill="currentColor" stroke="none" />
    <rect x="16" y="10" width="3" height="4" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPostman = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15l3-9 5 2 5-2 3 9-8 4-8-4z" />
    <circle cx="12" cy="13" r="2.5" />
    <path d="M12 10.5V8" />
  </svg>
);

export const IconVercel = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3L21 21H3L12 3z" />
  </svg>
);

// --- New Icons Added Below ---

export const IconSQL = ({ className }: IconProps) => (
  <svg className={className} {...base}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
  </svg>
);

export const IconGraphQL = ({ className }: IconProps) => (
  <svg className={className} {...base}>
    <path d="M12 3l8.5 5v9L12 22l-8.5-5V8z" />
    <circle cx="12" cy="3" r="1.5" fill="currentColor" />
    <circle cx="3.5" cy="8" r="1.5" fill="currentColor" />
    <circle cx="20.5" cy="8" r="1.5" fill="currentColor" />
    <circle cx="7.5" cy="18" r="1.5" fill="currentColor" />
    <circle cx="16.5" cy="18" r="1.5" fill="currentColor" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path d="M12 3v9M3.5 8l8.5 4M20.5 8l-8.5 4M7.5 18l4.5-6M16.5 18l-4.5-6" />
  </svg>
);

export const IconDocker = ({ className }: IconProps) => (
  <svg className={className} {...base}>
    <path d="M4 14h16v3H4z" />
    <path d="M4 10h4v4H4zM9 10h4v4H9zM14 10h4v4h-4zM9 6h4v4H9z" />
    <path d="M18 14v-2h-3" />
  </svg>
);

export const IconRender = ({ className }: IconProps) => (
  <svg className={className} {...base}>
    <path d="M17.5 17H6.5a4.5 4.5 0 0 1-1-8.89 6.5 6.5 0 0 1 12.87 0A4.5 4.5 0 0 1 17.5 17z" />
  </svg>
);

export const IconJava = ({ className }: IconProps) => (
  <svg className={className} {...base}>
    <path d="M18 9h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 9h16v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9z" />
    <path d="M6 2v3M10 2v3M14 2v3" />
  </svg>
);

export const IconFlask = ({ className }: IconProps) => (
  <svg className={className} {...base}>
    <path d="M9 3h6" />
    <path d="M10 3v6l-4 10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l-4-10V3" />
    <path d="M7 16h10" />
  </svg>
);

export const IconNextjs = ({ className }: IconProps) => (
  <svg className={className} {...base}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8v8l7.5 7.5M16 16V8" />
  </svg>
);

export const SkillIconMap: Record<string, React.ComponentType<IconProps>> = {
  react: IconReact,
  javascript: IconJS, // Used for JS
  typescript: IconTS, // Used for TS
  html: IconHTML,
  css: IconCSS,
  tailwind: IconTailwind,
  nodejs: IconNode,
  express: IconExpress,
  socketio: IconSocket,
  jwt: IconJWT,
  api: IconAPI,
  mongodb: IconMongo,
  mongoose: IconMongoose,
  python: IconPython,
  beautifulsoup: IconBowl,
  cpp: IconCPP,
  git: IconGit,
  github: IconGitHub,
  vite: IconVite,
  npm: IconNpm,
  postman: IconPostman,
  vercel: IconVercel,
  // newly mapped icons
  sql: IconSQL,
  graphql: IconGraphQL,
  docker: IconDocker,
  render: IconRender,
  java: IconJava,
  flask: IconFlask,
  nextjs: IconNextjs,
};