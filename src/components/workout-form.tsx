import { useState } from "react";
import type { Intensity } from "../types/intensity";
import type { Workout } from "../types/workout";

interface WorkoutFormProps {
  onAdd: (workout: Workout) => void;
}

export function WorkoutForm({ onAdd }: WorkoutFormProps) {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState<Intensity>(1);
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const workout: Workout = {
      id: crypto.randomUUID(),
      title,
      duration,
      intensity,
      date,
    };

    onAdd(workout);

    setTitle("");
    setDuration(0);
    setIntensity(1);
    setDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 mb-5 w-4/5"
    >
      <label htmlFor="workout-title">Título do treino</label>
      <input
        type="text"
        id="workout-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="título do treino"
        className="border rounded p-2"
      />

      <label htmlFor="workout-duration">Duração (min)</label>
      <input
        type="number"
        id="workout-duration"
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
        placeholder="Duração (min)"
        className="border rounded p-2"
      />

      <label htmlFor="workout-intensity">Intensidade</label>
      <input
        type="number"
        id="workout-intensity"
        value={intensity}
        onChange={(e) => setIntensity(Number(e.target.value) as Intensity)}
        placeholder="Intensidade"
        min={1}
        max={5}
        className="border rounded p-2"
      />

      <label htmlFor="workout-date">Dia de treino</label>
      <input
        type="date"
        id="workout-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Dia de treino"
        className="border rounded p-2"
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
