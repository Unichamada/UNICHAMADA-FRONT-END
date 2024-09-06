import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import React from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];
export function MultiSelect() {
    const [selectedFruits, setSelectedFruits] = React.useState<string[]>([]);

    const handleSelect = (value: string) => {
        if (selectedFruits.includes(value)) {
            setSelectedFruits(
                selectedFruits.filter((fruit) => fruit !== value),
            );
        } else {
            setSelectedFruits([...selectedFruits, value]);
        }
    };
    const handleItemClick = (e: React.MouseEvent, fruit: string) => {
        e.preventDefault(); // Evita que o dropdown feche
        handleSelect(fruit); // Chama a função de seleção
    };
    return (
        <>
            <div className="flex w-full">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="flex justify-start text-left font-normal rounded-lgS mt-1  w-full px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm text-gray-400 hover:bg-white">
                            {selectedFruits.length > 0
                                ? `Selecionado: ${selectedFruits.join(", ")}`
                                : "Selecione uma turma"}
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="start"
                        className="w-96 rounded-md px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm"
                    >
                        <DropdownMenuLabel>Frutas</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {[
                            "Apple",
                            "Banana",
                            "Blueberry",
                            "Grapes",
                            "Pineapple",
                        ].map((fruit) => (
                            <DropdownMenuCheckboxItem
                                className="flex-1"
                                key={fruit}
                                checked={selectedFruits.includes(
                                    fruit.toLowerCase(),
                                )}
                                onClick={(e) =>
                                    handleItemClick(e, fruit.toLowerCase())
                                }
                            >
                                {fruit}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
}
