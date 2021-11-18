import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any;
  // actualDate:Date;
  // name:string = 'Abderrahmen';
  constructor(private matchService:MatchService) { }

  ngOnInit() {
    // this.actualDate = new Date();
    //   this.matches =  [
    //   {id:1, teamOne:"FCB", teamTwo:"RMD",scoreOne:"2",scoreTwo:"3"},
    //   {id:2, teamOne:"Juv", teamTwo:"ATM",scoreOne:"3",scoreTwo:"1"},
    //   {id:3, teamOne:"EST", teamTwo:"CA",scoreOne:"0",scoreTwo:"0"},
    //   {id:4, teamOne:"TUN", teamTwo:"EGY",scoreOne:"4",scoreTwo:"2"}
    //  ];

    this.matchService.getAllMatches().subscribe(
      (data)=> {
        this.matches = data.matchesRes;
      }
    )
  }

  updateMatches(T){
    this.matches = T;
  }

}
