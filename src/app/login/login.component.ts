import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Define the form with FormBuilder
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    });
  }

  // Function to handle form submission
  login() {
    if (this.loginForm.valid) {
      alert(`Username: ${this.loginForm.value.username}\nPassword: ${this.loginForm.value.password}`);
    } else {
      alert('Invalid Form');
    }
  }

}
