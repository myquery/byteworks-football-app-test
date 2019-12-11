import {AnyAction} from 'redux'
//import {SessionActions} from '../app.actions'
import {IStandingState} from '../app-store/standing.store';
import {STANDING_INITAIL_STATE}  from '../app-store/standing.store';

import { BehaviorSubject } from 'rxjs';
import {Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export class TeamStandingStore {

    private _state$: BehaviorSubject<IStandingState>;
    public state$: Observable<IStandingState>;
  
    constructor (initialState: IStandingState) {
      this._state$ = new BehaviorSubject(initialState);
      this.state$ = this._state$.asObservable() as Observable<IStandingState>;
    }
  
    get teamStanding(): IStandingState {
      return this._state$.getValue();
    }
  
    setState (nextState: IStandingState): void {
      this._state$.next(nextState);
    }
  
  }