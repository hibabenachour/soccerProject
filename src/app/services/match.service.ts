
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MatchService {
  url : string = "http://localhost:3000/api/";
  constructor(private httpClient : HttpClient) {}
  public getMatches(){
    return this.httpClient.get<{matches : any}>(this.url + "matches")
  }
  public getMatch(matchId){
    return this.httpClient.get<{match : any}>(`${this.url + 'matches'}/${matchId}`)
  }
  public createMatch(match){
    return this.httpClient.post<{message : any}>(`${this.url + 'matches'}`, match)
   
 }
 
 public deleteMatch(matchId){
    return this.httpClient.delete<{message : any}>(`${this.url + 'matches'}/${matchId}`)
 }
 public updateMatch(match){
    return this.httpClient.put<{message : any}>(`${this.url + 'matches'}/${match._id}`, match)
 }
//  public login(match){
//     return this.httpClient.post<{message : any, findedUser :any}>(`${this.url + 'login'}`, match)
//  }
}
