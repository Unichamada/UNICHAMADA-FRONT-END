"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, FileUp } from "lucide-react";
import { Breadcrumb } from "antd";
import { BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useParamId } from "@/hooks/use-param-id";
import { EventoService } from "@/services/Evento";
import { TablePresenca } from "./components/table-presenca-component";

export default function DetalharTurma() {
    const params = useParams();
    const id = useParamId();
    const turmaId = Number(params.turmaId);
    const router = useRouter();
    const navigateToDetalharEvento = () => {
        router.push(`/evento/${id}/detalhar`);
    };
    const navigateToImportarAluno = () => {
        router.push(`/evento/${id}/detalhar/turma/importar-aluno`);
    };

    const { data } = useQuery({
        queryKey: ["turma-evento-presenca", id, turmaId],
        queryFn: async () =>
            await EventoService.getPresencaByTurma(id, turmaId),
    });

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
                        <BreadcrumbLink asChild>
                            <Link href={`/evento/${id}/detalhar`}>
                                Alunos presentes
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Button
                variant="ghost"
                className=" rounded-md  hover:bg-blue-50 my-4"
                onClick={navigateToDetalharEvento}
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
            </Button>
            <div>
                <h1 className="text-xl text-gray-700 font-medium mb-6">
                    Alunos presentes: {data?.length}
                </h1>
                <div className="flex gap-4">
                    <Button
                        onClick={navigateToImportarAluno}
                        className="gap-2 bg-blue-800 rounded-md text-blue-50 hover:bg-blue-700 mb-3"
                    >
                        <FileUp size={20} />
                        Importar Alunos
                    </Button>
                </div>
            </div>
            <TablePresenca data={data} />
        </div>
    );
}
