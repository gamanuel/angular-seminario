import { Component, Input, OnInit } from '@angular/core';
import { Shoe } from 'src/app/models/shoe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() shoe: Shoe;
  showAlert = false;

  constructor() { }

  ngOnInit(): void {
  }

  

}
