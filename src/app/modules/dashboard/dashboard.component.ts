import { Component } from '@angular/core';
import { NavCard } from 'src/app/shared/models/NavCard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  cards: NavCard[] = [];

  cardClick(card: NavCard): void {
    console.log('card: ', card);
  }

  startAudio() {
    this.playAudio();
  }

  playAudio(){
    let audio = new Audio();
    audio.src = '../../assets/audio/nhl94-intro.mp3';
    audio.load();
    audio.play();
  }
  
}
