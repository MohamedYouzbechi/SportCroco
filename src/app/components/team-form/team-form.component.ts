import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  addTeamForm:FormGroup;
  team:any={};
  title:string="Add";
  id:any;
  constructor(private formBuilder:FormBuilder, private teamService:TeamService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.teamService.getTeamById(this.id).subscribe(
        (data)=>{
          this.team = data.findedTeam;
        }
      );
      this.title="Edit"
    }


    this.addTeamForm = this.formBuilder.group({
      foundation:[''],
      name:[''],
      owner:[''],
      staduim:['']
    })
  }
  addEditTeam(){
    if (this.id) {
      this.teamService.editTeam(this.team).subscribe(
        (data)=>{
        console.log('Edit with success', data.message);
        this.router.navigate(['admin']);
        }
      );
    } else {
      this.teamService.addTeam(this.team).subscribe(
        (data)=>{
        console.log('Add with success From FE', data.message);
        this.router.navigate(['admin']);
        })
    };
  };

}
