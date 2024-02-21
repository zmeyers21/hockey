import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading: boolean;

  on(): void {
    this.loading = true;
  }

  off(): void {
    this.loading = false;
  }

}
