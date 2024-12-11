import { Routes } from '@angular/router';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CarFormComponent } from './car-form/product-form.component';

export const routes: Routes = [
    { path: 'list', component: CarsTableComponent },
    { path: 'about', component: AboutComponent },
    { path: '', component: HomeComponent },
    { path: 'create', component:  CarFormComponent},
];
