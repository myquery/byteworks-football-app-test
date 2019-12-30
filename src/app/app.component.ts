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
  public competition : ICompetition[];
  public standing : IStanding[];
  public teamStand : IStand[]

  constructor(private ngRedux : NgRedux<IAppState>, private service : FootballStoreService){}
   @select('competitions') competitions$: Observable<ICompetition[]>;
   //@select('matches') matches$: Observable<IMatch[]>
  // @select('teams') teams$ : Observable<ITeam[]>
     @select('standing') standing$ : Observable<IStanding[]>
  // @select('players') players$ : Observable<IPlayers[]>

  ngOnInit(){

    this.getCompetitions()
    this.competitions$.subscribe(item => {
      this.competition = item
    
        console.log(this.competition)
         
    })

    this.getTables(2014)
    this.standing$.subscribe(item => {
    this.standing= item
   console.log(this.standing)
    
        
         
    })
    this.getStanding()
  }

  // loadCompetition(){
  //   this.action.listAllCompetitions()
  // }

  // loadStanding(id){
  //   this.action.listTeamStanding(id)
  // }

  getCompetitions(){
    this.service.listAllCompetition()
    
  }
  getTables(id:number){
  
    this.service.getTeamStanding(id)
  }

  getStanding(){
    this.standing.map(item => {
      this.teamStand = item.standings
      console.log(this.teamStand)
    })
  }
}
