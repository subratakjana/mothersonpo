import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-confirmation-details',
  templateUrl: './confirmation-details.component.html',
  styleUrl: './confirmation-details.component.scss'
})
export class ConfirmationDetailsComponent {
  currentStep: number = 5;

  bsConfig = {
    dateInputFormat: 'YYYY-MM-DD'
  };

  constructor(private fb: FormBuilder, private router: Router) {
    
  }

  ngOnInit(): void {

  }

  goBack(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
