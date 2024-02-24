import { Component, OnInit } from '@angular/core';
import { NavCard } from 'src/app/shared/models/NavCard.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards: NavCard[] = [];
  audio = new Audio();
  audioPlaying: boolean = false;

  ngOnInit(): void {
    this.audio.src = '../../assets/audio/nhl94-intro.mp3';
    this.audio.load();
    this.audio.onended = () => {
      this.audioPlaying = false;
    };
  }

  startAudio() {
    this.audio.play();
    this.audioPlaying = true;
  }

  stopAudio() {
    this.audio.pause();
    this.audioPlaying = false;
  }
  
}
