import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {
  @Input() childPartie: any;
  constructor() { }

  ngOnInit(): void {
  }
  getColor(scoreOne, scoreTwo){
   if(scoreOne > scoreTwo){
    return "green" ;
   }else if(scoreOne < scoreTwo){
    return "red" ;
   }else {
    return "yellow" ;
   }
  }
 

}
