import {ICompetition} from './app-model/competitions.model';
import {IMatch} from './app-model/match.model';
import {IStanding} from './app-model/standing.model';
import {IPlayers} from './app-model/players.model';
import {ITeam}from './app-model/teams.model';
import {AnyAction, combineReducers} from 'redux';
import {SessionActions} from './app.actions';
import {competitionReducer} from './app-reducers/competition.reducer';
import {matchesReducer} from './app-reducers/match.reducer';
import {ICompetitionState} from './app-store/competition.store';
import { IMatchState } from './app-store/matches.store';
import {ITeamState } from './app-store/teams.store';
import { teamReducer} from './app-reducers/team.reducer';
import { IStandingState } from './app-store/standing.store';
import {standingReducer} from './app-reducers/standing.reducer'

export interface IAppState{
    competitions: ICompetitionState[];
    matches: IMatchState[];
    teams:ITeamState[];
    standing:IStandingState[];



  }

export const rootReducer = combineReducers({
  competitions:competitionReducer,
  matches: matchesReducer,
  teams:teamReducer,
  standing:standingReducer
  
})

export const APPINITIALSTATE : IAppState = {
competitions:[],
matches: [],
teams: [],
standing: []

}