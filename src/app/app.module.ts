import { RegisterComponent } from './page/register/register.component';
import { HomeComponent } from './page/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CRUDComponent } from './page/CRUD/CRUD.component';
import { NavComponent } from './partial/nav/nav.component';
import { NotFoundComponent } from './partial/not-found/not-found.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
   declarations: [
      AppComponent,
      CRUDComponent,
      NotFoundComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
