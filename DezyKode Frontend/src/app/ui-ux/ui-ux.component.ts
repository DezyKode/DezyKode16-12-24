import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrl: './ui-ux.component.css',
})
export class UiUxComponent {
  courseId!: string;
  courseDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id')!;

    this.courseDetails = this.getCourseDetails(this.courseId);
  }

  getCourseDetails(id: string) {
    const courses = [
      {
        id: '1',
        title: 'UI/UX',
        description:
          'Our UI/UX Design Training focuses on equipping you with the skills to create user-friendly, visually appealing, and intuitive digital experiences. Learn wireframing, prototyping, user research, and design tools like Figma and Adobe XD. Gain hands-on experience and build a portfolio to kickstart your career in design!',
        imgUrl: 'assets/img/course/details/RMUIUX.png',
        bulletPoints: [
          'Information Architecture – Organize content effectively',
          'Consistency – Keep experiences intuitive.',
          'Usability – Prioritize user ease.',
          'Storytelling – Engage through narrative.',
          'Feedback – Provide clear responses.',
        ],
        bulletPoints2: [
          'Color & Typography – Use color effectively and ensure readable, well-spaced text.',
          'Interaction Design – Craft intuitive and seamless user actions.',
          'Responsive Design – Design for all devices and screen sizes.',
          'Design Systems – Ensure consistency across all elements.',
          'Feedback – Provide clear, actionable responses to user input.',
        ],
      },
    ];

    return courses.find((course) => course.id === id);
  }
}
