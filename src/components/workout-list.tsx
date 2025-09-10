import type { Workout } from "../types/workout";
import { WorkoutResume } from "./workout-resume";

interface WorkoutListProps {
  workoutList: Workout[];
}

export function WorkoutList({ workoutList }: WorkoutListProps) {
  return (
    <>
      {workoutList.map((value) => {
        return <WorkoutResume workout={value} />;
      })}
    </>
  );
}
