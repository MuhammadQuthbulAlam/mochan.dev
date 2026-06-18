import { ChatMessage } from "@/types/chat";
import { profile } from "@/lib/data";
import { Bot, User } from "lucide-react";

export default function ChatBubble({ message }: { message: ChatMessage }) {
  const isBot = message.role === "bot";

  return (
    <div className={`flex gap-2.5 ${isBot ? "" : "flex-row-reverse"} animate-fade-in`}>
      {/* Avatar */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          background: isBot ? "var(--accent-muted)" : "var(--bg-muted)",
          color: isBot ? "var(--accent)" : "var(--text-secondary)",
          border: `1px solid ${isBot ? "var(--accent-border)" : "var(--border)"}`,
        }}
      >
        {isBot ? <Bot size={14} /> : <User size={14} />}
      </div>

      {/* Bubble */}
      <div
        className="max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
        style={{
          background: isBot ? "var(--bg-card)" : "var(--accent)",
          color: isBot ? "var(--text-primary)" : "#fff",
          border: isBot ? "1px solid var(--border)" : "none",
          borderTopLeftRadius: isBot ? "4px" : undefined,
          borderTopRightRadius: !isBot ? "4px" : undefined,
        }}
      >
        {message.text}
      </div>
    </div>
  );
}
