import { Injectable } from '@angular/core';
import { BrandModel, CarModel, CategoryModel, EditCarModel, EngineModel } from '../models/cars';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api = "https://localhost:7271/api/Cars/";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CarModel[]>{
    return this.http.get<CarModel[]>(api + "all");
  }
  delete(id:number): Observable<any>
  {
    return this.http.delete(api + id);
  }
  create(model: CarModel): Observable<any> {
    return this.http.post(api, model);
  }
  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(api + "categories");
  }
  getBrands(): Observable<BrandModel[]> {
    return this.http.get<BrandModel[]>(api + "brands");
  }
  getEngines(): Observable<EngineModel[]> {
    return this.http.get<EngineModel[]>(api + "engines");
  }
  get(id:number): Observable<CarModel>{
    return this.http.get<CarModel>(api + id);
  }
  edit(model: EditCarModel): Observable<any>{
    return this.http.put(api, model)
  }
}
// const ELEMENT_DATA: CarModel[] = [
//    {id:1,brandName:"Mersedes-Benz",model:"CLS 500", categoryName:"Coupe",engineDisplay:"5.0 I", year:new Date("2008.4.3"),  color:"Black", price:20000 ,imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__-r6vv4uv134WiDgmFNkX5vY2mjAdeVMbA&s"},
//    {id:2,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:3,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:4,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:5,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:6,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:7,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:8,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:9,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:10,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:11,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:12,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:13,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:14,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:15,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:16,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//    {id:17,brandName:"Mersedes-Benz",model:"E 350", categoryName:"Sedan",engineDisplay:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,imageUrl:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
//   ];
