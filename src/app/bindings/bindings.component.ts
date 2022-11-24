import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {


  public myText = "TextColor";

  public myText1 = "TextSize";

  public myText2 = "TextStyle";
  
  public required = true;
  public Group = {
    "TextColor": this.required,
    "TextSize" : this.required,
    "TextStyle": this.required
  }


  constructor() { }


  ngOnInit(): void {
  }

}
