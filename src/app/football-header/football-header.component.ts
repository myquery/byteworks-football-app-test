import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ICompetition} from '../state-manager/app-model/competitions.model'
import {FootballStoreService} from '../football-store.service';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';
import { IStand, Competition, ITable, IStanding } from '../state-manager/app-model/standing.model';

@Component({
  selector: 'app-football-header',
  templateUrl: './football-header.component.html',
  styleUrls: ['./football-header.component.scss'],
  encapsulation: ViewEncapsulation.None 
 
})
export class FootballHeaderComponent implements OnInit {
  
  public comp : any;
  public menu : any;
  public menuItem : ICompetition
  public teams: IStand[];
  public competition: Competition[];
  public teamStanding: any;
  public tables: ITable[];
  public iStandings: IStanding
  public showLoading: boolean = false;
  public competitionTitle: any;
  public logoImg:any



  @select() competitions$: Observable<ICompetition>;
  @select() standing$: Observable<IStanding[]>;

  constructor(private service : FootballStoreService ) { 
    
  }

  ngOnInit() {
    this.service.listHeaderMenu()
    
    
    this.competitions$.subscribe({
      next: item => {
       this.menuItem = item
       for (let i in  this.menuItem) {
        this.comp =  this.menuItem[i].competitions;
        //this.showLoading = true;
      }
       console.log(this.menuItem)
        
      },
      error: err => console.log("Error Occurred"),
      complete: ()=> console.log("Completed")
    })

    // this.getTeamStanding(2016)
    // this.standing$.subscribe({
    //   next: item => item.map((item) => {

    //     this.teams = item.standings
    //     this.competition = item.competition

    //     for (let i in this.competition) {
    //        this.menu = this.competition[i];
        
    //     }

    //     this.competitionTitle = item.competition;
    //     console.log(this.teams)
    //   }),
    //   error: err => console.error("Something went wrong"),
    //   complete: () => console.log("Okay")
    // })
  }

  getTeamStanding(year) {
    this.service.getTeamStanding(year)
  }
}
