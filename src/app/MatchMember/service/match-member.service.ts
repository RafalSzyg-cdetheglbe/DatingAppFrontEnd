import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatchMember } from '../model/match-member';

@Injectable({
  providedIn: 'root'
})
export class MatchMemberService {

  private matchmemberUrl!:string;

  constructor(private http: HttpClient) { 
    this.matchmemberUrl="http://localhost:8080/api/matchmember"
  }

  public getMatches(userId:number){
    return this.http.get<MatchMember[]>(this.matchmemberUrl+'/'+userId)
  }

}
