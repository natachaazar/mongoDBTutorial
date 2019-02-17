import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Landing} from '../../assets/languages/global_file';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  landingLanguage = Landing;
  options = {
    dots: true,
    autoplay: false,
    loop: true,
    items: 1,
    responsiveClass: true
  };
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  routing(route){
    this._router.navigate([route]);
  }
}
