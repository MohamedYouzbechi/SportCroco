import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm:FormGroup;
  match:any={};
  constructor(private formBuilder:FormBuilder,
              private matchService:MatchService,
              private router:Router) { }

  ngOnInit() {
    this.addMatchForm = this.formBuilder.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:['']
    })
  }
  addMatch(){
    console.log('match object', this.match);
    this.matchService.addMatch(this.match).subscribe(
      ()=>{
      console.log('Added with success');
      this.router.navigate(['admin']);
      }
    );
  }

}
