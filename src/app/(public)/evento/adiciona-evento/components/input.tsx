import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";

interface InputProps {
    placeholder: string;
}
export function InputForm({ placeholder }: InputProps) {
    return (
        <Input
            className="rounded-xl mt-1 block w-full px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-opacity-30
        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder={placeholder}
        />
    );
}
