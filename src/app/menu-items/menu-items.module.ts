import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MenuRoutingModule } from './menu-items.routing';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    ItemDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuItemsModule { }
