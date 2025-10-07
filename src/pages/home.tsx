import { WorkoutList } from "../components/workout-list";
import type { Workout } from "../types/workout";

interface HomeProps {
  workouts: Workout[];
  removeWorkouts: (id:string) => void;
}

export function Home({ workouts, removeWorkouts }: HomeProps) {
  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">Página Inicial - Lista de Treinos</h2>

      <WorkoutList removeWorkouts={removeWorkouts} workoutList={workouts} />
    </>
  );
}
