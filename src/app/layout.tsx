import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UNICHAMADA",
  description: "CHAMADA ONLINE DA UNINASSAU",
};

export default function RootLayout() {
  return (
    <html lang="pt-br">
      <body>
        <Home/>
      </body> 
    </html>
  );
}
