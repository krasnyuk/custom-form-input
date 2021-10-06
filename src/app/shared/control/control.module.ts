import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlComponent} from './components/control/control.component';
import {ValidationDirective} from './directives/validation.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ControlComponent, ValidationDirective],
  exports: [ControlComponent, ValidationDirective],
})
export class ControlModule { }
