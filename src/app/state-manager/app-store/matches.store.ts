import {IMatch} from '../app-model/match.model';

export interface IMatchState {
    matches:IMatch[]
}

export const MATCHE_INITIAL_STATE: IMatchState = {
    matches: []
}