import { Season } from "../enums/Season.enum";
import { SessionStatus } from "../enums/SessionStatus.enum";
import { Division } from "./Division.model";
import { Game } from "./Game.model";
import { Player } from "./Player.model";
import { Team } from "./Team.model";

export class Session {

  constructor(division: Division, status: SessionStatus) {
    this.name = 'New Session';
    this.season = Season.TBD;
    this.startDate = '';
    this.division = division;
    this.teams = [];
    this.unassignedPlayers = [];
    this.games = [];
    this.status = status;
  }

  _id?: string;
  name: string;
  season: Season;
  startDate: string;
  division: Division;
  teams: Team[];
  unassignedPlayers: Player[];
  manager: Player;
  games: Game[];
  status: SessionStatus;

  get playerCount(): string {
    return [...this.teams].reduce((sum, team) => sum + team.players.length, 0).toString();
  }
}