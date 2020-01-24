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
  LIST_TEAM_STANDING = 'LIST_TEAM_STANDING',
}
 export const listAllCompetitionSuccess = (payload : ICompetition) : AnyAction => {
    return { type: ActionTypes.LIST_ALL_COMPETITIONS_SUCCESS, payload};
  };

  export const listMatchesForCompetition = (payload : IStanding[]) : AnyAction => {
    return { type: ActionTypes.LIST_MATCHES_FOR_COMPETITION, payload};
  };

  export const listTeamStanding = (payload : IStanding[]) : AnyAction => {
    return { type: ActionTypes.LIST_TEAM_STANDING , payload};
  };

