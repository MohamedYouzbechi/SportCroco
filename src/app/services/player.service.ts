import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerURL:string="http://localhost:3000/players";
  // playerURL:string="api/players";
  constructor(private httpClient:HttpClient) { }

  getAllPlayers(){
    return this.httpClient.get<{playersRes:any}>(this.playerURL);
  }
  getPlayerById(id:number){
    return this.httpClient.get<{findedPlayer:any}>(`${this.playerURL}/${id}`);
  }
  deletePlayerById(id:number){
    return this.httpClient.delete<{message:string}>(`${this.playerURL}/${id}`);
  }
  addPlayer(player:any){
    return this.httpClient.post<{message:string}>(this.playerURL, player);
  }
  editPlayer(player){
    return this.httpClient.put<{message:string}>(`${this.playerURL}/${player._id}`, player);
  }
}
