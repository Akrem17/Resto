import { Component, OnInit } from '@angular/core';
import { DISH } from '../Data&dataStructure/Structures/dishStructure';
import { PROMOTION } from '../Data&dataStructure/Structures/promotionsStructure';
import { DishServicesService } from '../Services/dish-services.service';
import {promotionService} from '../Services/promotion-dish.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredDish:DISH;
  promotedDishes:PROMOTION[];
  constructor(
          private dishservice:DishServicesService,
          private promotionservice:promotionService
          ) { }

  ngOnInit() {
    this.featuredDish=this.dishservice.getFeaturedDish();
    this.promotedDishes=this.promotionservice.getDishes();
  }

}
