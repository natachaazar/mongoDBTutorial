import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from "./loading.component";
import {SharedModule} from "../modules/shared/shared.module";
@NgModule({
	imports: [
		CommonModule,
		SharedModule
	],
	declarations: [LoadingComponent],
	exports: [LoadingComponent]
})
export class LoadingModule {
}
