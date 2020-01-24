import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ICompetition} from '../state-manager/app-model/competitions.model'
import {FootballStoreService} from '../football-store.service';
import { Observable } from 'rxjs';
import { select } from '@angular-redux/store';

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


  @select() competitions$: Observable<ICompetition>;

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

   
  }


}
