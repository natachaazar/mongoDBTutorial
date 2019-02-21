import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SideBar} from '../../assets/languages/global_file';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
	@Input() section: string;
	@Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>();
  public sideBar = SideBar;

	constructor() {}

	ngOnInit() {
    this.eventEmitter.emit(this.sideBar[0]);
	}

  changeSection(section){
	  this.resetSelect();
	  section.selected = true;
	  this.eventEmitter.emit(section);
  }

  resetSelect(){
	  for(let menu of this.sideBar){
	    menu.selected = false;
    }
  }
}
