import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-cars-table',
  imports: [MatTableModule, MatPaginatorModule,DatePipe],
  templateUrl: './cars-table.component.html',
  styleUrl: './cars-table.component.css'
})

export class CarsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'brand', 'model', 'category', 'engine', 'year', 'color','price'];
  dataSource = new MatTableDataSource<CarModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

//   constructor(private httpClient: HttpClient) {
//     httpClient.get<CarResponse>('https://dummyjson.com/products').
//       subscribe(data => this.dataSource.data = data.cars);
  
// }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface CarModel {
  id: number;
  brand:string
  model: string;
  category: string;
  engine: string;
  year: Date;
  color: string;
  price:number;
  image: string;
}

// export interface CarResponse {
// cars:CarModel[];
// }

const ELEMENT_DATA: CarModel[] = [
 {id:1,brand:"Mersedes-Benz",model:"CLS 500", category:"Coupe",engine:"5.0 I", year:new Date("2008.4.3"),  color:"Black", price:20000 ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__-r6vv4uv134WiDgmFNkX5vY2mjAdeVMbA&s"},
 {id:2,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"}
];
