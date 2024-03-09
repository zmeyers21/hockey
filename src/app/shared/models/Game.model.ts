import { GameStatus } from "../enums/GameStatus.enum";
import { BoxScore } from "./BoxScore.model";

export interface Game {
  _id?: string;
  divisionId: string;
  sessionId: string;
  homeTeamId: string;
  awayTeamId: string;
  homeTeamScore: number;
  awayTeamScore: number;
  date: string;
  time: string;
  location: string;
  status: GameStatus;
  boxScore?: BoxScore;
}