import api from "@/api/api";
import { CreatePresencaDto } from "./dto/create-presenca.dto";

async function createPresenca(presenca: CreatePresencaDto) {
    const res = await api.post("/presenca", presenca);

    return res.data;
}

export const PresencaService = {
    createPresenca,
};
