import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/Tab.model';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { AuthService } from '@auth0/auth0-angular';
import { MenuState } from '../../enums/MenuState.enum';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { TabService } from '../../services/tab.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state(MenuState.OPEN, style({ width: '200px' })),
      state(MenuState.CLOSED, style({ width: '0' })),
      transition('open <=> closed', [ animate('200ms') ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  subs = new SubSink();
  menuState: MenuState = MenuState.CLOSED;
  tabs$: Tab[] = [];

  constructor(public router: Router,
    private tabService: TabService,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.tabs$ = [
      { title: 'home', route: 'dashboard' },
      { title: 'divisions', route: 'divisions' },
      { title: 'players', route: 'players' },
      { title: 'draft', route: 'draft' }
    ];
    this.navigate(this.tabs$[0]);
  }

  isActiveTab(tab: Tab): boolean {
    return this.tabService.activeTab == tab;
  }

  navigate(tab: Tab): void {
    this.tabService.activeTab = tab;
    this.router.navigate([tab.route]);
    this.menuState = MenuState.CLOSED;
  }

  toggleMenu(): void {
    this.menuState = this.menuState == MenuState.OPEN ? MenuState.CLOSED : MenuState.OPEN;
  }

  get menuIcon(): string {
    return this.menuState == MenuState.OPEN ? 'close' : 'menu';
  }

}
