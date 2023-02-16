import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm :FormGroup ;
  id : any ;
  title : any ;
  players : any;
  player : any = {};
  constructor(private formBuilder : FormBuilder, private router : Router,  private activatedRoute :ActivatedRoute, private playerService : PlayerService) { }

  ngOnInit(): void {

    this.playerForm = this.formBuilder.group({
      firstName : ['',[Validators.required,Validators.minLength(3)]],
      lastName : ['',[Validators.required,Validators.minLength(5)]],
      post : ['',[Validators.required]],
      team : ['',[Validators.required,Validators.minLength(3)]],
      nTshirt : ['',[Validators.required]],
      dateOfBirth : ['',[Validators.required]],
    })
    //this.players = JSON.parse(localStorage.getItem("players")|| "[]")
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    if(this.id){
      this.title = "Edit Player"
      this.playerService.getPlayer(this.id).subscribe((data)=>{
        this.player = data.player;
        console.log(" this.player ",  this.player )
      })
  
      // for (var i = 0 ; i< this.players.length; i++){
      //   if(this.players[i].id == this.id){
      //     this.player = this.players[i]
      //   }
      // }
    }else{
      this.title = "Add Player"
    }

  }
 
  savePlayer(){
    console.log(this.player)
      if(this.id){
        // for (var i = 0 ; i< this.players.length; i++){
        //     if(this.players[i].id == this.id){
        //       player.id = this.id;
        //       this.players[i] = player ;
        //     break;
        //     }
        //   }
        //   localStorage.setItem("players",JSON.stringify(this.players))
        this.playerService.updatePlayer(this.player).subscribe((data)=>{
          console.log("player updated", data.message)
        })

      }
      else {
        // let idPlayer = JSON.parse(localStorage.getItem("idPlayer")|| "1")
        // let players = JSON.parse(localStorage.getItem("players")|| "[]")
        // console.log("idPlayer",idPlayer)
        // player.id = idPlayer;
        
    
        // players.push(player);
        // console.log(players)
        // localStorage.setItem("players",JSON.stringify(players))
        // localStorage.setItem("idPlayer",idPlayer + 1)
        this.playerService.createPlayer(this.player).subscribe((data)=>{
          console.log("player created", data.message)
        })
      }
     
       this.router.navigate(['dashboard'])
  
  
  }
}
