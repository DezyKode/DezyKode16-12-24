import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css',
})
export class ServiceDetailsComponent {
  courseId!: string;
  courseDetails: any;
  bulletPoints: any;
  points: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the course ID from the URL
    this.courseId = this.route.snapshot.paramMap.get('id')!; // Retrieve the 'id' param

    // For the purpose of this example, we'll mock the course details
    // In a real application, you would fetch this from an API or service based on the courseId.
    this.courseDetails = this.getCourseDetails(this.courseId);
  }
  reloadPage(courseId: number): void {
    // Reload the same page by navigating to the same route with the same parameter
    this.router.navigateByUrl('/service-detail/' + courseId).then(() => {
      window.location.reload();
    });
  }
  getCourseDetails(id: string) {
    // Mock data, you can replace this with an actual service call
    const courses = [
      {
        id: '1',
        title: 'UI/UX Design',
        description:
          'We craft intuitive and visually appealing UI/UX designs that enhance user engagement and streamline experiences. Our expertise lies in creating user-centric interfaces that align with your brand, ensuring seamless interaction and functionality across all platforms.',
        imgUrl: 'assets/img/course/UIUX.svg',
        bulletPoints: [
          'Research & Analysis',
          'Wireframing & Prototyping',
          'Information Architecture (IA)',
          'Visual Design (UI Design)',
          'User Experience (UX) Design',
          'Interaction Design (IxD)',
          'Usability Testing',
          'Accessibility Design',
          'Branding Integration',
        ],
        quote:
          'Designing is more than just creating visuals. It only achieves completion when it finds its purpose in real-world use. Brenda Laurel reminds us that design without utility is incomplete.',
        author: 'Brenda Laurel ',
        benefit: 'Benefits of UI/UX Services.',
        point: [
          'User-Centric Designs',
          'Enhanced Usability',
          'Custom Solutions',
          'Increased Conversions',
          'Cutting-Edge Tools',
          'Cross-Platform Consistency',
        ],
      },
      {
        id: '2',
        title: 'Web Design',
        description:
          'We specialize in creating stunning, user-friendly websites that reflect your brands identity. Our expert web design services focus on responsive layouts, seamless navigation, and modern aesthetics to ensure your website stands out and delivers a great user experience across all devices.',
        imgUrl: 'assets/img/course/WebDesign.svg',
        bulletPoints: [
          'UI/UX Design',
          'Responsive Web Design',
          'Custom Website Design',
          'Website Redesign',
          'E-commerce Web Design',
          'Graphic Design for Websites',
          'Landing Page Design',
          'Prototyping and Wireframing',
          'Website Maintenance and Updates',
          'Content Layout and Typography',
          'SEO-Friendly Design',
          'Interactive and Motion Design',
          'Web Accessibility Design',
          'CMS Theme Design',
        ],
        quote:
          'The visual design needs to tell the story. Its not design for design. It needs to reflect reality. The design needs to have a flow that goes well with the story and supports the story.” —Patrice Vermette, production designer on Dune',
        author: 'Patrice Vermette',
        benefit: 'Benefits of Web Design Services.',
        point: [
          'Custom Designs',
          'Responsive Layouts',
          'SEO-Friendly',
          'Fast Loading',
          'User-Centric',
          'Ongoing Support',
        ],
      },
      {
        id: '3',
        title: 'Website Development',
        description:
          "We offer top-notch web development services tailored to meet your business needs. From responsive website design to custom development, our team ensures a seamless, user-friendly experience across all devices. Whether you're looking to build a brand-new website or enhance an existing one, we provide innovative solutions to boost your online presence and drive growth.",

        imgUrl: 'assets/img/course/WebDevelopment.svg',
        bulletPoints: [
          'Front-End Development',
          'Back-End Development',
          'Full-Stack Development',
          'E-Commerce Development',
          'Content Management System (CMS) Development',
          'Web Performance Optimization',
          'Web Security',
          'Landing Page Development',
          'Consulting and Prototyping',
        ],
        quote:
          'To become successful online, you only need to remember the following: Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success”',
        author: 'Dr. Christopher Dayagdag',
        benefit: 'Benefits of Website Development Services.',
        point: [
          'Custom Designs',
          'SEO Optimization',
          'Responsive Websites',
          'Fast Loading Speed',
          'Secure Solutions',
          'Scalable Development',
          'Post-Launch Support',
        ],
      },
      {
        id: '4',
        title: 'Android App Development',
        description:
          'Our Android application services offer customized, user-friendly mobile solutions tailored to meet your business needs. From app design and development to testing and maintenance, we ensure seamless performance across devices.',

        imgUrl: 'assets/img/course/MobileDevelopment.svg',
        bulletPoints: [
          'Android App Strategy & Consulting',
          'UI/UX Design Custom Android App Development',
          'App Testing and Quality Assurance',
          'App Maintenance & Update',
          'App Integration',
          'App Deployment & Launch',
          'App Analytics & Performance Optimization',
          'App Security & Data Protection',
          'Android App Support',
        ],
        quote:
          'Transforming your ideas into seamless Android experiences — where innovation meets functionality.',
        author: 'Anonymous',
        benefit: 'Benefits of Android App Development.',
        point: [
          'Custom, user-friendly designs',
          'Scalable and secure solutions',
          'Fast development with quality assurance',
          'Seamless integration and support',
          'Affordable pricing with timely delivery',
        ],
      },
      {
        id: '5',
        title: 'Digital Marketing',
        description:
          ' At DezyKode IT Solutions we offers Digital marketing services encompass a wide range of strategies and techniques aimed at promoting products, services, or brands through online platforms. These services typically include: ',
        bulletPoints: [
          'Search Engine Optimization (SEO)',
          'Content Marketing',
          'Pay-Per-Click (PPC) advertising',
          'Email Marketing',
          'Market Research',
          'Video Production',
          'Social Media Marketing (SMM)',
          'Marketing Strategy',
        ],

        imgUrl: 'assets/img/course/DigitalMarketing.svg',
        quote:
          'You have to stand apart by offering high quality, relevant experiences to audiences that you truly understand.',
        author: 'Adam Audette',
        benefit: 'Benefits of Digital Marketing Services.',
        point: [
          'Customized Strategies',
          'SEO Excellence',
          'Social Media Mastery',
          'Content Creation',
          'Data-Driven Results',
          'Lead Generation',
          '24/7 Support',
        ],
      },
      {
        id: '6',
        title: 'IOS App Development',
        description:
          'IOS application development services, creating seamless, user-friendly apps tailored to your business needs. Our team focuses on intuitive design, high performance, and robust functionality, ensuring your app delivers an exceptional user experience across all Apple devices. From concept to launch, we provide end-to-end solutions that drive growth and engagement..',

        imgUrl: 'assets/img/course/MobileDevelopment.svg',
        bulletPoints: [
          'App Design (UI/UX)',
          'App Development',
          'Backend Development',
          'Integration with APIs and Third-Party Services',
          'App Testing and Quality Assurance',
          'App Deployment',
          'App Maintenance and Updates',
          'App Performance Optimization',
          'App Analytics and Reporting',
        ],
        quote:
          'Transforming ideas into sleek, intuitive, and powerful iOS apps that redefine user experiences—because innovation starts here.',
        author: 'Anonymous',
        benefit: 'Benefits of IOS App Development.',
        point: [
          'Custom iOS apps',
          'Intuitive designs',
          'High performance & security',
          'Latest iOS integration',
          'Scalable solutions',
          'Full-cycle support',
        ],
      },
    ];

    return courses.find((course) => course.id === id);
  }
}
