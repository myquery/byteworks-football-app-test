import {AnyAction} from 'redux'
import {SessionActions} from '../app.actions'
import {ITeamState} from '../app-store/teams.store';
import {TEAM_INITIAL_STATE}  from '../app-store/teams.store';

export function teamReducer(state: ITeamState = TEAM_INITIAL_STATE, action:AnyAction): ITeamState{
    switch(action.type){
        case SessionActions.LIST_ALL_TEAMS:
           // return{competitions : [...state.competitions, ...action.competitions]};
        case SessionActions.LIST_TEAM_STANDING:
           // return {competitions:state.competitions};
        case SessionActions.LIST_TEAM:
        //return a team
      

    }
    return state;
}