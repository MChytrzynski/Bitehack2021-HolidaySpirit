import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from '../interfaces/problem';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  problem:Problem;
  constructor(private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.route.params.subscribe(x=>console.log(x.id))
  }

}
