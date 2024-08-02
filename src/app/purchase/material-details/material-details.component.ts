import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-material-details',
  templateUrl: './material-details.component.html',
  styleUrl: './material-details.component.scss'
})
export class MaterialDetailsComponent {
  materialDetailsForm: FormGroup;
  currentStep: number = 3;

  constructor(private fb: FormBuilder, private router: Router) {
    this.materialDetailsForm = this.fb.group({
      
    });
  }

  ngOnInit(): void {
  }

  onSaveAndNext(): void {
    if (this.materialDetailsForm.valid) {
      console.log(this.materialDetailsForm.value);
      this.currentStep++;
      if (this.currentStep === 4) {
        this.router.navigate(['purchase/payment-tax-details']); // Navigate to the assets Details page
      }
      // Handle other steps and navigation
    } else {
      console.log('Form is invalid');
    }
  }

  next(): void {
    if (this.materialDetailsForm.valid) {
      this.currentStep++;
      if (this.currentStep === 4) {
        this.router.navigate(['purchase/payment-tax-details']); // Navigate to the assets Details page
      }
      // Handle other steps and navigation
    } else {
      this.materialDetailsForm.markAllAsTouched(); // Mark all fields as touched to show validation messages
    }
  }

  goBack(): void {
    this.router.navigate(['purchase/supplier-details']); // Adjust the route according to your needs
  }
  onSubmit() {
    if (this.materialDetailsForm.valid) {
      this.router.navigate(['/login-otp']);
    } else {
      console.log('Form is not valid');
    }
  }
}
