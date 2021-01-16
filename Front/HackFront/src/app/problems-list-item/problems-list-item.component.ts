import { Component, Input, OnInit } from '@angular/core';
import { Problem } from '../interfaces/problem';

@Component({
  selector: 'app-problems-list-item',
  templateUrl: './problems-list-item.component.html',
  styleUrls: ['./problems-list-item.component.css']
})

export class ProblemsListItemComponent implements OnInit {
  @Input() problem: Problem;
  constructor() { }

  ngOnInit(): void {
  }

}
