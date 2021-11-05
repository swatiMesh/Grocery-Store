import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  vegCategoryArray: any = [
    { "id": "1", "category": "Fresh Fruits", "categoryImg": "../../../assets/icons/fruits_icon.svg", "categoryDesc": "Category Description here" },
    { "id": "2","category": "Fresh Vegitables", "categoryImg": "../../../assets/icons/vegetable_icon.svg", "categoryDesc": "Category Description here" },
    { "id": "3","category": "Herbs & Seasonings", "categoryImg": "../../../assets/icons/herbs_icon.svg", "categoryDesc": "Category Description here" },
    { "id": "4","category": "Exotic Fruits & Vegitables", "categoryImg": "../../../assets/icons/exotic_icon.svg", "categoryDesc": "Category Description here" },
    { "id": "5","category": "Branded Foods", "categoryImg": "../../../assets/icons/exotic_icon.svg", "categoryDesc": "Category Description here" },
    { "id": "6","category": "Fruit Juice", "categoryImg": "../../../assets/icons/exotic_icon.svg", "categoryDesc": "Category Description here" }
  ];
  nonVegCategoryArray: any = [
    { "id": "1", "category": "Fresh Meat", "categoryImg": "../../../assets/icons/fruits_icon.svg", "categoryDesc": "Category Description here" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
