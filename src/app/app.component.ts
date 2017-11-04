import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemSelected:Item;
  title:String;
  items:Item[];

  constructor() {
    this.items = [
      {id: 0, name: 'Albums'},
      {id: 1, name: 'Comments'},
      {id: 2, name: 'Photos'},
      {id: 3, name: 'Posts'},
      {id: 4, name: 'To dos'},
      {id: 5, name: 'Users'},
    ];
    this.itemSelected = this.items[0];
    this.title = this.itemSelected.name;
  }

  onSelect(item) {
    this.itemSelected = item;
    this.title = this.itemSelected.name;
  }
}

export class Item {
  id:number;
  name:String;
}
