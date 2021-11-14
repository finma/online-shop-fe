import { useState } from "react";
import { getProductsByCategory } from "src/services/product";
import type { ProductTypes } from "src/type/types";

import { Card } from "./Card";

interface ProductsByCategoryProps {
  products: any;
  categoryId: any;
}

export const ProductsByCategory = (props: ProductsByCategoryProps) => {
  const [page, setPage] = useState(1);
  const { products, categoryId } = props;

  const handleGetProducts = async () => {
    setPage(page + 1);
    const res = await getProductsByCategory(categoryId, page);
    products.push(res.data.data);
  };

  return (
    <>
      <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-y-2 py-10 mx-auto">
        {products.map((item: ProductTypes) => {
          return <Card product={item} key={item.slug} />;
        })}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleGetProducts}
          className=" py-2 px-6 text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg border-2 border-blue-600 transition duration-200 ease-in focus:outline-none"
        >
          Muat lebih banyak
        </button>
      </div>
    </>
  );
};
