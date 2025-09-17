import { useCallback, useMemo, useState } from "react";
import { WorkoutForm } from "../components/workout-form";
import { WorkoutList } from "../components/workout-list";
import type { Workout } from "../types/workout";


export function AddWorkout() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

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
  
    const addWorkout = useCallback((workout: Workout) => {
      setWorkouts((prev) => [...prev, workout]);
  }, []);


    const removeWorkout = useCallback((id: string) => {

      const index = workouts.findIndex((value) => {
        return value.id == id
      });

      const updatedWokouts = [...workouts];

      updatedWokouts.splice(index, 1);

      setWorkouts(updatedWokouts);

    }, [])

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

      <WorkoutForm onAdd={addWorkout} />

      <WorkoutList removeWorkouts={removeWorkout} workoutList={workouts} />
    </>
  );
}
