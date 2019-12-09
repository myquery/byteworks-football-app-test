import {AnyAction} from 'redux'
import {SessionActions} from '../app.actions'
import {IStandingState} from '../app-store/standing.store';
import {STANDING_INITAIL_STATE}  from '../app-store/standing.store';

export function standingReducer(state: IStandingState = STANDING_INITAIL_STATE, action:AnyAction): IStandingState{
    switch(action.type){
        case SessionActions.LIST_TEAM_STANDING:
           // return{competitions : [...state.competitions, ...action.competitions]};
        case SessionActions.LIST_ONE_COMPETITION:
           // return {competitions:state.competitions};

    }
    return state;
}