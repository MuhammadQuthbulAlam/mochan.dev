"use client";

import { profile } from "@/lib/data";
import { Mail, Github, Linkedin, Instagram, Globe, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function ContactSection() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      description: t.contact.emailDescription,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "MuhammadQuthbulAlam",
      href: profile.social.github,
      description: t.contact.githubDescription,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "muhammad-quthbul-alam",
      href: profile.social.linkedin,
      description: t.contact.linkedinDescription,
    },
    {
      icon: Globe,
      label: "Website",
      value: "mochandev.vercel.app",
      href: profile.social.website,
      description: t.contact.websiteDescription,
    },
  ];

  return (
    <section id="contact" className="py-32" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label mx-auto" style={{ justifyContent: "center" }}>
            {t.contact.sectionLabel}
          </span>
          <h2
            className="text-4xl md:text-6xl font-black tracking-tight mt-2 mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.contact.title.split(" ").slice(0, -1).join(" ")} {" "}
            <span className="text-gradient">{t.contact.title.split(" ").slice(-1)}</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {t.contact.description}
          </p>
        </div>

        {/* Location badge */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <MapPin size={14} style={{ color: "var(--accent)" }} />
            {t.contact.locationBadge} {profile.location} · {t.contact.remoteLabel}
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {contactLinks.map(({ icon: Icon, label, value, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="card p-6 flex flex-col gap-3 text-left"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent-muted)", color: "var(--accent)" }}
              >
                <Icon size={18} />
              </div>
              <div>
                <p
                  className="text-xs font-medium mb-1"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-semibold truncate"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA block */}
        <div
          className="mt-16 rounded-2xl p-12 text-center"
          style={{
            background: "linear-gradient(135deg, var(--accent-muted), transparent)",
            border: "1px solid var(--accent-border)",
          }}
        >
          <h3
            className="text-3xl font-black mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            {t.contact.readyTitle}
          </h3>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            {t.contact.readyDescription}
          </p>
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail size={16} />
            {t.contact.sendMessage}
          </a>
        </div>
      </div>
    </section>
  );
}
