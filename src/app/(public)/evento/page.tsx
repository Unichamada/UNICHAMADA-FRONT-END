"use client";

import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Oi } from "next/font/google";
import React from "react";
import { useRouter } from "next/navigation";
import { Card } from "./adiciona-evento/components/card";

export default function TelaAdicionarEvento() {
    const router = useRouter();
    const navigateToAdicionaEvento = () => {
        router.push("evento/adiciona-evento"); // Certifique-se de que o caminho está correto
    };

    const navigateToDetalharEvento = () => {
        router.push("/evento/detalhar");
    };
    return (
        <div className="flex-1 ml-20 mx-12 my-10  p-12 bg-white border border-slate-200 shadow-sm rounded-lg">
            <h1 className="text-xl font-semibold pb-4 mb-4 border-b-2">
                Eventos
            </h1>
            <Button
                className="bg-blue-800 rounded-lg text-blue-50 hover:bg-blue-700 mb-"
                onClick={navigateToAdicionaEvento}
            >
                Adicionar
            </Button>
            <ul>
                <li>
                    <Card
                        onClick={navigateToDetalharEvento}
                        titulo="Aula 01"
                        items={[
                            {
                                label: "Participantes",
                                icon: "UsersRound",
                                value: 100,
                            },
                            {
                                label: "Data do evento",
                                icon: "CalendarDays",
                                value: "10/10/2024",
                            },
                            {
                                label: "Hora do evento",
                                icon: "Clock",
                                value: "18:00",
                            },
                        ]}
                    />
                </li>
            </ul>
        </div>
    );
}
