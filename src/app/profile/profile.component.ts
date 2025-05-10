import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ServiceService } from '../service.service';
import { Request, Skill, User } from '../app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    this.getReqCome();
    this.getReqSent();
  }
  service = inject(ServiceService);

  requestListSent: Request[] = [];
  requestListCome: Request[] = [];
  requestList3: Skill[] = [];
  id = localStorage.getItem('userid');
  skillOpen = false;
  fromName: string = '';
  icon = faXmark;
  request: Request = new Request();
  skill: Skill = new Skill();
  from: User = new User();
  to: User = new User();

  getReqSent() {
    this.service.reqSent(this.id).subscribe((Res) => {
      if (Res) {
        this.requestListSent = Res;
      }
    });
  }

  getReqCome() {
    this.service.reqCome(this.id).subscribe((res) => {
      if (res) {
        this.requestListCome = res;
      }
    });
  }

  deleteBySender(id: any) {
    let isDel = confirm('Are you sure?');
    if (isDel) {
      this.service.deleteReq(id).subscribe((res) => {
        if (res) {
          this.getReqSent();
        }
      });
    }
  }

  acceptWithSkill(item: Request, name: string) {
    this.fromName = name;
    this.skillOpen = true;
    this.request = item;
    this.service.getSkillListUserId(item.fromid).subscribe((res) => {
      if (res) {
        this.requestList3 = res;
        console.log(res);
      }
    });
  }

  close() {
    this.fromName = '';
    this.skillOpen = false;
    this.requestList3 = [];
  }

  onContinue(item: Skill) {
    this.skill = item;
    console.log(this.skill);
    console.log(this.request);
    let diff = 0;
    diff = this.request.skillRequire.credit - this.skill.credit;
    if (diff > 0) {
      let isCon = confirm(
        `You will receive ${
          this.request.skillRequire.credit - this.skill.credit
        } credits, are you sure to accept it?`
      );
      if (isCon) {
        this.service.getUser(this.request.fromid).subscribe((res) => {
          if (res) {
            this.from = res;
          }
        });
        this.service.getUser(this.request.sendtoid).subscribe((res) => {
          if (res) {
            this.to = res;
          }
        });
        this.request.skillOffer = this.skill;
        this.request.accept = 'Accepted';
        this.service
          .editRequest(this.request.id, this.request)
          .subscribe((res) => {
            if (res) {
              this.from.credits = this.from.credits - diff;
              this.to.credits = this.to.credits + diff;
              this.service
                .editUser(this.from.id, this.from)
                .subscribe((res) => {
                  if (res) {
                    this.service
                      .editUser(this.to.id, this.to)
                      .subscribe((Res) => {
                        if (Res) {
                          console.log('Completed.');
                        }
                      });
                  }
                });
            }
          });
      }
    } else if (diff < 0) {
      let isCon = confirm(`You have to pay ${-diff} credits, Are you sure?`);
      if (isCon) {
        this.service.getUser(this.request.fromid).subscribe((res) => {
          if (res) {
            this.from = res;
          }
        });
        this.service.getUser(this.request.sendtoid).subscribe((res) => {
          if (res) {
            this.to = res;
          }
        });
        this.request.skillOffer = this.skill;
        this.request.accept = 'Accepted';
        this.service
          .editRequest(this.request.id, this.request)
          .subscribe((res) => {
            if (res) {
              this.from.credits = this.from.credits - diff;
              this.to.credits = this.to.credits + diff;
              this.service
                .editUser(this.from.id, this.from)
                .subscribe((res) => {
                  if (res) {
                    this.service
                      .editUser(this.to.id, this.to)
                      .subscribe((Res) => {
                        if (Res) {
                          console.log('Completed.');
                        }
                      });
                  }
                });
            }
          });
      }
    } else {
      let isCon = confirm(
        `Skill credits match. Accept without exchange of credits?`
      );
      if (isCon) {
        this.request.skillOffer = this.skill;
        this.request.accept = 'Accepted';
        this.service
          .editRequest(this.request.id, this.request)
          .subscribe((res) => {
            if (res) {
              this.getReqCome();
            }
          });
      }
    }
    setTimeout(() => {
      this.fromName = '';
      this.skillOpen = false;
      this.requestList3 = [];
    }, 100);
  }
}
