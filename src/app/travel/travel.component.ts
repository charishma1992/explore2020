import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  matrixData = [
    {
      "state": "telangana"
    },
    {
      "state": "ap"
    },
    {
      "state": "karnataka"
    },
    {
      "state": "maharashtra"
    },
    {
      "state": "telangana"
    },
    {
      "state": "ap"
    },
    {
      "state": "karnataka"
    },
    {
      "state": "maharashtra"
    },
    {
      "state": "telangana"
    },
    {
      "state": "ap"
    },
    {
      "state": "karnataka"
    },
    {
      "state": "maharashtra"
    }




  ]
  constructor() { }
  set(){
    console.log(event)
  }
  ngOnInit() {
  }

}
