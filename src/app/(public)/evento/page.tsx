"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { Card } from "./adiciona-evento/components/card";
import { useQuery } from "@tanstack/react-query";
import { EventoService } from "@/services/Evento";
import { formatDate } from "date-fns";

export default function TelaAdicionarEvento() {
    const router = useRouter();
    const navigateToAdicionaEvento = () => {
        router.push("evento/adiciona-evento"); // Certifique-se de que o caminho está correto
    };

    const navigateToDetalharEvento = (eventoId: number) => {
        router.push(`/evento/${eventoId}/detalhar`);
    };

    const { data } = useQuery({
        queryKey: ["eventos"],
        queryFn: async () => await EventoService.getEventos(),
    });

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
                {data?.map((evento) => (
                    <>
                        <li>
                            <Card
                                onClick={() =>
                                    navigateToDetalharEvento(evento.id)
                                }
                                titulo={evento.nome}
                                items={[
                                    // {
                                    //     label: "Participantes",
                                    //     icon: "UsersRound",
                                    //     value: 100,
                                    // },
                                    {
                                        label: "Data do evento",
                                        icon: "CalendarDays",
                                        value: formatDate(
                                            evento.dataInicio,
                                            "dd/MM/yyyy",
                                        ),
                                    },
                                    {
                                        label: "Hora do evento",
                                        icon: "Clock",
                                        value: formatDate(
                                            evento.horaInicio,
                                            "HH:mm",
                                        ),
                                    },
                                ]}
                            />
                        </li>
                    </>
                ))}
            </ul>
        </div>
    );
}
