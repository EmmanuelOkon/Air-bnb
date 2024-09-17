import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const meta = {
  title: "Airbnb | Vacation rentals, cabins, beach houses, & more",
  description:
    "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by Hosts on Airbnb.",
  cardImage: "/airbnb-desktop.png",
  robots: "follow, index",
  favicon: "/favicon.ico",
  url: "https://github.com/EmmanuelOkon/Air-bnb/issues",
  type: "website",
  keywords: ["airbnb", "rentals", "vacation", "travel", "beach", "cabin"],
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  applicationName: meta.title,
  keywords: meta.keywords,
  creator: "Emmanuel Okon",
  robots: meta.robots,
  metadataBase: new URL("https://github.com/EmmanuelOkon/Air-bnb/issues"),
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    type: meta.type,
    site_name: meta.title,
  } as OpenGraph,
  icons: [
    {
      url: "/airbnb-desktop.png",
      href: "/airbnb-desktop.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
