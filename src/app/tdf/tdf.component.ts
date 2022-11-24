import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  UserModel = new User("Santosh","Ps@gmail.com","");
 
  constructor() { }

  ngOnInit(): void {
  }

 

}
