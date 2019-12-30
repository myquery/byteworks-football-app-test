import { Injectable } from '@angular/core';
import {FootballStoreService }from '../../football-store.service'
import { BehaviorSubject } from 'rxjs';
import {Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {COMPETITION_STATE}  from '../app-store/competition.store';
import { ICompetition } from '../app-model/competitions.model';
import { IStand } from '../app-model/standing.model';
import { STANDING_INITAIL_STATE } from '../app-store/standing.store';

@Injectable({
  providedIn: 'root'
})
export class CompetitionStore {

    // private initialState = STANDING_INITAIL_STATE.standing;
    // private _competitionState$: BehaviorSubject<IStand[]> = new BehaviorSubject<IStand[]>(this.initialState);;
    // public readonly competitionsState$: Observable<IStand[]> = this._competitionState$.asObservable();;
  
    constructor (private storeService: FootballStoreService) {
   
      //this.loadCompetition(2014)
    }
  
    // get competition(): ICompetition[] {
    //   return this._competitionState$.getValue();
    // }
  
    // set competition(nextState: ICompetition[]){
    //   this._competitionState$.next(Object.assign({}, nextState));
    // }

    // loadCompetition(id:number):Observable<IStand[]>{
    //   let compete = this.storeService.getTeamStanding(id)
    //  // compete.do(val => console.log(val))
    //   compete.subscribe(item => {
        
    //     return this._competitionState$.getValue();
    //   })

    //   return compete;
    // }


    
  
  }