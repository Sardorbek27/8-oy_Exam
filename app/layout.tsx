import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from '../components/Footer'
import { BasketContext } from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Shop",
  description: "Green Shop Project",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-icon.svg" />
      </head>
      <body className={inter.className}>
        <BasketContext>
        <Header />
          <main className="mt-[120px]">{children}</main>
          <Footer/>
        </BasketContext>
      </body>
    </html>
  );
}
