import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from './model/match';
import { MatchService } from './service/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  userId: number;
  matches:Match[];
  constructor(private matchService:MatchService, http:HttpClient,private route:Router, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(p=>{this.userId=parseInt(p.get("id")!)})
   }

  ngOnInit(): void {
    this.matchService.getMatches(this.userId).subscribe(data=>{this.matches=data})
  }
  

  
}
