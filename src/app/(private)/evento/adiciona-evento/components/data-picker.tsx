"use client";

import * as React from "react";
import { format, Locale } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    ControllerRenderProps,
    Field,
    FieldValue,
    FieldValues,
} from "react-hook-form";
import { FormControl } from "@/components/ui/form";

export function DatePicker({
    ...field
}: ControllerRenderProps<FieldValues, "dataInicio">) {
    return (
        // className="rounded-xl mt-1 block w-full px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-opacity-30
        // focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "flex rounded-md mt-1 px-3 py-2  border-slate-300  text-sm shadow-sm w-full justify-start text-left font-normal",
                            !field.value && "text-muted-foreground",
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                            format(field.value, "PPP")
                        ) : (
                            <span>Selecione uma data</span>
                        )}
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent align="start" className=" border-slate-300  p-0">
                <Calendar
                    className=" bg-white "
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
