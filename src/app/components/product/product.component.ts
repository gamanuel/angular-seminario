import { Component, Input, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoe';
import { ShoeCartService } from 'src/app/services/shoe-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() shoe: Shoe;
  showAlert = false;

  constructor(private shoeCartService: ShoeCartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.shoeCartService.addToCart(this.shoe);
    this.shoe.stock -= this.shoe.quantity;
    this.shoe.quantity = 0;
    this.showAlert = false;
  }

  

}
