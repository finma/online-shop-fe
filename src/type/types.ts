/* eslint-disable @typescript-eslint/naming-convention */
export interface ProductTypes {
  category_id: number;
  created_at: string;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  slug: string;
  stock: number;
  updated_at: string;
  category?: CategoryTypes;
}

export interface PaymentTypes {
  bank_name: string;
  created_at: string;
  id: number;
  name: string;
  no_rekening: string;
  slug: string;
  type: string;
  updated_at: string;
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
