import { useState } from "react"
import type { Workout } from "../types/workout";

interface WorkoutFormProps {
    onAdd: (workout: Workout) => void;
}

export function WorkoutForm({onAdd}:WorkoutFormProps) {

    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState(0);
    const [intensity, setIntensity] = useState(1);
    const [date, setDate] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        const workout = {
            title,
            duration,
            intensity,
            date,
        };
        onAdd(workout as Workout);
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #ccc",
                gap: "0.5rem"
            }}
        >
            <label htmlFor="workout-title">Título do treino</label>
            <input type="text" 
            id= "workout-title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            placeholder="título do treino"/>

            <label htmlFor="workout-duration">Duração (min)</label>
            <input type="number" 
            id= "workout-duration" 
            onChange={(e) => setDuration(Number(e.target.value))}
            value={duration} 
            placeholder="Duração (min)"/>

            <label htmlFor="workout-intensity">Intensidade</label>
            <input type="number" 
            id= "workout-intensity" 
            onChange={(e) => setIntensity(Number(e.target.value))}
            value={intensity}
            placeholder="Intensidade"
            min={1}
            max={5}
            />


            <label htmlFor="workout-date">Intensidade</label>
            <input type="date" 
            id= "workout-date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Dia de treino"/>

            <button type="submit">Adicionar treino</button>
        </form>
    )
}