import { Division } from "./Division.model";
import { Game } from "./Game.model";
import { Player } from "./Player.model";
import { Team } from "./Team.model";

export interface Session {
  _id?: string;
  name: string;
  division: Division;
  teams: Team[];
  unassignedPlayers: Player[];
  manager: Player;
  games: Game[];
}