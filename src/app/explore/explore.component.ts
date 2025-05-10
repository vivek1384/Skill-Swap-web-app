import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Request, Skill, User } from '../app.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-explore',
  imports: [HeaderComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent implements OnInit {
  // constructor() {
  //   this.userForm = new FormGroup({
  //     name: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.pattern(
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$&])[a-zA-z\d@#$&]{8,}$/
  //       ),
  //     ]),
  //   });
  // }

  // userForm: any = FormGroup;

  // button() {
  //   console.log(this.userForm.value);
  // }

  service = inject(ServiceService);

  ngOnInit(): void {
    this.getSkillList();
    this.getUser();
  }

  getSkillList() {
    this.service.getSkillList().subscribe((res) => {
      if (res) {
        this.skillList = res;
        this.skillList2 = this.skillList;
      }
    });
  }

  skillList: Skill[] = [];
  skillList2: Skill[] = [];
  category: string[] = [];
  request: Request = new Request();
  user: User = new User();
  inputText = '';

  search() {
    this.skillList2 = this.skillList;
    this.skillList2 = this.skillList2.filter((item) =>
      item.name.toLowerCase().includes(this.inputText.toLowerCase())
    );
  }

  getUser() {
    this.service.getUser(localStorage.getItem('userid')).subscribe((res) => {
      if (res) {
        this.user = res;
      }
    });
  }

  sendReq(d: Skill) {
    if (d.userid == this.user.id) {
      alert("You can't send request yourself.");
    } else {
      this.request.from = this.user.name;
      this.request.fromid = this.user.id;
      this.request.skillRequire = d;
      this.request.sendto = d.username;
      this.request.sendtoid = d.userid;
      let isCon = confirm('Are you sure?');
      if (isCon) {
        if (d.credit <= this.user.credits) {
          this.service.addReq(this.request).subscribe((res) => {
            if (res) {
              console.log('Hello');
            }
          });
        } else {
          alert(`You should minimum have ${d.credit} credits.`);
        }
      }
    }
  }
}
