import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EnemiesComponent } from './components/enemies/enemies.component';
import { BossesComponent } from './components/bosses/bosses.component';
import { NpcsComponent } from './components/npcs/npcs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'enemies', component: EnemiesComponent },
  { path: 'bosses', component: BossesComponent },
  { path: 'npcs', component: NpcsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
