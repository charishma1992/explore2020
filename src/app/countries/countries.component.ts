import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, AfterViewInit {
  countries: any = [];
  check = 0;
  checkpercent: any;
  checkColorOuter: any;
  checkColorInner: any;
  countryform: FormGroup;
  countryarray: any = [];
  @ViewChild('mapContainer') gmap: ElementRef;
  map: google.maps.Map;
  lat = 140.730610;
  lng = -173.935242;
  coordinates: any;

  marker: any;
  constructor(private commonservice: CommonService, private fb: FormBuilder, private actRoute: ActivatedRoute, private route: Router) { }

  Drop(event: CdkDragDrop<string[]>) {
    // console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  setMarker(coordinates, Map1) {
    this.marker = new google.maps.Marker({
      position: coordinates,
      map: Map1,
    });
    // console.log('entered  this.marker', this.marker);
  }
  Locate() {
    event.stopPropagation();
    this.countries.forEach(element => {
      element.displaymap = false;
    });

    this.countryarray.push(this.countryform.value.country);
    this.countryarray.push(this.countryform.value.ToCountry);
    console.log('entered locate on mapsi......', this.countryarray);
    this.countries.forEach(element => {
      if (element.name === this.countryform.value.country) {
        element.displaymap = true;
        this.coordinates = new google.maps.LatLng(element.latlng[0], element.latlng[1]);
        this.setMarker(this.coordinates, this.map);
        this.mapInitializer();
      }
    });

    // this.countryarray.forEach(element => {
    //   console.log('ensdss',element);
    //   this.countries.forEach(element1 => {
    //       if (element1.name === element) {
    //   this.coordinates = new google.maps.LatLng(element1.latlng[0], element1.latlng[1]);
    //   this.setMarker(this.coordinates, this.map);
    //   this.mapInitializer();
    //       }
    //     });
    // });
  }
  mapInitializer() {
    const mapOptions: google.maps.MapOptions = {
      center: this.coordinates,
      zoom: 8,
    };
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
    // this.marker.setMap(this.map);
    this.setMarker(this.coordinates, this.map);

  }
  openDetails(country) {
    this.route.navigate([`/countrydetail/${country.name}`]);
  }
  ChangeTitle(country) {
    event.stopPropagation();
  }

  ngOnInit() {

    this.actRoute.data.subscribe(data => {

      this.countries = data.RouteResolver;
      this.countries.forEach(element => {
        element.displaymap = false;
      });
      // console.log('countries', this.countries);
    });

    this.countryform = this.fb.group({
      country: [''],
      ToCountry: ['']
    });
    // for (this.check = 1; this.check <= this.countries.length; this.check++) {
    //   this.checkpercent = (this.check / this.countries.length) * 100;
    //   if (this.checkpercent < '30') {
    //     this.checkColorOuter = '#dc3545';
    //     this.checkColorInner = '#f1949d';
    //   } else {
    //     this.checkColorOuter = '#78C000';
    //     this.checkColorInner = '#C7E596';
    //   }

    // }
    // this.commonservice.getCountries().subscribe(countryData => {
    //   console.log('countries data', countryData);
    //   this.countries = countryData;
    // });

  }
  ngAfterViewInit() {
    this.mapInitializer();
  }
}
