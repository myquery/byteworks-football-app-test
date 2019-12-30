import {IPlayersState} from '../app-store/players.store'
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
  
    set players(nextState: IPlayersState) {
      this._state$.next(nextState);
    }

    getPlayers(){
      this.state$.subscribe(item => item)
    }
  
  }