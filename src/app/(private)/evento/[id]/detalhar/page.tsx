"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock } from "lucide-react";
import { Breadcrumb } from "antd";
import {
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import Link from "next/link";

import { Card } from "../../adiciona-evento/components/card";
import { useParamId } from "@/hooks/use-param-id";
import { useQuery } from "@tanstack/react-query";
import { EventoService } from "@/services/Evento";

export default function DetalharEvento() {
    const router = useRouter();
    const id = useParamId();

    const navigateToEvento = () => {
        router.push("/evento");
    };

    const navigateToDetalharTurma = (turmaId: number) => {
        router.push(`/evento/${id}/detalhar/turma/${turmaId}`);
    };

    const navigeteToQrCode = () => {
        router.push(`/presenca/${id}/qr-code`);
    };

    const { data } = useQuery({
        queryKey: ["eventos", id],
        queryFn: async () => await EventoService.getEventoById(id),
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
                        <BreadcrumbPage className="font-medium text-blue-500 ">
                            Detalhar Evento - {data?.nome}
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
                    Turmas do evento - {data?.nome}
                </h1>
                <div className="flex gap-4">
                    <Button
                        className="bg-blue-800 rounded-xl text-blue-50 hover:bg-blue-700 mb-3"
                        onClick={navigeteToQrCode}
                    >
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
                    {data?.turmas.map((eventoTurma) => (
                        <li key={eventoTurma.turma.id}>
                            <Card
                                onClick={() =>
                                    navigateToDetalharTurma(
                                        eventoTurma.turma.id,
                                    )
                                }
                                titulo={eventoTurma.turma.nome}
                                items={[]}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
