import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MenuRoutingModule } from './menu-items.routing';

@NgModule({
  declarations: [
    ItemDetailsComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuItemsModule { }
