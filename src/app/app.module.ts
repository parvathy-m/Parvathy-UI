import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './component/layout/index/index.component';
import { HomeComponent } from './component/pages/home/home.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { ParellaxDirective } from './directives/parellax.directive';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';
import { TestimonialsComponent } from './component/pages/testimonials/testimonials.component';
import { SkillsComponent } from './component/pages/skills/skills.component';
import { NewsComponent } from './component/pages/news/news.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { FooterComponent } from './component/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    HeaderComponent,
    ParellaxDirective,
    ScrollRevealDirective,
    TestimonialsComponent,
    SkillsComponent,
    NewsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
