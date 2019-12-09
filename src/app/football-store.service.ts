import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class FootballStoreService {

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://api.football-data.org/v2/';
 

  listAllCompetition(){
    const headers = new HttpHeaders()
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin' : 'true',
    //   'X-Authenticated-Client': 'fdff26df84a34e51a99566227ee6801d',
    //   'Access-Control-Allow-Headers': 'Content-Type,Accept'
      
    // });
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    // headers.set('X-Authenticated-Client', 'fdff26df84a34e51a99566227ee6801d');
    return this.http.get(this.BASE_URL+'competitions/', { headers: headers})
  }
}
