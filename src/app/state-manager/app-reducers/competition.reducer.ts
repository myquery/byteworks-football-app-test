import {AnyAction} from 'redux'
import {SessionActions} from '../app.actions'
import {ICompetitionState} from '../app-store/competition.store';
import {COMPETITION_STATE}  from '../app-store/competition.store';

export function competitionReducer(state: ICompetitionState = COMPETITION_STATE, action:AnyAction): ICompetitionState{
    switch(action.type){
        case SessionActions.LIST_ALL_COMPETITIONS:
            return{
                competitions : [...state.competitions, ...action.competitions ]
            }
        case SessionActions.LIST_ONE_COMPETITION:
            return {
                competitions:[
                     state.competitions.find(t => t.id == action.payload)
                ]

            }
    }
}