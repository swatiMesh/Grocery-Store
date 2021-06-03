import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.scss']
})
export class ManagersListComponent implements OnInit {
  managerArray: any = [{"managername":"Shane Watson","role":"Manager", "storename":"The Grocery Supermarket","address":"67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia"},{"managername":"Shane Watson","role":"Manager", "storename":"The Grocery Supermarket","address":"67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia"},{"managername":"Shane Watson","role":"Manager", "storename":"The Grocery Supermarket","address":"67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia"},{"managername":"Shane Watson","role":"Manager", "storename":"The Grocery Supermarket","address":"67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia"},{"managername":"Shane Watson","role":"Manager", "storename":"The Grocery Supermarket","address":"67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia"}]
  
  constructor() { }

  ngOnInit() {
  }

}
