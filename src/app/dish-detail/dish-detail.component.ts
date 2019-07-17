import { Component, OnInit } from '@angular/core';
import{DISH} from '../Data&dataStructure/Structures/dishStructure';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DishServicesService} from '../Services/dish-services.service';
@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
dish:DISH;
  constructor(
              private route:ActivatedRoute,
               private location:Location,
               private dishservice:DishServicesService) { }

  ngOnInit() {
    this.dish=this.dishservice.getDish(this.route.snapshot.params['id']);

  }
  previousPage():void{
    this.location.back();
  }

}
