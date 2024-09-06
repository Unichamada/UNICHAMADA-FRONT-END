import { z } from "zod";

const getEventoByIdDto = z.object({
    nome: z.string(),
    turmas: z.array(
        z.object({
            turma: z.object({
                id: z.number(),
                nome: z.string(),
            }),
        }),
    ),
});

export type GetEventoByIdDto = z.infer<typeof getEventoByIdDto>;
