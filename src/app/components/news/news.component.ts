import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any;
  constructor() { }

  ngOnInit() {

    this.news = [{id:1, name:"Ali", title:'title1', date:'', img1:"assets/images/img_1.jpg", img2:"assets/images/person_1.jpg"},
    {id:2, name:"Ali2", title:'title2', date:'', img1:"assets/images/img_1.jpg", img2:"assets/images/person_1.jpg"},
    {id:3, name:"Ali3", title:'title3', date:'', img1:"assets/images/img_1.jpg", img2:"assets/images/person_1.jpg"},
    {id:4, name:"Ali4", title:'title3', date:'', img1:"assets/images/img_1.jpg", img2:"assets/images/person_1.jpg"}];
  }

}
