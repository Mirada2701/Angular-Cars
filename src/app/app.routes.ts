import { Routes } from '@angular/router';
import { CarsTableComponent } from './cars-table/cars-table.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'list', component: CarsTableComponent },
    { path: 'about', component: AboutComponent },
];
