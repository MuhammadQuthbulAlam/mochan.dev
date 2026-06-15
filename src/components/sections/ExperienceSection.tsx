"use client";

import { experiences, education, certifications } from "@/lib/data";
import { useLanguage } from "@/lib/language";

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Experience */}
          <div>
            <span className="section-label">{t.experience.sectionLabel}</span>
            <h2
              className="text-4xl font-black tracking-tight mb-12"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.experience.workHistory}
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-3 top-0 bottom-0 w-px"
                style={{ background: "var(--border)" }}
              />

              <div className="flex flex-col gap-10">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-10">
                    {/* Dot */}
                    <div
                      className="absolute left-0 top-1.5 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "var(--bg-card)", border: "2px solid var(--accent)" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className="text-xs mb-1 font-medium"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                    >
                      {exp.period}
                    </div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm font-medium mb-3"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {exp.company}
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            background: "var(--bg-muted)",
                            color: "var(--text-muted)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <span className="section-label">{t.experience.educationLabel}</span>
            <h2
              className="text-4xl font-black tracking-tight mb-12"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.experience.educationTitle}
            </h2>

            <div className="flex flex-col gap-6">
              {education.map((edu, i) => (
                <div key={i} className="card p-6">
                  <div
                    className="text-xs mb-2 font-medium"
                    style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                  >
                    {edu.period}
                  </div>
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium mb-3" style={{ color: "var(--text-secondary)" }}>
                    {edu.school}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <span className="section-label">{t.experience.certificationsLabel}</span>

              <div className="flex flex-col gap-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="card p-6">
                    <div
                      className="text-xs mb-2 font-medium"
                      style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
                    >
                      {cert.date}
                    </div>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                    >
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium mb-3" style={{ color: "var(--text-secondary)" }}>
                      {cert.issuer}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
