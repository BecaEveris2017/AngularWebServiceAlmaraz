import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[PostService]
})
export class UsersComponent implements OnInit {
  users: IUsers[];

  constructor(private postService:PostService) { 
    postService.getUsers().subscribe(users=>{
      console.log(users);
      this.users = users;
    });
  }

  ngOnInit() {
  }

}

interface IUsers {
  id:string;
  name:string;
  username:string;
  email:string;
  address:address;
}

interface address {
  street:string;
  suite:string;
  city:string;
  zipcode:string;
  geo:IGeo;
}

interface IGeo {
  lat:string;
  lng:string;
}
