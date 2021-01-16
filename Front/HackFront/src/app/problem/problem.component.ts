import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from '../interfaces/problem';
import { ProblemsServiceService } from '../problems-service.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  problem:Problem;
  constructor(private route:ActivatedRoute,private problemService:ProblemsServiceService) { }
  
  showSlides() {
    let i;
    const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf < HTMLElement > ;
    const dots = document.getElementsByClassName("images") as HTMLCollectionOf < HTMLElement > ;
    slides[0].style.display = "block";
   }
  openModal() {
    document.getElementById('imgModal').style.display = "block";
   }
  closeModal() {
    document.getElementById('imgModal').style.display = "none";
   }
   currentSlide() {
    this.showSlides();
   }

  ngOnInit(): void {
    this.route.params.subscribe(x=>this.problemService.getProblem(x.id).subscribe(y=>{this.problem=y;console.log(y)}));
  }

}
