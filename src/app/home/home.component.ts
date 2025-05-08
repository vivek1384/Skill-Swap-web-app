import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HowComponent } from "../how/how.component";
import { PopularComponent } from "../popular/popular.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { FaqsComponent } from "../faqs/faqs.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HowComponent, PopularComponent, TestimonialsComponent, FaqsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
