import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Skill, User } from '../app.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-myskill',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './myskill.component.html',
  styleUrl: './myskill.component.css',
})
export class MyskillComponent implements OnInit {
  ngOnInit(): void {
    this.getUser();
    this.getSkillList();
  }

  skill: Skill = new Skill();
  skillList: Skill[] = [];
  skillList2: Skill[] = [];
  user: User = new User();

  service = inject(ServiceService);

  form = false;
  inputText = '';

  openForm() {
    this.form = true;
  }
  close() {
    this.form = false;
    this.isUpdate = false;
    this.skill = new Skill();
  }

  getUser() {
    this.service.getUser(localStorage.getItem('userid')).subscribe((res) => {
      if (res) {
        this.user = res;
      }
    });
  }
  addSkill() {
    this.skill.userid = this.user.id;
    this.skill.username = this.user.name;
    this.service.addSkill(this.skill).subscribe((res) => {
      if (res) {
        alert('Skill added.');
        this.close();
        this.getSkillList();
        this.skill = new Skill();
      }
    });
  }

  getSkillList() {
    this.service
      .getSkillListUserId(localStorage.getItem('userid'))
      .subscribe((res) => {
        if (res) {
          this.skillList = res;
          this.skillList2 = this.skillList;
        }
      });
  }

  search() {
    if (this.inputText == '') {
      this.skillList2 = this.skillList;
    } else {
      this.skillList2 = this.skillList;
      this.skillList2 = this.skillList2.filter((item) =>
        item.name.toLowerCase().includes(this.inputText.toLowerCase())
      );
      console.log(this.skillList2);
    }
  }

  deleteSkill(i: any) {
    let isDel = confirm('Are you sure?');
    if (isDel) {
      this.service.deleteSkill(i).subscribe((res) => {
        if (res) {
          this.getSkillList();
        }
      });
    }
  }

  update(item: Skill) {
    this.isUpdate = true;
    this.form = true;
    this.skill = item;
  }

  isUpdate = false;

  updateskill(i: Skill) {
    this.service.updateSkill(i.id, i).subscribe((res) => {
      if (res) {
        this.getSkillList();
        this.isUpdate = false;
        this.form = false;
      }
    });
  }
}
