import {AnyAction} from 'redux'
//import {SessionActions} from '../app.actions'
import {ITeamState} from '../app-store/teams.store';
import {TEAM_INITIAL_STATE}  from '../app-store/teams.store';


import { BehaviorSubject } from 'rxjs';
import {Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


export class TeamStore {

    private _state$: BehaviorSubject<ITeamState>;
    public state$: Observable<ITeamState>;
  
    constructor (initialState: ITeamState) {
      this._state$ = new BehaviorSubject(initialState);
      this.state$ = this._state$.asObservable() as Observable<ITeamState>;
    }
  
    get teams(): ITeamState {
      return this._state$.getValue();
    }
  
    setTeams (nextState: ITeamState): void {
      this._state$.next(nextState);
    }
  
  }