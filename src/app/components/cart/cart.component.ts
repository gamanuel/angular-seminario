import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shoe } from 'src/app/models/shoe';
import { ShoeCartService } from 'src/app/services/shoe-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$ : Observable<Shoe[]>;

  constructor(private shoeCartService: ShoeCartService) { 
    this.cartList$ = shoeCartService.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
