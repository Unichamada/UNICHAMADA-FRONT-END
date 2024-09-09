import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";

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
        <QueryProvider>
            <html lang="pt-br">
                <body className="bg-blue-950 ">
                    <Toaster />

                    {children}
                </body>
            </html>
        </QueryProvider>
    );
}
