import { z } from "zod";

export const getTurmasDto = z.object({
    id: z.string(),
    nome: z.string(),
});

export type GetTurmasDto = z.infer<typeof getTurmasDto>;
