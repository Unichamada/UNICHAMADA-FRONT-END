import { z } from "zod";

const createEventoDto = z.object({
    nome: z.string().min(2, {
        message: "Nome do evento deve ter pelo menos 2 characteres.",
    }),
    turmas: z.array(z.number()),
    dataInicio: z.date(),
    horaInicio: z.date(),
    horaFim: z.date(),
});

export type CreatesEventoDto = z.infer<typeof createEventoDto>;
