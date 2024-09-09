"use client";

import { useParamId } from "@/hooks/use-param-id";
import { QRCode } from "antd";
import Image from "next/image";

export default function QrCodePage() {
    const id = useParamId();
    const origin = window.location.origin;
    const urlCheckIn = `${origin}/presenca/${id}/check-in`;
    const tamanhoDaLogo = 300;

    console.log(urlCheckIn);

    return (
        <div className="text-white flex items-center justify-center min-h-screen mx-auto p-4  bg-blue-950  ">
            <div className="flex flex-col items-center justify-center p-6  gap-8 rounded-lg w-full h-full">
                <Image
                    src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg"
                    width={tamanhoDaLogo}
                    height={tamanhoDaLogo}
                    alt="logo Uninassau azul com texto b"
                />
                <div className="rounded-lg bg-white p-4">
                    <QRCode size={300} value={urlCheckIn} />
                </div>
            </div>
        </div>
    );
}
