import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Angulartics2Module } from 'angulartics2';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { ShoppingCartComponent } from '@app/components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from '@app/components/shopping-cart/filters/filters.component';
import { ProductListComponent } from '@app/components/shopping-cart/product-list/product-list.component';
import { CartComponent } from '@app/components/shopping-cart/cart/cart.component';
import { CartItemComponent } from '@app/components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from '@app/components/shopping-cart/product-list/product-item/product-item.component';
import { NotFoundComponent } from '@app/components/not-found/not-found.component';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, Angulartics2Module, HomeRoutingModule],
  declarations: [
    HomeComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    NotFoundComponent,
  ],
})
export class HomeModule {}
