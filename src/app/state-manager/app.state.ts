import {ICompetition} from './app-model/competitions.model'
import {IMatch} from './app-model/match.model'
import {IStanding} from './app-model/standing.model'
import {IPlayers} from './app-model/players.model'
import {ITeam}from './app-model/teams.model'
import {AnyAction, combineReducers} from 'redux'
import {SessionActions} from './app.actions'
import {competitionReducer} from './app-reducers/competition.reducer'
import {ICompetitionState} from './app-store/competition.store'

export interface IAppState{
    competitions?: ICompetitionState;

  }

export const rootReducer = combineReducers({
  competitions:competitionReducer
})