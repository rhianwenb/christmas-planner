
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
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


const lora = Lora({ subsets: ['latin'] });

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
      
      <body className={`${lora.className} bg-stone-100`} >

      

        {children}

      </body>
    </html>
  );
}
