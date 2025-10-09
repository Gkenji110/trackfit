import { useCallback } from "react";
import { Link } from "react-router-dom";
import type { Workout } from "../types/workout";

interface WorkoutResumeProps {
  workout: Workout;
}

export function WorkoutResume({ workout }: WorkoutResumeProps) {
  const removeWorkout = useCallback((id: string) => {
    fetch(`http://localhost:4000/workouts/${id}`, {
      method: "DELETE",
    });
  }, []);

  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 mb-3 bg-white">
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-600">{workout.title}</h2>

        <div className="flex flex-col gap-2 items-center justify-center">
          <Link
            to={`/workout/${workout.id}`}
            state={{ workout }}
            className="text-blue-600 font-bold hover:underline rounded border border-blue-600 p-2"
          >
            detalhes
          </Link>

          <button
            onClick={() => removeWorkout(workout.id)}
            className="bg-red-600 border text-white rounded p-2"
          >
            Remover treino
          </button>
        </div>
      </div>

      <h3>Data: {workout.date}</h3>
      <p>Anotações: {workout.notes}</p>
    </div>
  );
}
