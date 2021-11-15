import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayersComponent } from './components/players/players.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamFormComponent } from './components/team-form/team-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'add-match', component: AddMatchComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'displayMatch/:id', component: DisplayMatchComponent },
  { path: 'displayTeam/:id', component: DisplayTeamComponent },
  { path: 'displayPlayer/:id', component: DisplayPlayerComponent },
  { path: 'editMatch/:id', component: EditMatchComponent },
  { path: 'teamForm/:id', component: TeamFormComponent },
  { path: 'teamForm', component: TeamFormComponent },
  { path: 'playerForm/:id', component: PlayerFormComponent },
  { path: 'playerForm', component: PlayerFormComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'players', component: PlayersComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
