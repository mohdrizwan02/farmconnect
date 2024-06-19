import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoginSignupheader from "../components/LoginSignupheader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FarmConnect App",
  description: "FarmConnect app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>FarmConnect App</title>
      </head>
      <body className={inter.className}>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
        
        
        
       
