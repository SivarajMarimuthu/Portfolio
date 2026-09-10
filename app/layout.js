import { IBM_Plex_Mono, Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

// const siteUrl =
//   process.env.NEXT_PUBLIC_SITE_URL || "https://sivaraj-marimuthu.vercel.app";

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

// export const metadata = {
//   /*
//    * Base URL for canonical links, Open Graph images and other
//    * metadata URLs declared throughout the application.
//    */
//   metadataBase: new URL(siteUrl),

//   title: {
//     default: "Sivaraj Marimuthu | Full-Stack & Backend Software Engineer",
//     template: "%s | Sivaraj Marimuthu",
//   },

//   description:
//     "Portfolio of Sivaraj Marimuthu, a full-stack and backend software engineer based in Thanjavur, India.",

//   keywords: [
//     "Sivaraj Marimuthu",
//     "full-stack developer",
//     "backend engineer",
//     "freelance software developer",
//     "Thanjavur",
//     "India",
//   ],

//   authors: [
//     {
//       name: "Sivaraj Marimuthu",
//       url: siteUrl,
//     },
//   ],

//   creator: "Sivaraj Marimuthu",

//   icons: {
//     icon: "/favicon.svg",
//     shortcut: "/favicon.svg",
//   },

//   /*
//    * Existing development metadata preserved.
//    */
//   other: {
//     "codex-preview": "development",
//   },
// };

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sivarajmarimuthu.in";

const siteTitle = "Sivaraj Marimuthu | Full-Stack & Backend Software Engineer";

const siteDescription =
  "Full-stack and backend software engineer based in Thanjavur, India. Available for freelance projects, contract work and full-time opportunities.";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Sivaraj Marimuthu",
  },

  description: siteDescription,

  alternates: {
    canonical: "/",
  },
  keywords: [
    "Sivaraj Marimuthu",
    "full-stack developer",
    "backend engineer",
    "freelance software developer",
    "Thanjavur",
    "India",
  ],

  authors: [
    {
      name: "Sivaraj Marimuthu",
      url: siteUrl,
    },
  ],

  creator: "Sivaraj Marimuthu",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Sivaraj Marimuthu Portfolio",
    title: siteTitle,
    description: siteDescription,

    images: [
      {
        url: "/og/sm.png",
        width: 1200,
        height: 630,
        alt: "Sivaraj Marimuthu — Full-Stack and Backend Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og/sm.png"],
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
