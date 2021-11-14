import type { ProductTypes } from "src/type/types";

import { Card } from "./Card";

export const Products = (props: { products: Array<ProductTypes> }) => {
  return (
    <div className="pb-12 my-12 w-full">
      <h1 className="mb-8 text-6xl font-bold text-center text-gray-800">Produk</h1>
      <div className="flex flex-wrap justify-center space-x-8">
        {props.products.map((item: ProductTypes) => {
          return <Card product={item} key={item.id} />;
        })}
        {props.products.map((item: ProductTypes) => {
          return <Card product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};
