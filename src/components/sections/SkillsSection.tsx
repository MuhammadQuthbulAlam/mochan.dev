"use client";

import { skills } from "@/lib/data";
import { useLanguage } from "@/lib/language";

const techIcons: Record<string, string> = {
  js: "https://skillicons.dev/icons?i=js",
  ts: "https://skillicons.dev/icons?i=ts",
  php: "https://skillicons.dev/icons?i=php",
  python: "https://skillicons.dev/icons?i=python",
  dart: "https://skillicons.dev/icons?i=dart",
  kotlin: "https://skillicons.dev/icons?i=kotlin",
  swift: "https://skillicons.dev/icons?i=swift",
  react: "https://skillicons.dev/icons?i=react",
  nextjs: "https://skillicons.dev/icons?i=nextjs",
  nodejs: "https://skillicons.dev/icons?i=nodejs",
  flutter: "https://skillicons.dev/icons?i=flutter",
  postgresql: "https://skillicons.dev/icons?i=postgresql",
  mysql: "https://skillicons.dev/icons?i=mysql",
  git: "https://skillicons.dev/icons?i=git",
  vscode: "https://skillicons.dev/icons?i=vscode",
  figma: "https://skillicons.dev/icons?i=figma",
  vercel: "https://skillicons.dev/icons?i=vercel",
};

interface SkillBarProps {
  name: string;
  icon: string;
  level: number;
}

function SkillBar({ name, icon, level }: SkillBarProps) {
  const iconUrl = techIcons[icon];
  return (
    <div className="flex items-center gap-4">
      {iconUrl && (
        <img src={iconUrl} alt={name} className="w-8 h-8 rounded-lg object-contain flex-shrink-0" />
      )}
      <div className="flex-1">
        <div className="flex justify-between mb-1.5">
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            {name}
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            {level}%
          </span>
        </div>
        <div
          className="h-1.5 rounded-full overflow-hidden"
          style={{ background: "var(--bg-muted)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${level}%`,
              background: "linear-gradient(90deg, var(--accent), var(--accent-light))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { t } = useLanguage();
  const allTools = [...skills.tools];
  const allToolIcons = allTools.map((t) => t.icon).join(",");

  return (
    <section id="skills" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="mb-16">
          <span className="section-label">{t.skills.sectionLabel}</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.skills.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Languages */}
          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.skills.languages}
            </h3>
            <div className="flex flex-col gap-5">
              {skills.languages.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3
              className="text-lg font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.skills.frameworks}
            </h3>
            <div className="flex flex-col gap-5">
              {skills.frameworks.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>

            <h3
              className="text-lg font-bold mt-10 mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.skills.databases}
            </h3>
            <div className="flex flex-col gap-5">
              {skills.databases.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools strip */}
        <div className="mt-16 pt-12" style={{ borderTop: "1px solid var(--border)" }}>
          <h3
            className="text-sm font-medium mb-6"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}
          >
            {t.skills.tools}
          </h3>
          <img
            src={`https://skillicons.dev/icons?i=${allToolIcons}&theme=dark&perline=10`}
            alt="Tools"
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
}
