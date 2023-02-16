import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  addMatchForm : FormGroup ;
  match : any = {};
  id : any ;
  title : any ;
  matches : any;
 
  constructor(private formBuilder : FormBuilder,private router : Router,private activatedRoute :ActivatedRoute,private matchService : MatchService) { }

  ngOnInit(): void {
    this.addMatchForm = this.formBuilder.group({
      teamOne : [''],
      teamTwo : [''],
      scoreOne : [''],
      scoreTwo : [''],
      
    })
    //this.matches = JSON.parse(localStorage.getItem("matches")|| "[]")
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id);
  //   this.matchService.getMatches().subscribe((data)=>{
  //     console.log(data.matches);
  //     this.matches = data.matches;
      
  // })
  this.matchService.getMatch(this.id).subscribe(
    (data)=>{
      console.log("data", data)
      this.match = data.match ;
    }

  )
    if(this.id){
      this.title = "Edit Match"
      
  
      // for (var i = 0 ; i< this.matches.length; i++){
      //   if(this.matches[i].id == this.id){
      //     this.match = this.matches[i]
      //   }
      // }
    }else{
      this.title = "Add Match"
    }

  }
  saveMatch(){
   
    if(this.id){
      // for (var i = 0 ; i< this.matches.length; i++){
      //     if(this.matches[i].id == this.id){
      //       this.match.id = this.id;
      //       this.matches[i] = this.match ;
      //     break;
      //     }
      //   }
      //   localStorage.setItem("matches",JSON.stringify(this.matches))
      this.matchService.updateMatch(this.match).subscribe((data)=>{
        console.log("match updated",data.message)
      })

    }
    else {
      console.log(this.match)
      // let idMatch = JSON.parse(localStorage.getItem("idMatch")|| "1")
      // let matches = JSON.parse(localStorage.getItem("matches")|| "[]")
      // this.match.id = idMatch;
      

      // matches.push(this.match);
      // localStorage.setItem("matches",JSON.stringify(matches))
      // localStorage.setItem("idMatch",idMatch + 1)
      this.matchService.createMatch(this.match).subscribe((data)=>{
        console.log("match created",data.message)
      })
        
        
    
    }
   
    this.router.navigate(['dashboard'])

  }

 

 

}
