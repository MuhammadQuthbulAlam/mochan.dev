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
    keywords: ["halo", "hai", "hi", "hello", "hey", "pagi", "siang", "malam", "sore"],
    answer: `Halo! 👋 Saya asisten virtual ${profile.nickname}. Saya bisa cerita tentang skill, project, pengalaman kerja, atau cara menghubunginya. Mau tanya apa?`,
    followUp: ["Siapa kamu?", "Apa skill-nya?", "Lihat project"],
  },
  {
    id: "who",
    keywords: ["siapa", "kenalan", "perkenalan", "tentang kamu", "tentang dia", "profil", "identitas", "who are you", "who is"],
    answer: `${profile.name}, biasa dipanggil ${profile.nickname}. ${profile.bio} Berbasis di ${profile.location}.`,
    followUp: ["Apa skill-nya?", "Bisa hubungi dimana?"],
  },
  {
    id: "skills",
    keywords: ["skill", "kemampuan", "bisa apa", "keahlian", "menguasai", "tech stack", "teknologi", "bahasa programming", "stack"],
    answer: `${profile.nickname} menguasai: ${[...skills.languages, ...skills.frameworks].slice(0, 8).map((s) => s.name).join(", ")}. Database: ${skills.databases.map((d) => d.name).join(" & ")}. Tools: ${skills.tools.map((t) => t.name).join(", ")}.`,
    followUp: ["Apa project terbarunya?", "Berapa lama coding?"],
  },
  {
    id: "projects",
    keywords: ["project", "proyek", "karya", "portofolio", "portfolio", "produk", "aplikasi", "app yang dibuat", "github"],
    answer: `Beberapa project unggulan: ${projects.map((p) => `${p.title} (${p.category})`).join(", ")}. Semua ada di GitHub: ${profile.social.github}`,
    followUp: ["Ceritakan Mochan Coffee", "Bisa hubungi dimana?"],
  },
  {
    id: "project-mochan",
    keywords: ["mochan", "coffee", "kopi"],
    answer: `Mochan Coffee adalah Micro SaaS untuk manajemen coffee shop, dibangun dengan Flutter & Firebase. Fitur: order management, inventory tracking, sales analytics, dan loyalty program. Cek di GitHub: ${profile.social.github}/Mochan-Coffee`,
  },
  {
    id: "project-store",
    keywords: ["mcc", "store", "toko", "ecommerce", "e-commerce"],
    answer: `MCC Store adalah platform e-commerce berbasis PHP & MySQL, lengkap dengan katalog produk, cart, checkout, dan admin dashboard.`,
  },
  {
    id: "project-chatbot",
    keywords: ["chatbot project", "bot project"],
    answer: `Ada project ChatBot berbasis JavaScript & Node.js yang memanfaatkan AI API untuk percakapan natural language. Mirip seperti chatbot yang sedang kamu pakai ini! 😄`,
  },
  {
    id: "experience",
    keywords: ["pengalaman", "kerja", "karir", "experience", "freelance", "job"],
    answer: experiences
      .map((e) => `${e.role} di ${e.company} (${e.period}): ${e.description}`)
      .join(" "),
    followUp: ["Apa skill-nya?", "Bisa hubungi dimana?"],
  },
  {
    id: "education",
    keywords: ["pendidikan", "sekolah", "kuliah", "kampus", "education", "universitas", "belajar dimana"],
    answer: education.length
      ? education.map((e) => `${e.degree} - ${e.school} (${e.period})`).join(" ")
      : `Informasi pendidikan belum tersedia. Sebagai gantinya, ${profile.nickname} banyak belajar secara mandiri (self-taught) sebagai "Vibe Coder".`,
  },
  {
    id: "services",
    keywords: ["jasa", "layanan", "service", "tawaran", "offer", "bisa bantu apa"],
    answer: `Layanan yang ditawarkan: ${services.map((s) => s.title).join(", ")}. ${services.map((s) => s.description).join(" ")}`,
    followUp: ["Bisa hubungi dimana?"],
  },
  {
    id: "contact",
    keywords: ["kontak", "hubungi", "contact", "email", "whatsapp", "telepon", "hire", "sewa", "order", "rekrut"],
    answer: `Kamu bisa hubungi ${profile.nickname} lewat:\n📧 Email: ${profile.email}\n💼 LinkedIn: ${profile.social.linkedin}\n🐙 GitHub: ${profile.social.github}\n\n${profile.availableForWork ? "Saat ini available untuk freelance work! 🚀" : ""}`,
  },
  {
    id: "location",
    keywords: ["lokasi", "domisili", "dimana", "tinggal", "alamat", "kota", "where"],
    answer: `${profile.nickname} berbasis di ${profile.location}, tapi terbuka untuk kerja remote dari mana saja.`,
  },
  {
    id: "availability",
    keywords: ["available", "tersedia", "kosong", "free", "lowongan", "open to work", "lagi sibuk"],
    answer: profile.availableForWork
      ? `Ya! ${profile.nickname} saat ini available untuk freelance project maupun kolaborasi. Yuk hubungi lewat email atau LinkedIn.`
      : `Saat ini ${profile.nickname} sedang penuh dengan komitmen lain, tapi tetap terbuka untuk diskusi project menarik.`,
    followUp: ["Bisa hubungi dimana?"],
  },
  {
    id: "thanks",
    keywords: ["terima kasih", "thanks", "thank you", "makasih", "thx"],
    answer: `Sama-sama! 😊 Kalau ada pertanyaan lain seputar ${profile.nickname}, tinggal tanya aja.`,
  },
  {
    id: "bye",
    keywords: ["bye", "selamat tinggal", "sampai jumpa", "dadah", "good bye", "see you"],
    answer: `Sampai jumpa! 👋 Jangan ragu kembali kalau ada pertanyaan lain.`,
  },
  {
    id: "joke",
    keywords: ["lucu", "joke", "lawak", "ngelawak", "gombal"],
    answer: `Saya cuma chatbot rule-based, jadi humor saya terbatas keyword 😅 Tapi ${profile.nickname} kalau soal coding jauh lebih jago daripada saya soal lawak!`,
  },
];

export const defaultAnswer = `Maaf, saya belum paham maksud pertanyaan itu 🤔 Coba tanya soal skill, project, pengalaman kerja, pendidikan, atau cara menghubungi ${profile.nickname}. Atau pilih salah satu topik di bawah:`;

export const suggestedQuestions = [
  "Siapa kamu?",
  "Apa skill-nya?",
  "Lihat project",
  "Bisa hubungi dimana?",
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
