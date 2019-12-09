import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './app.state';

@Injectable()
export class SessionActions {
  static LIST_ALL_COMPETITIONS = 'LIST_ALL_COMPETITIONS';
  static LIST_ONE_COMPETITION = 'LIST_ONE_COMPETITION';
  static LIST_ALL_TEAMS= 'LIST_ALL_TEAMS';
  static LIST_TEAM_STANDING = 'LIST_TEAM_STANDING';
  static LIST_ALL_MATCHES = 'LIST_ALL_MATCHES';
  static LIST_TOP_SCORER_FOR_COMPETITION = 'LIST_TOP_SCORER_FOR_COMPETITION';
  static LIST_MATCHES_FOR_COMPETITION = 'LIST_MATCHES_FOR_COMPETITION';
  static LIST_MATCHES_FOR_TEAM = 'LIST_MATCHES_FOR_TEAM';
  static LIST_TEAM = 'LIST_TEAM';
  static LIST_ALL_AREAS = 'LIST_ALL_AREAS';
  static LIST_ONE_AREA = 'LIST_ONE_AREA';
  static LIST_ONE_PLAYER = 'LIST_ONE_PLAYER';
  static LIST_ALL_MATCHES_ONE_PLAYER = 'LIST_ALL_MATCHES_ONE_PLAYER';
  

  constructor(private ngRedux: NgRedux<IAppState>) {}


  listAllCompetitions() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_COMPETITIONS });
  };

  listOneCompetition(year) {
    this.ngRedux.dispatch({ type: SessionActions.LIST_ONE_COMPETITION});
  };

  listAllTeams() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_TEAMS });
  };

  listTeamStanding() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_TEAM_STANDING });
  };

  listAllMatches() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_MATCHES });
  };

  listTopScorerForCompetition() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_TOP_SCORER_FOR_COMPETITION });
  };

  listMatchesForCompetition() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_MATCHES_FOR_COMPETITION });
  };

  listMatchesForTeam() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_MATCHES_FOR_TEAM });
  };

  listTeam() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_TEAM });
  };

  listAllAreas() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_AREAS });
  };

  listOneArea() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_ONE_AREA });
  };

  listOnePlayer() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_ONE_PLAYER });
  };

  listAllMatchesOnePlayer() {
    this.ngRedux.dispatch({ type: SessionActions.LIST_ALL_MATCHES_ONE_PLAYER });
  };

}