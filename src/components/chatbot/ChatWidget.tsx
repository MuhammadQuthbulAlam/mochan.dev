"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, ArrowUp } from "lucide-react";
import { ChatMessage } from "@/types/chat";
import { profile } from "@/lib/data";
import { suggestedQuestions } from "@/lib/chatbot-knowledge";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";

const STORAGE_KEY = "chat-history";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: `Halo! 👋 Saya asisten virtual ${profile.nickname}. Tanya apa saja tentang skill, project, pengalaman, atau cara menghubunginya!`,
  followUp: suggestedQuestions,
  timestamp: Date.now(),
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setHasUnread(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 360);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: ChatMessage = {
      id: createId(),
      role: "user",
      text: trimmed,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      const botMsg: ChatMessage = {
        id: createId(),
        role: "bot",
        text: data.reply ?? "Maaf, terjadi kesalahan. Coba lagi ya.",
        followUp: data.followUp ?? [],
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMsg]);
      if (!isOpen) setHasUnread(true);
    } catch (error) {
      const errorMsg: ChatMessage = {
        id: createId(),
        role: "bot",
        text: "Maaf, koneksi terganggu. Silakan coba lagi.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
            style={{
              background: "var(--bg-card)",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
            }}
          >
            <ArrowUp size={18} />
          </button>
        )}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Tutup chat" : "Buka chat"}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
          style={{
            background: "var(--accent)",
            color: "#fff",
            boxShadow: "0 4px 24px rgba(255, 107, 26, 0.4)",
          }}
        >
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
          {hasUnread && !isOpen && (
            <span
              className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full border-2"
              style={{ background: "#22c55e", borderColor: "var(--bg)" }}
            />
          )}
        </button>
      </div>

      {/* Chat panel */}
      <div
        className="fixed bottom-24 right-6 z-50 w-[min(380px,calc(100vw-2.5rem))] flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 origin-bottom-right"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
          height: "min(560px, calc(100vh - 8rem))",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1) translateY(0)" : "scale(0.95) translateY(12px)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
          }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <Sparkles size={16} color="#fff" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Tanya soal {profile.nickname}
            </p>
            <p className="text-xs text-white/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
              Online · Bot
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Tutup chat"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4"
          style={{ background: "var(--bg)" }}
        >
          {messages.map((msg) => (
            <div key={msg.id} className="flex flex-col gap-2">
              <ChatBubble message={msg} />
              {msg.role === "bot" && msg.followUp && msg.followUp.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-9">
                  {msg.followUp.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="text-xs px-3 py-1.5 rounded-full transition-colors duration-200"
                      style={{
                        background: "var(--bg-muted)",
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent-border)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isTyping && <TypingIndicator />}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
          style={{ borderTop: "1px solid var(--border)", background: "var(--bg-card)" }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tulis pertanyaan..."
            className="flex-1 text-sm px-4 py-2.5 rounded-full outline-none transition-colors"
            style={{
              background: "var(--bg-muted)",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
            }}
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            aria-label="Kirim pesan"
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 disabled:opacity-40"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </>
  );
}
