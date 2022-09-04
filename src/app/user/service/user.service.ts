import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users_url: string;
  constructor(private http:HttpClient) { 
    this.users_url= `http://localhost:8080/api/users`;
  }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.users_url);
  }
  findOne(id:number):Observable<User[]>{
    return this.http.get<User[]>(this.users_url+'/'+id);
  }

  findMatching(id:number):Observable<User[]>{
    return this.http.get<User[]>(this.users_url+'/matching/'+id);
  }
}
