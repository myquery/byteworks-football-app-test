import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {ICompetition} from './state-manager/app-model/competitions.model';
import {IArea} from './state-manager/app-model/competitions.model';
import {IMatch} from './state-manager/app-model/match.model';
import {IStanding} from './state-manager/app-model/standing.model';
import {IPlayers} from './state-manager/app-model/players.model';
import {ITeam}from './state-manager/app-model/teams.model';
import {ITable} from './state-manager/app-model/standing.model'
import {IStand} from './state-manager/app-model/standing.model'
import { map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './state-manager/app.reducers';
import { listAllCompetitionSuccess, listMatchesForCompetition } from './state-manager/app.actions';


 
//const headers = new HttpHeaders()


const BASE_URL = '/v2/';
@Injectable({
  providedIn: 'root'
})
export class FootballStoreService {
  public competitionTable : any;



  constructor(private http: HttpClient, private ngRedux : NgRedux<IAppState>) {
    
   }
   headers = new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Auth-Token': 'fdff26df84a34e51a99566227ee6801d'
  })


  listHeaderMenu(){
    return this.http.get<ICompetition[]>(BASE_URL+'competitions/?plan=TIER_ONE', {headers: this.headers})
  }
//get all competitions
  listAllCompetition(){
     return this.http.get<ICompetition[]>(BASE_URL+'competitions/', {headers: this.headers})
     .subscribe(item => {
      // console.log(item)
       return this.ngRedux.dispatch(listAllCompetitionSuccess(item))
     })
    }


  //List one particular competition for a particular year
  getCompetition(year:Date):Observable<ICompetition[]>{

    return this.http.get<ICompetition[]>(BASE_URL+'competitions/'+year, {headers: this.headers})
    

  }

  //List all teams for a particular competition.
  getAllTeamForCompetition(id : number) :Observable<ICompetition[]> {
 
    return this.http.get<ICompetition[]>(BASE_URL+'competitions/'+id+'/teams', {headers: this.headers})
 

  }

  //Show Standings for a particular competition.
  getTeamStandingForCompetition(id:number):Observable<IStanding[]>{
     return this.http.get<IStanding[]>(BASE_URL+'competitions/'+id+'/teams', {headers: this.headers})

  }


  //List all matches for a particular competition.
  getAllMatchesForCompetition(id:number) : Observable<IMatch[]>{
     return this.http.get<IMatch[]>(BASE_URL+'competitions/'+id+'/matches', {headers: this.headers})
  }

  //List goal scorers for a particular competition.
  getGoalScorerForCompetition(id:number):Observable<IPlayers[]>{
   return this.http.get<IPlayers[]>(BASE_URL+'competitions/'+id+'/scorers', {headers: this.headers})
  }

  //List matches across (a set of) competitions.
  getSetForCompetition():Observable<ICompetition[]>{
    
    return this.http.get<ICompetition[]>(BASE_URL+'competitions/matches', {headers:this.headers})
  }

  //Show one particular match
  getOneMatchForCompetition(id:ICompetition):Observable<IMatch[]>{
    return this.http.get<IMatch[]>(BASE_URL+'competitions/matches/'+id, {headers:this.headers})
  }

  //Show all matches for a particular team.
  getAllMatchForTeams(id:number) : Observable<IMatch[]>{
    return this.http.get<IMatch[]>(BASE_URL+'teams/'+id+'/matches/', {headers: this.headers})
  }

  //Show one particular team.
  getOneTeam(id:number):Observable<ITeam[]>{
    return this.http.get<ITeam[]>(BASE_URL+'teams/'+id, {headers: this.headers})
  }

  //List all available areas.
  getAreas():Observable<ICompetition[]>{
    return this.http.get<ICompetition[]>(BASE_URL+'areas/', {headers:this.headers})
  }

  //List one particular area.
  getOneArea(id:number):Observable<ICompetition[]>{
    return this.http.get<ICompetition[]>(BASE_URL+'areas/'+id, {headers: this.headers})
  }

  //List one particular player.
  getOnePlayer(id:number):Observable<IPlayers[]>{
    return this.http.get<IPlayers[]>(BASE_URL+'players/'+id, {headers: this.headers})
  }

  //Show all matches for a particular player.
  getAllPlayers(id:number):Observable<IMatch[]>{
    return this.http.get<IMatch[]>(BASE_URL+'players/'+id+'matches', {headers: this.headers})
  }

  getTeamStanding(id:number){
    return this.http.get<IStanding[]>(`${BASE_URL}competitions/${id}/standings/`, {headers: this.headers})
    .subscribe(item => {
      return this.ngRedux.dispatch(listMatchesForCompetition(item))
    })
    
    
  
  }

}
