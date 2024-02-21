import { Component, OnInit } from '@angular/core';
import { NavCard } from 'src/app/shared/models/NavCard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: NavCard[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  cardClick(card: NavCard): void {
    console.log('card: ', card);
  }
  
}
