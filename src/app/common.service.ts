import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  labelRefreshComponent: any;
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
}
