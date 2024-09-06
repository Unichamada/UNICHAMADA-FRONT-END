import { z } from "zod";

export const getPresencaByTurmaDto = z.object({
    id: z.number(),
    pessoa: z.object({
        id: z.number(),
        nome: z.string(),
        codigo: z.string(),
    }),
});

export type GetPresencaByTurmaDto = z.infer<typeof getPresencaByTurmaDto>;
