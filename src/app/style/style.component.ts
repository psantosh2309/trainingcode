import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  public myColor = "red";
  
  public myStyles = {
    color : "gold",
    fontStyle: "italic",
    fontSize : "50px",
    }

  constructor() { }

  ngOnInit(): void {
  }

}
