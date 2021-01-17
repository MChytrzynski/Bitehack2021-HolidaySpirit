import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HackFront';
  constructor(private router:Router){}
  navigateToHome(){
      this.router.navigateByUrl('/problems')
  }
  navigateToNewIssue(){
    this.router.navigateByUrl('/newproblem')

  }
  navigateToProblems(){
    this.router.navigateByUrl('/problems')

  }
}
