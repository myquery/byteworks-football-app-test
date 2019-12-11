import { Component, OnInit } from '@angular/core';
import {FootballStoreService} from '../football-store.service'

@Component({
  selector: 'app-football-body',
  templateUrl: './football-body.component.html',
  styleUrls: ['./football-body.component.scss']
})
export class FootballBodyComponent implements OnInit {

  constructor(private service : FootballStoreService) { 
    
  }

  ngOnInit() {
  this.service.listAllCompetition().subscribe(s=> console.log(s));
  //this.service.getCompetition(1/1/2011).subscribe(s=>console.log(s))
  }

}
