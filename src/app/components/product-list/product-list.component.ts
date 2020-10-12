import { Component, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  shoes: Shoe[] = [
    {
      id: '1',
      description: 'Air force',
      price: 225,
      stock: true,
    },
    {
      id: '2',
      description: 'Air force 2',
      price: 225,
      stock: false,
    },
    {
      id: '3',
      description: 'Air force 3',
      price: 225,
      stock: false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
