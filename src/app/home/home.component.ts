import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  name = "Home";

  public courseId ="123";
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
