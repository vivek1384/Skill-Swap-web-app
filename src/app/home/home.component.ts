import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { HowComponent } from "../how/how.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
