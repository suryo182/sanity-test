'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('utm_source');
    const medium = urlParams.get('utm_medium');

    if (source) {
      localStorage.setItem('utm_source', source);
    }
    if (medium) {
      localStorage.setItem('utm_medium', medium);
    }

    setUtmSource(localStorage.getItem('utm_source') || '');
    setUtmMedium(localStorage.getItem('utm_medium') || '');
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-grow">
          {children}
        </div>
        <footer className="w-full p-4 bg-gray-800 text-white text-center">
          <p>UTM Source: {utmSource || 'N/A'}</p>
          <p>UTM Medium: {utmMedium || 'N/A'}</p>
        </footer>
      </body>
    </html>
  );
}