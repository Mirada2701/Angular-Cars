export interface CarModel {
    id: number;
    brandName:string
    model: string;
    categoryName?: string;
    engineDisplay?: string;
    year: Date;
    color: string;
    price:number;
    imageUrl: string;
    description?:string;
    quantity:number;
  }
  export interface CategoryModel {
    id: number;
    name: string;
}
export interface BrandModel {
  id: number;
  name: string;
}
export interface EngineModel {
  id: number;
  display: string;  
}
  // export interface CarResponse {
  // cars:CarModel[];
  // }
  

  