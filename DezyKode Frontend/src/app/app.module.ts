import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ServicesComponent } from './services/services.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { UiUxComponent } from './ui-ux/ui-ux.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    AboutComponent,
    CoursesComponent,
    ServicesComponent,
    SubscribeComponent,
    ContactUsComponent,
    LoginComponent,
    CoursesDetailsComponent,
    ServiceDetailsComponent,
    NotfoundComponent,
    BlogDetailsComponent,
    UiUxComponent,
    EnquiryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
