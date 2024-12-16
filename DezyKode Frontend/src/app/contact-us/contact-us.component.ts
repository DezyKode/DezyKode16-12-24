import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  submitForm(formData: any): void {
    this.http.post('http://localhost:8087/api/contact', formData).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        alert('Thank you for contacting us!');
        this.contactForm.reset();
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
      },
    });
  }
}
