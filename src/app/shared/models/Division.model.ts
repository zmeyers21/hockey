import { DayOfWeek } from "../enums/DayOfWeek.enum";
import { State } from "../enums/State.enum";

export interface Division {
  _id: string;
  name: string;
  description: string;
  dayOfWeek: DayOfWeek;
  city: string;
  state: State;
  zip: string;
  minRating?: number;
  maxRating?: number;
}