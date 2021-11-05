import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  storeArray: any = [{ "id": "1", "storename": "The Grocery Supermarket", "address": "67-73 Cochranes Road, Moorabbin, Victoria 3189, Australia" }, { "id": "2", "storename": "The Grocery Supermarket", "address": "67-73 Cochranes Road, Moorabbin, Victoria 3189, Australia" }, { "id": "3", "storename": "The Grocery Supermarket", "address": "67-73 Cochranes Road, Moorabbin, Victoria 3189, Australia" }, { "id": "4", "storename": "The Grocery Supermarket", "address": "67-73 Cochranes Road, Moorabbin, Victoria 3189, Australia" }];

  constructor() { }
  getStoreList() {
    return this.storeArray
  }
}
