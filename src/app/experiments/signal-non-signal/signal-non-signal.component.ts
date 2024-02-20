import { Component, signal, Signal } from '@angular/core';

export interface SomeObject {
  someId: string;
  someName: string;
}
@Component({
  selector: 'app-signal-non-signal',
  templateUrl: './signal-non-signal.component.html',
  styleUrls: ['./signal-non-signal.component.scss']
})
export class SignalNonSignalComponent {
  someObject: SomeObject = {someId: 'abc', someName: 'base'};
  someSignalObject = signal<SomeObject>({someId: 'abc', someName: 'base'});

  handleNonSignalInput($event: KeyboardEvent): void {
    this.someObject = {...this.someObject, someName:  ($event.target as HTMLInputElement).value}
  }

  handleSignalInput($event: KeyboardEvent): void {
    this.someSignalObject.update((it) => {
      it.someName = ($event.target as HTMLInputElement).value
      return it;
    })

  }
}
