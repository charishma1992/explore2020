import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HostListener } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselOptions = {
    loop: true,
    margin: 25,
    nav: true,
    navText: ['<div class=\'nav-btn prev-slide\'></div>', '<div class=\'nav-btn next-slide\'></div>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };

  images = [
    {
      text: 'Everfresh Flowers',
      image: 'assets/images/travel.jpeg'
    },
    {
      text: 'Festive Deer',
      image: 'assets/images/travel1.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'assets/images/travel2.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'assets/images/travel3.png'
    },
    {
      text: 'Everfresh Flowers',
      image: 'assets/images/travel4.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'assets/images/travel5.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'assets/images/travel6.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'assets/images/travel7.jpg'
    },
  ];


  constructor() { }



  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    console.log(event);
    let x = $(window).width();
    console.log('now you are scrolling');
    if (x > 1024) {
      $(window).scroll(function () {
        console.log("$(window).scrollTop()", $(window).scrollTop());
        console.log("$(document).height()", $(document).height());
        console.log("$(window).height()", $(window).height());
        document.getElementById("myP1").style.visibility = 'hidden';
        document.getElementById("myP2").style.visibility = 'hidden';
        document.getElementById("myP3").style.visibility = 'hidden';
        console.log($(window).scrollTop() == ($(document).height() - $(window).height()));
        if ($(window).scrollTop() + 500 > 500) {
          this.check = true;
          document.getElementById("myP3").style.visibility = "visible";
          document.getElementById("myP3").style.animation = "bounceInLeft 5s";
          // document.getElementById("myP").style.transition= "all 2s";

        }
        if ($(window).scrollTop() + 500 > 1100) {
          this.check = true;
          document.getElementById("myP2").style.visibility = "visible";
          document.getElementById("myP2").style.animation = "bounceInRight 5s";
          // document.getElementById("myP").style.transition= "all 2s";

        }
        if ($(window).scrollTop() + 500 > 1600) {
          this.check = true;
          document.getElementById("myP1").style.visibility = "visible";
          document.getElementById("myP1").style.animation = "bounceInDown 5s";
          // document.getElementById("myP").style.transition= "all 2s";

        }
        // $('.footer').visi();
        // $('.footer').fadeOut();
      })
    }
    if (x < 1200 && x > 768) {
      $(window).scroll(function () {
        console.log("$(window).scrollTop()", $(window).scrollTop());
        console.log("$(document).height()", $(document).height());
        console.log("$(window).height()", $(window).height());
        document.getElementById("myP1").style.visibility = 'hidden';
        document.getElementById("myP2").style.visibility = 'visible';
        document.getElementById("myP3").style.visibility = 'visible';
        console.log($(window).scrollTop() == ($(document).height() - $(window).height()));
        if ($(window).scrollTop()+295  > 300) {
          this.check = true;
          document.getElementById("myP3").style.visibility = "visible";
          document.getElementById("myP3").style.animation = "bounceInLeft 5s";
          // document.getElementById("myP").style.transition= "all 2s";
          document.getElementById("myP2").style.visibility = "visible";
          document.getElementById("myP2").style.animation = "bounceInRight 5s";
        }
        // if ($(window).scrollTop()+300  > 300) {
        //   this.check = true;
        //   document.getElementById("myP2").style.visibility = "visible";
        //   document.getElementById("myP2").style.animation = "bounceInRight 5s";
        //   // document.getElementById("myP").style.transition= "all 2s";

        // }
        if ($(window).scrollTop()+315  > 300) {
          this.check = true;
          document.getElementById("myP1").style.visibility = "visible";
          document.getElementById("myP1").style.animation = "bounceInUp 5s";
          // document.getElementById("myP").style.transition= "all 2s";

        }
        // $('.footer').visi();
        // $('.footer').fadeOut();
      })
    }
  }

  ngOnInit() {
  }

}
