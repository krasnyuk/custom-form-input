import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ControlModule} from './shared/control/control.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        ControlModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
