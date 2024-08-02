import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.scss']
})
export class GeneralDetailsComponent implements OnInit {
  purchaseForm: FormGroup;
  currentStep: number = 1;

  bsConfig = {
    dateInputFormat: 'YYYY-MM-DD'
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.purchaseForm = this.fb.group({
      ponumber: ['', Validators.required],
      POdate: ['', Validators.required],
      Unit: ['', Validators.required],
      Shipto: ['', Validators.required],
      Projectcode: [''],
      Buyer: [''],
      Category: ['', Validators.required],
      Type: ['', Validators.required],
      NaturePO: ['inlineRadio1'],
      Validfrom: [''],
      Validto: [''],
      Requireddate: ['', Validators.required],
      Attachments: [''],
      Salesorder: [''],
      docnumber: ['']
    });
  }

  ngOnInit(): void {

  }

  onSaveAndNext(): void {
    if (this.purchaseForm.valid) {
      console.log(this.purchaseForm.value);
      this.currentStep++;
      if (this.currentStep === 2) {
        this.router.navigate(['/purchase/supplier-details']); // Navigate to the Personal Details page
      }
      // Handle other steps and navigation
    } else {
      console.log('Form is invalid');
    }
  }


  
  next(): void {
    if (this.purchaseForm.valid) {
      this.currentStep++;
      if (this.currentStep === 2) {
        this.router.navigate(['/purchase/supplier-details']); // Navigate to the Personal Details page
      }
      // Handle other steps and navigation
    } else {
      this.purchaseForm.markAllAsTouched(); // Mark all fields as touched to show validation messages
    }
  }

  goBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  
  onSubmit() {
    if (this.purchaseForm.valid) {
      this.router.navigate(['/purchase/supplier-details']);
    } else {
      console.log('Form is not valid');
    }
  }



}
