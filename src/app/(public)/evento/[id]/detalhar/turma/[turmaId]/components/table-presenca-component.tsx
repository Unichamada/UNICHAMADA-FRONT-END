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
import { GetPresencaByTurmaDto } from "@/services/Evento/dto/get-presenca-by-turma.dto";

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

interface TablePresencaProps {
    data?: GetPresencaByTurmaDto[];
}

export function TablePresenca({ data }: TablePresencaProps) {
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
                {data?.map((data) => (
                    <TableRow key={data.id}>
                        <TableCell className="font-medium">
                            {data.pessoa.codigo}
                        </TableCell>
                        <TableCell>{data.pessoa.nome}</TableCell>
                        <TableCell>Presente</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
