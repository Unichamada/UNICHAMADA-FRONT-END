import { Input } from "@/components/ui/input";
import { Button, Popover } from "antd";
import { Calendar } from "lucide-react";

interface InputProps {
    placeholder: string;
}
export function Default({ placeholder }: InputProps) {
    return (
        <Input
            className="rounded-xl mt-1 block w-full px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:opacity-30"
            placeholder={placeholder}
        />
    );
}

export const AppInput = {
    Default,
};
