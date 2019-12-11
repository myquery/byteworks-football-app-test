import {AnyAction} from 'redux'
import {IPlayersState} from '../app-store/players.store'
import {TEAM_INITIAL_STATE}  from '../app-store/teams.store';


import { BehaviorSubject } from 'rxjs';
import {Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export class PlayersStore {

    private _state$: BehaviorSubject<IPlayersState>;
    public state$: Observable<IPlayersState>;
  
    constructor (initialState: IPlayersState) {
      this._state$ = new BehaviorSubject(initialState);
      this.state$ = this._state$.asObservable() as Observable<IPlayersState>;
    }
  
    get players(): IPlayersState {
      return this._state$.getValue();
    }
  
    setPlayers (nextState: IPlayersState): void {
      this._state$.next(nextState);
    }
  
  }