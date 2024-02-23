import { Position } from "../enums/Position.enum";
import { Player } from "./Player.model";
import { SkillRating } from "./SkillRating.model";

export class DivisionPlayer implements Player {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  
  divisionId: string;
  positions: Position[];
  rating: number;
  skills: SkillRating;

  constructor() { }
}