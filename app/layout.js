import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Ashwini Paraye";
const SITE_TITLE = "Ashwini Paraye - Fullstack Developer";
const SITE_DESCRIPTION =
  "I’m a developer who loves turning ideas into smooth, meaningful, and beautifully built digital experiences.";
const SITE_CREATOR = "@AshwiniParaye";
const SITE_URL = "https://ashwiniparaye.in/";
const SITE_IMAGE_URL = "https://ashwiniparaye.in/banner1.png";

export const metadata = {
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    SITE_NAME,
    "Fullstack Developer",
    "React",
    "Next.js",
    "Golang",
    "Vue.js",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
    images: [
      {
        url: SITE_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Portfolio`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: SITE_CREATOR,
    images: [SITE_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const THEME_COOKIE_NAME = "app-theme";

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const savedTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;

  let initialIsDark = savedTheme === "dark";
  const htmlClasses = initialIsDark ? "dark" : "";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head></head>
      <body>
        <ThemeProvider initialIsDark={initialIsDark}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
