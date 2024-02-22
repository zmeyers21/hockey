import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  on(): void {
    setTimeout(() => {
      this.loadingSource.next(true);
    });
  }

  off(): void {
    setTimeout(() => {
      this.loadingSource.next(false);
    });
  }

}
