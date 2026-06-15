"use client";

import Link from "next/link";
import Image from "next/image";

import { profile } from "@/lib/data";
import { Github, Linkedin, Instagram, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language";

const socialIcons = [
  { icon: Github, href: profile.social.github, label: "GitHub" },
  { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: profile.social.instagram, label: "Instagram" },
  { icon: Globe, href: profile.social.website, label: "Website" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="border-t mt-32"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/mochan3.png"
            alt="Mochan logo"
            width={80}
            height={80}
            className=""
          />
        </Link>
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: "var(--bg-muted)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                  (e.currentTarget as HTMLElement).style.background = "var(--accent-muted)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-muted)";
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
