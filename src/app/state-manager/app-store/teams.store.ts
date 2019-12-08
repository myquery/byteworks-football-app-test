import {ITeam} from '../app-model/teams.model';

export interface ITeamState {
    teams : ITeam[]
}

export const TEAM_INITIAL_STATE :ITeamState = {
    teams: []
}