// app/layout.js
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import { cookies } from "next/headers";

export const metadata = {
  title: {
    default: "Ashwini Paraye - Fullstack Developer Portfolio",
    template: "%s | Ashwini Paraye",
  },
  description: "Ashwini Paraye's - Fullstack Developer.",
  keywords: [
    "Ashwini Paraye",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Golang",
    "Vue.js",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Ashwini Paraye" }],
  openGraph: {
    title: "Ashwini Paraye - Fullstack Developer Portfolio",
    description: "Ashwini Paraye's - Fullstack Developer.",
    url: "https://ashwiniparaye.in/",
    siteName: "Ashwini Paraye Portfolio",
    images: [
      {
        url: "https://ashwiniparaye.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashwini Paraye Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwini Paraye - Fullstack Developer Portfolio",
    description: "Ashwini Paraye's - Fullstack Developer.",
    creator: "@yourtwitterhandle",
    images: ["https://ashwiniparaye.in/twitter-image.jpg"],
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

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const savedTheme = cookieStore.get(THEME_COOKIE_NAME)?.value;

  // Determine initial theme for SSR
  let initialIsDark = false;
  if (savedTheme === "dark") {
    initialIsDark = true;
  }
  // No client-side `matchMedia` here as this is server-only execution.
  // The inline script (below) and client ThemeProvider will handle system preference fallback.

  // Dynamically set the initial class for the <html> tag based on server-read cookie
  const htmlClasses = `${GeistSans.className} ${initialIsDark ? "dark" : ""}`;

  return (
    <html
      lang="en"
      // suppressHydrationWarning is essential here because the client-side
      // script (and later ThemeProvider's useState init) might make minor changes
      // to the <html> classList or attributes compared to the server's initial render.
      // This tells React to ignore the difference for the <html> element itself.
      suppressHydrationWarning
      className={htmlClasses} // Apply server-determined class
    >
      <head>
        {/*
          Minimal inline script to handle cases where:
          1. It's the very first visit (no cookie yet).
          2. The server didn't explicitly set 'dark' but the user's system prefers dark.
          This runs *before* React loads to prevent FOUC for system preference.
          This script ensures that the `dark` class is present on `documentElement`
          BEFORE any client-side hydration or rendering.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // If the server *already* set 'dark' based on a cookie, do nothing.
                // Otherwise, check system preference as a fallback.
                if (!document.documentElement.classList.contains('dark')) {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (prefersDark) {
                    document.documentElement.classList.add('dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        {/* Pass the server-determined initialIsDark state to the client ThemeProvider */}
        <ThemeProvider initialIsDark={initialIsDark}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
