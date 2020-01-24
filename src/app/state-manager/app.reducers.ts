import {ICompetition} from './app-model/competitions.model';
import {IMatch} from './app-model/match.model';
import {IStanding} from './app-model/standing.model';
import {IPlayers} from './app-model/players.model';
import {ITeam}from './app-model/teams.model';
import { ActionTypes} from './app.actions';


export interface IAppState {
    competitions?: ICompetition[];
    matches?: IMatch[];
    teams?: ITeam[];
    standing?: IStanding[];
    players?: IPlayers[];


  }

  export const initialState:IAppState = {
    competitions: [],
    matches:[],
    teams : [],
    standing: [],
    players:[]

  }

  export function FootballReducer(state: IAppState = initialState, action) : IAppState{
      switch(action.type){
          case ActionTypes.LIST_ALL_COMPETITIONS_SUCCESS:
              return{...state, competitions: [...state.competitions, action.payload]
              }
        case ActionTypes.LIST_TEAM_STANDING:
            return {
                ...state, standing: [...state.standing, action.payload]
            }
            default:
            return state;
      }

      
  }