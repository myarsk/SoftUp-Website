import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "SoftUp Agency - Next-Gen Software Solutions",
  description: "Cutting-edge blockchain, AI, and web development services for the future of technology.",
  keywords: "blockchain development, AI integration, web development, mobile apps, cybersecurity, cloud solutions, software agency",
  authors: [{ name: "SoftUp Agency" }],
  creator: "SoftUp Agency",
  publisher: "SoftUp Agency",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softupagency.com",
    title: "SoftUp Agency - Next-Gen Software Solutions",
    description: "Cutting-edge blockchain, AI, and web development services for the future of technology.",
    siteName: "SoftUp Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftUp Agency - Next-Gen Software Solutions",
    description: "Cutting-edge blockchain, AI, and web development services for the future of technology.",
    creator: "@softupagency",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#00FFFF",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${roboto.variable} font-roboto antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
