import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "Java,Angular";

  public msg = "Welcome to Angular";

  public date = new Date();
  
  public sample = 1234;
  public sample1 = "Kumar";
  public person = {

    firstName : this.sample,
    SecondName: this.sample1
  }

  constructor() { }

  ngOnInit(): void {
  }

}
