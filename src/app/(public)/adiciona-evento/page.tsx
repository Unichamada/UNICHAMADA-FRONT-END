"use client";

import { CardEventos } from "@/components/card-eventos";
import SideMenu from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { Oi } from "next/font/google";
import React from "react";
import { useRouter } from "next/navigation";

export default function TelaAdicionarEvento() {
    const router = useRouter();
    const navigateToLeitorDeQRCode = () => {
        router.push("/LeitorDeQRCode"); // Certifique-se de que o caminho está correto
    };
    return (
        <>
            <SideMenu />
            <div className="mx-5 p-12  h-screen">
                <h1 className="text-2xl font-bold pb-4 mb-4 border-b-2">
                    Eventos
                </h1>
                <Button
                    className="bg-blue-800 rounded-xl text-blue-50 hover:bg-blue-700 mb-8"
                    onClick={navigateToLeitorDeQRCode}
                >
                    Adicionar
                </Button>
                <ul>
                    <li>
                        <CardEventos titulo="Aula 01" />
                    </li>
                </ul>
            </div>
        </>
    );
}
