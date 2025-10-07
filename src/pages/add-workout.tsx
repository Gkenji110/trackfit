import { useMemo } from "react";
import { WorkoutForm } from "../components/workout-form";
import type { Workout } from "../types/workout";

interface AddWorkoutPropos {
  workouts: Workout[];
  onAdd: (workout: Workout) => void;
}

export function AddWorkout({ onAdd, workouts }: AddWorkoutPropos) {
  //Renderiza somente uma vez
  const workoutTotal = useMemo(() => {
    return workouts.length
  }, [workouts])
  
  const workoutMinutes = useMemo(() => {
    let workoutMinutes: number = 0;

    workouts.forEach((workout) => {
      workoutMinutes += workout.duration;
    });

    const hours = Math.floor(workoutMinutes / 60)
    const minutes = workoutMinutes % 60

    return `${hours}: ${minutes}`;
  } , [workouts])
  

  return (
    <>
      <h2 className="font-bold text-blue-800 text-xl mb-3">
        Adicionar novo treino
      </h2>

      <p className="text-lf font-bold text-gray-600">
        Total de treinos: {workoutTotal}
      </p>

      <p>
        Tempo de treino: {workoutMinutes} horas
      </p>

      <WorkoutForm onAdd={onAdd} />

    </>
  );
}
