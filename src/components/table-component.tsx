import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const data = [
    {
        matricula: "40077788",
        nomeDoAluno: "Gabriel Lucas",
        situação: "Presente",
    },
    {
        matricula: "40077788",
        nomeDoAluno: "Gabriel Lucas",
        situação: "Presente",
    },
    {
        matricula: "40077788",
        nomeDoAluno: "Gabriel Lucas",
        situação: "Presente",
    },
    {
        matricula: "40077788",
        nomeDoAluno: "Gabriel Lucas",
        situação: "Presente",
    },
];

export function TableComponent() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Matricula</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Situação</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((data) => (
                    <TableRow key={data.matricula}>
                        <TableCell className="font-medium">
                            {data.matricula}
                        </TableCell>
                        <TableCell>{data.nomeDoAluno}</TableCell>
                        <TableCell>{data.situação}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
