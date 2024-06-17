import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <header>Home Page Header</header>
        {children}
        <footer>Home Page Footer</footer>
    </>
  );
}
