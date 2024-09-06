import { z } from "zod";

const createPesencaDto = z.object({
    eventoId: z.number(),
    matricula: z.string(),
});

export type CreatePresencaDto = z.infer<typeof createPesencaDto>;
