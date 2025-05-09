import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Skill } from '../app.component';

@Component({
  selector: 'app-explore',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent {
  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$&])[a-zA-z\d@#$&]{8,}$/
        ),
      ]),
    });
  }

  userForm: any = FormGroup;

  button() {
    console.log(this.userForm.value);
  }

  skillList2: Skill[] = [];
  category: string[] = [];
}
