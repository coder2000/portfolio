import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dieter Lunn — Software Developer",
  description:
    "Portfolio of Dieter Lunn, software developer building products that matter.",
  metadataBase: new URL("https://dieterlunn.ca"),
  openGraph: {
    type: "website",
    url: "https://dieterlunn.ca",
    title: "Dieter Lunn — Software Developer",
    description:
      "Portfolio of Dieter Lunn, software developer building products that matter.",
    siteName: "Dieter Lunn",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dieter Lunn — Software Developer",
    description:
      "Portfolio of Dieter Lunn, software developer building products that matter.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://dieterlunn.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
