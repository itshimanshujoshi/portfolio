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
  docker,
  logic,
  vue,
  vuex,
  php,
  bootstrap,
  mysql,
  laravel,
  codeigniter,
  api,
  json
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript (ES6+)", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Vue.js", icon: vue },
  { name: "Pinia / Vuex", icon: vuex },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap 4/5", icon: bootstrap },
  { name: "Node.js", icon: nodejs },
  { name: "PHP", icon: php },
  { name: "Laravel", icon: laravel },
  { name: "CodeIgniter", icon: codeigniter },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongodb },
  { name: "Git / GitHub", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
  { name: "RESTful APIs", icon: api },
  { name: "JSON / AJAX", icon: json },
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
    title: "Software Engineer",
    companyName: "Logic Providers",
    icon: logic,
    iconBg: "#383E56",
    date: "June 2021 - March 2024",
    points: [
      "Built responsive and scalable front-end applications using React.js, Vue.js, and TypeScript.",
      "Developed reusable UI components and integrated REST APIs via Axios and Redux Toolkit.",
      "Implemented authentication and route protection using JWT and React Router.",
      "Optimized performance through code-splitting, lazy loading, and reusable hooks.",
      "Collaborated with cross-functional teams using Agile methodology, Jira, and Git/Bitbucket.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Logic Providers Digital Pvt. Ltd (Formerly Logic Providers)",
    icon: logic,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Building and maintaining modern web applications using React.js, Redux Toolkit, and TypeScript.",
      "Architected scalable state management using Redux Toolkit and RTK Query.",
      "Integrated secure authentication and role-based access using JWT.",
      "Refactored legacy codebases to modern React hooks and reusable components.",
      "Delivered key projects including ARCC and Seoul Spice, enhancing usability and scalability.",
      "Focused on improving SEO, page performance, and code maintainability.",
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
    name: "LoyaltyLive",
    description:
      "A robust admin panel for managing mobile app content and user configurations. Features dynamic UI with reusable components, OAuth2.0 integration for secure social logins, and optimized performance through memoization and lazy loading.",
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
        name: "typescript",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "ARCC",
    description:
      "A scalable messaging web application with feature-rich admin panel for managing users and posts. Includes configurable signup flows, post moderation tools, and role-based access control with JWT authentication.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "Seoul Spice",
    description:
      "A comprehensive restaurant management interface with order tracking, menu control, and analytics. Features data-driven UI components, state management with Pinia, and optimized rendering for an enhanced user experience.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "pinia",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "Life Celebration",
    description:
      "A platform for celebrating and commemorating life's milestones. Features an intuitive admin panel with Vue.js for managing events, user registration with Laravel authentication, and dashboards displaying reports and analytics.",
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
        name: "javascript",
        color: "pink-text-gradient",
      },
    ]
  },
  {
    name: "CanXida",
    description:
      "A full-featured e-commerce platform with admin panel for managing products, orders, and user data. Includes secure payment gateway integration, optimized performance, and user-friendly frontend for seamless shopping experience.",
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
        name: "sql",
        color: "pink-text-gradient",
      },
    ]
  },
];

export { services, technologies, experiences, testimonials, projects };
