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
      stock: 0,
      quantity: 0
    },
    {
      id: '2',
      description: 'Air force 2',
      price: 225,
      stock: 8,
      quantity: 0
    },
    {
      id: '3',
      description: 'Air force 3',
      price: 225,
      stock: 0,
      quantity: 0
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  quantity(item: Shoe, action: string, event? ){
    if(action === 'sum'){
      if(item.quantity < item.stock){
        item.quantity++;
      }
    }
    if(action === 'res'){
      if(item.quantity > 0){
        item.quantity--;
      }
    }
    if(action === 'inp'){
      event.preventDefault();
      const val = event.target.value; 
      console.log(val)
      if((val < item.stock)&&(val > 0)){
        item.quantity = val;
      }
    }
  }

}
