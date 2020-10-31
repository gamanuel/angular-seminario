import { Component, OnInit } from "@angular/core";
import { Shoe } from "../app/models/shoe";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  shoes: Shoe[] = [
    {
      id: "1",
      description: "Air force",
      price: 225,
      stock: 0,
      quantity: 0
    },
    {
      id: "2",
      description: "Air force 2",
      price: 225,
      stock: 8,
      quantity: 0
    },
    {
      id: "3",
      description: "Air force 3",
      price: 225,
      stock: 3,
      quantity: 0
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
