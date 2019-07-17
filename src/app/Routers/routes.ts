import {Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {MenuComponent} from '../menu/menu.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';

export const routes:Routes =[

    {path:'home', component:HomeComponent},
    {path:'menu', component:MenuComponent},
    {path:'contact', component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'dishdetail/:id',component:DishDetailComponent},
    {path:'',redirectTo:'/home',pathMatch:'full'}


];
