"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Home } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";

export default function SideMenu() {
    const sizeImage = 200;
    const { isOpen } = useSidebarToggle();

    return (
        <>
            {/* Side Menu */}
            <aside className="bg-white fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <Link
                        href="#"
                        className="bg-white group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Image
                            src="https://logo.uninassau.edu.br/img/svg/favicon_uninassau.svg"
                            width={sizeImage}
                            height={sizeImage}
                            alt="logo Uninassau azul com texto preto"
                        />

                        <span className="sr-only">Logo UNINASSAU</span>
                    </Link>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="bg-blue-50 flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Calendar
                                        color="#1d4ed8"
                                        className="h-5 w-5"
                                    />
                                    <span className=" sr-only"> Eventos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white" side="right">
                                Eventos
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
        </>
    );
}
