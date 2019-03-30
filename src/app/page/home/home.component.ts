import { ValuesService } from './../../infrastructure/common/_services/values/values.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  constructor(private _valuesService: ValuesService) { }

  ngOnInit() {
    this.getValues();
  }
  registerToggle() {
    this.registerMode = true;
  }

  getValues() {
    this._valuesService.get().subscribe(
      (res: any) => {
        this.values = res;
      },
      (err) => {
        console.log(err);
      },
    );
  }


  cancleRegisterMode(registerMode: boolean){
this.registerMode = registerMode;
  }
}
