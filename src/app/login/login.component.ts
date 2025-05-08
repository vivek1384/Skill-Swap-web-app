import { Component, inject } from '@angular/core';
import { User } from '../app.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private service: ServiceService) {}

  login = false;
  user: User = new User();
  router = inject(Router);

  isLogin() {
    this.login = !this.login;
  }

  signup() {
    if (this.user.name && this.user.email && this.user.password) {
      this.service.signUp(this.user).subscribe((res) => {
        if (res) {
          this.service
            .login(this.user.email, this.user.password)
            .subscribe((res) => {
              if (res.length == 1) {
                localStorage.setItem('userid', res[0].id);
                alert('Sign Up Success.');
                this.router.navigate(['home']);
              }
            });
          this.user = new User();
        }
      });
    } else {
      alert('Something is details.');
    }
  }

  loginBTN() {
    this.service.login(this.user.email, this.user.password).subscribe((res) => {
      if (res.length == 1) {
        localStorage.setItem('userid', res[0].id);
        alert('Login success.');
        this.router.navigate(['home']);
      } else if (res.length == 0) {
        alert('Email or Password is incorrect.');
      }
    });
  }
}
