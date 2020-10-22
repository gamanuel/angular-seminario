import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'shoes',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    redirectTo: 'shoes',
    pathMatch: 'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
