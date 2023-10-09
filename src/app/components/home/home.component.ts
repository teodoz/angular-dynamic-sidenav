import { Component } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

export interface PagesModel {
  title: string;
  path: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  pages: PagesModel[] = [
    { title: 'Inimigos', path: 'enemies' },
    { title: 'Chefes', path: 'bosses' },
    { title: 'NPCs', path: 'npcs' },
  ];
  constructor(private sidenavService: SidenavService) {}

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
