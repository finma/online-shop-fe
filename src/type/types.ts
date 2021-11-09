/* eslint-disable @typescript-eslint/naming-convention */
export interface ProductTypes {
  id: number;
  slug: string;
  name: string;
  stock: number;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CategoryTypes {
  id: number;
  name: string;
  slug: string;
}

export interface TransactionTypes {
  id: number;
  product_id: number;
  payment_id: number;
  slug: string;
  total_item: number;
  total_price: number;
  customer: string;
  status: string;
}
