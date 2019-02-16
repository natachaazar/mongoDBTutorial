import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OwlModule} from 'ngx-owl-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    OwlModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    OwlModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
