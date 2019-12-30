import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ICompetition} from '../state-manager/app-model/competitions.model'
import {FootballStoreService} from '../football-store.service';

@Component({
  selector: 'app-football-header',
  templateUrl: './football-header.component.html',
  styleUrls: ['./football-header.component.scss'],
  encapsulation: ViewEncapsulation.None 
 
})
export class FootballHeaderComponent implements OnInit {
  
  public comp : any;
  public competition: ICompetition[];
  public menu : any;
  public menuItem : ICompetition[]

  constructor(private service : FootballStoreService ) { }

  ngOnInit() {
    //this.getCompetitions();
    //this.getHeader()


  }

  // getCompetitions(){
  //   this.service.listAllCompetition().subscribe(
  //     (res) => {
  //       this.comp = res;
  //       this.competition = this.comp.competitions;
  //     }
  //   )
  // }

  // getHeader(){
  //   this.service.listHeaderMenu().subscribe(item => {
  //     this.menu = item;
  //     this.menuItem = this.menu.competitions

  //   })
  // }

}
