import { createContext, useCallback, useEffect, useState } from "react";
import type { Workout } from "../types/workout";

interface WorkoutContextProps {
  workouts: Workout[];
  saveWorkouts: (workouts: Workout) => void;
  removeWorkout: (id: string) => void;
}

export const WorkoutsContext = createContext<WorkoutContextProps>(
  {} as WorkoutContextProps
);

interface WorkoutsProviderProps {
  children: React.ReactNode;
}

export function WorkoutsProvider({ children }: WorkoutsProviderProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  const saveWorkouts = useCallback(async (value: Workout) => {
    await fetch("http://localhost:4000/workouts", {
      method: "POST",
      body: JSON.stringify(value),
    });

    await fetchWorkouts();
  }, []);

  const fetchWorkouts = useCallback(async () => {
    const response = await fetch("http://localhost:4000/workouts", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();

    setWorkouts(data);
  }, []);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const removeWorkout = useCallback(async (id: string) => {
    await fetch(`http://localhost:4000/workouts/${id}`, {
      method: "DELETE",
    });

    await fetchWorkouts();
  }, []);

  return (
    <WorkoutsContext.Provider
      value={{
        workouts,
        saveWorkouts,
        removeWorkout,
      }}
    >
      {children}
    </WorkoutsContext.Provider>
  );
}