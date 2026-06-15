import { profile } from "./data";

export type Locale = "id" | "en";

export const translations = {
  id: {
    localeLabel: "Indonesia",
    nav: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      hireMe: "Hubungi Saya",
    },
    hero: {
      available: "Tersedia untuk kerja freelance",
      bio: `Saya adalah ${profile.name}, pengembang yang berbasis di ${profile.location}. Saya membangun aplikasi web dan mobile yang cepat, skalabel, dan menarik.`,
      seeMyWork: "Lihat Karyaku",
      getInTouch: "Hubungi Saya",
      findMe: "temukan saya di",
    },
    about: {
      sectionLabel: "Tentang Saya",
      title: "Siapa Saya",
      paragraph1: `Saya adalah ${profile.name}, seorang developer yang berbasis di ${profile.location}. Saya mengkhususkan diri dalam membangun aplikasi web dan mobile modern yang cepat, skalabel, dan indah.`,
      paragraph2:
        "Ketika tidak sedang coding, saya menjelajahi teknologi baru, berkontribusi pada open source, atau membantu klien mewujudkan ide menjadi produk nyata sebagai freelancer.",
      stats: {
        repos: "Repos GitHub",
        years: "Tahun Coding",
        stack: "Tech Stack",
        ideas: "Ide untuk Dibangun",
      },
      services: {
        sectionLabel: "Layanan",
        title: "Apa yang Saya Tawarkan",
      },
    },
    skills: {
      sectionLabel: "Keahlian",
      title: "Tech Stack",
      languages: "Bahasa",
      frameworks: "Framework & Mobile",
      databases: "Basis Data",
      tools: "Alat & Platform",
    },
    projects: {
      sectionLabel: "Proyek",
      title: "Apa yang Sudah Saya Bangun",
      viewAll: "Lihat semua repos 37+ di GitHub",
    },
    experience: {
      sectionLabel: "Pengalaman",
      workHistory: "Riwayat Pekerjaan",
      educationLabel: "Pendidikan",
      educationTitle: "Latar Belakang",
      certificationsLabel: "Sertifikasi",
      certificationsTitle: "Kredensial Profesional",
    },
    contact: {
      sectionLabel: "Kontak",
      title: "Mari Bekerja Bersama",
      description:
        "Punya proyek? Saya terbuka untuk pekerjaan freelance, kolaborasi, dan peluang penuh waktu.",
      locationBadge: "Berdomisili di",
      remoteLabel: "Tersedia secara remote",
      readyTitle: "Siap memulai proyek?",
      readyDescription:
        "Kirim pesan dan mari kita ciptakan sesuatu yang luar biasa bersama.",
      sendMessage: "Kirim Pesan",
      emailDescription: "Terbaik untuk pertanyaan proyek",
      githubDescription: "Lihat pekerjaan open source saya",
      linkedinDescription: "Jaringan profesional",
      websiteDescription: "Portofolio live",
    },
    footer: {
      tagline: "Full Stack & Android Developer",
    },
  },
  en: {
    localeLabel: "English",
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    hero: {
      available: "Available for freelance work",
      bio: `I'm ${profile.name}, a developer based in ${profile.location}. I build fast, scalable, and polished web and mobile applications.`,
      seeMyWork: "See My Work",
      getInTouch: "Get In Touch",
      findMe: "find me on",
    },
    about: {
      sectionLabel: "About Me",
      title: "Who I Am",
      paragraph1: `I'm ${profile.name}, a developer based in ${profile.location}. I specialize in building modern web and mobile applications that are fast, scalable, and beautiful.`,
      paragraph2:
        "When I’m not coding, I explore new tech, contribute to open source, or help clients turn ideas into real products as a freelancer.",
      stats: {
        repos: "GitHub Repos",
        years: "Years Coding",
        stack: "Tech Stack",
        ideas: "Ideas to Build",
      },
      services: {
        sectionLabel: "Services",
        title: "What I Offer",
      },
    },
    skills: {
      sectionLabel: "Skills",
      title: "Tech Stack",
      languages: "Languages",
      frameworks: "Frameworks & Mobile",
      databases: "Databases",
      tools: "Tools & Platforms",
    },
    projects: {
      sectionLabel: "Projects",
      title: "What I’ve Built",
      viewAll: "View All 37+ Repos on GitHub",
    },
    experience: {
      sectionLabel: "Experience",
      workHistory: "Work History",
      educationLabel: "Education",
      educationTitle: "Background",
      certificationsLabel: "Certifications",
      certificationsTitle: "Professional Credentials",
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's Work Together",
      description:
        "Have a project in mind? I'm open to freelance work, collaborations, and full-time opportunities.",
      locationBadge: "Based in",
      remoteLabel: "Available Remotely",
      readyTitle: "Ready to start a project?",
      readyDescription:
        "Drop me a message and let's create something amazing together.",
      sendMessage: "Send a Message",
      emailDescription: "Best for project inquiries",
      githubDescription: "See my open source work",
      linkedinDescription: "Professional network",
      websiteDescription: "Live portfolio",
    },
    footer: {
      tagline: "Full Stack & Android Developer",
    },
  },
} as const;
