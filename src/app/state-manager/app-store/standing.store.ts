import {IStanding} from '../app-model/standing.model';

export interface IStandingState {
    standing:IStanding[]
}

export const STANDING_INITAIL_STATE:IStandingState = {
    standing : []
}