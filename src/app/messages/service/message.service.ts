import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  private messages_url: string;
  constructor(private http:HttpClient) { 
    this.messages_url= `http://localhost:8080/api/message/`;
  }

  findMatchMessages(matchId:number): Observable<Message[]> {
    return this.http.get<Message[]>(this.messages_url+matchId);
  }

  public send(matchId:number,userId:number,content:string) {
    return this.http.post<Message>(this.messages_url+matchId+'/'+userId,content);
  }

}
