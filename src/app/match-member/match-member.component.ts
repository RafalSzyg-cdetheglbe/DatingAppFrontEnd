import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchMember } from '../MatchMember/model/match-member';
import { MatchMemberService } from '../MatchMember/service/match-member.service';

@Component({
  selector: 'app-match-member',
  templateUrl: './match-member.component.html',
  styleUrls: ['./match-member.component.css']
})
export class MatchMemberComponent implements OnInit {
matchmembers!:MatchMember[];
userId!:number;
constructor(private matchMemberService:MatchMemberService, http:HttpClient,private route:Router, private activatedRoute:ActivatedRoute) {
  this.activatedRoute.paramMap.subscribe(p=>{this.userId=parseInt(p.get("id")!)})
 }

ngOnInit(): void {
  this.matchMemberService.getMatches(this.userId).subscribe(data=>{this.matchmembers=data})
}

goConversation(id:number){
  this.route.navigate(['/messages'+'/'+id+'/'+this.userId]);
}


}
