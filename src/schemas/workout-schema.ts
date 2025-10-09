import { z } from "zod";

export const workoutSchema = z.object({
  title: z.string().min(3, "O titulo deve ter no mínimo 3 caracteres"),
  duration: z.number().min(10, "A duração deve ser pelo menos 10 minutos"),
  intensity: z
    .number()
    .min(1, "A intensidade tem que ser no mínimo 1")
    .max(5, "A intensidade tem que ser no mínimo 5"),
  date: z.string().nonempty("A data é obrigatória"),
  notes: z.string().optional(),
});

export type WorkoutFormData = z.infer<typeof workoutSchema>;