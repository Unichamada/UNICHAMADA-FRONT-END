"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
    event_name: z.string().min(2, {
        message: "Nome do evento deve ter pelo menos 2 characteres.",
    }),
    event_date: z.any(),
    start_time: z.any(),
    end_time: z.any(),
});

export function FormAdicionaEvento() {
    const form = useForm<z.infer<typeof FormSchema>>({});

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
            >
                <FormField
                    control={form.control}
                    name="event_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome do evento</FormLabel>
                            <FormControl>
                                <Input
                                    className="border-gray-200 rounded-xl placeholder:opacity-50"
                                    placeholder="e.g: aula"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="event_date"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Data do evento</FormLabel>
                            <FormControl>
                                <Input
                                    className="border-gray-200 rounded-xl placeholder:opacity-50"
                                    placeholder="e.g: 08/09/2010"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-4 w-auto">
                    <FormField
                        control={form.control}
                        name="start_time"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Inicio do evento</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border-gray-200 rounded-xl placeholder:opacity-50 w-full"
                                        placeholder="08:00"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="end_time"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Fim do evento</FormLabel>
                                <FormControl>
                                    <Input
                                        className="border-gray-200 rounded-xl placeholder:opacity-50 "
                                        placeholder="e.g: 10:00"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    className="bg-blue-800 rounded-xl text-blue-50 hover:bg-blue-700 mb-8"
                >
                    Cadastrar
                </Button>
            </form>
        </Form>
    );
}
