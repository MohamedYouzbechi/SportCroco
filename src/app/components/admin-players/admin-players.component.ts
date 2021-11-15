import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-admin-players',
  templateUrl: './admin-players.component.html',
  styleUrls: ['./admin-players.component.css']
})
export class AdminPlayersComponent implements OnInit {
  players:any;
  constructor(private router:Router, private playerService:PlayerService) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  deletePlayer(id:number){
    this.playerService.deletePlayerById(id).subscribe(
      (data)=>{ console.log("Delete with success", data.message);
            this.getAllPlayers();
          }
    )
  }

  getAllPlayers(){
    this.playerService.getAllPlayers().subscribe(
      (data)=>{this.players = data.playersRes}
    )
  }

  displayPlayer(x){
    this.router.navigate([`displayPlayer/${x}`]);
  }

  editPlayer(id){
    this.router.navigate([`playerForm/${id}`]);
  }

}
