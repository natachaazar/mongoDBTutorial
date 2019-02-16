import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  route:string;

  constructor() { }

  ngOnInit() {
    console.log('tutorial here');
  }
  onChangeSection(section){
    this.route = section.route;
    console.log('routee',this.route);
  }
}
