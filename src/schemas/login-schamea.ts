import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().nonempty("O nome de usuário é obrigatório"),
});

export type LoginFormData = z.infer<typeof loginSchema>;