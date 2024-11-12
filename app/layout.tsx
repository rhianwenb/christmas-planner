
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./ui/Nav";


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

export const metadata: Metadata = {
  title: "Christmas Planner",
  description: "The most wonderful time of the year!",
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-100`} >

        <Nav/>

        {children}

      </body>
    </html>
  );
}
