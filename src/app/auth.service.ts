import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  username: string;
  password: string;

  constructor() {}

  getCredentials() {
    return {
      username: this.username,
      password: this.password
    };
  }

  setCredentials(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
