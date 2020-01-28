import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

declare var $:any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  data: any = [];
  data1: any;
  code: any;
  chartHeading: any;
  schemeCatogery: any;
  latestDate: any;
  latestNav: any;
  increment: any;
  filterGraph = ['1Week', '3Months', '6Months', '1Year', '3Years', '5Years', 'All'];
  period: any;
  xAxis: any;
  LumpsumProfit: any;
  SIPProfit: any;
  yearlyLumpSumReturns: any = [];
  yearlySIPReturns: any = [];
  total_amount_invested: any;
  sipForm: any;
  sipCalculated: any;
  sipLoader: any;
  MaturityAmt:any;
  holidays: any = [
    {
      'year': '2019',
      'holidays': [
        {
          'date': 'March 21, 2019'
        },
        {
          'date': 'April 17, 2019'
        },
        {
          'date': 'April 19, 2019'
        },
        {
          'date': 'May 01, 2019'
        },
        {
          'date': 'June 05, 2019'
        },
        {
          'date': 'August 12, 2019'
        },
        {
          'date': 'August 15, 2019'
        },
        {
          'date': 'September 02, 2019'
        },
        {
          'date': 'September 10, 2019'
        },
        {
          'date': 'October 02, 2019'
        },
        {
          'date': 'October 08, 2019'
        },
        {
          'date': 'October 28, 2019'
        },
        {
          'date': 'November 12, 2019'
        },
        {
          'date': 'December 25, 2019'
        }

      ]
    },
    {
      'year': '2018',
      'holidays': [
        {
          'date': 'January 26, 2018'
        },
        {
          'date': 'February 13, 2018'
        },
        {
          'date': 'March 02, 2018'
        },
        {
          'date': 'March 30, 2018'
        },
        {
          'date': 'May 01, 2018'
        },
        {
          'date': 'May 22, 2018'
        },
        {
          'date': 'August 15, 2018'
        },
        {
          'date': 'September 13, 2018'
        },
        {
          'date': 'September 20, 2018'
        },
        {
          'date': 'October 02, 2018'
        },
        {
          'date': 'October 18, 2018'
        },
        {
          'date': 'November 07, 2018'
        },
        {
          'date': 'November 08, 2018'
        },
        {
          'date': 'November 23, 2018'
        },
        {
          'date': 'December 25, 2018'
        }

      ]
    },
    {
      'year': '2017',
      'holidays': [
        {
          'date': 'January 26, 2017'
        },
        {
          'date': 'February 24, 2017'
        },
        {
          'date': 'March 13, 2017'
        },
        {
          'date': 'April 04, 2017'
        },
        {
          'date': 'April 14, 2017'
        },
        {
          'date': 'May 01, 2017'
        },
        {
          'date': 'June 26, 2017'
        },
        {
          'date': 'August 15, 2017'
        },
        {
          'date': 'August 25, 2017'
        },
        {
          'date': 'October 02, 2017'
        },
        {
          'date': 'October 19, 2017'
        },
        {
          'date': 'October 20, 2017'
        },
        {
          'date': 'December 25, 2017'
        }

      ]
    },
    {
      'year': '2016',
      'holidays': [
        {
          'date': 'January 26,2016'
        },
        {
          'date': 'March 07, 2016'
        },
        {
          'date': 'March 24,2016'
        },
        {
          'date': 'March 25,2016'
        },
        {
          'date': 'April 14, 2016'
        },
        {
          'date': 'April 15, 2016'
        },
        {
          'date': 'April 19, 2016'
        },
        {
          'date': 'July 06,2016'
        },
        {
          'date': 'August 15,2016'
        },
        {
          'date': 'September 05, 2016'
        },
        {
          'date': 'September 13, 2016'
        },
        {
          'date': 'October 11, 2016'
        },
        {
          'date': 'October 12,2016'
        },
        {
          'date': 'October 31 ,2016'
        },
        {
          'date': 'November 14, 2016'
        }

      ]
    },
    {
      'year': '2015',
      'holidays': [
        {
          'date': 'January 26,2015'
        },
        {
          'date': 'Feb 17, 2015'
        },
        {
          'date': 'March 06,2015'
        },
        {
          'date': 'April 02, 2015'
        },
        {
          'date': 'April 03, 2015'
        },
        {
          'date': 'April 14, 2015'
        },
        {
          'date': 'May 01,2015'
        },
        {
          'date': 'September 17, 2015'
        },
        {
          'date': 'September 25, 2015'
        },
        {
          'date': 'October 02, 2015'
        },
        {
          'date': 'October 22,2015'
        },
        {
          'date': 'November 11, 2015'
        },
        {
          'date': 'November 12, 2015'
        },
        {
          'date': 'November 25, 2015'
        },
        {
          'date': 'December 25, 2015'
        }
      ]
    },
  ];
  constructor(private http: CommonService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.period = "All";
    this.xAxis = "DD MMM YYYY";
  }
  getFundHistory() {
    this.http.getFundData(this.code).subscribe(data => {
      this.data1 = data['data'];
      this.chartHeading = data['meta'].scheme_name;
      this.schemeCatogery = data['meta'].scheme_category;
      this.latestDate = this.data1[0].date;
      this.latestNav = this.data1[0].nav;
      this.increment = this.data1[0].nav - this.data1[1].nav;
      // this.increment = Math.round(this.increment * 100) / 1000;
     
      this.data1.forEach(element => {
        let x = element.date.split("-");
        element.date = new Date(x[2], x[1] - 1, x[0]);
        element.nav = parseFloat(element.nav);
        element.gains = 0
        element.utcDate='';
      });
     
      for(let i=0;i<10;i++){
          this.data1[i].gains = this.data1[i].nav - this.data1[i+1].nav;
          this.data1[i].gains=  this.data1[i].gains.toFixed(3);
          this.data1[i].utcDate = this.data1[i].date.toLocaleDateString();
      }
   
      // this.CalculateLumpSUM(100000,3);
      // this.CalculateSIP(1000,3);
      this.ReturnsCalculator();
      this.graphData(this.data1);
    })
  }
  graphData(fundData) {
    this.data = [];
    fundData.forEach(element => {
      this.data.push({ y: element.nav, x: element.date });
    });
    var chart = new CanvasJS.Chart("chartContainer",
      {
        title: {
          text: this.chartHeading
        },
        axisX: {
          title: "Period",
          valueFormatString: this.xAxis
          // gridThickness: 2
        },
        axisY: {
          title: "NAV"
        },
        data: [
          {
            type: "area",
            dataPoints: this.data
          }
        ]
      });
    chart.render();
  }
  changeGraph() {
    switch (this.period) {
      case '1Week':
        let x = new Date();
        x.setDate(this.data1[0].date.getDate() - 6);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= x) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM";
        this.graphData(y);

        break;
      case '3Months':
        var d = new Date();
        d.setMonth(this.data1[0].date.getMonth() - 3);
        var d = new Date(d);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM";
        this.graphData(y);
        break;
      case '6Months':
        var d = new Date();
        d.setMonth(this.data1[0].date.getMonth() - 6);
        var d = new Date(d);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM";
        this.graphData(y);
        break;
      case '1Year':
        var d = new Date();
        d.setFullYear(this.data1[0].date.getFullYear() - 1);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM YYYY";
        this.graphData(y);
        break;
      case '3Years':
        var d = new Date();
        d.setFullYear(this.data1[0].date.getFullYear() - 3);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM YYYY";
        this.graphData(y);
        break;
      case '5Years':
        var d = new Date();
        d.setFullYear(this.data1[0].date.getFullYear() - 3);
        var y = [];
        this.data1.forEach(element => {
          if (element.date >= d) {
            y.push(element);
          }
        });
        this.xAxis = "DD MMM YYYY";
        this.graphData(y);
        break;
      case 'All':
        this.xAxis = "DD MMM YYYY";
        this.graphData(this.data1);
        break;
      default:
        console.log("No such day exists!");
        break;
    }
  }

  CalculateLumpSUM(amt, tenure) {
    var d = new Date();
    d.setFullYear(d.getFullYear() - tenure);
    var amount_invested: any = amt;
    let units = 0;
    this.data1.forEach(element => {
      if (d.getDay() === 6) {
        // d.setDay(d.getDay()-1);
        d.setDate(d.getDate() + 2);
      }
      if (d.getDay() === 0) {
        d.setDate(d.getDate() + 1);
      }
      if (element.date.toLocaleDateString() === d.toLocaleDateString()) {
        units = amount_invested / element.nav;
        let currentAmount = units * this.latestNav;
        this.LumpsumProfit = currentAmount - amount_invested;
        this.LumpsumProfit = Math.round(this.LumpsumProfit);
      }
    });
  }
  CalculateSIP() {
    this.sipLoader = true;
   
    let amt = parseInt(this.sipForm.value.sipAmount);
    let tenure = this.sipForm.value.sipTenure;
   
    var d = new Date();
    var d1 = new Date();
    d.setFullYear(d.getFullYear() - tenure);
   
    let units = 0;
    let amount_invested = amt;
    this.total_amount_invested = 0;
    let total_units = 0;


    // d.setMonth(d.getMonth()+1)

    while (d1 >= d) {
     
      this.holidays.forEach(element => {
        if (parseInt(element.year) === d.getFullYear()) {
          element.holidays.forEach(element1 => {
            let x = new Date(element1.date);
            if (x.toLocaleDateString() === d.toLocaleDateString()) {
              d.setDate(d.getDate() + 1);
            }
          });
        }
      });
      if (d.getDay() === 6) {
        // d.setDay(d.getDay()-1);
        // console.log('entereed',d);
        d.setDate(d.getDate() + 2);
        // console.log('entereed',d);
      }
      if (d.getDay() === 0) {
        d.setDate(d.getDate() + 1);
      }
      this.holidays.forEach(element => {
        if (parseInt(element.year) === d.getFullYear()) {
          element.holidays.forEach(element1 => {
            let x = new Date(element1.date);
            if (x.toLocaleDateString() === d.toLocaleDateString()) {
              d.setDate(d.getDate() + 1);
            }
          });
        }
      });
   
      // console.log('d$$$$$$$$$$$$$$$$s',d);
      // this.data1.forEach(element => {
      /* if (element.date.toLocaleDateString() === d.toLocaleDateString()) {
         // console.log('d1 d',d.toLocaleDateString());
         units = amount_invested / element.nav;
         this.total_amount_invested = this.total_amount_invested + amount_invested;
         total_units = total_units + units
       }
       else {
         console.log('d.toLocaleDateString()', d.toLocaleDateString(), d.getDay());
       }*/
      // });

      for (let i = 0; i < this.data1.length; i++) {
        // console.log('this.data1[i].date.toLocaleDateString() === d.toLocaleDateString()',this.data1[i].date.toLocaleDateString(),d.toLocaleDateString(),this.data1[i].date.toLocaleDateString() === d.toLocaleDateString())

    
        let y = this.data1[i].date.getFullYear();
        let z = this.data1[i].date.getMonth();
        if (y === d.getFullYear()) {
          // console.log('****123***')
          if (z === d.getMonth()) {
            // console.log('***month***');
            if (this.data1[i].date.toLocaleDateString() === d.toLocaleDateString()) {
            
              units = amount_invested / this.data1[i].nav;
         
              this.total_amount_invested = this.total_amount_invested + amount_invested;
            
              total_units = total_units + units
              // break;
            }
          }
          else {
            // break;
          }
        }
        else {
          // break;
        }
        /* if (this.data1[i].date.toLocaleDateString() === d.toLocaleDateString()) {
          // console.log('d.toLocaleDateString() if********',d);
          units = amount_invested / this.data1[i].nav;
          this.total_amount_invested = this.total_amount_invested + amount_invested;
          total_units = total_units + units
          break;
        }*/

      }
      d.setMonth(d.getMonth() + 1);

    }
    let currentAmount = total_units * this.latestNav;
    this.MaturityAmt = Math.round(currentAmount);
    this.SIPProfit = currentAmount - this.total_amount_invested;
    
    if (this.SIPProfit !== 0) {
      this.sipLoader = false;
      this.sipCalculated = true;
     ;
    }
    this.SIPProfit = Math.round(this.SIPProfit);
  }
  ReturnsCalculator() {
    let x: any = ['1', '2', '3', '5'];
    // let x :any = ['1'];
    x.forEach((element, i) => {
      this.CalculateLumpSUM(100000, element);
      this.yearlyLumpSumReturns.push({ 'value': this.LumpsumProfit, 'tenure': element, 'invest_amount': '100000', 'current_value': this.LumpsumProfit + 100000 });
      // console.log('element', element);
      // this.CalculateSIP(1000, element);

      this.yearlySIPReturns.push({ 'value': this.SIPProfit, 'tenure': element, 'invest_amount': this.total_amount_invested, 'current_value': this.SIPProfit + this.total_amount_invested })
    });
    this.LumpsumProfit = this.yearlyLumpSumReturns[2].value;
    this.SIPProfit = this.yearlySIPReturns[2].value;
    console.log('this.yearlyLumpSumReturns and yearlySIPReturns', this.yearlyLumpSumReturns, this.yearlySIPReturns);

    // const table = new tabulator('#lumpsum-tabulator', {
    //   data: this.yearlyLumpSumReturns,           // load row data from array
    //   placeholder: 'No Data Available',
    //   layout: 'fitColumns',
    //   resizableColumns: false,
    //   tooltips: false,
    //   selectable: 1,          // show tool tips on cells
    //   headerFilterPlaceholder: '',         // when adding a new row, add it to the top of the table
    //   history: true,             // allow undo and redo actions on the table
    //   pagination: 'local',       // paginate the data
    //   paginationSize: 6,         // allow 7 rows per page of data
    //   paginationSizeSelector: [2, 3, 4, 6, 8],
    //   initialSort: [             // set the initial sort order of the data
    //     { column: 'name', dir: 'asc' },
    //   ],
    //   columns: [                 // define the table columns
    //     // tslint:disable-next-line:max-line-length
    //     { title: 'tenure', resizable: false, field: 'tenure', width: 150, headerFilter: 'input', headerFilterPlaceholder: '  ' },
    //     // tslint:disable-next-line:max-line-length
    //     { title: 'returns', resizable: false, field: 'value', width: 150, headerFilter: 'input', headerFilterPlaceholder: '  ' },


    //   ],
    // });
  }


  ngOnInit() {
    $(document).ready(function(){
      $(this).scrollTop(0);
  });
    this.code = this.route.snapshot.paramMap.get('code');
    this.getFundHistory();
    this.sipForm = this.fb.group({
      sipAmount: [''],
      sipTenure: [''],
      sipExpectedRate: ['']
    })
    this.sipCalculated = false;
  }


}
