import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})

export class FoodMenuService {

  constructor(private webApi: WebApiService) { }

  getMenuItems(): Observable<any> {
    return this.webApi.get<any>("/order-book/menu-items");
  }

}
