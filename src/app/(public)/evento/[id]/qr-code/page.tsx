"use client";

import { QRCode } from "antd";
import Image from "next/image";

export default function QrCodePage() {
    const currentLocation = window.location.href;
    const urlCheckIn = currentLocation.replace("qr-code", "check-in");

    return (
        <div className="flex bg-blue-200 items-center justify-center min-h-screen mx-auto p-4 h-screen ">
            <div className="flex flex-col bg-blue-950 items-center justify-center p-6 gap-4 rounded-lg w-full h-full">
                <Image
                    src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg"
                    width={500}
                    height={500}
                    alt="logo Uninassau azul com texto b"
                />
                <div className="bg-white p-4">
                    <QRCode size={300} value={urlCheckIn} />
                </div>
            </div>
        </div>
    );
}
