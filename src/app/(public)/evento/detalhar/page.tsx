"use client";

import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Oi } from "next/font/google";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowLeftCircle, Lock, Mail, User } from "lucide-react";
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

import { Card } from "../adiciona-evento/components/card";

export default function DetalharEvento() {
    const router = useRouter();
    const navigateToEvento = () => {
        router.push("/evento");
    };

    const navigateToDetalharTurma = () => {
        router.push("/evento/detalhar/turma");
    };

    return (
        <>
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
                                Detalhar Evento - Aula 01
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Button
                    variant="ghost"
                    className=" rounded-xl  hover:bg-blue-50 my-4"
                    onClick={navigateToEvento}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                </Button>
                <div>
                    <h1 className="text-xl text-gray-700 font-medium mb-6">
                        Turmas do evento - Aula 01
                    </h1>
                    <div className="flex gap-4">
                        <Button className="bg-blue-800 rounded-xl text-blue-50 hover:bg-blue-700 mb-3">
                            Gerar Chamada
                        </Button>
                        <Button
                            disabled
                            className="gap-2 bg-gray-300 rounded-xl text-gray-500 mb-3"
                        >
                            <Lock size={20} />
                            Adicionar Turma
                        </Button>
                    </div>

                    <ul>
                        <li>
                            <Card
                                onClick={navigateToDetalharTurma}
                                titulo="Turma A"
                                items={[
                                    {
                                        label: "Participantes",
                                        icon: "UsersRound",
                                        value: 100,
                                    },
                                ]}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
