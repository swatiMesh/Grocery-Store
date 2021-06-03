import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  storeArray: any = [{ "storename": "The Grocery Supermarket", "address": "67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia" }, { "storename": "The Grocery Supermarket", "address": "67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia" }, { "storename": "The Grocery Supermarket", "address": "67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia" }, { "storename": "The Grocery Supermarket", "address": "67-73 Cochranes Road, Moorabbin, Victoria 3189,Australia" }];
  
  constructor() { }
  getStoreList() {
    return this.storeArray
  }
}
