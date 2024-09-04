"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import SideMenu from "@/components/side-menu";

export default function SideMenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <>
            <SideMenu />
            <main
                className={cn(
                    "bg-white px-4",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "ml-80",
                )}
            >
                {children}
            </main>
        </>
    );
}
