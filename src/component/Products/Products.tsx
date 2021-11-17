import type { ProductTypes } from "src/type/types";

import { Card } from "./Card";

interface ProductsProps {
  products: Array<ProductTypes>;
  search?: boolean;
  category?: string | Array<string>;
}

export const Products = (props: ProductsProps) => {
  return (
    <div className=" my-12 w-full">
      <h1 className="mb-8 text-6xl font-bold text-center text-gray-800 capitalize">
        {props.search ? `Produk ${props.category}` : "Produk"}
      </h1>
      <div className="flex flex-wrap justify-center space-x-8">
        {props.products.map((item: ProductTypes) => {
          return <Card product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
