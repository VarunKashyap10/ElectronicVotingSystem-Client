import { Component, OnInit } from '@angular/core';
import { Election } from '../models/Election';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {
  election:Election;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.election=new Election("IPL", "2018-11-02","Delhi","Delhi","2018-12-10");
  }

  initiateElection(){
    console.log(this.election.toString());
    this.adminService.sendElection(this.election).subscribe(data=>{
      console.log(data.toString());
      
    });
  }

}
