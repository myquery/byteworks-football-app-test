import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer, IAppState, APPINITIALSTATE } from './state-manager/app.state';
import { createEpicMiddleware } from 'redux-observable';
import {  EpicServiceService } from './epic.service.service'
import { FootballHeaderComponent } from './football-header/football-header.component';
import { FootballFooterComponent } from './football-footer/football-footer.component';
import { FootballBodyComponent } from './football-body/football-body.component';


@NgModule({
  declarations: [
    AppComponent,
    FootballHeaderComponent,
    FootballFooterComponent,
    FootballBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgReduxModule
 
  ],
  providers: [EpicServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<IAppState>,
  private epics: EpicServiceService){
    const middleware = [
     //createEpicMiddleware(this.epics.listAllCompetitions)
    ];
    //ngRedux.configureStore(rootReducer, APPINITIALSTATE, middleware);
  }
}
