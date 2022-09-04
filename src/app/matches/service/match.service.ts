import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../model/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

private matchUrl!:string;

  constructor(private http: HttpClient) { 
    this.matchUrl="http://localhost:8080/api/match"
  }

  public addMatch(actualId:number,match:Match) {
    return this.http.post<Match>(this.matchUrl+'/'+actualId,match);
  }

  public getMatches(userId:number){
    return this.http.get<Match[]>(this.matchUrl+'/'+userId)
  }
}
