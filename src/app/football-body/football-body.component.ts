import { Component, OnInit, Input } from '@angular/core';
import { FootballStoreService } from '../football-store.service';
import { ICompetition } from '../state-manager/app-model/competitions.model'
import { ISeason } from '../state-manager/app-model/competitions.model'
import { IStanding, Competition } from '../state-manager/app-model/standing.model'
import { IStand } from '../state-manager/app-model/standing.model'
import { ITable } from '../state-manager/app-model/standing.model'
import { Observable } from 'rxjs'
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../state-manager/app.reducers';

@Component({
  selector: 'app-football-body',
  templateUrl: './football-body.component.html',
  styleUrls: ['./football-body.component.scss']
})
export class FootballBodyComponent implements OnInit {

  public comp: any;
  //public competition: ICompetition[];
  public teams: IStand[];
  public competition: Competition[];
  public teamStanding: any;
  public tables: ITable[];
  public iStandings: IStanding
  public showLoading: boolean = false;
  public competitionTitle: any;
  public logoImg:any



  @Input() competitions: Observable<ICompetition>;
  @Input() teamstanding: Observable<IStand[]>;
  @select() competitions$: Observable<ICompetition[]>;
  @select() standing$: Observable<IStanding[]>;



  logo = [
    {
      id: 1,
      src: '../../assets/images/arsenal-logo.svg',
      alt: 'Arsenal Logo'
    },
    {
      id: 2,
      src: '../../assets/images/chelsea-logo.svg',
      alt: 'Chelsea Logo'
    },
    {
      id: 3,
      src: '../../assets/images/everton-logo.svg',
      alt: 'EvertonLogo'
    },
    {
      id: 4,
      src: '../../assets/images/liverpool-logo.svg',
      alt: 'LiverPool Logo'
    },
    {
      id: 5,
      src: '../../assets/images/manu-u-logo.svg',
      alt: 'ManU Logo'
    },
    {
      id: 6,
      src: '../../assets/images/manu-u-logo.svg',
      alt: 'Man City  Logo'
    },
  ]


  constructor(private service: FootballStoreService, private ngRedux: NgRedux<IAppState>) {

  }


  ngOnInit() {


    //this.loadCompetition();
    this.getTables(2014)
    this.getLogo();



    this.getTeamsForCompetition(2003)

    this.getTeamStanding(2016)
    this.standing$.subscribe({
      next: item => item.map((item) => {

        this.teams = item.standings

        for (let i in this.teams) {
          this.comp = this.teams[i].table;
          //this.showLoading = true;
        }

        this.competitionTitle = item.competition;
        console.log(this.teams)
      }),
      error: err => console.error("Something went wrong"),
      complete: () => console.log("Okay")
    })


  }


  getTeamsForCompetition(id: number) {
    this.service.getAllMatchesForCompetition(id)
  }

  getTables(id: number) {

  }

  loadCompetition() {

  }

  getTeamStanding(year) {
    this.service.getTeamStanding(year)
  }
  getLogo(){
    for(let i =0; i < this.logo.length; i++){
      return this.logoImg = this.logo[i].src
    }
  }

}
