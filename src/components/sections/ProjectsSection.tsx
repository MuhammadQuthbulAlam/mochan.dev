"use client";

import Image from "next/image";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function ProjectsSection() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="section-label">{t.projects.sectionLabel}</span>
          <h2
            className="text-4xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.projects.title}
          </h2>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="card flex flex-col overflow-hidden group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image Preview */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-[var(--accent-muted)] to-[var(--bg-muted)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "var(--accent-muted)",
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                      border: "1px solid var(--accent-border)",
                    }}
                  >
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                        style={{ color: "var(--text-muted)", background: "var(--bg-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                        style={{ color: "var(--text-muted)", background: "var(--bg-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3 transition-colors"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        background: "var(--bg-muted)",
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all repos CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/MuhammadQuthbulAlam"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github size={16} />
            {t.projects.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
