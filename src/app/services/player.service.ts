import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url : string = "http://localhost:3000/api/";
  constructor(private httpClient : HttpClient) {}
  public getPlayers(){
    return this.httpClient.get<{players : any}>(this.url + "players")
  }
  public getPlayer(playerId){
    return this.httpClient.get<{player : any}>(`${this.url + 'players'}/${playerId}`)
  }
  public createPlayer(player){
    return this.httpClient.post<{message : any}>(`${this.url + 'players'}`, player)
 }
 
 public deletePlayer(playerId){
    return this.httpClient.delete<{message : any}>(`${this.url + 'players'}/${playerId}`)
 }
 public updatePlayer(player){
    return this.httpClient.put<{message : any}>(`${this.url + 'players'}/${player._id}`, player)
 }
//  public login(player){
//     return this.httpClient.post<{message : any, findedUser :any}>(`${this.url + 'login'}`, player)
//  }
}