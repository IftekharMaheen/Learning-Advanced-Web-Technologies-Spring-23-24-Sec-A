import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Management System",
  description: "Developed by Iftekhar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor: "gray", padding:"25px"}}>  <NavBar/></header>
        {children}
        
      </body>
      <footer style={{backgroundColor: "gray", padding:"100px", height:"200px"}}></footer>
    </html>
  );
}