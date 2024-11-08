import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CartItem } from '../../../shared/models/CartItem'; // Ensure this is imported

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'] // Corrected property
})
export class CheckoutPageComponent implements OnInit {
  cart: Cart | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe(cart => {
      this.cart = cart; // Update the local cart state whenever it changes
    });
  }

  changeQuantity(cartItem: CartItem, newQuantity: number) {
    this.cartService.changeQuantity(cartItem.food.id, newQuantity);
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }
}
