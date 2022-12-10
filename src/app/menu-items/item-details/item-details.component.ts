import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/shared/models/menuItem';
import { FoodMenuService } from 'src/app/shared/services/food-menu.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  public itemDetails: any;

  constructor(private menuService: FoodMenuService, private router: Router) { }

  ngOnInit(): void {
    this.menuService.data.subscribe((res: Item) => {
      if (res) {
        this.itemDetails = res;
      } else {
        this.router.navigate(['/'])
      }
    })
  }

}
