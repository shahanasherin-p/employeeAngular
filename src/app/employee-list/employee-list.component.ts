import { Component, ViewChild, ElementRef } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { Employee } from '../interface/employee'; 
import { NgFor, NgIf } from '@angular/common';

declare var bootstrap: any; // Declare bootstrap to use Modal methods

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css', 
})
export class EmployeeListComponent {
  // Reference to the modal element
  @ViewChild('employeeModal') employeeModal!: ElementRef;

  // Form group for employee form
  employeeForm: FormGroup;

  // Employee list to store submitted data
  employeeList: Employee[] = [];

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      contact: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')], // Validates a 10-digit phone number
      ],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
    });
  }

  // Submit function to add employee
  submit() {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.value;
      this.employeeList.push(newEmployee); // Add employee to the list
      console.log(this.employeeList); // Debug log

      // Close the modal programmatically
      const modalElement = this.employeeModal.nativeElement;
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
        modalInstance.hide();
      }

      this.employeeForm.reset(); // Reset form after submission
    }
  }
}