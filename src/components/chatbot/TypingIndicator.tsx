import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex gap-2.5 animate-fade-in">
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: "var(--accent-muted)",
          color: "var(--accent)",
          border: "1px solid var(--accent-border)",
        }}
      >
        <Bot size={14} />
      </div>
      <div
        className="px-4 py-3 rounded-2xl flex items-center gap-1"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderTopLeftRadius: "4px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "var(--text-muted)",
              animation: `typingDot 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes typingDot {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
