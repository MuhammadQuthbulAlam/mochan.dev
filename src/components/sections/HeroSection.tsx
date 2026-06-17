"use client";

import Image from "next/image";
import { Github, Linkedin, ArrowDown, MapPin, Zap } from "lucide-react";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/language";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,26,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.3,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            {/* Status badge */}
            {profile.availableForWork && (
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
                style={{
                  background: "var(--accent-muted)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--accent)" }}
                />
                {t.hero.available}
              </div>
            )}

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Hi, I&apos;m{" "}
              <span className="block text-gradient">{profile.nickname}</span>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-md"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.hero.bio}
            </p>

            {/* Location */}
            <div
              className="flex items-center gap-2 mb-10 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <MapPin size={14} style={{ color: "var(--accent)" }} />
              {profile.location}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                <Zap size={16} />
                {t.hero.seeMyWork}
              </a>
              <a href="#contact" className="btn-outline">
                {t.hero.getInTouch}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-10">
              <span
                className="text-xs"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                {t.hero.findMe}
              </span>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Github size={20} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Avatar Column */}
          <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-full animate-pulse-slow"
                style={{
                  background: "conic-gradient(from 0deg, var(--accent), transparent, var(--accent-light), transparent, var(--accent))",
                  opacity: 0.3,
                }}
              />
              <div
                className="absolute -inset-3 rounded-full"
                style={{ background: "var(--bg)" }}
              />

              {/* Avatar */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden animate-float"
                style={{ border: "3px solid var(--accent)" }}
              >
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div
                className="absolute -bottom-4 -left-6 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                }}
              >
                37+ Repos 
              </div>
              <div
                className="absolute -top-2 -right-6 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Full Stack
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
}
