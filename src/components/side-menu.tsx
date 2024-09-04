"use client";

import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Calendar, CalendarDays, CalendarPlus, Home, Icon } from "lucide-react";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { useStore } from "@/hooks/use-store";

export default function SideMenu() {
    const sizeImage = 200;
    const { isOpen } = useSidebarToggle();

    return (
        <>
            {/* Side Menu */}
            <Sheet defaultOpen={true} open={isOpen} modal={false}>
                <SheetContent
                    side={"left"}
                    className="m-0 p-0 bg-white no-animation w-auto "
                >
                    <SheetHeader
                        className="items-left py-10 px-6 bg-blue-950 relative w-80
                    "
                    >
                        <Image
                            src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg"
                            width={sizeImage}
                            height={sizeImage}
                            alt="logo Uninassau azul com texto preto"
                        />
                    </SheetHeader>

                    {/* Itens do Menu */}
                    <nav className="p-5">
                        <ul className="list-none">
                            <li className="flex gap-1 items-center rounded-xl  text-blue-600 bg-blue-100 px-4 py-3 hover:bg-blue-200  hover:text-blue-900 cursor-pointer">
                                <CalendarDays size={20} className="mr-2" />
                                <a
                                    href="#home"
                                    className="text-normal font-normal"
                                >
                                    Eventos
                                </a>
                            </li>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
}
