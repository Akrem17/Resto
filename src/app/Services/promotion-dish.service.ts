import { Injectable } from '@angular/core';
import { PROMOTION } from '../Data&dataStructure/Structures/promotionsStructure';
import { Promotion } from '../Data&dataStructure/Data/promotionData';

@Injectable({
  providedIn: 'root'
})


export class promotionService {


    getDishes():PROMOTION[]{
      return Promotion;
    }
    getFeaturedDish():PROMOTION{
      return Promotion.filter((promo)=>(promo.featured))[0];
    }
    getDish(id):PROMOTION{
      return Promotion.filter((promo)=>(promo.id===id))[0];
    }
  constructor() { }
}
