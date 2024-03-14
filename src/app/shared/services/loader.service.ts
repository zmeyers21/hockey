import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading: boolean;

  private loadingSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  on(): void {
    setTimeout(() => {
      this.loading = true;
      this.loadingSource.next(true);
    });
  }

  off(): void {
    setTimeout(() => {
      this.loading = false;
      this.loadingSource.next(false);
    });
  }

}
