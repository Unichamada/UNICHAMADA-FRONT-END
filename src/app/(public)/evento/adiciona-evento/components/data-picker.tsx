"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
    const [date, setDate] = React.useState<Date>();

    return (
        // className="rounded-xl mt-1 block w-full px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-opacity-30
        // focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "flex rounded-md mt-1 px-3 py-2  border-slate-300  text-sm shadow-sm w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                        format(date, "PPP")
                    ) : (
                        <span>Selecione uma data</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className=" border-slate-300  p-0">
                <Calendar
                    className=" bg-white "
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
