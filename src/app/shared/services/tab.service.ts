import { Injectable } from '@angular/core';
import { Tab } from '../models/Tab.model';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  activeTab: Tab;

}
