import {FormSubmissionService } from '../contactform.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  constructor(public formService: FormSubmissionService) {

    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
  }

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);

    this.formService.setFormSubmitted(true);
  }
  
}
