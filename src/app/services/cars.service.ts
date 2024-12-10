import { Injectable } from '@angular/core';
import { CarModel } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getAll(){
    return ELEMENT_DATA;
  }
  delete(id:number)
  {
    ELEMENT_DATA.splice(ELEMENT_DATA.findIndex(e => e.id === id),1);
  }
}
const ELEMENT_DATA: CarModel[] = [
   {id:1,brand:"Mersedes-Benz",model:"CLS 500", category:"Coupe",engine:"5.0 I", year:new Date("2008.4.3"),  color:"Black", price:20000 ,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__-r6vv4uv134WiDgmFNkX5vY2mjAdeVMbA&s"},
   {id:2,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:3,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:4,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:5,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:6,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:7,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:8,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:9,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:10,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:11,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:12,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:13,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:14,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:15,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:16,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
   {id:17,brand:"Mersedes-Benz",model:"E 350", category:"Sedan",engine:"3.0 TDI", year:new Date("2012.6.2"),  color:"Green",price:18000 ,image:"https://cdn3.riastatic.com/photosnew/auto/photo/mercedes-benz_e-class__567612155fx.jpg"},
  ];
