import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { DivisionService } from 'src/app/shared/services/division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {

  constructor(private service: DivisionService,
    private authService: AuthenticationService) { }
  
  ngOnInit(): void {
    
  }

}
