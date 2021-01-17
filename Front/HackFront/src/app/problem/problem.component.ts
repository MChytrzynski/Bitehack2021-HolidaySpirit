import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from '../interfaces/problem';
import { ProblemsServiceService } from '../problems-service.service';
import * as ace from "ace-builds";
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  @ViewChild("editor") private editor: ElementRef<HTMLElement>;

  problem:Problem;
  constructor(private route:ActivatedRoute,private problemService:ProblemsServiceService) { }
  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.setTheme('ace/theme/twilight');
  aceEditor.session.setMode('ace/mode/javascript');
  }

  ngOnInit(): void {
    this.route.params.subscribe(x=>this.problemService.getProblem(x.id).subscribe(y=>{this.dataLoaded(y)}));
  }
  dataLoaded(problem:Problem){
    this.problem=problem;
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue(problem.solution.code);

  }

}
