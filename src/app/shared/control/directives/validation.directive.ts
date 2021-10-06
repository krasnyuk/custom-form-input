import {Directive, Input, TemplateRef} from '@angular/core';

@Directive({
  selector: '[axValidation]'
})
export class ValidationDirective {
  @Input('axValidation') when!: 'required' | 'maxlength';

  constructor(public template: TemplateRef<any>) {
  }

}
