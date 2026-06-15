"use client";

import { profile, services } from "@/lib/data";
import { useLanguage } from "@/lib/language";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="section-label">{t.about.sectionLabel}</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Bio */}
          <div>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.about.paragraph1}
            </p>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.about.paragraph2}
            </p>
            <p
              className="text-base"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              # Vibe Coder · Open Source Enthusiast · Lifelong Learner
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "37+", label: "GitHub Repos" },
              { value: "3+", label: "Years Coding" },
              { value: "10+", label: "Tech Stack" },
              { value: "∞", label: "Ideas to Build" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card p-6"
              >
                <p
                  className="text-4xl font-black mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
<span className="section-label">{t.about.services.sectionLabel}</span>
            <h3
              className="text-2xl font-bold mb-10"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {t.about.services.title}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div key={service.title} className="card p-6">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h4
                  className="font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {service.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
