import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ICompetition} from '../state-manager/app-model/competitions.model'

@Component({
  selector: 'app-football-header',
  templateUrl: './football-header.component.html',
  styleUrls: ['./football-header.component.scss'],
  encapsulation: ViewEncapsulation.None 
 
})
export class FootballHeaderComponent implements OnInit {
  
  competition: ICompetition[];

  constructor() { }

  ngOnInit() {
  }

}
