import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/menuItem';

@Injectable({
  providedIn: 'root'
})

export class FoodMenuService {

  private dataSource = new BehaviorSubject<any>(null);
  data = this.dataSource.asObservable();

  constructor(private webApi: WebApiService) { }

  getMenuItems(): Observable<any> {
    return this.webApi.get<any>("/order-book/menu-items");
  }

  setItemDetails(data: Item) {
    this.dataSource.next(data);
  }

}
