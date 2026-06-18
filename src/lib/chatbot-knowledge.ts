// src/lib/chatbot-knowledge.ts
// ═══════════════════════════════════════════════════════════
// KNOWLEDGE BASE UNTUK CHATBOT
// Edit array `knowledgeBase` di bawah untuk menambah/ubah jawaban.
// Setiap entry punya `keywords` (kata kunci pemicu) dan `answer` (jawaban).
// Chatbot akan mencocokkan pesan user dengan keywords yang paling relevan.
// ═══════════════════════════════════════════════════════════

import { profile, skills, experiences, projects, education, services } from "./data";

export interface KnowledgeEntry {
  id: string;
  keywords: string[];
  answer: string;
  followUp?: string[]; // saran pertanyaan lanjutan
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: "greeting",
    keywords: ["halo", "hai", "hi", "hello", "hey", "pagi", "siang", "malam", "sore", "apa kabar"],
    answer: `Halo! 👋 Saya asisten virtual ${profile.nickname}. Saya siap bantu kamu tahu lebih banyak tentang skill, project, pengalaman, atau cara menghubungi ${profile.nickname}. Yuk mulai!`,
    followUp: ["Siapa kamu?", "Apa skill-nya?", "Lihat project", "Bisa hubungi dimana?"],
  },
  {
    id: "who",
    keywords: ["siapa", "kenalan", "perkenalan", "tentang kamu", "profil", "identitas", "who are you", "who is", "kamu siapa"],
    answer: `${profile.name}, biasa dipanggil ${profile.nickname}. ${profile.bio} Berbasis di ${profile.location}, saya suka membuat aplikasi web dan mobile yang bersih serta mudah dipakai.`,
    followUp: ["Apa skill-nya?", "Project terbaru?", "Bisa remote?"],
  },
  {
    id: "about",
    keywords: ["tentang", "about", "ceritakan tentang", "apa itu", "profil"],
    answer: `${profile.nickname} adalah Full Stack Web Developer & Android Developer yang dapat membangun aplikasi modern, rapi, dan scalable. Jika kamu butuh website, mobile app, atau sistem internal, saya siap bantu.`,
    followUp: ["Apa skill-nya?", "Lihat project", "Bagaimana cara kerja?"],
  },
  {
    id: "skills",
    keywords: ["skill", "kemampuan", "bisa apa", "keahlian", "menguasai", "tech stack", "teknologi", "bahasa programming", "stack", "skills"],
    answer: `${profile.nickname} menguasai: ${[...skills.languages, ...skills.frameworks].map((s) => s.name).join(", ")}. Untuk database ada ${skills.databases.map((d) => d.name).join(" & ")} dan tools seperti ${skills.tools.map((t) => t.name).join(", ")}.`,
    followUp: ["Project apa yang cocok?", "Apa skill favorit?"],
  },
  {
    id: "stack",
    keywords: ["stack", "tech stack", "technology stack", "framework", "library", "tools", "react", "next.js", "node.js", "flutter"],
    answer: `Tech stack utama ${profile.nickname} meliputi React, Next.js, Node.js, dan Flutter. Untuk data menggunakan PostgreSQL/MySQL, dan deployment sering lewat Vercel.`,
    followUp: ["Skill apa lagi?", "Bisa remote?"],
  },
  {
    id: "projects",
    keywords: ["project", "proyek", "karya", "portofolio", "portfolio", "produk", "aplikasi", "app", "github", "works"],
    answer: `Beberapa project unggulan: ${projects.map((p) => `${p.title} (${p.category})`).join(", ")}. Semua project bisa dilihat di GitHub: ${profile.social.github}.`,
    followUp: ["Ceritakan Mochan Coffee", "Ceritakan SIMAK UPZISNU", "Ceritakan ChatBot"],
  },
  {
    id: "project-mochan",
    keywords: ["mochan", "coffee", "kopi", "mochan coffee", "kedai kopi"],
    answer: `Mochan Coffee adalah Micro SaaS untuk manajemen kedai kopi. Dibangun dengan Flutter & Firebase, fitur utamanya meliputi order management, inventory tracking, sales analytics, dan loyalty program.`,
  },
  {
    id: "project-mcc",
    keywords: ["mcc", "store", "toko", "ecommerce", "e-commerce", "company profile"],
    answer: `MCC Store adalah website company profile dengan fitur e-commerce sederhana. Dikembangkan dengan PHP & MySQL, mencakup katalog produk, cart, checkout, dan dashboard admin.`,
  },
  {
    id: "project-simak",
    keywords: ["simak", "upzisnu", "keuangan", "qr code", "donasi", "manajemen keuangan"],
    answer: `SIMAK UPZISNU adalah sistem pengelolaan keuangan berbasis QR Code untuk infaq, sedekah, dan dana sosial. Fokusnya pada transparansi, kemudahan pencatatan, dan laporan otomatis.`,
  },
  {
    id: "project-chatbot",
    keywords: ["chatbot", "bot", "chat bot", "asisten virtual", "percakapan", "AI"],
    answer: `ChatBot ini adalah contoh aplikasi percakapan berbasis JavaScript & Node.js. Sistemnya menggunakan keyword matching untuk menjawab topik seputar portfolio dan skill.`,
  },
  {
    id: "latest-project",
    keywords: ["project terbaru", "baru", "terbaru", "recent project", "latest"],
    answer: `Project terbaru ${profile.nickname} antara lain Mochan Coffee, SIMAK UPZISNU, dan ChatBot. Setiap project menonjolkan keahlian di web app, mobile app, dan backend.`,
  },
  {
    id: "experience",
    keywords: ["pengalaman", "kerja", "karir", "experience", "freelance", "job", "bekerja", "client"],
    answer: experiences
      .map((e) => `${e.role} di ${e.company} (${e.period}): ${e.description}`)
      .join(" "),
    followUp: ["Skill apa yang dipakai?", "Bisa remote?"],
  },
  {
    id: "education",
    keywords: ["pendidikan", "sekolah", "kuliah", "kampus", "education", "universitas", "belajar dimana", "study"],
    answer: education.length
      ? education.map((e) => `${e.degree} - ${e.school} (${e.period})`).join(" ")
      : `Informasi pendidikan belum tersedia. Selain itu, ${profile.nickname} juga banyak belajar sendiri lewat project nyata dan sumber online.`,
  },
  {
    id: "services",
    keywords: ["jasa", "layanan", "service", "tawaran", "offer", "bisa bantu apa", "kerjaan", "service"],
    answer: `Layanan yang ditawarkan: ${services.map((s) => s.title).join(", ")}. ${services.map((s) => s.description).join(" ")}`,
    followUp: ["Apa saja layananmu?", "Bisa kerja remote?"],
  },
  {
    id: "working-style",
    keywords: ["cara kerja", "workflow", "metode", "proses", "gaya kerja", "bagaimana kerja"],
    answer: `${profile.nickname} biasanya memulai dengan memahami kebutuhan klien, merancang solusi, membangun dengan clean code, dan rutin melakukan review sampai aplikasi siap.`,
  },
  {
    id: "pricing",
    keywords: ["harga", "biaya", "pricing", "rate", "tarif", "cost", "rate card", "estimate harga", "budget"],
    answer: `Biaya project biasanya disesuaikan dengan ruang lingkup, teknologi, dan durasi pengerjaan. Untuk estimasi kasar, ${profile.nickname} akan diskusikan kebutuhan terlebih dahulu sehingga penawaran menjadi lebih akurat dan adil.`,
    followUp: ["Bagaimana estimasi waktu?", "Bisa kirim penawaran?"],
  },
  {
    id: "timeline",
    keywords: ["waktu", "timeline", "estimasi", "lama", "durasi", "deadline", "deadline project"],
    answer: `Estimasi waktu pengerjaan bergantung pada kompleksitas proyek dan fitur yang dibutuhkan. Biasanya mulai dari beberapa minggu untuk website sederhana hingga 1-2 bulan untuk sistem yang lebih lengkap.`,
    followUp: ["Apa saja yang perlu disiapkan?", "Berapa lama untuk MVP?"],
  },
  {
    id: "testimonials",
    keywords: ["testimoni", "review", "feedback", "testimony", "rekomendasi", "client review"],
    answer: `Banyak klien menghargai komunikasi yang jelas dan hasil akhir yang fungsional. ${profile.nickname} fokus memberikan solusi yang bisa dipakai langsung dan mudah dikembangkan lagi di kemudian hari.`,
    followUp: ["Apa saja project terbaik?", "Bisa kerja remote?"],
  },
  {
    id: "contact",
    keywords: ["kontak", "hubungi", "contact", "email", "whatsapp", "telepon", "hire", "sewa", "order", "rekrut", "DM"],
    answer: `Kamu bisa menghubungi ${profile.nickname} lewat:\n📧 Email: ${profile.email}\n💼 LinkedIn: ${profile.social.linkedin}\n🐙 GitHub: ${profile.social.github}\n🌐 Website: ${profile.social.website}\n\n${profile.availableForWork ? "Saat ini tersedia untuk project freelance atau kolaborasi." : "Saat ini sedang fokus project lain, tapi tetap terbuka untuk diskusi peluang baru."}`,
    followUp: ["Ada rate card?", "Bisa kerja remote?"],
  },
  {
    id: "location",
    keywords: ["lokasi", "domisili", "dimana", "tinggal", "alamat", "kota", "where", "based"],
    answer: `${profile.nickname} berbasis di ${profile.location}, namun siap bekerja secara remote untuk project dari mana saja.`,
  },
  {
    id: "availability",
    keywords: ["available", "tersedia", "kosong", "free", "lowongan", "open to work", "lagi sibuk", "bisa kerja"],
    answer: profile.availableForWork
      ? `Ya! ${profile.nickname} saat ini available untuk freelance project, kontrak jangka pendek, atau kolaborasi. Silakan hubungi lewat email atau LinkedIn.`
      : `Saat ini ${profile.nickname} sedang cukup sibuk, tapi tetap terbuka untuk diskusi apabila ada project menarik.`,
    followUp: ["Bisa hubungi dimana?", "Ada contoh project?"],
  },
  {
    id: "hiring",
    keywords: ["hire", "rekrut", "mencari developer", "cari programmer", "butuh developer", "need developer"],
    answer: `Kalau kamu mencari developer yang bisa membuat website, aplikasi mobile, atau backend, ${profile.nickname} bisa membantu. Kontak untuk diskusi scope, timeline, dan budget.`,
  },
  {
    id: "portfolio",
    keywords: ["portfolio", "portofolio", "website", "showcase", "contoh kerja", "hasil kerja"],
    answer: `Portofolio lengkap tersedia di ${profile.social.website} dan GitHub ${profile.social.github}. Di sana kamu bisa melihat project web, mobile, dan tools yang pernah dibuat.`,
  },
  {
    id: "thanks",
    keywords: ["terima kasih", "thanks", "thank you", "makasih", "thx", "trimakasih"],
    answer: `Sama-sama! 😊 Kalau masih ada yang ingin kamu tanyakan, tinggal tulis saja.`,
  },
  {
    id: "bye",
    keywords: ["bye", "selamat tinggal", "sampai jumpa", "dadah", "good bye", "see you", "sampai nanti"],
    answer: `Sampai jumpa! 👋 Kapan pun kamu butuh informasi lagi tentang ${profile.nickname}, saya siap membantu.`,
  },
  {
    id: "joke",
    keywords: ["lucu", "joke", "lawak", "ngelawak", "gombal", "humor"],
    answer: `Saya chatbot yang fokus bantu jawab soal portfolio dan skill. Untuk lelucon, minta saja ke ${profile.nickname}! 😄`,
  },
];

export const defaultAnswer = `Maaf, saya belum paham maksud pertanyaan itu 🤔 Kamu bisa tanya tentang profil, skill, project, pengalaman, pendidikan, layanan, atau cara menghubungi ${profile.nickname}.`;

export const suggestedQuestions = [
  "Siapa kamu?",
  "Apa skill-nya?",
  "Project terbaru?",
  "Bisa hubungi dimana?",
  "Bagaimana cara kerja?",
  "Berapa estimasi waktunya?",
  "Berapa biayanya?",
];

/**
 * Mencocokkan pesan user dengan knowledge base.
 * Strategi: hitung jumlah keyword yang match per entry, pilih entry dengan skor tertinggi.
 */
export function matchKnowledge(userMessage: string): KnowledgeEntry | null {
  const normalized = userMessage.toLowerCase().trim();
  if (!normalized) return null;

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalized.includes(keyword.toLowerCase())) {
        // keyword lebih panjang/spesifik diberi bobot lebih tinggi
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch;
}
