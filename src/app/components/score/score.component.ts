import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  matches  : any ;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.matches = JSON.parse(localStorage.getItem("matches")|| "[]")

  }
  update(e){
    this.matches = e;
  }

}
