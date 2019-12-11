import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICompetition} from './state-manager/app-model/competitions.model';
import {IArea} from './state-manager/app-model/competitions.model';
import {IMatch} from './state-manager/app-model/match.model';
import {IStanding} from './state-manager/app-model/standing.model';
import {IPlayers} from './state-manager/app-model/players.model';
import {ITeam}from './state-manager/app-model/teams.model';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

 
//const headers = new HttpHeaders()


const BASE_URL = '/v2/';
@Injectable({
  providedIn: 'root'
})
export class FootballStoreService {

  constructor(private http: HttpClient) {
    
   }
   headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'X-Auth-Token': 'fdff26df84a34e51a99566227ee6801d'
  })

//get all competitions
  listAllCompetition() : Observable<ICompetition[]>{
 

    return this.http.get<ICompetition[]>(BASE_URL+'competitions/', {headers: this.headers})
   
     .map(res => res)
   
  }


  //List one particular competition for a particular year
  getCompetition(year:Date):Observable<ICompetition[]>{

    return this.http.get<ICompetition[]>(BASE_URL+'competitions/'+year, {headers: this.headers})
    .map(res => res);

  }

  //List all teams for a particular competition.
  getAllTeamForCompetition(id : ICompetition) :Observable<ITeam[]> {
 
    return this.http.get<ITeam[]>(BASE_URL+'competitions/'+id+'/teams', {headers: this.headers})

  }

  //Show Standings for a particular competition.
  getTeamStandingForCompetition(id:ICompetition):Observable<IStanding[]>{
     return this.http.get<IStanding[]>(BASE_URL+'competitions/'+id+'/teams', {headers: this.headers})

  }

  //List all matches for a particular competition.
  getAllMatchesForCompetition(id:ICompetition) : Observable<IMatch[]>{
     return this.http.get<IMatch[]>(BASE_URL+'competitions/'+id+'/matches', {headers: this.headers})
  }

  //List goal scorers for a particular competition.
  getGoalScorerForCompetition(id:ICompetition):Observable<IPlayers[]>{
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
  getAllMatchForTeams(id:ITeam) : Observable<IMatch[]>{
    return this.http.get<IMatch[]>(BASE_URL+'teams/'+id+'/matches/', {headers: this.headers})
  }

  //Show one particular team.
  getOneTeam(id:ITeam):Observable<ITeam[]>{
    return this.http.get<ITeam[]>(BASE_URL+'teams/'+id, {headers: this.headers})
  }

  //List all available areas.
  getAreas():Observable<ICompetition[]>{
    return this.http.get<ICompetition[]>(BASE_URL+'areas/', {headers:this.headers})
  }

  //List one particular area.
  getOneArea(id:IArea):Observable<ICompetition[]>{
    return this.http.get<ICompetition[]>(BASE_URL+'areas/'+id, {headers: this.headers})
  }

  //List one particular player.
  getOnePlayer(id:IPlayers):Observable<IPlayers[]>{
    return this.http.get<IPlayers[]>(BASE_URL+'players/'+id, {headers: this.headers})
  }

  //Show all matches for a particular player.
  getAllPlayers(id:IPlayers):Observable<IMatch[]>{
    return this.http.get<IMatch[]>(BASE_URL+'players/'+id+'matches', {headers: this.headers})
  }

}
