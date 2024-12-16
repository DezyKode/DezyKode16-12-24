import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      name: 'UI/UX',
      category: 'cat1',

      description:
        'We craft intuitive and visually appealing UI/UX designs that ...',
      image: 'assets/img/course/UIUX.png',
    },
    {
      id: 2,
      name: 'Web Design',
      category: 'cat2',

      description:
        'We specialize in creating stunning, user-friendly websites that ...',
      image: 'assets/img/course/WEBDESIGN.png',
    },
    {
      id: 3,
      name: 'Website Development',
      category: 'cat3',

      description:
        'We offer top-notch web development services tailored to ...',
      image: 'assets/img/course/WEBDEV.png',
    },
    {
      id: 4,
      name: 'Android App Development',
      category: 'cat4',

      description:
        'Our Android application services offer customized, user-friendly mobile ...',
      image: 'assets/img/course/ANDROID.png',
    },
    {
      id: 5,
      name: 'Digital Marketing',
      category: 'cat5',

      description:
        'At DezyKode IT Solutions we offers Digital marketing services encompass a wide range...',
      image: 'assets/img/course/DM.png',
    },
    {
      id: 6,
      name: 'IOS App Development',
      category: 'cat4',

      description:
        'IOS application development services, creating seamless, user-friendly apps...',
      image: 'assets/img/course/IOS.png',
    },
  ];
  filteredServices = [...this.services];

  constructor(private router: Router) {}

  filterCategory(category: string): void {
    if (category === '*') {
      this.filteredServices = [...this.services];
    } else {
      this.filteredServices = this.services.filter(
        (service) => service.category === category
      );
    }
  }
}
