import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'skill';
}

export class User {
  id: any;
  name: string;
  email: string;
  password: string;
  constructor() {
    this.id = undefined;
    this.name = '';
    this.email = '';
    this.password = '';
  }
}

export class Skill {
  id: any;
  name: string;
  credit: number;
  userid: any;
  username: string;
  constructor() {
    this.id = undefined;
    this.name = '';
    this.credit = 0;
    this.userid = undefined;
    this.username = '';
  }
}
