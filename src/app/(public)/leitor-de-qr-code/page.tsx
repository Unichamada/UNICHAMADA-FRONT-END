"use client";

import React, { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function LeitorDeQRCode() {
    const [result, setResult] = useState("");
    const videoRef = useRef(null);
    const codeReader = useRef(new BrowserMultiFormatReader());

    useEffect(() => {
        const reader = codeReader.current;

        // Inicia a leitura do vídeo
        reader.decodeFromVideoDevice(
            null,
            videoRef.current,
            (result, error) => {
                if (result) {
                    setResult(result.getText());
                }

                if (error) {
                    //console.error(error);
                }
            },
        );
    }, []);

    return (
        <div className="text-white flex items-center justify-center min-h-screen mx-auto p-4   bg-blue-950 ">
            <div className="flex flex-col items-center p-6 gap-6 rounded-lg w-96 h-5/6">
                <img
                    src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg"
                    width={240}
                    alt="logo Uninassau azul com texto b"
                />
                <h1 className="text-basew text-center font-medium">
                    Leia o QR Code para marca sua presença
                </h1>
                <video ref={videoRef} className="w-full rounded-lg" />
            </div>
        </div>
    );
}
