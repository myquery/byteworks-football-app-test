import {IPlayers} from '../app-model/players.model';

export interface IPlayersState {
    players:IPlayers[]
}

export const PLAYERS_INITIAL_STATE : IPlayersState = {
    players: []
}