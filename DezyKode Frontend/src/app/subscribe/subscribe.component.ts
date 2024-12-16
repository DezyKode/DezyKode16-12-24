import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Correct import for Angular Router

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
  subscribeForm: FormGroup; // Declare the form group
  email: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Initialize the form with email input and validation
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Ensure email is required and valid
    });
  }

  onSubscribe(): void {
    if (this.subscribeForm.valid) {
      const formData = this.subscribeForm.value; // Get form data
      console.log('Form Data:', formData); // Log the data to inspect it

      const confirmed = confirm('Do you want to subscribe for updates?');
      if (confirmed) {
        this.http
          .post('http://localhost:8087/api/subscribe', formData)
          .subscribe(
            (response) => {
              alert('Subscription successful!');
              console.log('Subscription successful:', response);
              this.subscribeForm.reset();
            },
            (error) => {
              console.error('Error subscribing:', error);
              alert('There was an error subscribing. Please try again.');
            }
          );
      } else {
        alert('Subscription cancelled.');
      }
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
