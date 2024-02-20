import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutHomeComponent } from './checkout-home.component';

describe('CheckoutHomeComponent', () => {
  let component: CheckoutHomeComponent;
  let fixture: ComponentFixture<CheckoutHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutHomeComponent]
    });
    fixture = TestBed.createComponent(CheckoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
