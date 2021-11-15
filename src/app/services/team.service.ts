import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamURL:string="http://localhost:3000/teams";
  // teamURL:string="api/teams";
  constructor(private httpClient:HttpClient) { }

  getAllTeams(){
    return this.httpClient.get<{teamsRes:any}>(this.teamURL);
  }
  getTeamById(id:number){
    return this.httpClient.get<{findedTeam:any}>(`${this.teamURL}/${id}`);
  }
  deleteTeamById(id:number){
    return this.httpClient.delete<{message:string}>(`${this.teamURL}/${id}`);
  }
  addTeam(team:any){
    return this.httpClient.post<{message:string}>(this.teamURL, team);
  }
  editTeam(team){
    return this.httpClient.put<{message:string}>(`${this.teamURL}/${team._id}`, team);
  }
}
