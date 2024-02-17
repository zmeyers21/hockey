import { DayOfWeek } from "../enums/DayOfWeek.enum";
import { DivisionStatus } from "../enums/DivisionStatus.enum";
import { State } from "../enums/State.enum";

export interface Division {
  _id?: string;
  day: DayOfWeek;
  city: string;
  state: State;
  zip: string;
  minRating?: number;
  maxRating?: number;
  status: DivisionStatus;
}