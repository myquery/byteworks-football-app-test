import { Component, OnInit } from '@angular/core';
import {FootballStoreService} from '../football-store.service';
import {ICompetition} from '../state-manager/app-model/competitions.model'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-football-body',
  templateUrl: './football-body.component.html',
  styleUrls: ['./football-body.component.scss']
})
export class FootballBodyComponent implements OnInit {
  competition: ICompetition[];
  

  constructor(private service : FootballStoreService) { 
    
  }

  ngOnInit() {
  this.service.listAllCompetition().subscribe((s:ICompetition[]) => {
    console.log(s)
    this.competition = s
  }, 
    );

  }

}
