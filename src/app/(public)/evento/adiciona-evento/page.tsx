"use client";

import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Oi } from "next/font/google";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowLeftCircle, Mail } from "lucide-react";
import { Breadcrumb } from "antd";
import {
    BreadcrumbEllipsis,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import Link from "next/link";
import {
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import FormItem from "antd/es/form/FormItem";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FormAdicionaEvento } from "./components/form";

export default function TelaAdicionarEvento() {
    const router = useRouter();
    const navigateToEvento = () => {
        router.push("/evento");
    };

    return (
        <div className="flex-1 ml-20 mx-12 my-10  p-12 bg-white border border-slate-200 shadow-sm rounded-lg">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/evento">Evento</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbPage className="font-medium text-blue-500 ">
                            Adiciona Evento
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Button
                variant="ghost"
                className=" rounded-lg  hover:bg-blue-50 my-4"
                onClick={navigateToEvento}
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
            </Button>
            <h1 className="text-xl font-bold pb-4 mb-4 border-b-2">
                Cadastrar Evento
            </h1>
            <FormAdicionaEvento />
        </div>
    );
}
