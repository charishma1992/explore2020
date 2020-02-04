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
  constructor(private http: CommonService) { }
  openCapital(statename) {
    var table = document.getElementById("mytab1");
    console.log('table data',table,);
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
