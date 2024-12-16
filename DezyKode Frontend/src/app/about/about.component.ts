import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Import to check the platform

// declare var $: any;  // Declaring jQuery for usage (since owlCarousel relies on jQuery)

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Ensure jQuery is available and only run the code in the browser
      this.initializeCarousel();
    }
  }

  private initializeCarousel(): void {
    const carousel = $('.instructor-active');
    if (carousel.length) {
      carousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        },
      });
    }
  }
}
