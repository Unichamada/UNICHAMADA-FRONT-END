import api from "@/api/api";
import { CreatesEventoDto } from "./dto/create-evento.dto";
import { GetEventoDto } from "./dto/get-evento.dto";
import { GetEventoByIdDto } from "./dto/get-evento-by-id.dto";
import { GetPresencaByTurmaDto } from "./dto/get-presenca-by-turma.dto";

async function createEvento(evento: CreatesEventoDto) {
    const res = await api.post("/evento", evento);

    return res.data;
}

async function getEventos(): Promise<GetEventoDto[]> {
    const res = await api.get("/evento");

    return res.data;
}

async function getEventoById(id: number): Promise<GetEventoByIdDto> {
    const res = await api.get(`/evento/${id}`);

    return res.data;
}

async function updateEvento(id: string, evento: CreatesEventoDto) {
    const res = await api.put(`/evento/${id}`, evento);

    return res.data;
}

async function getPresencaByTurma(
    id: number,
    turmaId: number,
): Promise<GetPresencaByTurmaDto[]> {
    const res = await api.get(`/evento/${id}/turma/${turmaId}/presencas`);

    return res.data;
}

export const EventoService = {
    createEvento,
    getEventos,
    getEventoById,
    updateEvento,
    getPresencaByTurma,
};
