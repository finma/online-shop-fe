/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Category } from "src/component/Category/Category";
import { ProductsByCategory } from "src/component/Products/ProductsByCategory";
import { FluidLayout } from "src/layout";
import { getProductsByCategory } from "src/services/product";

const Index: CustomNextPage = () => {
  const [products, setProducts] = useState([]);

  const router = useRouter();
  const { categoryId } = router.query;

  const getProductsByCategoryList = useCallback(async () => {
    const res = await getProductsByCategory(categoryId!);

    setProducts(res.data.data);
  }, [categoryId]);

  useEffect(() => {
    getProductsByCategoryList();
  }, [getProductsByCategoryList]);

  return (
    <>
      <Category />
      <ProductsByCategory categoryId={categoryId} products={products} />
    </>
  );
};

Index.getLayout = FluidLayout;

export default Index;
