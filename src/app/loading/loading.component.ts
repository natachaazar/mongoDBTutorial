import {Component, ViewEncapsulation, Input, OnInit} from '@angular/core';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'app-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
	@Input() showLoading = false;

	constructor() {
	}

	ngOnInit() {
	}
}
