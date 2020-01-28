import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';


@Injectable()
export class RouteResolver implements Resolve<any> {
   constructor(public commonservice: CommonService) { }

   resolve() {
      return this.commonservice.getCountries().pipe(
         catchError((error) => {
            return of('No data');
         })
      );
   }
}
