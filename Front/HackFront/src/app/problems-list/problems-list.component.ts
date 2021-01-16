import { Component, OnInit } from '@angular/core';
import { Problem } from '../interfaces/problem';
import { Tag } from '../interfaces/tag';
import { Solution } from '../interfaces/solution';
import { ProblemsServiceService } from '../problems-service.service';
 @Component({
  selector: 'app-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.css']
})
export class ProblemsListComponent implements OnInit {

  tags:Tag[]=[];
   problems: Problem[] = [];
  filteredProblems:Problem[]=[];
  searchValue:string='';
  constructor(public problemsService:ProblemsServiceService) { }
  
  ngOnInit(): void {
    this.problemsService.getProblems().subscribe(x=>{this.problems=x; this.searchChanged();});
    this.problemsService.getTags().subscribe(x=>{this.tags=x;console.log(x)});
  }
  searchChanged(){
    this.filteredProblems=this.problems.filter(x=>!this.searchValue||x.title.toLowerCase().includes(this.searchValue.toLowerCase())||x.content.toLowerCase().includes(this.searchValue.toLowerCase())||x.tags.some(x=>x.name.toLowerCase().includes(this.searchValue.toLowerCase())));
  }
  tagClicked(tag:Tag){
    this.searchValue=tag.name;
    this.searchChanged();
  }


}
