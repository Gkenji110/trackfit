import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { workoutSchema, type WorkoutFormData } from "../schemas/workout-schema";
import type { Intensity } from "../types/intensity";
import type { Workout } from "../types/workout";

export function WorkoutForm() {
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
      notes: data.notes,
    };

    fetch("http://localhost:4000/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
    });

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
        {...register("title")}
      />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}

      <label htmlFor="workout-duration">Duração (min)</label>
      <input
        type="number"
        id="workout-duration"
        placeholder="Duração (min)"
        className="border rounded p-2"
        {...register("duration", { valueAsNumber: true })}
      />
      {errors.duration && (
        <p className="text-red-500">{errors.duration.message}</p>
      )}

      <label htmlFor="workout-intensity">Intensidade</label>
      <input
        type="number"
        id="workout-intensity"
        placeholder="Intensidade"
        className="border rounded p-2"
        {...register("intensity", { valueAsNumber: true })}
      />
      {errors.intensity && (
        <p className="text-red-500">{errors.intensity.message}</p>
      )}

      <label htmlFor="workout-date">Dia de treino</label>
      <input
        type="date"
        id="workout-date"
        placeholder="Dia de treino"
        className="border rounded p-2"
        {...register("date")}
      />
      {errors.date && <p className="text-red-500">{errors.date.message}</p>}

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

