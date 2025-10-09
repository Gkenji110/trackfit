import { useEffect, useState } from "react";
import { WorkoutList } from "../components/workout-list";
import type { Workout } from "../types/workout";

export function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/workouts", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })  
      .then((data) => data.json())
      .then((data: Workout[]) => setWorkouts(data));
  }, [workouts]);

  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">
        Página Inicial - Lista de Treinos
        </h2>

      <WorkoutList workoutList={workouts} />
    </>
  );
}
