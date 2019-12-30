import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './app.reducers';
import { initialState } from './app.reducers';
import {ICompetition} from './app-model/competitions.model';
import {IMatch} from './app-model/match.model';
import {IStanding} from './app-model/standing.model';
import {IStand} from './app-model/standing.model';
import {IPlayers} from './app-model/players.model';
import {ITeam}from './app-model/teams.model';
import { AnyAction } from 'redux';
import { FootballStoreService } from '../football-store.service';

export enum ActionTypes {
  LIST_ALL_COMPETITIONS_SUCCESS = 'LIST_ALL_COMPETITIONS_SUCCESS',
  LIST_MATCHES_FOR_COMPETITION = 'LIST_MATCHES_FOR_COMPETITION',
}
 export const listAllCompetitionSuccess = (payload : ICompetition[]) : AnyAction => {
    return { type: ActionTypes.LIST_ALL_COMPETITIONS_SUCCESS, payload};
  };

  export const listMatchesForCompetition = (payload : IStanding[]) : AnyAction => {
    return { type: ActionTypes.LIST_MATCHES_FOR_COMPETITION, payload};
  };

// @Injectable()
// export class SessionActions {

 
//   constructor(private ngRedux: NgRedux<IAppState>, private service : FootballStoreService){}
//   // export enum ActionTypes {
//   //   ListCompetition = '[ICompetition] List all competition',
//   //   ListCompetitionSuccess= '[ICompetition] List All Competition Success',
//   //   LIstOneCompetition = '[ICompetition] List One Competition',
//     static LIST_ALL_COMPETITIONS = 'LIST_ALL_COMPETITIONS';
//     static LIST_ALL_COMPETITIONS_SUCCESS = 'LIST_ALL_COMPETITIONS_SUCCESS';
//     static ERROR_LIST = 'ERROR_LIST';
//     static LIST_ALL_TEAMS= 'LIST_ALL_TEAMS';
//     static LIST_TEAM_STANDING = 'LIST_TEAM_STANDING';
//     static LIST_ONE_COMPETITION = 'LIST_ONE_COMPETITION';
//     static LIST_TEAM_STANDING_SUCCESS = 'LIST_TEAM_STANDING_SUCCESS';
//     static LIST_ALL_MATCHES = 'LIST_ALL_MATCHES';
//     static LIST_TOP_SCORER_FOR_COMPETITION = 'LIST_TOP_SCORER_FOR_COMPETITION';
//     static LIST_MATCHES_FOR_COMPETITION = 'LIST_MATCHES_FOR_COMPETITION';
//     static LIST_MATCHES_FOR_TEAM = 'LIST_MATCHES_FOR_TEAM';
//     static LIST_TEAM = 'LIST_TEAM';
//     static LIST_ALL_AREAS = 'LIST_ALL_AREAS';
//     static LIST_ONE_AREA = 'LIST_ONE_AREA';
//     static LIST_ONE_PLAYER = 'LIST_ONE_PLAYER';
//     static LIST_ALL_MATCHES_ONE_PLAYER = 'LIST_ALL_MATCHES_ONE_PLAYER';

//   //}


  
  
  
// //   export const listAllCompetitions = () => {
// //     return { type: ActionTypes.ListCompetition};
// //   };

    
// // export const listAllCompetitionSuccess = payload => {
// //     return { type: ActionTypes.ListCompetitionSuccess, payload};
// //   };

// listAllCompetitions() : AnyAction {
//   return this.ngRedux.dispatch(
//     { type: SessionActions.LIST_ALL_COMPETITIONS});
// };

// // export listAllCompetitionSuccess(payload : ICompetition[]) : AnyAction {
// //   return this.ngRedux.dispatch(
// //     { type: SessionActions.LIST_ALL_COMPETITIONS, payload});
// // };
//   listOneCompetition(payload : ICompetition) : AnyAction {
//     return this.ngRedux.dispatch(
//       { type: SessionActions.LIST_ONE_COMPETITION, 
//         payload});
//   };

//   listAllTeams(payload: ITeam[]): AnyAction{
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_TEAMS, payload });
//   };

//   listTeamStanding(payload) : AnyAction{
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_TEAM_STANDING, payload:initialState.standing});
//   };

//   listTeamStandingSuccess(payload) : AnyAction{
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_TEAM_STANDING, payload});
//   };

//   listAllMatches(payload: IMatch[]) : AnyAction {
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_MATCHES, payload});
//   };

//   listTopScorerForCompetition(payload: IMatch[]) : AnyAction {
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_TOP_SCORER_FOR_COMPETITION, payload });
//   };

//   listMatchesForCompetition(payload:IMatch[]): AnyAction {
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_MATCHES_FOR_COMPETITION, payload });
//   };

//   listMatchesForTeam(payload:IMatch[]) : AnyAction {
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_MATCHES_FOR_TEAM, payload });
//   };

//   listTeam(payload:ITeam[]) : AnyAction {
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_TEAM, payload });
//   };

//   listAllAreas(payload:ICompetition[]) : AnyAction {
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_AREAS, payload });
//   };

//   listOneArea(payload: ICompetition) : AnyAction{
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_ONE_AREA, payload });
//   };

//   listOnePlayer(payload:IPlayers) : AnyAction{
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_ONE_PLAYER, payload });
//   };

//   listAllMatchesOnePlayer(payload:IPlayers) : AnyAction {
//     return this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_MATCHES_ONE_PLAYER, payload });
//   };

// //}

// }