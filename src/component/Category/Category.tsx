import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  return (
    <div className="p-8 mt-2 w-full rounded-xl shadow-md">
      <h1 className="mb-8 text-2xl font-bold text-center text-gray-700">Kategori</h1>
      <div className="flex justify-center space-x-4">
        <CategoryCard label="Baju" image="1" />
        <CategoryCard label="Celana" image="1" />
        <CategoryCard label="Kemeja" image="1" />
        <CategoryCard label="Sepatu" image="1" />
      </div>
    </div>
  );
};
