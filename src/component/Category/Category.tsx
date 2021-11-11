import { useCallback, useEffect, useState } from "react";
import { getCategories } from "src/services/category";
import type { CategoryTypes } from "src/type/types";

import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  const [categories, setCategories] = useState([]);

  const getCategoriesList = useCallback(async () => {
    const res = await getCategories();

    // console.log(res);
    setCategories(res.data);
  }, []);

  useEffect(() => {
    getCategoriesList();
  }, [getCategoriesList]);

  return (
    <div className="p-8 mt-2 w-full rounded-xl shadow-md">
      <h1 className="mb-8 text-2xl font-bold text-center text-gray-700">Kategori</h1>
      <div className="flex justify-center space-x-4">
        {categories.map((item: CategoryTypes) => {
          return <CategoryCard label={item.name} key={item.slug} slug={item.slug} image="1" />;
        })}
      </div>
    </div>
  );
};
