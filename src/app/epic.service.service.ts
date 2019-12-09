import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActionsObservable } from 'redux-observable';
import { SessionActions } from './state-manager/app.actions';
import { ICompetition } from './state-manager/app-model/competitions.model'
import {AnyAction} from 'redux'
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/mergeMap';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

const BASE_URL = 'https://api.football-data.org/v2/';

@Injectable({
  providedIn: 'root'
})
export class EpicServiceService {

  constructor(private http: HttpClient) { }
  listAllCompetitions = (action$: ActionsObservable<any>) => {
    return action$.ofType(SessionActions.LIST_ALL_COMPETITIONS)
      // .mergeMap(({payload}) => {
      //   return this.http.post(`${BASE_URL}/auth/login`, payload)
      //     .map(result => ({
      //       type: SessionActions.LOGIN_USER_SUCCESS,
      //       payload: result.json().meta
      //     }))
      //     .catch(error => Observable.of({
      //       type: SessionActions.LOGIN_USER_ERROR
      //     }));
      //   });
  }
}
