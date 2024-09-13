import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";
import MenuBar from "@/components/menu-bar";
import { Page } from "@/components/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "UNICHAMADA",
    description: "CHAMADA ONLINE DA UNINASSAU",
};

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <QueryProvider>
            <html className="h-screen" lang="pt-br">
                <body className="bg-slate-100 ">
                    <Toaster />
                    <MenuBar />
                    {children}
                </body>
            </html>
        </QueryProvider>
    );
}
