import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './register/register.component';
import { ProblemsListComponent } from './problems-list/problems-list.component';
import { ProblemsListItemComponent } from './problems-list-item/problems-list-item.component';
import { ProblemComponent } from './problem/problem.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';

const appRoutes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'problems', component: ProblemsListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticationComponent,
    RegisterComponent,
    ProblemsListComponent,
    ProblemsListItemComponent,
    ProblemComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
