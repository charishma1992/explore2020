import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  matrixData: any;
  expandState1: any;

  zoom: number = 8; 
  
  // initial center position for the map
  lat: number = 39.817490;
  lng: number = -0.231035;
 
  markers:any=[];

  constructor(private http: CommonService) { }
  openCapital(statename) {
    var table = document.getElementById("mytab1");
    console.log('table data',table,statename);
    this.matrixData.forEach(element => {
      if(element.state === statename){
        element.showCapitalData =  !element.showCapitalData;
      }
    });
  
  }
  openCapitalColumn(statename){
   
    this.matrixData.forEach(element => {

      if(element.state === statename){
      
        element.showCapitalDataColumn =  !element.showCapitalDataColumn;
        if(element.showCapitalDataColumn){
          element.expandState = element.city.length;
          console.log('expandState',element.expandState)
          this.expandState1 = element.city.length;
        }
        else{
          element.expandState = 0;
          this.expandState1 = 0;
        }
      }
    });
  }
  openCity(e){
    console.log('event',e);
  }
  ngOnInit() {

    this.http.getLocation().subscribe(res=>{
     
      for(let data in res.data){
       this.markers.push({
           lat: parseInt(res.data[data].lat),
           long: parseInt(res.data[data].long)
        })
      }
    })

    this.http.getGridData().subscribe(data => {
      this.matrixData = data;
      // console.log('statename', this.matrixData);
      this.matrixData.forEach(element => {
        element.showCapitalData = false;
        element.showCapitalDataColumn = false;
        element.expandState = 0;
      });
    })
  }

}
