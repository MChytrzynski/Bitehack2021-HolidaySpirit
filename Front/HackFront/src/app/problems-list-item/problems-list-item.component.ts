import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }
  tagClicked(tag:Tag){
    this.tagClickedEvent.emit(tag);
  }

}
