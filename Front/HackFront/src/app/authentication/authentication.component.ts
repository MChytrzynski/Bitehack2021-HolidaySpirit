import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemsListComponent } from '../problems-list/problems-list.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginMode:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggleLogin(){
    this.loginMode=!this.loginMode;
  }
  login(){
    this.router.navigateByUrl('/problems') 
   }
}
