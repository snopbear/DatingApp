import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
// import { EmployeeService } from '../shared/services/employee.service';
// import { Employee } from '../shared/models/employee';
import * as signalR from '@aspnet/signalr';
import { HttpEventType, HttpClient } from '@angular/common/http';
import { Employee } from '../../infrastructure/shared/models/employee';
import { EmployeeService } from '../../infrastructure/shared/services/employee.service';

@Component({
  selector: 'app-CRUD',
  templateUrl: './CRUD.component.html',
  styleUrls: ['./CRUD.component.css']
})
export class CRUDComponent implements OnInit {
  @ViewChild('fileInput') fileInput;
   employee = new Employee();
  employees: Employee[];
  employeesCopy: Employee[];
  API_ENDPOINT_HUB: string;


  constructor(private _employeeService: EmployeeService , private http: HttpClient) {
    this.API_ENDPOINT_HUB = 'http://localhost:62489/employee';
   }

   ngOnInit(): void {
    const connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl(this.API_ENDPOINT_HUB, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

    connection.on('send', (data: Employee[]) => {
      console.log(data);
      this.getEmployeeAll();
    });

    connection.start()
      .then(() => {
        console.log('Contected');
        this.getEmployeeAll();
      });



    }
  getEmployeeAll() {
    this._employeeService.get().subscribe(
      (data: Employee[]) => this.employees = data,
      (err) => console.log(err.friendlyMessage)
    );
  }

  addFile(): void {
    const fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        const fileToUpload = fi.files[0];
        this._employeeService
            .upload(fileToUpload)
            .subscribe(res => {
                console.log(res);
            });
    }
}
    // #region add
    save(): void {
      // tslint:disable-next-line:no-debugger
      debugger;
      this._employeeService.add( this.employee).subscribe(
        (data: Employee) => {
          console.log('Insert');
         },
        (err) => {
          console.log('Insert');
        },
        () => {
          this.getEmployeeAll();
        });
    }
    // #endregion
}
