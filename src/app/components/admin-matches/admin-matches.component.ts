import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {

  matches : any;

  constructor(private matchService:MatchService, private router:Router) { }

  ngOnInit() {
    this.getAllMatches();
  }

  deleteMatch(id:number){
    this.matchService.deleteMatcheById(id).subscribe(
      (data)=>{ console.log("Delete with success",data.message);
            this.getAllMatches();
          }
    )
  }

  getAllMatches(){
    this.matchService.getAllMatches().subscribe(
      (data)=>{this.matches = data.matchesRes}
    )
  }

  displayMatch(x){
    this.router.navigate([`displayMatch/${x}`]);
  }

  editMatch(id){
    this.router.navigate([`editMatch/${id}`]);
  }
}
