import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shoe } from '../models/shoe';

@Injectable({
  providedIn: 'root'
})
export class ShoeCartService {

  private _cartList: Shoe[] = [];
  cartList: BehaviorSubject<Shoe[]> =  new BehaviorSubject([]);

  constructor() { }

  addToCart(shoe: Shoe){
    const item: Shoe = this._cartList.find( v1 => v1.id === shoe.id )
    
    if(!item){
      this._cartList.push({... shoe});
    }
    else {
      item.quantity += shoe.quantity;
    }
    
    this.cartList.next(this._cartList);
  }
}
