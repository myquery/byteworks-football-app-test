import {AnyAction} from 'redux'
//import {SessionActions} from '../app.actions'
import {IMatchState} from '../app-store/matches.store';
import {MATCHE_INITIAL_STATE}  from '../app-store/matches.store';

import { BehaviorSubject } from 'rxjs';
import {Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class MatchStore {

    private _state$: BehaviorSubject<IMatchState>;
    public state$: Observable<IMatchState>;
  
    constructor (initialState: IMatchState) {
      this._state$ = new BehaviorSubject(initialState);
      this.state$ = this._state$.asObservable() as Observable<IMatchState>;
    }
  
    get matches(): IMatchState {
      return this._state$.getValue();
    }
  
    setState (nextState: IMatchState): void {
      this._state$.next(nextState);
    }
  
  }