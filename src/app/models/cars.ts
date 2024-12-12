export interface CarModel {
    id: number;
    brandName?:string;
    brandId?:string;
    model: string;
    categoryName?: string;
    categoryId?: number;
    engineDisplay?: string;
    engineId:number;
    year: Date;
    color: string;
    price:number;
    imageUrl: string;
    description?:string;
    quantity:number;
  }

  export interface EditCarModel {
    id: number;
    name: string;
    imageUrl: string;
    description: string | null;
    price: number;
    discount: number;
    quantity: number;
    categoryId: number;
    brandId:number;
    engineId:number;
    color:string;
    year:Date;
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
  

  