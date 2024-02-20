import { ChangeDetectionStrategy, Component, Input, Signal } from '@angular/core';
import { SomeObject } from '../signal-non-signal.component';

@Component({
  selector: 'app-child-signal-non-signal',
  templateUrl: './child-signal-non-signal.component.html',
  styleUrls: ['./child-signal-non-signal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildSignalNonSignalComponent {
@Input() nonSignalObject!: SomeObject;
@Input() signalObject!: Signal<SomeObject>;
}
