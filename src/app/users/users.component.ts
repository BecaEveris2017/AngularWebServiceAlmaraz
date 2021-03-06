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
  userId = 0;
  user:IUsers;

  constructor(private postService:PostService) { 
    postService.getUsers().subscribe(users=>{
      this.users = users;
      this.user = this.users[this.userId];
    });
  }

  ngOnInit() {
  }

  nextUser() {
    console.log(this.users.length);
    this.userId++;
    this.user = this.users[this.userId];
  }

  backUser() {
    this.userId--;
    this.user = this.users[this.userId];
  }
}

interface IUsers {
  id:string;
  name:string;
  username:string;
  email:string;
  address:address;
  phone:string;
  website:string;
  company:ICompany;
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

interface ICompany {
  name:string;
  catchPhrase:string;
  bs:string;
}
