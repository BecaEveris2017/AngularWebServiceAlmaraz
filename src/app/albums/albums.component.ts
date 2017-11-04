import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  providers:[PostService]
})
export class AlbumsComponent implements OnInit {
  albums:IAlbums[];

  constructor(private postService:PostService) { 
    postService.getAlmbums().subscribe(albums=>{
      this.albums = albums;
    });
  }

  ngOnInit() {
    
  }

}
interface IAlbums {
  userId:string;
  id:string;
  title:string;
}
