import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from 'src/app/shared/services/food-menu.service';

interface Item {
  availableQty: number;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: Item[] = []

  constructor(private menuService: FoodMenuService) { }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(res => {
      this.items = res
    })
  }

}
