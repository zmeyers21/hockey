import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllDivisions().pipe(
      tap((res) => console.log('divisions: ', res))
    ).subscribe();
  }

}
