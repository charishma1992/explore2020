import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {
  matrixData: any;
  constructor(private http: CommonService) { }
  openCapital(statename) {
   
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
      }
    });
  }
  ngOnInit() {
    this.http.getGridData().subscribe(data => {
      this.matrixData = data;
      // console.log('statename', this.matrixData);
      this.matrixData.forEach(element => {
        element.showCapitalData = false;
        element.showCapitalDataColumn = false;
      });
    })
  }

}
