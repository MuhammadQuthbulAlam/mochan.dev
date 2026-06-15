import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme";
import { LanguageProvider } from "@/lib/language";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.bio,
  keywords: ["Full Stack Developer", "Android Developer", "Flutter", "React", "Next.js", "Freelancer"],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.bio,
    type: "website",
    images: [{ url: profile.avatar }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Portfolio`,
    description: profile.bio,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise min-h-screen antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
