import { Link } from "react-router-dom";
import type { Workout } from "../types/workout";

interface WorkoutResumeProps {
  workout: Workout;
  removeWorkouts?: (id:string) => void;
}

export function WorkoutResume({ workout, removeWorkouts }: WorkoutResumeProps) {
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
        className="bg-red-600 border text-white rounded p-2" 
        //</div>onClick={() => removeWorkouts(workout.id)}
        >Remover treino
        </button>
        </div>

      </div>

      <h3>Data: {workout.date}</h3>
      <p>Anotações: {workout.notes}</p>
    </div>
  );
}
