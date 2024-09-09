import { z } from "zod";

const createPesencaDto = z.object({
    eventoId: z.number(),
    matricula: z.string(),
    dataPresenca: z.date(),
    horaPresenca: z.date(),
});

export type CreatePresencaDto = z.infer<typeof createPesencaDto>;
