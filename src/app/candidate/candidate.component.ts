import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/Candidate';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  candidate:Candidate;

  constructor(private adminService:AdminService) {
  }

  ngOnInit() {
    this.candidate=new Candidate("Varun","Va7877","BJ4018","Delhi","Delhi","1997-03-30","8790213645","Hno  16 Mye Villas", "kvarun10@gmail.com");
  }
  
  initiateCandidate(){
    console.log(this.candidate);
   this.adminService.addCandidate(this.candidate).subscribe(data=>{
     console.log({data});
   });
  }
}
