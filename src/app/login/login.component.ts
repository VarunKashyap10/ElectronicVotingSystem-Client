import { Component, OnInit } from '@angular/core';

import {Credentials} from '../models/Credentials';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  powers = ['Admin','Normal User', 'Electoral Officer '];
  submitted = false;
  model:Credentials;
  data:Credentials;
  constructor(private router: Router, private loginService:LoginServiceService) { }

  ngOnInit() {
    this.model = new Credentials("VK9999", "qwerty1","", 0);
  }


  onSubmit() { this.submitted = true; }

  newUser(){
    this.model=new Credentials("","","",0);
  }

  initiateLogin():void{
    console.log(this.model.toString());
    this.loginService.requestLogin(this.model).subscribe(data=>{
      alert("Inititated Login");
      console.log(data);
      if(data.userType=='A'){
        console.log('Admin User');
        this.router.navigate(['/admin',data.userID]);
      }
      else if(data.userType='U'){
        console.log("Normal User");
        this.router.navigate(['/normalUser',data.userID]);
      }
    });

  }

}
