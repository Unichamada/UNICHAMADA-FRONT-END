import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { GetPresencaByTurmaDto } from "@/services/Evento/dto/get-presenca-by-turma.dto";
import { formatDate } from "date-fns";

interface TablePresencaProps {
    data?: GetPresencaByTurmaDto[];
}

export function TablePresenca({ data }: Readonly<TablePresencaProps>) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Matricula</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Data Presença</TableHead>
                    <TableHead>Hora Presença</TableHead>
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
                        <TableCell>
                            {data.dataPresenca
                                ? formatDate(data.dataPresenca, "dd/MM/yyyy")
                                : ""}
                        </TableCell>
                        <TableCell>
                            {data.horaPresenca
                                ? formatDate(data.horaPresenca, "HH:mm")
                                : ""}
                        </TableCell>
                        <TableCell>
                            <div className="p-2 border bg-green-600 w-20 text-center text-white rounded-md">
                                Presente
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
