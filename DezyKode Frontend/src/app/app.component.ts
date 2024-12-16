import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DezyKode';
  callPhoneNumber() {
    window.open('tel:+91 9730822219', '_self');
  }
}
