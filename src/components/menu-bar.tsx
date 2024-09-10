"use client";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar,
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

export default function MenuBar() {
    const sizeImage = 200;

    const { isOpen } = useSidebarToggle();

    return (
        <>
            <aside className="bg-white fixed inset-y-0  left-0 hidden z-10 md:flex  w-14 flex-col border-r bg-background ">
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
                                    className="bg-blue-50 text-blue-500 flex h-9 w-9 items-center justify-center rounded-md transition-colors  md:h-8 md:w-8"
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

            <div className="flex  w-full flex-col ">
                <div className="flex flex-col ">
                    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 md:static md:h-auto md:border-0 md:bg-transparent md:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="outline"
                                    className="md:hidden"
                                >
                                    <PanelLeft className="h-5 w-5" />
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="md:max-w-xs p-0"
                            >
                                <nav className="grid gap-6 text-lg font-medium ">
                                    <Link
                                        href="#"
                                        className=" text-blue-500 bg-blue-950 flex h-full w-full items-center justify-center   md:h-8 md:w-8 px-8 py-4"
                                    >
                                        <Image
                                            src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg"
                                            width={250}
                                            height={250}
                                            alt="logo Uninassau azul com texto preto"
                                        />
                                        <span className="sr-only">
                                            Logo Uninassau
                                        </span>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-6 bg-blue-100 p-2 rounded-md  flex items-center gap-2 px-2.5 text-blue-600 font-medium text-base"
                                    >
                                        <Calendar
                                            color="#1d4ed8"
                                            className="h-5 w-5"
                                        />
                                        Eventos
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </header>
                </div>
            </div>
        </>
    );
}
