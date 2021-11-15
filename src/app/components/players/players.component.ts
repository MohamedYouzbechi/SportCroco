import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players : any;
  constructor() { }

  ngOnInit() {
    this.players = [{id:1, name:"Ali", title:'title1', date:'', img1:"assets/images/img_1.jpg", img2:"assets/images/person_1.jpg"},
    {id:2, name:"Ali2", title:'title2', date:'', img1:"assets/images/img_1.jpg", img2:"assets/images/person_1.jpg"},
    {id:3, name:"Ali3", title:'title3', date:'', img1:"assets/images/img_1.jpg", img2:"assets/images/person_1.jpg"},
    {id:4, name:"Ali4", title:'title3', date:'', img1:"assets/images/img_1.jpg", img2:"assets/images/person_1.jpg"}];
  }


}
