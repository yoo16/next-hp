import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Lumière",
  description: "フランスの伝統的なブーランジェリーショップ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script src="js/app.js" strategy="afterInteractive" />
        <Nav />
        {children}
      </body>
    </html>
  );
}
