import { Login } from '../../infrastructure/common/_models/login/login';
import { AuthService } from '../../infrastructure/common/_services/auth/Auth.service';
import { Component, OnInit } from '@angular/core';
import { ErrorTracker } from '../../infrastructure/core/error-tracker/error-tracker';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model = {};
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this._authService.login(this.model).subscribe(
      (res: Login) => {
        localStorage.setItem('token', res.token);
      },
      (err) => {
        console.log(err);
      },
      () => { }
    );
  }

  loggedIn() {

    const token = localStorage.getItem('token');
    return !!token;
  }

  loggOut() {

    localStorage.removeItem('token');

  }
}
