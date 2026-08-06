import { IBM_Plex_Mono, Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const heading = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: {
    default: "Sivaraj Marimuthu | Full-Stack & Backend Software Engineer",
    template: "%s | Sivaraj Marimuthu",
  },
  description:
    "Portfolio of Sivaraj Marimuthu, a full-stack and backend software engineer based in Thanjavur, India.",
  keywords: [
    "Sivaraj Marimuthu",
    "full-stack developer",
    "backend engineer",
    "freelance software developer",
    "Thanjavur",
    "India",
  ],
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
