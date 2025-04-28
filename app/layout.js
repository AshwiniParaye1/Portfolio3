// app/layout.js
import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Ashwini Paraye",
  description: "Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
