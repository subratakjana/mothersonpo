import { ComponentFixture, TestBed } from '@angular/core/testing';

import { supplierDetailsComponent } from './supplier-details.component';

describe('supplierDetailsComponent', () => {
  let component: supplierDetailsComponent;
  let fixture: ComponentFixture<supplierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [supplierDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(supplierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
