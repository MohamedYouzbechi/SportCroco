import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  teams:any;
  constructor(private teamServive:TeamService, private router:Router) { }

  ngOnInit() {
    this.getAllTeams();
  }

  deleteTeam(id:number){
    this.teamServive.deleteTeamById(id).subscribe(
      (data)=>{ console.log("Delete with success", data.message);
            this.getAllTeams();
          }
    )
  }

  getAllTeams(){
    this.teamServive.getAllTeams().subscribe(
      (data)=>{this.teams = data.teamsRes}
    )
  }

  displayTeam(x){
    this.router.navigate([`displayTeam/${x}`]);
  }

  editTeam(id){
    this.router.navigate([`teamForm/${id}`]);
  }

}
