import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  labelRefreshComponent: any;
  data = { "data": { "0": { "id": 1, "last_communication": "Mon, 02 Jul 2018 15:10:23 GMT", "lat": "39.955978", "long": "-0.075196", "radius": "1581" }, "1": { "id": 2, "last_communication": "Mon, 02 Jul 2018 15:06:17 GMT", "lat": "39.977501", "long": "-0.078921", "radius": "768" }, "2": { "id": 3, "last_communication": "Sun, 22 Apr 2018 19:38:21 GMT", "lat": "39.820621", "long": "-0.232430", "radius": "768" }, "3": { "id": 4, "last_communication": "Sun, 22 Apr 2018 08:18:59 GMT", "lat": "39.820621", "long": "-0.232430", "radius": "1488" }, "4": { "id": 5, "last_communication": "Sun, 22 Apr 2018 23:45:15 GMT", "lat": "39.820621", "long": "-0.232430", "radius": "768" }, "5": { "id": 6, "last_communication": "Sat, 21 Apr 2018 14:29:28 GMT", "lat": "39.819439", "long": "-0.245956", "radius": "489" }, "6": { "id": 7, "last_communication": "Sat, 21 Apr 2018 04:16:56 GMT", "lat": "39.817490", "long": "-0.231035", "radius": "852" }, "7": { "id": 8, "last_communication": "Sat, 21 Apr 2018 18:58:00 GMT", "lat": "39.817490", "long": "-0.231035", "radius": "852" }, "8": { "id": 9, "last_communication": "Fri, 20 Apr 2018 08:59:14 GMT", "lat": "39.820621", "long": "-0.232430", "radius": "768" }, "9": { "id": 10, "last_communication": "Sat, 21 Apr 2018 19:51:38 GMT", "lat": "39.820621", "long": "-0.232430", "radius": "768" }, "10": { "id": 11, "last_communication": "Sun, 22 Apr 2018 21:05:43 GMT", "lat": "39.822498", "long": "-0.237322", "radius": "492" } } }
  constructor(private http: HttpClient) { 
    this.labelRefreshComponent = new Subject<void>();
  }
  labelRefresh() {
    return this.labelRefreshComponent;
  }
  getCountries() {
    return this.http.get('assets/json/countries.json');
  }
  getFundData(code) {
    const url = `this.http.get(https://api.mfapi.in/mf/${code})`;
    console.log('code in service',code,url);
  
    return this.http.get(`https://api.mfapi.in/mf/${code}`);
  }
  getLocation(): Observable<any> {
    return this.http.get('assets/json/markPlaces.json');
  }
  getGridData(){
    return this.http.get('assets/json/grid.json');
  }
}
