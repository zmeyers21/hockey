import { Injectable } from '@angular/core';
import { DivisionPlayer } from '../models/DivisionPlayer.model';
import { SkillRating } from '../models/SkillRating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  weights: SkillRating = {
    agility: 2.0,
    speed: 3.0,
    offAware: 3.0,
    defAware: 2.0,
    shotPower: 1.0,
    shotAccuracy: 2.0,
    stickHandling: 3.0,
    passing: 1.0,
    endurance: 1.0,
    xFactor: 1.0
  };

  defaultSkills: SkillRating = {
    agility: 3.0,
    speed: 3.0,
    offAware: 3.0,
    defAware: 3.0,
    shotPower: 3.0,
    shotAccuracy: 3.0,
    stickHandling: 3.0,
    passing: 3.0,
    endurance: 3.0,
    xFactor: 0.0
  };

  constructor() { }

  getOverallRating(player: DivisionPlayer): number {
    const ratingSum = this.getRatingSum(player);
    if (ratingSum < 50) {
      return (ratingSum + 25) / 2;
    } else {
      return ratingSum;
    }
  }

  getRatingSum(player: DivisionPlayer): number {
    let total: number = 0;
    const r: SkillRating = player.skills;
    Object.keys(r).forEach(k => {
      total += r[k] * this.weights[k];
    });
    return total;
  }

}
