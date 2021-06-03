import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  storeArray: any = []
  constructor(private service: CommonService) { }

  ngOnInit() {
    this.getStoreList()
  }

  getStoreList() {
    this.storeArray = this.service.getStoreList();
  }
}
