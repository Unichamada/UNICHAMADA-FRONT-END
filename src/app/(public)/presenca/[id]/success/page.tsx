"use client";

import { CircleCheckBig } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-950 p-4">
            <div className="flex flex-col items-center justify-center text-center">
                <img
                    src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg"
                    width={240}
                    alt="logo Uninassau"
                    className="mb-6"
                />
                <div>
                    <h1 className="text-2xl font-bold text-blue-100 mb-4">
                        Presença registrada com sucesso!
                    </h1>
                    <CircleCheckBig
                        size={80}
                        className="text-green-500 mx-auto mb-6 animate-pulse"
                    />
                </div>
            </div>
        </div>
    );
}
