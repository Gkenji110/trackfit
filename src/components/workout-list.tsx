import type { Workout } from "../types/workout";
import { WorkoutResume } from "./workout-resume";

interface WorkoutListProps {
  workoutList: Workout[];
  removeWorkouts: (id:string) => void;
}

export function WorkoutList({ workoutList, removeWorkouts }: WorkoutListProps) {
  return (
    <>
      {workoutList.map((value) => {
        return <WorkoutResume removeWorkouts={removeWorkouts} workout={value} />;
      })}
    </>
  );
}
