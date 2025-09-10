import { useState } from "react";
import { WorkoutForm } from "../components/workout-form";
import { WorkoutList } from "../components/workout-list";
import type { Workout } from "../types/workout";

export function AddWorkout() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  function addWorkout(workout: Workout): void {
    setWorkouts((prev) => [...prev, workout]);
  }

  return (
    <>
      <h2 className="font-bold text-blue-800 text-xl mb-3">Adicionar novo treino</h2>

      <WorkoutForm onAdd={addWorkout} />

      <WorkoutList workoutList={workouts} />
    </>
  );
}
