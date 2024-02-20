import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSignalNonSignalComponent } from './child-signal-non-signal.component';

describe('ChildSignalNonSignalComponent', () => {
  let component: ChildSignalNonSignalComponent;
  let fixture: ComponentFixture<ChildSignalNonSignalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildSignalNonSignalComponent]
    });
    fixture = TestBed.createComponent(ChildSignalNonSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
