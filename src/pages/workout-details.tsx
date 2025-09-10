import { useLocation, useParams } from "react-router-dom";
import { WorkoutCard } from "../components/workout-card";

export function WorkoutDetails() {
  const { id } = useParams();

  const { state } = useLocation();

  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">Detalhes do treino - ID {id}</h2>

      <WorkoutCard workout={state.workout} />
    </>
  );
}
