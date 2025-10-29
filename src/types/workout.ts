import type { Intensity } from "./intensity";

export interface Workout {
  id: string;
  userId: string;
  title: string;
  duration: number;
  intensity: Intensity;
  date: string;
  notes?: string;
}
