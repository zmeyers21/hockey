import { Player } from "./Player.model";

export interface Team {
  _id?: string;
  name: string;
  players: Player[];
  captain: Player;
}