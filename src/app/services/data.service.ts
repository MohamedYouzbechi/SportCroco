import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  matches =  [
    {id:1, teamOne:"FCB", teamTwo:"RMD",scoreOne:"2",scoreTwo:"3"},
    {id:2, teamOne:"Juv", teamTwo:"ATM",scoreOne:"3",scoreTwo:"1"},
    {id:3, teamOne:"EST", teamTwo:"CA",scoreOne:"0",scoreTwo:"0"},
    {id:4, teamOne:"TUN", teamTwo:"EGY",scoreOne:"4",scoreTwo:"2"}
   ];

   let  teams =  [
    {id:1, foundation:"22-5-1888", name:'Ess', owner:"CharfEddine", staduim:"Olympique Sousse"},
    {id:2, foundation:"22-5-2000", name:'EST', owner:"Meddeb", staduim:"Olympique Rades"},
    {id:3, foundation:"22-5-2002", name:'CA', owner:"Younsi", staduim:"Olympique Menzeh"},
    {id:4, foundation:"22-5-2010", name:'CSS', owner:"Khmakhem", staduim:"Olympique Mhiri"},
    {id:5, foundation:"22-5-2012", name:'ST', owner:"Hadded", staduim:"Olympique Naifer"}
   ];

  let players = [
    {id:1, name:"Ali", age:'22', nbr:'1', post:"y"},
    {id:2, name:"Ali2", age:'25', nbr:'2', post:"n"},
    {id:3, name:"Ali3", age:'28', nbr:'3', post:"o"},
    {id:4, name:"Ali4", age:'30', nbr:'4', post:"p"}
  ];

   return {matches,teams,players};

  }
}
