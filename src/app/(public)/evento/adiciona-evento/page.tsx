// src/app/(public)/evento/detalhar-evento/page.tsx

"use client"; // Isso transforma este componente em um Client Component

import { useState } from "react";
import { cn } from "@/lib/utils";
import { icons } from "lucide-react";

// Componente principal da Tabela
export default function Tabela({ titulo = "Lista de Alunos" }: { titulo?: string }) {
    const [alunos, setAlunos] = useState([
        { matricula: '', aluno: '', situacao: 'Ausente' }
    ]);

    const handleInputChange = (index, field, value) => {
        const novosAlunos = [...alunos];
        novosAlunos[index][field] = value;
        setAlunos(novosAlunos);
    };

    const adicionarAluno = () => {
        const novoAluno = { matricula: '', aluno: '', situacao: 'Ausente' };
        setAlunos([...alunos, novoAluno]);
    };

    return (
        <>
            <div className="bg-white mt-4 py-4 px-8 border rounded-xl drop-shadow-md">
                <h2 className="text-xl font-medium pb-2">{titulo}</h2>
                <button onClick={adicionarAluno} className="mb-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    Adicionar Aluno
                </button>
                <div className="space-y-4">
                    {alunos.map((aluno, index) => (
                        <CardRow
                            key={index}
                            aluno={aluno}
                            onInputChange={(field, value) => handleInputChange(index, field, value)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

interface CardRowProps {
    aluno: {
        matricula: string;
        aluno: string;
        situacao: string;
    };
    onInputChange: (field: string, value: any) => void;
}

// Componente que representa uma linha na tabela
function CardRow({ aluno, onInputChange }: CardRowProps) {
    return (
        <>
            <div className="flex gap-4">
                <CardItem
                    label="Matrícula"
                    icon="UsersRound"
                    value={
                        <input
                            type="text"
                            value={aluno.matricula}
                            onChange={(e) => onInputChange('matricula', e.target.value)}
                            className="border border-gray-300 px-2 py-1 rounded-lg"
                        />
                    }
                />
                <CardItem
                    label="Aluno"
                    icon="UsersRound"
                    value={
                        <input
                            type="text"
                            value={aluno.aluno}
                            onChange={(e) => onInputChange('aluno', e.target.value)}
                            className="border border-gray-300 px-2 py-1 rounded-lg"
                        />
                    }
                />
                <CardItem
                    label="Situação"
                    icon="CalendarDays"
                    value={
                        <select
                            value={aluno.situacao}
                            onChange={(e) => onInputChange('situacao', e.target.value)}
                            className="border border-gray-300 px-2 py-1 rounded-lg"
                        >
                            <option value="Presente">Presente</option>
                            <option value="Ausente">Ausente</option>
                        </select>
                    }
                />
            </div>
        </>
    );
}

interface CardItemProps {
    label: string;
    icon: string;
    value: any;
}

// Componente que representa cada item no Card
export function CardItem({ label, icon, value }: CardItemProps) {
    const tamanhoIcone = 16;
    const corPadraoInfo = "text-gray-700";
    const Icon = icons[icon];

    return (
        <>
            <div className="flex flex-col items-left w-full">
                <label className="text-gray-400 text-xs">{label}</label>
                <div className="flex items-center">
                    <Icon size={tamanhoIcone} className={cn("mr-2", corPadraoInfo)} />
                    <span className={cn("text-normal", corPadraoInfo)}>
                        {value}
                    </span>
                </div>
            </div>
        </>
    );
}
