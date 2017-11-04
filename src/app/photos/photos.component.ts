import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers:[PostService]
})
export class PhotosComponent implements OnInit {
  photos:IPhotos[];
  idPhoto = 0;
  photo:IPhotos;

  constructor(private postService:PostService) {
    postService.getPhotos().subscribe(photos=>{
      this.photos = photos;
      this.photo = this.photos[this.idPhoto];
    });
   }

  ngOnInit() {
  }

  nextPhoto() {
    console.log(this.photos.length);
    this.idPhoto++;
    this.photo = this.photos[this.idPhoto];
  }

  backPhoto() {
    this.idPhoto--;
    this.photo = this.photos[this.idPhoto];
  }
}
interface IPhotos {
  albumId:string;
  id:string;
  title:string;
  url:string;
  thumbnailUrl:string;
}
