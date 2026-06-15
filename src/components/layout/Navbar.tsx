"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Sun, Moon, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";
import { useLanguage } from "@/lib/language";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const languages = [
    { code: "id", label: "ID" },
    { code: "en", label: "EN" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md border-b"
          : "bg-transparent border-b border-transparent"
      )}
      style={{
        background: scrolled ? "var(--bg)cc" : "transparent",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLocale(lang.code as "id" | "en")}
                className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all duration-200 ${locale === lang.code ? "bg-accent text-white" : "bg-[var(--bg-muted)] text-[var(--text-secondary)]"}`}
                style={{ fontFamily: "var(--font-mono)" }}
                aria-label={`Switch language to ${lang.label}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
            style={{ background: "var(--bg-muted)", color: "var(--text-secondary)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
          >
            {t.nav.hireMe}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--bg-muted)", color: "var(--text-primary)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ background: "var(--bg)", borderColor: "var(--border)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary w-fit text-sm" onClick={() => setMenuOpen(false)}>
            {t.nav.hireMe}
          </a>
        </div>
      )}
    </header>
  );
}
