import {NgModule} from '@angular/core';
import {SidebarComponent} from "./sidebar.component";
import {CommonModule} from '@angular/common';
import {SharedModule} from '../modules/shared/shared.module';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [SidebarComponent],
	providers: [],
	exports: [SidebarComponent],
})
export class SideBarModule {
}
