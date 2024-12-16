import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'], // Fixed typo: changed `styleUrl` to `styleUrls`
})
export class HeaderComponent implements OnInit {
  // Property to track the mobile menu state
  isMobileMenuOpen = false;

  // Lifecycle hook - can be used for initializing logic if needed
  ngOnInit(): void {
    // Removed the 'throw new Error' line
  }

  // Method to toggle the mobile menu's visibility
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
