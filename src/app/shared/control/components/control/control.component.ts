import {Component, ContentChild, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {AbstractControl, AbstractControlDirective, NgControl, ValidationErrors} from '@angular/forms';

@Component({
    selector: 'ax-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
    @Input() title!: string;

    @ContentChild(NgControl) controlRef!: AbstractControlDirective;

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
}
