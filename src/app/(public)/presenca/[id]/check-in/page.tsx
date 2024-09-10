"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { PresencaService } from "@/services/Presenca";
import { useParamId } from "@/hooks/use-param-id";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface ICheckIn {
    matricula: string;
}

export default function CheckIn() {
    const form = useForm();
    const id = useParamId();
    const router = useRouter();

    const { toast } = useToast();

    const { mutate, isPending } = useMutation<any, Error, ICheckIn>({
        mutationFn: async (data) => {
            const now = new Date();

            const res = await PresencaService.createPresenca({
                eventoId: id,
                matricula: data.matricula,
                dataPresenca: now,
                horaPresenca: now,
            });

            return res;
        },
        onSuccess: (data) => {
            router.push(`/presenca/${id}/success`); // redireciona para a página de sucesso
        },
        onError: (error) => {
            toast({
                title: "Erro ao registrar presença",
                description: error.response.data.message,
                variant: "destructive",
            });
        },
    });

    return (
        <div className=" flex items-center justify-center min-h-screen mx-auto p-4  bg-blue-950 ">
            <div className="flex flex-col bg-blue-950 items-center justify-center p-6 gap-6 rounded-lg w-96 h-5/6">
                <img
                    src="https://logo.uninassau.edu.br/img/svg/uninassau_n.svg"
                    width={240}
                    alt="logo Uninassau azul com texto b"
                />

                <p className="mx-auto text-base font-medium text-white">
                    Matricula
                </p>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(mutate)}
                        className="w-full space-y-6"
                    >
                        <FormField
                            control={form.control}
                            name="matricula"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            type="number"
                                            placeholder="Insira sua matrícula para registrar presença"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-blue-800 rounded-xl text-blue-50 hover:bg-blue-700 mb-8"
                            loading={isPending}
                        >
                            Registrar presença
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
