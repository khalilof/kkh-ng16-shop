import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalNonSignalComponent } from './signal-non-signal.component';

describe('SignalNonSignalComponent', () => {
  let component: SignalNonSignalComponent;
  let fixture: ComponentFixture<SignalNonSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalNonSignalComponent]
    });
    fixture = TestBed.createComponent(SignalNonSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
