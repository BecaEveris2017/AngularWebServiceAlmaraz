import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {
  posts:IPost[];

  constructor(private postService:PostService) { 
    postService.getPosts().subscribe(posts=>{
      this.posts = posts;
    });
  }

  ngOnInit() {
  }

}
interface IPost {
  userId:string;
  id:string;
  title:string;
  body:string;
}

