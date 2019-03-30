import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CRUDComponent } from './page/CRUD/CRUD.component';



const appRoutes: Routes = [
 { path: 'home', pathMatch: 'full', component: CRUDComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
