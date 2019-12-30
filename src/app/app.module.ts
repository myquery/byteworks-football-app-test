import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import {FootballReducer, initialState, IAppState } from './state-manager/app.reducers';
//import { SessionActions } from './state-manager/app.actions';
import {createEpicMiddleware, ActionsObservable} from 'redux-observable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballHeaderComponent } from './football-header/football-header.component';
import { FootballFooterComponent } from './football-footer/football-footer.component';
import { FootballBodyComponent } from './football-body/football-body.component';
import { EpicServiceService } from './epic.service.service';
import { AnyAction, applyMiddleware } from 'redux';




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
    NgReduxModule,
    
 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  constructor(private ngRedux : NgRedux<IAppState>){
      this.ngRedux.configureStore(
      FootballReducer, 
      initialState,
      [createLogger()]

      
      )
  }
}
