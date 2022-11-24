import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';


@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {
  
  public data = "";

  constructor(private service: SampleService) { }

  ngOnInit(): void {
  }

}
