import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

authRequest:any={
  "email":"kobieta@mail.pl",
  "password":"password"
};


  constructor(private service:JwtClientService) { }

  ngOnInit(): void {
    console.log("jestem");
    this.getAccesToken(this.authRequest)
  }

public getAccesToken(authRequest:any){
  console.log(authRequest);
let resp=this.service.generateToken(authRequest);
console.log();
resp.subscribe(dada=>console.log("CHUJ"));
}

}
