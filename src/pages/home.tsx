import { useContext } from "react";
import { WorkoutList } from "../components/workout-list";
import { WorkoutsContext } from "../context/workout-context";

export function Home() {
  const { workouts } = useContext(WorkoutsContext);

  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">
        Página Inicial - Lista de Treinos
      </h2>

      <WorkoutList workoutList={workouts} />
    </>
  );
}