import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {applyMiddleware, Store, createStore} from 'redux';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import {FootballReducer, initialState, IAppState } from './state-manager/app.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballHeaderComponent } from './football-header/football-header.component';
import { FootballFooterComponent } from './football-footer/football-footer.component';
import { FootballBodyComponent } from './football-body/football-body.component';
import { HamburgerMenuComponent } from './football-header/hamburger-menu/hamburger-menu.component';

export const store: Store<IAppState> = createStore(
  FootballReducer,
  composeWithDevTools(
  applyMiddleware(createLogger())),
  
);

@NgModule({
  declarations: [
    AppComponent,
    FootballHeaderComponent,
    FootballFooterComponent,
    FootballBodyComponent,
    HamburgerMenuComponent
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
  
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
