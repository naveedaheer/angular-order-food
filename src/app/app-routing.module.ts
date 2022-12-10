import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'menu-items', loadChildren: () => import('./menu-items/menu-items.module').then(m => m.MenuItemsModule) }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
