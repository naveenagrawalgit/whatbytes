// types.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type ProductCategory = 
  | 'all'
  | 'laptop' 
  | 'headphone'
  | 'phone'
  | 'camera'
  | 'ipad';