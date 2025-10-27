import { createContext, useCallback, useEffect, useState } from "react";
import type { Workout } from "../types/workout";
import type { AuthUser } from "../types/auth-user";

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
    setTimeout(() => {
      console.log("esperando");
    }, 3000);

    const storage = localStorage.getItem("user");

    console.log("storage", storage);

    if (!storage) {
      throw new Error("Usuario não está autenticado");
    }

    const user: AuthUser = JSON.parse(storage);

    const response = await fetch(
      `http://localhost:4000/workouts?userId=${user.id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "applications/json",
        },
      }
    );

    const data = await response.json();

    setWorkouts(data);
  }, []);

  useEffect(() => {
    void fetchWorkouts();
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