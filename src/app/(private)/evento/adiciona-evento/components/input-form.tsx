import { Input } from "@/components/ui/input";

interface InputProps {
    placeholder: string;
    type?: string;
}
export function InputForm({ placeholder, type, ...field }: InputProps) {
    return (
        <Input
            type={type}
            className="rounded-md mt-1 block w-full px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder:opacity-30 active:border-blue-500"
            placeholder={placeholder}
            {...field}
        />
    );
}
