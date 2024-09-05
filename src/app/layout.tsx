import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";
import SideMenuLayout from "@/components/side-menu-layout";
import SideMenu from "@/components/side-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "UNICHAMADA",
    description: "CHAMADA ONLINE DA UNINASSAU",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className="flex min-h-screen w-full flex-col bg-slate-100 ">
                <SideMenu />
                {children}
            </body>
        </html>
    );
}
