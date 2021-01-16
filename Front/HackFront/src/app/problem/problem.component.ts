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
    this.route.params.subscribe(x=>console.log(x.id))
  }

}
