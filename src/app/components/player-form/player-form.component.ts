import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  addPlayerForm:FormGroup;
  player:any={};
  title:string="Add";
  id:any;
  constructor(private formBuilder:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private playerService:PlayerService,
              private router:Router) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.playerService.getPlayerById(this.id).subscribe(
        (data)=>{
          this.player = data.findedPlayer;
        }
      );
      this.title="Edit"
    }

    this.addPlayerForm = this.formBuilder.group({
      name:[''],
      age:[''],
      nbr:[''],
      post:['']
    })
  }
  addEditPlayer(){
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe(
        (data)=>{
        console.log('Edit with success', data.message);
        this.router.navigate(['admin']);
        }
      );
    } else {
      this.playerService.addPlayer(this.player).subscribe(
        ()=>{
        console.log('Add with success');
        this.router.navigate(['admin']);
        });
        console.log('Add with success2');
    };
  }

}
