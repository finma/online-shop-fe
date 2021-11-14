import { useCallback, useEffect, useState } from "react";
import { getCategories } from "src/services/category";
import type { CategoryTypes } from "src/type/types";

import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  const [categories, setCategories] = useState([]);

  const getCategoriesList = useCallback(async () => {
    const res = await getCategories();

    setCategories(res.data);
  }, []);

  useEffect(() => {
    getCategoriesList();
  }, [getCategoriesList]);

  return (
    <div className="pb-6 w-full">
      <h1 className="mb-8 text-6xl font-bold text-center text-gray-800">Kategori</h1>
      <div className="flex justify-center space-x-8">
        {categories.map((item: CategoryTypes) => {
          return <CategoryCard label={item.name} key={item.slug} slug={item.slug} />;
        })}
      </div>
    </div>
  );
};
