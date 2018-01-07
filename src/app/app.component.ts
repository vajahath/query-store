import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  password: string;

  constructor(private authService: AuthService) {}

  setCredentials() {
    this.authService.setCredentials(this.username, this.password);
  }
}
