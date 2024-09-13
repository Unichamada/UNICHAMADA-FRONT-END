import { ReactNode } from "react";

interface PageProps {
    children: ReactNode;
}
export function Page({ children }: PageProps) {
    return (
        <div className=" flex-1 ml-4 md:ml-20 mx-4 md:mx-12  my-4 p-4  md:p-12  bg-white border border-slate-200 shadow-sm rounded-lg">
            {children}
        </div>
    );
}
