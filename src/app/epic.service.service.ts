// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ActionsObservable } from 'redux-observable';
// //import { SessionActions } from './state-manager/app.actions';
// import { ICompetition } from './state-manager/app-model/competitions.model'
// import {AnyAction} from 'redux'
// import {Observable } from 'rxjs';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// const BASE_URL = 'https://api.football-data.org/v2/';


// interface Action {
//   type:string;
//   payload?: string
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class EpicServiceService {

//   constructor(private http: HttpClient) { }
//   listAllCompetitions = (action$: ActionsObservable<AnyAction>) => {
//     return action$.ofType(SessionActions.LIST_ALL_COMPETITIONS)
//       .mergeMap( () => {
//         return this.http.get(`${BASE_URL}/competitions`)
//           .map(result => ({
//             type: SessionActions.LIST_ALL_COMPETITIONS            
//           }))
//           .catch(error => Observable.of({
//             type: SessionActions.ERROR_LIST_COMPETITION
//           }));
//         });
//   }
// }
