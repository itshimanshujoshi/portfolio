import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  logic,
  vue,
  vuex,
  php,
  bootstrap,
  mysql,
  laravel,
  codeigniter,
  api,
  pinia,
  jquery,
  jira,
  cakephp
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech-stack",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  { title: "Frontend Engineering (React, Vue.js, TypeScript)", icon: web },
  { title: "Backend Engineering (PHP, Laravel, CodeIgniter)", icon: backend },
  { title: "API Integration & Optimization", icon: mobile },
  { title: "Performance & Code Refactoring", icon: creator },
];

const technologies: TTechnology[] = [
  // Frontend Technologies
  { name: "React.js", icon: reactjs, category: "Frontend" },
  { name: "Next.js", icon: reactjs, category: "Frontend" },
  { name: "Vue.js 3", icon: vue, category: "Frontend" },
  { name: "TypeScript", icon: typescript, category: "Frontend" },
  { name: "JavaScript (ES6+)", icon: javascript, category: "Frontend" },
  { name: "Redux Toolkit", icon: redux, category: "Frontend" },
  { name: "RTK Query", icon: redux, category: "Frontend" },
  { name: "Vuex", icon: vuex, category: "Frontend" },
  { name: "Pinia", icon: pinia, category: "Frontend" },
  { name: "HTML5", icon: html, category: "Frontend" },
  { name: "CSS3", icon: css, category: "Frontend" },
  { name: "Tailwind CSS", icon: tailwind, category: "Frontend" },
  { name: "Bootstrap", icon: bootstrap, category: "Frontend" },
  { name: "jQuery", icon: jquery, category: "Frontend" },

  // Backend Technologies
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "Laravel", icon: laravel, category: "Backend" },
  { name: "CodeIgniter 4", icon: codeigniter, category: "Backend" },
  { name: "CakePHP", icon: cakephp, category: "Backend" },
  { name: "PHP", icon: php, category: "Backend" },
  { name: "RESTful APIs", icon: api, category: "Backend" },
  { name: "GraphQL", icon: api, category: "Backend" },

  // Database
  { name: "MySQL", icon: mysql, category: "Database" },
  { name: "MongoDB", icon: mongodb, category: "Database" },

  // Tools & Workflow
  { name: "Git / GitHub", icon: git, category: "Tools" },
  { name: "JIRA", icon: jira, category: "Tools" },
  { name: "Figma", icon: figma, category: "Tools" },
  { name: "Postman", icon: api, category: "Tools" },
];




// const technologies: TTechnology[] = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];
const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "Logic Providers Digital Pvt. Ltd",
    icon: logic,
    iconBg: "#383E56",
    date: "June 2021 - Present",
    points: [
      "Architected and developed production-grade web applications using React.js, Redux Toolkit, TypeScript, and RTK Query for enterprise clients including ARCC and Seoul Spice",
      "Reduced page load time by 30%+ through implementation of code-splitting, lazy loading, dynamic imports, and optimized component re-renders",
      "Designed and implemented scalable state management architecture using Redux Toolkit and RTK Query, improving application stability and data consistency by 40%",
      "Refactored legacy codebases from class components to modern React Hooks and functional components, improving code maintainability and reducing technical debt",
      "Implemented role-based access control (RBAC) and secure JWT authentication workflows, reducing unauthorized access incidents by 30%",
      "Built reusable UI component library with TypeScript interfaces, increasing development velocity and reducing code duplication across projects",
      "Integrated RESTful APIs and GraphQL endpoints with proper error handling, loading states, and optimized caching strategies",
      "Improved SEO performance through server-side rendering (SSR), meta tag optimization, and React best practices",
      "Developed internal real-time business dashboards that increased monitoring efficiency by 40%",
      "Automated product and price update workflows, decreasing manual effort and errors by 60%",
      "Optimized MySQL database queries and implemented indexing strategies, reducing query execution time by 25%",
      "Collaborated in Agile/Scrum environment, participating in sprint planning, code reviews, and cross-functional team coordination",
    ],
  },
];


const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];
const projects: TProject[] = [
  {
    name: "LoyaltyLive – Admin Panel",
    description:
      "Developed scalable admin panel for mobile app content management and user configuration. Implemented form validation using React Hook Form, JWT and OAuth 2.0 authentication flows with token refresh mechanisms. Optimized rendering performance using React.memo, useMemo, and useCallback hooks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "ARCC – Messaging Platform",
    description:
      "Built feature-rich messaging platform with admin panel for user management and content moderation. Implemented client-side routing with React Router including protected routes and lazy loading. Created responsive, accessible UI components following WCAG 2.1 guidelines.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "Seoul Spice – Restaurant Management",
    description:
      "Developed restaurant management interface for order tracking, menu control, and sales analytics. Implemented server-state caching and automatic background refetching using React Query. Optimized bundle size by 40% through code-splitting and tree-shaking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "Tasket – AI Task Management",
    description:
      "Built intelligent task management application with AI-powered prioritization algorithms. Implemented server-side rendering with Next.js for improved SEO and performance. Designed MongoDB schema with proper indexing for efficient time-based task queries.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "ai-apis",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "Life Celebration Platform",
    description:
      "Platform for celebrating life's milestones with intuitive admin panel for managing events. Features user registration with Laravel authentication, dashboards displaying reports and analytics, and seamless integration of frontend and backend.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "CanXida E-Commerce",
    description:
      "Full-featured e-commerce platform with admin panel for managing products, orders, and user data. Includes secure payment gateway integration, inventory management, order processing, and optimized performance for seamless shopping experience.",
    tags: [
      {
        name: "codeigniter",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ]
  },
];

export { services, technologies, experiences, testimonials, projects };
