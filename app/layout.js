import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";
import { cookies } from "next/headers";

export const metadata = {
  title: {
    default: "Ashwini Paraye - Fullstack Developer",
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
    title: "Ashwini Paraye - Fullstack Developer",
    description: "Ashwini Paraye's - Fullstack Developer.",
    url: "https://ashwiniparaye.in/",
    siteName: "Ashwini Paraye Portfolio",
    images: [
      {
        url: "https://ashwiniparaye.in/banner1.png",
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
    title: "Ashwini Paraye - Fullstack Developer",
    description: "Ashwini Paraye's - Fullstack Developer.",
    creator: "@AshwiniParaye",
    images: ["https://ashwiniparaye.in/banner1.png"],
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

  let initialIsDark = savedTheme === "dark";
  const htmlClasses = initialIsDark ? "dark" : "";

  return (
    <html lang="en" suppressHydrationWarning className={htmlClasses}>
      <head></head>
      <body>
        <ThemeProvider initialIsDark={initialIsDark}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
