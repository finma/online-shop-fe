import { useCallback, useEffect, useState } from "react";
import { getProducts } from "src/services/product";
import type { ProductTypes } from "src/type/types";

import { Card } from "../Card/Card";

export const Products = () => {
  const [products, setProducts] = useState<Array<ProductTypes>>([]);
  const [page, setPage] = useState(1);

  const getProductsList = useCallback(async () => {
    const res = await getProducts(page);

    setProducts(res.data.data);
  }, [page]);

  useEffect(() => {
    getProductsList();
  }, [getProductsList]);

  const handleGetProducts = async () => {
    setPage(page + 1);
    const res = await getProducts(page);
    setProducts([...products, res.data.data]);
  };

  return (
    <>
      <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-y-2 py-10 mx-auto">
        {products.flat().map((item: ProductTypes) => {
          return <Card product={item} key={item.id} />;
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
