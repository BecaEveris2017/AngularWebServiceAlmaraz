import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers:[PostService]
})
export class CommentsComponent implements OnInit {
  comments:IComments[];

  constructor(private postService:PostService) { 
    postService.getComments().subscribe(comments=>{
      console.log(comments);
      this.comments = comments;
    });
  }

  ngOnInit() {
    
  }

}

interface IComments {
  postId:string;
  id:string;
  name:string;
  email:string;
  body:string;
}
