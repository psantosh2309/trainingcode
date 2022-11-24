import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateref',
  templateUrl: './templateref.component.html',
  styleUrls: ['./templateref.component.css']
})
export class TemplaterefComponent implements OnInit {
   
  
  constructor() { }

  ngOnInit(): void {
  }

  message(val:any){
   console.log(val);
  }

 

}
