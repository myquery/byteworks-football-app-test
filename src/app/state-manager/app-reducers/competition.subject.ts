import {AnyAction} from 'redux'
import {ICompetitionState} from '../app-store/competition.store';


import { BehaviorSubject } from 'rxjs';
import {Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {COMPETITION_STATE}  from '../app-store/competition.store';

export class CompetitionStore {

    private _state$: BehaviorSubject<ICompetitionState>;
    public state$: Observable<ICompetitionState>;
  
    constructor (initialState: ICompetitionState) {
      this._state$ = new BehaviorSubject(initialState);
      this.state$ = this._state$.asObservable() as Observable<ICompetitionState>;
    }
  
    get competitions(): ICompetitionState {
      return this._state$.getValue();
    }
  
    setState (nextState: ICompetitionState): void {
      this._state$.next(nextState);
    }
  
  }