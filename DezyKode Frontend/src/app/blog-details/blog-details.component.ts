import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'node:process';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  blogId!: string;
  blogDetails: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the course ID from the URL
    this.blogId = this.route.snapshot.paramMap.get('id')!; // Retrieve the 'id' param

    // For the purpose of this example, we'll mock the course details
    // In a real application, you would fetch this from an API or service based on the blogId.
    this.blogDetails = this.getblogDetails(this.blogId);
  }

  // reloadPage(blogId: number): void {
  //   // Reload the same page by navigating to the same route with the same parameter
  //   this.router.navigateByUrl('/service-detail/' + blogId).then(() => {
  //     window.location.reload();
  //   });
  // }

  getblogDetails(id: string) {
    // Mock data, you can replace this with an actual service call
    const blogs = [
      {
        id: '1',
        title: 'Career start as Software Tester in IT ',
        heading: 'A Shift Guide for IT and Non IT Professionals',
        des: 'Introduction:',
        description:
          'Do you enjoy the world of technology and wish to shift careers into the IT industry?<br> Congratulations You can start your career with in the testing industries as a Software Testing.<br><br> Do you want to know that?Not having an IT background necessarily disqualifies you from entering this exciting field?<br> The good news is that it is a career shift that you can very well make with the right approach and with lots of dedication. Here s a roadmap and guide on how to transition into this exciting career field.',

        heading2:
          'Transition into the Software Testing from Non IT to IT industry',
        heading3: 'Understanding Software Testing',
        desc: 'What is Software Testing?',

        description2:
          'Let us clarify before getting into the steps what exactly Software Testing means. ' +
          'Its just a process to check whether software products meet the requirements as specified and work' +
          'the way they are expected to.<br> •  Testers find defects<br> •  Bugs <br>•  Errors in software applications<br><br> So that' +
          ' their quality can be enhanced.',

        heading4: 'Why Pursue Software Testing?',
        description3:
          '<b>In Market it’s High in Demand:</b> With the advances in Software, the industry for software is growing, and always there is a call for professional testers.' +
          '<br><b>Flexible Career Paths:</b> Software Testing offers a variety of roles Manual to Automation and you can find an area that comes under your interest.' +
          '<br><b>Continuous Learning:</b> This field is ever-evolving with the new skills and technologies associated with this field emerging continuously.',

        heading5: 'How to Enter into Software Testing',
        desc2: 'Learn the Strong Base:',
        description4:
          '<br><b>Understand Basic IT Concepts:</b> Make yourself familiar with the basic terms such as hardware, Software, operating systems, and networks.' +
          '<b><br>Master Problem-Solving:</b> Excellent analytical thinking and the ability to logically discern problems and solve them.' +
          '<b><br>Enhance Your Communication Skills:</b> Communication with Developers, Project Managers, and other stakeholders is an integral part of testing.' +
          '<b><br>Understand Core Testing Skills:</b> Small List Ahead.' +
          '<b><br>Understand Varied Testing Methods:</b> Understand black-box, and white-box, as well as testing methods, testing level, testing concepts- Re Testing- Regression testing, Performance testing, API testing, Unit testing' +
          '<b><br>Study Testing Tools:</b> Familiarize yourself with tools such as Selenium web driver with Java, TestNG, JMeter, and Postman, Jira for bug reporting with the help of which the testing process can be automated. ' +
          '<b><br>Practice Testing Case Writing:</b> Learn how to write neat, precise, and complete test cases.' +
          '<br>•  Hands-on Experience<br> • Test Your Project/Website yourself <br>•  Contribute to   Projects - Give your time for the free and open-source Software project to develop a real-world ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'perspective.<br>   •  Online Courses - Join online classes or certifications for further development in testing skills',

        desc3: 'Networking and Relationships:',
        description5:
          '<br><b>Attend Industry Events:</b> Attend conferences, meetups, and webinars to connect with professionals in the field.' +
          '<br><b> Leverage Online Communities:</b> Engage within online forums and discussion groups to connect with fellow testers and get guidance.' +
          '<br><b> Build a Professional Network:</b> Connect with people on LinkedIn and other platforms to increase reach.' +
          '<br><br><b> Prepare for Interviews</b><br>' +
          '<br><b> Research Common Interview Questions:</b> Common questions on testing methodologies, tools, and how you can do your work better in the future with a good career plan.' +
          '<br><b> Practice Mock Interviews:</b> Practice mock interviews with friends and/or mentors to sharpen your interview skills.' +
          '<br><b> Emphasize Your Transferable Skills:</b> Explain how your prior experience can be used in Software Testing.',

        heading6: 'Conclusion',
        description6:
          'You can transition your career from non-IT background to IT as aSoftware Testing with the right amount of dedication and approach. Follow these steps for a successful career in this dynamic field and continue learning throughout your journey. Remember, every journey starts with a single step, and with perseverance, you can overcome all the challenges that may come in a way.',
        periods: '12 Periods',
        imgUrl: 'assets/img/blog/content_images/Soft_test.svg',
        imgUrl2: 'assets/img/blog/content_images/9.jpg',
        imgUrl3: 'assets/img/blog/content_images/10.jpg',
        imgUrl4: 'assets/img/blog/content_images/11.jpg',
        imgUrl5: 'assets/img/blog/content_images/12.jpg',
        imgUrl6: 'assets/img/blog/content_images/softwaretrans.svg',
      },

      {
        id: '2',
        title: 'Why I Choose a Career in UX/UI Design',
        descux: 'Introduction:',
        description7:
          'Have you ever wanted to know what it is like to be a UX/UI designer? Such an exciting world requires the creation of digital experiences that so happen to be both functional and delightful. Below, I will share my journey with you, explaining why I chose to pursue a career in UX/UI design.',

        title2: 'My Passion for Problem-Solving',
        description8:
          'From a rather young age, I found myself intrigued by solving problems. Whether it was finding out how to patch up my bike or coming up with creative workarounds for everyday challenges, I enjoyed the sense of accomplishment that comes with beating obstacles. It was in the realm of UX/UI design that I could channel all this into a relevant, fulfilling profession.',

        title3: 'Desire to Make an Impact',
        description9:
          'With the opinion that technology can improve human life, I am moving closer to my own potential as a UX/UI designer - going beyond just making problems solved by creating products and services that also bring positive experiences to people. Whether it is the design of an easy website or a mobile app that will change lives, it is very rewarding to think that my work makes life and the world better.',

        title4: 'The Meld of Creativity and Technology',
        description10:
          'UX/UI design is an incredible blend of creativity and technical skills. I appreciate the art of being able to combine my aesthetic sensibilities with my knowledge of technology. It allows me to create innovative and aesthetically beautiful designs that can make a spark for true innovation. And there is no better thrill than striking a delicate balance between aesthetic requirements and functionality with the overall user experience not only enjoyable but effective too.',

        title5: 'A Booming Industry with Unlimited Opportunities',
        description11:
          'The field of UX/UI design is one that is always in change-new technologies and trends are emerging constantly. Such an open door towards infinite opportunities for further development. Whether it is specializing in mobile app design, web design, or user research-there is always something new to learn and discover.',

        title6: 'Conclusion',
        description12:
          'I really have enjoyed my journey so far into UX/UI design. This is a career that usually allows me to combine my passion for problem-solving, creativity, and technology. If you love creating meaningful digital experiences and want to make a positive impact on the world, then you should definitely consider a career in UX/UI design. Do you have any specific questions you might want to ask in regard to UX/UI design, or possibly the set of skills and education required to enter the field?',
        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/blog/content_images/uxdesign.svg',
        imgUrl2: 'assets/img/blog/content_images/1.jpg',
        imgUrl3: 'assets/img/blog/content_images/2.jpg',
        imgUrl4: 'assets/img/blog/content_images/3.jpg',
        imgUrl5: 'assets/img/blog/content_images/4.jpg',
        imgUrl6: 'assets/img/blog/content_images/uxcareer.svg',
      },
      {
        id: '3',
        title: 'Why I Became a Web Developer',
        descux: 'My Journey for the Discerning:',
        description:
          'I am always being asked by people why I opted to be a developer, and my answer lies in my desire to design digital solutions with an elegance that other people would appreciate. I do not believe that it was because of the allure of technology but because of more valuable reasons: to create value for those who appreciate the finer things in life. also, I am a little bit interested in design and I know different languages like HTML, CSS, and Java',

        title7: 'A Lifelong Obsession with Technology',
        description13:
          'It was something about technology, I guess. From when I was young, I found myself fascinated by the seemingly endless possibilities and aspects that technology presented. It could be as simple as tinkering with one of the early personal computers or sometimes even exploring the intricacies of programming languages and how they worked beneath the surface. Understanding all of this brought me immense joy. This fascination gave way to a deep-rooted passion that would eventually shape my professional path.',

        title8: 'A Commitment to Excellence',
        description14:
          'Thus, the motivation to produce things that not only function flawlessly but also possess a touch of sophistication and refinement emerged as my desire to develop products. For me, technology represents an enriched part of our life that makes experiences more fluid than difficult. As an effective developer, I strive to create intuitive and innovative solutions that can further digital life for the ones expecting the best.',

        title9: 'Customized Solutions for the Discerning',
        description15:
          'The high-rich client is so discerning in nature that they have high standards and uncompromising tastes. I have always been intrigued by the challenge of creating digital experiences that allow meeting their unique needs and expectations. Whether it is designing a bespoke website, one that resonates with one personal brand, or developing a mobile app that streamlines their busy lifestyle, I am committed to delivering solutions that exceed their expectations.',

        title10: 'A Passion for Problem-Solving',
        description16:
          'Being a developer is the most rewarding experience as it gives the opportunity to solve complex problems; I thrive on intellectual stimulation, from breaking down problems into manageable components and coming up with creative solutions. My problem-solving mindset allows me to approach every project with a fresh perspective so I can ensure the final result will not only be functional but innovative, too.',

        title11: 'Collaboration Strategy',
        description17:
          'A collaborative approach is what makes a development project successful, I think. Closeness with clients and designers and other members of the team allows me to understand more about their goals and align well with the final product. Collaboration has helped me have sound relationships with my clients, and results were always excellent.',

        title12: 'Continuous Learning',
        description18:
          'Technology is always evolving, and developers must be up to date on the latest trends and innovations. I have an appreciation for a lifetime of learning and aggressively seek out experiences that expand my knowledge and skills. This commitment allows me to provide leadership with cutting-edge, innovative solutions that respond to continuously changing demand in the high-rich market.  It was almost a decision to be a developer because of passion for technology and the commitment to excellence that I have, with a desire for creating value for the discerning clientele. Bringing these capabilities together with an understanding of their needs leads me to deliver not only effective digital solutions but also functional, aesthetically pleasing ones.',

        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/blog/content_images/webdev.svg',
        imgUrl2: 'assets/img/blog/content_images/5.jpg',
        imgUrl3: 'assets/img/blog/content_images/6.jpg',
        imgUrl4: 'assets/img/blog/content_images/7.jpg',
        imgUrl5: 'assets/img/blog/content_images/8.jpg',
        imgUrl6: 'assets/img/blog/content_images/webcareer.svg',
      },
      {
        id: '4',
        title: 'Java Development',
        heading: 'Step-by-Step Development Career in Java',
        description1:
          'Java is still a sure-fire front in the pantheon of software development and represents a stunningly flexible platform for building everything: enterprise applications to mobile apps. If you want to start out as a career for your Java development, this is a very comprehensive guide for you:',

        Liheading1: '1. Mastery of Fundamentals',
        L1:
          '<b>• Mastering Core Java:</b> Get a solid grasp of the basics of Java programming, syntax, data types, control structures, ' +
          '\u00A0\u00A0\u00A0\u00A0' +
          'OOP, and exception handling.',
        L2:
          '<b>• Practice Encouraged:</b> Work on the mantra of solving as many coding problems, working on your own projects, and ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'involving yourself in online coding communities.',

        Liheading2: '2. Advanced Topics',
        L3:
          '<b>• Collections Framework:</b> Learn how to master the usage of Java collections framework, such as classes such as ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'Array List, LinkedList, HashMap, HashSet, etc., for efficient data management.',
        L4: '<b>• Generics:</b> Know the correct usage of generics so that there is greater reusability and type safety in your code.',
        L5:
          '<b>• Multithreading:</b> One should learn to write concurrent and multithreaded applications for performance ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'enhancement.',
        L6: '<b>• JDBC</b> Get acclimated to Java Database Connectivity (JDBC) to use databases.',

        Liheading3: '3. Beyond the Basics in Frameworks and Tools',
        L7:
          '<b>• Spring Framework:</b> Master Spring environment, including Spring Boot, Spring MVC, and Spring Data, for enterprise ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'software development.',
        L8: '<b>• Hibernate:</b> Learn OR Mapping with Hibernate to make database interactions easier to handle.',
        L9: '<b>• Build Tools:</b> Maven or Gradle, those are really helpful for dependency management and also for automated build.',
        L10: '<b>• Version Control:</b> Git, for effective management of source code and collaboration with others.',

        Liheading4: '4. Practical Experience',
        L11: '<b>• Personal Projects:</b> Try to build your projects based on what you have learned using Java, add to your portfolio.',
        L12: '<b>• Internships:</b> Intern for part-time jobs or do Java development to get hands-on experience.',
        L13: '<b>• Open-Source Contributions:</b> Contribute in the open-source Java projects and work with other expert developers.',

        Liheading5: '5. Get Up To Date',
        L14: '<b>• Trends:</b> Keep yourself updated about the latest releases of Java, frameworks, and technologies.',
        L15: '<b>• Blogs and Articles:</b> Be updated with the industry news and the best practices.',
        L16: '<b>• Conferences and Workshops:</b> Network with other Java developers and learn from experts.',

        Liheading6: '6. Have a Striking Portfolio',
        L17: '<b>• Portfolio:</b> Make use of such sites as GitHub or put your projects on your site to put them out there.',
        L18: '<b>• Blogging:</b> Post some technical blogs to try and convey your thoughts and ideas.',
        L19:
          '<b>• Certification:</b> You can choose to take some of the Java certifications, for example, Oracle Certified Associate and ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'Oracle Certified Professional, so that you can prove that you actually know your way around it.',

        Liheading7: '7. Network and Collaborate',
        L20:
          '<b>• Online Communities:</b> Join forums, discussion groups, and communities where folks coding typically will post ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'around.',
        L21:
          '<b>• Meetups:</b> Join local Java developer meetups by attending this kind of setup, you get to see many like-minded ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'developers and get in touch with them.',
        L22:
          '<b>• Participate in open-source projects:</b> Direct collaboration with senior developers and gain knowledge from their ' +
          '\u00A0\u00A0\u00A0\u00A0\u00A0' +
          'experience.',
        L23: '<b>If you keep these activities and repeat them as practice, then gradually you will rise to a good and successful level of Java development and develop an asset to the software industry.</b>',

        periods: '12 Periods',
        difficulty: 'Intermediate',
        instructor: 'Jane Doe',
        students: '8000+',
        feedback: '4.7',
        imgUrl: 'assets/img/blog/content_images/java.jpg',
        imgUrl2: 'assets/img/blog/content_images/13.jpg',
        imgUrl3: 'assets/img/blog/content_images/14.jpg',
        imgUrl4: 'assets/img/blog/content_images/15.jpg',
        imgUrl5: 'assets/img/blog/content_images/16.jpg',
        imgUrl6: 'assets/img/blog/content_images/javac.png',
      },

      // Add more mock course data as needed
    ];

    return blogs.find((blog) => blog.id === id);
  }
}
