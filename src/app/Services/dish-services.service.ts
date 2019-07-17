import { Injectable } from '@angular/core';
import {DISH} from '../Data&dataStructure/Structures/dishStructure';
import {DISHES} from '../Data&dataStructure/Data/Data';
@Injectable({
  providedIn: 'root'
})


export class DishServicesService {


    getDishes():DISH[]{
      return DISHES;
    }
    getFeaturedDish():DISH{
      return DISHES.filter((dish)=>(dish.featured))[0];
    }
    getDish(id):DISH{
      return DISHES.filter((dish)=>(dish.id===id))[0];
    }
  constructor() { }
}
