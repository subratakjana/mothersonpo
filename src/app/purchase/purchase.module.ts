import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { CalendarModule } from 'primeng/calendar';
import { supplierDetailsComponent } from './supplier-details/supplier-details.component';
import { ConfirmationDetailsComponent } from './confirmation-details/confirmation-details.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MaterialDetailsComponent } from './material-details/material-details.component';
import { PaymentTaxDetailsComponent } from './payment-tax-details/payment-tax-details.component';

//Directive
import { PhoneNumberDirective } from '../directive/phone-number.directive';
import { AllowOnlyNumbersDirective } from '../directive/allow-only-numbers.directive';
import { MaxlengthDirective } from '../directive/maxlength.directive';
import { MinlengthDirective } from '../directive/minlength.directive';
import { AllowOnlyTextDirective } from '../directive/allow-only-text.directive';
import { EmailValidatorDirective } from '../directive/email-validator.directive';
import { PreventTextInputDirective } from '../directive/prevent-text-input.directive';
import { TransformToUpperDirective } from '../directive/transform-to-upper.directive';
import { AllowTextAndNumbersDirective } from '../directive/allow-text-and-numbers.directive';



const routes: Routes = [
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'purchase/general-details', component: GeneralDetailsComponent },
  { path: 'purchase/supplier-details', component: supplierDetailsComponent },
  { path: 'purchase/material-details', component: MaterialDetailsComponent },
  { path: 'purchase/payment-tax-details', component: PaymentTaxDetailsComponent },
];

@NgModule({
  declarations: [
    EmployeeListComponent,
    GeneralDetailsComponent,
    supplierDetailsComponent,
    ConfirmationDetailsComponent,

    //Directive
    PhoneNumberDirective,
    AllowOnlyNumbersDirective,
    MaxlengthDirective,
    MinlengthDirective,
    AllowOnlyTextDirective,
    EmailValidatorDirective,
    PreventTextInputDirective,
    TransformToUpperDirective,
    AllowTextAndNumbersDirective,
    MaterialDetailsComponent,
    PaymentTaxDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    SharedModule,
    TableModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    TooltipModule,
    TabViewModule,
    FormsModule,
    AngularSvgIconModule,
    ReactiveFormsModule,
    CalendarModule,
    BsDatepickerModule,
    PopoverModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeModule { 

  
}