import {IStanding, IStand} from '../app-model/standing.model';

export interface IStandingState {
    standing:IStand[]
}

export const STANDING_INITAIL_STATE:IStandingState = {
    standing : []
}