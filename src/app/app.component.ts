import { Component } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-dynamic-sidenav';
  content: any;
  constructor(public sidenavService: SidenavService, private router: Router) {
    this.sidenavService.content$.subscribe((x) => {
      this.content = x;
      console.log(this.content);
    });
  }

  get isHome(): boolean {
    return this.router.url === '/';
  }

  back() {
    history.back();
  }
}
