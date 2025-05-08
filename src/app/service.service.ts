import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/';

  signUp(d: User) {
    return this.http.post(`${this.url}user`, d);
  }
  login(e: string, p: string) {
    return this.http.get<User[]>(`${this.url}user?email=${e}&password=${p}`);
  }

  getUser(i: any) {
    return this.http.get<User>(`${this.url}user/${i}`);
  }
}
