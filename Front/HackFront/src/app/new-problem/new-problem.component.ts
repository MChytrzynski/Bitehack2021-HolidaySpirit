import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Problem } from '../interfaces/problem';
import { Tag } from '../interfaces/tag';
import { ProblemsServiceService } from '../problems-service.service';
import * as ace from "ace-builds";

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  @ViewChild("editor") private editor: ElementRef<HTMLElement>;

  constructor(private problemsService:ProblemsServiceService) { }
  problemModel:Problem={solution:{},tags:[]} as any
  tags:Tag[]=[];
  selectedTags:string[]=[];
  
  ngOnInit(): void {
    this.problemsService.getTags().subscribe(x=>this.tags=x);
  }
  submit(){
    const aceEditor = ace.edit(this.editor.nativeElement);
    this.problemModel.solution.code=aceEditor.getValue();
    this.selectedTags.forEach(x=>this.problemModel.tags.push({name:x}));
    this.problemsService.addProblem(this.problemModel).subscribe(x=>console.log(x));
  }
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/javascript');
    aceEditor.setValue('//Kod rozwiązania');
  }

}
