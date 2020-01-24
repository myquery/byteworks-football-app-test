import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { ICompetition } from './state-manager/app-model/competitions.model';
import { IAppState } from './state-manager/app.reducers';
import { FootballStoreService } from './football-store.service';
//import {SessionActions} from './state-manager/app.actions'
import { IMatch } from './state-manager/app-model/match.model';
import { ITeam } from './state-manager/app-model/teams.model';
import { IStanding } from './state-manager/app-model/standing.model';
import { IStand } from './state-manager/app-model/standing.model';
import { IPlayers } from './state-manager/app-model/players.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'byteworks-football';

  constructor(){}


  ngOnInit(){}
}
