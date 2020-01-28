
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {


  // map: google.maps.Map;
  title = 'resolveProject';

  check: any;

  allNumbers: number[] = [];


  constructor() {
    // for (let insertNumbers = 0; insertNumbers <= 100; insertNumbers++) {
    //   this.allNumbers.push(insertNumbers);
    // }
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    // console.log(event, $(window).width());
    // console.log('now you are scrolling');
    $(window).scroll(function () {
      // console.log("$(window).scrollTop()", $(window).scrollTop());
      // console.log("$(document).height()", $(document).height());
      // console.log("$(window).height()", $(window).height());
      document.getElementById("myP").style.visibility = "hidden";
      // console.log($(window).scrollTop() == ($(document).height() - $(window).height()));
      
      if ($(window).scrollTop()+500 >= ($(document).height() - $(window).height())) {
        this.check = true;
        document.getElementById("myP").style.visibility = "visible";
        document.getElementById("myP").style.animation = "bounceInLeft 5s";
        // document.getElementById("myP").style.transition= "all 2s";

      }
      // $('.footer').visi();
      // $('.footer').fadeOut();
    })
  }


  ngOnInit() {
    
  }

  ngAfterViewInit() {

  }
}
