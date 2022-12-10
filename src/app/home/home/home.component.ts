import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from 'src/app/shared/services/food-menu.service';
import { Item } from '../../shared/models/menuItem';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[] = []

  constructor(private menuService: FoodMenuService, private router: Router) { }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(res => {
      this.items = res
    })
  }

  viewItemDetails(item: Item) {
    this.menuService.setItemDetails(item)
    this.router.navigate(['menu-items/menu-details', item.id])
  }

}
