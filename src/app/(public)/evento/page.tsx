"use client";

<<<<<<< HEAD
=======
import { CardEventos } from "@/components/card-eventos";
>>>>>>> e0c31b3f387ac9c690dc211353216ea6fa2e0a7a
import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Oi } from "next/font/google";
import React from "react";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import { Card } from "./adiciona-evento/components/card";
=======
>>>>>>> e0c31b3f387ac9c690dc211353216ea6fa2e0a7a

export default function TelaAdicionarEvento() {
    const router = useRouter();
    const navigateToAdicionaEvento = () => {
        router.push("evento/adiciona-evento"); // Certifique-se de que o caminho está correto
    };
    return (
        <>
            <div className="mx-5 p-12  h-screen">
                <h1 className="text-2xl font-bold pb-4 mb-4 border-b-2">
                    Eventos
                </h1>
                <Button
                    className="bg-blue-800 rounded-xl text-blue-50 hover:bg-blue-700 mb-8"
                    onClick={navigateToAdicionaEvento}
                >
                    Adicionar
                </Button>
                <ul>
                    <li>
<<<<<<< HEAD
                        <Card
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
=======
                        <CardEventos titulo="Aula 01" />
>>>>>>> e0c31b3f387ac9c690dc211353216ea6fa2e0a7a
                    </li>
                </ul>
            </div>
        </>
    );
}
