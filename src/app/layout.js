import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HNAK PWA",
  description: "HNAK PWA Application",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#213352" }],
  authors: [
    { name: "Shankar Parmar" },
    {
      name: "Shankar Parmar",
      url: "https://in.linkedin.com/in/shnky007/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/apple-icon.png" },
    { rel: "icon", url: "/favicon.ico" },
  ],
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
