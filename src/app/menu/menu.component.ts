import { Component, OnInit } from '@angular/core';
import{DISH} from '../Data&dataStructure/Structures/dishStructure';
import {DishServicesService} from '../Services/dish-services.service';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes:DISH[];

  selectedDish:DISH;
  router:Routes[];
  selectingDish(dish:DISH){
    this.selectedDish=dish;


  }

  constructor(private   dishService:DishServicesService) {
   }

  ngOnInit() {

    this.dishes=this.dishService.getDishes();

  }

}
