import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OwlModule} from 'ngx-owl-carousel';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    OwlModule,
    MatProgressSpinnerModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    OwlModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
}
