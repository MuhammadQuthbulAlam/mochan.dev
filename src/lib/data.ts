// src/lib/data.ts
// ═══════════════════════════════════════════════════════════
// EDIT THIS FILE TO UPDATE YOUR PORTFOLIO CONTENT
// ═══════════════════════════════════════════════════════════

export const profile = {
  name: "Muhammad Quthbul Alam",
  nickname: "Mochan",
  tagline: "Full Stack Web Developer & Android Developer",
  bio: "Passionate developer from Majalengka, West Java. I craft scalable web apps and elegant mobile experiences. Vibe Coder. Freelancer. Always learning, always shipping.",
  location: "Majalengka, West Java 🇮🇩",
  email: "mochanendeavour@gmail.com",

  social: {
    github: "https://github.com/MuhammadQuthbulAlam",
    linkedin: "https://www.linkedin.com/in/muhammad-quthbul-alam-a46933283/",
    instagram: "https://www.instagram.com/kzr.mchn19/",
    facebook: "https://web.facebook.com/kyu.pe.16",
    website: "https://mochandev.vercel.app",
  },

  availableForWork: true,
  avatar: "https://avatars.githubusercontent.com/u/100410118?v=4",
};

export const skills = {
  languages: [
    { name: "JavaScript", icon: "js", level: 90 },
    { name: "TypeScript", icon: "ts", level: 80 },
    { name: "PHP", icon: "php", level: 80 },
    { name: "Python", icon: "python", level: 70 },
    { name: "Dart", icon: "dart", level: 85 },
    { name: "Kotlin", icon: "kotlin", level: 65 },
    { name: "Swift", icon: "swift", level: 55 },
  ],
  frameworks: [
    { name: "React", icon: "react", level: 88 },
    { name: "Next.js", icon: "nextjs", level: 85 },
    { name: "Node.js", icon: "nodejs", level: 82 },
    { name: "Flutter", icon: "flutter", level: 85 },
  ],
  databases: [
    { name: "PostgreSQL", icon: "postgresql", level: 78 },
    { name: "MySQL", icon: "mysql", level: 80 },
  ],
  tools: [
    { name: "Git", icon: "git" },
    { name: "VS Code", icon: "vscode" },
    { name: "Figma", icon: "figma" },
    { name: "Vercel", icon: "vercel" },
  ],
};

export const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "wiraswasta",
    period: "2022 – Sekarang",
    description:
      "Developing custom web applications and mobile apps for clients. Specializing in React, Node.js, and Flutter solutions.",
    tags: ["React", "Node.js", "Flutter", "PostgreSQL"],
  },
  {
    role: "IT Support & Inventory",
    company: "Various Clients",
    period: "2021 – Sekarang",
    description:
      "Providing IT support, maintaining hardware and software infrastructure, managing IT asset inventory.",
    tags: ["IT Support", "Networking", "Hardware", "Inventory"],
  },
  // ← Tambahkan pengalaman kerja lainnya di sini
];

export const projects = [
  {
    title: "Mochan Coffee",
    slug: "mochan-coffee",
    description:
      "Micro SaaS platform for coffee shop management. Built with Flutter for cross-platform mobile experience with real-time order tracking.",
    longDescription:
      "A comprehensive Micro SaaS solution designed for coffee shop businesses. Features include order management, inventory tracking, sales analytics, and customer loyalty programs.",
    tech: ["Dart", "Flutter", "Firebase", "Node.js"],
    github: "https://github.com/MuhammadQuthbulAlam/Mochan-Coffee",
    live: null,
    featured: true,
    image: null,
    category: "Mobile App",
  },
  {
    title: "MCC Store",
    slug: "mcc-store",
    description:
      "E-commerce store platform built with PHP. Full-featured online store with product management, cart, and checkout.",
    longDescription:
      "A PHP-based e-commerce platform with product catalog, shopping cart, user authentication, order management, and admin dashboard.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/MuhammadQuthbulAlam/mcc.store",
    live: null,
    featured: true,
    image: null,
    category: "Web App",
  },
  {
    title: "ChatBot",
    slug: "chatbot",
    description:
      "AI-powered ChatBot application built with JavaScript. Provides conversational interface with natural language processing.",
    longDescription:
      "An intelligent chatbot application leveraging AI APIs to provide natural, context-aware conversations. Built with modern JavaScript architecture.",
    tech: ["JavaScript", "Node.js", "AI API"],
    github: "https://github.com/MuhammadQuthbulAlam/ChatBot",
    live: null,
    featured: true,
    image: null,
    category: "Web App",
  },
  // ← Tambahkan project lainnya di sini
];

export const education = [
  {
    degree: "Sarjana Komputer", // ← ganti
    school: "Universitas Majalengka", // ← ganti
    period: "2021 – 2025", // ← ganti
    description: "Your description here.", // ← ganti
  },
];

export const certifications = [
  {
    title: "LinkedIn Certifications",
    issuer: "LinkedIn",
    date: "Verified on LinkedIn",
    description:
      "Lihat sertifikasi profesional saya di profil LinkedIn untuk detail lengkap dan sumber resmi.",
  },
  // ← Tambahkan sertifikasi lainnya di sini
];

export const services = [
  {
    title: "Web Development",
    icon: "🌐",
    description:
      "Full stack web applications using React, Next.js, Node.js, and modern databases. Clean code, fast performance.",
  },
  {
    title: "Mobile Development",
    icon: "📱",
    description:
      "Cross-platform mobile apps with Flutter/Dart, and native Android with Kotlin. Beautiful UI, smooth UX.",
  },
  {
    title: "IT Support",
    icon: "🔧",
    description:
      "Technical support, troubleshooting, hardware/software maintenance, and IT infrastructure management.",
  },
  {
    title: "IT Inventory",
    icon: "📦",
    description:
      "IT asset management, inventory tracking, procurement planning, and lifecycle management.",
  },
];
