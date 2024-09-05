import { cn } from "@/lib/utils";
import { Calendar } from "antd";
import { CalendarDays, Clock, Icon, UsersRound } from "lucide-react";
import React from "react";
import { icons } from "lucide-react";

interface CardEventosProps {
    titulo?: string;
}

export function CardEventos({ titulo = "Evento" }: CardEventosProps) {
    return (
        <>
            <div className="bg-white mt-4 py-4 px-8 border rounded-xl drop-shadow-md hover:bg-gray-50 cursor-pointer">
                <h2 className="text-xl font-medium pb-2">{titulo}</h2>
                <div className="flex gap-4">
                    <CardItem
                        label="Participantes"
                        icon="UsersRound"
                        value={100}
                    />
                    <CardItem
                        label="Data do evento"
                        icon="CalendarDays"
                        value={100}
                    />
                    <CardItem label="Hora do evento" icon="Clock" value={100} />
                </div>
            </div>
        </>
    );
}

interface CardItemProps {
    label: string;
    icon: string;
    value: any;
}

export function CardItem({ label, icon, value }: CardItemProps) {
    const tamanhoIcone = 16;
    const corPadraoInfo = "text-gray-700";

    const Icon = icons[icon];
    return (
        <>
            <div className="flex flex-col items-left ">
                <label className="text-gray-400 text-xs ">{label}</label>
                <div className=" flex items-center">
                    <Icon
                        size={tamanhoIcone}
                        className={cn("mr-2", corPadraoInfo)}
                    />
                    <span className={cn("text-normal", corPadraoInfo)}>
                        {value}
                    </span>
                </div>
            </div>
        </>
    );
}
