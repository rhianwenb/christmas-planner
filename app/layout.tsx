
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import "./globals.css";
import Nav from "./ui/Nav";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


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
   
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#1C1917",
          colorText: "#1C1917",
        }
      }}>
        
     <html lang="en">
        <body id="body" className={`${lora.className} bg-stone-100 justify-center`} >
        <Nav/>  

          {children}
          
          <div className="p-2 fixed bottom-0"> Code by Rhianwen </div>
        </body>
    </html>
    </ClerkProvider>

  );
}
