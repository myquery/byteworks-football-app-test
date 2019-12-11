import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
