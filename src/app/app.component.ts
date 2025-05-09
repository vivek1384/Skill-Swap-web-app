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
  credits: number;
  constructor() {
    this.id = undefined;
    this.name = '';
    this.email = '';
    this.password = '';
    this.credits = 100;
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

export class Request {
  id: any;
  from: string;
  fromid: any;
  sendto: string;
  sendtoid: any;
  skillRequire: Skill;
  skillOffer: Skill;
  credits: number;
  accept: boolean;
  constructor() {
    this.id = undefined;
    this.from = '';
    this.fromid = undefined;
    this.sendto = '';
    this.sendtoid = undefined;
    this.skillRequire = new Skill();
    this.skillOffer = new Skill();
    this.credits = 0;
    this.accept = false;
  }
}
