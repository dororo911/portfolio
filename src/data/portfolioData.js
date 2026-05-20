export const assetUrl = (relativePath) => `${import.meta.env.BASE_URL}${relativePath}`;

export const PROFILE = {
  name: "Houssam Salek",
  title: "Backend & Full-Stack Developer",
  subtitle: "Building secure, scalable, and useful web applications",
  bio: "Computer Science student at EMSI passionate about backend engineering and full-stack development. I build clean, maintainable systems that solve real problems — from secure APIs to responsive web apps.",
  location: "Tanger-Tetouan-Al Hoceima, Morocco",
  email: "houssam.salek@edu-emsi.ma",
  github: "https://github.com/SHoussam",
  linkedin: "https://www.linkedin.com/in/houssam-salek",
  cv: assetUrl("pdf/cv.pdf"),
  whatsapp: {
    number: "212694294897",
    message: "Hi, I saw your portfolio and would like to chat!"
  }
};

export const HERO_BADGES = [
  "PHP", "Laravel", "MySQL", "React", "JavaScript", "Linux"
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: "Monitor",
    description: "Building responsive, accessible, and modern interfaces.",
    items: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ]
  },
  {
    title: "Backend",
    icon: "Server",
    description: "Server-side logic, APIs, and secure data operations.",
    items: [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "REST API", logo: "https://cdn.simpleicons.org/fastapi" },
    ]
  },
  {
    title: "Databases",
    icon: "Database",
    description: "Data modeling, queries, and secure persistence.",
    items: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ]
  },
  {
    title: "Languages",
    icon: "Code",
    description: "Programming languages used in projects and studies.",
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ]
  },
  {
    title: "Systems & Automation",
    icon: "Terminal",
    description: "Environment and scripting for development and deployment.",
    items: [
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    ]
  },
  {
    title: "Soft Skills",
    icon: "Users",
    description: "Interpersonal and problem-solving strengths.",
    items: [
      { name: "Teamwork" },
      { name: "Problem Solving" },
      { name: "Communication" },
      { name: "Adaptability" },
      { name: "Critical Thinking" },
      { name: "Stress Management" },
    ]
  }
];

export const PROJECTS = [
  {
  title: "StageLink — Multi-School Internship Platform",
  description:
    "Secure internship management platform connecting students, schools, and companies. Features student verification, internship applications, document management, authentication, dashboards, and role-based access control.",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "FastAPI",
    "SQLModel",
    "Authentication",
    "REST API"
  ],
  github: null,
  live: null,
  image: assetUrl("img/e.png"),
  featured: true,
},
  
 {
  title: "DeskLight — Smart Productivity Platform",

  description:
    "Full-stack productivity platform designed for task management, study tracking, scheduling, expense monitoring, journaling, mood tracking, and personalized dashboards with secure authentication and real-time data management.",

  technologies: [
    "FastAPI",
    "Python",
    "SQLModel",
    "MySQL",
    "JavaScript",
    "REST API",
    "Authentication"
  ],

  highlights: [
    "Secure user authentication",
    "Task and productivity management",
    "Study module tracking",
    "Schedule and calendar system",
    "Expense management",
    "Mood and journal tracking",
    "Custom user dashboard",
    "RESTful API architecture"
  ],

  github: "https://github.com/Shoussam/desklight",
  live: null,
  image: assetUrl("img/ggg.png"),
  featured: true,
},
  {
    title: "Media Library CLI (C++)",
    description:
      "C++ console application with OOP, multi-role authentication, and file-backed persistence for a media library.",
    technologies: ["C++", "OOP", "STL", "File I/O"],
    github: "https://github.com/dororo911/Media-Library-CLI-C-.git",
    live: null,
    image: assetUrl("img/c++.png"),
    featured: true,
  }
];

export const EXPERIENCE = [
  
    
  {
    date: "2023 — Present",
    title: "EMSI — Ingénierie Informatique & Réseaux",
    description:
      "Coursework in software engineering, web development, systems programming, and applied academic projects.",
    type: "education",
  }
];

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "looking-for", label: "Looking For" },
  { id: "contact", label: "Contact" }
];
