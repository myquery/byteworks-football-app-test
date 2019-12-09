import {AnyAction} from 'redux'
import {SessionActions} from '../app.actions'
import {IMatchState} from '../app-store/matches.store';
import {MATCHE_INITIAL_STATE}  from '../app-store/matches.store';

export function matchesReducer(state: IMatchState = MATCHE_INITIAL_STATE, action:AnyAction): IMatchState{
    switch(action.type){
        case SessionActions.LIST_ALL_COMPETITIONS:
           // return{competitions : [...state.competitions, ...action.competitions]};
        case SessionActions.LIST_ONE_COMPETITION:
           // return {competitions:state.competitions};

    }
    return state;
}