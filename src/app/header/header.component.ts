import { Component, inject, OnInit } from '@angular/core';
import { User } from '../app.component';
import { ServiceService } from '../service.service';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.loginCheck();
    this.getUser();
  }

  isLogin = false;
  user: User = new User();
  service = inject(ServiceService);
  router = inject(Router);

  icon1 = faBars;
  icon2 = faXmark;

  loginCheck() {
    if (localStorage.getItem('userid')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  getUser() {
    this.service.getUser(localStorage.getItem('userid')).subscribe((res) => {
      if (res) {
        this.user = res;
      }
    });
  }

  logout() {
    let isDel = confirm('Are you sure?');
    if (isDel) {
      localStorage.removeItem('userid');
      this.router.navigate(['login']);
    }
  }

  isMenuOpen = false;
  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
