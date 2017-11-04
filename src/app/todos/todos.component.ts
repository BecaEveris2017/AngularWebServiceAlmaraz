import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers:[PostService]
})
export class TodosComponent implements OnInit {
  toDos:IToDos[];

  constructor(private postService:PostService) { 
    postService.getToDos().subscribe(toDos=>{
      this.toDos = toDos;
    });
  }

  ngOnInit() {
  }

}

interface IToDos {
  userId:string;
  id:string;
  title:string;
  completed:boolean;
}
