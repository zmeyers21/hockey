import { Position } from "../enums/Position.enum";

export interface Player {
  _id: string;
  firstName: string;
  lastName: string;
  positions: Position[];
  rating: number;
  email: string;
  phone?: string;
}