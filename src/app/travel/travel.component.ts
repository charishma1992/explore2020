import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  matrixData: any;
  constructor(private http: CommonService) { }
  set() {
    console.log(event)
  }


  ngOnInit() {
  
  }

}
