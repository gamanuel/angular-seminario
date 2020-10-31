import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Shoe } from "../../models/shoe";
import { ShoeCartService } from "../../services/shoe-cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  cartList$: Observable<Shoe[]>;
  total = 0;

  constructor(private shoeCartService: ShoeCartService) {
    this.cartList$ = shoeCartService.cartList.asObservable();
  }

  ngOnInit(): void {}
}
