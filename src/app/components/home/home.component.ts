import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x:any;
  constructor() { }

  ngOnInit() {
    this.x = {id:1, teamOne:"FCB", teamTwo:"RMD",scoreOne:"2",scoreTwo:"3"}
  }

}
