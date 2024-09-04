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
        <>
            <div className="flex bg-blue-200 items-center justify-center min-h-screen mx-auto p-4 h-screen  ">
                <div className="flex flex-col bg-blue-950 items-center justify-center p-6 gap-4 rounded-lg w-96 h-5/6">
                    <img
                        src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg"
                        width={240}
                        alt="logo Uninassau azul com texto b"
                    />
                    <h1>Leia o QR Code para marca sua presença</h1>
                    <video ref={videoRef} className="w-full rounded-lg" />
                    <p>
                        Resultado: <a href={result}>{result}</a>
                    </p>
                </div>
            </div>
        </>
    );
}
