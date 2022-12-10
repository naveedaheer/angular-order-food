import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MenuRoutingModule } from './menu-items.routing';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ItemDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuItemsModule { }
