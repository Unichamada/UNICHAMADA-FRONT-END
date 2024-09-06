"use client";

import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Oi } from "next/font/google";
import React from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    ArrowLeftCircle,
    FileUp,
    Lock,
    Mail,
    User,
} from "lucide-react";
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
import { TableComponent } from "@/components/table-component";
import ImportXLS from "./components/Import-file";
import ImportXLSShadCN from "./components/Import-file";
import ImportXLSX from "./components/Import-file";
import ImportFile from "./components/Import-file";

export default function DetalharTurma() {
    const router = useRouter();
    const navigateToImportarAluno = () => {
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
                            <BreadcrumbLink asChild>
                                <Link href="/evento/detalhar">
                                    Detalhar Evento - Aula 01
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/evento/detalhar/turma">
                                    Turma A
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-medium text-blue-500 ">
                                Importar Alunos
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Button
                    variant="ghost"
                    className=" rounded-xl  hover:bg-blue-50 my-4"
                    onClick={navigateToImportarAluno}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar
                </Button>
                <div>
                    <h1 className="text-xl text-gray-700 font-medium mb-6">
                        Turma A
                    </h1>
                    <div className="flex flex-col gap-4">
                        <ImportFile />
                        <Button className="gap-2 bg-blue-800 rounded-xl text-blue-50 hover:bg-blue-700 mb-3">
                            Salvar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
