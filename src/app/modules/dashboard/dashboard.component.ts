import { Component, OnInit } from '@angular/core';
import { NavCard } from 'src/app/shared/models/NavCard.model';
import { ChartService } from 'src/app/shared/services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: NavCard[] = [];
  // top40Songs: ChartData[] = [];
  // weeklyPlays: ChartDataMulti[] = [];
  // weeklyTimeSlotSongs: ChartDataMulti[] = [];
  // title = 'Top 40 Songs (01/01/2024-01/31/2024)';
  // title = 'Taylor Swift Total Weekly Plays';
  // title = 'Jelly Roll Plays by Time Block';

  constructor(private service: ChartService) { }

  ngOnInit(): void {
    // this.top40Songs = this.service.top40Songs;
    // this.weeklyPlays = this.service.weeklyPlays;
    // this.weeklyTimeSlotSongs = this.service.weeklyTimeSlotSongs;

    this.cards = [
      { title: 'Top 40 Songs', route: '/songs/top-40' },
      { title: 'Top 40 Artists', route: '/artists/top-40' },
      { title: 'Trending Songs', route: '/songs/trending' },
      { title: 'Trending Artists', route: '/artists/trending' }
    ]

  }

  cardClick(card: NavCard): void {
    console.log('card: ', card);
  }
  
}
