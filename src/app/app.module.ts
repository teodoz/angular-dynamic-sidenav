import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { EnemiesComponent } from './components/enemies/enemies.component';
import { BossesComponent } from './components/bosses/bosses.component';
import { NpcsComponent } from './components/npcs/npcs.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, EnemiesComponent, BossesComponent, NpcsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
