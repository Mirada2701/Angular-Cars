import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarModel } from '../models/cars';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cars: CarModel[] =[]


  constructor(private carsServeice: CarsService) {
    
  }

  ngOnInit(): void {
    this.carsServeice.getAll().subscribe(data => this.cars = data)
  }
}
