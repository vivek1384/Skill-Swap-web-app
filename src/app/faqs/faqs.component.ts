import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-faqs',
  imports: [FontAwesomeModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {
  icon1 = faCommentDots;
  icon2 = faXmark;

  ans1 = false;
  ans2 = false;
  ans3 = false;
  ans4 = false;
  ans5 = false;

  open1() {
    this.ans1 = true;
    this.ans2 = false;
    this.ans3 = false;
    this.ans4 = false;
    this.ans5 = false;
  }
  open2() {
    this.ans1 = false;
    this.ans2 = true;
    this.ans3 = false;
    this.ans4 = false;
    this.ans5 = false;
  }
  open3() {
    this.ans1 = false;
    this.ans2 = false;
    this.ans3 = true;
    this.ans4 = false;
    this.ans5 = false;
  }
  open4() {
    this.ans1 = false;
    this.ans2 = false;
    this.ans3 = false;
    this.ans4 = true;
    this.ans5 = false;
  }
  open5() {
    this.ans1 = false;
    this.ans2 = false;
    this.ans3 = false;
    this.ans4 = false;
    this.ans5 = true;
  }
  close() {
    this.ans1 = false;
    this.ans2 = false;
    this.ans3 = false;
    this.ans4 = false;
    this.ans5 = false;
  }
}
