import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request, Skill, User } from './app.component';

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

  addSkill(d: Skill) {
    return this.http.post(`${this.url}skill`, d);
  }
  getSkillListUserId(i: any) {
    return this.http.get<Skill[]>(`${this.url}skill?userid=${i}`);
  }
  deleteSkill(i: any) {
    return this.http.delete(`${this.url}skill/${i}`);
  }
  updateSkill(i: any, d: Skill) {
    return this.http.put(`${this.url}skill/${i}`, d);
  }
  getSkillList() {
    return this.http.get<Skill[]>(`${this.url}skill`);
  }
  addReq(d: Request) {
    return this.http.post(`${this.url}request`, d);
  }
}
