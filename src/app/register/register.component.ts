import { Component, OnInit } from '@angular/core';
//import { Profile } from 'selenium-webdriver/firefox';

import {Profile} from "../models/Profile";
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';
import  '../../assets/scripts/progressbar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profile:Profile;
  genders=["Male","Female"];
  constructor(private loginService:LoginServiceService,private router:Router) {
    this.profile=new Profile("Varun","Kashyap","Male","1997-03-30","Hyderabad","Chengicherla",
    "Mallapur","Telangana","500076","8790213645","kvarun10@gmail.com","qwerty1");
   }

  ngOnInit() {
    //this.updateProgress();
  }

  ngOnChanges(){
    //this.updateProgress();
  }

  newUser(){
    this.profile=new Profile("","","","","","","","","","","","");
  }

  initiateRegister(pro:Profile){
    console.log(pro.toString());
    this.loginService.requestRegister(pro).subscribe(data=>{alert("Inititated Register");});
    this.router.navigate(["/login"]);
  }

  updateProgress() {
    //var pro=require("../../assets/scripts/progress");
    var bar = new ProgressBar.Circle("progress-circle", {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });
    
    bar.animate(0.5);  
  }
}
