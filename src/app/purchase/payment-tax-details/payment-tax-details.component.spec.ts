import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTaxDetailsComponent } from './payment-tax-details.component';

describe('PaymentTaxDetailsComponent', () => {
  let component: PaymentTaxDetailsComponent;
  let fixture: ComponentFixture<PaymentTaxDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentTaxDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentTaxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
