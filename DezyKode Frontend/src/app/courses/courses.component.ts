import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      name: 'UI/UX',
      category: 'cat1',
      duration: '90 minutes',
      description:
        'Our UI/UX Design Training focuses on equipping you with the...',
      image: 'assets/img/course/1.png',
      route: '/ui-ux/1',
    },
    {
      id: 2,
      name: 'Data Analytics',
      category: 'cat2',
      duration: '90 minutes',
      description:
        'Unlock the power of data with our comprehensive Data Analytics...',
      image: 'assets/img/course/4.png',
    },
    {
      id: 3,
      name: 'Full Stack Development',
      category: 'cat3',
      duration: '90 minutes',
      description:
        'This Full Stack with Python Training is designed for aspiring...',
      image: 'assets/img/course/3.png',
    },
    {
      id: 4,
      name: 'Data Science',
      category: 'cat4',
      duration: '90 minutes',
      description:
        'Unlock the world of data with our comprehensive Data Science...',
      image: 'assets/img/course/5.png',
    },
    {
      id: 5,
      name: 'Digital Marketing',
      category: 'cat5',
      duration: '90 minutes',
      description:
        'Our Digital Marketing Training empowers you with in-demand...',
      image: 'assets/img/course/2.png',
    },
    {
      id: 6,
      name: 'Full Stack Development',
      category: 'cat3',
      duration: '90 minutes',
      description:
        'This comprehensive Full Stack Java Developer Training equips...',
      image: 'assets/img/course/3.png',
    },
    {
      id: 7,
      name: 'Business Analytics',
      category: 'cat7',
      duration: '90 minutes',
      description:
        'Our training and Internship program brighten your career journey...',
      image: 'assets/img/course/ba.png',
    },
    {
      id: 8,
      name: 'MERN-Stack',
      category: 'cat8',
      duration: '90 minutes',
      description:
        'Unlock the full potential of modern web development with our MERN...',
      image: 'assets/img/course/mern.png',
    },
    {
      id: 9,
      name: 'MEAN-Stack',
      category: 'cat9',
      duration: '90 minutes',
      description:
        'This MEAN Stack training is designed to help you become proficient...',
      image: 'assets/img/course/9.png',
    },
    {
      id: 10,
      name: 'Software Testing',
      category: 'cat6',
      duration: '90 minutes',
      description:
        'A software testing course equips learners with essential skills...',
      image: 'assets/img/course/7.png',
    },
  ];

  // Filtered courses to display
  filteredCourses = [...this.courses]; // Initialize with all courses
  constructor(private router: Router) {}

  // Method to filter courses by category
  filterCategory(category: string): void {
    if (category === '*') {
      // Show all courses
      this.filteredCourses = [...this.courses];
    } else {
      // Filter by category
      this.filteredCourses = this.courses.filter(
        (course) => course.category === category
      );
    }
  }
  navigateToCourse(course: any): void {
    if (course.route) {
      this.router.navigate([course.route]); // Navigate to specific route
    } else {
      this.router.navigate(['/course-detail', course.id]); // Fallback to course detail
    }
  }
}
