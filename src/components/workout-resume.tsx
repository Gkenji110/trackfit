import { Link } from "react-router-dom";
import type { Workout } from "../types/workout";

interface WorkoutResumeProps {
  workout: Workout;
}

export function WorkoutResume({ workout }: WorkoutResumeProps) {
  return (
    <div className="w-3/5 rounded-lg shadow px-3 py-4 flex flex-col gap-5 mb-3 bg-white">
      <div className="flex justify-between">
        <h2 className="font-bold text-gray-600">{workout.title}</h2>

        <Link
          to={`/workout/${workout.id}`}
          state={{ workout }}
          className="text-blue-600 font-bold hover:underline rounded border border-blue-600 p-2"
        >
          detalhes
        </Link>
      </div>

      <h3>Data: {workout.date}</h3>
    </div>
  );
}
