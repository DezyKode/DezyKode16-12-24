import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'course-detail/:id', component: CoursesDetailsComponent },
  { path: 'service-detail/:id', component: ServiceDetailsComponent },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'blog-detail/:id', component: BlogDetailsComponent },
  { path: 'ui-ux/:id', component: UiUxComponent },
  { path: 'enquiry', component: EnquiryFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
