import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TutorialComponent} from './tutorial.component';
import {TutorialRoutingModule} from './tutorial.routing';
import {SharedModule} from '../modules/shared/shared.module';
import {SideBarModule} from '../sidebar/sidebar.module';
import {MatSidenavModule} from '@angular/material';
import {ClipboardModule} from "ngx-clipboard";
import {LoadingModule} from "../loading/loading.module";

@NgModule({
  imports: [
    CommonModule,
    TutorialRoutingModule,
    SharedModule,
    MatSidenavModule,
    SideBarModule,
    ClipboardModule,
    LoadingModule
  ],
  declarations: [TutorialComponent]
})
export class TutorialModule { }
