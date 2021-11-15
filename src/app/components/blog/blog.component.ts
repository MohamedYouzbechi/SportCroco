import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles : any;
  constructor() { }

  ngOnInit() {
    this.articles = [
      {date:"24/10/2021",title:"title1",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.",img:"assets/images/img_1.jpg"},
      {date:"24/10/2021",title:"title2",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.",img:"assets/images/img_1.jpg"},
      {date:"24/10/2021",title:"title3",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.",img:"assets/images/img_1.jpg"},
      {date:"24/10/2021",title:"title4",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus deserunt saepe tempora dolorem.",img:"assets/images/img_1.jpg"},
    ]
  }

}
