import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ax-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ControlComponent implements OnInit {
  @Input() title!: string;

  @HostBinding('class.ax-control-container') baseClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
