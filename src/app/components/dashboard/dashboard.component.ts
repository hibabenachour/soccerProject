import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatchService } from 'src/app/services/match.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  matches : any = [] ;
  players : any = [] ;
  constructor(private router : Router, private matchService : MatchService, private playerService : PlayerService) { }

  ngOnInit(): void {
    // this.matches = JSON.parse(localStorage.getItem("matches")|| "[]")
    // this.players = JSON.parse(localStorage.getItem("players")|| "[]")
    // console.log(" this.matches ",  this.matches )
    // console.log(" this.players ",  this.players )
    this.matchService.getMatches().subscribe((data)=>{
      console.log(data.matches);
      this.matches = data.matches;
      
  })
  this.playerService.getPlayers().subscribe((data)=>{
    console.log(data.players);
    this.players = data.players;
    
})


  }
  editMatch(id){
    
      this.router.navigate([`editMatch/${id}`])
    
    
  }
   deleteMatch(id){
    // let pos;
    // for (var i = 0 ; i < this.matches.length; i++){
    //   if(this.matches[i].id == id){
       
    //     pos = i ;
    //   }
    // }
    // this.matches.splice(pos,1);
   
    // localStorage.setItem("matches",JSON.stringify( this.matches))
    this.matchService.deleteMatch(id).subscribe((data)=>{
      console.log("match deleted",data.message)
      this.matchService.getMatches().subscribe((data)=>{
        console.log(data.matches);
        this.matches = data.matches;
        
      })
    })
   
  }
  
  editPlayer(id){
    
    this.router.navigate([`editPlayer/${id}`])
  
  
}
 deletePlayer(id){
  // let pos;
  // for (var i = 0 ; i < this.players.length; i++){
  //   if(this.players[i].id == id){
     
  //     pos = i ;
  //   }
  // }
  // this.players.splice(pos,1);
 
  // localStorage.setItem("players",JSON.stringify( this.players))
this.playerService.deletePlayer(id).subscribe((data)=>{
  console.log("player deleted", data.message)
  this.playerService.getPlayers().subscribe((data)=>{
    console.log(data.players);
    this.players = data.players;
    
  })
})
  

}
  

}
