import {ICompetition} from '../app-model/competitions.model';
export interface ICompetitionState{
    competitions:ICompetition[]
}

export const COMPETITION_STATE : ICompetitionState = {
    
    competitions:[]
}



