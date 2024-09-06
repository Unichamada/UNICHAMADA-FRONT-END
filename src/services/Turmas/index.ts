import { GetTurmasDto } from "./dto/get-turmas.dto";
import api from "@/api/api";

async function getTurmasList(): Promise<GetTurmasDto[]> {
    const res = await api.get("/classes");

    return res.data;
}

export const TurmaService = {
    getTurmasList,
};
