import { Component, OnInit } from '@angular/core';
import { Party } from '../models/Party';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  party:Party;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.party=new Party("","","","");
  }

  initiateParty(){
    this.adminService.addParty(this.party).subscribe(data=>{
      console.log(data);
    });
  }

}
