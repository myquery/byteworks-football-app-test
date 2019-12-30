import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActionsObservable, ofType, StateObservable, Epic } from 'redux-observable';
//import { SessionActions } from './state-manager/app.actions';
import { ICompetition } from './state-manager/app-model/competitions.model'
import { IStanding } from './state-manager/app-model/standing.model';
import { IAppState } from './state-manager/app.reducers';
import { IStand } from './state-manager/app-model/standing.model'
import {AnyAction} from 'redux'
import {Observable, pipe, } from 'rxjs';

import { mergeMap, map, switchMap,catchError} from 'rxjs/operators';
import {FootballStoreService} from './football-store.service'

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Action } from 'rxjs/internal/scheduler/Action';




@Injectable()
export class EpicServiceService {

  constructor(private http: HttpClient, private service : FootballStoreService ) { }

  public createEpics(){
    return [
      this.listAllCompetitions(),
      ];
  }

  listAllCompetitions = () => {
     // do(val => console.log(val))
   // return (action$: ActionsObservable<AnyAction>) => {

    
      //action$.ofType(SessionActions.LIST_ALL_COMPETITIONS)
              // .pipe(
              // switchMap(() => {
              // return this.service.listAllCompetition().pipe(
              //   map(result => {
              //       return this.action.listAllCompetitionSuccess(result)
              //   }),
              //   catchError(error => Observable.of({
              //     type: SessionActions.ERROR_LIST
              //   }))
              // )}))
     // }
    
  }

  getTeamStanding = (action$ : ActionsObservable<AnyAction>) =>  {
      // return action$.pipe(ofType(SessionActions.LIST_TEAM_STANDING),
      // mergeMap((action) => {
      //     return this.service.getTeamStanding(action.payload)
      //         .map(result => {
      //             return this.action.listTeamStandingSuccess(result)
      //         })
      //         .catch(error => Observable.of({
      //             type: SessionActions.ERROR_LIST
      //         }))
      // }))
  }
}
