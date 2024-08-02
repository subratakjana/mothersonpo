import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-payment-tax-details',
  templateUrl: './payment-tax-details.component.html',
  styleUrl: './payment-tax-details.component.scss'
})
export class PaymentTaxDetailsComponent {
  paymentDetailsForm: FormGroup;
  currentStep: number = 4;

  constructor(private fb: FormBuilder, private router: Router) {
    this.paymentDetailsForm = this.fb.group({
      
    });
  }

  ngOnInit(): void {
  }

  onSaveAndNext(): void {
    if (this.paymentDetailsForm.valid) {
      console.log(this.paymentDetailsForm.value);
      this.currentStep++;
      if (this.currentStep === 4) {
        this.router.navigate(['purchase/general-details']); // Navigate to the assets Details page
      }
      // Handle other steps and navigation
    } else {
      console.log('Form is invalid');
    }
  }

  next(): void {
    if (this.paymentDetailsForm.valid) {
      this.currentStep++;
      if (this.currentStep === 4) {
        this.router.navigate(['purchase/general-details']); // Navigate to the assets Details page
      }
      // Handle other steps and navigation
    } else {
      this.paymentDetailsForm.markAllAsTouched(); // Mark all fields as touched to show validation messages
    }
  }

  goBack(): void {
    this.router.navigate(['purchase/material-details']); // Adjust the route according to your needs
  }
  onSubmit() {
    if (this.paymentDetailsForm.valid) {
      this.router.navigate(['/login-otp']);
    } else {
      console.log('Form is not valid');
    }
  }
}
