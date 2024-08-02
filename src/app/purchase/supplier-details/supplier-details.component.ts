import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.scss'
})
export class supplierDetailsComponent implements OnInit {
  supplierDetailsForm: FormGroup;
  currentStep: number = 2;

  selectedRow: number | null = null;

  suppliers = [
    { partyName: '3M Fasteners India Limited- Haryana', supplierId: 'SM00003107', grade: 'A', rating: 4.5 },
    { partyName: 'Pidilite Adhesive India Ptv Ltd-Pune', supplierId: 'SM00003107', grade: 'A', rating: 4.9 },
    { partyName: 'Apex Steel Solutions', supplierId: 'SM00003107', grade: 'C', rating: 3.4 },
    { partyName: 'Titan Forge Industries', supplierId: 'SM00003107', grade: 'B', rating: 3.9 },
    { partyName: 'Everlast Plastics Inc.', supplierId: 'SM00003107', grade: 'D', rating: 2.9 },
    { partyName: 'VisiTech Glass Solutions', supplierId: 'SM00003107', grade: 'A', rating: 4.9 },
    { partyName: 'ChemTech Automotive Coatings', supplierId: 'SM00003107', grade: 'B', rating: 4.3 },
  ];

  selectRow(index: number): void {
    this.selectedRow = index;
  }




  constructor(private fb: FormBuilder, private router: Router) {
    this.supplierDetailsForm = this.fb.group({
      soldby:  [''],
      shippedby:  [''],
      remitto:  [''],
      salesperson: [''],
      remarks: [''],
      creditterm: ['', Validators.required],
      pricebasis: [''],
      currency: this.fb.group({
        inr: [''],
        usd: [''],
      }),
      closingvalue: [''],
      costcentre: ['']
    });
  }

  ngOnInit(): void {
  }

  onSaveAndNext(): void {
    if (this.supplierDetailsForm.valid) {
      console.log(this.supplierDetailsForm.value);
      this.currentStep++;
      if (this.currentStep === 3) {
        this.router.navigate(['purchase/material-details']); // Navigate to the supplier Details page
      }
      // Handle other steps and navigation
    } else {
      console.log('Form is invalid');
    }
  }

  next(): void {
    if (this.supplierDetailsForm.valid) {
      this.currentStep++;
      if (this.currentStep === 3) {
        this.router.navigate(['purchase/material-details']); // Navigate to the supplier Details page
      }
      // Handle other steps and navigation
    } else {
      this.supplierDetailsForm.markAllAsTouched(); // Mark all fields as touched to show validation messages
    }
  }

  goBack(): void {
    this.router.navigate(['purchase/general-details']); // Adjust the route according to your needs
  }

  onSubmit() {
    if (this.supplierDetailsForm.valid) {
      this.router.navigate(['/login-otp']);
    } else {
      console.log('Form is not valid');
    }
  }

}
