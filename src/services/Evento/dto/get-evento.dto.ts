import { z } from "zod";

const getEventoDto = z.object({
    id: z.number(),
    nome: z.string(),
    dataInicio: z.string(),
    horaInicio: z.string(),
    quantidadeParticipantes: z.number(),
});

export type GetEventoDto = z.infer<typeof getEventoDto>;
