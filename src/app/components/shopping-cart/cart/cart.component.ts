import { Component, OnInit } from '@angular/core';
import { CartItem } from '@app/models/cart-item';
import { Product } from '@app/models/product';
import { CartService } from '@app/services/cart.service';
import { MessengerService } from '@app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartTotal = 0;

  cartItems: any = [];

  constructor(private msgServices: MessengerService, private cartService: CartService) {}

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription() {
    this.msgServices.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item: { qty: number; price: number }) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
