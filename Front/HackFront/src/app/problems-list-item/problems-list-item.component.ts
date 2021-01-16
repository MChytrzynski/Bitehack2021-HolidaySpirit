import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Problem } from '../interfaces/problem';
import { Tag } from '../interfaces/tag';

@Component({
  selector: 'app-problems-list-item',
  templateUrl: './problems-list-item.component.html',
  styleUrls: ['./problems-list-item.component.css']
})

export class ProblemsListItemComponent implements OnInit {
  @Input() problem: Problem;
  @Output() tagClickedEvent = new EventEmitter<Tag>();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  tagClicked(tag:Tag){
    this.tagClickedEvent.emit(tag);
  }
  problemClicked(){
    this.router.navigate(['/problem', { id: this.problem.id }]);  }

}
