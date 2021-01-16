import { Component, OnInit } from '@angular/core';
import { Problem } from '../interfaces/problem';
import { Tag } from '../interfaces/tag';
import { Solution } from '../interfaces/solution';
 @Component({
  selector: 'app-problems-list',
  templateUrl: './problems-list.component.html',
  styleUrls: ['./problems-list.component.css']
})
export class ProblemsListComponent implements OnInit {
  solution: Solution = {  
    content: 'testsolution',
    URLs: 'test'}
   tags: Tag[] = [
    { id: 1, name: 'C#' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'C++' },
    { id: 4, name: 'PHP' },
    { id: 5, name: 'Javascript' },
    { id: 6, name: 'AngularJS' },
    { id: 7, name: 'ReactJS' },
    { id: 8, name: 'API' },
    { id: 9, name: 'SQL' },
  ]
  tags1: Tag[] = [
    { id: 1, name: 'C#' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'C++' },
    { id: 4, name: 'PHP' },
    { id: 5, name: 'Javascript' },
  ]
   problems: Problem[] = [
    { username: 'user1', title: 'I Can\'t open visual studio', content: 'Lor ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags, solutions: this.solution, isPrivate: true, Date:'01012021'},
    { username: 'user2', title: 'How to delete win32', content: 'Lore ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags, solutions: this.solution, isPrivate: true, Date:'01012021'},
    { username: 'user3', title: 'Where is my mind?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags1, solutions: this.solution, isPrivate: true, Date:'01012021'},
    { username: 'user1', title: 'I Can\'t open visual studio', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags, solutions: this.solution, isPrivate: true, Date:'01012021'},
    { username: 'user2', title: 'How to delete win32', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags, solutions: this.solution, isPrivate: true, Date:'01012021'},
    { username: 'user3', title: 'Where is my mind?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags, solutions: this.solution, isPrivate: true, Date:'01012021'},
    { username: 'user3', title: 'Where is my mind?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags, solutions: this.solution, isPrivate: true, Date:'01012021'},
    { username: 'user3', title: 'Where is my mind?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags, solutions: this.solution, isPrivate: true, Date:'01012021'},
    { username: 'user3', title: 'Where is my mind?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare ornare malesuada. Quisque ornare eros eget ipsum dictum finibus. Maecenas interdum dui sed metus tristique, ut vestibulum lectus tincidunt. Maecenas libero nisl, dapibus id justo et, vehicula vehicula mauris. Suspendisse tempor lacus ac lacus condimentum, in vulputate lorem luctus. Mauris turpis sem, tempor vel finibus quis, fermentum eu erat. Sed et faucibus tellus. Suspendisse potenti. Ut id ornare nisi. Donec rhoncus justo ac velit dictum accumsan. Ut non massa pellentesque, facilisis orci nec, vestibulum metus. Ut arcu lectus, dictum ac aliquam non, tincidunt ac nibh. Fusce fringilla turpis quis sem vestibulum, quis scelerisque ipsum lacinia.', tags: this.tags, solutions: this.solution, isPrivate: true, Date:'01012021'},
  ];
  filteredProblems:Problem[]=[];
  searchValue:string='';
  constructor() { }
  
  ngOnInit(): void {
    this.searchChanged();
  }
  searchChanged(){
    this.filteredProblems=this.problems.filter(x=>!this.searchValue||x.title.toLowerCase().includes(this.searchValue.toLowerCase())||x.content.toLowerCase().includes(this.searchValue.toLowerCase())||x.tags.some(x=>x.name.toLowerCase().includes(this.searchValue.toLowerCase())));
  }



}
