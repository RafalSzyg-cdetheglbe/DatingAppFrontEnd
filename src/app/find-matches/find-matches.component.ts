import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from '../matches/model/match';
import { MatchService } from '../matches/service/match.service';
import { User } from '../user/model/user';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-find-matches',
  templateUrl: './find-matches.component.html',
  styleUrls: ['./find-matches.component.css']
})
export class FindMatchesComponent implements OnInit {

users!:User[];
userId: number;
match!:Match;


constructor(private route:Router, private userService:UserService,private activatedRoute:ActivatedRoute,private matchService:MatchService) {
  this.activatedRoute.paramMap.subscribe(p=>{this.userId=parseInt(p.get("id")!)})
  this.match=new Match();
 }

ngOnInit(): void {
this.userService.findMatching(this.userId).subscribe(data=>{this.users=data})
}

goAddMatch(id:number){
  console.log(this.match);
  this.match.user=id;
  
  this.matchService.addMatch(this.userId,this.match).subscribe(result =>  this.route.navigate(['/dashboard/'+this.userId]));
}


}
