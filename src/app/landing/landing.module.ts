import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingComponent} from './landing.component';
import {LandingRoutingModule} from './landing.routing';
import {SharedModule} from '../modules/shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
