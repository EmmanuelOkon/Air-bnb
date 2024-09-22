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
  cardImage: "/airbnb-favicon.png",
  robots: "follow, index",
  favicon: "/assets/airbnb-48.png",
  url: "https://airbnb-vacation.vercel.app/",
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
  metadataBase: new URL("https://airbnb-vacation.vercel.app/"),
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    type: meta.type,
    site_name: meta.title,
  } as OpenGraph,
  icons: [
    {
      url: "/assets/airbnb-48.png",
      href: "/assets/airbnb-48.png",
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

// *8_yUce@fdJFC8*
