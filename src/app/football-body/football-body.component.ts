import { Component, OnInit, Input } from '@angular/core';
import {FootballStoreService} from '../football-store.service';
import {ICompetition} from '../state-manager/app-model/competitions.model'
import {ISeason} from '../state-manager/app-model/competitions.model'
import {IStanding} from '../state-manager/app-model/standing.model'
import {IStand} from '../state-manager/app-model/standing.model'
import {ITable} from '../state-manager/app-model/standing.model'
import {Observable} from 'rxjs'
import { CompetitionStore } from '../state-manager/app-reducers/competition.subject';
import { NgRedux, select } from '@angular-redux/store';
//import { SessionActions } from '../state-manager/app.actions';
import { IAppState } from '../state-manager/app.reducers';

@Component({
  selector: 'app-football-body',
  templateUrl: './football-body.component.html',
  styleUrls: ['./football-body.component.scss']
})
export class FootballBodyComponent implements OnInit {

  public comp : any;
  //public competition: ICompetition[];
  public teams : IStand[];
  public competition: ICompetition;
  public teamStanding: any;
  public tables: ITable[];
  public iStandings: IStanding
  public showLoading : boolean = false;
  public competitionTitle:any;


  @Input() competitions: Observable<ICompetition>;
  @Input() teamstanding: Observable<IStand[]>;
 

  logo = [
    {
      id: 1,
      src: '../../assets/images/arsenal-logo.svg',
      alt:'Arsenal Logo'
    },
    {
      id: 2,
      src: '../../assets/images/chelsea-logo.svg',
      alt:'Chelsea Logo'
    },
    {
      id: 3,
      src: '../../assets/images/everton-logo.svg',
      alt:'EvertonLogo'
    },
    {
      id: 4,
      src: '../../assets/images/liverpool-logo.svg',
      alt:'LiverPool Logo'
    },
    {
      id: 5,
      src: '../../assets/images/manu-u-logo.svg',
      alt:'ManU Logo'
    },
    {
      id: 6,
      src: '../../assets/images/manu-u-logo.svg',
      alt:'Man City  Logo'
    },
  ]
  

  constructor(private service : FootballStoreService, private ngRedux :NgRedux<IAppState>) { 
    //this.competition_id
   // this.title();
   console.log(this.competition)
  
  }

  //constructor(private service : CompetitionStore){}

  ngOnInit() {
  

    //this.loadCompetition();
    this.getTables(2014)
  // this.service.listAllCompetition().subscribe((s) => {
  //   //console.log(s)
  //   this.comp = s;
  //   this.competition = this.comp.competitions
 
  // }, 
  //   );

   this.getTeamsForCompetition(2003)

 //console.log(this.standing)
    

  }

  title(){
    this.service.competitionTable.subscribe(item => {
       this.competitionTitle = item
    })
  }
  getTeamsForCompetition(id:number){
    this.service. getAllMatchesForCompetition(id).subscribe( res =>{
      //console.log(res)
      //this.teamStanding = res
    }
      
      
      //this.teams = this.teamStanding.standing.table
    );
    //console.log(this.teamStanding)
  }

  getTables(id:number){
    // this.showLoading
    // this.service.getTeamStanding(id).subscribe((item : IStand[]) => {
     
  
    //    for(let i in item){
    //      //console.log(item[i].table)
    //      this.comp = item[i].table;
    //      this.showLoading = true;
    //    }
     
     
      
     
     
    // })
  }

  loadCompetition(){
    this.competitions.map(item => {
      this.competition = item
    })
  }


}
