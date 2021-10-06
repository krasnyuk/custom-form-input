import {
    Component,
    ContentChild,
    ContentChildren,
    HostBinding,
    Input,
    QueryList,
    ViewEncapsulation
} from '@angular/core';
import {AbstractControl, AbstractControlDirective, NgControl, ValidationErrors} from '@angular/forms';
import {ValidationDirective} from '../../directives/validation.directive';

@Component({
    selector: 'ax-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
    @Input() title!: string;

    @ContentChild(NgControl) controlRef!: AbstractControlDirective;
    @ContentChildren(ValidationDirective) validationMessagesList!: QueryList<ValidationDirective>;

    @HostBinding('class.ax-control-container') baseClass = true;

    get control(): AbstractControl | null {
        return this.controlRef.control;
    }

    get controlErrors(): ValidationErrors | null | undefined {
        return this.control?.errors;
    }

    get shouldShowError(): boolean {
        if (!this.control) {
            return false;
        }
        return this.control?.invalid && this.control.touched;
    }

    get validationMessages(): ValidationDirective[] {
        if (!this.controlErrors) {
            return [];
        }
        const controlErrorsKeys: string[] = Object.keys(this.controlErrors);
        return this.validationMessagesList.filter((validationMessage: ValidationDirective) => {
            return controlErrorsKeys.includes(validationMessage.when);
        });
    }
}
