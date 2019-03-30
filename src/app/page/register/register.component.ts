import { AuthService } from './../../infrastructure/common/_services/auth/Auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Login } from 'src/app/infrastructure/common/_models/login/login';
import { ErrorTracker } from 'src/app/infrastructure/core/error-tracker/error-tracker';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() valuesFromHome: any;
@Output() cancleRegister = new EventEmitter();
  model: any = { };
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  register(model: any){
    this._authService.login(this.model).subscribe(
      (res: Login) => {
      console.log('Successfuly');
      },
      (err: ErrorTracker) => {
        console.log(err);
      },
      () => { }
    );
  }

  cancle() {
this.cancleRegister.emit(false);
  }

}
