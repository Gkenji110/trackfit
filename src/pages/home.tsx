import { useContext } from "react";
import { Header } from "../components/header";
import { WorkoutList } from "../components/workout-list";
import { WorkoutsContext } from "../context/workout-context";

export function Home() {
  const { workouts } = useContext(WorkoutsContext);

  return (
    <>
      <Header>Página inicial - Lista de treinos</Header>



      <WorkoutList workoutList={workouts} />
    </>
  );
}