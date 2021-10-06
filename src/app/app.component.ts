import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    textControl = new FormControl('', [
        Validators.required,
        Validators.maxLength(10)
    ]);

    disabledControl = new FormControl({disabled: true, value: ''});

    text!: string;
}
