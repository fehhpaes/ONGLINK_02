import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import logo_onglink_01 from '@/app/src/img/LOGO_ONGLINK_1.png'
import logo_muxn from '@/app/src/img/MUXN_logo1.png'
import logo_instagram from '@/app/src/img/icons/instagram_6422200.png'
import logo_twitter from '@/app/src/img/icons/twitter_5968830.png'
import logo_facebook from '@/app/src/img/icons/social_12942738.png'
import Link from "next/link";
import Footer from '@/app/components/Footer';
import Header from "./components/header_cadastro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Header/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}


      </body>
      <Footer />
      
    </html>
  );
}
