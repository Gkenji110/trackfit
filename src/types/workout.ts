import type { Intensity } from "./intensity";

export interface Workout {
  id: string;
  title: string;
  duration: number;
  intensity: Intensity;
  date: string;
  notes?: string;
}
