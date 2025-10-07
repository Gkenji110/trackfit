import type { Intensity } from "../types/intensity";
import type { Workout } from "../types/workout";
import { useForm } from "react-hook-form";
import { workoutSchema, type WorkoutFormData } from "../schemas/workout-schemas";
import { zodResolver } from "@hookform/resolvers/zod";

interface WorkoutFormProps {
  onAdd: (workout: Workout) => void;
}

export function WorkoutForm({ onAdd }: WorkoutFormProps) {
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors },
  } = useForm<WorkoutFormData>({
    resolver: zodResolver(workoutSchema),
  });

  function onSubmit(data: WorkoutFormData): void {
    const workout: Workout = {
      id: crypto.randomUUID(),
      title: data.title,
      duration: data.duration,
      intensity: data.intensity as Intensity,
      date: data.date,
    };

    onAdd(workout);
    reset();
  }



  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 mb-5 w-4/5"
    >
      <label htmlFor="workout-title">Título do treino</label>
      <input
        type="text"
        id="workout-title"
        placeholder="título do treino"
        className="border rounded p-2"
        {...register("title") }
      />
      {errors.title && (<p className="text-red-600">{errors.title.message}</p>)}

      <label htmlFor="workout-duration">Duração (min)</label>
      <input
        type="number"
        id="workout-duration"
        {...register("duration") }
        placeholder="Duração (min)"
        className="border rounded p-2"
      />
      {errors.duration && (<p className="text-red-600">{errors.duration.message}</p>)}

      <label htmlFor="workout-intensity">Intensidade</label>
      <input
        type="number"
        id="workout-intensity"
        placeholder="Intensidade"
        min={1}
        max={5}
        className="border rounded p-2"
        {...register("intensity") }
      />
      {errors.intensity && (<p className="text-red-600">{errors.intensity.message}</p>)}

      <label htmlFor="workout-date">Dia de treino</label>
      <input
        type="date"
        id="workout-date"
        placeholder="Dia de treino"
        className="border rounded p-2"
        {...register("date") }
      />
      {errors.date && (<p className="text-red-600">{errors.date.message}</p>)}
      
      <label htmlFor="workout-notes">Anotações do treino (opcional)</label>
      <input
        type="text"
        id="workout-notes"
        placeholder="Anotações do treino"
        className="border rounded p-2"
        {...register("notes")}
      />
    
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Adicionar treino
      </button>
    </form>
  );
}
