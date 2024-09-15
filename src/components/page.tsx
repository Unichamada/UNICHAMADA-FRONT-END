import { ReactNode } from "react";
import React from "react";
interface PageProps {
    children: ReactNode;
}
export function Page({ children }: PageProps) {
    return (
        <div className=" flex-1 ml-4 md:ml-20 mx-4 md:mx-12 h-full  my-4 p-4  md:p-12  bg-white border border-slate-200 shadow-sm rounded-lg">
            {children}
        </div>
    );
}
